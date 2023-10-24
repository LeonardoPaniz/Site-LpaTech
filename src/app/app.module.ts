import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoadingComponent } from './components/loading/loading.component';
import { HomeComponent } from './pages/home/home.component';
import { LoadingService } from './service/loading.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [LoadingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
