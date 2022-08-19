import React from "react";

const Checkbox = React.forwardRef(({ indeterminate, ...rest }, ref) => {
  const defaultRef = React.useRef();
  const resolvedRef = ref || defaultRef;

  React.useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);

  return (
    <>
      <input
        className="checkbox checkbox-secondary"
        type="checkbox"
        ref={resolvedRef}
        {...rest}
      />
    </>
  );
});

export default Checkbox;
