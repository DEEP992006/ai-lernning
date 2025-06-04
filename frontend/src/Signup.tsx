import Signupform from "../Features/Auth/Signupform"
import Leftside from "../Features/Auth/Leftside";
import Signupheading from "../Features/Auth/Signupheading";

const Signup = () => {

  return (
    <section className="grid grid-cols-12 h-screen pt-17">
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