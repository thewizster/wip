import {inject} from 'aurelia-framework';
import * as PapaParse from 'papaparse.min.js';

@inject(PapaParse)
export class Orders {
    constructor(papa) {
        this.papa = papa;
        this.loadData();
    }

    heading = "Orders";
    orders = [];
    get orderCount(){
        return this.orders.length;
    }

    clearData(){
        this.orders = [];
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
                    this.orders.push(results.data[index]);
                }
            }
        }).bind(this);
        // Now actually send the HTTP request.
        client.send();
    };

}