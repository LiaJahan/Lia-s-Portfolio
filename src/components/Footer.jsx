const Footer = () => {
return ( 

<footer className="border-t border-[var(--border)] mt-32">
  <div className="max-w-6xl mx-auto px-6 py-20">

    <h3 className="heading-font text-5xl md:text-7xl">
      Jesmoon Jahan Lia
    </h3>

    <div className="flex flex-col md:flex-row justify-between mt-8">
      <p className="text-[var(--text-muted)]">
        Frontend Developer based in Spain
      </p>

      <p className="text-[var(--text-muted)]">
        © 2026
      </p>
    </div>

  </div>
</footer>


);
};

export default Footer;
