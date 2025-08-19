const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 text-white p-x4 py-3">
      <p className="text-base md:text-lg text-center">
        &copy; {new Date().getFullYear()} Florette Cafe. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
