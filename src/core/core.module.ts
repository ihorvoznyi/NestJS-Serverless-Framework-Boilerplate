import { Module } from '@nestjs/common';
import { UserModule, HealthModule } from 'src/modules';

@Module({
  imports: [UserModule, HealthModule],
})
export class CoreModule {}
