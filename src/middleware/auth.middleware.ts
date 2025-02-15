import { Injectable, Logger } from '@nestjs/common';
import { NextFunction, Request } from 'express';
import { RequestService } from 'src/services/request.service';

@Injectable()
export class AuthMiddleware {
  private readonly logger = new Logger(AuthMiddleware?.name);
  constructor(private readonly requestService: RequestService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const userId = '007';
    this.requestService.setUserId(userId);
    this.logger.log(AuthMiddleware?.name);
    next();
  }
}
