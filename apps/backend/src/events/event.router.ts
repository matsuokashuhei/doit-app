import { Input, Mutation, Query, Router } from 'nestjs-trpc';
import { EventsService } from './events.service';
import z from 'zod';
import type { CreateEventInput } from './event.schema';
import { createEventSchema, eventSchema } from './event.schema';

@Router({ alias: 'event' })
export class EventRouter {
  constructor(private readonly eventsService: EventsService) {}

  @Query({
    input: z.object({ id: z.string() }),
    output: eventSchema,
  })
  getEventById(@Input('id') id: string) {
    return this.eventsService.getEventById(id);
  }

  @Query({
    output: z.array(eventSchema),
  })
  getAllEvents() {
    return this.eventsService.getAllEvents();
  }

  @Mutation({
    input: createEventSchema,
    output: eventSchema,
  })
  createEvent(@Input() data: CreateEventInput) {
    return this.eventsService.createEvent(data);
  }

  @Mutation({
    input: z.object({
      id: z.string(),
      data: createEventSchema.partial(),
    }),
    output: eventSchema,
  })
  updateEvent(
    @Input('id') id: string,
    @Input('data') data: Partial<CreateEventInput>,
  ) {
    return this.eventsService.updateEvent(id, data);
  }

  @Mutation({
    input: z.object({ id: z.string() }),
    output: z.boolean(),
  })
  deleteTodo(@Input('id') id: string) {
    return this.eventsService.deleteEvent(id);
  }
}
