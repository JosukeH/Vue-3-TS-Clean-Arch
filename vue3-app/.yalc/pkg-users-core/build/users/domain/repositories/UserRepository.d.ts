import { DataError } from "../../../common/domain/DataError";
import { Either } from "../../../common/domain/Either";
import { User } from "../entities";
export interface UserRepository {
    get(filter: string): Promise<Either<DataError, User[]>>;
}
