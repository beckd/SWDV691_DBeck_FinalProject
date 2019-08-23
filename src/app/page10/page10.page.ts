import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { UserService } from '../user.service';
import { StoryService } from '../story.service';
import { VillainService } from '../villain.service';

@Component({
  selector: 'app-page10',
  templateUrl: './page10.page.html',
  styleUrls: ['./page10.page.scss'],
})
export class Page10Page implements OnInit {

  constructor(public villainService: VillainService, public navCtrl: NavController, public alertController: AlertController, public userService: UserService, public storyService: StoryService) { }

  user: any;

  ngOnInit() {
    this.user = this.userService.user;
  }

  gameName = "Bread Knight: Journey for the Sandwich of Destiny - A Text Based Adventure!";
  chapter = "Ch. 3-3: The End is Nigh!";
  location = "Location: Kitchensburgh";
  title = "On the outskirts of Kitchensburgh, where the Sandwich of Destiny is rumored to reside, you're level of excitement increases.";
  story = "At the foot of Mount Kitchensburgh, you see a bridge with jagged rocks far below. The mouth to the cave where the Sandwich is located is on the other side. When suddenly...";

  villain3() {
    this.villainService.villain_3_Story1();
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

