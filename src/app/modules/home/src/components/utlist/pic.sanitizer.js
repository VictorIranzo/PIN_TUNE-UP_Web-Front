import {Pipe} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
// TODO: move to core
@Pipe({name: 'safeHtml'})
export class SafeHtml {
  constructor(sanitizer: DomSanitizer) {
    this.sanitizer = sanitizer;
  }
  transform(html) {
    if (html === '') return '';
    return this.sanitizer.bypassSecurityTrustResourceUrl(html);
  }
}
