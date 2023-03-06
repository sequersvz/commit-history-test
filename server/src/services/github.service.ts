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

  private mapDataHelper<T>(
    httpFunction: Observable<AxiosResponse<T>>,
  ): Observable<T> {
    return httpFunction.pipe(map((value) => value.data));
  }

  getCommits(page = '1', limit = '10'): Observable<GithubCommit[]> {
    const params = new URLSearchParams([
      ['page', page],
      ['per_page', limit],
    ]);
    return this.mapDataHelper<GithubCommit[]>(
      this.httpService.get(
        `${
          this.api
        }/repos/sequersvz/commit-history-test/commits?${params.toString()}`,
      ),
    );
  }

  getCommit(commitId: string): Observable<GithubCommit> {
    return this.mapDataHelper<GithubCommit>(
      this.httpService.get(
        `${this.api}/repos/sequersvz/commit-history-test/commits/${commitId}`,
      ),
    );
  }
}
