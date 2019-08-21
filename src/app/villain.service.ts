// A separate service to handle Villains/Boss Encounters

import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { UserService } from './user.service';
import { NavController, NavParams } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class VillainService {
  user: any;
  constructor(public navCtrl: NavController, public alertController: AlertController, public userService: UserService) {
    this.user = this.userService.user
  }

  // Villain #1 - A Coin Flip
  async villain_1_Story1(user) {
    const alert = await this.alertController.create({
      header: "Out of the corner of your eye you see a shadow in the shape of a small impish person.",
      subHeader: "You shrug it off and are about to re-embark on your journey, when suddenly out of that shadow yellow eyes appear.",
      message: "Just as suddenly a figure emerges from that shadows, and he is not alone.",
      buttons: [
        {
          text: 'Continue',
          handler: (user) => {
            this.villain_1_Story1_2(user);
          }
        }
      ]
    });
    await alert.present();
  }
  async villain_1_Story1_2(user) {
    const alert = await this.alertController.create({
      header: "The group surrounds you. The leader with the yellow eyes speaks in a low authoritative tone.",
      subHeader: "'You've wondered into the wrong part of town friend. You have two choices on how to proceed.'",
      message: "'You can give us some of your Pickle Chips right now and be on your merry way, or best me in a game of chance...a fateful flip of the coin!'",
      buttons: [
        {
          text: 'Pay 10 Pickle Chips',
          handler: (user) => {
            this.villain_1_Story_Pay(user);
          }
        },
        {
          text: 'Flip',
          handler: (user => {
            this.villain_1_Story_Flip(user)
          })
        }
      ]
    });
    await alert.present();
  }
  async villain_1_Story_Pay(user) {
    const alert = await this.alertController.create({
      header: "You take a look at the cadre of small brutes surrounding you and think it best to just pay and be on your way.",
      subHeader: "You hand over your Pickle Chips sheepishly and watch the group slink back into the shadows.",
      buttons: [
        {
          text: 'Continue',
          handler: () => {
            this.userService.updateUser(this.user['_id'], {currency: -10}).subscribe(updatedUser => {
              this.userService.statCheck(this.user['_id']).subscribe(statResult => {
                this.userService.user = updatedUser;
                if (statResult) {
                  this.navCtrl.navigateForward('page5');
                } else {
                  this.navCtrl.navigateForward('lose')
                }
              })
            })
          }
        }
      ]
    });
    await alert.present();
  }   

  async villain_1_Story_Flip(user) {
    var coinFlip = Math.floor(Math.random() * 2)
    var heads = 0
    var tails = 1
    const alert = await this.alertController.create({
      header: "Watching the leader casually flip the coin over and over, you decide 50/50 is pretty good odds. And besides, what are all these smallish brutes gonna do anyway?",
      subHeader: "'I'll take my chances with the coin.' you say in a confindent voice. 'Your funeral. Pick a side.' He says showing you both sides.",
      buttons: [
        {
          text: 'Tails',
          handler: () => {
            if (coinFlip == tails) {
              this.villain_1_Flip_Win(user)
            } else {
              this.villain_1_Flip_Lose(user)
            }
          }
        },
        {
          text: 'Heads',
          handler: () => {
            if (coinFlip == heads) {
              this.villain_1_Flip_Win(user)
            } else {
              this.villain_1_Flip_Lose(user)
            }
          }
        }
      ]
    });
    await alert.present();
  }

  async villain_1_Flip_Win(user) {
    const alert = await this.alertController.create ({
      header: "You've won!",
      subHeader: "'Drat!' the brute exclaims. 'Should've used a rigged coin! But a win is a win.' He tosses 5 Pickles Chips at your feet as the group retreats back into the shadows.",
      buttons: [
        {
          text: "Continue",
          handler: () => {
            this.userService.updateUser(this.user['_id'], { currency: 5 }).subscribe(updateUser => {
              this.userService.statCheck(this.user['_id']).subscribe(statResult => {
                this.userService.user = updateUser;
                if (statResult) {
                  this.navCtrl.navigateForward('page5')
                } else {
                  this.navCtrl.navigateForward('lose')
                }
              })
            })
          }
        }
      ]
    });
    await alert.present();
  }

  async villain_1_Flip_Lose(user) {
    const alert = await this.alertController.create({
      header: "You've lost!",
      subHeader: "'HAHA!' the brute exclaims. 'I'm unbeatable! Hand over my winnings!' You toss 10 Pickle Chips toward him and run as fast as you can till their laughter is only faintly heard.",
      buttons: [
        {
          text: "Continue",
          handler: () => {
            this.userService.updateUser(this.user['_id'], { currency: -10 }).subscribe(updateUser => {
              this.userService.statCheck(this.user['_id']).subscribe(statResult => {
                this.userService.user = updateUser;
                if (statResult) {
                  this.navCtrl.navigateForward('page5')
                } else {
                  this.navCtrl.navigateForward('lose')
                }
              })
            })
          }
        }
      ]
    });
    await alert.present();
  }


// Villain #2 - Guess the Number

  async villain_2_Story1(user) {
    const alert = await this.alertController.create({
      header: "You take step forward on a patch of mossy ground when you suddenly hear a loud SNAP! Followed by excrutiating pain shooting up your leg.",
      subHeader: "You look down to see your foot caught in a snare, sharp barbs dug into your ankle. Warm deep red blood is trickling down onto your shoe.",
      message: "You grab onto the edges of the snare and pull them apart with all your strength, but it don't budge. You notice there is some sort of lock has been engaged.",
      buttons: [
        {
          text: 'Continue',
          handler: (user) => {
            this.villain_2_Story1_2(user);
          }
        }
      ]
    });
    await alert.present();
  }
  async villain_2_Story1_2(user) {
    var guessNumber = Math.floor((Math.random() * 10) +1)
    console.log('guessNumber is ', guessNumber)
    const alert = await this.alertController.create({
      header: "How insidious! You're trapped and cannot escape! You hear a laugh, a low chuckle. Out of the shadows, you see familiar yellow eyes almost grinning at you.",
      subHeader: "'You again!' You see the imp leader from the start of your journey standing before you. He's holding an odd shaped key.",
      message: "'If you want to get out of the snare and onto your beloved Sandwich, I'm thinking of a number between one and ten, what is it? You have 3 guesses.",
      inputs: [
        {
          name: "guess",
          type: "number",
          placeholder: "Your Guess"
        }
      ],
      buttons: [
        {
          text: 'Take A Guess',
          handler: data => {
            console.log ('Name = ', data.guess)
            if (guessNumber == data.guess) {
              this.villain_2_Story_Win(guessNumber);
            } else {
              this.villain_2_Story_Guess2(guessNumber)
            }
          }
        }
      ]
    });
    await alert.present();
  }
  async villain_2_Story_Guess2(guessNumber) {
    const alert = await this.alertController.create({
      header: "'Nope, that's not it! 2 guesses left!",
      inputs: [
        {
          name: "guess",
          type: "number",
          placeholder: "Your Guess"
        }
      ],
      buttons: [
        {
          text: 'Take A Guess',
          handler: (user) => {
            if (guessNumber == name) {
              this.villain_2_Story_Win(guessNumber);
            } else {
              this.villain_2_Story_Guess3(guessNumber)
            }
          }
        }
      ]
    });
    await alert.present();
  }
  async villain_2_Story_Guess3(guessNumber) {
    const alert = await this.alertController.create({
      header: "'That's not it either! You'll never guess it! 1 guess remains!",
      inputs: [
        {
          name: "guess",
          type: "number",
          placeholder: "Your Guess"
        }
      ],
      buttons: [
        {
          text: 'Take A Guess',
          handler: (user) => {
            if (guessNumber == name) {
              this.villain_2_Story_Win(guessNumber);
            } else {
              this.villain_2_Story_Lose(guessNumber)
            }
          }
        }
      ]
    });
    await alert.present();
  }
  async villain_2_Story_Win(guessNumber) {
    const alert = await this.alertController.create({
      header: "'I can't believe it! You guessed my number! That's impossible!'",
      subHeader: "'Fair is fair.' The imp begrudgingly unlocks the snare and sets you free. He sulks as he disappears once again into the shadows.",
      message: "Though your leg is throbbing, you press onward into Kitchensburgh.",
      buttons: [
        {
          text: 'Continue',
          handler: (user) => {
            this.navCtrl.navigateForward('page8');
          }
        }
      ]
    });
    await alert.present();
  }
  async villain_2_Story_Lose(guessNumber) {
    const alert = await this.alertController.create({
      header: "'I knew you'd never guess it! No one beats me at this game! Ever!",
      subHeader: "You hand over 15 Pickle Chips, and your Hunger Level goes down 10. Afterall, fair is fair. ",
      message: "Though your leg is throbbing, you press onward into Kitchensburgh.",
      buttons: [
        {
          text: 'Continue',
          handler: (user) => {
            this.userService.updateUser(this.user['_id'], {currency: -15, health: -10 }).subscribe(updateUser => {
              this.userService.statCheck(this.user['_id']).subscribe(statResult => {
                this.userService.user = updateUser;
                this.navCtrl.navigateForward('page8')
              })
            })
          }
        }
      ]
    });
    await alert.present();
  }

// Villain #3 - Three Riddles

  async villain_3_Story1(user) {
    const alert = await this.alertController.create({
      header: "A large Ogre steps out onto the path, blocking your way. He hasn't seen you yet.",
      subHeader: "You duck behind a tree. 'Is there any way around him?' you think to yourself. You quickly realize there is not.",
      message: "You steele your nerves and approach the Ogre.",
      buttons: [
        {
          text: 'Continue',
          handler: (user) => {
            this.villain_3_Story1_2(user);
          }
        }
      ]
    });
    await alert.present();
  }
  async villain_3_Story1_2(user) {
    const alert = await this.alertController.create({
      header: "'Ahem.' You clear your throat loudly. The Ogre stirs. 'Excuse me, would you mind terribly moving to one side so I may pass?'",
      subHeader: "The Ogre rolls his eyes. 'You see I'm on a great quest and must be on my way.' you continue.",
      message: "The Ogre gives a disinterested response, 'Yeah, yeah, yeah, the Sandwich. You must answer my riddles three to pass, same as everyone. Get one wrong and it's game over.",
      buttons: [
        {
          text: 'Continue to First Riddle',
          handler: (user) => {
            this.villain_3_Story_Riddle1(user);
          }
        }
      ]
    });
    await alert.present();
  }
  async villain_3_Story_Riddle1(user) {
    const alert = await this.alertController.create({
      header: "'Riddle the first: Give me food, and I will live. Give me water, and I will die. What am I?'",
      buttons: [
        {
          text: 'Fire',
          handler: (user) => {
            this.villain_3_Story_Riddle2(user)
          }
        },
        {
          text: 'Gremlin',
          handler: (user) => {
            this.villain_3_Story_Lose(user)
          }
        },
        {
          text: 'Chinchilla',
          handler: (user) => {
            this.villain_3_Story_Lose(user)
          }
        }
      ]
    });
    await alert.present();
  }
  async villain_3_Story_Riddle2(user) {
    const alert = await this.alertController.create({
      header: "Impossible! Gah! You didn't look smart enough to get that one. On to the next one!",
      subHeader: "'Riddle the second: Take off my skin, I won't cry, but you will. What am I?'",
      buttons: [
        {
          text: 'Banana',
          handler: (user) => {
            this.villain_3_Story_Lose(user)
          }
        },
        {
          text: 'Orange',
          handler: (user) => {
            this.villain_3_Story_Lose(user)
          }
        },
        {
          text: 'Onion',
          handler: (user) => {
            this.villain_3_Story_Riddle3(user)
          }
        }
      ]
    });
    await alert.present();
  }
  async villain_3_Story_Riddle3(user) {
    const alert = await this.alertController.create({
      header: "Inconceivable! Only the best of the best get that one right! Onto the last riddle!",
      subHeader: "'Riddle the third and final!: If there are three apples and you take two away, how many apples do you have?'",
      buttons: [
        {
          text: '1',
          handler: (user) => {
            this.villain_3_Story_Lose(user)
          }
        },
        {
          text: '2',
          handler: (user) => {
            this.villain_3_Story_Win(user)
          }
        },
        {
          text: '3',
          handler: (user) => {
            this.villain_3_Story_Lose(user)
          }
        }
      ]
    });
    await alert.present();
  }
  async villain_3_Story_Win(user) {
    const alert = await this.alertController.create({
      header: "'Blast! You've done it!' the Ogre replies stepping aside, allowing you onto the bridge.",
      subHeader: "'The Sandwich awaits you inside.' Your heart races as you dash across the bridge and into the gapping mouth of the dark cave.",
      buttons: [
        {
          text: 'Continue to Final Stage!',
          handler: (user) => {
            this.navCtrl.navigateForward('final');
          }
        }
      ]
    });
    await alert.present();
  }
  async villain_3_Story_Lose(user) {
    const alert = await this.alertController.create({
      header: "'I knew you didn't have it in you. Seldom do.' the Ogre said with a satisfied grin.",
      subHeader: "'Head home and forget about the Sandwich. It wasn't meant for you.'",
      message: "Dejected, you turn around and start the long journey back home to Couchtopia.",
      buttons: [
        {
          text: 'Continue',
          handler: (user) => {
            this.navCtrl.navigateForward('lose');
          }
        }
      ]
    });
    await alert.present();
  }


}
