// Z-index values
const base = 0;
const above = 1; // use this for all values above the base
const below = -1; // and this for all values below the base

// Page Layout
const zLayoutNavigation = above + base;
const zLayoutFooter = above + base;
const zLayoutModal = above + zLayoutNavigation;
const zLayoutPopUpAd = above + zLayoutModal;

// NavMenu
const zNavMenuBackdrop = below + base;
const zNavMenuPopover = above + base;
const zNavMenuToggle = above + zNavMenuPopover;

// Usage ---

// Your usage will depend on what you're using for styling.
// Here is a plain JSX style example

const Nav = () => <nav style={{ zIndex: zLayoutNavigation }} />;
