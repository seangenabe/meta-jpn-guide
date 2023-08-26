import { Slot, component$ } from "@builder.io/qwik"
import { Link } from "@builder.io/qwik-city"
import { css } from "~/styled-system/css"
import { tagDescriptions } from "../routes/tags/descriptions"

export interface TagProps {
  id?: string
}

export const Tag = component$<TagProps>(({ id }) => {
  const styles = css({
    rounded: "lg",
    bg: "bgSecondary",
    fontSize: "sm",
    color: "fg",
    opacity: "0.8",
    px: "1.5",
    py: "0.5",
  })

  if (id != null) {
    return (
      <Link href={`/tags/${id}`} class={styles}>
        {(tagDescriptions[id as keyof typeof tagDescriptions] as
          | string
          | undefined) ?? toTitleCase(id)}
      </Link>
    )
  }

  return (
    <span class={styles}>
      <Slot />
    </span>
  )
})

function toTitleCase(s: string) {
  return s
    .toLowerCase()
    .replace(/(?:^|\s|-)\S/g, (x) => x.toUpperCase())
    .replaceAll("-", " ")
}
