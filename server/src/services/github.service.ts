import { HttpService } from '@nestjs/axios/dist';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { GithubCommit } from '../interface/github';

@Injectable()
export class GithubService {
  api: string;

  constructor(private readonly httpService: HttpService) {
    this.api = 'https://api.github.com';
  }

  private mapDataHelper(
    httpFunction: Observable<AxiosResponse<GithubCommit[]>>,
  ): Observable<GithubCommit[]> {
    return httpFunction.pipe(map((value) => value.data));
  }

  getCommits(): Observable<GithubCommit[]> {
    return this.mapDataHelper(
      this.httpService.get(
        `${this.api}/repos/sequersvz/commit-history-test/commits`,
      ),
    );
  }
}
