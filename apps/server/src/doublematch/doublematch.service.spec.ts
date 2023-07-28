import { Test, TestingModule } from '@nestjs/testing';
import { DoublematchService } from './doublematch.service';

describe('DoublematchService', () => {
  let service: DoublematchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DoublematchService],
    }).compile();

    service = module.get<DoublematchService>(DoublematchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
