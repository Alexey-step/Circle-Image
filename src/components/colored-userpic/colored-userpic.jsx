import React from "react";
import { StyledImgWrapper, StyledGradientCircle, StyledImg } from "./colored-userpic.styles";

const ColoredUserpic = (props) => {
  const {
    src,
    size,
    colorWidth,
    margin,
    backgroundColor,
    colors,
    hoverColors
  } = props;

  return (
    <StyledGradientCircle size={size} colorWidth={colorWidth} colors={colors} hoverColors={hoverColors}>
      <StyledImgWrapper margin={margin} backgroundColor={backgroundColor}>
        <StyledImg src={src} alt="your image"/>
      </StyledImgWrapper>
    </StyledGradientCircle>
    )
}

export default ColoredUserpic;
