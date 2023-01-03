import Player from '@vimeo/player';
import _throttle from 'lodash.throttle';

// console.log(Player);


const LOCAL_STORAGE = 'videoplayer-current-time';

const player = new Player('vimeo-player');

player.on('loaded', () => {
  const currentTime = localStorage.getItem(LOCAL_STORAGE) || 0;
  player.setCurrentTime(currentTime);
});


player.on(
  'timeupdate',
  _throttle(({ seconds }) => {
    localStorage.setItem(LOCAL_STORAGE, seconds);
  }, 1000)
);


