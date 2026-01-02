import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import styles from "./page.module.css";

const deliveryMetrics = [
  {
    label: "Lead time to feature",
    value: "72h",
    detail: "Measured across 48 production releases in 2023.",
  },
  {
    label: "Production uptime",
    value: "99.98%",
    detail: "SLO backed by multi-region Spring Boot clusters.",
  },
  {
    label: "Team velocity gain",
    value: "3.4×",
    detail:
      "Accelerated squads via CI, trunk-based workflows, and platform guardrails.",
  },
];

const capabilities = [
  "Domain-driven Spring Boot microservices",
  "GraphQL and RESTful contract-first APIs",
  "Event streaming with Kafka and Debezium",
  "Composable React front-ends with Next.js",
  "Cloud-native delivery on AWS/GCP/Azure",
  "DevOps culture: GitHub Actions, ArgoCD, Terraform",
];

const engagements = [
  {
    company: "Pulse Financial",
    result:
      "Refactored a decade-old monolith into 16 Spring Boot services, cut incident rate by 64%, and launched a React client portal used by 40k daily users.",
    focus: ["Spring Boot", "Next.js", "Kubernetes"],
  },
  {
    company: "Nova Logistics",
    result:
      "Built a real-time supply chain visibility platform with WebSockets, CQRS, and event sourcing; reduced dispatch response time from 18 minutes to 90 seconds.",
    focus: ["Event-driven", "Redis", "PostgreSQL"],
  },
  {
    company: "Astra Health",
    result:
      "Delivered HIPAA-compliant patient engagement suite, integrating Epic via HL7/FHIR and automating compliance evidence with policy-as-code.",
    focus: ["Security", "FHIR", "Automation"],
  },
];

const milestones = [
  {
    period: "2021 – Present",
    title: "Principal Full Stack Consultant",
    summary:
      "Partner with scale-ups to re-architect Spring Boot platforms, institute platform engineering practices, and lead React/Next.js delivery squads.",
  },
  {
    period: "2017 – 2021",
    title: "Engineering Lead, Horizon Labs",
    summary:
      "Shipped a cloud-native analytics platform serving 500M events/day. Introduced contract testing, chaos engineering, and zero-downtime deploys.",
  },
  {
    period: "2013 – 2017",
    title: "Senior Java Developer",
    summary:
      "Built foundational microservices and developer tooling for global travel marketplaces while mentoring teams on Spring Boot and reactive systems.",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.backgroundGlow} />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.badge}>Full Stack + Spring Boot Architect</div>
          <h1>
            Production-ready platforms that pair resilient Spring Boot backends
            with polished Next.js front-ends.
          </h1>
          <p>
            I design, build, and scale full-stack systems that convert complex
            business rules into reliable, observable software. From event-driven
            backends to compelling web experiences, every release lands with
            instrumentation, documentation, and on-call confidence.
          </p>
          <div className={styles.heroActions}>
            <Link href="#contact" className={styles.primaryAction}>
              Start a project
            </Link>
            <Link
              href="https://www.linkedin.com/search/results/people/?keywords=spring%20boot%20consultant"
              className={styles.secondaryAction}
              target="_blank"
              rel="noopener noreferrer"
            >
              Browse recent case studies
            </Link>
          </div>
          <div className={styles.metrics}>
            {deliveryMetrics.map((metric) => (
              <article key={metric.label} className={styles.metricCard}>
                <span className={styles.metricValue}>{metric.value}</span>
                <span className={styles.metricLabel}>{metric.label}</span>
                <p>{metric.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <header className={styles.sectionHead}>
            <span className={styles.sectionEyebrow}>Signature capabilities</span>
            <h2>
              Full stack craftsmanship tailored for Spring Boot transformations.
            </h2>
            <p>
              I combine hexagonal architecture, rock-solid automation, and
              product sensibilities to deliver sustainable velocity.
            </p>
          </header>
          <div className={styles.capabilityGrid}>
            {capabilities.map((capability) => (
              <div key={capability} className={styles.capabilityCard}>
                {capability}
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <header className={styles.sectionHead}>
            <span className={styles.sectionEyebrow}>Highlighted engagements</span>
            <h2>Outcomes anchored in measurable business impact.</h2>
            <p>
              Every engagement is shaped by service-level objectives, lean
              delivery rituals, and a blueprint for handing over ownership to
              your teams.
            </p>
          </header>
          <div className={styles.engagementList}>
            {engagements.map((engagement) => (
              <article key={engagement.company} className={styles.engagementCard}>
                <div className={styles.engagementHeader}>
                  <h3>{engagement.company}</h3>
                  <div className={styles.engagementFocus}>
                    {engagement.focus.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
                <p>{engagement.result}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <header className={styles.sectionHead}>
            <span className={styles.sectionEyebrow}>Operating rhythm</span>
            <h2>Experience forged in enterprise delivery.</h2>
          </header>
          <div className={styles.timeline}>
            {milestones.map((milestone) => (
              <article key={milestone.period} className={styles.timelineItem}>
                <div className={styles.timelineMarker} />
                <div className={styles.timelineBody}>
                  <span className={styles.timelinePeriod}>{milestone.period}</span>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} id="contact">
          <header className={styles.sectionHead}>
            <span className={styles.sectionEyebrow}>Partnership kickoff</span>
            <h2>Schedule a rapid discovery workshop.</h2>
            <p>
              Receive a high-level solution architecture, risk register, and
              rollout plan aligned to your Spring Boot platform vision.
            </p>
          </header>
          <ContactForm />
        </section>
      </main>
    </div>
  );
}
