import { Controller, Get, Query } from '@nestjs/common';
import { SecuenciaService } from './secuencia.service';
import { toArray } from 'rxjs';

@Controller('post')
export class SecuenciaController {
  constructor(private readonly secuenciaService: SecuenciaService) {}

  @Get()
  getPosts() {
    return this.secuenciaService.getPosts();
  }

  @Get('buffered')
  getBufferedPosts(@Query('size') bufferSize: number) {
    return this.secuenciaService.getBufferedPosts(bufferSize).pipe(
      toArray() // recoletar todos los buffer emitodos en un array
    );
  }
}
