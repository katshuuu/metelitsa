"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { requestSchema, type RequestInput } from "@/lib/validation";

const fields: { name: "name" | "organization" | "contact" | "message"; label: string; area?: boolean }[] = [
  { name: "name", label: "Имя" },
  { name: "organization", label: "Организация" },
  { name: "contact", label: "Телефон или e-mail" },
  { name: "message", label: "Сообщение", area: true },
];

export function RequestForm() {
  const [serverError, setServerError] = useState("");
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<RequestInput>({ resolver: zodResolver(requestSchema) });

  if (done) {
    return (
      <p role="status" className="border border-navy px-5 py-8 text-[16px] leading-relaxed">
        Заявка отправлена. Администрация оркестра свяжется с вами по указанным контактам.
      </p>
    );
  }

  return (
    <form
      className="border border-navy bg-white p-5 sm:p-7"
      noValidate
      onSubmit={handleSubmit(async (values) => {
        setServerError("");
        const response = await fetch("/api/request", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        if (!response.ok) {
          const data = (await response.json().catch(() => null)) as { errors?: Record<string, string> } | null;
          if (data?.errors) {
            for (const [key, message] of Object.entries(data.errors)) {
              if (key === "form") setServerError(message);
              else setError(key as keyof RequestInput, { message });
            }
          } else {
            setServerError("Не удалось отправить заявку. Попробуйте ещё раз или напишите на почту.");
          }
          return;
        }
        setDone(true);
      })}
    >
      <p className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden>
        <label>
          Сайт компании
          <input tabIndex={-1} autoComplete="off" {...register("companyWebsite")} />
        </label>
      </p>
      {fields.map((field) => (
        <label key={field.name} className="mb-5 block">
          <span className="text-[12px] uppercase tracking-[0.14em] text-slate">{field.label}</span>
          {field.area ? (
            <textarea
              rows={4}
              className="mt-2 w-full resize-y border-0 border-b border-navy/30 bg-transparent py-2 text-[16px] outline-none focus:border-navy"
              {...register(field.name)}
            />
          ) : (
            <input
              className="mt-2 w-full border-0 border-b border-navy/30 bg-transparent py-2 text-[16px] outline-none focus:border-navy"
              {...register(field.name)}
            />
          )}
          {errors[field.name] ? (
            <span role="alert" className="mt-1 block text-[13px] text-navy">
              {errors[field.name]?.message}
            </span>
          ) : null}
        </label>
      ))}
      <label className="mb-5 flex min-h-11 items-start gap-3 text-[14px] leading-relaxed">
        <input type="checkbox" className="mt-1 h-4 w-4 accent-navy" {...register("consent")} />
        <span>
          Соглашаюсь на обработку персональных данных и принимаю{" "}
          <a href="/privacy" className="link-arrow">
            политику конфиденциальности
          </a>
        </span>
      </label>
      {errors.consent ? (
        <p role="alert" className="mb-3 text-[13px]">
          {errors.consent.message}
        </p>
      ) : null}
      {serverError ? (
        <p role="alert" className="mb-3 text-[14px]">
          {serverError}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex min-h-12 w-full items-center justify-center bg-navy px-5 text-[15px] text-white disabled:opacity-60"
      >
        {isSubmitting ? "Отправляем…" : "Отправить заявку"}
      </button>
    </form>
  );
}
