'use strict';

const Controller = require('egg').Controller;

class TableController extends Controller {
  async modifyInformation() {
    const { ctx } = this;
    try {
      const res = await ctx.service.table.modify(ctx.request.body);
      ctx.body = {
        success: true,
        data: res,
      };
    } catch (error) {
      ctx.body = {
        success: false,
        error,
      };

    }
  }
  async newInformation() {
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
        error,
      };
    }
  }
}

module.exports = TableController;
