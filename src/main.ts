import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger(); // para poder imprimir en consola con el coso verda fecha y mas

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist:true,
    })
  )

  await app.listen(3000);
  logger.log(`Servidor corriendo en el puerto ${await app.getUrl()}`)// para poder imprimir en consola con el coso verda fecha y mas
}
bootstrap();
