import { useState } from "react";

import { Backdrop, Toggle, ToggleCaret, Dropdown, Item } from "./styles";
const NavMenu = ({ onOpenModalClick, onOpenPopUpClick, onOpenBothClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  const handleOpenModalClick = () => {
    setIsOpen(false);
    onOpenModalClick();
  };
  const handleOpenPopUpClick = () => {
    setIsOpen(false);
    onOpenPopUpClick();
  };
  const handleOpenBothClick = () => {
    setIsOpen(false);
    onOpenBothClick();
  };

  return (
    <>
      <Toggle onClick={toggle} aria-haspopup="true" aria-expanded={isOpen}>
        Open Stuff
        <ToggleCaret viewBox="0 0 320 512" width="100" title="">
          <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
        </ToggleCaret>
      </Toggle>
      {isOpen && (
        <div role="menu">
          <Dropdown>
            <Item role="menuitem" onClick={handleOpenModalClick}>
              Open Modal
            </Item>
            <Item role="menuitem" onClick={handleOpenPopUpClick}>
              Open Pop-up Ad
            </Item>
            <Item role="menuitem" onClick={handleOpenBothClick}>
              Open Both
            </Item>
          </Dropdown>
          <Backdrop />
        </div>
      )}
    </>
  );
};

export default NavMenu;
