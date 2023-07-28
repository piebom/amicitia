
import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { MatchService } from './match/match.service';
import { UsersService } from './users/users.service';
import { DoublematchService } from './doublematch/doublematch.service';

@Controller()
export class AppController {
  constructor(private authService: AuthService, private matchService: MatchService, private userService: UsersService, private doublematchService: DoublematchService) { }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req: any) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req: any) {
    return req.user;
  }

  @UseGuards(JwtAuthGuard)
  @Get('user/all')
  getAllUsers(@Request() req: any) {
    return this.userService.getAllUsers();
  }


  @Get('matches')
  async getMatches(@Request() req: any) {
    return this.matchService.getMatches();
  }

  @Post('match')
  async createMatch(@Request() req: any) {
    return this.matchService.createMatch(req.body);
  }

  @Get('doublematches')
  async getDoubleMatches(@Request() req: any) {
    return this.doublematchService.getMatches();
  }

  @Post('doublematch')
  async createDoubleMatch(@Request() req: any) {
    return this.doublematchService.createMatch(req.body);
  }


}
