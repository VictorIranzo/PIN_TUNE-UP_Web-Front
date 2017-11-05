import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';

import html from './details.component.html';
import './details.component.css';

import 'rxjs/add/operator/switchMap';

import {DetailsService} from './services';

@Component({
  selector: 'tn-ut-details',
  template: html,
})
export class DetailsComponent {
  ut = null;
  id = null;
  constructor(route: ActivatedRoute,
              location: Location,
              detailsService: DetailsService) {
        this._route = route;
        this._detailsService = detailsService;
  }

  ngOnInit() {
    // this._route.paramMap
    // .switchMap((params) => this._detailsService.getUt(+params.get('id')))
    // .subscribe((ut) => this.ut = ut);
    this.id= parseInt(this._route.params._value.id);
    this._detailsService.getUt(this.id).subscribe((data) => {
      this.ut = data;
    });
  }
}
