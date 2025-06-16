import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FlowerService } from './services/flower.service';
import { FlowerImageComponent } from './flower-image/flower-image.component';

@NgModule({
  declarations: [
    AppComponent,
    FlowerImageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [FlowerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
