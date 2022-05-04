import React, { ChangeEvent } from "react";

import "./Input.scss"

type Props = {
  name: string,
  type: string,
  value: string | number,
  placeholder: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => any,
}

export const Input: React.FC<Props> = ({ value, type, placeholder, name, onChange }) => {
  return (
    <input
      name={name}
      type={type}
      value={value}
      className="input"
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        onChange(e);
      }}
      placeholder={placeholder}
    />
  )
}
