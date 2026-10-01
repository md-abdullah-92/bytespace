"use client";

import { useState, type FormEvent } from "react";
import { AuthButton } from "./AuthButton";
import { TextField } from "./TextField";

export function RegisterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    await Promise.resolve();
    setIsSubmitting(false);
  }

  return <form onSubmit={handleSubmit} className="space-y-6"><TextField label="Full Name" name="name" type="text" autoComplete="name" placeholder="Jamie Davis" required /><TextField label="Email" name="email" type="email" autoComplete="email" placeholder="designer@example.com" required /><TextField label="Password" name="password" type="password" autoComplete="new-password" placeholder="********" required minLength={8} /><div className="flex justify-end"><AuthButton type="submit" disabled={isSubmitting}>Continue</AuthButton></div></form>;
}