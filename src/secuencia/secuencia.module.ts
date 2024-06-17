import { Module } from '@nestjs/common';
import { SecuenciaService } from './secuencia.service';
import { SecuenciaController } from './secuencia.controller';

@Module({
  providers: [SecuenciaService],
  controllers: [SecuenciaController]
})
export class SecuenciaModule {}
