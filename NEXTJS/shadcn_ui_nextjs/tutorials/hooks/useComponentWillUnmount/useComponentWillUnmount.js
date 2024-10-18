import React from "react";
const useComponentWillUnmount = (onMountHandler) => {
  React.useEffect(() => {
    onMountHandler();
  }, []);
};
export default useComponentWillUnmount;
