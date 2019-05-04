import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gimos',
  templateUrl: './gimos.component.html',
  styleUrls: ['./gimos.component.css']
})
export class GimosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var data = JSON.stringify(false);

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        console.log(this.responseText);
      }
    });

    xhr.open("GET", "https://streamlabs.com/api/v1.0/points?access_token=access_token&username=username&channel=channel");

    xhr.send(data);
  }

}
