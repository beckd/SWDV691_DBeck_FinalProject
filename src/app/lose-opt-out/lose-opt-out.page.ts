import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { UserService } from '../user.service';

@Component({
  selector: 'app-lose-opt-out',
  templateUrl: './lose-opt-out.page.html',
  styleUrls: ['./lose-opt-out.page.scss'],
})
export class LoseOptOutPage implements OnInit {
  user: any
  constructor(public navCtrl: NavController, public alertController: AlertController, public userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.user;
  }
  gameName = "Bread Knight: Journey for the Sandwich of Destiny - A Text Based Adventure!";
  chapter = "You Chose To Walk Away.";
  location = "Location: Kitchesburgh";
  title = "Sometimes the moment is just too big.";
  story = "You didn't have what it takes to eat a Sandwich like that, and that's ok. You start the long walk back to Couchtopia. Perhaps try again later?";
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
