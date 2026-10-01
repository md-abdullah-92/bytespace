"use client";

import { useState, type FormEvent } from "react";
import { AuthButton } from "./AuthButton";
import { TextField } from "./TextField";

export function LoginForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    await Promise.resolve();
    setIsSubmitting(false);
  }

  return <form onSubmit={handleSubmit} className="space-y-6"><TextField label="Email" name="email" type="email" autoComplete="email" placeholder="designer@example.com" required /><TextField label="Password" name="password" type="password" autoComplete="current-password" placeholder="********" required /><div className="flex justify-end"><AuthButton type="submit" disabled={isSubmitting}>Sign In</AuthButton></div></form>;
}