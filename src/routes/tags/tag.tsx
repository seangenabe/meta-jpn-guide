import { Slot, component$ } from "@builder.io/qwik"
import { Link } from "@builder.io/qwik-city"

export interface TagProps {
  id: string
}

export const Tag = component$<TagProps>(({ id }) => (
  <Link href={`/tags/${id}`}>
    <Slot />
  </Link>
))
