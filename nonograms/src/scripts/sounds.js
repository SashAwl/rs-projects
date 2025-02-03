import clearPixelSoundSrc from '../assets/audio/white.mp3';
import wonSoundSrc from '../assets/audio/won.mp3';
import failSoundSrc from '../assets/audio/fail.mp3';
import setCrossSoundSrc from '../assets/audio/cross.mp3';
import setBlackPixelSoundSrc from '../assets/audio/black.mp3';
import setNewSchemeSrc from '../assets/audio/newScheme.mp3';
import clearFieldSrc from '../assets/audio/clearField.mp3';

const clearPixelSound = new Audio(clearPixelSoundSrc);
const wonSound = new Audio(wonSoundSrc);
const failSound = new Audio(failSoundSrc);
const setCrossSound = new Audio(setCrossSoundSrc);
const setBlackPixelSound = new Audio(setBlackPixelSoundSrc);
const setNewScheme = new Audio(setNewSchemeSrc);
const clearField = new Audio(clearFieldSrc);

export {
  clearPixelSound,
  wonSound,
  failSound,
  setBlackPixelSound,
  setCrossSound,
  setNewScheme,
  clearField,
};
