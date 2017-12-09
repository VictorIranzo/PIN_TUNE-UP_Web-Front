import {Injectable} from '@angular/core';

@Injectable()
export class UpdateKanbanResumeService {
  _updateKanban;
  set init(fun) {
    this._updateKanban = fun;
  }

  update() {
    this._updateKanban();
  }
}
