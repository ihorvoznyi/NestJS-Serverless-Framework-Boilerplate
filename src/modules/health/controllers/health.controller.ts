import { Controller, Get } from '@nestjs/common';
import { HealthService } from '../services';

@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  public check() {
    return this.healthService.isHealth();
  }
}
