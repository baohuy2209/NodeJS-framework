import React from "react";
const useComponentDidMount = (onMountHandler) => {
  React.useEffect(() => {
    onMountHandler();
  }, []);
};
export default useComponentDidMount;
