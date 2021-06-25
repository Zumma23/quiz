import { Link } from "react-router-dom";
import "./Footer.scss";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="container-fluid row">
          <div className="footer__info col-9">
            <h1 className="footer__info-title">wizard puzzels</h1>
            <p className="footer__info-text">
              The platform was created exclusively for fun and knowledge )
            </p>
            <div className="footer__info-question">
              <p className="footer__info-question-title">
                If you have some questions, you can text us_)
              </p>
              <input
                type="text"
                className="footer__info-question-input"
                placeholder="Text..."
              />
              <button className="footer__info-question-button">Send</button>
            </div>
          </div>
          <ul className="footer__social col-3">
            <li className="footer__social-item">
              <Link className="footer__social-link" to="/">
                Instargam
              </Link>
            </li>

            <li className="footer__social-item">
              <Link className="footer__social-link" to="/">
                Facebook
              </Link>
            </li>
            <li className="footer__social-item">
              <Link className="footer__social-link" to="/">
                Twiter
              </Link>
            </li>
            <li className="footer__social-item">
              <Link className="footer__social-link" to="/">
                Gmail
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright"></div>
    </footer>
  );
}
