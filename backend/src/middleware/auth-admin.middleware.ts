import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { PrismaService } from '../prisma/prisma.service';
import {Role} from '@prisma/client';

@Injectable()
export class AuthAdminMiddleware implements NestMiddleware {
  constructor(private readonly prisma: PrismaService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    if (req.path === '/admin/login' || 
        req.path === '/login' ) 
    {
      return next(); 
    }

    // Check cookie chứa user id
    const userIdFromCookie = req.cookies?.adminToken;

    if (!userIdFromCookie) {
      return res.redirect('/admin/login');
    }

    const userId = Number(userIdFromCookie);
    if (!Number.isFinite(userId)) {
      return res.redirect('/admin/login');
    }

    try {
      const user = await this.prisma.user.findUnique({ where: { id: userId } });
        if (!user) {
          return res.redirect('/admin/login');
        }

      if (user.role === Role.ADMIN) {
        (req as any).user = user;
        return next();
      }

      return res.redirect('/admin/login');
    } catch (e) {
      return res.redirect('/admin/login');
    }
  }
}
