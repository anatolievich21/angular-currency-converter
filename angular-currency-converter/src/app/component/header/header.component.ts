import { Component, OnInit } from '@angular/core';
import { CurrencyDataService} from "../../currency-service/currency-data.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  curencyuds = 'USD';
  currencyeur = 'EUR';
  currencyuah = 'UAH';

  uahToUsd = 0;
  uahToEur = 0;

  ngOnInit() {
    this.getcurrencydata();
  }

  getcurrencydata() {
    this.currency
      .getcurrencydata(this.currencyuah)
      .subscribe((data: any) => {
        const rates = data.rates;

        this.uahToUsd = 1/rates[this.curencyuds]
        this.uahToEur = 1/rates[this.currencyeur]
      });
  }

  constructor(private currency:CurrencyDataService){}
}
