import { DataError } from "../../common/domain/DataError";
import { Ploc } from "../../common/presentation/Ploc";
import { GetUsersUseCase } from "../domain";
import { UsersInitialState, UsersState } from "./UsersState";

export class ProductsPloc extends Ploc<UsersState> {
  constructor(private getUsersUseCase: GetUsersUseCase) {
    super(UsersInitialState);
  }

  async search(searchTerm: string) {
    const productResult = await this.getUsersUseCase.execute(searchTerm);

    productResult.fold(
      (error) => this.changeState(this.handleError(searchTerm, error)),
      (users) =>
        this.changeState({
          kind: "LoadedUsersState",
          users,
          searchTerm,
        })
    );
  }

  private handleError(searchTerm: string, error: DataError): UsersState {
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
