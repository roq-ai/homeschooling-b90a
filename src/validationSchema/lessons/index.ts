import * as yup from 'yup';

export const lessonValidationSchema = yup.object().shape({
  assignment_id: yup.string().nullable().required(),
});
