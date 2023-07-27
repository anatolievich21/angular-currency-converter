import { Component, OnInit } from '@angular/core';
import {CurrencyDataService} from "../../currency-service/currency-data.service";

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {
  amountFrom: number = 0;
  amountTo: number = 0;
  currencyFrom: string = 'UAH';
  currencyTo: string = 'USD';
  exchangeRates: any;

  constructor(private currencyService: CurrencyDataService) { }

  ngOnInit() {
    this.currencyService.getcurrencydata(this.currencyFrom).subscribe((data: any) => {
      this.exchangeRates = data.rates;
      this.convertTo();
    });
  }

  convertFrom() {
    if (this.exchangeRates) {
      const fromRate = this.exchangeRates[this.currencyFrom];
      const toRate = this.exchangeRates[this.currencyTo];
      this.amountTo = +((this.amountFrom / fromRate) * toRate).toFixed(2);
    }
  }

  convertTo() {
    if (this.exchangeRates) {
      const fromRate = this.exchangeRates[this.currencyFrom];
      const toRate = this.exchangeRates[this.currencyTo];
      this.amountFrom = +((this.amountTo / toRate) * fromRate).toFixed(2);
    }
  }
}
