"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const { t } = useTranslation("common");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [responseMessage, setResponseMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setResponseMessage(t("contact.success"));
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
        setResponseMessage(data.message || t("contact.error"));
      }
    } catch {
      setStatus("error");
      setResponseMessage(t("contact.error"));
    }
  }

  const inputClass =
    "w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-text-muted focus:border-accent focus:outline-none transition-colors";

  return (
    <section
      id="contact"
      className="flex flex-col items-center gap-12 bg-card-darker px-6 py-16 md:px-12 md:py-20 lg:px-20"
    >
      {/* Header */}
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="h-0.5 w-12 rounded-full bg-accent" />
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          {t("contact.title")}
        </h2>
        <p className="max-w-xl text-base text-text-muted">
          {t("contact.subtitle")}
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-lg flex-col gap-5"
      >
        {/* Name */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="contact-name"
            className="text-sm font-medium text-text-secondary"
          >
            {t("contact.form.nameLabel")}
          </label>
          <input
            id="contact-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t("contact.form.namePlaceholder")}
            required
            className={inputClass}
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="contact-email"
            className="text-sm font-medium text-text-secondary"
          >
            {t("contact.form.emailLabel")}
          </label>
          <input
            id="contact-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t("contact.form.emailPlaceholder")}
            required
            className={inputClass}
          />
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="contact-message"
            className="text-sm font-medium text-text-secondary"
          >
            {t("contact.form.messageLabel")}
          </label>
          <textarea
            id="contact-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={t("contact.form.messagePlaceholder")}
            required
            rows={5}
            className={`${inputClass} resize-none`}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === "loading"
            ? t("contact.form.submitting")
            : t("contact.form.submit")}
        </button>

        {/* Feedback */}
        {(status === "success" || status === "error") && (
          <p
            className={`text-center text-sm ${
              status === "success" ? "text-accent" : "text-red-400"
            }`}
          >
            {responseMessage}
          </p>
        )}
      </form>
    </section>
  );
}
