import React from "react";
import { Link } from "react-router-dom";
import ViewListIcon from "@material-ui/icons/ViewList";
import AddIcon from "@material-ui/icons/Add";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import "./Header.styles.scss";

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <h2>MY MONEY</h2>
    </Link>
    <div className="options">
      <Link className="option" to="/budgets">
        MY BUDGETS <ViewListIcon className="icon" />
      </Link>
      <Link className="option" to="/create-budget">
        CREATE BUDGET <AddIcon className="icon" />
      </Link>
      <Link className="option" to="/sign-in">
        LOG IN <AccountCircleIcon className="icon" />
      </Link>
      <Link className="option" to="/">
        LOG OUT <ExitToAppIcon className="icon" />
      </Link>
    </div>
  </div>
);

export default Header;
