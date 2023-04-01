import { DataError } from "../../../common/domain/DataError";
import { Either } from "../../../common/domain/Either";
import { Post } from "../entities";
export interface PostRepository {
    get(filter: string): Promise<Either<DataError, Post[]>>;
}
