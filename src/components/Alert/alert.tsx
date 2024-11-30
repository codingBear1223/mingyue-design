import React from "react";
import classNames from "classnames";

export type AlertType = "success" | "default" | "danger" | "warning";

export interface AlertProps {
  className?: string;
  title?: string;
  description: string;
  type?: AlertType;
  show?: boolean;
  onclick?: () => void;
}

const Alert: React.FC<AlertProps> = (props) => {
  const {
    type = "default",
    className,
    title,
    description,
    show,
    onclick,
  } = props;
  const classes = classNames("alert", className, {
    [`alert-${type}`]: type,
  });
  const pClasses = classNames("p", {
    [`p-${type}`]: type,
  });
  const overlayClasses = classNames("overlay", className);
  if (description && title) {
    return (
      <div id="alertOverlay" className={overlayClasses}>
        <div id="alertBox" className={classes}>
          <span
            id="closeBtn"
            className="close-btn"
            onClick={() => {
              const alertOverlay = document.getElementById("alertOverlay");
              const alertBox = document.getElementById("alertBox");
              alertBox?.classList.add("disabled");
              alertOverlay?.classList.add("disabled");
            }}
          >
            &times;
          </span>
          <h3>{title}</h3>
          <p className={pClasses}>{description}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div id="alertOverlay" className={overlayClasses}>
        <div id="alertBox" className={classes}>
          <span
            data-testid="closeBtn"
            id="closeBtn"
            className="close-btn"
            onClick={onclick}
            // onClick={() => {
            //   const alertOverlay = document.getElementById("alertOverlay");
            //   const alertBox = document.getElementById("alertBox");
            //   alertBox?.classList.add("disabled");
            //   alertOverlay?.classList.add("disabled");
            // }}
          >
            &times;
          </span>
          <p className={pClasses}>{description}</p>
        </div>
      </div>
    );
  }
};
export default Alert;
