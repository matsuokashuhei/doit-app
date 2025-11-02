import { Module } from '@nestjs/common';
import { TRPCModule } from 'nestjs-trpc';
import { EventsModule } from './events/events.module';

@Module({
  imports: [
    TRPCModule.forRoot({ autoSchemaFile: '../../packages/trpc/src/server' }),
    EventsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
