import { Injectable } from '@nestjs/common';

export type User = {
  id: string;
  username: string;
  password: string;
  address: string;
  phone: number;
};

@Injectable()
export class UsersService {}
