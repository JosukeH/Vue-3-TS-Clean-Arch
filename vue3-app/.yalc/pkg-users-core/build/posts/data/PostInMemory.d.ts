import { DataError } from "../../common/domain/DataError";
import { Either } from "../../common/domain/Either";
import { Post } from "../domain/entities";
import { PostRepository } from "../domain/repositories/PostRepository";
export declare const posts: Post[];
export declare class PostInMemoryRepository implements PostRepository {
    get(filter?: string): Promise<Either<DataError, Post[]>>;
}
