import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html'
})
export class CounterComponent {
    public inputs = [];
    constructor() {
        this.inputs = ['Sunil', 'Peshal', 'Kiran'];
    }
}