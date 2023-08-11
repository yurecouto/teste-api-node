import { Model, DataTypes } from 'sequelize';
import { connection } from '../database'
import sequelize from 'sequelize';

class Todo extends Model {
  public id!: number;
  public nome!: string;
  public duracao!: number;

  // Se houver métodos específicos para o model Todo, você pode adicioná-los aqui.
}

Todo.init(
  {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    duracao: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: 'Todo',
    freezeTableName: true,
  }
);

export default Todo;