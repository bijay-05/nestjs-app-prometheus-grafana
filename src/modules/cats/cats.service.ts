import { Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class CatsService {
    constructor(){}

    getCats(): string[] {
        // throw new NotFoundException('Cats Not Found');
        return ['cat1', 'cat2', 'cat3'];
    }

    createCat(): string {
        // throw new NotFoundException('Cat Record cannot be created');
        return 'Cat record created Successfully';
    }
}