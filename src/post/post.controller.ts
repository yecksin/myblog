import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreatePostDto } from './dtos';
import { EditPostDto } from './dtos/edit-post.dto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {

    constructor(private readonly _postService: PostService){ // readonly 

    }

    @Get()
    async getMany(){
        let data = await this._postService.getMany();
        return {
            message: 'peticion correcta',
            data
        }
    }

    @Get('GetOne')
    getOnev2(){
        return {
            message: 'GetOne one'
        };
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id:number){
        return await this._postService.getOne(id);
    }
    
    //se cread DTO para recibir el JSon sino toca hacer un body por cada parametro
    @Post()
    async createOne(@Body() dto: CreatePostDto){
        return await this._postService.createOne(dto);
    }

    @Put(':id')
    async editOne(
        @Param('id',ParseIntPipe) id:number,
        @Body() dto: EditPostDto
        ){
            return await this._postService.editOne(id,dto);
    }

    @Delete(':id')
    async deleteOne(@Param('id',ParseIntPipe) id:number){
        return await this._postService.deleteOne(id);
    }

}
