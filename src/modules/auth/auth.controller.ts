import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { MetricsService } from "src/common/metrics/metrics.service";

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly metricsService: MetricsService,
  ) {}


  @Post('login')
  async login(): Promise<string> {
    const data = this.authService.login();

    this.metricsService.addLoggedInActiveUsers();

    return data;
  }

  @Post('logout')
  async logout(): Promise<string> {
    const data = this.authService.logout();

    this.metricsService.removeLoggedInActiveUsers();

    return data;
  }
}