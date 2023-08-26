import { component$ } from "@builder.io/qwik"
import type { DocumentHead } from "@builder.io/qwik-city"
import { Card } from "./card"
import { VStack } from "~/styled-system/jsx"

export default component$(() => {
  return (
    <section>
      <h1>The Meta Japanese Language Resource Guide</h1>
      <VStack gap="8" my="16">
        <Card
          title="General list of lists of resources"
          bg={{ _dark: "gray.500", base: "gray.400" }}
          href="/list/"
        >
          <p>Other lists of resources to help on the way</p>
        </Card>

        <Card title="Prerequisites" bg="yellow.500" href="/prerequisites/">
          <p>Which route should I choose?</p>
        </Card>

        <Card title="The Adventurer" bg="purple.500" href="/adventurer/">
          <ul>
            <li>
              <div>The Japanese script</div>
              <ul>
                <li>The kana</li>
                <li>Introduction to kanji</li>
              </ul>
            </li>
          </ul>
        </Card>

        <Card title="The Sage" bg="green.500" href="/sage/">
          <ul>
            <li>Grammar</li>
            <li>Vocabulary</li>
          </ul>
        </Card>

        <Card title="The Runner" bg="red.500" href="/runner/">
          <ul>
            <li>Kanji without readings</li>
          </ul>
        </Card>

        <Card title="The Talker" bg="orange.500" href="/talker/">
          <ul>
            <li>Verbal communication</li>
          </ul>
        </Card>

        <Card
          title="Supplementary resources"
          bg="cyan.500"
          href="/supplementary/"
        >
          <ul>
            <li>Dictionaries</li>
          </ul>
        </Card>
      </VStack>
    </section>
  )
})

export const head: DocumentHead = {
  title: "The Meta Japanese Language Resource Guide",
  meta: [
    {
      name: "description",
      content: "Learn not about Japanese but about how to learn it",
    },
  ],
}
