import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'universal-rpc';
  data: any;

  constructor(private _http: HttpClient) {
  }

  ngOnInit() {
    this._http.get('https://reqres.in/api/users?delay=5')
      .subscribe((data) => this.data = data);
  }
}
