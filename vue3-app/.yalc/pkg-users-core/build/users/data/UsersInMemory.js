import { Either } from "../../common/domain/Either";
import { fetchData } from "../../common/presentation/FetchApi";
export const users = await fetchData("https://jsonplaceholder.typicode.com/users");
export class UsersInMemoryRepository {
    get(filter) {
        return new Promise((resolve, _reject) => {
            setTimeout(() => {
                try {
                    if (filter) {
                        const filteredUsers = users.filter((p) => {
                            return p.name.toLowerCase().includes(filter.toLowerCase());
                        });
                        resolve(Either.right(filteredUsers));
                    }
                    else {
                        resolve(Either.right(users));
                    }
                }
                catch (error) {
                    resolve(Either.left({ kind: 'UnexpectedError', error }));
                }
            }, 100);
        });
    }
}
//# sourceMappingURL=UsersInMemory.js.map