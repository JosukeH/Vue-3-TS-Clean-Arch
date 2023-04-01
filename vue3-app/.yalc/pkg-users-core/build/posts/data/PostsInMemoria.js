import { Either } from "../../common/domain/Either";
import { fetchData } from "../../common/presentation/FetchApi";
const posts = await fetchData("https://jsonplaceholder.typicode.com/users");
export class PostInMemoriaRepository {
    get(filter) {
        return new Promise((resolve, _reject) => {
            setTimeout(() => {
                try {
                    if (filter) {
                        const filteredPosts = posts.filter((p) => {
                            return p.title.toLowerCase().includes(filter.toLowerCase());
                        });
                        resolve(Either.right(filteredPosts));
                    }
                    else {
                        resolve(Either.right(posts));
                    }
                }
                catch (error) {
                    resolve(Either.left({ kind: 'UnexpectedError', error }));
                }
            }, 100);
        });
    }
}
//# sourceMappingURL=PostsInMemoria.js.map