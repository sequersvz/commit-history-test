import { Module } from '@nestjs/common';
import { GithubService } from './services/github.service';
import { GithubController } from './controllers/github.controller';

@Module({
  imports: [],
  controllers: [GithubController],
  providers: [GithubService],
})
export class AppModule {}
