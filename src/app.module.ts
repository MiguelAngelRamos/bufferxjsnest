import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SecuenciaModule } from './secuencia/secuencia.module';
import { UserPostModule } from './user-post/user-post.module';


@Module({
  imports: [SecuenciaModule, UserPostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
