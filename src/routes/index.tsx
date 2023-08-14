import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <section>
      <h1>The Meta Japanese Language Resource Guide</h1>
      <section>
        <h2>General list of lists of resources</h2>
        <p>Other lists of resources to help on the way</p>
      </section>
      <section>
        <h2>Prerequisites</h2>
      </section>
      <section>
        <h2>The Adventurer</h2>
        <ul>
          <li>
            <div>The Japanese script</div>
            <ul>
              <li>The kana</li>
              <li>Introduction to kanji</li>
            </ul>
          </li>
        </ul>
      </section>
      <section>
        <h2>Grammar</h2>
      </section>
      <div>
        <section>
          <h2>The Sage</h2>
          <p>The sage resources</p>
        </section>
        <section>
          <h2>The Runner</h2>
          <p>The runner resources</p>
        </section>
        <section>
          <h2>The Talker</h2>
          <p>The talker resources</p>
        </section>
      </div>
      <section>
        <h2>Supplementary resources</h2>
        <ul>
          <li>Dictionaries</li>
        </ul>
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
