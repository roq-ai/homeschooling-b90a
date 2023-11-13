import { UserInterface } from 'interfaces/user';
import { LessonInterface } from 'interfaces/lesson';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  image?: string;
  lesson_id?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user?: UserInterface[];
  lesson?: LessonInterface;
  _count?: {
    user?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  lesson_id?: string;
  name?: string;
}
