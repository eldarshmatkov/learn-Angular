import {Component, EventEmitter, OnInit, Output} from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
    collapsed = true;
    @Output() changeUI: EventEmitter<string> = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    goTo(ui: string) {
        this.changeUI.emit(ui)
    }
}
