import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dtos';
import { EditPostDto } from './dtos/edit-post.dto';

@Injectable()
export class PostService {
    
    getMany(){
        return { ok: 'getMany'}
    }

    getOne(id:number){
        return { ok: 'getOne'}
    }

    editOne(id:number,dto: EditPostDto){
        return { ok: 'editOne'}
    }

    deleteOne(id:number){
        return { ok: 'deleteOne'}
    }

    createOne(dto: CreatePostDto){
        return { ok: 'createOne'}
    }


}
