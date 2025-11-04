import {
  CallHandler,
  ExecutionContext,
  HttpStatus,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { HttpArgumentsHost } from '@nestjs/common/interfaces';
import { Reflector } from '@nestjs/core';
import { Response } from 'express';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MetricsService } from 'src/common/metrics/metrics.service';

@Injectable()
export class RequestDefaultInterceptor<T>
  implements NestInterceptor<Promise<T>>
{
  constructor(
    private readonly reflector: Reflector, 
    private readonly metricsService: MetricsService
  ) {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<Promise<any>>> {


    return next.handle().pipe(
      tap(() => {
        const response = context.switchToHttp().getResponse();
        this.metricsService.incrementHandledRequestCounter();
      })
    );
  }
}
