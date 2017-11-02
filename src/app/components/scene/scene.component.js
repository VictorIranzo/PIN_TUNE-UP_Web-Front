import {Component} from '@angular/core';
import html from './scene.component.html';
import './scene.component.css';
import {SceneService} from './scene.service';

@Component({
  selector: 'tn-scene',
  template: html,
  providers: [SceneService],
})
export class SceneComponent {
  constructor(sceneService: SceneService) {
    this._sceneService = sceneService;
  }
  ngOnDestroy() {
    this._sceneService.dispose();
  }
}
