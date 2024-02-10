

let verfahren= 0;
let anzahl = 1 ;

   
window.addEventListener("load", function() {


    if (document.getElementById("auswahlHV")) {
        document.getElementById("auswahlHV").addEventListener("click", vickers10);
       };
    if (document.getElementById("auswahlhb")) {
        document.getElementById("auswahlhb").addEventListener("click", hbw);
       };
    if (document.getElementById("auswahlrm")) {
       document.getElementById("auswahlrm").addEventListener("click", rm);
       };  
    if (document.getElementById("auswahlhrb")) {
        document.getElementById("auswahlhrb").addEventListener("click", hrb);
       };
       if (document.getElementById("auswahlhrf")) {
        document.getElementById("auswahlhrf").addEventListener("click", hrf);
       };
       if (document.getElementById("auswahlhrc")) {
        document.getElementById("auswahlhrc").addEventListener("click", hrc);
       };
       if (document.getElementById("auswahlhra")) {
        document.getElementById("auswahlhra").addEventListener("click", hra);
       };
       if (document.getElementById("auswahlhrd")) {
        document.getElementById("auswahlhrd").addEventListener("click", hrd);
       };
       if (document.getElementById("auswahlhr15")) {
        document.getElementById("auswahlhr15").addEventListener("click", hr15);
       };
       if (document.getElementById("auswahlhr30")) {
        document.getElementById("auswahlhr30").addEventListener("click", hr30);
       };
       if (document.getElementById("auswahlhr45")) {
        document.getElementById("auswahlhr45").addEventListener("click", hr45);
       };

       if (document.getElementById("3_messungen")) {
        document.getElementById("3_messungen").addEventListener("click", drei);
       };
       if (document.getElementById("5_messungen")) {
        document.getElementById("5_messungen").addEventListener("click", fünf);
       };
       if (document.getElementById("1_messungen")) {
        document.getElementById("1_messungen").addEventListener("click", eins);
       };




    if (document.getElementById("button")) {
     document.getElementById("button").addEventListener("click", test);
    }
   });

   function eins() {
    anzahl = 0 ;
    document.getElementById("feld1").innerHTML = ('<input type="number" id="eingabe_1" class="col-sm-10 " style="margin-top: 10px;"></input>');
    document.getElementById("feld2").innerHTML = ('');
    document.getElementById("feld3").innerHTML = ('');
   }

   function drei() {
 anzahl = 1 ;
 document.getElementById("feld1").innerHTML = ('<input type="number" id="eingabe_1" class="col-sm-10 " style="margin-top: 10px;"></input>');
 document.getElementById("feld2").innerHTML = ('<input type="number" id="eingabe_2" class="col-sm-10 " style="margin-top: 10px;"> </input>');
 document.getElementById("feld3").innerHTML = ('<input type="number" id="eingabe_3" class="col-sm-10 " style="margin-top: 10px;"></input>');
}

function fünf() {
    anzahl = 2 ;
    document.getElementById("feld1").innerHTML = ('<input type="number" id="eingabe_1" class="col-sm-10 " style="margin-top: 10px;"></input> <br> <input type="number" id="eingabe_4" class="col-sm-10 "style="margin-top: 10px;"></input>');
 document.getElementById("feld2").innerHTML = ('<input type="number" id="eingabe_2" class="col-sm-10 " style="margin-top: 10px;"> </input> <br> <input type="number" id="eingabe_5" class="col-sm-10 " style="margin-top: 10px;"></input>');
 document.getElementById("feld3").innerHTML = ('<input type="number" id="eingabe_3" class="col-sm-10 " style="margin-top: 10px;"></input>');
}

function vickers10() {
    verfahren = 2;
    document.getElementById("aktuellesVerfahren").innerHTML = (' HV10');
}
  
function hbw() {
    verfahren = 3;
    document.getElementById("aktuellesVerfahren").innerHTML = (' HBW');
}

function rm() {
    verfahren = 1;
    document.getElementById("aktuellesVerfahren").innerHTML = (' MPa');
}
function hrb() {
    verfahren = 4;
    document.getElementById("aktuellesVerfahren").innerHTML = (' HRB');
}
function hrf() {
    verfahren = 5;
    document.getElementById("aktuellesVerfahren").innerHTML = (' HRF');
}
function hrc() {
    verfahren = 6;
    document.getElementById("aktuellesVerfahren").innerHTML = (' HRC');
}
function hra() {
    verfahren = 7;
    document.getElementById("aktuellesVerfahren").innerHTML = (' HRA');
}
function hrd() {
    verfahren = 8;
    document.getElementById("aktuellesVerfahren").innerHTML = (' HRD');
}
function hr15() {
    verfahren = 9;
    document.getElementById("aktuellesVerfahren").innerHTML = (' HR15N');
}
function hr30() {
    verfahren = 10;
    document.getElementById("aktuellesVerfahren").innerHTML = (' HR30N');
}
function hr45() {
    verfahren = 11;
    document.getElementById("aktuellesVerfahren").innerHTML = (' HR45N');
}

//Umwertung

   function test() {

    if (verfahren===0){
        alert('Wählen die ein Verfahren aus.')
       }

    if(verfahren>0){
        if (anzahl>0){
     if (anzahl =1){
    let zahl1 = document.getElementById("eingabe_1").value;
    let zahl2 = document.getElementById("eingabe_2").value;
    let zahl3 = document.getElementById("eingabe_3").value;
     mittelwert = ((parseInt(zahl1)+parseInt(zahl2)+parseInt(zahl3))/3);
     mittelwert = mittelwert.toFixed(1)
    document.getElementById("härtemittel").innerHTML = (mittelwert);
   
}

else {
    let zahl1 = document.getElementById("eingabe_1").value;
    let zahl2 = document.getElementById("eingabe_2").value;
    let zahl3 = document.getElementById("eingabe_3").value;
    let zahl4 = document.getElementById("eingabe_4").value;
    let zahl5 = document.getElementById("eingabe_5").value;
    let mittelwert = ((parseInt(zahl1)+parseInt(zahl2)+parseInt(zahl3)+parseInt(zahl4)+parseInt(zahl5))/5);
    mittelwert = mittelwert.toFixed(1);
    document.getElementById("härtemittel").innerHTML = Math.round(mittelwert);
   
}}
else{

  let zahl1 = document.getElementById("eingabe_1").value;
   mittelwert = zahl1;
    document.getElementById("härtemittel").innerHTML = Math.round(mittelwert); 
}
    }


  // Vikers

if(verfahren===2){
  
    
    

    document.getElementById("vickers").innerHTML = Math.round(mittelwert);

    if (mittelwert>=80 && mittelwert<=650){
        let Rm = Math.round(-0.000000000000033051023081579100*mittelwert**6 + 0.000000000055199584611145400000*mittelwert**5 - 0.000000031702112824172500000000*mittelwert**4 + 0.000007881369833892620000000000*mittelwert**3 - 0.000808699350075553000000000000*mittelwert**2 + 3.239441381257880000000000000000*mittelwert - 1.901332866049050000000000000000);
        document.getElementById("zug").innerHTML = (Rm);
    }

    else{
        document.getElementById("zug").innerHTML = ('ungültig');
    }

    if (mittelwert>=80 && mittelwert<=650){
        let HB = Math.round(-0.000000000000001761444212250190*mittelwert**6 + 0.000000000004036184839453120000*mittelwert**5 - 0.000000003594298337857430000000*mittelwert**4 + 0.000001563601496185270000000000*mittelwert**3 - 0.000342989401280058000000000000*mittelwert**2 + 0.985827873333358000000000000000*mittelwert - 1.346145272750010000000000000000);        
        document.getElementById("brinell").innerHTML = (HB);
    }
    else{
        document.getElementById("brinell").innerHTML = ('ungültig');
    }

    if (mittelwert>=85 && mittelwert<=290){
        let hrb = (-0.000000000012588708734624700000*mittelwert**6 + 0.000000014941375262332800000000*mittelwert**5 - 0.000007230799434550590000000000*mittelwert**4 + 0.001828932137286380000000000000*mittelwert**3 - 0.256613558225974000000000000000*mittelwert**2 + 19.392304645642100000000000000000*mittelwert - 559.899363867060000000000000000000);
        hrb = hrb.toFixed(1); 
        document.getElementById("hrb").innerHTML = (hrb);
    }
    else{
        document.getElementById("hrb").innerHTML = ('ungültig');
    }

    if (mittelwert>=90 && mittelwert<=250){    
        let hrf = (-0.000000000011164848993244800000*mittelwert**6 + 0.000000011874739250933300000000*mittelwert**5 - 0.000005161613629735620000000000*mittelwert**4 + 0.001174665228559580000000000000*mittelwert**3 - 0.148757713166904000000000000000*mittelwert**2 + 10.277913513324900000000000000000*mittelwert - 219.276950499477000000000000000000);
        hrf = hrf.toFixed(1);
        document.getElementById("hrf").innerHTML = (hrf);
    }
    else{
        document.getElementById("hrf").innerHTML = ('ungültig');
    }

    if (mittelwert>=240 && mittelwert<=940){
        let hrc = (-0.000000000000001310317964033520*mittelwert**6 + 0.000000000004795781031590630000*mittelwert**5 - 0.000000007219355283232990000000*mittelwert**4 + 0.000005801106395051900000000000*mittelwert**3 - 0.002734227623276840000000000000*mittelwert**2 + 0.811591942224873000000000000000*mittelwert - 76.533188311938000000000000000000);
        hrc = hrc.toFixed(1);
        document.getElementById("hrc").innerHTML = (hrc);
    }
    else{
        document.getElementById("hrc").innerHTML = ('ungültig');
    }

    if (mittelwert>=240 && mittelwert<=940){
        let hra = (-0.000000000000000244904996709707*mittelwert**6 + 0.000000000000879133796817072000*mittelwert**5 - 0.000000001303940482682380000000*mittelwert**4 + 0.000001060308201033440000000000*mittelwert**3 - 0.000553634821561067000000000000*mittelwert**2 + 0.220213370893433000000000000000*mittelwert + 28.874922725158600000000000000000);
        hra = hra.toFixed(1);
        document.getElementById("hra").innerHTML = (hra);
        }
    else{
        document.getElementById("hra").innerHTML = ('ungültig');
    }

    if (mittelwert>=240 && mittelwert<=940){
        let hrd  = (-0.000000000000000840225344904784*mittelwert**6 + 0.000000000003084662750907860000*mittelwert**5 - 0.000000004673717131439220000000*mittelwert**4 + 0.000003803571519740030000000000*mittelwert**3 - 0.001836676657090500000000000000*mittelwert**2 + 0.569225667049665000000000000000*mittelwert - 29.740289367700700000000000000000);                   
        hrd = hrd.toFixed(1);            
        document.getElementById("hrd").innerHTML = (hrd);
    }
    else{
        document.getElementById("hrd").innerHTML = ('ungültig');
    }

    if (mittelwert>=240 && mittelwert<=940){
        let hr15n = (-0.000000000000000546499869785729*mittelwert**6 + 0.000000000002122985512717510000*mittelwert**5 - 0.000000003411469317539140000000*mittelwert**4 + 0.000002938147732083380000000000*mittelwert**3 - 0.001485645095386760000000000000*mittelwert**2 + 0.462237183577348000000000000000*mittelwert + 13.440222247291900000000000000000);
        hr15n = hr15n.toFixed(1);
        document.getElementById("hr15n").innerHTML = (hr15n);
    }
    else{
    document.getElementById("hr15n").innerHTML = ('ungültig');
    }

    if (mittelwert>=240 && mittelwert<=940){
        let hr30n = (-0.000000000000001042082098574570*mittelwert**6 + 0.000000000003804472741526960000*mittelwert**5 - 0.000000005740850134215050000000*mittelwert**4 + 0.000004654170435654270000000000*mittelwert**3 - 0.002235236498448350000000000000*mittelwert**2 + 0.685850157105378000000000000000*mittelwert - 42.074932287753700000000000000000);                  
        hr30n = hr30n.toFixed(1);   
        document.getElementById("hr30n").innerHTML = (hr30n);
    }
    else{
        document.getElementById("hr30n").innerHTML = ('ungültig');
    }

    if (mittelwert>=240 && mittelwert<=940){             
        let hr45n = (-0.000000000000001635883204360230*mittelwert**6 + 0.000000000006044938375694170000*mittelwert**5 - 0.000000009129329550657920000000*mittelwert**4 + 0.000007298981901001080000000000*mittelwert**3 - 0.003393344924137850000000000000*mittelwert**2 + 0.986411643233487000000000000000*mittelwert - 96.154936260970500000000000000000);
        hr45n = hr45n.toFixed(1);    
        document.getElementById("hr45n").innerHTML = (hr45n);
    }
    else{
        document.getElementById("hr45n").innerHTML = ('ungültig');
    }  
}
        

 // Vikers ende


 //Brinell

 if(verfahren===3){
 
   
    if (mittelwert>=76 && mittelwert<=618){
         document.getElementById("brinell").innerHTML= Math.round(mittelwert);}
    else{
        document.getElementById("brinell").innerHTML = ('ungültig');
    }

    if (mittelwert>=76 && mittelwert<=618){
        let Rm = Math.round(3.3852*mittelwert - 2.2772);
        document.getElementById("zug").innerHTML = (Rm);
    }
    else{
        document.getElementById("zug").innerHTML = ('ungültig');
    }

    if (mittelwert>=76 && mittelwert<=618){
        let hv = Math.round(1.052*mittelwert + 0.0261);
        document.getElementById("vickers").innerHTML = (hv);
    }
    else{
        document.getElementById("vickers").innerHTML = ('ungültig');
    }

    if (mittelwert>=80.7 && mittelwert<=267){
        let hrb = (-0.000000000017013632325964000000*mittelwert**6 + 0.000000019166447810824000000000*mittelwert**5 - 0.000008802390389543740000000000*mittelwert**4 + 0.002112607973565500000000000000*mittelwert**3 - 0.281262366020033000000000000000*mittelwert**2 + 20.177269186655300000000000000000*mittelwert - 552.744643182022000000000000000000);                  
        hrb = hrb.toFixed(1); 
        document.getElementById("hrb").innerHTML = (hrb);
    }
    else{
        document.getElementById("hrb").innerHTML = ('ungültig');
    }

    if (mittelwert>=85.5 && mittelwert<=238){
        let hrf = (-0.000000000015976505158098800000*mittelwert**6 + 0.000000016070913147451100000000*mittelwert**5 - 0.000006604659621539860000000000*mittelwert**4 + 0.001420449767354410000000000000*mittelwert**3 - 0.169871711727337000000000000000*mittelwert**2 + 11.069346117913700000000000000000*mittelwert - 224.001113440629000000000000000000);                   
        hrf = hrf.toFixed(1);    
        document.getElementById("hrf").innerHTML = (hrf);
    }
    else{
        document.getElementById("hrf").innerHTML = ('ungültig');
        }

    if (mittelwert>=228 && mittelwert<=618){
        let hrc = (-0.000000000000060441261518669800*mittelwert**6 + 0.000000000161208071929281000000*mittelwert**5 - 0.000000176012319110189000000000*mittelwert**4 + 0.000100721403486961000000000000*mittelwert**3 - 0.032011942029524500000000000000*mittelwert**2 + 5.498916098009250000000000000000*mittelwert - 378.374250208658000000000000000000); 
        hrc = hrc.toFixed(1);    
        document.getElementById("hrc").innerHTML = (hrc);
    }
    else{
        document.getElementById("hrc").innerHTML = ('ungültig');
    }

    if (mittelwert>=228 && mittelwert<=618){
        let hra = (-0.000000000000015701879231970600*mittelwert**6 + 0.000000000042273459687221300000*mittelwert**5 - 0.000000046534555479433900000000*mittelwert**4 + 0.000026815672005708100000000000*mittelwert**3 - 0.008600133462517920000000000000*mittelwert**2 + 1.526356479912400000000000000000*mittelwert - 56.140025838083200000000000000000);
        hra = hra.toFixed(1);      
        document.getElementById("hra").innerHTML = (hra);
    }
    else{
        document.getElementById("hra").innerHTML = ('ungültig');
    }

    if (mittelwert>=228 && mittelwert<=618){
        let hrd  = (-0.000000000000042556920053539900*mittelwert**6 + 0.00000000011199241265739700*mittelwert**5 - 0.0000001207398667538030*mittelwert**4 + 0.00006831355425155590*mittelwert**3 - 0.0215224999386154000*mittelwert**2 + 3.6907819029228100*mittelwert - 228.8396867960290);
        hrd = hrd.toFixed(1);           
        document.getElementById("hrd").innerHTML = (hrd);
    }
    else{
        document.getElementById("hrd").innerHTML = ('ungültig');
    }

    if (mittelwert>=228 && mittelwert<=618){
        let hr15n = (-0.00000000000004013908262085790*mittelwert**6 + 0.00000000010569748633693700*mittelwert**5 - 0.0000001139702503711870*mittelwert**4 + 0.00006445680237702360*mittelwert**3 - 0.0202704024679990*mittelwert**2 + 3.440711921923990*mittelwert - 176.7012918773490);
        hr15n = hr15n.toFixed(1);        
        document.getElementById("hr15n").innerHTML = (hr15n);
    }
    else{
        document.getElementById("hr15n").innerHTML = ('ungültig');
    }

    if (mittelwert>=228 && mittelwert<=618){
        let hr30n = (-0.000000000000053241343622322200*mittelwert**6 + 0.0000000001415692228750420*mittelwert**5 - 0.000000154085423845213000*mittelwert**4 + 0.00008790615721105020*mittelwert**3 - 0.027867989773465100000000000000*mittelwert**2 + 4.783518574815020000000000000000*mittelwert - 305.577906922050);
        hr30n = hr30n.toFixed(1);       
        document.getElementById("hr30n").innerHTML = (hr30n);
        }
        else{
        document.getElementById("hr30n").innerHTML = ('ungültig');
        }  

    if (mittelwert>=228 && mittelwert<=618){
        let hr45n = (-0.000000000000075105396879473900*mittelwert**6 + 0.00000000019884630492573100*mittelwert**5 - 0.00000021565111789656900*mittelwert**4 + 0.0001226376433926880*mittelwert**3 - 0.03874418201464310*mittelwert**2 + 6.613664896652660*mittelwert - 456.7154427258190);
        hr45n = hr45n.toFixed(1);
        document.getElementById("hr45n").innerHTML = (hr45n);
    }
    else{
        document.getElementById("hr45n").innerHTML = ('ungültig');
    }  

}

      //Zugvestigkeit

 if(verfahren==1){
 
 
    if (mittelwert>=255 && mittelwert<=2180){
        document.getElementById("zug").innerHTML= Math.round(mittelwert);
    }
    else{
        document.getElementById("zug").innerHTML = ('ungültig');
    }

    if (mittelwert>=255 && mittelwert<=2180){
        let HB = Math.round(0.00000000000000000017818161865685500*mittelwert**6 + 0.00000000000000983916799621997000000*mittelwert**5 - 0.00000000005925148798145150*mittelwert**4 + 0.0000001157213206566270*mittelwert**3 - 0.0000977591929463020*mittelwert**2 + 0.331248792857050*mittelwert - 3.870894913761230);    
        document.getElementById("brinell").innerHTML = (HB);
    }
    else{
        document.getElementById("brinell").innerHTML = ('ungültig');
    }

    if (mittelwert>=255 && mittelwert<=2180){
        let hv = Math.round(0.0000000000000000013334510635530500*mittelwert**6 + 0.0000000000000016960199594158100000*mittelwert**5 - 0.00000000003704490082476830*mittelwert**4 + 0.00000008587971231846330*mittelwert**3 - 0.00007743713397164270*mittelwert**2 + 0.3401382733583750*mittelwert - 3.0590975566261600  );       
        document.getElementById("vickers").innerHTML = (hv);
    }
    else{
        document.getElementById("vickers").innerHTML = ('ungültig');
    }

    if (mittelwert>=270 && mittelwert<=930){
        let hrb = (-0.000000000000010130831737181500*mittelwert**6 + 0.000000000038429332306144800000*mittelwert**5 - 0.000000059445004570997700000000*mittelwert**4 + 0.000048093597858391100000000000*mittelwert**3 - 0.021627896785724200000000000000*mittelwert**2 + 5.268944260893220*mittelwert - 486.0576185484590);                    
        hrb = hrb.toFixed(1);
        document.getElementById("hrb").innerHTML = (hrb);
        }
    else{
        document.getElementById("hrb").innerHTML = ('ungültig');
    }

    if (mittelwert>=285 && mittelwert<=800){
        let hrf =(-0.000000000000007033132956586500*mittelwert**6 + 0.000000000023881880759343300000*mittelwert**5 - 0.000000033086721818106400000000*mittelwert**4 + 0.000023989080034141600000000000*mittelwert**3 - 0.009720081664110000000000000000*mittelwert**2 + 2.1942546893361100*mittelwert - 131.485230465994000000000000000000);                   
        hrf = hrf.toFixed(1);
        document.getElementById("hrf").innerHTML = (hrf);
    }
    else{
        document.getElementById("hrf").innerHTML = ('ungültig');
    }

    if (mittelwert>=770 && mittelwert<=2180){
        let hrc = (-0.00000000000000003504956042705190*mittelwert**6 + 0.00000000000031981348552555800000*mittelwert**5 - 0.000000001191057515592280*mittelwert**4 + 0.000002318834160341830*mittelwert**3 - 0.00250438846738950*mittelwert**2 + 1.4652445265212300*mittelwert - 342.23512737504400000000000000000000);                    
        hrc = hrc.toFixed(1);
        document.getElementById("hrc").innerHTML = (hrc);
    }
    else{
        document.getElementById("hrc").innerHTML = ('ungültig');
        }

    if (mittelwert>=770 && mittelwert<=2180){
        let hra =(-0.000000000000000011107878824194*mittelwert**6 + 0.000000000000100866508060033000*mittelwert**5 - 0.0000000003729895680335340*mittelwert**4 + 0.0000007193504441000920*mittelwert**3 - 0.0007701526142219690*mittelwert**2 + 0.4556099508108520*mittelwert - 55.7181221369558000);                     
        hra = hra.toFixed(1);
        document.getElementById("hra").innerHTML = (hra);
    }
    else{
        document.getElementById("hra").innerHTML = ('ungültig');
    }

  if (mittelwert>=770 && mittelwert<=2180){
        let hrd  =(-0.000000000000000023680374589808500*mittelwert**6 + 0.0000000000002137591432454420*mittelwert**5 - 0.0000000007877561277826060*mittelwert**4 + 0.000001518939475199690*mittelwert**3 - 0.001628998372720740*mittelwert**2 + 0.9546952294638570*mittelwert - 198.40120632091100);               
        hrd = hrd.toFixed(1); 
        document.getElementById("hrd").innerHTML = (hrd);
    }
    else{
        document.getElementById("hrd").innerHTML = ('ungültig');
    }

  if (mittelwert>=770 && mittelwert<=2180){
        let hr15n =(-0.000000000000000021737066924124800*mittelwert**6 + 0.000000000000196729369749238000000*mittelwert**5 - 0.000000000727087059462238000000000*mittelwert**4 + 0.000001406237180681080000000000000*mittelwert**3 - 0.001511177334033670000000000000000*mittelwert**2 + 0.8794073912112360*mittelwert - 146.72012191372700);
        hr15n = hr15n.toFixed(1);
        document.getElementById("hr15n").innerHTML = (hr15n);
    }
    else{
        document.getElementById("hr15n").innerHTML = ('ungültig');
    }

  if (mittelwert>=770 && mittelwert<=2180){
        let hr30n = (-0.000000000000000031331567248111800*mittelwert**6 + 0.0000000000002849653084456420*mittelwert**5 - 0.000000001057671766625920*mittelwert**4 + 0.000002052087150817990*mittelwert**3 - 0.0022093807661825400*mittelwert**2 + 1.290389962328070*mittelwert - 277.5947028335090);
        hr30n = hr30n.toFixed(1);    
        document.getElementById("hr30n").innerHTML = (hr30n);
    }
    else{
    document.getElementById("hr30n").innerHTML = ('ungültig');
    }  

    if (mittelwert>=770 && mittelwert<=2180){
        let hr45n = (-0.000000000000000041896919380635200*mittelwert**6 + 0.0000000000003806380033953660*mittelwert**5 - 0.000000001412000906503770*mittelwert**4 + 0.000002738917971777630*mittelwert**3 - 0.002947758388833720*mittelwert**2 + 1.71919094593410*mittelwert - 404.4032465323060);
        hr45n = hr45n.toFixed(1);         
        document.getElementById("hr45n").innerHTML = (hr45n);
    }
    else{
        document.getElementById("hr45n").innerHTML = ('ungültig');
    }  


            }

 // hrb   
 

if(verfahren===4){
    
    
    

    document.getElementById("hrb").innerHTML = Math.round(mittelwert);

    if (mittelwert>=41 && mittelwert<=105){
        let Rm = Math.round(-0.00000009924051938559*mittelwert**6 + 0.00004272606266891850*mittelwert**5 - 0.00747745037818112000*mittelwert**4 + 0.68166940068703300000*mittelwert**3 - 34.06125331396050000000*mittelwert**2 + 886.17981961053400000000*mittelwert - 9137.47351380143000000000);
        document.getElementById("zug").innerHTML = (Rm);
    }

    else{
        document.getElementById("zug").innerHTML = ('ungültig');
    }

    if (mittelwert>=41 && mittelwert<=105){
        let HV = Math.round(-0.000000034764855520383300*mittelwert**6 + 0.000015047694975029600000*mittelwert**5 - 0.002649540221023510000000*mittelwert**4 + 0.243114600104053000000000*mittelwert**3 - 12.233034533255500000000000*mittelwert**2 + 320.496778773760000000000000*mittelwert - 3338.748023587100000000000000);        
        document.getElementById("vickers").innerHTML = (HV);
    }
    else{
        document.getElementById("vickers").innerHTML = ('vickers');
    }

    if (mittelwert>=41 && mittelwert<=105){
        let HB = Math.round(-0.0000000329192592733729000*mittelwert**6 + 0.0000142362908679486000000*mittelwert**5 - 0.0025039012263717200000000*mittelwert**4 + 0.2294495353747510000000000*mittelwert**3 - 11.5281292033732000000000000*mittelwert**2 + 301.5429697626570000000000000*mittelwert - 3135.3611630513700000000000000);
        document.getElementById("brinell").innerHTML = (HB);
    }
    else{
        document.getElementById("brinell").innerHTML = ('brinell');
    }

    if (mittelwert>=48 && mittelwert<=99.5){ 
        let hrf = (-0.0000000091876641433730200*mittelwert**6 + 0.0000040966273431308800000*mittelwert**5 - 0.0007524539344565540000000*mittelwert**4 + 0.0727774222841617000000000*mittelwert**3 - 3.9025901693085000000000000*mittelwert**2 + 110.4240984803470000000000000*mittelwert - 1211.8657626930900000000000000);
        hrf = hrf.toFixed(1);
        document.getElementById("hrf").innerHTML = (hrf);
    }
    else{
        document.getElementById("hrf").innerHTML = ('ungültig');
    }

    if (mittelwert>=89.1 && mittelwert<=105){
        let hrc = (-0.00075012016816344800*mittelwert**6 + 0.46256780744058700000*mittelwert**5 - 118.81638669851600000000*mittelwert**4 + 16272.15926637340000000000*mittelwert**3 - 1253162.152601680000*mittelwert**2 + 51456506.93411000000*mittelwert - 880107647.53229300);
        hrc = hrc.toFixed(1);
        document.getElementById("hrc").innerHTML = (hrc);
    }
    else{
        document.getElementById("hrc").innerHTML = ('ungültig');
    }

    if (mittelwert>=89.1 && mittelwert<=105){
        let hra = (-0.00031730139176033800*mittelwert**6 + 0.19586675761715900000*mittelwert**5 - 50.36177824802780000000*mittelwert**4 + 6904.06369382052000000000*mittelwert**3 - 532227.79792692600000000000*mittelwert**2 + 21875466.99249400000000000000*mittelwert - 374520711.61945700000000000000);
        hra = hra.toFixed(1);
        document.getElementById("hra").innerHTML = (hra);
        }
    else{
        document.getElementById("hra").innerHTML = ('ungültig');
    }

    if (mittelwert>=89.1 && mittelwert<=105){
        let hrd  = (-0.00161701566287320000*mittelwert**6 + 0.99104204742041000000*mittelwert**5 - 253.03711295854900000000*mittelwert**4 + 34450.90660601150000000000*mittelwert**3 - 2637941.82975970000000000000*mittelwert**2 + 107709536.58636200000000000000*mittelwert - 1832135440.62031000000000000000);                   
        hrd = hrd.toFixed(1);            
        document.getElementById("hrd").innerHTML = (hrd);
    }
    else{
        document.getElementById("hrd").innerHTML = ('ungültig');
    }

    if (mittelwert>=89.1 && mittelwert<=105){
        let hr15n = (-0.00052091113957430900*mittelwert**6 + 0.32075202531359500000*mittelwert**5 - 82.27066878432220000000*mittelwert**4 + 11251.26853963900000000000*mittelwert**3 - 865293.80579458900000000000*mittelwert**2 + 35482036.53656550000000000000*mittelwert - 606076299.65920500000000000000);
        hr15n = hr15n.toFixed(1);
        document.getElementById("hr15n").innerHTML = (hr15n);
    }
    else{
    document.getElementById("hr15n").innerHTML = ('ungültig');
    }

    if (mittelwert>=89.1 && mittelwert<=105){
        let hr30n = (-0.00003720752454228200*mittelwert**6 + 0.02695864001727840000*mittelwert**5 - 7.92721060011229000000*mittelwert**4 + 1219.17225354922000000000*mittelwert**3 - 103894.00715385400000000000*mittelwert**2 + 4665608.81305836000000000000*mittelwert - 86450835.13955310000000000000 );                  
        hr30n = hr30n.toFixed(1);   
        document.getElementById("hr30n").innerHTML = (hr30n);
    }
    else{
        document.getElementById("hr30n").innerHTML = ('ungültig');
    }

    if (mittelwert>=89.1 && mittelwert<=105){           
        let hr45n = (-0.00085015746185490600*mittelwert**6 + 0.52476181092774800000*mittelwert**5 - 134.91867028525500000000*mittelwert**4 + 18494.42120590080000000000*mittelwert**3 - 1425587.76850123000000000000*mittelwert**2 + 58588142.36017110000000000000*mittelwert - 1002951353.13085000000000000000 );
        hr45n = hr45n.toFixed(1);    
        document.getElementById("hr45n").innerHTML = (hr45n);
    }
    else{
        document.getElementById("hr45n").innerHTML = ('ungültig');
    }  
}
   

//hrf


if(verfahren===5){
  
    
    

    document.getElementById("hrf").innerHTML = Math.round(mittelwert);

    if (mittelwert>=82.6 && mittelwert<=115.1){
        let Rm = Math.round(-0.0000011778638204784600000*mittelwert**6 + 0.0007062331271058930000000*mittelwert**5 - 0.1754198577252370000000000*mittelwert**4 + 23.1162666603234000000000000*mittelwert**3 - 1705.0000726512000000000000000*mittelwert**2 + 66759.9115144510*mittelwert - 1084277.3638577200000000000000000
            );
        document.getElementById("zug").innerHTML = (Rm);
    }

    else{
        document.getElementById("zug").innerHTML = ('ungültig');
    }

    if (mittelwert>=82.6 && mittelwert<=115.1){
        let HB = Math.round(-0.0000000928570514924232000*mittelwert**6 + 0.0000578916615159297000000*mittelwert**5 - 0.0147733970483465000000000*mittelwert**4 + 1.9812405502709800000000000*mittelwert**3 - 147.5268876434160000000000000*mittelwert**2 + 5791.4713362631200000000000000*mittelwert - 93694.5121010391000000000000000
            );        
        document.getElementById("vickers").innerHTML = (HB);
    }
    else{
        document.getElementById("vickers").innerHTML = ('ungültig');
    }

    if (mittelwert>=82.6 && mittelwert<=115.1){
        let hrb = (-0.0000000023892089417998400*mittelwert**6 + 0.0000041431810604120000000*mittelwert**5 - 0.0015070574309620700000000*mittelwert**4 + 0.2399552582042150000000000*mittelwert**3 - 19.3405229447526000000000000*mittelwert**2 + 773.3520536907980000000000000*mittelwert - 12085.0964561572000000000000000
            );
        hrb = hrb.toFixed(1); 
        document.getElementById("brinell").innerHTML = (hrb);
    }
    else{
        document.getElementById("brinell").innerHTML = ('ungültig');
    }

    if (mittelwert>=82.6 && mittelwert<=115.1){   
        let hrf = (0.0000002087684745077920000*mittelwert**6 - 0.0001238137336599720000000*mittelwert**5 + 0.0305119692866040000000000*mittelwert**4 - 3.9987601694039500000000000*mittelwert**3 + 293.8989675314120000000000000*mittelwert**2 - 11482.6139337854000000000000000*mittelwert + 186280.2840884630000000000000000);
        hrf = hrf.toFixed(1);
        document.getElementById("hrb").innerHTML = (hrf);
    }
    else{
        document.getElementById("hrb").innerHTML = ('ungültig');
    }

    if (mittelwert>=114.3 && mittelwert<=115.1){
        let hrc = (-0.31250000000022700000*mittelwert**2 + 74.06250000005220000000*mittelwert - 4362.39062500300000000000
            );
        hrc = hrc.toFixed(1);
        document.getElementById("hrc").innerHTML = (hrc);
    }
    else{
        document.getElementById("hrc").innerHTML = ('ungültig');
    }

    if (mittelwert>=114.3 && mittelwert<=115.1){
        let hra = (-0.31250000000045500000*mittelwert**2 + 72.81250000010490000000*mittelwert - 4179.11562500604000000000
            );
        hra = hra.toFixed(1);
        document.getElementById("hra").innerHTML = (hra);
        }
    else{
        document.getElementById("hra").innerHTML = ('ungültig');
    }

    if (mittelwert>=114.3 && mittelwert<=115.1){
        let hrd  = (-0.62500000000022700000*mittelwert**2 + 145.12500000005200000000*mittelwert - 8382.18125000302000000000
            );                   
        hrd = hrd.toFixed(1);            
        document.getElementById("hrd").innerHTML = (hrd);
    }
    else{
        document.getElementById("hrd").innerHTML = ('ungültig');
    }

    if (mittelwert>=114.3 && mittelwert<=115.1){
        let hr15n = (-0.00000000000045474735*mittelwert**2 + 1.25000000010441000000*mittelwert - 73.27500000599300000000
            );
        hr15n = hr15n.toFixed(1);
        document.getElementById("hr15n").innerHTML = (hr15n);
    }
    else{
    document.getElementById("hr15n").innerHTML = ('ungültig');
    }

    if (mittelwert>=114.3 && mittelwert<=115.1){
        let hr30n = (0.31250000000000000000*mittelwert**2 - 69.56249999999980000000*mittelwert + 3910.04062499997000000000
            );                  
        hr30n = hr30n.toFixed(1);   
        document.getElementById("hr30n").innerHTML = (hr30n);
    }
    else{
        document.getElementById("hr30n").innerHTML = ('ungültig');
    }

    if (mittelwert>=114.3 && mittelwert<=115.1){             
        let hr45n = (-0.31250000000000000000*mittelwert**2 + 74.56250000000010000000*mittelwert - 4419.94062500001000000000
            );
        hr45n = hr45n.toFixed(1);    
        document.getElementById("hr45n").innerHTML = (hr45n);
    }
    else{
        document.getElementById("hr45n").innerHTML = ('ungültig');
    }  
}


/*
//hrc
if(verfahren===6){
  
    
    

    document.getElementById("vickers").innerHTML = Math.round(mittelwert);

    if (mittelwert>=76 && mittelwert<=618){
        let Rm = Math.round(-0.000000000000033051023081579100*mittelwert**6 + 0.000000000055199584611145400000*mittelwert**5 - 0.000000031702112824172500000000*mittelwert**4 + 0.000007881369833892620000000000*mittelwert**3 - 0.000808699350075553000000000000*mittelwert**2 + 3.239441381257880000000000000000*mittelwert - 1.901332866049050000000000000000);
        document.getElementById("zug").innerHTML = (Rm);
    }

    else{
        document.getElementById("zug").innerHTML = ('ungültig');
    }

    if (mittelwert>=76 && mittelwert<=618){
        let HB = Math.round(-0.000000000000001761444212250190*mittelwert**6 + 0.000000000004036184839453120000*mittelwert**5 - 0.000000003594298337857430000000*mittelwert**4 + 0.000001563601496185270000000000*mittelwert**3 - 0.000342989401280058000000000000*mittelwert**2 + 0.985827873333358000000000000000*mittelwert - 1.346145272750010000000000000000);        
        document.getElementById("brinell").innerHTML = (HB);
    }
    else{
        document.getElementById("brinell").innerHTML = ('ungültig');
    }

    if (mittelwert>=76 && mittelwert<=618){
        let hrb = (-0.000000000012588708734624700000*mittelwert**6 + 0.000000014941375262332800000000*mittelwert**5 - 0.000007230799434550590000000000*mittelwert**4 + 0.001828932137286380000000000000*mittelwert**3 - 0.256613558225974000000000000000*mittelwert**2 + 19.392304645642100000000000000000*mittelwert - 559.899363867060000000000000000000);
        hrb = hrb.toFixed(1); 
        document.getElementById("hrb").innerHTML = (hrb);
    }
    else{
        document.getElementById("hrb").innerHTML = ('ungültig');
    }

    if (mittelwert>=76 && mittelwert<=618){    
        let hrf = (-0.000000000011164848993244800000*mittelwert**6 + 0.000000011874739250933300000000*mittelwert**5 - 0.000005161613629735620000000000*mittelwert**4 + 0.001174665228559580000000000000*mittelwert**3 - 0.148757713166904000000000000000*mittelwert**2 + 10.277913513324900000000000000000*mittelwert - 219.276950499477000000000000000000);
        hrf = hrf.toFixed(1);
        document.getElementById("hrf").innerHTML = (hrf);
    }
    else{
        document.getElementById("hrf").innerHTML = ('ungültig');
    }

    if (mittelwert>=76 && mittelwert<=618){
        let hrc = (-0.000000000000001310317964033520*mittelwert**6 + 0.000000000004795781031590630000*mittelwert**5 - 0.000000007219355283232990000000*mittelwert**4 + 0.000005801106395051900000000000*mittelwert**3 - 0.002734227623276840000000000000*mittelwert**2 + 0.811591942224873000000000000000*mittelwert - 76,533188311938000000000000000000);
        hrc = hrc.toFixed(1);
        document.getElementById("hrc").innerHTML = (hrc);
    }
    else{
        document.getElementById("hrc").innerHTML = ('ungültig');
    }

    if (mittelwert>=76 && mittelwert<=618){
        let hra = (-0.000000000000000244904996709707*mittelwert**6 + 0.000000000000879133796817072000*mittelwert**5 - 0.000000001303940482682380000000*mittelwert**4 + 0.000001060308201033440000000000*mittelwert**3 - 0.000553634821561067000000000000*mittelwert**2 + 0.220213370893433000000000000000*mittelwert + 28.874922725158600000000000000000);
        hra = hra.toFixed(1);
        document.getElementById("hra").innerHTML = (hra);
        }
    else{
        document.getElementById("hra").innerHTML = ('ungültig');
    }

    if (mittelwert>=76 && mittelwert<=618){
        let hrd  = (-0.000000000000000840225344904784*mittelwert**6 + 0.000000000003084662750907860000*mittelwert**5 - 0.000000004673717131439220000000*mittelwert**4 + 0.000003803571519740030000000000*mittelwert**3 - 0.001836676657090500000000000000*mittelwert**2 + 0.569225667049665000000000000000*mittelwert - 29.740289367700700000000000000000);                   
        hrd = hrd.toFixed(1);            
        document.getElementById("hrd").innerHTML = (hrd);
    }
    else{
        document.getElementById("hrd").innerHTML = ('ungültig');
    }

    if (mittelwert>=76 && mittelwert<=618){
        let hr15n = (-0.000000000000000546499869785729*mittelwert**6 + 0.000000000002122985512717510000*mittelwert**5 - 0.000000003411469317539140000000*mittelwert**4 + 0.000002938147732083380000000000*mittelwert**3 - 0.001485645095386760000000000000*mittelwert**2 + 0.462237183577348000000000000000*mittelwert + 13.440222247291900000000000000000);
        hr15n = hr15n.toFixed(1);
        document.getElementById("hr15n").innerHTML = (hr15n);
    }
    else{
    document.getElementById("hr15n").innerHTML = ('ungültig');
    }

    if (mittelwert>=76 && mittelwert<=618){
        let hr30n = (-0.000000000000001042082098574570*mittelwert**6 + 0.000000000003804472741526960000*mittelwert**5 - 0.000000005740850134215050000000*mittelwert**4 + 0.000004654170435654270000000000*mittelwert**3 - 0.002235236498448350000000000000*mittelwert**2 + 0.685850157105378000000000000000*mittelwert - 42.074932287753700000000000000000);                  
        hr30n = hr30n.toFixed(1);   
        document.getElementById("hr30n").innerHTML = (hr30n);
    }
    else{
        document.getElementById("hr30n").innerHTML = ('ungültig');
    }

    if (mittelwert>=76 && mittelwert<=618){               
        let hr45n = (-0.000000000000001635883204360230*mittelwert**6 + 0.000000000006044938375694170000*mittelwert**5 - 0.000000009129329550657920000000*mittelwert**4 + 0.000007298981901001080000000000*mittelwert**3 - 0.003393344924137850000000000000*mittelwert**2 + 0.986411643233487000000000000000*mittelwert - 96.154936260970500000000000000000);
        hr45n = hr45n.toFixed(1);    
        document.getElementById("hr45n").innerHTML = (hr45n);
    }
    else{
        document.getElementById("hr45n").innerHTML = ('ungültig');
    }  
}

//hra
if(verfahren===7){
  
    
    

    document.getElementById("vickers").innerHTML = Math.round(mittelwert);

    if (mittelwert>=76 && mittelwert<=618){
        let Rm = Math.round(-0.000000000000033051023081579100*mittelwert**6 + 0.000000000055199584611145400000*mittelwert**5 - 0.000000031702112824172500000000*mittelwert**4 + 0.000007881369833892620000000000*mittelwert**3 - 0.000808699350075553000000000000*mittelwert**2 + 3.239441381257880000000000000000*mittelwert - 1.901332866049050000000000000000);
        document.getElementById("zug").innerHTML = (Rm);
    }

    else{
        document.getElementById("zug").innerHTML = ('ungültig');
    }

    if (mittelwert>=76 && mittelwert<=618){
        let HB = Math.round(-0.000000000000001761444212250190*mittelwert**6 + 0.000000000004036184839453120000*mittelwert**5 - 0.000000003594298337857430000000*mittelwert**4 + 0.000001563601496185270000000000*mittelwert**3 - 0.000342989401280058000000000000*mittelwert**2 + 0.985827873333358000000000000000*mittelwert - 1.346145272750010000000000000000);        
        document.getElementById("brinell").innerHTML = (HB);
    }
    else{
        document.getElementById("brinell").innerHTML = ('ungültig');
    }

    if (mittelwert>=76 && mittelwert<=618){
        let hrb = (-0.000000000012588708734624700000*mittelwert**6 + 0.000000014941375262332800000000*mittelwert**5 - 0.000007230799434550590000000000*mittelwert**4 + 0.001828932137286380000000000000*mittelwert**3 - 0.256613558225974000000000000000*mittelwert**2 + 19.392304645642100000000000000000*mittelwert - 559.899363867060000000000000000000);
        hrb = hrb.toFixed(1); 
        document.getElementById("hrb").innerHTML = (hrb);
    }
    else{
        document.getElementById("hrb").innerHTML = ('ungültig');
    }

    if (mittelwert>=76 && mittelwert<=618){    
        let hrf = (-0.000000000011164848993244800000*mittelwert**6 + 0.000000011874739250933300000000*mittelwert**5 - 0.000005161613629735620000000000*mittelwert**4 + 0.001174665228559580000000000000*mittelwert**3 - 0.148757713166904000000000000000*mittelwert**2 + 10.277913513324900000000000000000*mittelwert - 219.276950499477000000000000000000);
        hrf = hrf.toFixed(1);
        document.getElementById("hrf").innerHTML = (hrf);
    }
    else{
        document.getElementById("hrf").innerHTML = ('ungültig');
    }

    if (mittelwert>=76 && mittelwert<=618){
        let hrc = (-0.000000000000001310317964033520*mittelwert**6 + 0.000000000004795781031590630000*mittelwert**5 - 0.000000007219355283232990000000*mittelwert**4 + 0.000005801106395051900000000000*mittelwert**3 - 0.002734227623276840000000000000*mittelwert**2 + 0.811591942224873000000000000000*mittelwert - 76,533188311938000000000000000000);
        hrc = hrc.toFixed(1);
        document.getElementById("hrc").innerHTML = (hrc);
    }
    else{
        document.getElementById("hrc").innerHTML = ('ungültig');
    }

    if (mittelwert>=76 && mittelwert<=618){
        let hra = (-0.000000000000000244904996709707*mittelwert**6 + 0.000000000000879133796817072000*mittelwert**5 - 0.000000001303940482682380000000*mittelwert**4 + 0.000001060308201033440000000000*mittelwert**3 - 0.000553634821561067000000000000*mittelwert**2 + 0.220213370893433000000000000000*mittelwert + 28.874922725158600000000000000000);
        hra = hra.toFixed(1);
        document.getElementById("hra").innerHTML = (hra);
        }
    else{
        document.getElementById("hra").innerHTML = ('ungültig');
    }

    if (mittelwert>=76 && mittelwert<=618){
        let hrd  = (-0.000000000000000840225344904784*mittelwert**6 + 0.000000000003084662750907860000*mittelwert**5 - 0.000000004673717131439220000000*mittelwert**4 + 0.000003803571519740030000000000*mittelwert**3 - 0.001836676657090500000000000000*mittelwert**2 + 0.569225667049665000000000000000*mittelwert - 29.740289367700700000000000000000);                   
        hrd = hrd.toFixed(1);            
        document.getElementById("hrd").innerHTML = (hrd);
    }
    else{
        document.getElementById("hrd").innerHTML = ('ungültig');
    }

    if (mittelwert>=76 && mittelwert<=618){
        let hr15n = (-0.000000000000000546499869785729*mittelwert**6 + 0.000000000002122985512717510000*mittelwert**5 - 0.000000003411469317539140000000*mittelwert**4 + 0.000002938147732083380000000000*mittelwert**3 - 0.001485645095386760000000000000*mittelwert**2 + 0.462237183577348000000000000000*mittelwert + 13.440222247291900000000000000000);
        hr15n = hr15n.toFixed(1);
        document.getElementById("hr15n").innerHTML = (hr15n);
    }
    else{
    document.getElementById("hr15n").innerHTML = ('ungültig');
    }

    if (mittelwert>=76 && mittelwert<=618){
        let hr30n = (-0.000000000000001042082098574570*mittelwert**6 + 0.000000000003804472741526960000*mittelwert**5 - 0.000000005740850134215050000000*mittelwert**4 + 0.000004654170435654270000000000*mittelwert**3 - 0.002235236498448350000000000000*mittelwert**2 + 0.685850157105378000000000000000*mittelwert - 42.074932287753700000000000000000);                  
        hr30n = hr30n.toFixed(1);   
        document.getElementById("hr30n").innerHTML = (hr30n);
    }
    else{
        document.getElementById("hr30n").innerHTML = ('ungültig');
    }

    if (mittelwert>=76 && mittelwert<=618){               
        let hr45n = (-0.000000000000001635883204360230*mittelwert**6 + 0.000000000006044938375694170000*mittelwert**5 - 0.000000009129329550657920000000*mittelwert**4 + 0.000007298981901001080000000000*mittelwert**3 - 0.003393344924137850000000000000*mittelwert**2 + 0.986411643233487000000000000000*mittelwert - 96.154936260970500000000000000000);
        hr45n = hr45n.toFixed(1);    
        document.getElementById("hr45n").innerHTML = (hr45n);
    }
    else{
        document.getElementById("hr45n").innerHTML = ('ungültig');
    }  
}

//hrd
if(verfahren===8){
  
    
    

    document.getElementById("vickers").innerHTML = Math.round(mittelwert);

    if (mittelwert>=76 && mittelwert<=618){
        let Rm = Math.round(-0.000000000000033051023081579100*mittelwert**6 + 0.000000000055199584611145400000*mittelwert**5 - 0.000000031702112824172500000000*mittelwert**4 + 0.000007881369833892620000000000*mittelwert**3 - 0.000808699350075553000000000000*mittelwert**2 + 3.239441381257880000000000000000*mittelwert - 1.901332866049050000000000000000);
        document.getElementById("zug").innerHTML = (Rm);
    }

    else{
        document.getElementById("zug").innerHTML = ('ungültig');
    }

    if (mittelwert>=76 && mittelwert<=618){
        let HB = Math.round(-0.000000000000001761444212250190*mittelwert**6 + 0.000000000004036184839453120000*mittelwert**5 - 0.000000003594298337857430000000*mittelwert**4 + 0.000001563601496185270000000000*mittelwert**3 - 0.000342989401280058000000000000*mittelwert**2 + 0.985827873333358000000000000000*mittelwert - 1.346145272750010000000000000000);        
        document.getElementById("brinell").innerHTML = (HB);
    }
    else{
        document.getElementById("brinell").innerHTML = ('ungültig');
    }

    if (mittelwert>=76 && mittelwert<=618){
        let hrb = (-0.000000000012588708734624700000*mittelwert**6 + 0.000000014941375262332800000000*mittelwert**5 - 0.000007230799434550590000000000*mittelwert**4 + 0.001828932137286380000000000000*mittelwert**3 - 0.256613558225974000000000000000*mittelwert**2 + 19.392304645642100000000000000000*mittelwert - 559.899363867060000000000000000000);
        hrb = hrb.toFixed(1); 
        document.getElementById("hrb").innerHTML = (hrb);
    }
    else{
        document.getElementById("hrb").innerHTML = ('ungültig');
    }

    if (mittelwert>=76 && mittelwert<=618){    
        let hrf = (-0.000000000011164848993244800000*mittelwert**6 + 0.000000011874739250933300000000*mittelwert**5 - 0.000005161613629735620000000000*mittelwert**4 + 0.001174665228559580000000000000*mittelwert**3 - 0.148757713166904000000000000000*mittelwert**2 + 10.277913513324900000000000000000*mittelwert - 219.276950499477000000000000000000);
        hrf = hrf.toFixed(1);
        document.getElementById("hrf").innerHTML = (hrf);
    }
    else{
        document.getElementById("hrf").innerHTML = ('ungültig');
    }

    if (mittelwert>=76 && mittelwert<=618){
        let hrc = (-0.000000000000001310317964033520*mittelwert**6 + 0.000000000004795781031590630000*mittelwert**5 - 0.000000007219355283232990000000*mittelwert**4 + 0.000005801106395051900000000000*mittelwert**3 - 0.002734227623276840000000000000*mittelwert**2 + 0.811591942224873000000000000000*mittelwert - 76,533188311938000000000000000000);
        hrc = hrc.toFixed(1);
        document.getElementById("hrc").innerHTML = (hrc);
    }
    else{
        document.getElementById("hrc").innerHTML = ('ungültig');
    }

    if (mittelwert>=76 && mittelwert<=618){
        let hra = (-0.000000000000000244904996709707*mittelwert**6 + 0.000000000000879133796817072000*mittelwert**5 - 0.000000001303940482682380000000*mittelwert**4 + 0.000001060308201033440000000000*mittelwert**3 - 0.000553634821561067000000000000*mittelwert**2 + 0.220213370893433000000000000000*mittelwert + 28.874922725158600000000000000000);
        hra = hra.toFixed(1);
        document.getElementById("hra").innerHTML = (hra);
        }
    else{
        document.getElementById("hra").innerHTML = ('ungültig');
    }

    if (mittelwert>=76 && mittelwert<=618){
        let hrd  = (-0.000000000000000840225344904784*mittelwert**6 + 0.000000000003084662750907860000*mittelwert**5 - 0.000000004673717131439220000000*mittelwert**4 + 0.000003803571519740030000000000*mittelwert**3 - 0.001836676657090500000000000000*mittelwert**2 + 0.569225667049665000000000000000*mittelwert - 29.740289367700700000000000000000);                   
        hrd = hrd.toFixed(1);            
        document.getElementById("hrd").innerHTML = (hrd);
    }
    else{
        document.getElementById("hrd").innerHTML = ('ungültig');
    }

    if (mittelwert>=76 && mittelwert<=618){
        let hr15n = (-0.000000000000000546499869785729*mittelwert**6 + 0.000000000002122985512717510000*mittelwert**5 - 0.000000003411469317539140000000*mittelwert**4 + 0.000002938147732083380000000000*mittelwert**3 - 0.001485645095386760000000000000*mittelwert**2 + 0.462237183577348000000000000000*mittelwert + 13.440222247291900000000000000000);
        hr15n = hr15n.toFixed(1);
        document.getElementById("hr15n").innerHTML = (hr15n);
    }
    else{
    document.getElementById("hr15n").innerHTML = ('ungültig');
    }

    if (mittelwert>=76 && mittelwert<=618){
        let hr30n = (-0.000000000000001042082098574570*mittelwert**6 + 0.000000000003804472741526960000*mittelwert**5 - 0.000000005740850134215050000000*mittelwert**4 + 0.000004654170435654270000000000*mittelwert**3 - 0.002235236498448350000000000000*mittelwert**2 + 0.685850157105378000000000000000*mittelwert - 42.074932287753700000000000000000);                  
        hr30n = hr30n.toFixed(1);   
        document.getElementById("hr30n").innerHTML = (hr30n);
    }
    else{
        document.getElementById("hr30n").innerHTML = ('ungültig');
    }

    if (mittelwert>=76 && mittelwert<=618){               
        let hr45n = (-0.000000000000001635883204360230*mittelwert**6 + 0.000000000006044938375694170000*mittelwert**5 - 0.000000009129329550657920000000*mittelwert**4 + 0.000007298981901001080000000000*mittelwert**3 - 0.003393344924137850000000000000*mittelwert**2 + 0.986411643233487000000000000000*mittelwert - 96.154936260970500000000000000000);
        hr45n = hr45n.toFixed(1);    
        document.getElementById("hr45n").innerHTML = (hr45n);
    }
    else{
        document.getElementById("hr45n").innerHTML = ('ungültig');
    }  
}

//hr15
if(verfahren===9){
  
    
    

    document.getElementById("vickers").innerHTML = Math.round(mittelwert);

    if (mittelwert>=76 && mittelwert<=618){
        let Rm = Math.round(-0.000000000000033051023081579100*mittelwert**6 + 0.000000000055199584611145400000*mittelwert**5 - 0.000000031702112824172500000000*mittelwert**4 + 0.000007881369833892620000000000*mittelwert**3 - 0.000808699350075553000000000000*mittelwert**2 + 3.239441381257880000000000000000*mittelwert - 1.901332866049050000000000000000);
        document.getElementById("zug").innerHTML = (Rm);
    }

    else{
        document.getElementById("zug").innerHTML = ('ungültig');
    }

    if (mittelwert>=76 && mittelwert<=618){
        let HB = Math.round(-0.000000000000001761444212250190*mittelwert**6 + 0.000000000004036184839453120000*mittelwert**5 - 0.000000003594298337857430000000*mittelwert**4 + 0.000001563601496185270000000000*mittelwert**3 - 0.000342989401280058000000000000*mittelwert**2 + 0.985827873333358000000000000000*mittelwert - 1.346145272750010000000000000000);        
        document.getElementById("brinell").innerHTML = (HB);
    }
    else{
        document.getElementById("brinell").innerHTML = ('ungültig');
    }

    if (mittelwert>=76 && mittelwert<=618){
        let hrb = (-0.000000000012588708734624700000*mittelwert**6 + 0.000000014941375262332800000000*mittelwert**5 - 0.000007230799434550590000000000*mittelwert**4 + 0.001828932137286380000000000000*mittelwert**3 - 0.256613558225974000000000000000*mittelwert**2 + 19.392304645642100000000000000000*mittelwert - 559.899363867060000000000000000000);
        hrb = hrb.toFixed(1); 
        document.getElementById("hrb").innerHTML = (hrb);
    }
    else{
        document.getElementById("hrb").innerHTML = ('ungültig');
    }

    if (mittelwert>=76 && mittelwert<=618){    
        let hrf = (-0.000000000011164848993244800000*mittelwert**6 + 0.000000011874739250933300000000*mittelwert**5 - 0.000005161613629735620000000000*mittelwert**4 + 0.001174665228559580000000000000*mittelwert**3 - 0.148757713166904000000000000000*mittelwert**2 + 10.277913513324900000000000000000*mittelwert - 219.276950499477000000000000000000);
        hrf = hrf.toFixed(1);
        document.getElementById("hrf").innerHTML = (hrf);
    }
    else{
        document.getElementById("hrf").innerHTML = ('ungültig');
    }

    if (mittelwert>=76 && mittelwert<=618){
        let hrc = (-0.000000000000001310317964033520*mittelwert**6 + 0.000000000004795781031590630000*mittelwert**5 - 0.000000007219355283232990000000*mittelwert**4 + 0.000005801106395051900000000000*mittelwert**3 - 0.002734227623276840000000000000*mittelwert**2 + 0.811591942224873000000000000000*mittelwert - 76,533188311938000000000000000000);
        hrc = hrc.toFixed(1);
        document.getElementById("hrc").innerHTML = (hrc);
    }
    else{
        document.getElementById("hrc").innerHTML = ('ungültig');
    }

    if (mittelwert>=76 && mittelwert<=618){
        let hra = (-0.000000000000000244904996709707*mittelwert**6 + 0.000000000000879133796817072000*mittelwert**5 - 0.000000001303940482682380000000*mittelwert**4 + 0.000001060308201033440000000000*mittelwert**3 - 0.000553634821561067000000000000*mittelwert**2 + 0.220213370893433000000000000000*mittelwert + 28.874922725158600000000000000000);
        hra = hra.toFixed(1);
        document.getElementById("hra").innerHTML = (hra);
        }
    else{
        document.getElementById("hra").innerHTML = ('ungültig');
    }

    if (mittelwert>=76 && mittelwert<=618){
        let hrd  = (-0.000000000000000840225344904784*mittelwert**6 + 0.000000000003084662750907860000*mittelwert**5 - 0.000000004673717131439220000000*mittelwert**4 + 0.000003803571519740030000000000*mittelwert**3 - 0.001836676657090500000000000000*mittelwert**2 + 0.569225667049665000000000000000*mittelwert - 29.740289367700700000000000000000);                   
        hrd = hrd.toFixed(1);            
        document.getElementById("hrd").innerHTML = (hrd);
    }
    else{
        document.getElementById("hrd").innerHTML = ('ungültig');
    }

    if (mittelwert>=76 && mittelwert<=618){
        let hr15n = (-0.000000000000000546499869785729*mittelwert**6 + 0.000000000002122985512717510000*mittelwert**5 - 0.000000003411469317539140000000*mittelwert**4 + 0.000002938147732083380000000000*mittelwert**3 - 0.001485645095386760000000000000*mittelwert**2 + 0.462237183577348000000000000000*mittelwert + 13.440222247291900000000000000000);
        hr15n = hr15n.toFixed(1);
        document.getElementById("hr15n").innerHTML = (hr15n);
    }
    else{
    document.getElementById("hr15n").innerHTML = ('ungültig');
    }

    if (mittelwert>=76 && mittelwert<=618){
        let hr30n = (-0.000000000000001042082098574570*mittelwert**6 + 0.000000000003804472741526960000*mittelwert**5 - 0.000000005740850134215050000000*mittelwert**4 + 0.000004654170435654270000000000*mittelwert**3 - 0.002235236498448350000000000000*mittelwert**2 + 0.685850157105378000000000000000*mittelwert - 42.074932287753700000000000000000);                  
        hr30n = hr30n.toFixed(1);   
        document.getElementById("hr30n").innerHTML = (hr30n);
    }
    else{
        document.getElementById("hr30n").innerHTML = ('ungültig');
    }

    if (mittelwert>=76 && mittelwert<=618){               
        let hr45n = (-0.000000000000001635883204360230*mittelwert**6 + 0.000000000006044938375694170000*mittelwert**5 - 0.000000009129329550657920000000*mittelwert**4 + 0.000007298981901001080000000000*mittelwert**3 - 0.003393344924137850000000000000*mittelwert**2 + 0.986411643233487000000000000000*mittelwert - 96.154936260970500000000000000000);
        hr45n = hr45n.toFixed(1);    
        document.getElementById("hr45n").innerHTML = (hr45n);
    }
    else{
        document.getElementById("hr45n").innerHTML = ('ungültig');
    }  
}

//hr30
if(verfahren===10){
  
    
    

    document.getElementById("vickers").innerHTML = Math.round(mittelwert);

    if (mittelwert>=76 && mittelwert<=618){
        let Rm = Math.round(-0.000000000000033051023081579100*mittelwert**6 + 0.000000000055199584611145400000*mittelwert**5 - 0.000000031702112824172500000000*mittelwert**4 + 0.000007881369833892620000000000*mittelwert**3 - 0.000808699350075553000000000000*mittelwert**2 + 3.239441381257880000000000000000*mittelwert - 1.901332866049050000000000000000);
        document.getElementById("zug").innerHTML = (Rm);
    }

    else{
        document.getElementById("zug").innerHTML = ('ungültig');
    }

    if (mittelwert>=76 && mittelwert<=618){
        let HB = Math.round(-0.000000000000001761444212250190*mittelwert**6 + 0.000000000004036184839453120000*mittelwert**5 - 0.000000003594298337857430000000*mittelwert**4 + 0.000001563601496185270000000000*mittelwert**3 - 0.000342989401280058000000000000*mittelwert**2 + 0.985827873333358000000000000000*mittelwert - 1.346145272750010000000000000000);        
        document.getElementById("brinell").innerHTML = (HB);
    }
    else{
        document.getElementById("brinell").innerHTML = ('ungültig');
    }

    if (mittelwert>=76 && mittelwert<=618){
        let hrb = (-0.000000000012588708734624700000*mittelwert**6 + 0.000000014941375262332800000000*mittelwert**5 - 0.000007230799434550590000000000*mittelwert**4 + 0.001828932137286380000000000000*mittelwert**3 - 0.256613558225974000000000000000*mittelwert**2 + 19.392304645642100000000000000000*mittelwert - 559.899363867060000000000000000000);
        hrb = hrb.toFixed(1); 
        document.getElementById("hrb").innerHTML = (hrb);
    }
    else{
        document.getElementById("hrb").innerHTML = ('ungültig');
    }

    if (mittelwert>=76 && mittelwert<=618){    
        let hrf = (-0.000000000011164848993244800000*mittelwert**6 + 0.000000011874739250933300000000*mittelwert**5 - 0.000005161613629735620000000000*mittelwert**4 + 0.001174665228559580000000000000*mittelwert**3 - 0.148757713166904000000000000000*mittelwert**2 + 10.277913513324900000000000000000*mittelwert - 219.276950499477000000000000000000);
        hrf = hrf.toFixed(1);
        document.getElementById("hrf").innerHTML = (hrf);
    }
    else{
        document.getElementById("hrf").innerHTML = ('ungültig');
    }

    if (mittelwert>=76 && mittelwert<=618){
        let hrc = (-0.000000000000001310317964033520*mittelwert**6 + 0.000000000004795781031590630000*mittelwert**5 - 0.000000007219355283232990000000*mittelwert**4 + 0.000005801106395051900000000000*mittelwert**3 - 0.002734227623276840000000000000*mittelwert**2 + 0.811591942224873000000000000000*mittelwert - 76,533188311938000000000000000000);
        hrc = hrc.toFixed(1);
        document.getElementById("hrc").innerHTML = (hrc);
    }
    else{
        document.getElementById("hrc").innerHTML = ('ungültig');
    }

    if (mittelwert>=76 && mittelwert<=618){
        let hra = (-0.000000000000000244904996709707*mittelwert**6 + 0.000000000000879133796817072000*mittelwert**5 - 0.000000001303940482682380000000*mittelwert**4 + 0.000001060308201033440000000000*mittelwert**3 - 0.000553634821561067000000000000*mittelwert**2 + 0.220213370893433000000000000000*mittelwert + 28.874922725158600000000000000000);
        hra = hra.toFixed(1);
        document.getElementById("hra").innerHTML = (hra);
        }
    else{
        document.getElementById("hra").innerHTML = ('ungültig');
    }

    if (mittelwert>=76 && mittelwert<=618){
        let hrd  = (-0.000000000000000840225344904784*mittelwert**6 + 0.000000000003084662750907860000*mittelwert**5 - 0.000000004673717131439220000000*mittelwert**4 + 0.000003803571519740030000000000*mittelwert**3 - 0.001836676657090500000000000000*mittelwert**2 + 0.569225667049665000000000000000*mittelwert - 29.740289367700700000000000000000);                   
        hrd = hrd.toFixed(1);            
        document.getElementById("hrd").innerHTML = (hrd);
    }
    else{
        document.getElementById("hrd").innerHTML = ('ungültig');
    }

    if (mittelwert>=76 && mittelwert<=618){
        let hr15n = (-0.000000000000000546499869785729*mittelwert**6 + 0.000000000002122985512717510000*mittelwert**5 - 0.000000003411469317539140000000*mittelwert**4 + 0.000002938147732083380000000000*mittelwert**3 - 0.001485645095386760000000000000*mittelwert**2 + 0.462237183577348000000000000000*mittelwert + 13.440222247291900000000000000000);
        hr15n = hr15n.toFixed(1);
        document.getElementById("hr15n").innerHTML = (hr15n);
    }
    else{
    document.getElementById("hr15n").innerHTML = ('ungültig');
    }

    if (mittelwert>=76 && mittelwert<=618){
        let hr30n = (-0.000000000000001042082098574570*mittelwert**6 + 0.000000000003804472741526960000*mittelwert**5 - 0.000000005740850134215050000000*mittelwert**4 + 0.000004654170435654270000000000*mittelwert**3 - 0.002235236498448350000000000000*mittelwert**2 + 0.685850157105378000000000000000*mittelwert - 42.074932287753700000000000000000);                  
        hr30n = hr30n.toFixed(1);   
        document.getElementById("hr30n").innerHTML = (hr30n);
    }
    else{
        document.getElementById("hr30n").innerHTML = ('ungültig');
    }

    if (mittelwert>=76 && mittelwert<=618){               
        let hr45n = (-0.000000000000001635883204360230*mittelwert**6 + 0.000000000006044938375694170000*mittelwert**5 - 0.000000009129329550657920000000*mittelwert**4 + 0.000007298981901001080000000000*mittelwert**3 - 0.003393344924137850000000000000*mittelwert**2 + 0.986411643233487000000000000000*mittelwert - 96.154936260970500000000000000000);
        hr45n = hr45n.toFixed(1);    
        document.getElementById("hr45n").innerHTML = (hr45n);
    }
    else{
        document.getElementById("hr45n").innerHTML = ('ungültig');
    }  
}

//hr45
if(verfahren===12){
  
    
    

    document.getElementById("vickers").innerHTML = Math.round(mittelwert);

    if (mittelwert>=76 && mittelwert<=618){
        let Rm = Math.round(-0.000000000000033051023081579100*mittelwert**6 + 0.000000000055199584611145400000*mittelwert**5 - 0.000000031702112824172500000000*mittelwert**4 + 0.000007881369833892620000000000*mittelwert**3 - 0.000808699350075553000000000000*mittelwert**2 + 3.239441381257880000000000000000*mittelwert - 1.901332866049050000000000000000);
        document.getElementById("zug").innerHTML = (Rm);
    }

    else{
        document.getElementById("zug").innerHTML = ('ungültig');
    }

    if (mittelwert>=76 && mittelwert<=618){
        let HB = Math.round(-0.000000000000001761444212250190*mittelwert**6 + 0.000000000004036184839453120000*mittelwert**5 - 0.000000003594298337857430000000*mittelwert**4 + 0.000001563601496185270000000000*mittelwert**3 - 0.000342989401280058000000000000*mittelwert**2 + 0.985827873333358000000000000000*mittelwert - 1.346145272750010000000000000000);        
        document.getElementById("brinell").innerHTML = (HB);
    }
    else{
        document.getElementById("brinell").innerHTML = ('ungültig');
    }

    if (mittelwert>=76 && mittelwert<=618){
        let hrb = (-0.000000000012588708734624700000*mittelwert**6 + 0.000000014941375262332800000000*mittelwert**5 - 0.000007230799434550590000000000*mittelwert**4 + 0.001828932137286380000000000000*mittelwert**3 - 0.256613558225974000000000000000*mittelwert**2 + 19.392304645642100000000000000000*mittelwert - 559.899363867060000000000000000000);
        hrb = hrb.toFixed(1); 
        document.getElementById("hrb").innerHTML = (hrb);
    }
    else{
        document.getElementById("hrb").innerHTML = ('ungültig');
    }

    if (mittelwert>=76 && mittelwert<=618){    
        let hrf = (-0.000000000011164848993244800000*mittelwert**6 + 0.000000011874739250933300000000*mittelwert**5 - 0.000005161613629735620000000000*mittelwert**4 + 0.001174665228559580000000000000*mittelwert**3 - 0.148757713166904000000000000000*mittelwert**2 + 10.277913513324900000000000000000*mittelwert - 219.276950499477000000000000000000);
        hrf = hrf.toFixed(1);
        document.getElementById("hrf").innerHTML = (hrf);
    }
    else{
        document.getElementById("hrf").innerHTML = ('ungültig');
    }

    if (mittelwert>=76 && mittelwert<=618){
        let hrc = (-0.000000000000001310317964033520*mittelwert**6 + 0.000000000004795781031590630000*mittelwert**5 - 0.000000007219355283232990000000*mittelwert**4 + 0.000005801106395051900000000000*mittelwert**3 - 0.002734227623276840000000000000*mittelwert**2 + 0.811591942224873000000000000000*mittelwert - 76,533188311938000000000000000000);
        hrc = hrc.toFixed(1);
        document.getElementById("hrc").innerHTML = (hrc);
    }
    else{
        document.getElementById("hrc").innerHTML = ('ungültig');
    }

    if (mittelwert>=76 && mittelwert<=618){
        let hra = (-0.000000000000000244904996709707*mittelwert**6 + 0.000000000000879133796817072000*mittelwert**5 - 0.000000001303940482682380000000*mittelwert**4 + 0.000001060308201033440000000000*mittelwert**3 - 0.000553634821561067000000000000*mittelwert**2 + 0.220213370893433000000000000000*mittelwert + 28.874922725158600000000000000000);
        hra = hra.toFixed(1);
        document.getElementById("hra").innerHTML = (hra);
        }
    else{
        document.getElementById("hra").innerHTML = ('ungültig');
    }

    if (mittelwert>=76 && mittelwert<=618){
        let hrd  = (-0.000000000000000840225344904784*mittelwert**6 + 0.000000000003084662750907860000*mittelwert**5 - 0.000000004673717131439220000000*mittelwert**4 + 0.000003803571519740030000000000*mittelwert**3 - 0.001836676657090500000000000000*mittelwert**2 + 0.569225667049665000000000000000*mittelwert - 29.740289367700700000000000000000);                   
        hrd = hrd.toFixed(1);            
        document.getElementById("hrd").innerHTML = (hrd);
    }
    else{
        document.getElementById("hrd").innerHTML = ('ungültig');
    }

    if (mittelwert>=76 && mittelwert<=618){
        let hr15n = (-0.000000000000000546499869785729*mittelwert**6 + 0.000000000002122985512717510000*mittelwert**5 - 0.000000003411469317539140000000*mittelwert**4 + 0.000002938147732083380000000000*mittelwert**3 - 0.001485645095386760000000000000*mittelwert**2 + 0.462237183577348000000000000000*mittelwert + 13.440222247291900000000000000000);
        hr15n = hr15n.toFixed(1);
        document.getElementById("hr15n").innerHTML = (hr15n);
    }
    else{
    document.getElementById("hr15n").innerHTML = ('ungültig');
    }

    if (mittelwert>=76 && mittelwert<=618){
        let hr30n = (-0.000000000000001042082098574570*mittelwert**6 + 0.000000000003804472741526960000*mittelwert**5 - 0.000000005740850134215050000000*mittelwert**4 + 0.000004654170435654270000000000*mittelwert**3 - 0.002235236498448350000000000000*mittelwert**2 + 0.685850157105378000000000000000*mittelwert - 42.074932287753700000000000000000);                  
        hr30n = hr30n.toFixed(1);   
        document.getElementById("hr30n").innerHTML = (hr30n);
    }
    else{
        document.getElementById("hr30n").innerHTML = ('ungültig');
    }

    if (mittelwert>=76 && mittelwert<=618){               
        let hr45n = (-0.000000000000001635883204360230*mittelwert**6 + 0.000000000006044938375694170000*mittelwert**5 - 0.000000009129329550657920000000*mittelwert**4 + 0.000007298981901001080000000000*mittelwert**3 - 0.003393344924137850000000000000*mittelwert**2 + 0.986411643233487000000000000000*mittelwert - 96.154936260970500000000000000000);
        hr45n = hr45n.toFixed(1);    
        document.getElementById("hr45n").innerHTML = (hr45n);
    }
    else{
        document.getElementById("hr45n").innerHTML = ('ungültig');
    }  
}
*/
}
