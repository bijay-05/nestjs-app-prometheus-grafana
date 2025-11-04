import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ErrorModule } from "./error/error.module";
import { DebuggerModule } from "./debugger/debugger.module";
import { LoggerModule } from "src/common/logger/logger.module";
import { MetricsModule } from "./metrics/metrics.module";
import { RequestModule } from "./request/request.module";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: ['.env'],
            // validationSchema: Joi.object({
            //     APP_ENV: Joi.string()
            //         .valid(['development','production'])
            //         .default('development'),
            //         // .required(),
            //     LOG_LEVEL: Joi.string()
            //         .valid(['error','info','debug'])
            //         .default('info')
            //         // .required()
            // }),
            // validationOptions: {
            //     allowUnknown: true,
            //     abortEarly: true
            // }
        }),
        ErrorModule,
        DebuggerModule,
        LoggerModule,
        MetricsModule,
        RequestModule,
    ]
})
export class CommonModule {}