import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAccountdto } from './dto/create-auth.dto';
import { Account } from './entities/auth.entity'

@Controller('accounts')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('create-account')
  create(@Body() createAccount: CreateAccountdto) {
    return this.authService.create(createAccount);
  }

}
