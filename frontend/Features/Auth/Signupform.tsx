import { Heading, Lock, Mail, MoveRight, MoveRightIcon, User } from "lucide-react"
import { useForm } from "react-hook-form";
import { data } from "react-router";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "../../src/components/ui/button";
type Inputs = {

    name: string,
    email: string,
    password: string,
};
const Signupform = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit = (data: Inputs) => {
        console.log(data);
        return data
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-7">
            {/* name */}
            <div className="space-y-2">
                <Label className='text-sm flex font-medium'>
                    <User size={20} />
                    Full Name
                </Label>
                <Input {...register("name")} className="h-11" id="nmae" placeholder="Enter Your Name " />
                {errors.name && <span>This field is required</span>}
            </div>

            {/* email */}
            <div className="space-y-2">
                <Label className='text-sm flex font-medium'>
                    <Mail size={20} />
                    Email Address
                </Label>
                <Input {...register("name")} className="h-11" type="email" id="email" placeholder="Enter Your Email" />
                {errors.email && <span>This field is required</span>}
            </div>

            {/* password */}
            <div className="space-y-2">
                <Label className='text-sm flex font-medium'>
                    <Lock size={20} />
                    Email Address
                </Label>
                <Input {...register("password")} className="h-11" type="password" id="password" placeholder="Create a password" />
                {errors.name && <span>This field is required</span>}
            </div>
            {/* submit */}
            <Button type="submit" className="bg-gradient-to-r from-blue-600 to-purple-600  text-white-2xl h-13 items-center">
                <p className="flex items-center text-xl text-white font-bold gap-3"> Create Account</p>
            </Button>
            <p className="text-center space-x-3">
            Alearedy have an account? <a href="/signin" className="text-blue-500 font-medium"> Sign in here</a>
          </p>
        </form>
    )
}

export default Signupform