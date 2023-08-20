import { component$ } from "@builder.io/qwik"
import { styled } from "~/styled-system/jsx"

// kana column row input Hepburn Kunrei-shiki IPA
const hiragana50Raw = `
あ._.A.a.a.a.a
い._.I.i.i.i.i
う._.U.u.u.u.ɯ
え._.E.e.e.e.e
お._.O.o.o.o.o
か.K.A.ka.ka.ka.ka
き.K.I.ki.ki.ki.ki
く.K.U.ku.ku.ku.kɯ
け.K.E.ke.ke.ke.ke
こ.K.O.ko.ko.ko.ko
さ.S.A.sa.sa.sa.sa
し.S.I.si.shi.si.ɕi
す.S.U.su.su.su.sɯ
せ.S.E.se.se.se.se
そ.S.O.so.so.so.so
た.T.A.ta.ta.ta.ta
ち.T.I.ti.chi.ti.tɕi
つ.T.U.tu.tsu.tu.tsɯ
て.T.E.te.te.te.te
と.T.O.to.to.to.to
な.N.A.na.na.na.na
に.N.I.ni.ni.ni.ɲi
ぬ.N.U.nu.nu.nu.nɯ
ね.N.E.ne.ne.ne.ne
の.N.O.no.no.no.no
は.H.A.ha.ha.ha.ha
ひ.H.I.hi.hi.hi.çi
ふ.H.U.fu.fu.hu.ɸɯ
へ.H.E.he.he.he.he
ほ.H.O.ho.ho.ho.ho
ま.M.A.ma.ma.ma.ma
み.M.I.mi.mi.mi.mi
む.M.U.mu.mu.mu.mɯ
め.M.E.me.me.me.me
も.M.O.mo.mo.mo.mo
や.Y.A.ya.ya.ya.ja
ゆ.Y.U.yu.yu.yu.jɯ
よ.Y.O.yo.yo.yo.jo
ら.R.A.ra.ra.ra.ra
り.R.I.ri.ri.ri.ri
る.R.U.ru.ru.ru.rɯ
れ.R.E.re.re.re.re
ろ.R.O.ro.ro.ro.ro
わ.W.A.wa.wa.wa.wa
を.W.O.wo.wo.o.o
ん.X.O.n.n.n.ɴ m n ɲ ŋ ɰ̃
`

const hiragana50 = hiragana50Raw
  .trim()
  .split("\n")
  .map((line) => {
    const [character, column, row, input, hepburn, kr, ipa] = line.split(".")
    return { character, column, row, input, hepburn, kr, ipa }
  })

export const Hiragana = component$(() => {
  return (
    <styled.div
      display="grid"
      gridTemplateColumns="[_] auto [K] auto [S] auto [T] auto [N] auto [H] auto [M] auto [Y] auto [R] auto [W] auto [X] auto"
      gridTemplateRows="[A] auto [I] auto [U] auto [E] auto [O] auto"
      direction="rtl"
    >
      {hiragana50.map(({ character, column, row }) => (
        <styled.figure
          key={character}
          style={{ gridColumn: `${column}/auto`, gridRow: `${row}/auto` }}
        >
          {character}
        </styled.figure>
      ))}
    </styled.div>
  )
})
