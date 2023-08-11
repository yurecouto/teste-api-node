import logger from "../../../../utils/logger";

import Todo from "../../../../models/Todo";

class ShowAllObjectsUseCase {
  async execute() {
    try {
      const Objects = await Todo.findAll();

      return Objects;
    } catch (error) {
      return 401;
    }
  }
}

export { ShowAllObjectsUseCase };
