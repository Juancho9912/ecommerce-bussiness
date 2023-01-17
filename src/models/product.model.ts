/* eslint-disable @typescript-eslint/naming-convention */
import {Entity, model, property, hasMany, belongsTo} from '@loopback/repository';
import {Category} from './category.model';
import {ProductCategory} from './product-category.model';
import {Image} from './image.model';
import {Brand} from './brand.model';

@model({
  settings: {
    foreignKeys: {
      fk_product_brandId: {
        name: 'fk_product_brandId',
        entity: 'Brand',
        entityKey: 'id',
        foreignKey: 'brandId',
      }
    },
  },
})
export class Product extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
    required: true,
  })
  price: number;

  @property({
    type: 'number',
    required: true,
  })
  stock: number;

  @property({
    type: 'number',
    default: 0,
  })
  stars?: number;

  @property({
    type: 'number',
    default: 0,
  })
  discount?: number;

  @hasMany(() => Category, {through: {model: () => ProductCategory}})
  categories: Category[];

  @hasMany(() => Image)
  images: Image[];

  @belongsTo(() => Brand)
  brandId: number;

  constructor(data?: Partial<Product>) {
    super(data);
  }
}

export interface ProductRelations {
  // describe navigational properties here
}

export type ProductWithRelations = Product & ProductRelations;
