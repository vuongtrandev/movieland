import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { Products } from './product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  imports: [TypeOrmModule.forFeature([Products])],
})
export class ProductModule {}
