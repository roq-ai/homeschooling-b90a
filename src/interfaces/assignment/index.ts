import { CourseInterface } from 'interfaces/course';
import { GradeInterface } from 'interfaces/grade';
import { LessonInterface } from 'interfaces/lesson';
import { GetQueryInterface } from 'interfaces';

export interface AssignmentInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  course?: CourseInterface[];
  grade?: GradeInterface[];
  lesson?: LessonInterface[];

  _count?: {
    course?: number;
    grade?: number;
    lesson?: number;
  };
}

export interface AssignmentGetQueryInterface extends GetQueryInterface {
  id?: string;
}
