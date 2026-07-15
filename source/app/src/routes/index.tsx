import { createFileRoute } from "@tanstack/react-router";

import { SiteNav } from "../components/site/nav";
import { Hero } from "../components/site/hero";
import {
  ToolStrip,
  HowItWorks,
  Guardrails,
  Pricing,
  FinalBand,
  SiteFooter,
} from "../components/site/rest";
import { Chapters } from "../components/site/chapters";
import { ListenIn } from "../components/site/listen";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="site min-h-dvh scroll-smooth">
      <SiteNav />
      <main>
        <Hero />
        <ToolStrip />
        <div className="h-14 md:h-20" />
        <Chapters />
        <ListenIn />
        <HowItWorks />
        <Guardrails />
        <Pricing />
        <FinalBand />
      </main>
      <SiteFooter />
    </div>
  );
}
