import resume from "../assets/resume.pdf";
import picture from '../assets/profile.jpeg'

import { FaGithub, FaLinkedinIn, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
return(
 <section
   id="home"
   className="section-container"
 > 
  {/* <section
   id="home"
  className="section-container"> */}
  <div className="max-w-7xl mx-auto w-full"> <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT SIDE */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p
          className="
          uppercase
          tracking-[4px]
          text-sm
          mb-6
          text-[var(--text-muted)]
          "
        >
          Frontend Developer
        </p>

        <h1
          className="
          heading-font
          text-6xl
          md:text-7xl
          lg:text-8xl
          font-semibold
          leading-none
          text-[var(--text)]
          "
        >
          Jesmoon
          Jahan Lia
        </h1>

        <p
          className="
          !mt-4 text-lg
          md:text-xl
          leading-relaxed
          max-w-xl
          text-[var(--text-muted)]
          "
        >
         Multilingual CSE Graduate transitioning into
          AI & Web Development.
        </p>

        <p
          className="
          !mt-2
          text-l
          text-[var(--accent)]
          "
        >
          A small explorer in this beautiful world. <br /><br />
        </p>

        <div className="flex flex-wrap items-center gap-4 mt-10">

          <a
            href={resume}
            download
            className="
            primary-btn
            flex
            items-center
            gap-3
            "
          >
            <FaDownload />
            Download Resume
          </a>

          <a
            href="https://github.com/LiaJahan"
            target="_blank"
            rel="noreferrer"
            className="
            outline-btn
            p-4
            flex
            items-center
            justify-center
            "
          >
            <FaGithub size={50} />
          </a>

          <a
            href="https://www.linkedin.com/in/liajahan"
            target="_blank"
            rel="noreferrer"
            className="
            outline-btn
            p-4
            flex
            items-center
            justify-center
            "
          >
            <FaLinkedinIn size={50} />
          </a>

        </div>
      </motion.div>

      {/* RIGHT SIDE */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
        }}
        className="relative"
      >
        <div
          className="
          absolute
          inset-0
          rounded-[30px]
          translate-x-5
          translate-y-5
          -z-5
          bg-[var(--accent)]
          opacity-20
          "
        />

        <img
src={picture}
alt="Jesmoon Jahan Lia"
className="
w-full
max-w-md
mx-auto
rounded-[30px]
shadow-xl
object-cover

brightness-[1.02]
contrast-[0.95]
saturate-[0.95]

transition-all
duration-500
"
/>

      </motion.div>

    </div>
  </div>
</section>

);
};

export default Hero;
