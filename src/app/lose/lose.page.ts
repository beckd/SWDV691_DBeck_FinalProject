import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { UserService } from '../user.service';

@Component({
  selector: 'app-lose',
  templateUrl: './lose.page.html',
  styleUrls: ['./lose.page.scss'],
})
export class LosePage implements OnInit {
  user: any
  constructor(public navCtrl: NavController, public alertController: AlertController, public userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.user;
  }
  gameName = "Bread Knight: Journey for the Sandwich of Destiny - A Text Based Adventure!";
  chapter = "This Adventure Has Come to an End.";
  title = "What could lie ahead for our hero?";
  story = "You started off so fully of hope, but have been left wanting ... a Sandwich. Try again!";

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
