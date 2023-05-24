import { Controller, Get, Param, Query, Req } from '@nestjs/common';

import { Request } from 'express';

@Controller('countries')
export class CountriesController {
    @Get()
    findAll(@Req() request: Request):string {
        if(request.query.name){
            console.log(request.query.name);
            return `me enviaste una query ${request.query.name}`;
        }
        
        return "Esta es la ruta de countries"

    }

    @Get(':id')
    findOne(@Param() params: any): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
    }
    
}
