/* eslint-disable @typescript-eslint/naming-convention */
import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    foreignKeys: {
      fk_product_invoice_productId: {
        name: 'fk_product_invoice_productId',
        entity: 'Product',
        entityKey: 'id',
        foreignKey: 'productId',
      },
      fk_product_invoice_invoiceId: {
        name: 'fk_product_invoice_invoiceId',
        entity: 'Invoice',
        entityKey: 'id',
        foreignKey: 'invoiceId',
      }
    },
  },
})
export class ProductsInvoice extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  amount: number;

  @property({
    type: 'number',
    required: true,
  })
  unit_price: number;

  @property({
    type: 'number',
  })
  invoiceId?: number;

  @property({
    type: 'number',
  })
  productId?: number;

  constructor(data?: Partial<ProductsInvoice>) {
    super(data);
  }
}

export interface ProductsInvoiceRelations {
  // describe navigational properties here
}

export type ProductsInvoiceWithRelations = ProductsInvoice & ProductsInvoiceRelations;
