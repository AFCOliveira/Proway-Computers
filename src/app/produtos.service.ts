import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private produtos: IProduto[] 

  constructor() { 
    this.produtos = produtos;
  }

  getAll(){
    return this.produtos;
  }
  getOne(produtoId: number){
    console.log("produtos", produtos);
    return this.produtos.find(produto => produto.id == produtoId);
  }

}
