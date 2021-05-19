import React from "react";

import slika1 from "./podstrana.png";

function Header() {
  return (
    <div>
      <h1 className="zaglavlje"><img src={slika1} className="slika" /></h1>
      <p className="ime">napravio-Marko Đonlić</p>


    </div>
  );
}

export default Header;