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
    TodoCrudComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
