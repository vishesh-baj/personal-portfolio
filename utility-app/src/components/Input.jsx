import React from "react";

const Input = ({ label, errors, type, placeholder, name, register }) => {
  const errorCheck = (inputName) => {
    switch (inputName) {
      case "email":
        return errors.email?.message;

      case "password":
        return errors.password?.message;

      default:
        return null;
    }
  };
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        {...register(name, { required: true })}
        name={name}
        type={type}
        placeholder={placeholder}
        className="input input-bordered"
      />
      <span className="text-rose-400">{errorCheck(name)}</span>
    </div>
  );
};

export default Input;
