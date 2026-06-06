function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-8">
      <div className="mx-auto max-w-7xl px-1">
        <p className="text-center">
          &copy; {new Date().getFullYear()} Top Ten Social. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
