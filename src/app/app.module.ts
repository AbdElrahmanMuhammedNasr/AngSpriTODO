import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { TodoOPComponent } from './todo-op/todo-op.component';
import { routing } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HttpInterService } from './service/InterAuth/http-inter.service';
import { LoginFormComponent } from './login-form/login-form.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoOPComponent,
    HomeComponent,
    LoginFormComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing
  ],
  providers: [
    // {provide: HTTP_INTERCEPTORS, useClass: HttpInterService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
