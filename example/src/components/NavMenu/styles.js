import styled from "styled-components";

import {
  colorDarkGray,
  colorYellow,
  zNavMenuBackdrop,
  zNavMenuPopover,
  zNavMenuToggle,
} from "../style-constants";
export const Toggle = styled.button`
  border: 2px solid transparent;
  border-bottom: none;
  border-radius: 3px;
  background: transparent;
  color: #fff;
  font-size: inherit;
  padding: 0.25em 0.5em;
  position: relative;
  transition: background 100ms ease-out;
  vertical-align: middle;
  z-index: ${zNavMenuToggle};

  &:hover {
    background: ${colorYellow};
    color: ${colorDarkGray};
  }

  &:hover > svg {
    fill: ${colorDarkGray};
  }

  &[aria-expanded="true"] {
    border-color: #fff;
    border-radius: 3px 3px 0 0;
  }
`;

export const ToggleCaret = styled.svg`
  fill: ${colorYellow};
  height: 1em;
  margin-left: 0.25ch;
  transform: translateY(-0.1em);
  vertical-align: middle;
  width: 1em;
`;

export const Dropdown = styled.div`
  background-color: #fff;
  border: 2px solid ${colorDarkGray} 4px solid ${colorYellow};
  border-radius: 0 3px 3px 3px;
  color: ${colorDarkGray};
  padding: 0.5rem 0;
  position: absolute;
  width: 300px;
  z-index: ${zNavMenuPopover};
`;

export const Item = styled.button`
  background: none;
  border: none;
  font-size: inherit;
  padding: 0.5em 1rem;
  text-align: left;
  transition: background-color 100ms ease-out;
  width: 100%;

  &:hover {
    background-color: ${colorYellow};
  }
`;

export const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: ${zNavMenuBackdrop};

  @supports (backdrop-filter: blur(5px)) {
    background-color: rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(3px);
  }
`;
