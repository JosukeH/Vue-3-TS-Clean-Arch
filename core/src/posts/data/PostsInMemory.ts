import { DataError } from "../../common/domain/DataError";
import { Either } from "../../common/domain/Either";
import { fetchData } from "../../common/presentation/FetchApi";
import { Post } from "../domain/entities";
import { PostRepository } from "../domain/repositories/PostRepository";


export const posts =  await fetchData<Post[]> ("https://jsonplaceholder.typicode.com/users") 


export class PostInMemoryRepository implements PostRepository {
	get(filter ?: string): Promise<Either<DataError, Post[]>> {
		return new Promise((resolve, _reject) => {
			setTimeout(() => {
				try {
					if (filter) {
						const filteredPosts = posts.filter((p: Post) => {
							return p.title.toLowerCase().includes(filter.toLowerCase());
						});
						resolve(Either.right(filteredPosts));
					} else {
						resolve(Either.right(posts));
					}
				} catch (error: any) {
					resolve(Either.left({ kind: 'UnexpectedError', error }));
				}
			}, 100);
		});
	}
}
