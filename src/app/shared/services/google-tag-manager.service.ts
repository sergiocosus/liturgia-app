import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {PlatformService} from "./platform.service";

declare var gtag: any;
@Injectable()
export class GoogleTagManager {
  production = environment.production;
  trackingId = environment.googleTagManagerId;

  constructor(private platformService: PlatformService) {
    console.log(environment);
    if (this.platformService.isPlatformServer()) {
      return;
    }

    /*if (this.production) {
      ga('create', this.trackingId, 'auto');
    } else {
      ga('create', this.trackingId, 'none');
    }*/
  }

  init() {
    if (this.production) {
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=' + environment.googleTagManagerId;
      document.head.prepend(script);
    }
  }


  pageView(url: string) {
    if (this.platformService.isPlatformServer()) {
      return;
    }

    if (this.production) {
      console.log('gtag');
      gtag('config', this.trackingId, {'page_path':url});
    }
  }
/*
  public emitEvent(eventCategory: string,
                   eventAction: string,
                   eventLabel: string = null,
                   eventValue: number = null) {
    if (this.platformService.isPlatformServer()) {
      return;
    }

    ga('send', 'event', {
      eventCategory: eventCategory,
      eventLabel: eventLabel,
      eventAction: eventAction,
      eventValue: eventValue
    });
  }*/
}
