import { z } from "zod";

const phoneLike = /^[+()\d][\d\s()+-]{5,}$/;
const emailLike = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const requestSchema = z.object({
  name: z.string().trim().min(2, "Укажите имя"),
  organization: z.string().trim().min(2, "Укажите организацию"),
  contact: z
    .string()
    .trim()
    .min(5, "Укажите телефон или e-mail")
    .refine((value) => emailLike.test(value) || phoneLike.test(value), {
      message: "Нужен телефон или e-mail",
    }),
  message: z.string().trim().min(10, "Коротко опишите событие — хотя бы 10 символов"),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Нужно согласие на обработку данных" }),
  }),
  companyWebsite: z.string().optional(),
});

export type RequestInput = z.infer<typeof requestSchema>;

export function fieldErrors(error: z.ZodError) {
  const errors: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = String(issue.path[0] ?? "form");
    if (!errors[key]) errors[key] = issue.message;
  }
  return errors;
}
