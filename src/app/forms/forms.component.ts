import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  public listComidas: Array<{comida: string, preco: string}> = [
    {comida: "X-salada", preco: "R$ 10"},
    {comida: "X-Bacon", preco: "R$ 15"},
    {comida: "Coxinha", preco: "R$ 20"}
  ]


  constructor() { }

  ngOnInit(): void {
  }

  public submitForm(form: any){

    if(form.valid){
      console.log(form.value)
    }
  }

}
