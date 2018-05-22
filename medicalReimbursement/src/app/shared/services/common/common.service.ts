import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
import { URL_CONST } from '../../config/url.constants';

import { USER } from '../../config/user';


@Injectable()
export class CommonService {





  options: RequestOptions;
  constructor(private http: Http) { }


  private padLeft(nr, n, str) {
    return Array(n - String(nr).length + 1).join(str || '0') + nr;
  }



 public Days360(StartDate, EndDate) {

    var moment = require('moment');


    var StartDay = moment(StartDate, "DD/MM/YYYY").date();
    var StartMonth = moment(StartDate, "DD/MM/YYYY").month();
    var StartYear = moment(StartDate, "DD/MM/YYYY").year();
    var EndDay = moment(EndDate, "DD/MM/YYYY").date();
    var EndMonth = moment(EndDate, "DD/MM/YYYY").month();
    var EndYear = moment(EndDate, "DD/MM/YYYY").year();


    if (StartDay == 31 || this.IsLastDayOfFebruary(StartDate)) {
      StartDay = 30;
    }

    if (StartDay == 30 && EndDay == 31) {
      EndDay = 30;
    }

    return ((EndYear - StartYear) * 360) + ((EndMonth - StartMonth) * 30) + (EndDay - StartDay);
  }

  IsLastDayOfFebruary(date) {
    return date.Month == 2 && date.Day == this.daysInMonth(date.Year, date.Month);
  }


  daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

  private handleError(error: Response) {
    console.error('Error occured - ', error);
    return Observable.throw(error.status || ' error');
  }

}
