import { NgModule } from '@angular/core';

import { SharedModule } from '@ng-sample/shared';

import { MENU_PAGES } from './pages';
import { MenuRoutingModule } from './menu-routing.module';

@NgModule({
  imports: [SharedModule, MenuRoutingModule],
  declarations: [MENU_PAGES],
  providers: [],
})
export class MenuModule {}
