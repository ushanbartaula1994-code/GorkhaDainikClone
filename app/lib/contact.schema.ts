import { z } from "zod";

export const createContactSchema = (lang: "NE" | "EN") =>
  z.object({
    name: z.string().min(2, {
      message:
        lang === "EN"
          ? "Name must be at least 2 characters"
          : "नाम कम्तिमा २ अक्षर हुनुपर्छ",
    }),
    email: z.string().email({
      message:
        lang === "EN"
          ? "Please enter a valid email address"
          : "सही इमेल ठेगाना दिनुहोस्",
    }),
    subject: z.string().min(3, {
      message:
        lang === "EN"
          ? "Subject must be at least 3 characters"
          : "विषय कम्तिमा ३ अक्षर हुनुपर्छ",
    }),
    message: z.string().min(10, {
      message:
        lang === "EN"
          ? "Message must be at least 10 characters"
          : "सन्देश कम्तिमा १० अक्षर हुनुपर्छ",
    }),
  });

export type ContactFormData = z.infer<ReturnType<typeof createContactSchema>>;
