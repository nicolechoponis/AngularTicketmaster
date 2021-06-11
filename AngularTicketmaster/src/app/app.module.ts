import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { StarComponent } from './star/star.component';
import { EventListComponent } from './event-list/event-list.component';
import { BucketlistPageComponent } from './bucketlist-page/bucketlist-page.component';
import { FormsModule } from '@angular/forms';
import { EventDetailPageComponent } from './event-detail-page/event-detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchCriteriaComponent,
    StarComponent,
    EventListComponent,
    BucketlistPageComponent,
    EventDetailPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
