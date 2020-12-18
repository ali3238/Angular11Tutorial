import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'jquery-knob';

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
        'draw':function () {
          
        }
      });
      var elm = $($(".circle-box"));
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

    var $t = $(".counter-box"),
          n = $t.find(".counter-text").attr("data-stop"),
          val=$t.find(".counter-text").attr("data-speed")!,
          r = parseInt(val, 10);
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
  }

}
