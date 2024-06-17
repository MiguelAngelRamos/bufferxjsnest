import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:4200', // Permite solicitudes de este origin(Angular)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos Http permitidos
    allowedHeaders: 'Content-Type, Accept', // las cabeceras permitidas
  })
  await app.listen(3000);
}
bootstrap();
