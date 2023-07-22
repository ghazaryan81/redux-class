import { memo, ReactNode, ElementType, HTMLAttributes, FC, ComponentPropsWithoutRef } from "react";

export interface CoreUIProps extends HTMLAttributes<HTMLElement> {
 as?: ElementType;
 forwardRef?: HTMLElement;
 type?: string;
 props?: JSX.Element;
}

export const CoreUI: FC<CoreUIProps> = memo(
 ({ as: Element = "div", forwardRef, children, type, ...props }) => {
  const typeButton = Element === "button" && !type ? Element : type;
  const typeInput = Element === "input" && !type ? "text" : type;

  const attrs = {
   type: type || typeButton || typeInput,
   ...props,
  };

  return !forwardRef ? (
   <Element {...attrs}>{children}</Element>
  ) : (
   <Element {...attrs} ref={forwardRef}>
    {children}
   </Element>
  );
 },
);
