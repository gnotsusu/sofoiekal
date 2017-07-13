import { FormPage } from './../pages/form/form';
import { AuthProvider } from './../providers/auth/auth';
import { Component , ViewChild } from '@angular/core';
import { Platform , MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = LoginPage;
  pages: Array<{title: string,icon:string, component: any}>;
  constructor(
    public auth:AuthProvider,
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public menu: MenuController,) {
    // this.auth.login().then((isLoggedIn)=>{
    //   if(isLoggedIn){
    //     this.rootPage = 'HomePage';
    //   }else{
    //     this.rootPage = 'LoginPage';
    //   }
    // });
    // platform.ready().then(() => {
    //   // Okay, so the platform is ready and our plugins are available.
    //   // Here you can do any higher level native things you might need.
    //   statusBar.styleDefault();
    //   splashScreen.hide();
    // });

    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'หน้าหลัก',icon:'home', component: HomePage },
      { title: 'บันทึกเรื่องราวร้องทุกข์',icon:'paper-airplane', component: FormPage },
      { title: 'ผลการดำเนินงาน',icon:'email-unread', component: HomePage },
      { title: 'รายงาน',icon:'paper', component: HomePage },
      { title: 'Logout',icon:'lock', component: LoginPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
