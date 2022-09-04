/** @jsx h */
import { h } from "preact";
import { pt, tw } from "@twind";
import Counter from "../islands/Counter.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers<Deno.DirEntry[]> = {
  async GET(_, ctx) {
    const result = [];
    for await (const dirEntry of Deno.readDir("./../blog-content/iress/")) {
      if (dirEntry.isFile && dirEntry.name.endsWith(".md")) {
        result.push(dirEntry);
      }
    }
    return ctx.render(result);
  },
};

export default function Home({ data }: PageProps<Deno.DirEntry[]>) {
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
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p class={tw`my-6`}>
        Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
        file, and refresh.
      </p>
      <Counter start={3} />
      <div>
        {data.map((dir) => <a href={`${dir.name}`}>{dir.name}</a>)}
      </div>
    </div>
  );
}
