import useAsync from "../useAsync/useAsync";
export default function useScript(url) {
  return useAsync(() => {
    const script = document.createElement("script");
    script.src = url;
    return new Promise((resolve, reject) => {
      script.addEventListener("load", resolve);
      script.addEventListener("error", reject);
      document.body.appendChild(script);
    });
  }, [url]);
}
