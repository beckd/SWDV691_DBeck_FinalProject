// Several of the pages in the game are random story events. There is a story service that handles these pages, we just
// declare a page location to keep track of where they are coming in from so we can forward them to the correct next page

import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { UserService } from '../user.service';
import { StoryService } from '../story.service';


@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {
  user: any;
  pageLocation = 2

  constructor(public navCtrl: NavController, public alertController: AlertController, public userService: UserService, public storyService: StoryService) {

  }

  ngOnInit() {
    this.user = this.userService.user;
  }

  // Story set up
  gameName = "Bread Knight: Journey for the Sandwich of Destiny - A Text Based Adventure!";
  chapter = "Ch. 1-1: The Adventure Begins!";
  location = "Location: Couchtopia";
  title = "You set off from the comfy confines of Couchtopia, your home!";
  story = "You know the journey will be a long one, but you have a full belly and a few Pickle Chips to get you started. You know that anything could happen. You start down the path toward Kitchensburgh, when suddenly... ";

  // Now we'll send them over to the story service we're they'll have a 50/50 chance or something good versus something bad happening
  goodOrBadStoryOccurrenceHandler() {
    this.storyService.goodOrBadStoryOccurrenceHandler(this.pageLocation) //not that we send their user data and the source page number along with them
  }
  // Restart game button functionality
  async restartGame() {
    const alert = await this.alertController.create({
      header: "Want to restart?",
      message: "Selecting OK will erase this game and send you back to the start of our story.",
      buttons: [
        {
          text: "Cancel",
          handler: () => {
            console.log("Confirm Cancel")
          }
        },
        {
          text: "Continue",
          role: 'ok',
          cssClass: 'secondary',
          handler: () => {
            console.log('This is the restart button confirmation')
            this.userService.deleteUser(this.user['_id']).subscribe(deletedUser => {
              console.log('Deleted user', deletedUser);
              this.navCtrl.navigateForward('tabs/tab1')
            }
            )
          }
        }
      ],
    })
    await alert.present();
  };
}



