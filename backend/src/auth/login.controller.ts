import { Controller, Get, Res, Post, Body } from '@nestjs/common';
import { join } from 'path';
import { UsersService } from 'src/users/users.service';

@Controller('admin')
export class LoginController {
  constructor(private readonly userService: UsersService) {}
  @Get('login')
  serveLoginPage(@Res() res: any) {
    const API_URL = process.env.REACT_APP_API_URL;

    const fs = require('fs');
    const path = join(__dirname, '..', '..', 'admin', 'login.html');
    let html = fs.readFileSync(path, 'utf8');

    html = html.replace('// inject API_URL into file login.html - do not remove this comment', `const API_URL = '${API_URL}';`);
    res.send(html);
  }

  @Post('login')
  async login(@Body() loginData: { username: string; password: string }, @Res() res: any) {
    const { username, password } = loginData;
    const user = await this.userService.login(username, password);

    if (!user) {
      return res.status(401).send({ success: false, message: 'Invalid credentials' });
    }

    // Store user id in cookie; middleware will load user and check role
    res.cookie('adminToken', String(user.id), {
      httpOnly: true,
      secure: false, // Set to true in production with HTTPS
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
      path: '/'
    });
    res.send(user);
  }

}
