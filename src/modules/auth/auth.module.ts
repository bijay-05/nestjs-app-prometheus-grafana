import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { MetricsModule } from "src/common/metrics/metrics.module";

@Module({
  imports: [MetricsModule],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}