import {selector} from 'recoil';
import {userToken} from './atom';

export const userTokenSelector = selector({
  key: 'userTokenSelector',
  get: ({get}) => get(userToken),
  set: ({set}, newValue) => set(userToken, newValue),
});
