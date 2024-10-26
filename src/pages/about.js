import Head from "next/head";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { motion } from "framer-motion";

export default function Commands() {
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
        <nav className="accordion arrows" id="commands">
          <header className="box">
            <label htmlFor="acc-close" className="box-title h-color">
              Yaptığım, ücretsiz veya ücretli olarak kullanıma sunduğum projelerim.
            </label>
          </header>
          <input type="radio" name="accordion" id="cb1" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb1">
              Ücretli Projelerim
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <strong><kbd>Public Bot</kbd></strong> -{" "}
                  <span className="p-color">Public sunucuları için aylık ücret ile fiyatlandırılan çok yönlü botlar.</span>
                </li>
                <li>
                  <strong><kbd>Public Bot Bileşenleri</kbd></strong> -{" "}
                  <span className="p-color">Public botunun yanı sıra, public bot içerisinde bulunan bileşenleri ayrı satın alma fırsatınız da bulunuyor. Moderasyon, Kayıt, Guard, Log, Çekiliş, Destek vb.</span>
                </li>
                <li>
                  <strong><kbd>Oyun Sunucuları İçin Botlar</kbd></strong> -{" "}
                  <span className="p-color">Oyun sunucuları için sunucudan belirli verileri çekip anlık yansıtabilen botlar.</span>
                </li>
                <li>
                  <strong><kbd>Hesap Aktifleştirme Altyapısı</kbd></strong> -{" "}
                  <span className="p-color">Belirttiğiniz yapılandırma içinde girdiğiniz tokenleri aktif eden ve belirttiğiniz ses kanalına sokan bunun yanı sıra tokenlere rastgele olarak şarkı dinleten dev altyapı.</span>
                </li>
                <li>
                  <strong><kbd>Self Stat Botu</kbd></strong> -{" "}
                  <span className="p-color">Oyun sunucuları için sunucudan belirli verileri çekip, belirttiğiniz hesaba butonlu oynuyor (rpc) olarak yansıtma altyapısı.</span>
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb2" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb2">
              Ücretsiz Projelerim
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                <strong><kbd>SA:MP Whitelist Botu</kbd></strong> -{" "}
                  <span className="p-color">https://github.com/sebzviesmaravilha/samp-v14-whitelist</span>
                </li>
                <li>
                <strong><kbd>Discrd Anlık Veri Güncelleme</kbd></strong> -{" "}
                  <span className="p-color">https://www.webailesi.com/konu-d-js-v14-anlik-sunucu-verilerini-gosterme-26002</span>
                </li>
                <li>
                <strong><kbd>Detaylı SQL Anlatımı</kbd></strong> -{" "}
                  <span className="p-color">https://www.webailesi.com/konu-detayli-anlatim-sql-31530</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="acc-close" />
        </nav>
      </section>
      <Footer />
    </motion.div>
  );
}
