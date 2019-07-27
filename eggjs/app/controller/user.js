'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async list() {
    const { ctx } = this;
    try {
      const userList = await ctx.service.user.searchAll();
      ctx.body = {
        success: true,
        data: userList,
      };
    } catch (error) {
      ctx.body = {
        success: false,
        error,
      };
    }
  }
  async find() {
    const { ctx } = this;
    try {
      if (!ctx.query.id) throw new Error('缺少参数！');
      const userList = await ctx.service.user.find(ctx.query.id);
      ctx.body = {
        success: true,
        data: userList,
      };
    } catch (error) {
      ctx.body = {
        success: false,
        error,
      };
    }
  }
  async userRegistration() {
    const { ctx } = this;
    try {
      const res = await ctx.service.table.add(ctx.request.body);
      ctx.body = {
        success: true,
        data: res,
      };
    } catch (error) {
      ctx.body = {
        success: false,
        data: error,
      };
    }
  }
}

module.exports = UserController;
