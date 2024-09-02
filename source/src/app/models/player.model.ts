import { z } from "zod";

export const PlayerSchema = z.object({
	id: z.string(),
	dni: z.string(),
	name: z.string(),
	surname1: z.string(),
	surname2: z.string(),
	telephone: z.string(),
	email: z.string(),
	address: z.string(),
	birthday: z.string(),
	category: z.string(),
	image: z.string(),
})

export const emptyPlayer = PlayerSchema.parse({
    id: '',
	dni: '',
	name: '',
	surname1: '',
	surname2: '',
	telephone: '',
	email: '',
	address: '',
	birthday: '',
	category: '',
	image: '',
});

export type Player = z.infer<typeof PlayerSchema>;