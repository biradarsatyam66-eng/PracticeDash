import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MachineTestComponent } from './component/machine-test/machine-test.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { OneComponent } from './component/one/one.component';
import { TwoComponent } from './component/two/two.component';
import { PostDashboardComponent } from './component/post-dashboard/post-dashboard.component';
import { PostCardComponent } from './component/post-card/post-card.component';
import { MobileDashboardComponent } from './component/mobile-dashboard/mobile-dashboard.component';
import { MobileCardComponent } from './component/mobile-card/mobile-card.component';
import { StdCrudComponent } from './component/std-crud/std-crud.component';
import { TodoCrudComponent } from './component/todo-crud/todo-crud.component';
import { MovieDashbordComponent } from './movie-dashbord/movie-dashbord.component';
import { MovieCardComponent } from './component/movie-card/movie-card.component';
import { MachineTodoComponent } from './component/machine-todo/machine-todo.component';
import { MatRippleModule } from "@angular/material/core";
import { MachineStdComponent } from './component/machine-std/machine-std.component';
import { TodoIOListComponent } from './component/todo-io-list/todo-io-list.component';
import { TodoIOFormComponent } from './component/todo-io-form/todo-io-form.component';
import { TodoIODashbordComponent } from './component/todo-io-dashbord/todo-io-dashbord.component';


@NgModule({
  declarations: [
    AppComponent,
    MachineTestComponent,
    OneComponent,
    TwoComponent,
    PostDashboardComponent,
    PostCardComponent,
    MobileDashboardComponent,
    MobileCardComponent,
    StdCrudComponent,
    TodoCrudComponent,
    MovieDashbordComponent,
    MovieCardComponent,
    MachineTodoComponent,
    MachineStdComponent,
    TodoIOListComponent,
    TodoIOFormComponent,
    TodoIODashbordComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatSnackBarModule,
    MatRippleModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
