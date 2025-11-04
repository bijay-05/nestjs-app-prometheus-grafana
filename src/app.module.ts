import { Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModule } from 'nestjs-pino';
import { CommonModule } from './common/common.module';
import { CatsModule } from './modules/cats/cats.module';

@Module({
  imports: [
    CommonModule,
    CatsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
