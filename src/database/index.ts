import { db_host, db_port, db_name, db_user, db_password } from '../config/database';

import { Sequelize } from 'sequelize';

export const connection = new Sequelize("postgres://qtwhpadr:KHvmwOFWp3kC7IYM5LAhIDpMo4IG2o22@silly.db.elephantsql.com/qtwhpadr", {
  dialect: "postgres",
});