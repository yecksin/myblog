import { IsArray, IsBoolean, IsEnum, IsString } from "class-validator";
import { EnumToString } from "src/helpers/enumToString";
import { PostCategory } from "../enums";

export class CreatePostDto {

    @IsBoolean()
    status: boolean;

    @IsString()
    title: string;

    @IsString()
    slug: string;

    @IsString()
    excerpt: string;

    @IsString()
    content: string;

    @IsEnum(PostCategory, {
        message: `Opcion inivalida. Las opciones correctas son ${EnumToString(PostCategory)}`
    }) // un enum es para que solo se pueda seleccionar las opciones declaradas
    category: PostCategory;

    @IsArray()
    @IsString({each:true})
    tags: string[];


}
