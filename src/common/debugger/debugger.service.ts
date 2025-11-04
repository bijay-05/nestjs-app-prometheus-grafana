import { Inject } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
import { ENUM_APP_ENVIRONMENT } from '../constants/app.constants';
import { LOGGER_CLIENT_CONNECTION } from '../logger/logger.constant';
import pino from 'pino';


export class DebuggerService {
  env: ENUM_APP_ENVIRONMENT;
  constructor(
    // private readonly configService: ConfigService,
    @Inject(LOGGER_CLIENT_CONNECTION) private readonly loggerService: pino.Logger,
  ) {
    this.env = ENUM_APP_ENVIRONMENT.DEVELOPMENT;
    // this.env = this.configService.get<ENUM_APP_ENVIRONMENT>(
    //   'app.env',
    //   ENUM_APP_ENVIRONMENT.DEVELOPMENT, //Default value of none is given
    // );
  }

  log(...data: any[]) {
    if (this.env !== ENUM_APP_ENVIRONMENT.PRODUCTION) {
      console.log(...data);
    }
  }

  info(data: any) {
    this.loggerService.info(data);
  }

  warn(data: any) {
    this.loggerService.warn(data);
  }

  error(error: any | Error) {
    console.log("Debugger Service: ", error);
    this.loggerService.info(error);
  }
}
