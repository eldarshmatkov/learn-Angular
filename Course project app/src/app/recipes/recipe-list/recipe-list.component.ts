import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simple a test', 'https://get.pxhere.com/photo/dish-meal-food-vegetable-recipe-cuisine-vegetarian-food-parmigiana-1417897.jpg'),
        new Recipe('A Second Test Recipe', 'This is simple russian girl', 'https://cdn.pixabay.com/photo/2017/07/10/19/15/grilling-2491123_960_720.jpg')
    ];
    @Output() recipeEvent: EventEmitter<Recipe> = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    pickRecipe(item: Recipe) {
        this.recipeEvent.emit(item);
    }
}
