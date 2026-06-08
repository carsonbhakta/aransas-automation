"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  businessName: z.string().min(1, "Business name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .optional()
    .refine(
      (v) => !v || /^[\d\s\-()+.]{7,20}$/.test(v),
      "Please enter a valid phone number"
    ),
  message: z.string().min(10, "Please share at least a few words"),
  website: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="text-red-500 text-xs mt-1">{message}</p>;
}

function SuccessMessage() {
  return (
    <div className="rounded-lg border border-teal/30 bg-teal/5 p-8 text-center">
      <div className="w-12 h-12 rounded-full bg-teal/15 flex items-center justify-center mx-auto mb-4">
        <svg
          className="w-6 h-6 text-teal"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
        Message sent
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        Thanks for reaching out. We&apos;ll be in touch within one business day.
      </p>
    </div>
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      businessName: "",
      email: "",
      phone: "",
      message: "",
      website: "",
    },
  });

  async function onSubmit(data: FormData) {
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.error ?? "Submission failed");
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  if (status === "success") return <SuccessMessage />;

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      {/* Honeypot — hidden from real users */}
      <div
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", overflow: "hidden" }}
      >
        <input
          type="text"
          {...register("website")}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="name" className="mb-1.5 block text-sm font-medium">
            Name <span className="text-red-500">*</span>
          </Label>
          <Input id="name" placeholder="Jane Smith" {...register("name")} />
          <FieldError message={errors.name?.message} />
        </div>

        <div>
          <Label htmlFor="businessName" className="mb-1.5 block text-sm font-medium">
            Business name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="businessName"
            placeholder="Coastal Charters Co."
            {...register("businessName")}
          />
          <FieldError message={errors.businessName?.message} />
        </div>
      </div>

      <div>
        <Label htmlFor="email" className="mb-1.5 block text-sm font-medium">
          Email <span className="text-red-500">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="jane@yourbiztx.com"
          {...register("email")}
        />
        <FieldError message={errors.email?.message} />
      </div>

      <div>
        <Label htmlFor="phone" className="mb-1.5 block text-sm font-medium">
          Phone <span className="text-muted-foreground font-normal">(optional)</span>
        </Label>
        <Input id="phone" type="tel" placeholder="(361) 555-0100" {...register("phone")} />
        <FieldError message={errors.phone?.message} />
      </div>

      <div>
        <Label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          What&apos;s your biggest headache right now?{" "}
          <span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="message"
          placeholder="We're getting calls after hours and missing them. Customers leave before we call back..."
          rows={5}
          {...register("message")}
        />
        <FieldError message={errors.message?.message} />
      </div>

      {status === "error" && (
        <p className="text-red-500 text-sm">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-1 w-full px-6 py-3 rounded-md bg-navy text-white font-medium text-sm hover:bg-navy/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
