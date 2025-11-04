# nestjs-app-prometheus-grafana
This repository contains NestJS application configured to use Prometheus and Grafana for monitoring application.

## Metrics Collected
Currently, only two metrics `**nestjs_requests_total** and **nestjs_handled_requests_total**` of same type (**Counter**) are being collected from the application.

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
