import { Slot, component$ } from "@builder.io/qwik"
import { Link } from "@builder.io/qwik-city"
import { css } from "~/styled-system/css"
import { tagDescriptions } from "../routes/tags/descriptions"

export interface TagProps {
  id?: string
}

export const Tag = component$<TagProps>(({ id: ids }) => {
  const styles = css({
    rounded: "lg",
    bg: "bgSecondary",
    fontSize: "sm",
    color: "fg",
    opacity: "0.8",
    px: "1.5",
    py: "0.5",
  })

  if (ids != null) {
    return (
      <>
        {ids.split(" ").map((id) => (
          <Link href={`/tags/${id}`} class={styles} key={id}>
            {(tagDescriptions[id as keyof typeof tagDescriptions] as
              | string
              | undefined) ?? toTitleCase(id)}
            <Slot />
          </Link>
        ))}
      </>
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
