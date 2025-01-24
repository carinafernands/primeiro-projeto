import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit {

  public nome: string = "Carina";
  public idade: number = 27;

  public checkedDisable: boolean = false;
  public imgSrc: string = "https://upload.wikimedia.org/wikipedia/commons/7/71/Santa_Cruz_FC_%2801%29_-_PE.svg";
  public imgTitle: string = "Eu sou bilionário";

  public position: {x: number, y: number} = {x: 0, y:0};

  constructor() { }

  ngOnInit(): void {
  }
  public alertaInfo(valor: MouseEvent){
    console.log(valor);
  }

  public mouseMoveTest(valor: MouseEvent){
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }



}
