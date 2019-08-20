import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { UserService } from '../user.service';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-page8',
  templateUrl: './page8.page.html',
  styleUrls: ['./page8.page.scss'],
})
export class Page8Page implements OnInit {
  user: any;
  pageLocation = 8

  constructor(public navCtrl: NavController, public alertController: AlertController, public userService: UserService, public storyService: StoryService) {

  }

  ngOnInit() {
    this.user = this.userService.user;
  }

  // Story set up
  gameName = "Bread Knight: Journey for the Sandwich of Destiny - A Text Based Adventure!";
  chapter = "Ch. 3-1: The Road is a Harsh Mistress.";
  location = "Location: Kitchensburgh";
  title = "You've finally made it to Kitchensburgh, but the journey continues.";
  story = "As you search for the Sandwich's final location, you must traverse the city. Onward you go. When suddenly... ";

  // Now we'll send them over to the story service we're they'll have a 50/50 chance or something good versus something bad happening
  goodOrBadStoryOccurrenceHandler() {
    this.storyService.goodOrBadStoryOccurrenceHandler(this.user, this.pageLocation) //not that we send their user data and the source page number along with them
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
            this.userService.deleteUser(this.user['id']).subscribe(deletedUser => {
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