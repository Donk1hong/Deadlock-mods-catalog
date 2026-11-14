import { App } from './App.js';
import './style.css';

const app = document.querySelector('#app');
const appInstance = new App(app);
appInstance.navigate();
