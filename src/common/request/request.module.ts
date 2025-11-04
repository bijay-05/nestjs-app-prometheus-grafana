import { Module } from '@nestjs/common';
import { RequestMiddlewareModule } from './middleware/request.middleware.module';
import { MetricsModule } from '../metrics/metrics.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { RequestDefaultInterceptor } from './interceptor/request.interceptor';
@Module({
  imports: [
    RequestMiddlewareModule,
    MetricsModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: RequestDefaultInterceptor
    }
  ]
})
export class RequestModule {}