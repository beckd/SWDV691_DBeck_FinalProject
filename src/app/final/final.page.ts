import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { UserService } from '../user.service';
import { StoryService } from '../story.service';


@Component({
  selector: 'app-final',
  templateUrl: './final.page.html',
  styleUrls: ['./final.page.scss'],
})
export class FinalPage implements OnInit {
  user: any;

  constructor(public navCtrl: NavController, public alertController: AlertController, public userService: UserService, public storyService: StoryService) {

  }

  ngOnInit() {
    this.user = this.userService.user;
  }

  // Story set up
  gameName = "Bread Knight: Journey for the Sandwich of Destiny - A Text Based Adventure!";
  chapter = "Ch. Final: The Moment of Truth!";
  location = "Location: Sandwich Cave";
  title = "You see the Sandwich bathed in a pillar of light atop a pedestal.";
  story = "You begin to climb the steps toward the Sandwich, cautiously, for who knows the traps that could be waiting for you!";


  finalStage(user) {
    this.storyService.finalStage() 
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
