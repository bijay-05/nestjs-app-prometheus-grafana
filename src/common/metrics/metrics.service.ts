import { Injectable } from "@nestjs/common";
import { Counter, register } from "prom-client";

@Injectable()
export class MetricsService {
  private appRequestCounter: Counter<string>; // raw request to nest application
  private handledRequestCounter: Counter<string>; // request after nest routing
  constructor() {
    this.appRequestCounter = new Counter({
      name: "nestjs_requests_total",
      help: "Total number of requests to the NestJS app",
    });
    this.handledRequestCounter = new Counter({
      name: "nestjs_handled_requests_total",
      help: "Total number of requests to the NestJS app",
    });

    register.clear();

    register.setDefaultLabels({
      app: "nestjs-prometheus-demo",
    });
    register.registerMetric(this.appRequestCounter);
    register.registerMetric(this.handledRequestCounter);
  }

  incrementAppRequestCounter(): void {
    /*
     * All the requests reaching Nest Application
    */
    this.appRequestCounter.inc(1);
  }

  incrementHandledRequestCounter(): void {
    /**
     * All requests after nest resolved controller and routes
     */
    this.handledRequestCounter.inc(1);
  }

  async getCount(): Promise<any> {
    return await this.appRequestCounter.get();
  }
}