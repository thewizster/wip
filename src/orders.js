import {inject} from 'aurelia-framework';
import * as PapaParse from 'papaparse.min.js';
import {DialogService} from 'aurelia-dialog';
import {Prompt} from './components/modal/my-modal';

@inject(PapaParse, DialogService)
export class Orders {
    constructor(papa, dialogService) {
        this.papa = papa;
        this.dialogService = dialogService;
        this.loadData();
    }

    heading = "Orders";
    orders = [];
    orderIndex = {};
    selectedOrder = {};
    get orderCount(){
        return this.orders.length;
    }

    clearData(){
        this.orders = [];
    }

    show(id){
        this.selectedOrder = this.orderIndex[id];
        //console.log(this.selectedOrder.Customer);
        //console.log(id);
        this.dialogService.open({viewModel: Prompt, model: this.selectedOrder }).then(response => {
            //console.log(response);
                
            if (!response.wasCancelled) {
                console.log('OK');
            } else {
                console.log('cancelled');
            }
            //console.log(response.output);
        });        
    }

    openModal() {
      this.dialogService.open({viewModel: Prompt, model: { Customer: 'Test Customer'} }).then(response => {
         //console.log(response);
			
         if (!response.wasCancelled) {
            console.log('OK');
         } else {
            console.log('cancelled');
         }
         //console.log(response.output);
      });
   }

    loadData(){
        // Setup an HTTP request to GET the file.
        var client = new XMLHttpRequest();
        client.open('GET', '/wip.csv');
        client.onreadystatechange = (function(){
            if (client.readyState == 4 && client.status == 200) {
                // When the file is downloaded Papa can go to town!
                let stringText = client.responseText;
                let results = this.papa.parse(stringText, { header: true });
                this.orders = []; // clear the array
                for (var index = 0; index < results.data.length; index++) {
                    var item = results.data[index];
                    this.orders.push(item);
                    this.orderIndex[item.ID] = item;
                }
            }
        }).bind(this);
        // Now actually send the HTTP request.
        client.send();
    };

}