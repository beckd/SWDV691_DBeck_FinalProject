import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { UserService } from '../user.service';

@Component({
  selector: 'app-crud-demo',
  templateUrl: 'crud-demo.page.html',
  styleUrls: ['crud-demo.page.scss']
})
export class CrudDemoPage {

  constructor(public navCtrl: NavController, public alertController: AlertController, public userService: UserService) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: "Crud Demo",
      message: 'Enter a name and hit "Go!" to see Crud in action.',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Crud Lover',
          value: null,
        },
        {
          name: 'health',
          type: 'number',
          disabled: true,
          placeholder: '100',
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
          text: "Go!",
          role: 'ok',
          cssClass: 'secondary',
          handler: (User) => {
            this.userService.addUser(User).subscribe(createdUser => {
              console.log('new user', createdUser)
              this.userService.getUser(createdUser['_id']).subscribe(foundUser => {
                console.log('Confirm ok', foundUser);
                this.userService.updateUser(foundUser['_id'], { currency: 4, health: 5 }).subscribe(updatedUser => {
                  console.log('Confirm update', updatedUser);
                  this.userService.statCheck(updatedUser['_id']).subscribe(statResult => {
                    console.log('Stat Check', statResult);
                    this.userService.deleteUser(updatedUser['_id']).subscribe(deletedUser => {
                      console.log('Confirm delete', deletedUser);
                      });
                    });
                  });
                });
              });
          }

        }
      ],
    });
    await alert.present();
  }

}

