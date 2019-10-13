import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TypeOfTodo, WelcomDataService } from '../service/data/welcom-data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message: string ='';
  isDelete: boolean = false;

  todos:TypeOfTodo[]=[];
  
  theName: string;

  constructor(private service: WelcomDataService, private router: Router , private route: ActivatedRoute) { }

  ngOnInit(){
     this.getRefreshTodos();

  }

  onDeleteOne(id: number){
      this.service.deleteData(this.route.snapshot.params['username'],id).subscribe(
          res => {
            console.log(res);
            this.getRefreshTodos();
          }
      );
      this.isDelete = true;
      this.message=`delete ${id} succcess`;
      setTimeout(() => {
        this.isDelete = false;
      },2000);

  }

  onUpdateOne(id: number){
    console.log(`update ${id} done`);
    this.router.navigate(['/update',this.route.snapshot.params['username'],id])
  }

  getRefreshTodos(){
    this.service.getDataFromSprin(this.route.snapshot.params['username']).subscribe(
      res => {
        console.log(res);
        this.todos = res;
        if(this.todos.length == 0){
          this.router.navigate(['/error'])
        }

      }, error => {
        console.log(error)
      }
    );

  }
  onAdd(){
    this.router.navigate(['/add',this.route.snapshot.params['username']]);
  }

}
