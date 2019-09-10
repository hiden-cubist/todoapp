import { Controller } from './controller.js';
import { Model } from './model.js';
import { Template } from './template.js';
import { View } from './view.js';

import 'bootstrap';
import './style.scss';


const template = new Template();
const app = new Controller(new Model(), new View(template));
