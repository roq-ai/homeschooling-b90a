import * as yup from 'yup';

export const gradeValidationSchema = yup.object().shape({
  assignment_id: yup.string().nullable().required(),
});
