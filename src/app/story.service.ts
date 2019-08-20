// Handles the random story elements that appear on several pages. 
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { UserService } from './user.service';
import { NavController, NavParams } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  user: any;
  constructor(public navCtrl: NavController, public alertController: AlertController, public userService: UserService) {
    this.user = this.userService.user
   }

  async goodOrBadStoryOccurrenceHandler(user, pageLocation) {
    // adding more randomness to the game!
    // alert that will give a random number that drives the user toward a Good outcome or a Bad outcome
    //Let's start by getting a random number between 1 - 6
    var storyValue = Math.floor(Math.random() * 6) + 1
    const alert = await this.alertController.create({
      // add a message for all instances of this 
      header: "You continue onward, curious what could happent next.",
      subHeader: "The way is fraught with danger, but also excitement.",
      message: "You come up to a bend in the road, what could be around the corner?",
      buttons: [
        {
          text: 'Continue the Journey',
          handler: (user) => {
            // now direct the user toward the outcome that matches their random number 
            if (storyValue == 1) {
              this.goodOutcome1(storyValue, pageLocation);
            } else if (storyValue == 2) {
              this.goodOutcome2(storyValue, pageLocation);
            } else if (storyValue == 3) {
              this.goodOutcome3(storyValue, pageLocation);
            } else if (storyValue == 4) {
              this.badOutcome1(storyValue, pageLocation);
            } else if (storyValue == 5) {
              this.badOutcome2(storyValue, pageLocation);
            } else {
              this.badOutcome3(storyValue, pageLocation);
            }
          }
        },
      ]
    });
    await alert.present();
  }
  // GOOD OUTCOME 1 STORY FLOW
  async goodOutcome1(storyValue, pageLocation) {
    const alert = await this.alertController.create({
      header: "You continue on your journey. As you cross a path, you see a glimmer reflected by sunlight.",
      buttons: [
        {
          text: 'Continue',
          handler: (user) => {
            this.goodOutcome1_2(storyValue, pageLocation);
          }
        }
      ]
    });
    await alert.present();
  }
  async goodOutcome1_2(storyValue, pageLocation) {
    const alert = await this.alertController.create({
      header: "You clear the debris away and find a small pile of Pickle Chips.",
      subHeader: 'Fortune favors your noble cause!',
      buttons: [
        {
          text: 'Continue',
          handler: (user) => {
            this.outcomeHandler(storyValue, pageLocation);
          }
        }
      ]
    });
    await alert.present();
  }
 
  // GOOD OUTCOME 2 STORY FLOW
  async goodOutcome2(storyValue, pageLocation) {
    const alert = await this.alertController.create({
      header: "As you are walking you see another traveler walking toward you in the opposite direction.",
      subHeader: 'The happy traveler sees you and gives you a friendly wave. You cautiously wave back.',
      buttons: [
        {
          text: 'Continue',
          handler: (user) => {
            this.goodOutcome2_2(storyValue, pageLocation);
          }
        }
      ]
    });
    await alert.present();
  }
  async goodOutcome2_2(storyValue, pageLocation) {
    const alert = await this.alertController.create({
      header: "'Hello! I've journeyed far to the Kitchenburgh, I ate the Sandwich rumored there!' says the traveler.",
      subHeader: "'You have?!?! That's is where I'm headed!' You excitedly reply. 'Well friend, take this!' The stranger says.",
      buttons: [
        {
          text: 'Continue',
          handler: (user) => {
            this.goodOutcome2_3(storyValue, pageLocation);
          }
        }
      ]
    });
    await alert.present();
  }
  async goodOutcome2_3(storyValue, pageLocation) {
    const alert = await this.alertController.create({
      header: "He tosses you his pack as you cross each other's paths.",
      subHeader: "'I won't need this anymore. I don't think I'll ever need to eat again!'",
      buttons: [
        {
          text: 'Continue',
          handler: (user) => {
            this.goodOutcome2_4(storyValue, pageLocation);
          }
        }
      ]
    });
    await alert.present();
  }
  async goodOutcome2_4(storyValue, pageLocation) {
    const alert = await this.alertController.create({
      header: "You reach inside and find food and Pickle Chips.",
      subHeader: "You turn to thank the traveler, but they have disappeared around a bend.",
      buttons: [
        {
          text: 'Continue',
          handler: (user) => {
            this.outcomeHandler(storyValue, pageLocation);
          }
        }
      ]
    });
    await alert.present();
  }

  // GOOD OUTCOME 3 STORY FLOW
  async goodOutcome3(storyValue, pageLocation) {
    const alert = await this.alertController.create({
      header: "The journey is arduous, but you never break the faith of your quest.",
      subHeader: "You encounter a sack in the middle of the road...",
      buttons: [
        {
          text: 'Continue',
          handler: (user) => {
            this.goodOutcome3_2(storyValue, pageLocation);
          }
        }
      ]
    });
    await alert.present();
  }
  async goodOutcome3_2(storyValue, pageLocation) {
    const alert = await this.alertController.create({
      header: "Curiousity gets the better of you and you reach inside.",
      subHeader: "As you rumage around, your hand comes to an orb of some sort. Grasping it, you pull your hand back out. An apple!",
      buttons: [
        {
          text: 'Continue',
          handler: (user) => {
            this.goodOutcome3_3(storyValue, pageLocation);
          }
        }
      ]
    });
    await alert.present();
  }
  async goodOutcome3_3(storyValue, pageLocation) {
    const alert = await this.alertController.create({
      header: "You happily eat the apple, enjoying its juicy goodness.",
      buttons: [
        {
          text: 'Continue',
          handler: (user) => {
            this.outcomeHandler(storyValue, pageLocation);
          }
        }
      ]
    });
    await alert.present();
  }
  // BAD OUTCOME 1 STORY FLOW
  async badOutcome1(storyValue, pageLocation) {
    const alert = await this.alertController.create({
      header: "You are merrily walking along. You are brimming with hope for the journey ahead. Nothing can stop this feeling!",
      buttons: [
        {
          text: 'Continue',
          handler: (user) => {
            this.badOutcome1_2(storyValue, pageLocation);
          }
        }
      ]
    });
    await alert.present();
  }
  async badOutcome1_2(storyValue, pageLocation) {
    const alert = await this.alertController.create({
      header: "Suddenly, you trip over protruding tree root. Your ankle is twisted and trobbing.",
      buttons: [
        {
          text: 'Continue',
          handler: (user) => {
            this.outcomeHandler(storyValue, pageLocation);
          }
        }
      ]
    });
    await alert.present();
  }
  // BAD OUTCOME 2 STORY FLOW
  async badOutcome2(storyValue, pageLocation) {
    const alert = await this.alertController.create({
      header: "The journey is tougher than you'd thought it would be. You must rest for the night.",
      buttons: [
        {
          text: 'Continue',
          handler: (user) => {
            this.badOutcome2_2(storyValue, pageLocation);
          }
        }
      ]
    });
    await alert.present();
  }
  async badOutcome2_2(storyValue, pageLocation) {
    const alert = await this.alertController.create({
      header: "When you wake in the early morning hours, you are obviously a little hungrier than you were yesterday.",
      subHeader: "You also notice your belongings are a little ruffled...",
      buttons: [
        {
          text: 'Continue',
          handler: (user) => {
            this.badOutcome2_3(storyValue, pageLocation);
          }
        }
      ]
    });
    await alert.present();
  }
  async badOutcome2_3(storyValue, pageLocation) {
    const alert = await this.alertController.create({
      header: "Sandwich bandits have struck!",
      subHeader: "You take count of your belongs and notice some of your Pickle Chips are missing and some food is gone too.",
      buttons: [
        {
          text: 'Continue',
          handler: (user) => {
            this.outcomeHandler(storyValue, pageLocation);
          }
        }
      ]
    });
    await alert.present();
  }
  // BAD OUTCOME 3 STORY FLOW
  async badOutcome3(storyValue, pageLocation) {
    const alert = await this.alertController.create({
      header: "Walking along, minding your own business, you are suddenly shocked as a man in a shabby suit jumps out of the bushes alongside the road.",
      buttons: [
        {
          text: 'Continue',
          handler: (user) => {
            this.badOutcome3_2(storyValue, pageLocation);
          }
        }
      ]
    });
    await alert.present();
  }
  async badOutcome3_2(storyValue, pageLocation) {
    const alert = await this.alertController.create({
      header: "'You are obviously on your way to Kitchenburgh for the Sandwich of Destiny.' The man blurts out. 'It just so happens I sell Sandwich insurance.'",
      buttons: [
        {
          text: 'Continue',
          handler: (user) => {
            this.badOutcome3_3(storyValue, pageLocation);
          }
        }
      ]
    });
    await alert.present();
  }
  async badOutcome3_3(storyValue, pageLocation) {
    const alert = await this.alertController.create({
      header: "Before you can decline his offer of insurance he brandishes a bread knife and gives you a wry smile.",
      subHeader: "Knowing you've been had, you reply, 'Suppose I should get that insurance after all.'",
      buttons: [
        {
          text: 'Continue',
          handler: (user) => {
            this.outcomeHandler(storyValue, pageLocation);
          }
        }
      ]
    });
    await alert.present();
  }
  async outcomeHandler(storyValue, pageLocation) {
    this.user = this.userService.user;
    if (storyValue == 1) {
      const alert = await this.alertController.create({
        header: 'You quickly count your treasure...',
        subHeader: '15 Pickle Chips have been added to your total!',
        buttons: [
          {
            text: 'Continue',
            handler: () => {
              this.userService.updateUser(this.user['_id'], { currency: 15 }).subscribe(updatedUser => {
                this.userService.statCheck(this.user['_id']).subscribe(statResult => {
                  this.userService.user = updatedUser;
                  if (statResult && pageLocation == 2) {
                    this.navCtrl.navigateForward('page3')
                  } else if (statResult && pageLocation == 3) {
                    this.navCtrl.navigateForward('page4')
                  } else if (statResult && pageLocation == 5) {
                    this.navCtrl.navigateForward('page6')
                  } else if (statResult && pageLocation == 6) {
                    this.navCtrl.navigateForward('page7')
                  } else if (statResult && pageLocation == 8) {
                    this.navCtrl.navigateForward('page9')
                  } else if (statResult && pageLocation == 9) {
                    this.navCtrl.navigateForward('page10')
                  } else {
                    this.navCtrl.navigateForward('lose')
                  }
                });
              });
            }
          }
        ]
      });
      await alert.present();
    } else if (storyValue == 2){
      const alert = await this.alertController.create({
        header: 'You marvel at your good fortune.',
        subHeader: '20 Pickle Chips and 15 Hunger Level has been added to your total!',
        buttons: [
          {
            text: 'Continue',
            handler: () => {
              this.userService.updateUser(this.user['_id'], { currency: 20, health: 15 }).subscribe(updatedUser => {
                this.userService.statCheck(this.user['_id']).subscribe(statResult => {
                  this.userService.user = updatedUser;
                  if (statResult && pageLocation == 2) {
                    this.navCtrl.navigateForward('page3')
                  } else if (statResult && pageLocation == 3) {
                    this.navCtrl.navigateForward('page4')
                  } else if (statResult && pageLocation == 5) {
                    this.navCtrl.navigateForward('page6')
                  } else if (statResult && pageLocation == 6) {
                    this.navCtrl.navigateForward('page7')
                  } else if (statResult && pageLocation == 8) {
                    this.navCtrl.navigateForward('page9')
                  } else if (statResult && pageLocation == 9) {
                    this.navCtrl.navigateForward('page10')
                  } else {
                    this.navCtrl.navigateForward('lose')
                  }
                });
              });
            }
          }
        ]
      });
      await alert.present();      
    } else if (storyValue == 3) {
      const alert = await this.alertController.create({
        header: 'You feel stronger and ready for whatever lies ahead.',
        subHeader: '10 Hunger Level has been added to your total!',
        buttons: [
          {
            text: 'Continue',
            handler: () => {
              this.userService.updateUser(this.user['_id'], { health: 10 }).subscribe(updatedUser => {
                this.userService.statCheck(this.user['_id']).subscribe(statResult => {
                  this.userService.user = updatedUser;
                  if (statResult && pageLocation == 2) {
                    this.navCtrl.navigateForward('page3')
                  } else if (statResult && pageLocation == 3) {
                    this.navCtrl.navigateForward('page4')
                  } else if (statResult && pageLocation == 5) {
                    this.navCtrl.navigateForward('page6')
                  } else if (statResult && pageLocation == 6) {
                    this.navCtrl.navigateForward('page7')
                  } else if (statResult && pageLocation == 8) {
                    this.navCtrl.navigateForward('page9')
                  } else if (statResult && pageLocation == 9) {
                    this.navCtrl.navigateForward('page10')
                  } else {
                    this.navCtrl.navigateForward('lose')
                  }
                });
              });
            }
          }
        ]
      });
      await alert.present();
    } else if (storyValue == 4) {
      const alert = await this.alertController.create({
        header: 'You must wait a day to heal up enough to continue on.',
        subHeader: 'Your Hunger Level decreases by 10.',
        buttons: [
          {
            text: 'Continue',
            handler: () => {
              this.userService.updateUser(this.user['_id'], { health: -10 }).subscribe(updatedUser => {
                this.userService.statCheck(this.user['_id']).subscribe(statResult => {
                  this.userService.user = updatedUser;
                  if (statResult && pageLocation == 2 ) {
                    this.navCtrl.navigateForward('page3')
                  } else if (statResult && pageLocation == 3) {
                    this.navCtrl.navigateForward('page4')
                  } else if (statResult && pageLocation == 5) {
                    this.navCtrl.navigateForward('page6')
                  } else if (statResult && pageLocation == 6) {
                    this.navCtrl.navigateForward('page7')
                  } else if (statResult && pageLocation == 8) {
                    this.navCtrl.navigateForward('page9')
                  } else if (statResult && pageLocation == 9) {
                    this.navCtrl.navigateForward('page10')
                  } else {
                    this.navCtrl.navigateForward('lose')
                  }
                });
              });
            }
          }
        ]
      });
      await alert.present();
    } else if (storyValue == 5) {
      const alert = await this.alertController.create({
        header: 'The damage could have been worse though.',
        subHeader: 'They made off with 5 Pickle Chips and your Hunger Level also decreases by 5.',
        buttons: [
          {
            text: 'Continue',
            handler: () => {
              this.userService.updateUser(this.user['_id'], { health: -5, currency: -5 }).subscribe(updatedUser => {
                this.userService.statCheck(this.user['_id']).subscribe(statResult => {
                  this.userService.user = updatedUser;
                  if (statResult && pageLocation == 2) {
                    this.navCtrl.navigateForward('page3')
                  } else if (statResult && pageLocation == 3) {
                    this.navCtrl.navigateForward('page4')
                  } else if (statResult && pageLocation == 5) {
                    this.navCtrl.navigateForward('page6')
                  } else if (statResult && pageLocation == 6) {
                    this.navCtrl.navigateForward('page7')
                  } else if (statResult && pageLocation == 8) {
                    this.navCtrl.navigateForward('page9')
                  } else if (statResult && pageLocation == 9) {
                    this.navCtrl.navigateForward('page10')
                  } else {
                    this.navCtrl.navigateForward('lose')
                  }
                });
              });
            }
          }
        ]
      });
      await alert.present();
    } else if (storyValue == 6) {
      const alert = await this.alertController.create({
        header: "'Now there's a good lad.', the insurance salesman replies",
        subHeader: 'He chuckles as he looks over the 10 Pickle Chips you regretfully hand over.',
        buttons: [
          {
            text: 'Continue',
            handler: () => {
              this.userService.updateUser(this.user['_id'], { currency: -10 }).subscribe(updatedUser => {
                this.userService.statCheck(this.user['_id']).subscribe(statResult => {
                  this.userService.user = updatedUser;
                  if (statResult && pageLocation == 2) {
                    this.navCtrl.navigateForward('page3')
                  } else if (statResult && pageLocation == 3) {
                    this.navCtrl.navigateForward('page4')
                  } else if (statResult && pageLocation == 5) {
                    this.navCtrl.navigateForward('page6')
                  } else if (statResult && pageLocation == 6) {
                    this.navCtrl.navigateForward('page7')
                  } else if (statResult && pageLocation == 8) {
                    this.navCtrl.navigateForward('page9')
                  } else if (statResult && pageLocation == 9) {
                    this.navCtrl.navigateForward('page10')
                  } else {
                    this.navCtrl.navigateForward('lose')
                  }
                });
              });
            }
          }
        ]
      });
      await alert.present();
    }
  } 
  // Final Stage Story 
  async finalStage() {
    const alert = await this.alertController.create({
      header: "You continue to climb upward. It's deathly quite. Each step echoes throughout the cave.",
      buttons: [
        {
          text: 'Continue',
          handler: (user) => {
            this.finalStage_2();
          }
        }
      ]
    });
    await alert.present();
  }
  async finalStage_2() {
    const alert = await this.alertController.create({
      header: "As you reach the top, the Sandwich sits before you. You look around for traps, but don't see any.",
      subHeader: "'Could it really be this easy?' You think to yourself. Then you notice something underneath the plate upon which the Sandwich sits.",
      buttons: [
        {
          text: 'Continue',
          handler: (user) => {
            this.finalStage_3();
          }
        }
      ]
    });
    await alert.present();
  }
  async finalStage_3() {
    const alert = await this.alertController.create({
      header: "You realize that the Sandwich is on a pressure plate. You look at the cave above you and see massive boulders restrained above your head.",
      subHeader: "You need to replace the weight of the Sandwich and plate without triggering the switch. It's a massive gamble. How do you proceed?",
      buttons: [
        {
          text: 'Walk Away',
          handler: (user) => {
            this.finalStage_Walk_Away();
          }
        },
        {
          text: 'Keep Going',
          handler: (user) => {
            this.finalStage_Keep_Going();
          }
        }
      ]
    });
    await alert.present();
  }
  async finalStage_Walk_Away() {
    const alert = await this.alertController.create({
      header: "You decide not to risk your life for the Sandwich and just walk away. You turn around and head back down toward the cave's exit.",
      subHeader: "Despite all you went through to get there, you just couldn't do it.",
      buttons: [
        {
          text: 'Continue',
          handler: (user) => {
            this.navCtrl.navigateForward('lose-opt-out');
          }
        }
      ]
    });
    await alert.present();
  }
  async finalStage_Keep_Going() {
    this.user = this.userService.user;
    const alert = await this.alertController.create({
      header: "You decide to attempt a switch. You pull out your money pouch of Pickle Chips and toss it in your hand a few times, feeling the weight.",
      subHeader: "'Seems heavy enough to me.' You carefully yet quickly make your move.",
      buttons: [
        {
          text: 'Make the Switch',
          handler: (user) => {
            if (this.user['currency'] > 25) {
              this.navCtrl.navigateForward('win')
            } else {
              this.navCtrl.navigateForward('lose-final-stage')
            }
          }
        }
      ]
    });
    await alert.present();
  }
}







