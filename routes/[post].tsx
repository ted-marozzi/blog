/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { marky } from "https://deno.land/x/marky@v1.1.6/mod.ts";
import { pt, tw } from "@twind";
import { Head } from "$fresh/runtime.ts";

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
      <Head>
        <title>Blog moments</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="My blog" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content="Ted Marozzi" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div>
        <div dangerouslySetInnerHTML={{ __html: props.data }}></div>
      </div>
    </div>
  );
}
