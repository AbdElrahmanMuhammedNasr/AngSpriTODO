import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoOPComponent } from './todo-op/todo-op.component';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes =[
    { path: 'home/:username' , component: HomeComponent },
    { path: 'update/:username/:id' , component: TodoOPComponent },
    { path: 'add/:username' , component: TodoOPComponent },
    { path: 'login', component: LoginFormComponent},
    { path: 'error', component: ErrorComponent}


];

@NgModule({
    imports:[ RouterModule.forRoot(routes) ] ,
    exports: [ RouterModule]

})
export class routing{

}