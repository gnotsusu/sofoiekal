import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { FormPage } from '../form/form';

@Component({
  selector: 'page-login',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FormPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
