"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exercise_like_button_1 = require("./exercise-like_button");
var component = new exercise_like_button_1.LikeComponent(3, true);
component.onClick();
console.log("likesCount: " + component.likesCount + ", isSelected: " + component.isSelected);
