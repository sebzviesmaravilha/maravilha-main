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
        <title>Projeler | Maravilha</title>
        <meta
          name="description"
          content="Maravilha Development'in yaptığı ve ücretsiz/ücretli kullanıma sunduğu projelerin listesi."
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
                  <kbd>Public Bot</kbd> -{" "}
                  <span className="p-color">Public sunucuları için aylık ücret ile fiyatlandırılan çok yönlü botlar.</span>
                </li>
                <li>
                  <kbd>Public Bot Bileşenleri</kbd> -{" "}
                  <span className="p-color">Public botunun yanı sıra, public bot içerisinde bulunan bileşenleri ayrı satın alma fırsatınız da bulunuyor. Moderasyon, Kayıt, Guard, Log, Çekiliş, Destek vb.</span>
                </li>
                <li>
                  <kbd>Oyun Sunucuları İçin Botlar</kbd> -{" "}
                  <span className="p-color">Oyun sunucuları için sunucudan belirli verileri çekip anlık yansıtabilen botlar.</span>
                </li>
                <li>
                  <kbd>Hesap Aktifleştirme Altyapısı</kbd> -{" "}
                  <span className="p-color">Belirttiğiniz yapılandırma içinde girdiğiniz tokenleri aktif eden ve belirttiğiniz ses kanalına sokan bunun yanı sıra tokenlere rastgele olarak şarkı dinleten dev altyapı.</span>
                </li>
                <li>
                  <kbd>Self Stat Botu</kbd> -{" "}
                  <span className="p-color">Oyun sunucuları için sunucudan belirli verileri çekip, belirttiğiniz hesaba butonlu oynuyor (rpc) olarak yansıtma altyapısı.</span>
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb2" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb2">
              Her Türlü Self Bot İşlemleri
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>$command3</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb3" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb3">
              Customization 👀
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>$command1</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
                <li>
                  <kbd>$command2</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
                <li>
                  <kbd>$command3</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb4" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb4">
              Gameplay 🎲
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>$command1</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
                <li>
                  <kbd>$command2</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
                <li>
                  <kbd>$command3</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb5" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb5">
              Image 🖼️
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>$command1</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
                <li>
                  <kbd>$command2</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
                <li>
                  <kbd>$command3</kbd> -{" "}
                  <span className="p-color">Description of command</span>
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
