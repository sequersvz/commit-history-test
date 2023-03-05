import { Module } from '@nestjs/common';
import { GithubService } from './services/github.service';
import { GithubController } from './controllers/github.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [GithubController],
  providers: [GithubService],
})
export class AppModule {}
