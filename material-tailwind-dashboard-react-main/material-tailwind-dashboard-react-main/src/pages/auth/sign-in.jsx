import React from "react";
import {
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setUserInfo } from "@/context/index";
import { MaterialTailwind } from "@/context/index";
// import { useHistory } from "react-router-dom";

export function SignIn() {
  const navigate = useNavigate()
  const [user, setUser] = useState({})
  const [feedback, setFeedback] = useState(null)
  const [ state, dispatch ] = React.useContext(MaterialTailwind)

  // const history = useHistory();
  const schema = z.object({
    username: z.string().min(1, "Username is required"),
    password: z.string().min(1, "Password is required"),
  });

  const { register, formState, handleSubmit, setError } = useForm({
    resolver: zodResolver(schema),
  });

  const { errors } = formState;

const submitHandler = async (formData) => {
  try {
    const response = await fetch('http://192.168.0.6:1880/stafflogin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: formData.username || "",
        password: formData.password || ""
      })
    });


    if (!response.ok) {

      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    // setUser(responseData);
    navigate("/dashboard/home")
    console.log(responseData);
    setFeedback(null)
    setUserInfo(dispatch, responseData);
    // Use responseData or perform other actions here

    // history.push("/dashboard");
  } catch (error) {
    setFeedback(error);
    // Handle errors if needed
  }

  console.log(formData);
  // Add your submission logic here if needed
};


  return (
    <section className="my-8 flex gap-4 justify-center">
      <div className="w-full lg:w-3/5 mt-24">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">
            Sign In
          </Typography>
          <Typography
            variant="paragraph"
            color="blue-gray"
            className="text-lg font-normal"
          >
            Enter your username and password to Sign In.
          </Typography>
        </div>
        <form
          className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2"
          onSubmit={handleSubmit(submitHandler)}
        >
          <div className="mb-1 flex flex-col gap-4">
            <div>
              
            </div>
            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-3 font-medium"
            >
              Your Username
            </Typography>
            <Input
              size="lg"
              type="text"
              placeholder="username"
              className={`!border-t-blue-gray-200 focus:!border-t-gray-900 ${
                errors.username?.message ? 'border-red-600 border-solid' : ''
              }`}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              {...register("username")}
            />
            <p>{errors.username?.message}</p>
          </div>
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-3 font-medium"
            >
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className={`!border-t-blue-gray-200 focus:!border-t-gray-900 ${
                errors.password?.message ? 'border-red-600 border-solid' : ''
              }`}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              {...register("password")}
            />
            <p>{errors.password?.message}</p>
          </div>
          <div className="flex justify-center flex-col">
            <Button className="mt-6" fullWidth type="submit">
              
            Sign In
          </Button>
          {feedback && <p className="m-auto mt-5 text-lg">No user available with this username</p>}
          </div>
          

          <Typography
            variant="paragraph"
            className="text-center text-blue-gray-500 font-medium mt-4"
          >
            Not registered?
            <Link to="/auth/sign-up" className="text-gray-900 ml-1">
              Create account
            </Link>
           
          </Typography>
        </form>
      
      </div>
    </section>
  );
}

export default SignIn;
