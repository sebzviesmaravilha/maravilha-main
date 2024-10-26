import Link from "next/link";

const About = () => {
  return (
    <>
      <section className="about-section" id="about-section">
        <div className="about-header">
          <h3 className="h-color">Neden bizi tercih etmelisiniz?</h3>
          <p className="p-color">
            Discord bot ve proje satışında kalite, güven ve müşteri memnuniyeti önceliğimizdir.
            Müşterilerimize sunduğumuz ayrıcalıklı hizmetler ile fark yaratıyoruz.
          </p>
        </div>
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
        <p>
          <Link href="/projects" className="h-color no-decoration">
            Projelere Göz At &rarr;
          </Link>
        </p>

        <section className="about-stats">
          <div className="about-stats-card">
            <h4 className="h-color">50+</h4>
            <p className="p-color">Aktif Hizmet</p>
          </div>
          <div className="about-stats-card">
            <h4 className="h-color">200+</h4>
            <p className="p-color">Toplam Hizmet</p>
          </div>
          <div className="about-stats-card">
            <h4 className="h-color">20+</h4>
            <p className="p-color">Toplam Proje</p>
          </div>
        </section>
      </section>
    </>
  );
};

export default About;
