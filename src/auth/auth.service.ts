import { Injectable } from '@nestjs/common';
import { CreateAccountdto } from './dto/create-auth.dto';

@Injectable()
export class AuthService {
  create(CreateAccount: CreateAccountdto) {
    return 'This action adds a new auth';
  }
}
