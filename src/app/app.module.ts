import { Module } from '@nestjs/common';
import { CoreModule } from 'src/core';

@Module({
  imports: [CoreModule],
})
export class AppModule {}
