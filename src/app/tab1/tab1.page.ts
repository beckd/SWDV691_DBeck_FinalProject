import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { UserService } from '../user.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  gameName = "Bread Knight: Journey for the Sandwich of Destiny - A Text Based Adventure!";
  chapter = "Welcome Hungry Adventurer!";
  location = "You find yourself in grave peril!";
  title = "Beset by hunger you vow to claim the sandwich of destiny.";
  story = "You begin your journey from Couchlandia, your home. You will journey through Dining Roomopolis and on to Kitchensburgh where the fated sandwich awaits!";

  constructor(public navCtrl: NavController, public alertController: AlertController, public userService: UserService) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: "What's in a name?",
      subHeader: "Your Hunger Level (health) will start at 100, and you have 10 Pickle Chips (currency).",
      message: 'Give us your name before embarking on your journey!',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Hungry Adventurer',
          value: null,
        },
        {
          name: 'health',
          type: 'number',
          disabled: true,
          placeholder: '100 - Hunger Level',
          value: 100
        },
        {
          name: 'currency',
          type: 'number',
          disabled: true,
          placeholder: '10',
          value: 10
        },
      ],
      buttons: [
        {
          text: "Let's Go!",
          role: 'ok',
          cssClass: 'secondary',
          handler: (User) => {
            // Let's create new user
            this.userService.addUser(User).subscribe(createdUser => {
              console.log('new userrrr', createdUser)
              // Let's make sure we can find them too
              this.userService.getUser(createdUser['_id']).subscribe(foundUser => {
                console.log('Confirm ok', foundUser);
                // Now let's take the user to the next page and include their user stats
                this.userService.user = foundUser;
                this.navCtrl.navigateForward('page2');
              });
            });
          }

        }
      ],
    });
    await alert.present();
  }

}
