import { For, Show, createEffect, createSignal, onCleanup } from "solid-js";
import { Portal } from "solid-js/web";
import { A } from "@solidjs/router";
import NavIcon from "./NavIcon";
import useProlongBoolean from "../hooks/useProlong";
import { clickOutside } from "../directives/clickDirectives";
import pages from "../pages";
import "./Navbar.css";

const Navbar = (props) => {
  // Create a delayed open to show nav while fading out
  const prolongedOpen = useProlongBoolean(props.open, 250);

  return (
    <>
      <Portal>
        <nav use:clickOutside={() => props.setOpen(false)}>
          <NavIcon
            open={props.open}
            onClick={() => props.setOpen(!props.open())}
          />
          <Show when={prolongedOpen()}>
            <For each={pages}>
              {(page) => (
                <A
                  classList={{ "fade-out": !props.open() }}
                  href={page.route}
                  onClick={() => props.setOpen(false)}
                >
                  {page.label}
                </A>
              )}
            </For>
          </Show>
        </nav>
      </Portal>
    </>
  );
};

export default Navbar;
