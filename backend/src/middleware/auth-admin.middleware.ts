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

    // Check cookie/token
    const token = req.cookies?.adminToken;
    
    // Check localStorage token (nếu có trong request header)
    const authHeader = req.headers['authorization'];
    const localStorageToken = authHeader?.replace('Bearer ', '');

    if (token === '123456') {
      next(); // Cho qua
    } else {
      // Redirect về trang login
      res.redirect('/admin/login');
    }
  }
}
