import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dtos/create-course.dto.js';
import { UpdateCourseDto } from './dtos/update-course.dto.js';

@Injectable()
export class CourseService {
  getAllCourses() {
    return { message: 'Get All Courses from Service' };
  }

  getCourseById(id: string) {
    return { message: `Get Course with ID: ${id} from Service` };
  }

  createCourse(course: CreateCourseDto) {
    return {
      message: 'Create Course from Service',
      data: course,
    };
  }

  updateCourse(id: string, course: UpdateCourseDto) {
    return {
      message: `Update Course ${id} - from Service`,
      data: course,
    };
  }

  patchCourse(id: string, course: UpdateCourseDto) {
    return {
      message: `Patch Course ${id} from Service`,
      data: course,
    };
  }

  deleteCourse(id: string) {
    return { message: `Delete Course ${id} from Service` };
  }
  

  uploadCourseMaterial(id: string, file: any) {
    return {
      message: `File uploaded successfully for course ${id}`,
      filename: file.originalname,
      size: file.size,
    };
  }
}