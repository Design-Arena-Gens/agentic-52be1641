"use client";

import {
  useCallback,
  useMemo,
  useState,
  useTransition,
  type ChangeEvent,
  type FormEvent,
} from "react";
import styles from "./contact-form.module.css";

type FormState = {
  name: string;
  email: string;
  projectType: string;
  message: string;
};

const defaultState: FormState = {
  name: "",
  email: "",
  projectType: "",
  message: "",
};

const projectOptions = [
  "Spring Boot microservices platform",
  "Full-stack SaaS dashboard",
  "API modernization and integration",
  "Architecture consulting",
  "Team enablement and training",
];

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>(defaultState);
  const [status, setStatus] = useState<{ message: string; error?: boolean }>({
    message: "",
    error: false,
  });
  const [isPending, startTransition] = useTransition();

  const canSubmit = useMemo(() => {
    return (
      formState.name.trim().length > 1 &&
      /^\S+@\S+\.\S+$/.test(formState.email) &&
      formState.message.trim().length > 4
    );
  }, [formState]);

  const handleChange = useCallback(
    (field: keyof FormState) =>
      (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormState((prev) => ({
        ...prev,
        [field]: event.target.value,
      }));
    },
    []
  );

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (!canSubmit || isPending) return;

      setStatus({ message: "", error: false });

      startTransition(async () => {
        try {
          const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formState),
          });

          const payload = await response.json();

          if (!response.ok) {
            throw new Error(payload.error ?? "Unable to submit the form.");
          }

          setStatus({
            message: "Thanks! I'll respond within one business day.",
          });
          setFormState(defaultState);
        } catch (error) {
          setStatus({
            message:
              error instanceof Error
                ? error.message
                : "We could not send your request. Please try again.",
            error: true,
          });
        }
      });
    },
    [canSubmit, formState, isPending]
  );

  return (
    <div className={styles.wrapper}>
      <h2>Let&apos;s build something remarkable</h2>
      <p className={styles.intro}>
        Share a few details about your Spring Boot or full-stack initiative,
        and I&apos;ll send back a tailored roadmap with milestones, risks, and
        budget guidance.
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label className={styles.field}>
            <span>Full name</span>
            <input
              type="text"
              autoComplete="name"
              placeholder="Alex Johnson"
              value={formState.name}
              onChange={handleChange("name")}
            />
          </label>
          <label className={styles.field}>
            <span>Business email</span>
            <input
              type="email"
              autoComplete="email"
              placeholder="alex@yourcompany.com"
              value={formState.email}
              onChange={handleChange("email")}
            />
          </label>
        </div>

        <label className={styles.field}>
          <span>Project focus</span>
          <select
            value={formState.projectType}
            onChange={(event) =>
              setFormState((prev) => ({
                ...prev,
                projectType: event.target.value,
              }))
            }
          >
            <option value="">Select a focus area</option>
            {projectOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className={styles.field}>
          <span>Project brief</span>
          <textarea
            rows={5}
            placeholder="Outline timelines, outcomes, integrations, and the definition of success."
            value={formState.message}
            onChange={handleChange("message")}
          />
        </label>

        <button type="submit" disabled={!canSubmit || isPending}>
          {isPending ? "Sending..." : "Request discovery call"}
        </button>

        {status.message && (
          <p className={status.error ? styles.error : styles.success}>
            {status.message}
          </p>
        )}
      </form>
    </div>
  );
}
