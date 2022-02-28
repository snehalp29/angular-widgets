import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WidgetsComponent } from '../widgets/widgets.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterailModule } from '../material.module';
import { WidgetsListComponent } from 'src/widgets/widgets-list/widgets-list.component';
import { WidgetDetailsComponent } from 'src/widgets/widget-details/widget-details.component';

@NgModule({
  imports: [BrowserModule, FormsModule, MaterailModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    WidgetsComponent,
    WidgetsListComponent,
    WidgetDetailsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
