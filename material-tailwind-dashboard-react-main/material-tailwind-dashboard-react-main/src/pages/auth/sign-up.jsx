import {
  Input,
  Button,
  Typography,
  Checkbox,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export function SignUp() {
  const schema = z.object({
    email: z.string().email("Invalid email address"),
    username: z.string().min(1, "Username is required"),
    password: z.string().min(1, "Password is required"),
    role: z.string().min(1, "Role is required"),
    agree: z.boolean().refine(data => data === true, {
      message: "You must agree to the Terms and Conditions",
    }),
  });

  const { register, formState, handleSubmit, setError } = useForm({
    resolver: zodResolver(schema),
  });

  const { errors } = formState;

  const submitHandler = (formData) => {
    console.log(formData);
    // Add your submission logic here if needed
  };

  return (
    <section className="m-8 flex justify-center items-center">
      <div className="w-full lg:w-3/5 flex flex-col items-center justify-center">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">
            Sign in
          </Typography>
          <Typography
            variant="paragraph"
            color="blue-gray"
            className="text-lg font-normal"
          >
            Enter your email, password, and role to register.
          </Typography>
        </div>
        <form
          className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2"
          onSubmit={handleSubmit(submitHandler)}
        >
          {/* ... (Other form fields) */}

          {/* Email Field */}
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-3 font-medium"
            >
              Your email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              {...register("email")}
            />
            <p>{errors.email?.message}</p>
          </div>

          {/* Username Field */}
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-3 font-medium"
            >
              Your username
            </Typography>
            <Input
              size="lg"
              placeholder="username"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              {...register("username")}
            />
            <p>{errors.username?.message}</p>
          </div>

          {/* Password Field */}
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-3 font-medium"
            >
              Your password
            </Typography>
            <Input
              size="lg"
              type="password"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              {...register("password")}
            />
            <p>{errors.password?.message}</p>
          </div>

          {/* Role Field */}
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-3 font-medium"
            >
              Your role
            </Typography>
            <Input
              size="lg"
              placeholder="user or admin"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              {...register("role")}
            />
            <p>{errors.role?.message}</p>
          </div>

          {/* Agree Checkbox */}
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center justify-start font-medium"
              >
                I agree the&nbsp;
                <a
                  href="#"
                  className="font-normal text-black transition-colors hover:text-gray-900 underline"
                >
                  Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
            {...register("agree")}
          />
          <p>{errors.agree?.message}</p>

          {/* Submit Button */}
          <Button className="mt-6" fullWidth type="submit">
            Register Now
          </Button>

          {/* Sign In Link */}
          <Typography
            variant="paragraph"
            className="text-center text-blue-gray-500 font-medium mt-4"
          >
            Already have an account?
            <Link to="/auth/sign-in" className="text-gray-900 ml-1">
              Sign in
            </Link>
          </Typography>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
