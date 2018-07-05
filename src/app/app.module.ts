import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ColorPickerModule } from 'ngx-color-picker';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { TaskItemComponent } from './task-item/task-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TaskItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ColorPickerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
