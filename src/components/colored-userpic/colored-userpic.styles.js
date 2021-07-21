import styled from "styled-components";

export const GradientCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ size }) => size || 100}px;
  height: ${({ size }) => size || 100}px;
  overflow: hidden;
  background: ${({ colors }) => `linear-gradient(to right, ${colors[0]}, ${colors[1]})`};
  padding: ${({ colorWidth }) => colorWidth || 2}px;
  border-radius: 50%;

  &:hover {
    background: ${({ hoverColors }) => `linear-gradient(to right, ${hoverColors[0]}, ${hoverColors[1]})`};
  }
`

export const ImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  padding: ${({ margin }) => margin || 2}px;
  background-color: ${({ backgroundColor }) => backgroundColor || "white"};
  overflow: hidden;
`

export const Img = styled.img`
  width:100%;
  border-radius: 50%;
`
