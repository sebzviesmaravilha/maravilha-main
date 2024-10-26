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

      <section className="about-section" id="about-section">
        <div className="about-container">
          <div className="about-card">
            <div>
              <h4 className="h-color">Asaf "Maravilha"</h4>
              <p className="p-color">
              Merhaba! Ben Maravilha, yazılım geliştirme, topluluk yönetimi ve projelerle insanların hayatlarını kolaylaştırma konusunda tutkuyla çalışan bir geliştiriciyim. Teknoloji dünyasına olan ilgim, özellikle Discord botları, oyun sunucuları ve otomasyon çözümleri gibi alanlarda özgün projeler üretmemi sağlıyor. Yazılım yolculuğum boyunca, ücretli ve ücretsiz projelerle birçok farklı ihtiyaç ve talebe çözüm sunmaya odaklandım. Geliştirdiğim projeler arasında, toplulukların büyümesine yardımcı olacak çok yönlü botlardan, oyun sunucuları için özel olarak tasarlanmış araçlara kadar çeşitli çözümler yer alıyor. Her projede kullanıcı odaklı ve sürdürülebilir çözümler üretmeyi amaçlıyorum.
              </p>
              <hr />
            </div>
            <div>
              <h4 className="h-color">Misyonum</h4>
              <p className="p-color">
              Amacım, yazılım ve teknolojiyi kullanarak insanların çevrimiçi deneyimlerini zenginleştirmek ve kolaylaştırmak. Sunduğum her hizmet, işlevselliği kadar kullanıcı dostu olmasına da özen gösterilerek tasarlanıyor.
              </p>
              <hr />
            </div>
          </div>
        </div>
        <p>
        </p>
      </section>

      <Footer />
    </motion.div>
  );
}