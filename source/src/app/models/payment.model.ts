import { z } from "zod";
import { PlayerSchema } from "./player.model";

export const PaymentSchema = z.object({
	id: z.string(),
	quantity: z.string(),
	month: z.number(),
	year: z.string(),
	concept: z.string(),
	players: z.array(PlayerSchema),
})

export const emptyPayment = PaymentSchema.parse({
    id: '',
    quantity: '',
	month: 0,
	year: '',
	concept: '',
	players: []
});

export type Payment = z.infer<typeof PaymentSchema>;