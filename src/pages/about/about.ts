import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  varLat: string = '';
  varLng: string = '';

  constructor(public navCtrl: NavController, public geolocation: Geolocation) {

  }


  ionViewDidLoad(){
    this.loadMap();
  }

  loadMap(){

    this.geolocation.getCurrentPosition().then((position) => {

    let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.addMarker();
    }, (err) => {
      console.log(err);
    });

  }

  getLocation(){
    this.loadMap();
  }

  addMarker(){
    let marker = new google.maps.Marker({
      map: this.map,
      draggable: true,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });


    this.varLat = marker.position.lat();
    this.varLng = marker.position.lng();
    console.log('Current Latitude:',marker.position.lat(),':', marker.position.lng());
    //console.log('Var Lat:',this.varLat);
    let content = "<b>ตำแหน่งคุณ</b>";
    this.addInfoWindow(marker, content);

  }

  addInfoWindow(marker, content){

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

    google.maps.event.addListener(marker, 'dragend', () => {
      infoWindow.open(this.map, marker);
      this.varLat = marker.position.lat();
      this.varLng = marker.position.lng();
    });

  }

  saveMap(){
    console.log('saveMap Latitude:',this.varLat,',',this.varLng);
  }

}
