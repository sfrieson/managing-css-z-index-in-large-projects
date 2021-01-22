import { Backdrop, CornerCloseButton, Dialog as StyledDialog } from "./styles";
import { colorYellow } from "../style-constants";

const Dialog = ({ children, onDismiss }) => (
  <Backdrop>
    <StyledDialog>
      <CornerCloseButton onClick={onDismiss}>
        <svg viewBox="0 0 512 512" width="30" title="window-close">
          <rect x="32" y="64" width="464" height="400" fill="#000" />
          <path
            fill={colorYellow}
            d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z"
          />
        </svg>
      </CornerCloseButton>
      {children}
    </StyledDialog>
  </Backdrop>
);

export default Dialog;
