import styled, { css } from "styled-components";

export const sharedButtonStyles = css`
  padding: 10px 40px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  background-color: ${props => props.theme.elements};
  color: ${props => props.theme.fg};
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.2s ease-in-out;
`;