import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


// swagger ui import
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger"

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // swagger ui setup 
  const swaggerConfig = new DocumentBuilder().setTitle("Donation platforms").setVersion('0.1').build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
