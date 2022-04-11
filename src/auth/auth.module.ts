import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

// database connection 
import { DatabaseModule } from '../database/database.module';

// Auth provider 
import { AuthProvider } from './auth.provider' 

@Module({
  imports:[DatabaseModule],
  controllers: [AuthController],
  providers: [AuthService, ...AuthProvider],
})
export class AuthModule {}
