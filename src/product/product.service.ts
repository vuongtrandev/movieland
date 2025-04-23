import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Products } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Products)
    private readonly repo: Repository<Products>,
  ) {}

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  create(data: Partial<Products>) {
    const products = this.repo.create(data);
    return this.repo.save(products);
  }

  update(id: number, data: Partial<Products>) {
    return this.repo.update(id, data);
  }

  delete(id: number) {
    return this.repo.delete(id);
  }
}
