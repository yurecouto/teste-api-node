import Todo from "../../../../models/Todo";

interface IRequest {
    id: string;
}

class DeleteObjectUseCase {
  async execute({
      id
  }: IRequest) {
    try {
      await Todo.destroy({ where: { id: 2 } });
      return 201;
    } catch (error) {
      return 401
    }
  }
};

export { DeleteObjectUseCase };
