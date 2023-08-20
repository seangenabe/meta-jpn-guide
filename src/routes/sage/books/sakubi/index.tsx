import { component$ } from "@builder.io/qwik"
import { routeLoader$ } from "@builder.io/qwik-city"
import { readFile } from "node:fs/promises"
import { packageDirectory } from "pkg-dir"
import { styled } from "~/styled-system/jsx"
import { container } from "~/styled-system/patterns"

export const useSakubiBody = routeLoader$(async () => {
  const root = await packageDirectory()
  const body = await readFile(`${root}/public/sage/books/sakubi/body.txt`, {
    encoding: "utf-8",
  })

  return { body }
})

export default component$(() => {
  const sakubiBodySignal = useSakubiBody()

  return (
    <section>
      <h1>Sakubi</h1>
      <p>
        <a href="https://sakubi.neocities.org">Original source</a>
      </p>
      <section>
        <h2>License</h2>
        <p>
          昨日 Sakubi: Yesterday's Grammar Guide has been released under the{" "}
          <a href="https://creativecommons.org/share-your-work/public-domain/cc0/">
            CC0
          </a>
          &ndash;equivalent to a public domain dedication.
        </p>
        <styled.div
          dangerouslySetInnerHTML={sakubiBodySignal.value.body}
          maxWidth="60em"
          mx="auto"
        />
      </section>
    </section>
  )
})
