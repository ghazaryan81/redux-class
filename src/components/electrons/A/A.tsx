import { FC } from "react";
import { CoreUI, CoreUIProps } from "@/components/electrons/CoreUI";

export interface AProps extends CoreUIProps {
 href?: string;
}

export const A: FC<AProps> = ({ ...props }) => <CoreUI {...props} as="a" />;
