import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MDBBootstrapModule } from './typescripts/free';
import { AgmCoreModule } from '@agm/core';

import { TripcarService } from './api/tripcar.service';

import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

// import { ReactiveFormsModule } from '@angular/forms'; 

////https://www.npmjs.com/package/ng-auto-complete
import { NgAutoCompleteModule } from "ng-auto-complete";

//https://github.com/ReactiveX/rxjs/blob/master/MIGRATION.md
//https://material.angular.io/guide/getting-started
// import {
//   MatAutocompleteModule,
//   MatInputModule,
//   MatDatepickerModule
// } from '@angular/material';

import { AppComponent } from './app.component';

import { WjGridModule } from 'wijmo/wijmo.angular2.grid';


import { DkhnService } from './api/dkhn.service';
import { QlhvService } from './api/qlhv.service';

import { IntegralUIModule } from './integralui/integralui.module';

import { WjCoreModule } from 'wijmo/wijmo.angular2.core';
import { WjChartModule } from 'wijmo/wijmo.angular2.chart';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';

import { ToastrModule } from 'ngx-toastr';


import { ReactiveFormsModule } from '@angular/forms';


//https://www.npmjs.com/package/ngx-cookie-service
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from './routing.sub-module';
import { HeaderComponent } from './view/header/header.component';
import { MenuComponent } from './view/menu/menu.component';
import { FooterComponent } from './view/footer/footer.component';
import { SearchService } from './api/search.service';
import { DatePipe } from '@angular/common';
import { BlogComponent } from './view/blog/blog.component';
import { ResultComponent } from './view/result/result.component';
import { ContentComponent } from './view/content/content.component';
import { HomeComponent } from './view/content/home/home.component';
import { ContactComponent } from './view/content/contact/contact.component';
import { CompanyComponent } from './view/content/company/company.component';
import { ProjectComponent } from './view/content/project/project.component';
import { MobileComponent } from './view/content/home/mobile/mobile.component';
import { BuildComponent } from './view/content/home/build/build.component';
import { DistinctComponent } from './view/content/home/distinct/distinct.component';
import { TitleComponent } from './view/content/home/title/title.component';
import { TeamComponent } from './view/content/home/team/team.component';
import { DesignComponent } from './view/content/home/design/design.component';
import { FunctionComponent } from './view/content/home/function/function.component';
import { ImageComponent } from './view/content/home/image/image.component';
import { CompleComponent } from './view/comple/comple.component';
import { PriceListComponent } from './view/price-list/price-list.component';
import { ProjectCompleComponent } from './view/project-comple/project-comple.component';
import { OpinionComponent } from './view/opinion/opinion.component';
import { RecommendComponent } from './view/content/home/recommend/recommend.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    BlogComponent,
    ResultComponent,
    ContentComponent,
    HomeComponent,
    ContactComponent,
    CompanyComponent,
    ProjectComponent,
    MobileComponent,
    BuildComponent,
    DistinctComponent,
    TitleComponent,
    TeamComponent,
    DesignComponent,
    FunctionComponent,
    ImageComponent,
    CompleComponent,
    PriceListComponent,
    ProjectCompleComponent,
    OpinionComponent,
    RecommendComponent,

  ],
  imports: [
    WjCoreModule,
    WjInputModule,
    WjGridModule,
    WjChartModule,
    FormsModule,
    ReactiveFormsModule,
    NgAutoCompleteModule,
    Ng4LoadingSpinnerModule.forRoot(),

    // MatAutocompleteModule,
    // MatInputModule,
    // MatDatepickerModule,

    ToastrModule.forRoot(), // ToastrModule added
    IntegralUIModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MDBBootstrapModule.forRoot(),
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: 'Your_api_key'
    }),
    WjGridModule,
    AppRoutingModule
  ],
  providers: [
    DkhnService,
    QlhvService,
    TripcarService,
    CookieService,
    SearchService,
    DatePipe
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
