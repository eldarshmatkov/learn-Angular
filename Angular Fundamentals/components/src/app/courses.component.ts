import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses', // <courses>  // <div id="courses"> "#courses"
    template: `
    <h2>{{ title }}</h2>
    <ul>
        <li *ngFor="let course of courses">
            {{course}}
        </li>
    </ul>
    `
})

export class CoursesComponent {
    title = "List of courses";
    courses;

    constructor(service: CoursesService) {
        // let service = new CoursesService();// old realization
        this.courses = service.getCourses();
    }
   
}