import { Ploc } from "../../common/presentation/Ploc";
import { GetUsersUseCase } from "../domain";
import { UsersState } from "./UsersState";
export declare class ProductsPloc extends Ploc<UsersState> {
    private getUsersUseCase;
    constructor(getUsersUseCase: GetUsersUseCase);
    search(searchTerm: string): Promise<void>;
    private handleError;
}
