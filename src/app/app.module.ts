import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DynamicSearchSectionComponent } from './search-section/dynamic-search-section/dynamic-search-section.component';
import { DynamicFormComponent } from './search-section/dynamic-form/dynamic-form.component';
import { SearchResultsComponent } from './search-results/search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicSearchSectionComponent,
    DynamicFormComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
