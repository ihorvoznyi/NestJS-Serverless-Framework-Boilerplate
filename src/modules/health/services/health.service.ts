import { Injectable } from '@nestjs/common';

@Injectable({})
export class HealthService {
  public isHealth() {
    return true;
  }
}
