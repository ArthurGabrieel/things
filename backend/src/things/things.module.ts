import { Module } from '@nestjs/common';
import { ThingsService } from './things.service';
import { ThingsController } from './things.controller';
import { SharedModule } from 'src/shared/shared.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [SharedModule, AuthModule],
  controllers: [ThingsController],
  providers: [ThingsService],
})
export class ThingsModule {}
