import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'scroll-polyfill';

import countTimer from './modules/countTimer'
import toggleMenu from './modules/toggleMenu'
import togglePopUp from './modules/togglePopUp'
import tabs from './modules/tabs'
import calculator from './modules/calc'
import sendForm from './modules/sendForm'
import smothScrollFromMenu from './modules/smothScrollFromMenu'
import changeCommand from './modules/changeCommand'
import startSlider from "./modules/slider";


//Timer
countTimer('31 december  2020');
// меню
toggleMenu();
// popup
togglePopUp();
// табы
tabs();
//слайдер
startSlider();
// калькулятор
calculator();
// send-ajax form
sendForm();
//смена картинок
changeCommand();
//плавный скролл меню
smothScrollFromMenu();