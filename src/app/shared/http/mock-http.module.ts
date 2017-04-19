import { NgModule, Injector } from '@angular/core';
import { HttpModule, XHRBackend, BrowserXhr, ResponseOptions, XSRFStrategy } from '@angular/http';

import { InMemoryBackendService } from 'angular-in-memory-web-api';
import { MockDataService } from './mock-data.service';

@NgModule({
  imports: [ HttpModule ],
  providers: [
    {
      provide: XHRBackend,
      useFactory: getBackEnd,
      deps: [ Injector, BrowserXhr, XSRFStrategy, ResponseOptions ]
    }
  ]
})
export class MockHttpModule {}

export function getBackEnd(
    injector: Injector,
    browser: BrowserXhr,
    xsrf: XSRFStrategy,
    options: ResponseOptions): any {

  // return new XHRBackend(browser, options, xsrf);
  return new InMemoryBackendService(injector, new MockDataService(), {});
}
