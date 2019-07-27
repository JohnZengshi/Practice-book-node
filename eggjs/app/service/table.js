/* eslint-disable jsdoc/check-param-names */
/* eslint-disable jsdoc/require-param */
'use strict';

const Service = require('egg').Service;
// const { createRandomId } = require('../../utils/index');
const uuid = require('node-uuid');

const sqlMap = require('../public/Mapping/index');
const Joi = require('joi');

class TableService extends Service {
  /**
   *
   * 修改用户
   * @param {*} params
   * @returns
   * @memberof TableService
   */
  async modify(params) {
    const { id, name, address } = params;
    const row = { id, name, address };
    const result = await this.app.mysql.update('Table_Test', row);
    const updateSuccess = result.affectedRows === 1;
    if (updateSuccess) {
      return { msg: '修改成功' };
    }
    return { msg: '修改失败' };
  }
  /**
   *
   *  新增用户
   * @param {*} params
   * @returns
   * @memberof TableService
   */
  async add(params) {
    const { phone, password, name } = params;
    // 参数验证
    const schema = Joi.object().keys({
      name: Joi.string()
        .min(3)
        .max(6)
        .required()
        .label('名字最小3个字符，最大6个字符'),
      password: Joi.string()
        .regex(/^[a-zA-Z0-9]{3,30}$/)
        .required()
        .label('密码格式有误'),
      phone: Joi.string()
        .regex(/^1[3456789]\d{9}$/)
        .required()
        .label('手机格式有误'),
    });
    const validationResults = await new Promise(reslove => {
      Joi.validate({ phone, password, name }, schema, err => {
        reslove(err);
      });
    });
    if (validationResults) {
      // validationResults.details[0].context.label
      const details = validationResults.details[0];
      if (details.type === 'any.required') {
        return { msg: `${details.context.key}参数缺失` };
      }
      return { msg: details.context.label };
    }

    let USER_DATA;
    // 判断名字是否存在
    USER_DATA = await this.app.mysql.query(sqlMap.user.QUERY_USER_NAME, [ name ]);
    if (USER_DATA.length !== 0) {
      return { msg: '名字已存在' };
    }

    // 判断手机号是否存在
    USER_DATA = await this.app.mysql.query(
      sqlMap.user.QUERY_USER_PHONE_NUMBER,
      [ phone ]
    );
    if (USER_DATA.length !== 0) {
      return { msg: '手机号已存在' };
    }

    const result = await this.app.mysql.query(sqlMap.user.NEW_USERS, [
      uuid.v1(),
      phone,
      password,
      name,
    ]);
    // 判断插入成功
    const insertSuccess = result.affectedRows === 1;
    if (insertSuccess) {
      return { msg: '新增成功' };
    }
    return { msg: '新增失败' };
  }
}

module.exports = TableService;
