import { Slot, component$ } from "@builder.io/qwik"
import { Link } from "@builder.io/qwik-city"
import { styled } from "~/styled-system/jsx"

export interface TagProps {
  id: string
}

const StyledLink = styled(Link)

export const Tag = component$<TagProps>(({ id }) => (
  <StyledLink
    href={`/tags/${id}`}
    rounded="lg"
    bg="bgSecondary"
    fontSize="sm"
    color="fg"
    opacity="0.8"
    px="1.5"
    py="0.5"
  >
    <Slot />
  </StyledLink>
))
