import { Component, OnInit } from '@angular/core';
import { publicDecrypt } from 'crypto';
import { FoodList } from 'src/app/module/food-list';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  public foodList: Array<FoodList> = [];

  constructor(private foodListService: FoodListService) { }

  ngOnInit(): void {
    this.foodListService.foodList().subscribe({
      next: (res) => this.foodList = res,
      error: (err) => console.error(err),
      complete: () => console.log('Requisição concluída.')
    });

    this.foodListService.emitEvent.subscribe({
      next: (res: FoodList) =>{
        alert(`Você adicionou ${res.nome}`);
        this.foodList.push(res);
      }

    });
  }

  public foodListEdit(value:string, id: number){
    this.foodListService.foodListEdit(value, id).subscribe(
      res => {
        return console.log(res)
      },
      error => error
    );
  }
  public foodListDelete(id: number){
    return this.foodListService.foodListDelete(id).subscribe(
      res =>{
        this.foodList = this.foodList.filter(
          item => {
            return id !== item.id
          }
        )
      },
      error => error
    );
  }

}
