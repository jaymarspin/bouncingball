import { Component } from '@angular/core';
import * as $ from 'jquery'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  colors = ['#000', '#7a3636', '#409ea5', '#da2dda']
  constructor() { }
  ngOnInit(): void {

    let w: any = $("body").width()
    let forward = true
    let c = 1
    let y = 1


    let circles = $(".dot")
    for (let index = 0; index < circles.length; index++) {
      $(circles[index]).css({
        'background-color': this.colors[index]
      })

    }
    setInterval(() => {

      for (let index = 0; index < circles.length; index++) {
        let val = Math.floor(Math.random() * 2);
        if (forward === true) {
          c += val
        } else {
          c--
        }
        if (c === w) {
          forward = false
        }
        if (c === 0) {
          forward = true
        }

        $(circles[index]).css({
          left: `${c}px`
        })
      }




    }, 10)
    $(".dot").click(e => {
      $(e.target).fadeOut(100)
    })
  }


}
