import { Injectable } from "@nestjs/common";
import { Counter, register, Histogram } from "prom-client";

@Injectable()
export class MetricsService {
  private appRequestCounter: Counter<string>; // raw request to nest application
  private handledRequestCounter: Counter<string>; // request after nest routing
  private requestLatencyHist: Histogram; // observe distribution of request latency 

  constructor() {
    this.appRequestCounter = new Counter({
      name: "nestjs_requests_total",
      help: "Total number of requests to the NestJS app",
    });
    
    this.handledRequestCounter = new Counter({
      name: "nestjs_handled_requests_total",
      help: "Total number of requests to the NestJS app",
      labelNames: ["method", "route"],
    });

    this.requestLatencyHist = new Histogram({
      name: "request_latency_histogram",
      help: "Distribution of request latency values",
      labelNames: ["method", "route"],
      buckets: [0.025, 0.05, 0.075, 0.1],
    })

    register.clear();

    register.setDefaultLabels({
      app: "nestjs-prometheus-demo",
    });
    register.registerMetric(this.appRequestCounter);
    register.registerMetric(this.handledRequestCounter);
    register.registerMetric(this.requestLatencyHist);
  }

  incrementAppRequestCounter(): void {
    /*
     * All the requests reaching Nest Application
    fdfd
    */
    this.appRequestCounter.inc(1);
  }

  incrementHandledRequestCounter(requestCounterArgs: { method: string, route: string }): void {
    /**
     * All requests after nest resolved controller and routes
     */
    this.handledRequestCounter.labels(requestCounterArgs.method, requestCounterArgs.route).inc(1);
  }

  addToRequestLatencyHist(requestLatencyArgs: { latency: number, method: string, route: string }): void {

    this.requestLatencyHist.labels(requestLatencyArgs.method, requestLatencyArgs.route).observe(requestLatencyArgs.latency);
  }

  async getCount(): Promise<any> {
    return await this.appRequestCounter.get();
  }
}