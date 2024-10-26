import Link from "next/link";
import { motion } from "framer-motion";

const Showcase = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
    >
      <main className="showcase">
        <h1 className="showcase-header h-color">Maravilha Development</h1>
        <h2 className="showcase-header-text h-color">
          Discord sunucularınız için özel ve profesyonel çözümler.
        </h2>
        <p className="showcase-para p-color">
          Herkes gibi kendi sunucunuzu özelleştirmek veya kişisel bot mu istiyorsunuz?
          Tam olarak doğru yere geldiniz!
        </p>

        <span className="p-color">Siparişler ve destek için müsaitim!</span>
        <div className="showcase-btn">
          <button className="btn">
            <Link className="h-color no-decoration" href="#">
              Invite now!
            </Link>
          </button>

          <button className="btn">
            <Link className="h-color no-decoration" href="#">
              Join server!
            </Link>
          </button>
        </div>
      </main>
    </motion.div>
  );
};

export default Showcase;
