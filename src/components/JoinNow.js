import Link from "next/link";

const JoinNow = () => {
  return (
    <>
      <section className="joinUs">
        <div className="h-color joinUs-header">
          <h3>Maravilha Hakkında Daha Fazlası</h3>
        </div>
        <div className="joinUs-para p-color">
          Maravilha hakkında daha fazla bilgi almak mı istiyorsun?{" "}
        </div>
        <button className="btn">
          <Link className="h-color no-decoration" href="#">
            Hakkımda
          </Link>
        </button>
      </section>
    </>
  );
};

export default JoinNow;
