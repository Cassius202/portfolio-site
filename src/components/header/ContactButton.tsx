'use client'
const ContactButton = () => {
  return (
      <button className="bg-primary max-sm:hidden text-white py-1.5 px-3 rounded-lg" 
      onClick={() => {
        window.location.href="#contact"
      }}
      >
      Contact Me
    </button>
  );
};

export default ContactButton;
