import { Module } from "@nestjs/common";
import { ErrorFilter } from "./error.filter";
import { APP_FILTER } from "@nestjs/core";

@Module({
    imports: [],
    providers: [
        {
            provide: APP_FILTER,
            useClass: ErrorFilter
        }
    ],
})
export class ErrorModule {}