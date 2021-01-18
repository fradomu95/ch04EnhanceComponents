import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { SortPipe } from './pipes/sort.pipe';
import { CopyrightDirective } from './directives/directives/copyright.directive';
import { PipesUseComponent } from './pipes-use/pipes-use.component';
import { NumericDirective } from './directives/numeric.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroListComponent,
    SortPipe,
    CopyrightDirective,
    PipesUseComponent,
    NumericDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
