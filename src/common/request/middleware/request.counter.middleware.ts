import { Injectable, NestMiddleware } from '@nestjs/common';
import { Response, NextFunction, } from 'express';
import IRequest from '../interfaces/request.interface';
import { MetricsService } from 'src/common/metrics/metrics.service';

@Injectable()
export class RequestCounterMiddleware implements NestMiddleware {
  constructor(
    private readonly metricsService: MetricsService,
  ) {}

  async use(
    req: IRequest,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    this.metricsService.incrementAppRequestCounter();
    next();
  }
}