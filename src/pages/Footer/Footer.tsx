const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 text-white p-4">
      <p className="text-lg text-center">
        &copy; {new Date().getFullYear()} Florette Cafe. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
