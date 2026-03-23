"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import styles from "./ContactForm.module.css";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

function validate(name: string, email: string, message: string): Errors {
  const next: Errors = {};
  if (!name.trim()) next.name = "Enter your name.";
  if (!email.trim()) {
    next.email = "Enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    next.email = "Enter a valid email address.";
  }
  if (!message.trim()) next.message = "Tell us what you are trying to solve.";
  return next;
}

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next = validate(name, email, message);
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setSent(true);
  }

  if (sent) {
    return (
      <p className={styles.success} role="status" aria-live="polite">
        Received. We will reply within one business day with next steps.
      </p>
    );
  }

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="contact-name">
          Full name
        </label>
        <input
          id="contact-name"
          name="name"
          className={styles.input}
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
        />
        {errors.name ? (
          <span id="contact-name-error" className={styles.error}>
            {errors.name}
          </span>
        ) : null}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="contact-email">
          Work email
        </label>
        <input
          id="contact-email"
          name="email"
          className={styles.input}
          type="email"
          autoComplete="email"
          inputMode="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
        />
        {errors.email ? (
          <span id="contact-email-error" className={styles.error}>
            {errors.email}
          </span>
        ) : null}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="contact-message">
          What should we know?
        </label>
        <textarea
          id="contact-message"
          name="message"
          className={styles.textarea}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
        />
        {errors.message ? (
          <span id="contact-message-error" className={styles.error}>
            {errors.message}
          </span>
        ) : null}
      </div>

      <button className={styles.submit} type="submit">
        Send message
      </button>
    </form>
  );
}
