import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TitleStrategy } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCustomTitleStrategy } from './shared/mycustom-title.strategy';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: TitleStrategy,
      useClass: MyCustomTitleStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
