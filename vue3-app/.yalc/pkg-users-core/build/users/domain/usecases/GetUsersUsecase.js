export class GetUsersUseCase {
    constructor(productRepository) {
        this.userRepository = productRepository;
    }
    execute(filter) {
        return this.userRepository.get(filter);
    }
}
//# sourceMappingURL=GetUsersUsecase.js.map