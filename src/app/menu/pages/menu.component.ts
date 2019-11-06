import { Component } from '@angular/core';

import { DataService } from '@ng-sample/core/services';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  data = null;
  err = null;
  num = 0;

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

  onPostMessage(): void {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const color = this.num % 2 === 0 ? 'black' : 'yellow';
      chrome.tabs.sendMessage(tabs[0].id as number, { type: 'send', color });
      this.num++;
    });
  }
}
