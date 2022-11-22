import React from "react";
import { Controller } from "react-hook-form";

const Inputfield = (props) => {
  const { name, control , placeholder } = props;
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({
          field: { name, onChange, onBlur, value },
          fieldState: { invalid, isTouched, isDirty, error },
        }) => (
          <>    
            <input
              type="text"
              className="au-form__input"
              placeholder={placeholder}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              style={{ borderColor: error ? "red" : "black" }}     
            />
            <span className="errorInp">{error && !isDirty ? error.message : ""}</span>
          </>
        )}
      />
    </>
  );
};

export default Inputfield;
