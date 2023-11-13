import { CompanyInterface } from 'interfaces/company';
import { AssignmentInterface } from 'interfaces/assignment';
import { GetQueryInterface } from 'interfaces';

export interface LessonInterface {
  id?: string;
  assignment_id: string;
  created_at?: any;
  updated_at?: any;
  company?: CompanyInterface[];
  assignment?: AssignmentInterface;
  _count?: {
    company?: number;
  };
}

export interface LessonGetQueryInterface extends GetQueryInterface {
  id?: string;
  assignment_id?: string;
}
