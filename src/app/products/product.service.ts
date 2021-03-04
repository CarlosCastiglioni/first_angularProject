import { Injectable } from '@angular/core';
import { Product } from './product'

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  retrieveAll(): Product[] {
    return PRODUCTS
  }
  
  retrieveById(id: number): Product {
    return PRODUCTS.find((productIterator: Product) => productIterator.id ===id)
  }

  save(product: Product): void {
    if(product.id) {
      const index = PRODUCTS.findIndex((productIterator: Product) => productIterator.id === product.id)
      PRODUCTS[index] = product
    }
  }

}

var PRODUCTS: Product[] = [
  {
      id: 1,
      name: 'Basic',
      releaseDate: 'November 2, 2019',
      description: 'Tenha seu delivery próprio sem pagar taxas sobre os pedidos.',
      plan: 'monthly',
      rating: 4,
      price: 59.40,
      imageUrl: '/assets/img/basic.png',
  },
  {
      id: 2,
      name: 'Essential',
      releaseDate: 'November 4, 2019',
      description: 'Seu delivery próprio com gestor de pedidos integrado a um sistema de gestão.',
      plan: 'monthly',
      rating: 4.5,
      price: 119.40,
      imageUrl: '/assets/img/essential.png',
  },
  {
      id: 3,
      name: 'Complete',
      releaseDate: 'December 8, 2020',
      description: 'O sistema de gestão com tudo que sua empresa precisa. Notas fiscais, financeiro, PDV e delivery.',
      plan: 'monthly',
      rating: 5.0,
      price: 154.80,
      imageUrl: '/assets/img/complete.png',
  },
  {
      id: 4,
      name: 'Customized',
      releaseDate: 'February 16, 2021',
      description: 'Nosso especialista monta com você, o plano ideial para o seu negócio.',
      plan: 'customizable',
      rating: 5,
      price: null,
      imageUrl: '/assets/img/customized.png',
  },
];