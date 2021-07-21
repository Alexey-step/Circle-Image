import styled from "styled-components";

export const GradientCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.size || 100}px;
  height: ${(props) => props.size || 100}px;
  overflow: hidden;
  background: ${(props) => `linear-gradient(to right, ${props.colors[0]}, ${props.colors[1]})`};
  padding: ${(props) => props.colorWidth || 5}px;
  border-radius: 50%;

  &:hover {
    background: ${(props) => `linear-gradient(to right, ${props.hoverColors[0]}, ${props.hoverColors[1]})`};
  }
`

export const ImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  padding: ${(props) => props.margin || 4}px;
  background-color: ${(props) => props.backgroundColor || 4};
  overflow: hidden;
`

export const Img = styled.img`
  width:100%;
  border-radius: 50%;
`
