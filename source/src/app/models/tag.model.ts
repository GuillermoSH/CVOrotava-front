import { z } from "zod";

export const TagSchema = z.object({
    label: z.string(),
    value: z.string()
})

export const emptyTag = TagSchema.parse({
    label: "",
    value: ""
});

export type Tag = z.infer<typeof TagSchema>;
