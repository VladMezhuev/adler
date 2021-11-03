/* eslint-disable no-unused-vars */

import menu from './menu';
import slider from './slider';
import { changeImage } from './tabs';
import { scrollTo } from './scroll'
import map from './map'
import './modal'

document.addEventListener('DOMContentLoaded', () => {
  scrollTo()
  changeImage()
})
