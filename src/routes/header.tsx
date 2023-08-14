import { component$ } from "@builder.io/qwik"
import { Link } from "@builder.io/qwik-city"
import { css } from "~/styled-system/css"

const links = [
  {
    href: "/",
    content: "Home",
  },
  {
    href: "/list",
    content: "List",
  },
  {
    href: "/prerequisites",
    content: "Prerequisites",
  },
  {
    href: "/adventurer",
    content: "Adventurer",
  },
  {
    href: "/grammar",
    content: "Grammar",
  },
  {
    href: "/sage",
    content: "Sage",
  },
  {
    href: "/runner",
    content: "Runner",
  },
  {
    href: "/talker",
    content: "Talker",
  },
  {
    href: "/supplementary",
    content: "Supplementary",
  },
]

export const Header = component$(() => (
  <nav>
    {links.map(({ href, content }) => (
      <Link
        key={href}
        href={href}
        class={css({ display: "block", padding: "4" })}
      >
        {content}
      </Link>
    ))}
  </nav>
))
