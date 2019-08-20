import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { UserService } from '../user.service';

@Component({
  selector: 'app-win',
  templateUrl: './win.page.html',
  styleUrls: ['./win.page.scss'],
})
export class WinPage implements OnInit {
  user: any
  constructor(public navCtrl: NavController, public alertController: AlertController, public userService: UserService) { }

  ngOnInit() {
    this.user = this.navCtrl['router'].browserUrlTree.queryParams;
  }
  gameName = "Bread Knight: Journey for the Sandwich of Destiny - A Text Based Adventure!";
  chapter = "You Are Victorious!";
  location = "Location: Couchtopia";
  title = "You've won the Sandwich of Destiny and Sated Your Hunger!";
  story = "No longer hungry, you ponder what what to do with the rest of your life. What comes next after such a momentous adventure? Do you seek out other legendary meals? Afterall, dinner is just a few hours away.";
  async restartGame() {
    const alert = await this.alertController.create({
      header: "Play It Again!",
      message: "Replay the story, make different decisions, and see if you are still victorious!",
      buttons: [
        {
          text: "Cancel",
          handler: () => {
            console.log("Confirm Cancel")
          }
        },
        {
          text: "Let's Do It!",
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

