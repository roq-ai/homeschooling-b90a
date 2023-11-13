import { AssignmentInterface } from 'interfaces/assignment';
import { GetQueryInterface } from 'interfaces';

export interface GradeInterface {
  id?: string;
  assignment_id: string;
  created_at?: any;
  updated_at?: any;

  assignment?: AssignmentInterface;
  _count?: {};
}

export interface GradeGetQueryInterface extends GetQueryInterface {
  id?: string;
  assignment_id?: string;
}
