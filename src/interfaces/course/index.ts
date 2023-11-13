import { AssignmentInterface } from 'interfaces/assignment';
import { GetQueryInterface } from 'interfaces';

export interface CourseInterface {
  id?: string;
  assignment_id: string;
  course_duration?: number;
  created_at?: any;
  updated_at?: any;

  assignment?: AssignmentInterface;
  _count?: {};
}

export interface CourseGetQueryInterface extends GetQueryInterface {
  id?: string;
  assignment_id?: string;
}
