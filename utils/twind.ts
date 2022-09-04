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
    h4: {
      "font-size": "medium",
    },
    h5: {
      "font-size": "small",
    },
    h6: {
      "font-size": "x-small",
    },
    a: {
      color: "white",
      // Accessability, make touch targets at least 48px
      "line-height": "48px",
      display: "inline-block",
    },
    body: apply`text-white bg-black`,
    pre: {
      "background-color": "#202020",
      overflow: "auto",
      /* Hide scrollbar for IE, Edge and Firefox */
      "-ms-overflow-style": "none" /* IE and Edge */,
      "scrollbar-width": "none" /* Firefox */,
    },
    /* Hide scrollbar for Chrome, Safari and Opera */
    "pre::-webkit-scrollbar": {
      display: "none",
    },
  }),
};
if (IS_BROWSER) setup(config);

// Global Page Theme, every page component should have this at the top level
export const pt = () => tw`p-4 mx-auto max-w-screen-md`;
