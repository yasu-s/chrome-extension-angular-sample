import { NgModule } from '@angular/core';

import { SharedModule } from '@ng-sample/shared';

import { ABOUT_PAGES } from './pages';
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
  imports: [SharedModule, AboutRoutingModule],
  declarations: [ABOUT_PAGES],
  providers: [],
})
export class AboutModule {}
