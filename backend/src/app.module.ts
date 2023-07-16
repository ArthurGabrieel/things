import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ThingsModule } from './things/things.module';
import { CategoriesModule } from './categories/categories.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [ThingsModule, CategoriesModule, SharedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
