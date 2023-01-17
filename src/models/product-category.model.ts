/* eslint-disable @typescript-eslint/naming-convention */
import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    foreignKeys: {
      fk_product_category_productId: {
        name: 'fk_product_category_productId',
        entity: 'Product',
        entityKey: 'id',
        foreignKey: 'productId',
      },
      fk_product_category_categoryId: {
        name: 'fk_product_category_categoryId',
        entity: 'Category',
        entityKey: 'id',
        foreignKey: 'categoryId',
      }
    },
  },
})
export class ProductCategory extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
  })
  productId?: number;

  @property({
    type: 'number',
  })
  categoryId?: number;

  constructor(data?: Partial<ProductCategory>) {
    super(data);
  }
}

export interface ProductCategoryRelations {
  // describe navigational properties here
}

export type ProductCategoryWithRelations = ProductCategory & ProductCategoryRelations;
