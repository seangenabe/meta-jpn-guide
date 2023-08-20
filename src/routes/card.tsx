import { Slot, component$ } from "@builder.io/qwik"
import { Link } from "@builder.io/qwik-city"
import { styled } from "~/styled-system/jsx"
import type { HTMLStyledProps } from "~/styled-system/types/jsx"

const StyledLink = styled(Link)

export const Card = component$(
  (props: HTMLStyledProps<"section"> & { title: string; href: string }) => {
    const { title, href, ...rootProps } = props
    return (
      <StyledLink href={href} color={{ base: "black", _dark: "white" }}>
        <styled.section rounded="lg" {...rootProps} p="4">
          <styled.h2 m="0" borderStyle="none" textAlign="center">
            {title}
          </styled.h2>
          <Slot />
        </styled.section>
      </StyledLink>
    )
  }
)
