import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { RequestCounterMiddleware } from './request.counter.middleware';
import { MetricsModule } from 'src/common/metrics/metrics.module';

@Module({
  imports: [MetricsModule]
})
export class RequestMiddlewareModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(RequestCounterMiddleware)
      .forRoutes('*');
  }
}
