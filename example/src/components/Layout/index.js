import { useState } from "react";

import Dialog from "../Dialog";
import NavMenu from "../NavMenu";
import { colorYellow } from "../style-constants";

import { Header, Footer, Nav, ModalRoot, PopUpRoot } from "./styles";

const Layout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const openPopUp = () => {
    setIsPopUpOpen(true);
  };
  const openBoth = () => {
    openModal();
    openPopUp();
  };

  return (
    <>
      {isPopUpOpen && (
        <PopUpRoot>
          <Dialog onDismiss={() => setIsPopUpOpen(false)}>
            This is the pop up!!!
          </Dialog>
        </PopUpRoot>
      )}
      {isModalOpen && (
        <ModalRoot>
          <Dialog onDismiss={() => setIsModalOpen(false)}>
            This is the modal!!!
          </Dialog>
        </ModalRoot>
      )}
      <Header>
        <svg
          viewBox="0 0 512 512"
          width="100"
          title="layer-group"
          fill={colorYellow}
        >
          <path d="M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z" />
        </svg>
        <h1>Managing CSS Z-Index in Large Projects&nbsp;Demo</h1>
      </Header>
      <Nav>
        <NavMenu
          onOpenModalClick={openModal}
          onOpenPopUpClick={openPopUp}
          onOpenBothClick={openBoth}
        />
      </Nav>
      <main>
        <h2>Filler text</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          hendrerit in orci quis consequat. Suspendisse facilisis faucibus
          aliquam. In rhoncus risus at tellus auctor, id faucibus erat pharetra.
          Nunc gravida in ligula non molestie. Donec scelerisque tellus vitae
          velit condimentum, nec volutpat libero fringilla. In ac nibh felis.
          Proin sit amet massa urna. Maecenas a nibh vitae nisi commodo gravida
          at sed ex. Ut mollis nisl vel eros suscipit fringilla. Vestibulum enim
          sem, eleifend ut est in, tincidunt dignissim nunc. Ut iaculis leo
          malesuada enim luctus aliquet. Pellentesque ex dui, rutrum vel lectus
          et, posuere consequat erat. Mauris non posuere ligula.
        </p>
        <p>
          Sed eget lacinia tortor. Etiam id cursus sem. Aliquam sit amet nibh
          egestas, feugiat mauris nec, accumsan nulla. Nunc at orci sit amet leo
          imperdiet convallis. Integer vitae risus ex. Suspendisse potenti.
          Nullam dictum mi at ipsum efficitur bibendum. Praesent nisi sem,
          euismod at velit non, gravida vestibulum ligula.
        </p>
        <p>
          Ut dolor dui, interdum et urna ac, pretium suscipit eros. Ut mattis
          dui et lorem pretium, in interdum est fringilla. Morbi mollis
          consectetur est ut porttitor. Mauris a porttitor neque. Curabitur
          sagittis et ex ac rhoncus. Aliquam erat volutpat. Proin faucibus augue
          eros, at interdum metus tincidunt non. Curabitur ut nulla interdum
          urna pellentesque volutpat. Quisque aliquet lobortis nunc. Cras
          blandit ac felis sed blandit. Fusce pharetra diam sit amet lorem
          dictum interdum. Mauris ullamcorper neque eget ante elementum, sed
          mollis neque tempor. Fusce tincidunt, nibh ac bibendum aliquet, urna
          turpis vehicula lacus, in condimentum orci mauris id enim. Suspendisse
          et tortor tempus, condimentum ex sit amet, suscipit mauris. Nullam
          nulla neque, consectetur quis lacus sit amet, maximus accumsan est.
          Fusce ultrices libero id augue iaculis, sed feugiat odio condimentum.
        </p>
        <p>
          Nam ac varius mauris. Mauris et pulvinar tellus. Mauris condimentum
          quis nunc ac semper. Cras nibh lacus, iaculis pulvinar rutrum id,
          bibendum a ipsum. Quisque ut viverra risus. Suspendisse efficitur sit
          amet massa sit amet efficitur. Aenean justo odio, ornare quis
          efficitur vitae, dictum at nisl. Suspendisse laoreet purus quis lacus
          cursus tincidunt. Duis eu auctor nibh. Orci varius natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse
          potenti. Donec vel dictum est.
        </p>
      </main>
      <Footer>This is the footer content.</Footer>
    </>
  );
};

export default Layout;
