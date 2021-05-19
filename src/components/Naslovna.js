import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import slika2 from "./ecomap.jpg";
import Footer from "./Footer";

function Naslovna() {
  return (
    <div>


      <table className="tablica1" border="1px">
        <tr>
            <td colSpan="2">
                <Header></Header>
            </td>

        </tr> 


             <tr>
                    <td colSpan="2">
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
                    <h2>40. sjednica Općinskog vijeća Općine Podstrana</h2>
                        <p>Usvajanje zapisnika sa 39. sjednice Općinskog vijeća,
                            Prijedlog za donošenje Statuta Općine Podstrana,
                            Prijedlog za donošenje Odluke o davanju prethodne suglasnosti na Izmjene i dopune Statuta Javne vatrogasne postrojbe Općine Podstrana,
                            Prijedlog za donošenje Izmjena i dopuna Odluke o osnivanju i imenovanju ulice kralja Zvonimira – I. odvojak na području Općine Podstrana (k.o. Donja Podstrana),
                            Prijedlog za donošenje Odluke o isplati naknade u visini tržišne cijene zemljišta oznake čest. zem, 617/1 k.o. Donja Podstrana prenesenog u vlasništvo Općine Podstrana,
                            Prijedlog za donošenje Odluke o kupnji nekretnine oznake čest. zem. 488/1, k.o. Donja Podstrana,
                            Prijedlog za donošenje III Izmjena i dopuna Odluke o načinu pružanja javne usluge prikupljanja miješanog komunalnog otpada i biorazgradivog otpada na području Općine Podstrana,</p>

                    </td>
                    <td rowSpan="3">
                    
                    <button class="button" >Komunalije</button>
                    <button class="button ">Javni natjecaj</button>
                    <button class="button ">promet split</button>
                    <button class="button ">legalizacija zemljišta</button>
                    <button class="button ">trvtke i obrti</button>
                        
                    </td>



               </tr>
               <tr>
                   <td>
                       <h2>ECOMAP PROJEKT</h2>
                       <img src={slika2} className="slika1" />
                       <p>Općina Podstrana vodeći je partner projekta ECOMAP koji se sufinancira iz Europskog fonda za regionalni razvoj u okviru programa prekogranične suradnje INTERREG ITALY-CROATIA. Na projektu sudjeluje još 6 talijanskih (Comune di Ancona, Bibione Mare S.P.A., Istituto Nazionale di Oceanografia e di Geofisica Sperimentale (OGS), Università degli Studi di Ferrara, Consorzio Futuro in Ricerca, Polo Tecnologico di Pordenone Società Consortile per Azioni) i 4 hrvatska partnera (PŠD Špinut, Zdravi Grad, Društvo športskih ribolovaca Strožanac, Institut za oceanografiju i ribarstvo u Splitu).
                       Drugi cilj istraživanja bio je provjeriti prisutnost izvora slatke vode iz morskog dna, zabilježenih tijekom geofizičkih istraživanja tijekom 2019. godine. Nažalost, tijekom mjerenja profila morskog stupca CTD sondom navedeni izvori nisu potvrđeni, vjerojatno zbog suhe zime / prvog dijela proljeća. Ova prva zapažanja potvrditi će se nakon detaljne obrade podataka.
                       </p>

                   </td>
               </tr>
               <tr>
                   <td>
                       <h2>Mjere preventivne deratizacije i dezinsekcije</h2>
                       <p>Obavještavamo vas da će se od dana 17.05.2021. do 21.05.2021 na području Općine Podstrana provoditi sustavne mjere preventivne proljetne deratizacije.

Sustavna deratizacija će se provoditi rasutim i parafinskim mamcima koji će se postavljati na privatne i javne površine dok će se dezinsekcija provoditi larvicidma (tabletama).

Kako bi se zadane mjere provele uspješno potrebna je suradnja svih stanovnika Općine Podstrana, te pridržavanje sljedećih mjera (onemogućiti djeci pristup otrovima, onemogućiti domaćim životinjama pristup otrovima te ne dirati i premještati zatrovane meke).</p>
                   </td>
               </tr>
               <tr>
                   <td colSpan="2" className="foter">
                       <Footer></Footer>

                   </td>
               </tr>
        </table>


    </div>
  );
}

export default Naslovna;