import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  d: string;
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
}

export const SvgComponent = ({
  d,
  fill = 'black',
  height = 200,
  stroke = 'black',
  strokeWidth = 2,
  width = 200,
}: Props) => {
  return (
    <Svg width={width} height={height}>
      <Path d={d} fill={fill} stroke={stroke} strokeWidth={strokeWidth} />
    </Svg>
  );
};
