import { FC } from "react";
import { Svg, Use, CoreUIProps } from "@/components/electrons";

export interface SvgSpriteProps extends CoreUIProps {
 width?: string;
 height?: string;
 iconHash: string;
 fill?: string;
 props?: JSX.Element;
}

export const SvgSprite: FC<SvgSpriteProps> = ({
 width,
 height,
 iconHash,
 fill = "currentcolor",
 ...props
}) => {
 return (
  <Svg width={width} height={height} fill={fill} {...props}>
   <Use xlinkHref={`assets/svg/mono/sprite.svg#${iconHash}`} />
  </Svg>
 );
};
