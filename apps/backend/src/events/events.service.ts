import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEventInput, Event } from './event.schema';

@Injectable()
export class EventsService {
  private events: Event[] = [];

  getEventById(id: string) {
    const event = this.events.find((t) => t.id === id);
    if (!event) {
      throw new NotFoundException('Event not found.');
    }
    return event;
  }

  getAllEvents() {
    return this.events;
  }

  createEvent(eventData: CreateEventInput) {
    const event: Event = {
      ...eventData,
      id: Math.random().toString(36).substring(2, 15),
      createdAt: new Date().toISOString(),
    };
    this.events.push(event);
    return event;
  }

  updateEvent(id: string, data: Partial<CreateEventInput>) {
    const idx = this.events.findIndex((t) => t.id === id);
    if (idx === -1) {
      throw new NotFoundException('Event not found.');
    }
    this.events[idx] = {
      ...this.events[idx],
      ...data,
    };
    return this.events[idx];
  }

  deleteEvent(id: string) {
    const idx = this.events.findIndex((t) => t.id === id);
    if (idx === -1) {
      throw new NotFoundException('Event not found.');
    }
    this.events.splice(idx, 1);
    return true;
  }
}
