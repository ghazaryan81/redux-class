import { FC } from "react";
import { CoreUI, CoreUIProps } from "@/components/electrons/CoreUI";

export interface ImgProps extends CoreUIProps {}

export const Img: FC<ImgProps> = ({ ...props }) => <CoreUI {...props} as="img" />;
