import { Heading, Loader2Icon, Lock, Mail, MoveRight, MoveRightIcon, User } from "lucide-react"
import { useForm } from "react-hook-form";
import { data, useNavigate } from "react-router";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Button } from "../../../components/ui/button";
import type Inputs from "../Schema/Signupschema";
import type SignupSchema from "../Schema/Signupschema";
import { signupapi } from "../api/Signupapi";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
const Signupform = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
       const signup = useMutation({
        mutationFn:async(data:SignupSchema) => {
           const result = await signupapi(data)
           return result
        },
        mutationKey:["signup"],
        onSuccess:() => {
            toast.success("Signup successfully")
            setTimeout(() => {
             navigate("/course")
            }, 2000);
        },
        onError: (error) =>{
            toast(error.message)
        }
    }) 
  
       
    return (
        <form onSubmit={handleSubmit((data) => signup.mutate(data))} className="flex flex-col gap-y-6">
            {/* name */}
<div className="space-y-2">
  <Label className='text-sm flex font-medium'>
    <User size={20} /> Full Name
  </Label>
  <Input
    {...register("name", { required: "Full name is required" })}
    className="h-11"
    placeholder="Enter Your Name"
  />
  {errors.name && <span className="text-red-800">{errors.name.message}</span>}
</div>
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
  {signup.error && <div className="absolute text-red-600 font-medium">{signup.error.message}</div>}
</div>
            {/* submit */}
             {signup.isPending?<Button type="submit" className="bg-gradient-to-r from-blue-600 to-purple-600  text-white text-2xl h-13 items-center" disabled><Loader2Icon className="animate-spin" />
     Signup </Button>:<Button type="submit" className="bg-gradient-to-r from-blue-600 to-purple-600  text-white text-2xl h-13 items-center">Signup</Button>
}
            <p className="text-center space-x-3">
            Alearedy have an account? <a href="/signin" className="text-blue-500 font-medium"> Sign in here</a>
          </p>
        </form>
    )
}

export default Signupform