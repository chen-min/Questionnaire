"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
exports.typeOrmConfig = {
    type: 'mysql',
    host: '121.91.175.242',
    port: 3306,
    username: 'root',
    password: 'zgbs@wuhan123',
    database: 'question',
    entities: ['dist/**/*.entity{.ts,.js}'],
    autoLoadEntities: true,
    synchronize: true,
};
//# sourceMappingURL=config.js.map