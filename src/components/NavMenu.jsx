import { For, Show, createEffect, createSignal, onCleanup } from "solid-js";
import { A } from "@solidjs/router";
import useProlongBoolean from "../hooks/useProlong";
// import { clickOutside } from "../directives/clickDirectives";
import pages from "../pages";
import "./NavMenu.css";

const Navbar = (props) => {
  // Create a delayed open to show nav while fading out
  const prolongedOpen = useProlongBoolean(props.open, 250);

  return (
    // TODO: Revisit after fixing interaction with MenuIcon
    // <nav use:clickOutside={props.closeNav}>
    <nav>
      <Show when={prolongedOpen()}>
        <For each={pages}>
          {(page) => (
            <A
              classList={{ "fade-out": !props.open() }}
              href={page.route}
              onClick={props.closeNav}
            >
              {page.label}
            </A>
          )}
        </For>
      </Show>
    </nav>
  );
};

export default Navbar;
