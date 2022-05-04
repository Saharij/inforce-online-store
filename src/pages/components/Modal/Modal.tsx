import React, {Dispatch, SetStateAction } from "react";
import classNames from "classnames";

import "./Modal.scss";

type Props = {
  active: boolean,
  setActive: Dispatch<SetStateAction<boolean>>,
  children: React.ReactNode
}

export const Modal: React.FC<Props> = ({ active, setActive, children}) => {

  return (
    <div
      className={classNames(active ? "modal active" : "modal")}
      onClick={() => setActive(false)}
    >
      <div
        className={classNames(active ? "modal__content active" : "modal__content")}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}
