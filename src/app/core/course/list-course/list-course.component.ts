import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {
  courses!: Course[];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.getCourse();
  }

  getCourse() {
    this.courseService.getCourses().subscribe(course => {
      this.courses = course;
    })
  }
}
