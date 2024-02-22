
 verfahren= 0;


$(document).ready(function(){
 
    $("#auswahlHV1").click(function(){
        verfahren = 1;
       $("#aktuellesVerfahren").html(" HV1");
     
    });
    $("#auswahlHV01").click(function(){
        verfahren = 2;
       $("#aktuellesVerfahren").html(" HV0,1");
       
    });
    $("#auswahlHV03").click(function(){
        verfahren = 3;
       $("#aktuellesVerfahren").html(" HV0,3");
       
    });
    $("#auswahlHV05").click(function(){
        verfahren = 4;
       $("#aktuellesVerfahren").html(" HV5");
       
    });
    $("#auswahlHV0015").click(function(){
        verfahren = 5;
       $("#aktuellesVerfahren").html(" HV0,015");
      
    })
    
  });




    if (document.getElementById("button")) {
     document.getElementById("button").addEventListener("click", test);
    }
   

   




function ho(c){
    dm=Math.sqrt(c/mittelwert);
    vickersTiefe= 0.1428*dm;
    dMin=dm*1.5;
    absRS =2.5*dm;
    absES = 3*dm; 
    zahl2=zahl2/1000;
    if((zahl2)<=absES){
        document.getElementById("verschwinde3").style.display = 'block';
        anzahlR=2;
        
    absR = Math.sqrt(absES**2)-((zahl2/2)**2);

}
else {anzahlR =1;;
    if (document.getElementById('verschwinde3')) {
    document.getElementById("verschwinde3").style.display = 'none';
    }
    }
    
};




function fehler1(){
    alert('Nicht im Messbereich')
}


   function test() {
    
    if (verfahren===0){
        alert('Wählen die ein Verfahren aus.')
       }
else{
  let zahl1 = document.getElementById("eingabe_1").value;
   mittelwert = zahl1;
   zahl2= document.getElementById("eingabe_2").value;
   
    document.getElementById("härtemittel").innerHTML = (mittelwert); 
}
  

  // Vikers


if(verfahren===1){
    ho(1.854949981);
}
if(verfahren===2){
    ho(0.1854949981);
}
if(verfahren===3){
    ho(0.5564849942);
}
if(verfahren===4){
    ho(0.9274749903);
}
if(verfahren===5){
    ho(0.027824249);
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
    absRS=absRS*1000
    absRS=absRS.toFixed(3);
    document.getElementById("abstand1").innerHTML=(absRS + 'µm'); 

    absR=absR*1000
    absR=absR.toFixed(3);
    document.getElementById("abstandReihen").innerHTML=(absR + 'µm'); 

if(dm>0.01){
    dm=dm.toFixed(3);
    document.getElementById("eindruckdiagonale").innerHTML=(dm + 'mm');
    }
if(dm<=0.01){
    dm=dm*1000
    dm=dm.toFixed(3);
    document.getElementById("eindruckdiagonale").innerHTML=(dm + 'µm'); 
}
document.getElementById("anzahlReihen").innerHTML=(anzahlR); 

}

   