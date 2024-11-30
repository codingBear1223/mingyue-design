import React from "react";
import { CSSTransition } from "react-transition-group";

type AnimationType =
  | "zoom-in-top"
  | "zoom-in-left"
  | "zoom-in-right"
  | "zoom-in-bottom";

type CSSTransitionProps = React.ComponentProps<typeof CSSTransition>;

interface TransitionProps extends Omit<CSSTransitionProps, "classNames"> {
  animation?: AnimationType;
  classNames?: string;
  wrapper?: boolean;
}

const Transition: React.FC<TransitionProps> = (props) => {
  console.log("ttt", props);
  const { animation, children, classNames, timeout, wrapper, ...restProps } =
    props;
  return (
    <CSSTransition
      classNames={classNames ? classNames : animation}
      timeout={timeout}
      {...restProps}
    >
      {wrapper ? <div>{children}</div> : children}
    </CSSTransition>
  );
};

export default Transition;
