import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { UserService } from '../user.service';
import { StoryService } from '../story.service';
import { VillainService } from '../villain.service';

@Component({
  selector: 'app-page7',
  templateUrl: './page7.page.html',
  styleUrls: ['./page7.page.scss'],
})
export class Page7Page implements OnInit {

  constructor(public villainService: VillainService, public navCtrl: NavController, public alertController: AlertController, public userService: UserService, public storyService: StoryService) { }

  user: any;

  ngOnInit() {
    this.user = this.userService.user;
  }
  gameName = "Bread Knight: Journey for the Sandwich of Destiny - A Text Based Adventure!";
  chapter = "Ch. 2-3: It's a Trap!";
  location = "Location: Dining Roomopolis";
  title = "At long last you've reach the outer limits of Dining Roomopolis. The skyline of Kitchensburgh is just peeking out of the clouds in the distance.";
  story = "Everything is peaceful, everything is serene, you feel in control of your destiny. When suddenly... ";

  villain2(user) {
    this.villainService.villain_2_Story1(user);
  }
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
