import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  @Post('admin/login')
  async adminLogin(@Body() loginData: { username: string; password: string }, @Res() res: any) {
    const { username, password } = loginData;

    // Simple hardcoded credentials for demo
    if (username === 'admin' && password === 'admin123') {
      // Set cookie and return success
      res.cookie('adminToken', '123456', {
        httpOnly: true,
        secure: false, // Set to true in production with HTTPS
        maxAge: 24 * 60 * 60 * 1000, // 24 hours
        path: '/'
      });

      return res.status(HttpStatus.OK).json({
        success: true,
        message: 'Login successful',
        token: '123456'
      });
    } else {
      return res.status(HttpStatus.UNAUTHORIZED).json({
        success: false,
        message: 'Invalid username or password'
      });
    }
  }

  @Post('admin/logout')
  async adminLogout(@Res() res: any) {
    res.clearCookie('adminToken');
    return res.status(HttpStatus.OK).json({
      success: true,
      message: 'Logout successful'
    });
  }
}
