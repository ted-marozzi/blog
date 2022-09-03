import { IS_BROWSER } from "$fresh/runtime.ts";
import { apply, Configuration, setup, tw } from "twind";
export * from "twind";
export const config: Configuration = {
  darkMode: "class",
  mode: "strict",
  preflight: (preflight) => ({
    ...preflight,
    h1: {
      color: "dodgerblue",
      "font-size": "xx-large",
    },
    h2: {
      color: "dodgerblue",
      "font-size": "x-large",
    },
    h3: {
      "font-size": "large",
    },
    body: apply`text-white bg-black`,
    pre: {
      "background-color": "#202020",
      overflow: "auto",
      "-ms-overflow-style": "none" /* IE and Edge */,
      "scrollbar-width": "none" /* Firefox */,
    },
    "pre::-webkit-scrollbar": {
      display: "none",
    },
  }),
};
if (IS_BROWSER) setup(config);

// Global Page Theme, every page component should have this at the top level
export const pt = () => tw`p-4 mx-auto max-w-screen-md`;
