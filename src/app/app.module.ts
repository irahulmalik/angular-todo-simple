import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app-router.module';
import { HomeComponent } from './components/home/home.component';
import { TodoComponent } from './components/todos/todo.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    HeaderComponent,
    HelloComponent,
    HomeComponent,
    TodoComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
