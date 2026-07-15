# Callie — design brief

## Design read
For real estate wholesalers and investors drowning in unworked seller leads; the register is warm,
personal and disarming: a calling assistant who introduces herself, not an "AI platform".

## Concept spine
**"The site is Callie talking to you."** Every section is first person: she tells you what she does
(calls, follows up, books), shows her own work artifacts (call cards, sequences, booked appointments),
and closes by promising your morning calendar. Direct homage to lindy.ai at the user's explicit request;
the Lindy homepage screenshots in `refs/` are the reference boards for this build.

## Delivery tier
`editorial` (calm B2B warmth like the reference): typography + bespoke product-artifact mockups +
micro-motion. Signature moment: the hero phone conversation composes itself message by message on load,
and the "listen in" section plays a live call transcript line by line. No GSAP/Lenis; CSS + mount-fired
transitions only, all reduced-motion gated, nothing waits at opacity 0 for scroll.

## Locked palette (user brand constraint: "similar to lindy.ai" = reference site's palette family)
- Paper cream `#FBF7F2` page ground; card white `#FFFFFF`; hairline `#EDE6DD`.
- Ink navy `#122032` (text), muted ink `#51606F`.
- ONE accent: signal blue `#2B5FEB` (CTAs, links, live-state chips).
- Honey `#A97B2F` strictly for the 4 card eyebrows + brand flourishes (from the reference's gold labels).
- Mockup plate washes come from the 3 generated gradient plates (amber, dawn blue, sage).
Defense: this is the reference site's warm-paper family, explicitly requested; differs from the previous
build in this workspace (Potri: graphite + mint) on ground, accent, and temperature.

## Locked type
Manrope Variable (display AND body, per the reference brand) + IBM Plex Mono for call transcripts,
timestamps and dial metadata. No serif anywhere.

## Tier-1 technique
Self-composing conversation hero (mount-staggered message cascade in a device frame) + line-by-line
call transcript player in section 5; both enact the spine: you watch Callie work in real time.

## Section plan (one layout family each)
1. Nav: single line, cream, "Book a demo" pill.
2. Hero: split 55/45, left intro copy, right phone frame with SMS thread; drifting task phrases behind.
3. Tool strip: single-row marquee of REI tool wordmarks (pause on hover).
4. Callie's work: 4 stacked full-width chapter cards (text + plate mockup, alternating sides, the
   4th a wide variant). Eyebrows live ONLY here (4 total = ceil(11 sections / 3)).
5. Listen in: centered stage, transcript player card.
6. How it works: 3 numbered divide-y rows, full width.
7. Built to call right: asymmetric 2-col compliance grid (TCPA windows, DNC scrub, human handoff, recordings).
8. Pricing: comparison card (struck-through human ISA) + featured plan + custom plan.
9. Final CTA: full-bleed warm band, "Wake up to a calendar full of seller appointments."
10. Footer: minimal.

## Asset plan
- 3 generated gradient plates (amber / dawn blue / sage) behind mockups + final band. DONE (jobs queued).
- Inline SVG logo family: "callie" wordmark + smiling handset monogram (favicon).
- Launch cover per app-cover.md (gpt_image_2, yellow phone character) -> og + marketplace. Queued.
- Product artifacts (call cards, sequence timeline, booked slot) built as bespoke coded components,
  faithful to the reference's own coded-mockup style.

## CTA inventory
- **Book a demo** (single primary intent page-wide): navy pill in nav; large blue pill in hero;
  blue card CTA in pricing; inverted cream pill in final band. Each its own component + hover identity.
- **Hear a sample call** (hero secondary, one instance): ghost link with play glyph, scrolls to §5.
- **Talk to us** (custom plan card only): quiet outline button, mailto.
