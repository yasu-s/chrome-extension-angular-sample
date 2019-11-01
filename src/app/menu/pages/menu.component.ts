import { Component } from '@angular/core';

import { DataService } from '@ng-sample/core/services';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  data = null;
  err = null;

  constructor(private dataService: DataService) {}

  onClick(): void {
    this.dataService.get().subscribe(
      (data) => {
        this.data = data;
      },
      (err) => {
        this.err = err;
      },
    );
  }
}
