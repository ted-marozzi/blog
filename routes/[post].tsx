/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { marky } from "https://deno.land/x/marky@v1.1.6/mod.ts";
import { tw } from "@twind";
import { css } from "twind/css";

const globalStyles = css({
  pre: {
    "background-color": "light-grey",
  },
});
export const handler: Handlers<string> = {
  async GET(_, ctx) {
    const md = await Deno.readTextFile(
      `../blog-content/iress/${ctx.params.post}`,
    );
    const mu = marky(md);
    return ctx.render(mu);
  },
};

export default function Greet(props: PageProps) {
  const filename = props.params.post.replaceAll(".md", "");
  const title = filename[0].toUpperCase() + filename.slice(1);

  return (
    <div class={tw(globalStyles)}>
      <div class={tw`p-4 mx-auto max-w-screen-md pre:background-color:grey`}>
        <h1 class={tw`text-3xl`}>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: props.data }}></div>
      </div>
    </div>
  );
}
