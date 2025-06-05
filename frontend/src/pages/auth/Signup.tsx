import Signupform from "../../Features/Auth/components/Signupform";
import Leftside from "../../Features/Auth/components/Leftside";
import Signupheading from "../../Features/Auth/components/Signupheading";

const Signup = () => {
  return (
    <section className="grid grid-cols-12 h-screen pt-10">
      <Leftside />
      {/* signup section */}
      <div className="col-span-6 flex  flex-col w-full px-30 py-20">
        {/* heading */}
        <Signupheading />
        {/* form */}
        <Signupform />
      </div>
    </section>
  )
}

export default Signup