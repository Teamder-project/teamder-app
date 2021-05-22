import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { HammerGestureConfig } from "@angular/platform-browser";
import * as hammer from "hammerjs";


@Component({
  selector: 'app-swipe-ju',
  templateUrl: './swipe-ju.component.html',
  styleUrls: ['./swipe-ju.component.css']
})
export class SwipeJuComponent extends HammerGestureConfig implements OnInit {
  
  images = [
    {nom : "Pif", prenom : "Coucou", age : 26},
    {nom : "Paf", prenom : "Cuicui", age : 30},
    {nom : "Pouf", prenom : "Crucru", age : 58},
    {nom : "toto", prenom : "roro", age : 12},
    {nom : "titi", prenom : "riri", age : 27},
    {nom : "tutu", prenom : "rara", age : 69},
    {nom : "cucu", prenom : "momo", age : 14},
    {nom : "coco", prenom : "mimi", age : 18},
    {nom : "caca", prenom : "mama", age : 78},
  ]

  overrides = <any>{
    swipe: { direction: hammer.DIRECTION_HORIZONTAL },
    pinch: { enable: false },
    rotate: { enable: false }
  };

  constructor() {
    super();
   }

  ngOnInit(): void {

    setInterval(this.rafraichir, 100);
  }

  rafraichir = () => {
    
    let id = document.querySelector("#swipe0");
    if(id.classList.contains("swiper-slide-prev")) {
      


    }
 
  }
  swipeRight(): void {
    console.log("droite")
    
  }

  swipeLeft(): void {
    console.log("gauche")
    
  }

  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30

  }


}
