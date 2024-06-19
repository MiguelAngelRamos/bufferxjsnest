import { Controller, Get } from '@nestjs/common';
import { UserPostService } from './user-post.service';
import { Observable } from 'rxjs';

@Controller('user-post')
export class UserPostController {

  constructor(private readonly userPostService: UserPostService) {}

  @Get()
  getUserPosts():Observable<any> {
    return this.userPostService.getUserPosts();
  }
}
