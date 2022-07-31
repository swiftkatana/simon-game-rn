import Sound from 'react-native-sound';
import blueSoundImp from '../assets/sounds/blue.m4a';
import greenSoundImp from '../assets/sounds/green.m4a';
import redSoundImp from '../assets/sounds/red.m4a';
import yellowSoundImp from '../assets/sounds/yellow.m4a';
import error from '../assets/sounds/error.mp3';
import {TColors} from '../screens/GameScreen';

class SoundUtil {
  constructor() {
    this.blueSound = new Sound(blueSoundImp, Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('failed to load the sound', error);
      }
    });
    this.greenSound = new Sound(greenSoundImp, Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('failed to load the sound', error);
      }
    });
    this.redSound = new Sound(redSoundImp, Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('failed to load the sound', error);
      }
    });
    this.yellowSound = new Sound(yellowSoundImp, Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('failed to load the sound', error);
      }
    });

    this.errorSound = new Sound(error, Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('failed to load the sound', error);
      }
    });
  }
  playErrorSound() {
    this.errorSound.play();
  }
  playSound(color: TColors) {
    switch (color) {
      case 'blue':
        this.blueSound.play();
        break;
      case 'green':
        this.greenSound.play();
        break;
      case 'red':
        this.redSound.play();
        break;

      case 'yellow':
        this.yellowSound.play();
        break;

      default:
        break;
    }
  }
}

export const soundUtil = new SoundUtil();
