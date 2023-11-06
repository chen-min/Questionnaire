"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserAgent = exports.GetUserIp = void 0;
const common_1 = require("@nestjs/common");
const GetUserIp = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.ip.match(/\d+\.\d+\.\d+\.\d+/)?.join('.');
});
exports.GetUserIp = GetUserIp;
const GetUserAgent = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.headers['user-agent'];
});
exports.GetUserAgent = GetUserAgent;
//# sourceMappingURL=UserMessageTool.js.map