import {Component, ElementRef, EventEmitter, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
    @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
    @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;
    @Output() ingredientAdd = new EventEmitter<Ingredient>();

    constructor() {
    }

    ngOnInit() {
    }

    addIngredient() {
        const nameInp = this.nameInputRef.nativeElement.value;
        const amountInp = this.amountInputRef.nativeElement.value;
        const newIngredient = new Ingredient(nameInp, amountInp);
        this.ingredientAdd.emit(newIngredient);
    }
}
