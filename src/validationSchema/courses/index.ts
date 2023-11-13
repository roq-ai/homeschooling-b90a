import * as yup from 'yup';

export const courseValidationSchema = yup.object().shape({
  course_duration: yup.number().integer().nullable(),
  assignment_id: yup.string().nullable().required(),
});
