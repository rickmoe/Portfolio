import { clickInside, clickOutside } from "../directives/clickDirectives";
import { createSignal } from "solid-js";
import "./ImageWithModal.css";

const ImageWithModal = (props) => {
  const [modalOpen, setModalOpen] = createSignal(false);

  return (
    <>
      <img src={props.src} use:clickInside={() => setModalOpen(true)} />
      <Show when={modalOpen()}>
        <div class="modal">
          <img
            src={props.src}
            use:clickOutside={() => {
              console.log("here");
              return setModalOpen(false);
            }}
          />
        </div>
      </Show>
    </>
  );
};

export default ImageWithModal;
