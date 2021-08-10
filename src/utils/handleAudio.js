import { Howl } from 'howler';

import clickAudio from '../audio/click.mp3';
import bellAudio from '../audio/bell.mp3';

export function handleAudioClick() {
  const sound = new Howl({
    src: [clickAudio],
  });
  sound.play();
}

export function handleAudioBell() {
  const sound = new Howl({
    src: [bellAudio],
  });
  sound.play();
}

//--一般方法，ios會出事-----------------------------------
// const audio = new Audio(btnAudio);
// audio.play();
