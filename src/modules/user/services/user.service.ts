import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  public getAll() {
    return [
      { id: 1, name: 'dev' },
      { id: 2, name: 'phase' },
    ];
  }
}
