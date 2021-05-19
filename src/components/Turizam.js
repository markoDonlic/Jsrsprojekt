import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import slika4 from "./hotellav.jpg";
import slika5 from "./cindro.jpg";
import slika6 from "./gornja.jpg";
import Footer from "./Footer"
function Turizam() {
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
                   <h2>Turizam u podstrani</h2>
                   <p><b>Gospodarski</b> razvoj Podstrane temelji se na razvoju turizma. Bitne odrednice turističkog razvoja kao i garancija uspješnosti sadržane su u tradicionalnoj gostoljubivosti Podstranjana, kulturnom nasljeđu, prirodnoj ljepoti, blagodati klime, jedinstvenom obalnom  nizu razvedenih plaža i čistoći mora.</p>
                   <img src={slika4} className="hotelslika" /><p><b>Otvorenje</b> hotelskog kompleksa Le Meridien Lav visoke kategorije, nudi širok spektar luksuznih i modernih smještajnih kapaciteta. Prestižan hotel s pet zvjezdica, smješten na izvrsnoj obalnoj poziciji s pogledom na more, Split i susjedne otoke, jedini je predstavnik međunarodnog lanca na području srednje Dalmacije i  pruža najveći izbor konferencijskih mogućnosti na Jadranu.</p>
                    <p><b>Uz</b> postojeću domaću ponudu niza privatnih restorana, pansiona i hotela, sa smještajnim kapacitetima kategoriziranim po mjerilima europskog standarda, Podstrana se predstavlja kao iznimno turističko odredište i idealan izbor kako za poslovne ljude tako i za one željne odmora</p>
                 </td>
               </tr>
               <tr>
                 <td>
                 <img src={slika5} className="cindro" /><p><b>Ljetnikovac</b> Cindro graditeljski je objekt zanimljive povijesne stratigrafije. Predstavlja rijetko očuvan ladanjsko-gospodarski sklop iz 18 st.. Posebna vrijednost ljetnikovca je očuvani perivoj bujne vegetacije mediteranskog raslinja. Svjedoči o povijesnoj tradiciji dalmatinskog patricijata za estetiku okruženja i usklađenog života u njemu.  Ljetnikovac je restauriran 2001. godine. U prostoru ljetnikovca održavaju se ljetne kulturne priredbe.</p>
                 <p><b>Dvorište</b> kompleksa, površine 900 m², pretvoreno je u perivoj s pomno odabranim hortikulturnim vrstama među kojima prevladavaju mediteranske vrste: oleandri, palme, murve i šimšir. Otkako je 1979. g. ljetnikovac zaštićen kao spomenik kulture i nakon toga restauriran, unutarnji se prostor koristi kao ljetni dom njegovih vlasnika, a dvorišni kao otmjena zelena pozornica podstranskih ljetnih kulturnih zbivanja.</p>
                 </td>
               </tr>
               <tr>
                 <td>
                   
                   <img src={slika6} className="gornja" /><p><b>Mutogras</b> je istaknuti obalni brežuljak na krajnjem jugoistoku Podstrane čiji raznovrsni i raznodobni arheološki nalazi dobro ilustriraju kronologiju širenja i međusobnog utjecaja kultura na ovom dijelu jadranske obale.</p>
                   <p>Najstarija je prapovijesna gradina naseobinskog tipa, jedna od najvećih na podstranskom teritoriju i možebitno glavno naselje ilirskih Pituntina, a stajala je uz graničnu liniju prema susjednom ilirskom plemenu Nerastina (Jesenice). Ovo pituntinsko naselje na Mutograsu, vjerojatno okrenuto prema moru, u osvit je antike (4. st. pr. Kr.) bilo izloženo kulturnom utjecaju novodoseljenih Grka na što navode ulomci isejskoga tipa crno premazane keramike nađeni u zidanoj grobnici na južnoj strani brijega.</p>
                   
                 </td>
               </tr>
               <tr>
                 <td className="podnozje">
                   <b><p className="kraj">Za vise informacija kliknite-</p><a href="http://visitpodstrana.hr/" className="link"><p className="kraj">Turisticka zajednica podstrana</p></a></b>

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

export default Turizam;