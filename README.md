# nestjs-app-prometheus-grafana
This repository contains NestJS application configured to use Prometheus and Grafana for monitoring application.

## Metrics Collected
Currently, following metrics are being instrumented from the application.

1.  ` **nestjs_requests_total** and **nestjs_handled_requests_total** ` of same type (**Counter**).

2. ` **request_latency_histogram** ` of type (**Histogram**) to observe the distribution of request latency values for the application.

3. `  **logged_in_active_sessions** ` of type (**Gauge**) to view total number of active login sessions at any point of time.


> [!important]
> The metric `**nestjs_requests_total**` is recorded from NestMiddleware, which is the first entrypoint for incoming request to the nest application.
> The metric `**nestjs_handled_requests_total**` is recorded from NestInterceptor, which receives the incoming request after nest has done its routing.

## Run the setup locally
In order to run the set up locally, you would need docker installed on your system.

```bash
$docker build -t nest-app:latest .

$docker compose up -d
```

Visit `http://localhost:3002` for Grafana UI.
