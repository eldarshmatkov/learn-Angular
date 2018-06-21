import { LikeComponent } from './exercise-like_button';

let component = new LikeComponent(3, true);
component.onClick();
console.log(`likesCount: ${component.likesCount}, isSelected: ${component.isSelected}`);
