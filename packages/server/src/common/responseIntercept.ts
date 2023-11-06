import type {
  ExecutionContext,
  NestInterceptor,
  CallHandler,
} from '@nestjs/common';
import type { Observable } from 'rxjs';
import { map } from 'rxjs';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ResponseIntercept implements NestInterceptor {
  // 调用 next 处理器，执行里面 handel()，使用 pipe 操作符进行管道处理，map 操作符映射数据
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        return {
          code: 0,
          data,
        };
      }),
    );
  }
}
