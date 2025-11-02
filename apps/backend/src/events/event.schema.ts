import z from 'zod';

export const eventSchema = z.object({
  id: z.string(),
  title: z.string().min(1).max(255),
  startAt: z.date(),
  endAt: z.date(),
  createdAt: z.string(),
});

export const createEventSchema = eventSchema.omit({
  id: true,
  createdAt: true,
});

export type CreateEventInput = z.infer<typeof createEventSchema>;
export type Event = z.infer<typeof eventSchema>;
