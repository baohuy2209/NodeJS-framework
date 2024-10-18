import useComponentWillUnmount from "./useComponentWillUnmount";
const UnmountComponent = () => {
  useComponentWillUnmount(() => {
    console.log("Component will unmount");
  });
  return <div>Check your browser console</div>;
};
export default UnmountComponent;
