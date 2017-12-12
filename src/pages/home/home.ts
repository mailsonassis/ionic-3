import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PedidoPage } from '../pedido/pedido';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {
  items = [];
  
    constructor(public nav: NavController) {
      this.items = [
        {
        nome: "Agua Mineral 20L",
        valor: 10.00,
        icone: "assets/imgs/garrafao.jpg",
        }, {
        nome: "GLP Envasado 13KG",
        valor: 80.00,
        icone: "assets/imgs/p13.jpg",
        },{
        nome: "GLP Envasado 05KG",
        valor: 30.00,
        icone: "assets/imgs/p05.png",
        },{
        nome: "GLP Envasado 08KG",
        valor: 50.00,
        icone: "assets/imgs/p08.jpg",
        },{
        nome: "GLP Envasado 20KG",
        valor: 120.00,
        icone: "assets/imgs/p20.jpg",
        },{
        nome: "GLP Envasado 45KG",
        valor: 200.00,
        icone: "assets/imgs/p45.jpg",
      }]
    }

    openPedidoPage(item) {
      this.nav.push(PedidoPage, { items: item });
      
    }

}
