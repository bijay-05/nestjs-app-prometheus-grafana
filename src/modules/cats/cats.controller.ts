import { Controller, Get, Post, Body } from '@nestjs/common'
import { CatsService } from './cats.service';
import { CatBodyDto } from './cats.dto';

@Controller('cats')
export class CatsController {
    constructor(
        private readonly catsService: CatsService
    ) {}

    @Get()
    getCats(): string[] {
        return this.catsService.getCats();
    }

    @Post()
    createCat(@Body() catBody: CatBodyDto): string {
        return this.catsService.createCat();
    }
}