'use strict';

const sqlMap = {
  user: {
    NEW_USERS:
			'INSERT INTO Table_Test(id,phone,password,name) VALUES (?,?,?,?)',
    QUERY_USER_NAME: 'SELECT * FROM Table_Test WHERE name = ?',
    QUERY_USER_PHONE_NUMBER: 'SELECT * FROM Table_Test WHERE phone = ?',
  },
};

module.exports = sqlMap;
