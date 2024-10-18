import useComponentDidMount from "./useComponentDidMount";
const MountComponent = () => {
  useComponentDidMount(() => {
    console.log("Component Mounted");
  });
  return <div>Check your browser console</div>;
};
export default MountComponent;
