

let verfahren= 0;
let anzahl = 1 ;

$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
    if (!$(this).next().hasClass('show')) {
        $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass('show');
    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
        $('.dropdown-submenu .show').removeClass("show");
    });
    return false;
});
   
window.addEventListener("load", function() {


    if (document.getElementById("auswahlHV10")) {
        document.getElementById("auswahlHV10").addEventListener("click", vickers10);
       };
    if (document.getElementById("auswahlHV1")) {
        document.getElementById("auswahlHV1").addEventListener("click", vickers1);
       };
    if (document.getElementById("auswahlHV0,1")) {
       document.getElementById("auswahlHV0,1").addEventListener("click", vickers01);
       };  
    if (document.getElementById("auswahlHV30")) {
        document.getElementById("auswahlHV30").addEventListener("click", vickers30);
       };
       if (document.getElementById("auswahlHV3")) {
        document.getElementById("auswahlHV3").addEventListener("click", vickers3);
       };
       if (document.getElementById("auswahlHV0,3")) {
        document.getElementById("auswahlHV0,3").addEventListener("click", vickers03);
       };
       if (document.getElementById("auswahlHV5")) {
        document.getElementById("auswahlHV5").addEventListener("click", vickers5);
       };
       if (document.getElementById("auswahlHV0,5")) {
        document.getElementById("auswahlHV0,5").addEventListener("click", vickers05);
       };
       if (document.getElementById("auswahlHV0,015")) {
        document.getElementById("auswahlHV0,015").addEventListener("click", vickers0015);
       };
       if (document.getElementById("auswahlHBW1/1")) {
        document.getElementById("auswahlHBW1/1").addEventListener("click", brinell11);
       };
      
       if (document.getElementById("auswahlHBW1/2,5")) {
        document.getElementById("auswahlHBW1/2,5").addEventListener("click", brinell125);
       };

       if (document.getElementById("auswahlHBW1/5")) {
        document.getElementById("auswahlHBW1/5").addEventListener("click", brinell15);
       };

       if (document.getElementById("auswahlHBW1/10")) {
        document.getElementById("auswahlHBW1/10").addEventListener("click", brinell110);
       };

       if (document.getElementById("auswahlHBW1/30")) {
        document.getElementById("auswahlHBW1/30").addEventListener("click", brinell130);
       };

       if (document.getElementById("auswahlHBW2,5/1")) {
        document.getElementById("auswahlHBW2,5/1").addEventListener("click", brinell251);
       };
       if (document.getElementById("auswahlHBW2,5/2,5")) {
        document.getElementById("auswahlHBW2,5/2,5").addEventListener("click", brinell2525);
       };
       if (document.getElementById("auswahlHBW2,5/5")) {
        document.getElementById("auswahlHBW2,5/5").addEventListener("click", brinell255);
       };
       if (document.getElementById("auswahlHBW2,5/10")) {
        document.getElementById("auswahlHBW2,5/10").addEventListener("click", brinell2510);
       };
       if (document.getElementById("auswahlHBW2,5/30")) {
        document.getElementById("auswahlHBW2,5/30").addEventListener("click", brinell2530);
       };
       if (document.getElementById("auswahlHBW5/1")) {
        document.getElementById("auswahlHBW5/1").addEventListener("click", brinell51);
       };
       if (document.getElementById("auswahlHBW5/2,5")) {
        document.getElementById("auswahlHBW5/2,5").addEventListener("click", brinell525);
       };
       if (document.getElementById("auswahlHBW5/5")) {
        document.getElementById("auswahlHBW5/5").addEventListener("click", brinell55);
       };
       if (document.getElementById("auswahlHBW5/10")) {
        document.getElementById("auswahlHBW5/10").addEventListener("click", brinell510);
       };
       if (document.getElementById("auswahlHBW5/30")) {
        document.getElementById("auswahlHBW5/30").addEventListener("click", brinell530);
       };
       if (document.getElementById("auswahlHBW10/1")) {
        document.getElementById("auswahlHBW10/1").addEventListener("click", brinell101);
       };
       if (document.getElementById("auswahlHBW10/2,5")) {
        document.getElementById("auswahlHBW10/2,5").addEventListener("click", brinell1025);
       };
       if (document.getElementById("auswahlHBW10/5")) {
        document.getElementById("auswahlHBW10/5").addEventListener("click", brinell105);
       };
       if (document.getElementById("auswahlHBW10/10")) {
        document.getElementById("auswahlHBW10/10").addEventListener("click", brinell1010);
       };
       if (document.getElementById("auswahlHBW10/30")) {
        document.getElementById("auswahlHBW10/30").addEventListener("click", brinell1030);
       };
       if (document.getElementById("auswahlHRA")) {
        document.getElementById("auswahlHRA").addEventListener("click", rockwella);
       };
       if (document.getElementById("auswahlHRC")) {
        document.getElementById("auswahlHRC").addEventListener("click", rockwellc);
       };
       if (document.getElementById("auswahlHRD")) {
        document.getElementById("auswahlHRD").addEventListener("click", rockwelld);
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
    verfahren = 1;
    document.getElementById("aktuellesVerfahren").innerHTML = (' HV10');
    document.getElementById("abstand5").innerHTML=('Eindruckdiagonale');
}

function vickers1() {
    verfahren = 2;
    document.getElementById("aktuellesVerfahren").innerHTML = (' HV1');
    document.getElementById("abstand5").innerHTML=('Eindruckdiagonale');
}
  
function vickers01() {
    verfahren = 3;
    document.getElementById("aktuellesVerfahren").innerHTML = (' HV0,1');
    document.getElementById("abstand5").innerHTML=('Eindruckdiagonale');
}
function vickers30() {
    verfahren = 4;
    document.getElementById("aktuellesVerfahren").innerHTML = (' HV30');
    document.getElementById("abstand5").innerHTML=('Eindruckdiagonale');
}
function vickers3() {
    verfahren = 5;
    document.getElementById("aktuellesVerfahren").innerHTML = (' HV3');
    document.getElementById("abstand5").innerHTML=('Eindruckdiagonale');
}
function vickers03() {
    verfahren = 6;
    document.getElementById("aktuellesVerfahren").innerHTML = (' HV0,3');
    document.getElementById("abstand5").innerHTML=('Eindruckdiagonale');
}
function vickers5() {
    verfahren = 7;
    document.getElementById("aktuellesVerfahren").innerHTML = (' HV5');
    document.getElementById("abstand5").innerHTML=('Eindruckdiagonale');
}
function vickers05() {
    verfahren = 8;
    document.getElementById("aktuellesVerfahren").innerHTML = (' HV0,5');
    document.getElementById("abstand5").innerHTML=('Eindruckdiagonale');
}
function vickers0015() {
    verfahren = 9;
    document.getElementById("aktuellesVerfahren").innerHTML = (' HV0,015');
    document.getElementById("abstand5").innerHTML=('Eindruckdiagonale');
}
function brinell11() {
    
    verfahren = 10;
    document.getElementById("aktuellesVerfahren").innerHTML = (' HBW 1/1');
    document.getElementById("abstand5").innerHTML=('Eindruckdurchmesser');
}
function brinell125() {
    verfahren = 11;
    document.getElementById("aktuellesVerfahren").innerHTML = (' HBW 1/2,5');
    document.getElementById("abstand5").innerHTML=('Eindruckdurchmesser');
}
function brinell15() {
    verfahren = 12;
    document.getElementById("abstand5").innerHTML=(Eindruckdurchmesser);
    document.getElementById("aktuellesVerfahren").innerHTML = (' HBW 1/5');
    document.getElementById("abstand5").innerHTML=('Eindruckdurchmesser');
}
function brinell110() {
    verfahren = 13;
    document.getElementById("aktuellesVerfahren").innerHTML = ('HBW 1/10');
    document.getElementById("abstand5").innerHTML=('Eindruckdurchmesser');
}
function brinell130() {
    verfahren = 14;
    document.getElementById("aktuellesVerfahren").innerHTML = ('HBW 1/30');
    document.getElementById("abstand5").innerHTML=('Eindruckdurchmesser');
}

function brinell251() {
    verfahren = 15;
    document.getElementById("aktuellesVerfahren").innerHTML = ('HBW 2,5/1');
    document.getElementById("abstand5").innerHTML=('Eindruckdurchmesser');
}

function brinell2525() {
    verfahren = 16;
    document.getElementById("aktuellesVerfahren").innerHTML = ('HBW 2,5/2,5');
    document.getElementById("abstand5").innerHTML=('Eindruckdurchmesser');
}

function brinell255() {
    verfahren = 17;
    document.getElementById("aktuellesVerfahren").innerHTML = ('HBW 2,5/5');
    document.getElementById("abstand5").innerHTML=('Eindruckdurchmesser');
}

function brinell2510() {
    verfahren = 18;
    document.getElementById("aktuellesVerfahren").innerHTML = ('HBW 2,5/10');
    document.getElementById("abstand5").innerHTML=('Eindruckdurchmesser');
}

function brinell2530() {
    verfahren = 19;
    document.getElementById("aktuellesVerfahren").innerHTML = ('HBW 2,5/30');
    document.getElementById("abstand5").innerHTML=('Eindruckdurchmesser');
}
function brinell51() {
    verfahren = 20;
    document.getElementById("aktuellesVerfahren").innerHTML = ('HBW 5/1');
    document.getElementById("abstand5").innerHTML=('Eindruckdurchmesser');
}
function brinell525() {
    verfahren = 21;
    document.getElementById("aktuellesVerfahren").innerHTML = ('HBW 5/2,5');
    document.getElementById("abstand5").innerHTML=('Eindruckdurchmesser');
}
function brinell55() {
    verfahren = 22;
    document.getElementById("aktuellesVerfahren").innerHTML = ('HBW 5/5');
    document.getElementById("abstand5").innerHTML=('Eindruckdurchmesser');
}
function brinell510() {
    verfahren = 23;
    document.getElementById("aktuellesVerfahren").innerHTML = ('HBW 5/10');
    document.getElementById("abstand5").innerHTML=('Eindruckdurchmesser');
}
function brinell530() {
    verfahren = 24;
    document.getElementById("aktuellesVerfahren").innerHTML = ('HBW 5/30');
    document.getElementById("abstand5").innerHTML=('Eindruckdurchmesser');
}
function brinell101() {
    verfahren = 25;
    document.getElementById("aktuellesVerfahren").innerHTML = ('HBW 10/1');
    document.getElementById("abstand5").innerHTML=('Eindruckdurchmesser');
}
function brinell1025() {
    verfahren = 26;
    document.getElementById("aktuellesVerfahren").innerHTML = ('HBW 10/2,5');
    document.getElementById("abstand5").innerHTML=('Eindruckdurchmesser');
}
function brinell105() {
    verfahren = 27;
    document.getElementById("aktuellesVerfahren").innerHTML = ('HBW 10/5');
    document.getElementById("abstand5").innerHTML=('Eindruckdurchmesser');
}
function brinell1010() {
    verfahren = 28;
    document.getElementById("aktuellesVerfahren").innerHTML = ('HBW 10/10');
    document.getElementById("abstand5").innerHTML=('Eindruckdurchmesser');
}
function brinell1030() {
    verfahren = 29;
    document.getElementById("aktuellesVerfahren").innerHTML = ('HBW 10/30');
    document.getElementById("abstand5").innerHTML=('Eindruckdurchmesser');
}

function rockwella() {
    verfahren = 30;
    document.getElementById("aktuellesVerfahren").innerHTML = ('HRA');
    document.getElementById("abstand5").innerHTML=('Eindruckdurchmesser');
}
function rockwellc() {
    verfahren = 31;
    document.getElementById("aktuellesVerfahren").innerHTML = ('HRC');
    document.getElementById("abstand5").innerHTML=('Eindruckdurchmesser');
}
function rockwelld() {
    verfahren = 32;
    document.getElementById("aktuellesVerfahren").innerHTML = ('HRD');
    document.getElementById("abstand5").innerHTML=('Eindruckdurchmesser');
}

function ho(c){
    dm=Math.sqrt(c/mittelwert);
    vickersTiefe= 0.1428*dm;
    dMin=dm*1.5;
    absRS =2.5*dm;
    absES = 3*dm;
    absRNE =3*dm;
    absENE = 6*dm;  
    if (document.getElementById('verschwinde3')) {
    document.getElementById("verschwinde3").style.display = 'none';
    }
}


function ha(y){
    dMin= 8*vickersTiefe;
    absRS =2.5*dm;
    absES = 3*dm;
    absRNE =3*dm;
    absENE = 6*dm;
    if(dm<0.24*y){alert('Eindruckdurchmesser zu klein! Nutzen sie einen höheren Beanspruchungsgrad oder einen größeren Kugeldurchmesser ' );
    document.getElementById("warnung").innerHTML=('<img src="Kugelkleiner.jpg" id="verschwinde3">');
    
};


if(dm>0.6*y){alert('Eindruckdurchmesser zu groß! Nutzen sie einen kleineren Beanspruchungsgrad oder einen kleineren Kugeldurchmesser');};

if(dm<=0.6*y&&dm>=0.24*y){
    if (document.getElementById('verschwinde3')) {
    document.getElementById("verschwinde3").style.display = 'none';
    }
};
}

function fehler1(){
    alert('Nicht im Messbereich')
}

function hi(s,k){
    vickersTiefe=(k-mittelwert)*s;
    dm=(vickersTiefe*0.5)*2;
    dMin=10*vickersTiefe;
    absRS=2.5*dm;
    absES=3*dm;
    if (document.getElementById('verschwinde3')) {
    document.getElementById("verschwinde3").style.display = 'none';
}
}

   function test() {
x =Math.PI;
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
   
    document.getElementById("härtemittel").innerHTML = (mittelwert); 
}
    }

    if(verfahren>=10){
        document.getElementById("verschwinde1").style.display = 'none';
            document.getElementById("verschwinde2").style.display = 'none';
        }
    if(verfahren<10){
            document.getElementById("verschwinde1").style.display = 'block';
                document.getElementById("verschwinde2").style.display = 'block';
            }
  // Vikers

if(verfahren===1){
  ho(18.54949981);
    
    
}
if(verfahren===2){
    ho(1.854949981);
}
if(verfahren===3){
    ho(0.1854949981);
}
if(verfahren===4){
    ho(55.64849942);
}
if(verfahren===5){
    h(5.564849942);
}
if(verfahren===6){
    ho(0.5564849942);
}
if(verfahren===7){
   ho(9.274749903);
}
if(verfahren===8){
    ho(0.9274749903);
}
if(verfahren===9){
    ho(0.027824249);
}
if(verfahren===10){

    
    ha(1,9.807);
    
    
  
}

if(verfahren===11){
   dm=Math.sqrt((1**2)-(1-(2*24.52*0.102)/(1*x*mittelwert))**2)
    vickersTiefe=0.5*(1-Math.sqrt(((1**2)-(dm**2))))
    ha(1)
}

if(verfahren===12){ 
  dm=Math.sqrt((1**2)-(1-(2*49.03*0.102)/(1*x*mittelwert))**2)
vickersTiefe=0.5*(1-Math.sqrt(((1**2)-(dm**2))))
ha(1)
}
if(verfahren===13){
  dm=Math.sqrt((1**2)-(1-(2*98.07*0.102)/(1*x*mittelwert))**2)
    vickersTiefe=0.5*(1-Math.sqrt(((1**2)-(dm**2))))
    ha(1)
}
if(verfahren===14){
  dm=Math.sqrt((1**2)-(1-(2*294.2*0.102)/(1*x*mittelwert))**2)
    vickersTiefe=0.5*(1-Math.sqrt(((1**2)-(dm**2))))
    ha(1)
}
//2,5
if(verfahren===15){
    dm=Math.sqrt((2.5**2)-(2.5-(2*61.29*0.102)/(2.5*x*mittelwert))**2)
    vickersTiefe=0.5*(2.5-Math.sqrt(((2.5**2)-(dm**2))))
    ha(2.5)
}
if(verfahren===16){
  dm=Math.sqrt((2.5**2)-(2.5-(2*153.2*0.102)/(2.5*x*mittelwert))**2)
    vickersTiefe=0.5*(2.5-Math.sqrt(((2.5**2)-(dm**2))))
    ha(2.5)
}

if(verfahren===17){
    dm=Math.sqrt((2.5**2)-(2.5-(2*306.5*0.102)/(2.5*x*mittelwert))**2)
    vickersTiefe=0.5*(2.5-Math.sqrt(((2.5**2)-(dm**2))))
    ha(2.5)
}

if(verfahren===18){
    dm=Math.sqrt((2.5**2)-(2.5-(2*612.9*0.102)/(2.5*x*mittelwert))**2)
vickersTiefe=0.5*(2.5-Math.sqrt(((2.5**2)-(dm**2))))
ha(2.5);
}
if(verfahren===19){

  let dm=Math.sqrt((2.5**2)-(2.5-(2*1839*0.102)/(2.5*x*mittelwert))**2);
  let h=0.5*(2.5-Math.sqrt(((2.5**2)-(dm**2))));
  ha(2.5);
}

//5
if(verfahren===20){
  dm=Math.sqrt((5**2)-(5-(2*245.2*0.102)/(5*x*mittelwert))**2)
vickersTiefe=0.5*(5-Math.sqrt(((5**2)-(dm**2))))
ha(5);
}
if(verfahren===21){
dm=Math.sqrt((5**2)-(5-(2* 612.9*0.102)/(5*x*mittelwert))**2)
vickersTiefe=0.5*(5-Math.sqrt(((5**2)-(dm**2))))
ha(5);
}
if(verfahren===22){
  dm=Math.sqrt((5**2)-(5-(2*1226*0.102)/(5*x*mittelwert))**2)
vickersTiefe=0.5*(5-Math.sqrt(((5**2)-(dm**2))))
ha(5);
}
if(verfahren===23){
   dm=Math.sqrt((5**2)-(5-(2*2452*0.102)/(5*x*mittelwert))**2)
    vickersTiefe=0.5*(5-Math.sqrt(((5**2)-(dm**2))))
    ha(5);
}
if(verfahren===24){
  dm=Math.sqrt((5**2)-(5-(2*7355*0.102)/(5*x*mittelwert))**2)
vickersTiefe=0.5*(5-Math.sqrt(((5**2)-(dm**2))))
  ha(5);
}

//10
if(verfahren===25){
dm=Math.sqrt((10**2)-(10-(2*980.7*0.102)/(10*x*mittelwert))**2)
vickersTiefe=0.5*(10-Math.sqrt(((10**2)-(dm**2))))
ha(10);
}
if(verfahren===26){
 dm=Math.sqrt((10**2)-(10-(2*2452*0.102)/(10*x*mittelwert))**2)
vickersTiefe=0.5*(10-Math.sqrt(((10**2)-(dm**2))))
ha(10);
}
if(verfahren===27){
   dm=Math.sqrt((10**2)-(10-(2*4903*0.102)/(10*x*mittelwert))**2)
vickersTiefe=0.5*(10-Math.sqrt(((10**2)-(dm**2))))
ha(10);
}
if(verfahren===28){
    dm=Math.sqrt((10**2)-(10-(2*9807*0.102)/(10*x*mittelwert))**2)
vickersTiefe=0.5*(10-Math.sqrt(((10**2)-(dm**2))))
ha(10);
}
if(verfahren===29){
dm=Math.sqrt((10**2)-(10-(2*29420*0.102)/(10*x*mittelwert))**2)
vickersTiefe=0.5*(10-Math.sqrt(((10**2)-(dm**2))))
ha(10);
}

if (verfahren===30){
    if(mittelwert>=20&&mittelwert<=95)
    hi(0.002,100);
else{
    fehler1()
}
}
if (verfahren===31){
    hi(0.002,100);
}
if (verfahren===32){
    hi(0.002,100);
}










if(dMin>0.01){
    dMin=dMin.toFixed(3);
    document.getElementById("mindestdicke").innerHTML=(dMin + 'mm');
    }
if(dMin<=0.01){
    dMin=dMin*1000
    dMin=dMin.toFixed(3);
    document.getElementById("mindestdicke").innerHTML=(dMin + 'µm'); 
}
if(vickersTiefe>0.01){
    vickersTiefe = vickersTiefe.toFixed(3)
document.getElementById("eindrucktiefe").innerHTML=(vickersTiefe + 'mm');
    }
if(vickersTiefe<=0.01){
    vickersTiefe=vickersTiefe*1000
    vickersTiefe = vickersTiefe.toFixed(3)
    document.getElementById("eindrucktiefe").innerHTML=(vickersTiefe + 'µm'); 
}
if(absRS>0.01){
    absRS=absRS.toFixed(3);
    document.getElementById("abstand1").innerHTML=(absRS + 'mm');
    }
if(absRS<=0.01){
    absRS=absRS*1000
    absES=absES.toFixed(3);
    document.getElementById("abstand1").innerHTML=(absRS + 'µm'); 
}
if(absES>0.01){
    absES=absES.toFixed(3);
    document.getElementById("abstand2").innerHTML=(absES + 'mm');
    }
if(absES<=0.01){
    absES=absES*1000
    absES=absES.toFixed(3);
    document.getElementById("abstand2").innerHTML=(absES + 'µm'); 
}

if(dm>0.01){
        dm=dm.toFixed(3);
        document.getElementById("eindruckdiagonale").innerHTML=(dm + 'mm');
        }
    if(dm<=0.01){
        dm=dm*1000
        dm=dm.toFixed(3);
        document.getElementById("eindruckdiagonale").innerHTML=(dm + 'µm'); 
    }
    if(absRNE>0.01){
        absRNE=absRNE.toFixed(3);
        document.getElementById("abstand3").innerHTML=(absRNE + 'mm');
        }
    if(absRNE<=0.01){
        absRNE=absRNE*1000
        absRNE=absRNE.toFixed(3);
        document.getElementById("abstand3").innerHTML=(absRNE + 'µm'); 
    }
    if(absENE>0.01){
        absENE=absENE.toFixed(3);
        document.getElementById("abstand4").innerHTML=(absENE + 'mm');
        }
    if(absENE<=0.01){
        absENE=absENE*1000
        absENE=absENE.toFixed(3);
        document.getElementById("abstand4").innerHTML=(absENE + 'µm'); 
    }
}
   