import React from "react";
import styled from "styled-components";

export interface IMarginerProps {
  margin: number | string;
  direction?: "horizontal" | "vertical";
}

const HorizontalMargin = styled.span<IMarginerProps>`
  display: flex;
  min-width: ${({ margin }) =>
    typeof margin === "string" ? margin : `${margin}px`};
`;

const VerticalMargin = styled.span<IMarginerProps>`
  display: flex;
  min-height: ${({ margin }) =>
    typeof margin === "string" ? margin : `${margin}px`};
`;

function Marginer({ margin, direction = "horizontal" }: IMarginerProps) {
  if (direction === "horizontal") return <HorizontalMargin margin={margin} direction={direction} />;
  return <VerticalMargin margin={margin} direction={direction} />;
}

export { Marginer };
