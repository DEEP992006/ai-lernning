import { Heading, Loader2Icon, Lock, Mail, MoveRight, MoveRightIcon, User } from "lucide-react"
import { useForm } from "react-hook-form";
import { data, useNavigate } from "react-router";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Button } from "../../../components/ui/button";
import type SigninSchema from "../Schema/Signinschema";
import { useMutation } from "@tanstack/react-query";
import { Siginpapi } from "../api/Siginpapi";
import { toast } from "sonner";

const Signinform = () => {
    const Nevigate = useNavigate()
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
   const signin = useMutation({
    mutationKey:["signin"],
    mutationFn:async(data:SigninSchema) => {
        const token = await Siginpapi(data)
        console.log(token);
        localStorage.setItem("token",token)
        

    },
    onSuccess:(() => {
        toast.success("signin successfully")
        setTimeout(() => {
    Nevigate("/")
}, 2000);
    }),
    onError:((error) =>{
        toast.error(error.message)
    })
   })
    return (
        <form onSubmit={handleSubmit((data) => signin.mutate(data))} className="flex flex-col gap-y-7">
            {/* email */}
          <div className="space-y-2">
  <Label className='text-sm flex font-medium'>
    <Mail size={20} /> Email Address
  </Label>
  <Input
    {...register("email", {
      required: "Email is required",
      pattern: {
        value: /^\S+@\S+\.\S+$/,
        message: "Enter a valid email",
      },
    })}
    className="h-11"
    type="email"
    placeholder="Enter Your Email"
  />
  {errors.email && <span className="text-red-800">{errors.email.message}</span>}
</div>

{/* password */}
<div className="space-y-2 relative">
  <Label className='text-sm flex font-medium'>
    <Lock size={20} /> Password
  </Label>
  <Input
    {...register("password", {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must be at least 8 characters",
      },
    })}
    className="h-11"
    type="password"
    placeholder="Create a password"
  />
  {errors.password && <span className="text-red-800">{errors.password.message}</span>}
{signin.error && <div className="absolute text-red-600 font-medium">{signin.error.message}</div>}
</div>
            {/* submit */}
            {signin.isPending?<Button type="submit" className="bg-gradient-to-r from-blue-600 to-purple-600  text-white text-2xl h-13 items-center" disabled><Loader2Icon className="animate-spin" />
     Signin </Button>:<Button type="submit" className="bg-gradient-to-r from-blue-600 to-purple-600  text-white text-2xl h-13 items-center">Signin</Button>
}
            
                <p className="flex items-center text-xl text-white font-bold gap-3"> Create Account</p>
           
            <p className="text-center space-x-3">
           Dont have an account? <a href="/signup" className="text-blue-500 font-medium"> Sign up here</a>
          </p>
          
        </form>
    )
}

export default Signinform