import styled from "styled-components";
import {
  colorDarkGray,
  colorYellow,
  zLayoutNavigation,
  zLayoutFooter,
  zLayoutModal,
  zLayoutPopUpAd,
} from "../style-constants";

export const Header = styled.header`
  background-color: ${colorDarkGray};
  display: flex;
  color: #fff;
  padding: 2rem;

  & svg {
    margin-right: 1rem;
  }
`;

export const Nav = styled.nav`
  background-color: ${colorDarkGray};
  color: #fff;
  padding: 1rem 1.5rem;
  position: sticky;
  top: 0;
  z-index: ${zLayoutNavigation};
`;

export const Footer = styled.footer`
  background-color: ${colorYellow};
  bottom: 0;
  padding: 1rem 2rem;
  position: sticky;
  z-index: ${zLayoutFooter};
`;

export const ModalRoot = styled.div`
  position: relative;
  z-index: ${zLayoutModal};
`;

export const PopUpRoot = styled.div`
  position: relative;
  z-index: ${zLayoutPopUpAd};
`;
