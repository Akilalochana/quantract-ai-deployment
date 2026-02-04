import * as yup from "yup";

const jobApplicationSchema = yup.object({
  name: yup
    .string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(/^[0-9+\-\s()]*$/, "Please enter a valid phone number")
    .nullable(),
  resumeUrl: yup
    .string()
    .nullable(),
  coverLetter: yup
    .string()
    .max(2000, "Cover letter must be less than 2000 characters")
    .nullable(),
  jobPostId: yup
    .string()
    .required("Job post ID is required"),
});

export default jobApplicationSchema;
