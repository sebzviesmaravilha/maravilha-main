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

      <h3 className="h-color">Asaf 'Maravilha'</h3>

      <div className="about-container">
          <div className="about-card">
            <div>
              <h4 className="h-color">Uygun Fiyat</h4>
              <p className="p-color">
                Hizmetlerimiz piyasada bulunan insanların rahatlıkla elde edebilmesi için uygun fiyatlı tutuluyor.
              </p>
              <hr />
            </div>
            <div>
              <h4 className="h-color">7/24 Destek</h4>
              <p className="p-color">
                Herhangi bir sorunuz olduğunda veya yardıma ihtiyaç duyduğunuzda, 7/24 ulaşabileceğiniz destek ekibimiz her zaman yanınızda.
              </p>
              <hr />
            </div>
            <div>
              <h4 className="h-color">Kişiselleştirilebilir Özellikler</h4>
              <p className="p-color">
                Botlarımız tamamen özelleştirilebilir olup, ihtiyacınıza göre düzenlenebilir. Üstelik bazı özel kişiselleştirme seçenekleri tamamen ÜCRETSİZ!
              </p>
              <hr />
            </div>
            <div>
              <h4 className="h-color">Güvenilir ve Hızlı</h4>
              <p className="p-color">
                Hizmetlerimiz güvenilir sunucularda barındırılmakta olup hızlı, sorunsuz ve güvenli bir deneyim sunmaktadır.
              </p>
              <hr />
            </div>
          </div>
        </div>

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