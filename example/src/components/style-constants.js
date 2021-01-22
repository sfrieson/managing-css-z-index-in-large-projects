// Z-index values
const base = 0;
const above = 1; // use this for all values above the base
const below = -1; // and this for all values below the base

// Page Layout
export const zLayoutNavigation = above + base;
export const zLayoutFooter = above + base;
export const zLayoutModal = above + zLayoutNavigation;
export const zLayoutPopUpAd = above + zLayoutModal;

// NavMenu
export const zNavMenuBackdrop = below + base;
export const zNavMenuPopover = above + base;
export const zNavMenuToggle = above + zNavMenuPopover;

// Colors
export const colorDarkGray = "#131E30";
export const colorYellow = "#FDED00";
