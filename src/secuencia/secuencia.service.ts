import { Injectable } from '@nestjs/common';
import { bufferCount, from, map, mergeMap } from 'rxjs';
import axios from 'axios';

@Injectable()
export class SecuenciaService {

  private readonly apiUrl = `https://jsonplaceholder.typicode.com/posts`;

  //* Metodo para obtener todos los posts

  getPosts() {
    return from(axios.get(this.apiUrl)).pipe(
      map(response => response.data)
    );
  }

 //* Metodo para agrupar los posts en buffers (tamaño específico)
  getBufferedPosts(bufferSize: number) {
    return this.getPosts().pipe(
      mergeMap(posts => from(posts).pipe(
        // 100/5 = 20 buffersCount
        bufferCount(bufferSize)
      ))
    )
  }

  getWindowedPosts() {

  }
}
