#!/usr/bin/env -S npx tsx

import { createWriteStream } from "node:fs"
import { writeFile } from "node:fs/promises"
import { JSDOM } from "jsdom"
import { pipeline } from "stream/promises"
import { packageDirectory } from "pkg-dir"
import ky from "ky"
import type { ReadableStream } from "node:stream/web"

async function main() {
  const images = [
    "sakubi the day it was made.png",
    "sakubi yesterday's grammar guide.png",
    "unihan test.png",
  ]

  const root = (await packageDirectory({ cwd: ".." })) ?? process.cwd()

  await Promise.all(
    images.map(async (image) => {
      const stream = (
        await ky(`https://sakubi.neocities.org/${encodeURI(image)}`)
      ).body

      if (!stream) {
        throw new Error("stream is null")
      }

      await pipeline(
        stream as ReadableStream,
        createWriteStream(`${root}/public/sage/books/sakubi/${image}`)
      )
    })
  )

  const indexHtml = await ky("https://sakubi.neocities.org/index.html").text()
  const dom = new JSDOM(indexHtml)
  const body = dom.window.document.body

  // Remove iframes
  body.querySelectorAll("iframe").forEach((node) => node.remove())
  const bodyNew = body.innerHTML
  await writeFile(`${root}/public/sage/books/sakubi/body.txt`, bodyNew, {
    encoding: "utf-8",
  })
}

console.log("run")
;(async () => {
  try {
    await main()
    console.log("done")
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
})()
