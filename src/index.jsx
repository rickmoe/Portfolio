/* @refresh reload */
import { For, render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";
// import { defineConfig } from "@solidjs/start/config";
import pages from "./pages";
import App from "./App";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

// export default defineConfig({
//   server: {
//     prerender: {
//       crawlLinks: true,
//     },
//   },
// });

render(
  () => (
    <Router root={App}>
      <For each={pages}>
        {(page) => (
          <Route
            path={page.route + (page["optional-params"] ?? "")}
            component={page.component}
          />
        )}
      </For>
    </Router>
  ),
  root
);
