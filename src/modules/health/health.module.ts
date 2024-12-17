import { Module } from '@nestjs/common';
import { HealthService } from './services';
import { HealthController } from './controllers';

@Module({
  providers: [HealthService],
  controllers: [HealthController],
})
export class HealthModule {}
