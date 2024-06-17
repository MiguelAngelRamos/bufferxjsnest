import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SecuenciaModule } from './secuencia/secuencia.module';


@Module({
  imports: [SecuenciaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
