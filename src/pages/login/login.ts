import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more infov
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loading : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth : AuthProvider, public  loadiCtrl : LoadingController ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goToHome(){

    this.showLoading()
    this.auth.login().then((res)=> {
      this.loading.dismiss();
      this.navCtrl.push(HomePage);
      console.log(res);
    }, (err)=>{
      this.loading.dismiss();
      console.log(err);
    });

  }

  showLoading(){
    this.loading = this.loadiCtrl.create({
      content : 'ยื่นยันตัวตน...'
    });
    this.loading.present();
  }

}
