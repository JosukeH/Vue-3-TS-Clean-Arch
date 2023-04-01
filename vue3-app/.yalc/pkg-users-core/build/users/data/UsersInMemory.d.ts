import { DataError } from "../../common/domain/DataError";
import { Either } from "../../common/domain/Either";
import { User, UserRepository } from "../domain";
export declare const users: User[];
export declare class UsersInMemoryRepository implements UserRepository {
    get(filter?: string): Promise<Either<DataError, User[]>>;
}
