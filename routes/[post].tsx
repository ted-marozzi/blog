/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { marky } from "https://deno.land/x/marky@v1.1.6/mod.ts";
import { pt, tw } from "@twind";

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
  return (
    <div class={pt()}>
      <div>
        <div dangerouslySetInnerHTML={{ __html: props.data }}></div>
      </div>
    </div>
  );
}
