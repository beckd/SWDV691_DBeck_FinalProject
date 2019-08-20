import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { UserService } from '../user.service';
import { StoryService } from '../story.service';
import { VillainService } from '../villain.service';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.page.html',
  styleUrls: ['./page4.page.scss'],
})
export class Page4Page implements OnInit {

  constructor(public villainService: VillainService, public navCtrl: NavController, public alertController: AlertController, public userService: UserService, public storyService: StoryService) { }

  user: any;

  ngOnInit() {
    this.user = this.userService.user;
  }
  gameName = "Bread Knight: Journey for the Sandwich of Destiny - A Text Based Adventure!";
  chapter = "Ch. 1-3: Villains Villains Everywhere!";
  location = "Location: Couchtopia";
  title = "You're nearing the border of Couchtopia and Living Roomopolis. But instead of excitement you feel a sense of unease.";
  story = "Something doesn't seem quite right. You pause to look around, when suddenly... ";

  villain1(user) {
    this.villainService.villain_1_Story1(user);
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
