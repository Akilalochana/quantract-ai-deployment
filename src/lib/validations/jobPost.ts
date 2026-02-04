import * as yup from "yup";

const jobPostSchema = yup.object({
  title: yup
    .string()
    .min(3, "Title must be at least 3 characters")
    .required("Job title is required"),
  category: yup
    .string()
    .oneOf(
      ["Engineering", "Design", "Marketing", "Sales", "Operations", "Other"],
      "Please select a valid category"
    )
    .required("Category is required"),
  location: yup
    .string()
    .required("Location is required"),
  type: yup
    .string()
    .oneOf(
      ["Full-time", "Part-time", "Contract", "Remote", "Internship"],
      "Please select a valid job type"
    )
    .required("Job type is required"),
  experience: yup
    .string()
    .required("Experience requirement is required"),
  description: yup
    .string()
    .min(20, "Description must be at least 20 characters")
    .required("Job description is required"),
  requirements: yup
    .array()
    .of(yup.string().required())
    .min(1, "At least one requirement is needed"),
  isActive: yup
    .boolean()
    .default(true),
});

export default jobPostSchema;
