import React from 'react';

const InputWithLabel = ({
    id,
    value,
    type = 'text',
    onInputChange,
    isFocused,
    children,
  }) => {
    const inputRef = React.useRef();
  
    React.useEffect(() => {
      if (isFocused) {
        inputRef.current.focus();
      }
    }, [isFocused]);
  
    return (
      <>
        <label htmlFor={id} className="label">{children}</label>
        &nbsp;
        <input
          ref={inputRef}
          id={id}
          type={type}
          value={value}
          onChange={onInputChange}
          className="input"
        />
      </>
    );
  };
  
export default InputWithLabel;
  