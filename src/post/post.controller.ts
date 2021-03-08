import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreatePostDto } from './dtos';

@Controller('post')
export class PostController {

    @Get()
    getMany(){
        return 'hablame menor'
    }

    @Get('GetOne')
    getOnev2(){
        return {
            message: 'GetOne one'
        };
    }

    @Get(':id')
    getOne(@Param('id', ParseIntPipe) id:number){
        console.log('id: '+id);
        return {
            message: 'GetOne '+id
        };
    }
    
    //se cread DTO para recibir el JSon sino toca hacer un body por cada parametro
    @Post()
    createOne(@Body() dto: CreatePostDto){
        return dto;
    }

    @Put(':id')
    editOne(@Param('id') id:string){

    }

    @Delete(':id')
    deleteOne(@Param('id') id:string){

    }

}
