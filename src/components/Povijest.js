import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import slika2 from "./kriz.jpeg"
import slika3 from "./crkvica.jpg"
import Footer from "./Footer"
function Povijest() {
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
                       <h2>Povijest Podstrane</h2>
                       <p>Prije provale Avara i dolaska Hrvata na obale Jadranskoga mora početkom VII stoljeća poslije Krista, na prostoru današnje Podstrane živjeli su grčki doseljenici (arheološki ostaci na brdu Mutogras) i Delmati-Pituntini,  jedno od  mnogih iliriskih  plemena,  najvjerojatnije građani rimske naseobine Pituntium (arheološki ostaci rimske kulture iz tog doba; Polača, dvorac Cindro, lokalitet crkvice sv. Martina itd ). Dakle, doseljenjem Hrvata organizira se društveni i politički život na području bivše rimske pokrajine Dalmacije i više Rimljani nisu mogli vladati ovim prostorom kao do tada. Zbog sve češćih nasrtaja i obračuna na moru, već 839. godine mletački dužd Petar Tradenik bio je prisiljen potpisati sporazum u kneževskom dvoru u sv. Martinu sa hrvatskim knezom Mislavom o mirnom i slobodnom plovljenju Jadranskim morem (povijesni izvor: mletačka kronika đakona Ivana potkraj X st.).</p>
                       <p>Prije provale Avara i dolaska Hrvata na obale Jadranskoga mora početkom VII stoljeća poslije Krista, na prostoru današnje Podstrane živjeli su grčki doseljenici (arheološki ostaci na brdu Mutogras) i Delmati-Pituntini,  jedno od  mnogih iliriskih  plemena,  najvjerojatnije građani rimske naseobine Pituntium (arheološki ostaci rimske kulture iz tog doba; Polača, dvorac Cindro, lokalitet crkvice sv. Martina itd ). Dakle, doseljenjem Hrvata organizira se društveni i politički život na području bivše rimske pokrajine Dalmacije i više Rimljani nisu mogli vladati ovim prostorom kao do tada. Zbog sve češćih nasrtaja i obračuna na moru, već 839. godine mletački dužd Petar Tradenik bio je prisiljen potpisati sporazum u kneževskom dvoru u sv. Martinu sa hrvatskim knezom Mislavom o mirnom i slobodnom plovljenju Jadranskim morem (povijesni izvor: mletačka kronika đakona Ivana potkraj X st.).</p>
                       
                       <p>Konačnu slobodu i samostalnost hrvatski je narod izvojevao 1996. godine nakon neravnopravnog i krvavog rata sa velikosrpskim okupatorom. I u tom Domovinskom ratu Podstrana je dala velik doprinos u konačnoj pobjedi ali položene žrtve na oltar Domovine u usporedbi sa prethodnima, nisu bile uzalud. Mi danas konačno na temeljima povijesti krvlju ispisanoj, baštinimo slobodu i neovisnost koju su mnogi naši znani i neznani branitelji i heroji izborili za nas i buduće generacije.</p>
                   </td>
               </tr>
               <tr>
                   <td>
                   <img src={slika2} className="slika2" /><img src={slika3} className="slika3" />
                   </td>
               </tr>
               <tr>
                   <td className="foter"> 
                       <Footer ></Footer>
                   </td>
               </tr>
        </table>


    </div>
  );
}

export default Povijest;