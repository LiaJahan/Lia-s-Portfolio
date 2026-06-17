import { FaEnvelope, FaWhatsapp, FaLocationDot } from "react-icons/fa6";

const Contact = () => {
return ( <section id="contact" className="section-container"> <div className="max-w-5xl mx-auto">
    <p className="uppercase tracking-[4px] text-sm text-[var(--text-muted)] mb-4">
      Let's Connect
    </p>

    <h2 className="section-title mb-8">
      Get In Touch
    </h2>

    <p className="max-w-2xl text-[var(--text-muted)] leading-8 mb-20">
      Whether you're looking for a developer, have a project in mind,
      or simply want to connect, I'd be happy to hear from you.
    </p>

    <div className="space-y-10">

      <div className="grid md:grid-cols-[180px_1fr] gap-6 pb-8 border-b border-[var(--border)]">
        <div className="flex items-center gap-3">
          <FaEnvelope className="text-lg" />
          <span className="font-medium">
            Email
          </span>
        </div>

        <a
          href="mailto:jesmoonlia@gmail.com"
          className="text-lg hover:text-[var(--accent)] transition-colors"
        >
          jesmoonlia@gmail.com
        </a>
      </div>

      <div className="grid md:grid-cols-[180px_1fr] gap-6 pb-8 border-b border-[var(--border)]">
        <div className="flex items-center gap-3">
          <FaWhatsapp className="text-lg" />
          <span className="font-medium">
            WhatsApp
          </span>
        </div>

        <a
          href="https://wa.me/46731565644"
          target="_blank"
          rel="noreferrer"
          className="text-lg hover:text-[var(--accent)] transition-colors"
        >
          +46 731 565 644
        </a>
      </div>

      <div className="grid md:grid-cols-[180px_1fr] gap-6 pb-8 border-b border-[var(--border)]">
        <div className="flex items-center gap-3">
          <FaLocationDot className="text-lg" />
          <span className="font-medium">
            Location
          </span>
        </div>

        <p className="text-lg">
          Spain
        </p>
      </div>

    </div>

  </div>
</section>

);
};

export default Contact;
