import React, { FC } from "react";
import { Link } from "react-router-dom";
interface IScore {
  score: string;
}
const Score: FC<IScore> = ({ score }) => {
  return (
    <div>
      <Link className="footer__social-link" to="/">
        {" "}
        Home
      </Link>
      <Link className="footer__social-link" to="/create-questions">
        {" "}
        Create
      </Link>
    </div>
  );
};

export default Score;
