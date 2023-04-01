import { DataError } from "../../../common/domain/DataError";
import { Either } from "../../../common/domain/Either";
import { User } from "../entities";
import { UserRepository } from "../repositories/UserRepository";

export class GetUsersUseCase {
	private userRepository: UserRepository;

	constructor(productRepository: UserRepository) {
			this.userRepository = productRepository;
	}

	execute(filter: string): Promise<Either<DataError, User[]>> {
			return this.userRepository.get(filter);
	}
}