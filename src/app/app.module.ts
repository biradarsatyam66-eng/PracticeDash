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
import { MobileDashboardComponent } from './component/mobile-dashboard/mobile-dashboard.component';
import { MobileCardComponent } from './component/mobile-card/mobile-card.component';
import { StdCrudComponent } from './component/std-crud/std-crud.component';
import { TodoCrudComponent } from './component/todo-crud/todo-crud.component';
import { MovieDashbordComponent } from './component/movie-dashbord/movie-dashbord.component';
import { MovieCardComponent } from './component/movie-card/movie-card.component';
import { MachineTodoComponent } from './component/machine-todo/machine-todo.component';
import { MatRippleModule } from "@angular/material/core";
import { MachineStdComponent } from './component/machine-std/machine-std.component';
import { TodoIOListComponent } from './component/todo-io-list/todo-io-list.component';
import { TodoIOFormComponent } from './component/todo-io-form/todo-io-form.component';
import { TodoIODashbordComponent } from './component/todo-io-dashbord/todo-io-dashbord.component';
import { TodoIoTwoDashboardComponent } from './component/todo-io-two-dashboard/todo-io-two-dashboard.component';
import { TodoIdTwoFormComponent } from './component/todo-io-two-dashboard/todo-id-two-form/todo-id-two-form.component';
import { TodoIoTwoListComponent } from './component/todo-io-two-dashboard/todo-io-two-list/todo-io-two-list.component';
import { MachineTodoIoDashbordComponent } from './component/machine-todo-io-dashbord/machine-todo-io-dashbord.component';
import { MachineTodoIoFormComponent } from './component/machine-todo-io-dashbord/machine-todo-io-form/machine-todo-io-form.component';
import { MachineTodoIoListComponent } from './component/machine-todo-io-dashbord/machine-todo-io-list/machine-todo-io-list.component';
import { StdCrudIoDashbordComponent } from './component/std-crud-io-dashbord/std-crud-io-dashbord.component';
import { StdCrudIoListComponent } from './component/std-crud-io-dashbord/std-crud-io-list/std-crud-io-list.component';
import { StdCrudIoFormComponent } from './component/std-crud-io-dashbord/std-crud-io-form/std-crud-io-form.component';
import { StdTwoIoDashbordComponent } from './component/std-two-io-dashbord/std-two-io-dashbord.component';
import { StdTwoIoListComponent } from './component/std-two-io-dashbord/std-two-io-list/std-two-io-list.component';
import { StdTwoIoFormComponent } from './component/std-two-io-dashbord/std-two-io-form/std-two-io-form.component';


@NgModule({
  declarations: [
    AppComponent,
    MachineTestComponent,
    OneComponent,
    TwoComponent,
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
    TodoIODashbordComponent,
    TodoIoTwoDashboardComponent,
    TodoIdTwoFormComponent,
    TodoIoTwoListComponent,
    MachineTodoIoDashbordComponent,
    MachineTodoIoFormComponent,
    MachineTodoIoListComponent,
    StdCrudIoDashbordComponent,
    StdCrudIoListComponent,
    StdCrudIoFormComponent,
    StdTwoIoDashbordComponent,
    StdTwoIoListComponent,
    StdTwoIoFormComponent
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
