import Link from "next/link";
import Image from "next/image";
import botOnlineStatus from "../utils/images/botStatus.svg";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer className="footer">
        <div className="footer-sec1">
          <div className="footer-header">
            <ul>
              <li>
                <Link className="h-color" href="/">
                  Maravilha Development
                </Link>
                <span
                  style={{
                    fontSize: "12px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  className="p-color"
                >
                  <Image
                    src={botOnlineStatus}
                    width={20}
                    height={20}
                    alt="online-status"
                    className="onlineStatus"
                  />{" "}
                  Siparişler ve destek için müsait!
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-sec2">
          <hr />
          <div>
            <p className="p-color">
              Maravilha Development created by{" "}
              <Link
                href="https://maravilhadev.vercel.app"
                className="h-color no-decoration"
              >
                Maravilha
              </Link>
            </p>
            <p className="p-color">{year} &copy; All rights reserved!</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
