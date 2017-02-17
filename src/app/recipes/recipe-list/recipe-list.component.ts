import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe'

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];
  recipe = new Recipe('Dummy', 'Dummy', 'https://d13yacurqjgara.cloudfront.net/users/175710/screenshots/3288506/disc-artboard_4dr.png');

  constructor() { }

  ngOnInit() {
  }

}
