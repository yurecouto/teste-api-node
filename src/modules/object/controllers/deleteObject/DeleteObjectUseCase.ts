import Todo from "../../../../models/Todo";

interface IRequest {
    id: string;
}

class DeleteObjectUseCase {
  async execute({
      id
  }: IRequest) {
    console.log("=>", id)
    try {
      await Todo.destroy({ where: { id: id } });
      return 201;
    } catch (error) {
      console.log("error =>", error)
      return 401
    }
  }
};

export { DeleteObjectUseCase };
