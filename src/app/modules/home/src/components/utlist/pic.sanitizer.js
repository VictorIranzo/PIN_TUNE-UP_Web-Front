import {Pipe} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({name: 'safeHtml'})
export class SafeHtml {
  constructor(sanitizer: DomSanitizer) {
    this.sanitizer = sanitizer;
  }
  transform(html) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(html);
  }
}
