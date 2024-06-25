import React from "react";
import './style.css'
function TextInput ({value, onChange, name, type, placeholder, error}) {
  return (
      <div className={"text-input"}>
        <input
            value={value}
            onChange={onChange}
            name={name}
            type={type}
            placeholder={placeholder}
        />
        {
          error && (
              <p className={"error-text"}>
                {error}
              </p>
            )
        }
      </div>
  )
}

export default TextInput
