import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import cookieParser from 'cookie-parser'; 

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Validation
  app.useGlobalPipes(new ValidationPipe());
  // Parse cookies for auth middleware
  app.use(cookieParser());

  app.enableCors({
    origin: true,
    credentials: true,
  });
  // Swagger
  const config = new DocumentBuilder()
    .setTitle('Products API')
    .setDescription('CRUD Products with forms')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
