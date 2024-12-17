import { NestFactory } from '@nestjs/core';
import { AppModule } from './app';
import sls from '@codegenie/serverless-express';

export async function bootstrapNestApp() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.setGlobalPrefix('api');

  await app.init();

  const expressApp = app.getHttpAdapter().getInstance();

  return sls({ app: expressApp });
}
