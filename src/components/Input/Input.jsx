import React, { useId } from "react";
import './Input.css';

function Input(
  { label, divClass = {},textarea = false,  type = "text", className = {}, error = null, border= false, svg=null, ...props },
  ref
) {
  const id = useId();

  return (
    <div className={`input-container`} style={divClass}>
      {label && (
        <label className="label-text" htmlFor={id}>
          {label}
        </label>
      )}
      <div className="input-wrapper">
        <span>
          {svg}
        </span>
        {textarea ? <textarea
          type={type}
          className={`input ${svg ? 'input-padding' : ''} ${border ? 'input-bordered' : ''} ${error ? "input-error" : ""}`}
          style={className}
          ref={ref}
          {...props}
          id={id}
        /> :<input
          type={type}
          className={`input ${svg ? 'input-padding' : ''} ${border ? 'input-bordered' : ''} ${error ? "input-error" : ""}`}
          style={className}
          ref={ref}
          {...props}
          id={id}
        />}
        {error && <div className="error-text">{error}</div>}
      </div>
    </div>
  );
}

export default React.forwardRef(Input);
