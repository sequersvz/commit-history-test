import {
  Controller,
  ForbiddenException,
  Get,
  Param,
  Query,
} from '@nestjs/common';
import { GithubService } from '../services/github.service';
import { catchError } from 'rxjs';
import { PaginationQueries, GetByIdParam } from '../interface/controller';

@Controller()
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Get('/github/commits')
  getCommits(@Query() query: PaginationQueries) {
    return this.githubService.getCommits(query.page, query.per_page).pipe(
      catchError(() => {
        throw new ForbiddenException('API not available');
      }),
    );
  }

  @Get('/github/commits/:id')
  getCommit(@Param() param: GetByIdParam): any {
    return this.githubService.getCommit(param.id).pipe(
      catchError(() => {
        throw new ForbiddenException('API not available');
      }),
    );
  }
}
