import { Component, OnInit, Input } from '@angular/core';
import { WelcomDataService, TypeOfTodo } from '../service/data/welcom-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo-op',
  templateUrl: './todo-op.component.html',
  styleUrls: ['./todo-op.component.css']
})
export class TodoOPComponent implements OnInit {
  @Input() usernameFromLoginForm: string;
  id: number
  
  addOperation: string ='';

  todo: TypeOfTodo

  constructor(private service: WelcomDataService , private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.todo = new TypeOfTodo( null,'',false,null);


    if(this.id){
        console.log('ths is Id '+this.id);

        this.service.getOneData(this.route.snapshot.params['username'],this.id).subscribe(
          resData => { this.todo = resData}
        );
        this.addOperation = 'Update';


    }
    else if( typeof this.id == 'undefined'){
      this.addOperation = 'Add New';

      console.log('ths is Id '+this.id);  
    }

  }

  updateTodo(){
    console.log('this is Id i am in update  '+this.id);  
      if(typeof this.id == 'undefined'){
        this.addTodo();  
      }
      else{
        this.service.updateTode(this.route.snapshot.params['username'],this.id,this.todo).subscribe(
          res => {
            console.log('the data is '+res);
          },
          error => {
            console.log('ERRRRRRRRRRRRRRR');
          },
          () => {
            console.log('Done')
          }
        );

        this.router.navigate( [ '/home',this.route.snapshot.params['username'] ]);
        this.service.getDataFromSprin(this.route.snapshot.params['username']).subscribe();
      }

  }

    addTodo(){
      console.log('the username is '+this.usernameFromLoginForm);
      this.service.addTode(this.route.snapshot.params['username'],this.todo).subscribe();
      this.router.navigate(['/home',this.route.snapshot.params['username']]);
      this.service.getDataFromSprin(this.route.snapshot.params['username']).subscribe();
    }



}
