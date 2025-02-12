import { Link } from "react-router-dom";
import styled from "styled-components";

export interface INavigateStyled {
  $customBackground?: string;
  $customColor?: string;
}

export const NavigationStyled = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
`;

export const LinkStyled = styled(Link)<INavigateStyled>`
  padding: 5px 10px;
  text-decoration: none;
  color: ${(props) => props.$customColor || "#000"};
  border-radius: 5px;
  background-color: ${(props) => props.$customBackground || "#fff"};
`;
