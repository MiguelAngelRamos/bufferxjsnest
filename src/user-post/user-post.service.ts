import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { forkJoin, from, map } from 'rxjs';
@Injectable()
export class UserPostService {
  
  private readonly usersUrl = 'https://jsonplaceholder.typicode.com/users';
  private readonly postsUrl = 'https://jsonplaceholder.typicode.com/posts';

  getUserPosts() {
    // variable$
    const users$ = from(axios.get(this.usersUrl)).pipe(map( response => response.data));
    const posts$ = from(axios.get(this.postsUrl)).pipe(map( response => response.data));

    return forkJoin([users$, posts$]).pipe(
      map(([users, posts]) => {
        return users.map(user => ({
          ...user,
          posts: posts.filter(post => post.userId === user.id)
        }))
      })
    )

  }

}
