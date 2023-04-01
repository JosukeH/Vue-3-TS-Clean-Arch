import { DataError } from "../../common/domain/DataError";
import { Either } from "../../common/domain/Either";
import { Post } from "../domain/entities";
import { PostRepository } from "../domain/repositories/PostRepository";
export declare class PostInMemoriaRepository implements PostRepository {
    get(filter?: string): Promise<Either<DataError, Post[]>>;
}
