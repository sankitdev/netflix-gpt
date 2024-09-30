const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-2">
          © {new Date().getFullYear()} Netflix Clone by Ankit Singh. All Rights
          Reserved.
        </p>
        <div className="flex justify-center space-x-4 mb-2">
          <span className="text-gray-400 hover:text-white cursor-pointer">
            Privacy Policy
          </span>
          <span>|</span>
          <span className="text-gray-400 hover:text-white cursor-pointer">
            Terms of Use
          </span>
          <span>|</span>
          <span className="text-gray-400 hover:text-white cursor-pointer">
            Help
          </span>
        </div>
        <p className="text-xs">
          This project is a clone created for educational purposes while
          learning from Namaste React by Akshay Saini.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
