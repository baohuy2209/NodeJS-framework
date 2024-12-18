import useAsync from "../useAsyncHook/useAsync";
const DEFAULT_OPTIONS = {
  headers: {
    "Content-Type": "application/json",
  },
};

export default function useFetch<T>(
  url: string,
  options: RequestInit = {},
  deps: any[] = []
) {
  return useAsync<T>(() => {
    return fetch(url, { ...DEFAULT_OPTIONS, ...options }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      return res.json().then((json) => Promise.reject(json));
    });
  }, deps);
}
