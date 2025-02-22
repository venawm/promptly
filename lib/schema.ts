import { z } from "zod";

export const ModelEnum = z.enum(["gpt-4", "gpt-3.5", "claude-2"]);
export type ModelEnum = z.infer<typeof ModelEnum>;

export const RequestSchema = z.object({
  prompt: z
    .string()
    .min(1, "Prompt is required")
    .max(4000, "Prompt is too long"),
  model: ModelEnum.optional().default("gpt-4"),
});
