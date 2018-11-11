import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import * as Web3 from 'web3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'universal-rpc';
  accounts: any;
  web3: any;
  balance: any;

  constructor(private _http: HttpClient) {
    this.web3 = new Web3();
    this.web3.setProvider(new Web3.providers.HttpProvider('http://localhost:7545'));
  }

  ngOnInit() {
    // this.accounts = this._http.get('http://localhost:3000/blockchain');
    this.web3.eth.getAccounts((err, accounts) => {
      if (err === null) {
        this.accounts = accounts;
      }
    });

    this.web3.eth.getBalance('0xf6E28D9F13cb1d53fF955b16713062AC58fe5588', (err, wei) => {
      this.balance = wei;
    });
  }
}
