import { PartialType } from "@nestjs/mapped-types";
import { OmitType } from "@nestjs/swagger";
import { CreatePostDto } from "./create-post.dto";

export class EditPostDto extends PartialType(
    OmitType(CreatePostDto,['slug'] as const) // nos ignora un valor que no queremos que se pueda editar
){



    
}
