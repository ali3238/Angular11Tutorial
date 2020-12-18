import { Component, OnInit } from '@angular/core';
import 'swiper/swiper-bundle.css';
import * as $ from 'jquery';
import 'jquery-knob';
// import Swiper from 'swiper';
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(function () {
      $(".circle-box").knob({
        'readOnly': true,
        'displayInput': false,
        'draw': function () {
        }
      });
      $.each($(".circle-box"), function (i, el) {
        var elm = $(el);
        var color = elm.attr("data-fgColor");
        var perc = elm.attr("value");
        var thickness = elm.attr("data-thickness");
        $({
          value: 0
        }).animate({
          value: perc
        }, {
          duration: 2000,
          easing: "swing",
          progress: function () {
            elm.val(Math.ceil(this.value)).trigger("change");
          }
        });
      });
    });
    $.each($(".counter-box"), function (i, el) {
      var $t = $(el),
        n = $t.find(".counter-text").attr("data-stop"),
        r = parseInt($t.find(".counter-text").attr("data-speed")!, 10);
      if (!$t.hasClass("counted")) {
        $t.addClass("counted");
        $({
          countNum: $t.find(".counter-text").text()
        }).animate({
          countNum: n
        }, {
          duration: r,
          easing: "linear",
          step: function () {
            $t.find(".counter-text").text(Math.floor(parseInt(this.countNum)));
          },
          complete: function () {
            $t.find(".counter-text").text(this.countNum);
          }
        });
      }
    });



    var swiperslider = new Swiper('.slider-one', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 8000,
      },
    });
    var slidertwo = new Swiper('.slider-two', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 8000,
      },
    });
    $("[data-background]").each(function () {
      $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });
    
  }
}
