import {inject} from 'aurelia-framework';
import {DialogController} from 'aurelia-dialog';

@inject(DialogController)

export class Prompt {

   constructor(controller){
      this.controller = controller;
      this.answer = null;

      controller.settings.centerHorizontalOnly = true;
   }

   activate(data) {
      this.data = data;
   }
}