import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';


import { SocketIoModule,SocketIoConfig } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';

const config: SocketIoConfig = {
  url: environment.wsUrl, options:{}
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config),
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
