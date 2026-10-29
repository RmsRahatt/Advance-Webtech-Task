import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service.js';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  greetStudents(): string {
    return "Hello Students";
  }
  @Get("hello")
  greetStudentsAgain(): string {
    return "Hello Students Again";
  }
  @Get("task")
  givetask (): string {
    return "Task is given to students"; 
  }
}

