import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
    >
      <Head>
        <title>Hakkımda | Maravilha</title>
        <meta
          name="description"
          content="Maravilha hakkında bilmeniz gereken şeyler."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <section className="about-section">
        <h1 className="about-title">Asaf 'Maravilha'</h1>
        <p className="about-intro">
          Merhaba! Ben Maravilha, yazılım geliştirme ve topluluk yönetimi konularında tutkulu biriyim. Farklı projelerimle topluluğuma katkıda bulunmayı seviyorum.
        </p>
      </section>

      <Footer />
    </motion.div>
  );
}