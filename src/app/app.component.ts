import { Component } from '@angular/core';
import { WebSocketsService } from '../app/services/web-sockets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cliente';

  constructor(public wsService: WebSocketsService){

  }

}
