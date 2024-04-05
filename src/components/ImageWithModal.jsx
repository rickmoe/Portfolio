import { clickInside, clickOutside } from "../directives/clickDirectives";
import { createSignal } from "solid-js";
import "./ImageWithModal.css";

const ImageWithModal = (props) => {
  const [modalOpen, setModalOpen] = createSignal(false);

  return (
    <>
      <img
        class="modal-on-click"
        use:clickInside={() => setModalOpen(true)}
        {...props}
      />
      <Show when={modalOpen()}>
        <div class="modal">
          <img
            use:clickOutside={() => {
              console.log("here");
              return setModalOpen(false);
            }}
            {...props}
          />
        </div>
      </Show>
    </>
  );
};

export default ImageWithModal;
