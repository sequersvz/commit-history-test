import { HttpService } from '@nestjs/axios/dist';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GithubService {
  constructor(private readonly httpService: HttpService) {}

  getHello(): string {
    return 'Hello World!';
  }
}
