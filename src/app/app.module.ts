import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AuthComponent} from './auth/auth.component';
import {VideosComponent} from './videos/videos.component';
import {ListComponent} from './videos/list/list.component';
import {AddComponent} from './videos/add/add.component';
import {WatchComponent} from './videos/watch/watch.component';
import {PageNotFoundComponent} from './not-found.component';

import {FeatherIconsPipe} from './pipes/feather-icons.pipe';
import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import {TokenInterceptor} from './token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    VideosComponent,
    ListComponent,
    WatchComponent,
    AddComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    ToastrService,
    FeatherIconsPipe,
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
