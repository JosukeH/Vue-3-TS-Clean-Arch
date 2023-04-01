import { Ploc } from "../../common/presentation/Ploc";
import { UsersInitialState } from "./UsersState";
export class ProductsPloc extends Ploc {
    constructor(getUsersUseCase) {
        super(UsersInitialState);
        this.getUsersUseCase = getUsersUseCase;
    }
    async search(searchTerm) {
        const productResult = await this.getUsersUseCase.execute(searchTerm);
        productResult.fold((error) => this.changeState(this.handleError(searchTerm, error)), (users) => this.changeState({
            kind: "LoadedUsersState",
            users,
            searchTerm,
        }));
    }
    handleError(searchTerm, error) {
        switch (error.kind) {
            case "UnexpectedError": {
                return {
                    searchTerm,
                    kind: "ErrorUsersState",
                    error: "Sorry, an error has ocurred. Please try later again",
                };
            }
        }
    }
}
//# sourceMappingURL=UsersPloc.js.map