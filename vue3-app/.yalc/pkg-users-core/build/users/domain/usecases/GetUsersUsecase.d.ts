import { DataError } from "../../../common/domain/DataError";
import { Either } from "../../../common/domain/Either";
import { User } from "../entities";
import { UserRepository } from "../repositories/UserRepository";
export declare class GetUsersUseCase {
    private userRepository;
    constructor(productRepository: UserRepository);
    execute(filter: string): Promise<Either<DataError, User[]>>;
}
