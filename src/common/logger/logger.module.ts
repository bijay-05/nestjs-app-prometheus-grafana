import pino from 'pino';
import { LOGGER_CLIENT_CONNECTION } from './logger.constant';
import { Global, Module } from '@nestjs/common';

@Global()
@Module({
    imports: [],
    providers: [
        {
            provide: LOGGER_CLIENT_CONNECTION,
            useFactory: () => {
                const pinoLogger = pino({
                    formatters: {
                        level: (label) => {
                            return { level: label.toUpperCase() };
                        },
                        bindings: (bindings) => {
                            return { host: bindings.hostname };
                        }
                    },
                    timestamp: pino.stdTimeFunctions.isoTime,
                },
                // pino.destination({
                //     dest: './app.log',
                //     sync: false
                // })
                pino.transport({
                    target: 'pino/file',
                    options: {
                        destination: './transport.log'
                    }
                })
            )
            return pinoLogger;
            }
        }
    ],
    exports: [LOGGER_CLIENT_CONNECTION]
})
export class LoggerModule {}