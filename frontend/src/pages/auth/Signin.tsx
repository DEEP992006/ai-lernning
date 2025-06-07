import Leftside from "../../Features/Auth/components/Leftside";
import Signinheading from "../../Features/Auth/components/Signinheading";
import Signinform from "../../Features/Auth/components/Signinform";
const Signin = () => {

  return (
    <section className="grid grid-cols-12 h-screen pt-17 sm:">
      <Leftside />
      {/* signup section */}
      <div className="col-span-6 flex  flex-col w-full px-30 py-30">
        {/* heading */}
        <Signinheading />
        {/* form */}
        <Signinform />
      </div>
    
    </section>
  )
}

export default Signin