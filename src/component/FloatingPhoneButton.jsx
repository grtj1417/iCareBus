import { FaPhone } from "react-icons/fa";

const FloatingPhoneButton = () => {
  return (
    <button
      onClick={() => window.open("tel:0908866607")}
      aria-label="Call Us"
      className="fixed z-[900] bottom-5 right-5 w-14 h-14 rounded-full bg-[#126075] text-white shadow-md flex items-center justify-center 
      hover:bg-[#0c3c49] hover:translate-y-[-3px] transition-all duration-300"
    >
      <FaPhone className="text-2xl" />
    </button>
  );
};

export default FloatingPhoneButton;
