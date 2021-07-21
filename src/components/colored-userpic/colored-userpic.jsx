import React from "react";
import * as Styled from "./colored-userpic.styles";

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
    <Styled.GradientCircle size={size} colorWidth={colorWidth} colors={colors} hoverColors={hoverColors}>
      <Styled.ImgWrapper margin={margin} backgroundColor={backgroundColor}>
        <Styled.Img src={src} alt="your image"/>
      </Styled.ImgWrapper>
    </Styled.GradientCircle>
    )
}

export default ColoredUserpic;
