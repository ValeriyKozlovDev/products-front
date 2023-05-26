import { Injectable } from '@angular/core';

import { ResponseHandlerDirective } from '../directives/response-handler.directive';

@Injectable({
  providedIn: 'root'
})
export class ResponseHandlerService {
  responseHandlerDirective!: ResponseHandlerDirective
  constructor() { }

  response(resp: any) {
    this.responseHandlerDirective = new ResponseHandlerDirective();
    this.responseHandlerDirective.responseHandler = resp;
    this.responseHandlerDirective.ngOnChanges()
  }
}
