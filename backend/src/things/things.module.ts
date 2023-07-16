import { Module } from '@nestjs/common';
import { ThingsService } from './things.service';
import { ThingsController } from './things.controller';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  imports: [SharedModule],
  controllers: [ThingsController],
  providers: [ThingsService],
})
export class ThingsModule {}
