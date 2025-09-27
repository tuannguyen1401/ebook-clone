import { Controller, Get, Res } from '@nestjs/common';
import { join } from 'path';

@Controller('admin')
export class LoginController {
  @Get('login')
  serveLoginPage(@Res() res: any) {
    // Serve the HTML login page
    res.sendFile(join(__dirname, '..', '..', 'admin', 'login.html'));
  }
}
