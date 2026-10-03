import { aiDiagrams, aiPractices } from "@/data/profile";
import { FlowDiagram } from "../FlowDiagram";
import { PrincipleGrid } from "../PrincipleGrid";
import { Section } from "../Section";

export function AiEngineering() {
  return (
    <Section
      id="ai"
      index="06"
      eyebrow="AI / LLM engineering"
      title="LLMs as parts of a system"
      intro={
        <>
          In production I built RAG-based Q&amp;A and an AI Workflow Generator for Robo2mation. In public repositories I work
          on orchestration, validation and tool interfaces. I treat the model as one step in a pipeline: its input is
          grounded in real data, its output is checked, and in my LangGraph work, actions with side effects wait for a
          person to approve them.
        </>
      }
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {aiDiagrams.map((d) => (
          <FlowDiagram key={d.title} diagram={d} />
        ))}
      </div>
      <div className="mt-5">
        <PrincipleGrid items={aiPractices} />
      </div>
    </Section>
  );
}
