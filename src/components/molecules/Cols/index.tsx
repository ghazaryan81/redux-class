import { memo, FC } from "react";
import { Div, CoreUIProps } from "@/components/electrons";

export interface ColsProps extends CoreUIProps {
 rowProps?: JSX.Element;
}

export const Cols: FC<ColsProps> = memo(
 ({ as: Elemen = "section", children, rowProps, ...props }) => {
  return (
   <Elemen {...props}>
    <Div {...rowProps}>{children}</Div>
   </Elemen>
  );
 },
);
