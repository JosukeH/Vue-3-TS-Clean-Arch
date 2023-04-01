import { DataError } from "../../common/domain/DataError";
import { Either } from "../../common/domain/Either";
import { fetchData } from "../../common/presentation/FetchApi";
import { User, UserRepository } from "../domain";


export const users =  await fetchData<User[]> ("https://jsonplaceholder.typicode.com/users") 


export class UsersInMemoryRepository implements UserRepository {
	get(filter ?: string): Promise<Either<DataError, User[]>> {
		return new Promise((resolve, _reject) => {
			setTimeout(() => {
				try {
					if (filter) {
						const filteredUsers = users.filter((p: User) => {
							return p.name.toLowerCase().includes(filter.toLowerCase());
						});
						resolve(Either.right(filteredUsers));
					} else {
						resolve(Either.right(users));
					}
				} catch (error: any) {
					resolve(Either.left({ kind: 'UnexpectedError', error }));
				}
			}, 100);
		});
	}
}
