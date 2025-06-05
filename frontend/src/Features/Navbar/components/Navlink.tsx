import { NavlinkData } from "./NavlinkData";

// Middle navigation links section
const Navlink = () => {
  return (
    <div className="hidden md:flex items-center gap-5 px-4 h-full cursor-pointer">
      {NavlinkData.map((item) => (
        <a
          key={item.name}
          href={item.link}
          className="group relative font-medium text-lg text-gray-600 hover:text-gray-900"
        >
          {item.name}
          {/* Underline effect on hover */}
          <span className="absolute left-0 -bottom-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 h-0.5 w-0 group-hover:w-full"></span>
        </a>
      ))}
    </div>
  );
};

export default Navlink;
