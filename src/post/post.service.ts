import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dtos';
import { EditPostDto } from './dtos/edit-post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {
   
    constructor(
        @InjectRepository(Post)
        private readonly postRespository: Repository<Post>
        ){

    }

    async getMany(): Promise<Post[]>{
        return await this.postRespository.find();
    }

    async getOne(id:number){
        const post = await this.postRespository.findOne(id);
        if (!post) throw new NotFoundException('el post no existe');
        return post;
        
    }

    async createOne(dto: CreatePostDto){
        const post =  this.postRespository.create(dto as any);
        return await this.postRespository.save(post)
    }

    async editOne(id:number,dto: EditPostDto){
        const post = await this.postRespository.findOne(id);

        if (!post) throw new NotFoundException('Post no existe');

        const editedPost = Object.assign(post,dto)
        return await this.postRespository.save(editedPost)
    }

    async deleteOne(id:number){
        const post = await this.postRespository.findOne(id);

        if (!post) throw new NotFoundException('Post no existe');
        return await this.postRespository.delete(id);
    }




}
