import { Injectable } from '@nestjs/common';
import { NextFunction, Request } from 'express';

@Injectable()
export class AuthMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const userId = '123';
    req['userId'] = userId;
    next();
  }
}
