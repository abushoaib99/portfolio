import { architectureDiagrams, architecturePrinciples } from "@/data/profile";
import { FlowDiagram } from "../FlowDiagram";
import { PrincipleGrid } from "../PrincipleGrid";
import { Section } from "../Section";

export function Architecture() {
  return (
    <Section
      id="architecture"
      index="05"
      eyebrow="Architecture & engineering"
      title="Designing for tenants, load and failure"
      intro="Two ways I've approached multi-tenancy: shared infrastructure in production and fully isolated stacks as a prototype. Below them are the decisions that shaped both."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {architectureDiagrams.map((d) => (
          <FlowDiagram key={d.title} diagram={d} />
        ))}
      </div>
      <div className="mt-5">
        <PrincipleGrid items={architecturePrinciples} />
      </div>
    </Section>
  );
}
