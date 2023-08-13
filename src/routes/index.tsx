import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <section>
      <h1>The Meta Japanese Language Resource Guide</h1>
      <section>
        <h2>Prerequisites</h2>
      </section>
      <section>
        <h2>The Adventurer</h2>
        <p></p>
      </section>
    </section>
  );
});

export const head: DocumentHead = {
  title: "The Meta Japanese Language Resource Guide",
  meta: [
    {
      name: "description",
      content: "Learn not about Japanese but about how to learn it",
    },
  ],
};
