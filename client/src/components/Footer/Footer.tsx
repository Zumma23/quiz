import './Footer.scss'
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
              <input type="text" className="footer__info-question-input"
              placeholder="Text..."
              />
              <button className="footer__info-question-button">
                Send
              </button>
            </div>
          </div>
          <ul className="footer__social col-3">
          <li className="footer__social-item">
          {/* <img src={instagram} alt="" className="footer__social-img"/> */}
              <a href="#" className="footer__social-link">
              Instargam
              </a>
            </li>
          
            <li className="footer__social-item">
              <a href="#" className="footer__social-link">
                Facebook
              </a>
            </li>
            <li className="footer__social-item">
              <a href="#" className="footer__social-link">
                Twiter
              </a>
            </li>
            <li className="footer__social-item">
              <a href="#" className="footer__social-link">
                Gmail
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright"></div>
    </footer>
  );
}
