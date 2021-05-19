import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Forma from "./Forma";
import Footer from "./Footer"
function Opcenito() {
  return (
    <div>


      <table className="tablica1" border="1px">
        <tr>
            <td>
                <Header></Header>
            </td>

        </tr> 
             <tr>
                    <td> 
                    <div class="topnav">
                        <Link to="/">Pocetna</Link>
                        <Link to="/Povijest">Povijest</Link>
                        <Link to="/Opcenito">informacije</Link>
                        <Link to="/Turizam">Turizam</Link>
                    </div>

                    </td>

               </tr>
               <tr>
                 <td>
                   <h3>Župni uredi</h3>
                   <h3>Župa Gospe u siti </h3>
                   <p>Adresa: Paštrićeva 8, Strožanac, 21312 Podstrana</p>
                   <p>Telefon: 021 333 500</p>
                   <a href="http://www.zupagospeusiti.hr/"><p>Web: http://www.zupagospeusiti.hr/</p></a>
                   <p>Župnik: don Ante Vranković</p>
                 </td>
                 </tr>
                 <tr>
                 <td>
                   <h3>Župa Gospe od zdravlja</h3>
                   <p>Adresa: Cesta Sv. Martina 73, Sv. Martin, 21312 Podstrana</p>
                   <p>Telefon: 021 330 262</p>
                   <p>Župnik: don Ivica Barišić</p>
                 </td>
               </tr>
               <tr>
                 <td>
                   <b><p>Budite u kontaktu-</p></b>
                   <Forma></Forma>
                 </td>
               </tr>
               <tr>
                 <td className="foter">
                   <Footer></Footer>
                 </td>
               </tr>
        </table>


    </div>
  );
}

export default Opcenito;