import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreatePostDto } from './dtos';
import { EditPostDto } from './dtos/edit-post.dto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {

    constructor(private readonly _postService: PostService){ // readonly 

    }

    @Get()
    getMany(){
        return this._postService.getMany();
    }

    @Get('GetOne')
    getOnev2(){
        return {
            message: 'GetOne one'
        };
    }

    @Get(':id')
    getOne(@Param('id', ParseIntPipe) id:number){
        return this._postService.getOne(id);
    }
    
    //se cread DTO para recibir el JSon sino toca hacer un body por cada parametro
    @Post()
    createOne(@Body() dto: CreatePostDto){
        return this._postService.createOne(dto);
    }

    @Put(':id')
    editOne(
        @Param('id',ParseIntPipe) id:number,
        @Body() dto: EditPostDto
        ){
            return this._postService.editOne(id,dto);
    }

    @Delete(':id')
    deleteOne(@Param('id',ParseIntPipe) id:number){
        return this._postService.deleteOne(id);
    }

}
