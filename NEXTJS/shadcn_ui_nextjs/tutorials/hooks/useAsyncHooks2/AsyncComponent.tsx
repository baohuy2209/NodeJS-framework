/* eslint-disable @typescript-eslint/no-unused-expressions */
import useAsync from "./useAsync";
function AsyncComp() {
  const { loading, error, value } = useAsync(() => {
    return new Promise((resolve, reject) => {
      const success = true;
      setTimeout(() => {
        success ? resolve("Hi") : reject(new Error("Error"));
      }, 1000);
    });
  });
  return (
    <div>
      <div>Loading: {loading.toString()}</div>
      {error && <div>Error: {error}</div>}
      {value && <div>Value: {value}</div>}
    </div>
  );
}
export default AsyncComp;
