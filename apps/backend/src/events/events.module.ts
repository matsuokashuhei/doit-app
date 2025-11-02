import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventRouter } from './event.router';

@Module({
  providers: [EventsService, EventRouter],
})
export class EventsModule {}
