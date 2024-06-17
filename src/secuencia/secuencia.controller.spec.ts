import { Test, TestingModule } from '@nestjs/testing';
import { SecuenciaController } from './secuencia.controller';

describe('SecuenciaController', () => {
  let controller: SecuenciaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SecuenciaController],
    }).compile();

    controller = module.get<SecuenciaController>(SecuenciaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
