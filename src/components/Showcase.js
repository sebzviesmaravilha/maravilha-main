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
        <div className="showcase-header-container">
          <img src="/showcase.png" alt="Maravilha Development Logo" className="showcase-logo" />
          <h2 className="showcase-header-text h-color">
            Discord sunucularınız için özel ve profesyonel çözümler.
          </h2>
        </div>
        <p className="showcase-para p-color">
          Herkes gibi kendi sunucunuzu özelleştirmek veya kişisel bot mu istiyorsunuz?
          Tam olarak doğru yere geldiniz!
        </p>
      </main>
    </motion.div>
  );
};

export default Showcase;
