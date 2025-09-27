import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthAdminMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // Cho phép truy cập trang login và auth API mà không cần authentication
    if (req.path === '/admin/login' || 
        req.path === '/login' ) 
    {
      return next(); 
    }

    // Ví dụ: check cookie/token
    const token = req.cookies?.adminToken || req.headers['authorization'];

    if (token === '123456') {
      next(); // Cho qua
    } else {
      res.redirect('/admin/login');
    }
  }
}
