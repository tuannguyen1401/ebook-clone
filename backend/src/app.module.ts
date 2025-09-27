import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { LoginController } from './auth/login.controller';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { UploadModule } from './upload/upload.module';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AuthAdminMiddleware } from './middleware/auth-admin.middleware'; 

@Module({
  imports: [UsersModule, PrismaModule, UploadModule, ConfigModule.forRoot({
    isGlobal: true,
  }), ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'admin', 'build'),
    serveRoot: '/admin',
  }), ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'uploads'),
    serveRoot: '/uploads',
  })],  
  controllers: [AppController, AuthController, LoginController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // Bật lại middleware - login page sẽ được serve bởi LoginController
    consumer.apply(AuthAdminMiddleware).forRoutes('/admin');
  }
}
