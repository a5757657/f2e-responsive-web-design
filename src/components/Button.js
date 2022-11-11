import React from "react";
import styled, { keyframes } from "styled-components";
import { colors } from "../styles/global";
import arrow from "../asset/Img/arrow.svg";

const colorFilled = keyframes`
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
`;

export const Btn = styled.button`
  width: 288px;
  height: 44px;
  background: linear-gradient(to right, black 50%, white 50%);
  color: ${colors.Blue300};
  background-size: 400% 400%;
  background-position: right bottom;
  transition: all 1s ease;
  border: none;
  position: relative;

  &:active {
    color: ${colors.Yellow300};
  }
  &:disabled {
    opacity: 50%;
  }

  &:hover {
    background-position: left bottom;
    color: ${colors.Grayscale0};
    /* animation: ${colorFilled} 3s ease forwards;
    -webkit-animation: ${colorFilled} 3s ease forwards; */
  }
`;

const Button = () => {
  return <div>Button</div>;
};

export default Button;
