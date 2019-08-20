import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  gameName = "Bread Knight by David Beck";
  chapter = "Final Project for the SWDV 691 Capstone Course";
  title = "A Faithful Update from a SWDV 600 Assignment";
  story = "I wanted to revisit a previous assignment from SWDV 600, were we created text based adventure game in Python. I wanted to apply the skills I learned since then to that game and fully deploy it. ";
  info = "This game was built on a MINE stack (MongoDB, Ionic, Node.js, Express)"
}
