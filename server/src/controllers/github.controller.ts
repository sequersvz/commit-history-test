import { Controller, ForbiddenException, Get } from '@nestjs/common';
import { GithubService } from '../services/github.service';
import { catchError } from 'rxjs';

@Controller()
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Get()
  getCommitsRoute(): any {
    return this.githubService.getCommits().pipe(
      catchError(() => {
        throw new ForbiddenException('API not available');
      }),
    );
  }
}
