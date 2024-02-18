

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

$(document).ready(function(){
    $("#auswahlHV10").click(function(){
        verfahren = 1;
       $("#aktuellesVerfahren").html(" HV10");
        $("#abstand5").html("Diagonale");
    });
    $("#auswahlHV1").click(function(){
        verfahren = 2;
       $("#aktuellesVerfahren").html(" HV1");
        $("#abstand5").html("Diagonale");
    });
    $("#auswahlHV01").click(function(){
        verfahren = 3;
       $("#aktuellesVerfahren").html(" HV0,1");
        $("#abstand5").html("Diagonale");
    });
    $("#auswahlHV30").click(function(){
        verfahren = 4;
       $("#aktuellesVerfahren").html(" HV30");
        $("#abstand5").html("Diagonale");
    });
    $("#auswahlHV3").click(function(){
        verfahren = 5;
       $("#aktuellesVerfahren").html(" HV3");
        $("#abstand5").html("Diagonale");
    });
    $("#auswahlHV03").click(function(){
        verfahren = 6;
       $("#aktuellesVerfahren").html(" HV0,3");
        $("#abstand5").html("Diagonale");
    });
    $("#auswahlHV5").click(function(){
        verfahren = 7;
       $("#aktuellesVerfahren").html(" HV5");
        $("#abstand5").html("Diagonale");
    });
    $("#auswahlHV05").click(function(){
        verfahren = 8;
       $("#aktuellesVerfahren").html(" HV5");
        $("#abstand5").html("Diagonale");
    });
    $("#auswahlHV0015").click(function(){
        verfahren = 9;
       $("#aktuellesVerfahren").html(" HV0,015");
        $("#abstand5").html("Diagonale");
    });
    $("#auswahlHBW11").click(function(){
        verfahren = 10;
       $("#aktuellesVerfahren").html(" HBW 1/1");
        $("#abstand5").html("Diagonale");
    });
    $("#auswahlHBW125").click(function(){
        verfahren = 11;
       $("#aktuellesVerfahren").html(" HBW 1/2,5");
        $("#abstand5").html("Diagonale");
    });
    $("#auswahlHBW15").click(function(){
        verfahren = 12;
       $("#aktuellesVerfahren").html(" HBW 1/5");
        $("#abstand5").html("Diagonale");
    });
    $("#auswahlHBW110").click(function(){
        verfahren = 13;
       $("#aktuellesVerfahren").html(" HBW 1/10");
        $("#abstand5").html("Diagonale");
    });
    $("#auswahlHBW130").click(function(){
        verfahren = 14;
       $("#aktuellesVerfahren").html(" HBW1/30");
        $("#abstand5").html("Diagonale");
    });   
     $("#auswahlHBW251").click(function(){
        verfahren = 15;
       $("#aktuellesVerfahren").html(" HBW2,5/1");
        $("#abstand5").html("Diagonale");
    });
    $("#auswahlHBW2525").click(function(){
        verfahren = 16;
       $("#aktuellesVerfahren").html(" HBW2,5/2,5");
        $("#abstand5").html("Diagonale");
    });
    $("#auswahlHBW255").click(function(){
        verfahren = 17;
       $("#aktuellesVerfahren").html(" HBW2,5/5");
        $("#abstand5").html("Diagonale");
    });
    $("#auswahlHBW2510").click(function(){
        verfahren = 18;
       $("#aktuellesVerfahren").html(" HBW2,5/10");
        $("#abstand5").html("Diagonale");
    });
    $("#auswahlHBW2530").click(function(){
        verfahren = 19;
       $("#aktuellesVerfahren").html(" HBW2,5/30");
        $("#abstand5").html("Diagonale");
    });
    $("#auswahlHBW51").click(function(){
        verfahren = 20;
       $("#aktuellesVerfahren").html(" HBW5/1");
        $("#abstand5").html("Diagonale");
    });
    $("#auswahlHBW525").click(function(){
        verfahren = 21;
       $("#aktuellesVerfahren").html(" HBW5/2,5");
        $("#abstand5").html("Diagonale");
    });
    $("#auswahlHBW55").click(function(){
        verfahren = 22;
       $("#aktuellesVerfahren").html(" HBW5/5");
        $("#abstand5").html("Diagonale");
    });
    $("#auswahlHBW510").click(function(){
        verfahren = 23;
       $("#aktuellesVerfahren").html(" HBW5/10");
        $("#abstand5").html("Diagonale");
    });
    $("#auswahlHBW530").click(function(){
        verfahren = 24;
       $("#aktuellesVerfahren").html(" HBW5/30");
        $("#abstand5").html("Diagonale");
    });
    $("#auswahlHBW101").click(function(){
        verfahren = 25;
       $("#aktuellesVerfahren").html(" HBW10/1");
        $("#abstand5").html("Diagonale");
    });
    $("#auswahlHBW1025").click(function(){
        verfahren = 26;
       $("#aktuellesVerfahren").html(" HBW10/2,5");
        $("#abstand5").html("Diagonale");
    });
    $("#auswahlHBW105").click(function(){
        verfahren = 27;
       $("#aktuellesVerfahren").html(" HBW10/5");
        $("#abstand5").html("Diagonale");
    });
    $("#auswahlHBW1010").click(function(){
        verfahren = 28;
       $("#aktuellesVerfahren").html(" HBW10/10");
        $("#abstand5").html("Diagonale");
    });
    $("#auswahlHBW1030").click(function(){
        verfahren = 29;
       $("#aktuellesVerfahren").html(" HBW10/30");
        $("#abstand5").html("Diagonale");
    });
    $("#auswahlHRA").click(function(){
        verfahren = 30;
       $("#aktuellesVerfahren").html(" HRA");
        $("#abstand5").html("Diagonale");
    });
    $("#auswahlHRC").click(function(){
        verfahren = 31;
       $("#aktuellesVerfahren").html(" HRC");
        $("#abstand5").html("Diagonale");
    });
    $("#auswahlHRD").click(function(){
        verfahren = 32;
       $("#aktuellesVerfahren").html(" HRD");
        $("#abstand5").html("Diagonale");
    });
    $("#auswahlHR15N").click(function(){
        verfahren = 33;
       $("#aktuellesVerfahren").html(" HR15N");
        $("#abstand5").html("Diagonale");
    });
    $("#auswahlHR30N").click(function(){
        verfahren = 34;
       $("#aktuellesVerfahren").html(" HR30N");
        $("#abstand5").html("Diagonale");
    });
    $("#auswahlHR45N").click(function(){
        verfahren = 35;
       $("#aktuellesVerfahren").html(" HR45N");
        $("#abstand5").html("Diagonale");
    });
    $("#auswahlHRB").click(function(){
        verfahren = 36;
       $("#aktuellesVerfahren").html(" HRB");
        $("#abstand5").html("Durchmesser");
    });
    $("#auswahlHRE").click(function(){
        verfahren = 37;
       $("#aktuellesVerfahren").html(" HRE");
        $("#abstand5").html("Eindruckdiagonale");
    });
    $("#auswahlHRF").click(function(){
        verfahren = 38;
       $("#aktuellesVerfahren").html(" HRF");
        $("#abstand5").html("Eindruckdiagonale");
    });
    $("#auswahlHRG").click(function(){
        verfahren = 39;
       $("#aktuellesVerfahren").html(" HRG");
        $("#abstand5").html("Eindruckdiagonale");
    });
    $("#auswahlHRH").click(function(){
        verfahren = 49;
       $("#aktuellesVerfahren").html(" HRH");
        $("#abstand5").html("Eindruckdiagonale");
    });
    $("#auswahlHRK").click(function(){
        verfahren = 41;
       $("#aktuellesVerfahren").html(" HRK");
        $("#abstand5").html("Eindruckdiagonale");
    });
    $("#auswahl15T").click(function(){
        verfahren = 42;
       $("#aktuellesVerfahren").html(" HR15T");
        $("#abstand5").html("Eindruckdiagonale");
    });
    $("#auswahl30T").click(function(){
        verfahren = 43;
       $("#aktuellesVerfahren").html(" HR30T");
        $("#abstand5").html("Eindruckdiagonale");
    });
    $("#auswahl45T").click(function(){
        verfahren = 43;
       $("#aktuellesVerfahren").html(" HR45T");
        $("#abstand5").html("Eindruckdiagonale");
    });
  });


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

function hu(k,s,d){
    vickersTiefe=(k-mittelwert)*s;
    dm = Math.sqrt(d**2-(d-(2*vickersTiefe)**2));
    dMin=10*vickersTiefe;
    absRS=2.5*dm;
    absES=3*dm;
    if (document.getElementById('verschwinde3')) {
    document.getElementById("verschwinde3").style.display = 'none';
    }  
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


if(dm>0.6*y){alert('Eindruckdurchmesser zu groß! Nutzen sie einen kleineren Beanspruchungsgrad oder einen kleineren Kugeldurchmesser');
document.getElementById("warnung").innerHTML=('<img src="Kugelgrößer.jpg" id="verschwinde3">');
};

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
    dm=Math.sqrt((1**2)-(1-(2*9.807*0.102)/(1*x*mittelwert))**2)
     vickersTiefe=0.5*(1-Math.sqrt(((1**2)-(dm**2))))
     ha(1)}
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
    if(mittelwert>=20&&mittelwert<=95){
    hi(0.002,100);}
else{
    fehler1()
}
}
if (verfahren===31){
    if(mittelwert>=20&&mittelwert<=70){
    hi(0.002,100);}
    else{
        fehler1()
    }
}
if (verfahren===32){
    if(mittelwert>=40&&mittelwert<=77){
    hi(0.002,100);}
    else{
        fehler1()
    }
}
if (verfahren===33){
    if(mittelwert>=70&&mittelwert<=94){
    hi(0.001,100);}
    else{
        fehler1()
    }
}
if (verfahren===34){
    if(mittelwert>=42&&mittelwert<=86){
    hi(0.001,100);}
    else{
        fehler1()
    }
}
if (verfahren===35){
    if(mittelwert>=20&&mittelwert<=77){
    hi(0.001,100);}
    else{
        fehler1()
    }
}
if (verfahren===36){
    if(mittelwert>=10&&mittelwert<=100){
    hu(130, 0.002, 1.5875);}
    else{
        fehler1()
    }
}
if (verfahren===37){
    if(mittelwert>=70&&mittelwert<=100){
    hu(130, 0.002, 3.175);}
    else{
        fehler1()
    }
}
if (verfahren===38){
    if(mittelwert>=60&&mittelwert<=100){
    hu(130, 0.002, 1.5875);}
    else{
        fehler1()
    }
}
if (verfahren===39){
    if(mittelwert>=30&&mittelwert<=94){
    hu(130, 0.002, 1.5875);}
    else{
        fehler1()
    }
}
if (verfahren===40){
    if(mittelwert>=80&&mittelwert<=100){
    hu(130, 0.002, 3.175);}
    else{
        fehler1()
    }
}
if (verfahren===41){
    if(mittelwert>=40&&mittelwert<=100){
    hu(130, 0.002, 3.175);}
    else{
        fehler1()
    }
}
if (verfahren===42){
    if(mittelwert>=67&&mittelwert<=93){
    hu(100, 0.001, 1.5875);}
    else{
        fehler1()
    }
}
if (verfahren===43){
    if(mittelwert>=29&&mittelwert<=82){
    hu(100, 0.001, 1.5875);}
    else{
        fehler1()
    }
}
if (verfahren===44){
    if(mittelwert>=1&&mittelwert<=72){
    hu(100, 0.001, 1.5875);}
    else{
        fehler1()
    }
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
   