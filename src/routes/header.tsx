import { Slot, component$ } from "@builder.io/qwik"
import { Link } from "@builder.io/qwik-city"
import { css } from "~/styled-system/css"
import { styled } from "~/styled-system/jsx"

const links = [
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

const MenuLink = component$<{ href: string }>(({ href }) => (
  <Link
    key={href}
    href={href}
    class={css({
      display: "block",
      padding: "4",
      _active: { bg: "bgActive" },
      _hover: { bg: "bgActive" },
      _motionReduce: { transition: "none" },
      transition: "background-color 0.3s ease",
    })}
  >
    <Slot />
  </Link>
))

export const Header = component$(() => (
  <styled.nav
    minHeight="100%"
    bg="bgShade"
    display="flex"
    flexDirection={{ base: "row", md: "column" }}
    gap="4"
  >
    <MenuLink href="/">Home</MenuLink>
    <styled.div display={{ base: "none", md: "block" }}>
      {links.map((link) => (
        <MenuLink href={link.href} key={link.href}>
          {link.content}
        </MenuLink>
      ))}
    </styled.div>
    <styled.button
      onClick$={() => document.body.classList.toggle("dark")}
      display="block"
      padding="4"
      _active={{ bg: "bgActive" }}
      _hover={{ bg: "bgActive" }}
      width="100%"
      textAlign="left"
    >
      Theme
    </styled.button>
  </styled.nav>
))
