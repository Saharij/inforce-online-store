import React from "react";

import "./Button.scss"

type Props = {
  type: "submit" | "button",
  content: string,
  isDisabled: boolean,
  onClick: (e: React.FormEvent) => void,
}

export const Button: React.FC<Props> = ({ content, onClick, type, isDisabled=false }) => {
  return (
    <button
      type={type}
      className="button"
      onClick={onClick}
      disabled={isDisabled}
    >
      {content}
    </button>
  )
}
