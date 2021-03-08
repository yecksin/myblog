import { IsArray, IsBoolean, IsString } from "class-validator";
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

    @IsString()
    category: PostCategory;

    @IsArray()
    @IsString({each:true})
    tags: string[];


}
