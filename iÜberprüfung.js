


setTimeout(startremove, 3000);

function startremove(){
     $('.ausgabe').removeClass('starttextDrehen');
     $('.angabe').removeClass('starttextDrehen');
     $('.ausgabeKarte').removeClass('startdrehen');
  }


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
       $("#aktuellesVerfahren").html(" HV0,5");
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
        $("#abstand5").html("Durchmesser");
    });
    $("#auswahlHRF").click(function(){
        verfahren = 38;
       $("#aktuellesVerfahren").html(" HRF");
        $("#abstand5").html("Durchmesser");
    });
    $("#auswahlHRG").click(function(){
        verfahren = 39;
       $("#aktuellesVerfahren").html(" HRG");
        $("#abstand5").html("Durchmesser");
    });
    $("#auswahlHRH").click(function(){
        verfahren = 40;
       $("#aktuellesVerfahren").html(" HRH");
        $("#abstand5").html("Durchmesser");
    });
    $("#auswahlHRK").click(function(){
        verfahren = 41;
       $("#aktuellesVerfahren").html(" HRK");
        $("#abstand5").html("Durchmesser");
    });
    $("#auswahl15T").click(function(){
        verfahren = 42;
       $("#aktuellesVerfahren").html(" HR15T");
        $("#abstand5").html("Durchmesser");
    });
    $("#auswahl30T").click(function(){
        verfahren = 43;
       $("#aktuellesVerfahren").html(" HR30T");
        $("#abstand5").html("Durchmesser");
    });
    $("#auswahl45T").click(function(){
        verfahren = 44;
       $("#aktuellesVerfahren").html(" HR45T");
        $("#abstand5").html("Durchmesser");
    });
  });

  if (document.getElementById("start")) {
        
   document.getElementById("start").addEventListener("click",() => {
    $(".iO2karte").css('background-image', 'url(' + 'card.png' + ')');
    $(".iO2karte").css('background-image', 'url(' + 'card.png' + ')');
    
    document.getElementById("nummerx").innerHTML = ("");
    document.getElementById("datum").innerHTML = ("");
      document.getElementById("rd").innerHTML = ("");
      document.getElementById("rREL").innerHTML = ("");
      document.getElementById("dmmittel").innerHTML = ("");
      document.getElementById("H").innerHTML = ("");
      document.getElementById("E").innerHTML = ("");
      document.getElementById("Erel").innerHTML = ("");
      document.getElementById("iO1").innerHTML = ("");
      document.getElementById("iO2").innerHTML = ("");
      heute = new Date().toLocaleString();; 
      document.getElementById("datum").innerHTML = (heute);
      nummerx =   zahl1 = document.getElementById("härteplattenNummer").value;
      document.getElementById("nummerx").innerHTML = (nummerx);

      zahl1 = document.getElementById("eingabe_1").value;
      zahl2 = document.getElementById("eingabe_2").value;
      zahl3 = document.getElementById("eingabe_3").value;
      zahl4 = document.getElementById("eingabe_4").value;
      zahl5 = document.getElementById("eingabe_5").value;
      Hc = document.getElementById("Härteplatte").value;

      

      mittelw(zahl1,zahl2,zahl3,zahl4,zahl5);
      H=mittel;
      $("#härtemittel").html(mittel);
      
      setTimeout(test(zahl1), 500);
      dm1=dm;
      
      setTimeout(test(zahl2), 500);
      dm2=dm;
      
      setTimeout(test(zahl3), 500);
      dm3=dm;
      
      setTimeout(test(zahl4), 500);
      dm4=dm;
      
      setTimeout(test(zahl5), 500);
      dm5=dm;
    
      

      mittelw(dm1,dm2,dm3,dm4,dm5);  
    dmMittel = mittel;
  
    
   
    
    
   
    

    if(verfahren>9&&verfahren<30){
        rb(dm1,dm2,dm3,dm4,dm5);
    r=differenz
    rREL = 100*(r/dmMittel);
    rREL=rREL.toFixed(2);
    rb(zahl1,zahl2,zahl3,zahl4,zahl5);
    r=r.toFixed(2);
    Erel = 100*((H-Hc)/Hc);
    E=H-Hc;
    E=E.toFixed(2)
    Erel=Erel.toFixed(2);

    document.getElementById("dmmittel").innerHTML = (dmMittel+"mm");
    document.getElementById("rd").innerHTML = (r);
    document.getElementById("rREL").innerHTML = (rREL);
    document.getElementById("H").innerHTML = (H);
    document.getElementById("E").innerHTML = (E);
    document.getElementById("Erel").innerHTML = (Erel);
    document.getElementById("EB").innerHTML = ("Abweichung<Br> Prüfmaschine<Br>E");
    document.getElementById("ErelBrel").innerHTML = ("Relative Abweichung <Br>Prüfmaschine<Br> E<sub>rel</sub>");


    if(verfahren===14 || verfahren===19 || verfahren===24 || verfahren===29){
    
        if(Hc<250){
            if(rREL<3.0 && rREL>-3.0){
                document.getElementById("iO1").innerHTML = ("i.O");
                $(".iO1karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
            }
            if (rREL>3.0 ) {
                document.getElementById("iO1").innerHTML = ("n.i.O");  
                $(".iO1karte").css('background-image', 'url(' + 'cardred.png' + ')');
            }
            if(Erel<3.0 && Erel>-3.0 ){
                
                document.getElementById("iO2").innerHTML = ("i.O");
                $(".iO2karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
            }
            if (Erel>3.0 || Erel<-3.0) {
                document.getElementById("iO2").innerHTML = ("n.i.O");  
                $(".iO2karte").css('background-image', 'url(' + 'cardred.png' + ')');
            }
        
    }

        if((Hc>=250 && Hc<= 450) ){
            if(rREL<2.5 && rREL>-2.5 ){
                document.getElementById("iO1").innerHTML = ("i.O");
                $(".iO1karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
            }
            if (rREL>2.5 || rREL<-2.5){
                document.getElementById("iO1").innerHTML = ("n.i.O"); 
                $(".iO1karte").css('background-image', 'url(' + 'cardred.png' + ')'); 
            }
            if(Erel<2.5 && Erel>-2.5 ){
                document.getElementById("iO2").innerHTML = ("i.O");
                $(".iO2karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
            }
            if((rREL>2.5) || (rREL<-2.5)){
                document.getElementById("iO2").innerHTML = ("n.i.O");  
                $(".iO2karte").css('background-image', 'url(' + 'cardred.png' + ')');
            }
        }


        if(Hc>450){
        if(rREL<2.0 && rREL>-2.0 ){
            document.getElementById("iO1").innerHTML = ("i.O");
            $(".iO1karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
        }
        if((rREL>2.0) || (rREL<-2.0)){
            document.getElementById("iO1").innerHTML = ("n.i.O");
            $(".iO1karte").css('background-image', 'url(' + 'cardred.png' + ')');  
        }
        if(Erel<2.0 &&Erel>-2.0){
            document.getElementById("iO2").innerHTML = ("i.O");
            $(".iO2karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
        }
        if((rREL>2.0) || (rREL<-2.0)){
            document.getElementById("iO2").innerHTML = ("n.i.O");
            $(".iO2karte").css('background-image', 'url(' + 'cardred.png' + ')');  
        }
    }

    }

if(verfahren<=13 && verfahren>=10 ) {
    if(rREL<3.0 && rREL>-3.0){
                document.getElementById("iO1").innerHTML = ("i.O");
                $(".iO1karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
            }
            if((rREL>3.0) || (rREL<-3.0)){
                document.getElementById("iO1").innerHTML = ("n.i.O");
                $(".iO1karte").css('background-image', 'url(' + 'cardred.png' + ')');    
            }
            if(Erel<3.0 && Erel>-3.0){
                
                document.getElementById("iO2").innerHTML = ("i.O");
                $(".iO2karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
            }
            if((rREL>3.0) || (rREL<-3.0)){
                document.getElementById("iO2").innerHTML = ("n.i.O"); 
                $(".iO2karte").css('background-image', 'url(' + 'cardred.png' + ')');   
            }
        }

        if(verfahren<=18 && verfahren>=15 ) {
            if(rREL<3.0 && rREL>-3.0){
                        document.getElementById("iO1").innerHTML = ("i.O");
                        $(".iO1karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
                    }
                    if((rREL>3.0) || (rREL<-3.0)){
                        document.getElementById("iO1").innerHTML = ("n.i.O");
                        $(".iO1karte").css('background-image', 'url(' + 'cardred.png' + ')');    
                    }
                    if(Erel<3.0 && Erel>-3.0){
                        
                        document.getElementById("iO2").innerHTML = ("i.O");
                        $(".iO2karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
                    }
                    if((rREL>3.0) || (rREL<-3.0)){
                        document.getElementById("iO2").innerHTML = ("n.i.O"); 
                        $(".iO2karte").css('background-image', 'url(' + 'cardred.png' + ')');   
                    }
                }
                if(verfahren<=23 && verfahren>=20 ) {
                    if(rREL<3.0 && rREL>-3.0){
                                document.getElementById("iO1").innerHTML = ("i.O");
                                $(".iO1karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
                            }
                            if((rREL>3.0) || (rREL<-3.0)){
                                document.getElementById("iO1").innerHTML = ("n.i.O");
                                $(".iO1karte").css('background-image', 'url(' + 'cardred.png' + ')');    
                            }
                            if(Erel<3.0 && Erel>-3.0){
                                
                                document.getElementById("iO2").innerHTML = ("i.O");
                                $(".iO2karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
                            }
                            if((rREL>3.0) || (rREL<-3.0)){
                                document.getElementById("iO2").innerHTML = ("n.i.O"); 
                                $(".iO2karte").css('background-image', 'url(' + 'cardred.png' + ')');   
                            }
                        }
                        if(verfahren<=29 && verfahren>=20) {
                            if(rREL<3.0 && rREL>-3.0){
                                        document.getElementById("iO1").innerHTML = ("i.O");
                                        $(".iO1karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
                                    }
                                    if((rREL>3.0) || (rREL<-3.0)){
                                        document.getElementById("iO1").innerHTML = ("n.i.O");
                                        $(".iO1karte").css('background-image', 'url(' + 'cardred.png' + ')');    
                                    }
                                    if(Erel<3.0 && Erel>-3.0){
                                        
                                        document.getElementById("iO2").innerHTML = ("i.O");
                                        $(".iO2karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
                                    }
                                    if((rREL>3.0) || (rREL<-3.0)){
                                        document.getElementById("iO2").innerHTML = ("n.i.O"); 
                                        $(".iO2karte").css('background-image', 'url(' + 'cardred.png' + ')');   
                                    }
                                }

    }
 
    

if (verfahren<10){
    rb(zahl5,zahl4,zahl3,zahl2,zahl1);
    r=differenz
    rREL = 100*(r/H);
    rREL=rREL.toFixed(2);
    
    E=H-Hc;
    Erel = 100*((H-Hc)/Hc);
    rb(dm1,dm2,dm3,dm4,dm5);
    rt=differenz 
    rkurz=rt.toFixed(4);
    document.getElementById("dmmittel").innerHTML = (dmMittel+"mm");
    document.getElementById("rd").innerHTML = (rkurz);
    document.getElementById("rREL").innerHTML = (rREL);
    document.getElementById("E").innerHTML = (E.toFixed(2));
    document.getElementById("Erel").innerHTML = (Erel.toFixed(3));
    document.getElementById("H").innerHTML = (H);
    document.getElementById("EB").innerHTML = ("Abweichung<Br> Prüfmaschine<Br>b");
    document.getElementById("ErelBrel").innerHTML = ("Relative Abweichung <Br>Prüfmaschine<Br> b<sub>rel</sub>");
    if (rt<0.001){
    document.getElementById("iO1").innerHTML = ("i.O");
    $(".iO1karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
    }
    if (rt>0.001){
        if (verfahren===1 || verfahren===4 || verfahren===7 ){
            if (Hc<=250){ 
                if((rREL>6.0 ) || (rREL<-6.0)){
                    document.getElementById("iO1").innerHTML = ("n.i.O"); 
                    $(".iO1karte").css('background-image', 'url(' + 'cardred.png' + ')'); 
                }
                if(rREL<6.0 &&  rREL>-6.0 ){
                    document.getElementById("iO1").innerHTML = ("i.O");
                    $(".iO1karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
                }
            }
            if(Hc>250){
                if((rREL>4.0 ) || (rREL<-4.0)){
                    document.getElementById("iO1").innerHTML = ("n.i.O");
                    $(".iO1karte").css('background-image', 'url(' + 'cardred.png' + ')');  
                }
                if((rREL<4.0 && rREL>=0) || (rREL>-4.0 && rRel<=0)){
                    document.getElementById("iO1").innerHTML = ("i.O");
                    $(".iO1karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
                }
            }
        }
        if (verfahren===5 || verfahren===6 || verfahren===8 ){
            if (Hc<=250){ 
                if((rREL>12.0 ) || (rREL<-12.0)){
                    document.getElementById("iO1").innerHTML = ("n.i.O"); 
                    $(".iO1karte").css('background-image', 'url(' + 'cardred.png' + ')'); 
                }
                if(rREL<12.0 && rREL>-12.0){
                    document.getElementById("iO1").innerHTML = ("i.O");
                    $(".iO1karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
                }
            }
            if(Hc>250){
                if((rREL>8.0 ) || (rREL<-8.0)){
                    document.getElementById("iO1").innerHTML = ("n.i.O");
                    $(".iO1karte").css('background-image', 'url(' + 'cardred.png' + ')');  
                }
                if(rREL<8.0 && rREL>-8.0 ){
                    document.getElementById("iO1").innerHTML = ("i.O");
                    $(".iO1karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
                }
            }
        }
    

        if (verfahren===2 || verfahren===3 || verfahren===9 ){
            if (Hc<=250){ 
                if(rREL<18.0 && rREL>-18.0){
                    document.getElementById("iO1").innerHTML = ("i.O");
                    $(".iO1karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
                }
                else{
                    document.getElementById("iO1").innerHTML = ("n.i.O"); 
                    $(".iO1karte").css('background-image', 'url(' + 'cardred.png' + ')'); 
                }
             
            }
            if(Hc>250){
                if(rREL<12.0 && rREL>-12.0 ){
                    document.getElementById("iO1").innerHTML = ("i.O");
                    $(".iO1karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
                }
                else{
                    document.getElementById("iO1").innerHTML = ("n.i.O");
                    $(".iO1karte").css('background-image', 'url(' + 'cardred.png' + ')');  
                }
              
            }
        }
    }
       // 0,21/ 𝑑̅+ 1,5
       
       zwichen = (0.21/dm) +1.5;
        if (dmMittel>=0.02 &&  dmMittel<0,14 ){ 
            
                if(Erel>zwichen  || Erel<(-zwichen)){
                    document.getElementById("iO2").innerHTML = ("n.i.O"); 
                    $(".iO2karte").css('background-image', 'url(' + 'cardred.png' + ')'); 
                }
                if(Erel<(zwichen) && Erel>-(zwichen)){
                    document.getElementById("iO2").innerHTML = ("i.O");
                    $(".iO2karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
                }
            }
        if (dmMittel>=0.14 &&  dmMittel1,4 ){
                if((Erel>3 ) || (Erel<-3)){
                    document.getElementById("iO2").innerHTML = ("n.i.O");
                    $(".iO2karte").css('background-image', 'url(' + 'cardred.png' + ')');  
                }
                if(Erel<3 && Erel>-3 ){
                    document.getElementById("iO2").innerHTML = ("i.O");
                    $(".iO2karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
                }
        }   
}

if(verfahren>=30 && verfahren<44){
    rb(zahl5,zahl4,zahl3,zahl2,zahl1);
    r=differenz.toFixed(4);
    rREL = 100*(r/H);
    rREL=rREL.toFixed(2);
    E=H-Hc;
    Erel = 100*((H-Hc)/Hc);
   

    document.getElementById("dmmittel").innerHTML = (dmMittel+"mm");
    document.getElementById("rd").innerHTML = (r);
    document.getElementById("rREL").innerHTML = (rREL);
    document.getElementById("E").innerHTML = (E.toFixed(2));
    document.getElementById("Erel").innerHTML = (Erel.toFixed(3));
    document.getElementById("H").innerHTML = (H);
    document.getElementById("EB").innerHTML = ("Abweichung<Br> Prüfmaschine<Br>b");
    document.getElementById("ErelBrel").innerHTML = ("Relative Abweichung <Br>Prüfmaschine<Br> b<sub>rel</sub>");
    
    if(verfahren===30){
       
        zw1= 0.02*(100-dmMittel);
        if(Hc>=20 && Hc<=75){
            if(r<=zw1 || r<=0.8){
                document.getElementById("iO1").innerHTML = ("i.O");
                $(".iO1karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
            }
            if((r>zw1) || (r<-(zw1))){
                document.getElementById("iO1").innerHTML = ("n.i.O");
                $(".iO1karte").css('background-image', 'url(' + 'cardred.png' + ')');    
            }
            if(r<=0.8){
                document.getElementById("iO1").innerHTML = ("i.O");
                $(".iO1karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
            }
            if((E>2 ) || (E<-2)){
                document.getElementById("iO2").innerHTML = ("n.i.O");
                $(".iO2karte").css('background-image', 'url(' + 'cardred.png' + ')');  
            }
            if(E<2 && E>-2 ){
                document.getElementById("iO2").innerHTML = ("i.O");
                $(".iO2karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
            }


        }
        if(Hc>75 && Hc<=95){
            if(r<=zw1 || r<=0.8){
                document.getElementById("iO1").innerHTML = ("i.O");
                $(".iO1karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
            }
            if((r>zw1) || (r<-(zw1))){
                document.getElementById("iO1").innerHTML = ("n.i.O");
                $(".iO1karte").css('background-image', 'url(' + 'cardred.png' + ')');    
            }
            if(r<=0.8){
                document.getElementById("iO1").innerHTML = ("i.O");
                $(".iO1karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
            }

            if((E>1.5 ) || (E<-1.5)){
                document.getElementById("iO2").innerHTML = ("n.i.O");
                $(".iO2karte").css('background-image', 'url(' + 'cardred.png' + ')');  
            }
            if(E<1.5 && E>-1.5 ){
                document.getElementById("iO2").innerHTML = ("i.O");
                $(".iO2karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
            }
        } 

    }
    if(verfahren===31){
        zw1= 0.02*(100-dmMittel);
        if(Hc>=10 && Hc<=70){
            if(r<=zw1 || r<=0.8){
                document.getElementById("iO1").innerHTML = ("i.O");
                $(".iO1karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
            }
            if(r>=zw1 && r>=0.8){
                document.getElementById("iO1").innerHTML = ("n.i.O");
                $(".iO1karte").css('background-image', 'url(' + 'cardred.png' + ')');    
            }
            if(r<=0.8){
                document.getElementById("iO1").innerHTML = ("i.O");
                $(".iO1karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
            }
            if((E>1.5 ) || (E<-1.5)){
                document.getElementById("iO2").innerHTML = ("n.i.O");
                $(".iO2karte").css('background-image', 'url(' + 'cardred.png' + ')');  
            }
            if(E<1.5 && E>-1.5 ){
                document.getElementById("iO2").innerHTML = ("i.O");
                $(".iO2karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
            }


        }
    
    }
    if(verfahren===32){
        zw1= 0.02*(100-dmMittel);
        if(Hc>=40 && Hc<=70){
            if(r<=zw1 || r<=0.8){
                document.getElementById("iO1").innerHTML = ("i.O");
                $(".iO1karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
            }
            if(r>=zw1 && r>=0.8){
                document.getElementById("iO1").innerHTML = ("n.i.O");
                $(".iO1karte").css('background-image', 'url(' + 'cardred.png' + ')');    
            }
            if((E>2 ) || (E<-2)){
                document.getElementById("iO2").innerHTML = ("n.i.O");
                $(".iO2karte").css('background-image', 'url(' + 'cardred.png' + ')');  
            }
            if(E<2 && E>-2 ){
                document.getElementById("iO2").innerHTML = ("i.O");
                $(".iO2karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
            }


        }
        if(Hc>70 && Hc<=77){
            if(r<=zw1 || r<=0.8){
                document.getElementById("iO1").innerHTML = ("i.O");
                $(".iO1karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
            }
            if(r>=zw1 && r>=0.8){
                document.getElementById("iO1").innerHTML = ("n.i.O");
                $(".iO1karte").css('background-image', 'url(' + 'cardred.png' + ')');    
            }
            if((E>1.5 ) || (E<-1.5)){
                document.getElementById("iO2").innerHTML = ("n.i.O");
                $(".iO2karte").css('background-image', 'url(' + 'cardred.png' + ')');  
            }
            if(E<1.5 && E>-1.5 ){
                document.getElementById("iO2").innerHTML = ("i.O");
                $(".iO2karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
            }
        } 
        
    }
    if(verfahren>=33 && verfahren<=35){
        zw3= 0.04*(100-dmMittel);
        if(r<=zw3){
                document.getElementById("iO1").innerHTML = ("i.O");
                $(".iO1karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
            }
            if(r<=zw3){
                document.getElementById("iO1").innerHTML = ("n.i.O");
                $(".iO1karte").css('background-image', 'url(' + 'cardred.png' + ')');    
            }
           if (r<=1,2){
            document.getElementById("iO1").innerHTML = ("i.O");
            $(".iO1karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
        }


            if((E>2 ) || (E<-2)){
                document.getElementById("iO2").innerHTML = ("n.i.O");
                $(".iO2karte").css('background-image', 'url(' + 'cardred.png' + ')');  
            }
            if(E<2 && E>-2 ){
                document.getElementById("iO2").innerHTML = ("i.O");
                $(".iO2karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
        }      
    }
    if(verfahren===36){
               
        zw2= 0.04*(130-dmMittel);
        if(Hc>=10 && Hc<=45){
            if(r<=zw2 && r>=-(zw2)){
                document.getElementById("iO1").innerHTML = ("i.O");
                $(".iO1karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
            }
            if((r>zw2) || (r<-(zw2))){
                document.getElementById("iO1").innerHTML = ("n.i.O");
                $(".iO1karte").css('background-image', 'url(' + 'cardred.png' + ')');    
            }
            if((E>4 ) || (E<-4)){
                document.getElementById("iO2").innerHTML = ("n.i.O");
                $(".iO2karte").css('background-image', 'url(' + 'cardred.png' + ')');  
            }
            if(E<4 && E>-4 ){
                document.getElementById("iO2").innerHTML = ("i.O");
                $(".iO2karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
            }
        }
        if(Hc>45 && Hc<=80){
            if(r<=zw2 && r>=-(zw2)){
                document.getElementById("iO1").innerHTML = ("i.O");
                $(".iO1karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
            }
            if((r>zw2) || (r<-(zw2))){
                document.getElementById("iO1").innerHTML = ("n.i.O");
                $(".iO1karte").css('background-image', 'url(' + 'cardred.png' + ')');    
            }
            if((E>3 ) || (E<-3)){
                document.getElementById("iO2").innerHTML = ("n.i.O");
                $(".iO2karte").css('background-image', 'url(' + 'cardred.png' + ')');  
            }
            if(E<3 && E>-3 ){
                document.getElementById("iO2").innerHTML = ("i.O");
                $(".iO2karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
            }
        }
        if(Hc>80 && Hc<=100){
            if(r<=zw2 && r>=-(zw2)){
                document.getElementById("iO1").innerHTML = ("i.O");
                $(".iO1karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
            }
            if((r>zw2) || (r<-(zw2))){
                document.getElementById("iO1").innerHTML = ("n.i.O");
                $(".iO1karte").css('background-image', 'url(' + 'cardred.png' + ')');    
            }
            if((E>2 ) || (E<-2)){
                document.getElementById("iO2").innerHTML = ("n.i.O");
                $(".iO2karte").css('background-image', 'url(' + 'cardred.png' + ')');  
            }
            if(E<2 && E>-2 ){
                document.getElementById("iO2").innerHTML = ("i.O");
                $(".iO2karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
            }
        }
        
    }
    if(verfahren===37){
        
        zw2= 0.04*(130-dmMittel);
        if(Hc>=70 && Hc<=90){
            if(r<=zw2){
                document.getElementById("iO1").innerHTML = ("i.O");
                $(".iO1karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
            }
            if(r>zw2){
                document.getElementById("iO1").innerHTML = ("n.i.O");
                $(".iO1karte").css('background-image', 'url(' + 'cardred.png' + ')');    
            }
            if((E>2.5 ) || (E<-2.5)){
                document.getElementById("iO2").innerHTML = ("n.i.O");
                $(".iO2karte").css('background-image', 'url(' + 'cardred.png' + ')');  
            }
            if(E<2.5 && E>-2.5 ){
                document.getElementById("iO2").innerHTML = ("i.O");
                $(".iO2karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
            }
            
        }
        if(Hc>90 && Hc<=100){
            if(r<=zw2 && r>=-(zw2)){
                document.getElementById("iO1").innerHTML = ("i.O");
                $(".iO1karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
            }
            if((r>zw2) || (r<-(zw2))){
                document.getElementById("iO1").innerHTML = ("n.i.O");
                $(".iO1karte").css('background-image', 'url(' + 'cardred.png' + ')');    
            }
            if((E>2 ) || (E<-2)){
                document.getElementById("iO2").innerHTML = ("n.i.O");
                $(".iO2karte").css('background-image', 'url(' + 'cardred.png' + ')');  
            }
            if(E<2 && E>-2 ){
                document.getElementById("iO2").innerHTML = ("i.O");
                $(".iO2karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
            }
        }
    }
    if(verfahren===38){
        zw2= 0.04*(130-dmMittel);
        if(Hc>=60 && Hc<=90){
            if(r<=zw2 && r>=-(zw2)){
                document.getElementById("iO1").innerHTML = ("i.O");
                $(".iO1karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
            }
            if((r>zw2) || (r<-(zw2))){
                document.getElementById("iO1").innerHTML = ("n.i.O");
                $(".iO1karte").css('background-image', 'url(' + 'cardred.png' + ')');    
            }
            if((E>3 ) || (E<-3)){
                document.getElementById("iO2").innerHTML = ("n.i.O");
                $(".iO2karte").css('background-image', 'url(' + 'cardred.png' + ')');  
            }
            if(E<3 && E>-3 ){
                document.getElementById("iO2").innerHTML = ("i.O");
                $(".iO2karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
            }
            
        }
        if(Hc>90 && Hc<=100){
            if(r<=zw2 && r>=-(zw2)){
                document.getElementById("iO1").innerHTML = ("i.O");
                $(".iO1karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
            }
            if((r>zw2) || (r<-(zw2))){
                document.getElementById("iO1").innerHTML = ("n.i.O");
                $(".iO1karte").css('background-image', 'url(' + 'cardred.png' + ')');    
            }
            if((E>2 ) || (E<-2)){
                document.getElementById("iO2").innerHTML = ("n.i.O");
                $(".iO2karte").css('background-image', 'url(' + 'cardred.png' + ')');  
            }
            if(E<2 && E>-2 ){
                document.getElementById("iO2").innerHTML = ("i.O");
                $(".iO2karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
            }
        }
        
    }
    if(verfahren===39){
        zw2= 0.04*(130-dmMittel);
        if(Hc>=30  && Hc<=50){
            if(r<=zw2 && r>=-(zw2)){
                document.getElementById("iO1").innerHTML = ("i.O");
                $(".iO1karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
            }
            if((r>zw2) || (r<-(zw2))){
                document.getElementById("iO1").innerHTML = ("n.i.O");
                $(".iO1karte").css('background-image', 'url(' + 'cardred.png' + ')');    
            }
            if((E>6 ) || (E<-6)){
                document.getElementById("iO2").innerHTML = ("n.i.O");
                $(".iO2karte").css('background-image', 'url(' + 'cardred.png' + ')');  
            }
            if(E<6 && E>-6 ){
                document.getElementById("iO2").innerHTML = ("i.O");
                $(".iO2karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
            }
            
        }
        if(Hc>50 && Hc<=75){
            if(r<=zw2 && r>=-(zw2)){
                document.getElementById("iO1").innerHTML = ("i.O");
                $(".iO1karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
            }
            if((r>zw2) || (r<-(zw2))){
                document.getElementById("iO1").innerHTML = ("n.i.O");
                $(".iO1karte").css('background-image', 'url(' + 'cardred.png' + ')');    
            }
            if((E>4.5 ) || (E<-4.5)){
                document.getElementById("iO2").innerHTML = ("n.i.O");
                $(".iO2karte").css('background-image', 'url(' + 'cardred.png' + ')');  
            }
            if(E<4.5 && E>-4.5 ){
                document.getElementById("iO2").innerHTML = ("i.O");
                $(".iO2karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
            }
        }
        if(Hc>75 && Hc<=94){
            if(r<=zw2 && r>=-(zw2)){
                document.getElementById("iO1").innerHTML = ("i.O");
                $(".iO1karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
            }
            if((r>zw2) || (r<-(zw2))){
                document.getElementById("iO1").innerHTML = ("n.i.O");
                $(".iO1karte").css('background-image', 'url(' + 'cardred.png' + ')');    
            }
            if((E>3 ) || (E<-3)){
                document.getElementById("iO2").innerHTML = ("n.i.O");
                $(".iO2karte").css('background-image', 'url(' + 'cardred.png' + ')');  
            }
            if(E<3 && E>-3 ){
                document.getElementById("iO2").innerHTML = ("i.O");
                $(".iO2karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
            }
        }
        
    }
    if(verfahren===40){
        zw2= 0.04*(130-dmMittel);
        if(Hc>=80  && Hc<=100){
            if(r<=zw2 && r>=-(zw2)){
                document.getElementById("iO1").innerHTML = ("i.O");
                $(".iO1karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
            }
            if((r>zw2) || (r<-(zw2))){
                document.getElementById("iO1").innerHTML = ("n.i.O");
                $(".iO1karte").css('background-image', 'url(' + 'cardred.png' + ')');    
            }
            if((E>2 ) || (E<-2)){
                document.getElementById("iO2").innerHTML = ("n.i.O");
                $(".iO2karte").css('background-image', 'url(' + 'cardred.png' + ')');  
            }
            if(E<2 && E>-2 ){
                document.getElementById("iO2").innerHTML = ("i.O");
                $(".iO2karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
            }
            
        }
        
    }
    if(verfahren===41){
        zw2= 0.04*(130-dmMittel);
        if(Hc>=40  && Hc<=60){
            if(r<=zw2 && r>=-(zw2)){
                document.getElementById("iO1").innerHTML = ("i.O");
                $(".iO1karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
            }
            if((r>zw2) || (r<-(zw2))){
                document.getElementById("iO1").innerHTML = ("n.i.O");
                $(".iO1karte").css('background-image', 'url(' + 'cardred.png' + ')');    
            }
            if((E>4 ) || (E<-4)){
                document.getElementById("iO2").innerHTML = ("n.i.O");
                $(".iO2karte").css('background-image', 'url(' + 'cardred.png' + ')');  
            }
            if(E<4 && E>-4 ){
                document.getElementById("iO2").innerHTML = ("i.O");
                $(".iO2karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
            }
            
        }
        if(Hc>60 && Hc<=80){
            if(r<=zw2 && r>=-(zw2)){
                document.getElementById("iO1").innerHTML = ("i.O");
                $(".iO1karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
            }
            if((r>zw2) || (r<-(zw2))){
                document.getElementById("iO1").innerHTML = ("n.i.O");
                $(".iO1karte").css('background-image', 'url(' + 'cardred.png' + ')');    
            }
            if((E>3 ) || (E<-3)){
                document.getElementById("iO2").innerHTML = ("n.i.O");
                $(".iO2karte").css('background-image', 'url(' + 'cardred.png' + ')');  
            }
            if(E<3 && E>-3 ){
                document.getElementById("iO2").innerHTML = ("i.O");
                $(".iO2karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
            }
        }
        if(Hc>80 && Hc<=100){
            if(r<=zw2 && r>=-(zw2)){
                document.getElementById("iO1").innerHTML = ("i.O");
                $(".iO1karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
            }
            if((r>zw2) || (r<-(zw2))){
                document.getElementById("iO1").innerHTML = ("n.i.O");
                $(".iO1karte").css('background-image', 'url(' + 'cardred.png' + ')');    
            }
            if((E>2 ) || (E<-2)){
                document.getElementById("iO2").innerHTML = ("n.i.O");
                $(".iO2karte").css('background-image', 'url(' + 'cardred.png' + ')');  
            }
            if(E<2 && E>-2 ){
                document.getElementById("iO2").innerHTML = ("i.O");
                $(".iO2karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
            }
        }
        
    }
    if(verfahren>=42 && verfahren<= 44){

        zw4= 0.06*(100-dmMittel);
        if(r<=zw4 || r<=2,4){
            
                document.getElementById("iO1").innerHTML = ("i.O");
                $(".iO1karte").css('background-image', 'url(' + 'cardgreen.png' + ')');
            }
            else{
               
                document.getElementById("iO1").innerHTML = ("n.i.O");
                $(".iO1karte").css('background-image', 'url(' + 'cardred.png' + ')');    
            }
            if((E>3 ) || (E<-3)){
                document.getElementById("iO2").innerHTML = ("n.i.O");
                $(".iO2karte").css('background-image', 'url(' + 'cardred.png' + ')');  
            }
            if(E<3 && E>-3 ){
                document.getElementById("iO2").innerHTML = ("i.O");
                $(".iO2karte").css('background-image', 'url(' + 'cardgreen.png' + ')');            
        }

        
    }

}
});
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








function rb(dm11,dm12,dm13,dm14,dm15){
   dmeingabe = [];
   if (dm11>0){
    dmeingabe.push( parseFloat(dm11));
   }
   if (dm12>0){
      dmeingabe.push( parseFloat(dm12));
   }
   if (dm13>0){
      dmeingabe.push( parseFloat(dm13));
   }
   if (dm14>0){
      dmeingabe.push( parseFloat(dm14));
   }
   if (dm15>0){
      dmeingabe.push( parseFloat(dm15));
   }
   dmeingabe.sort();
  differenz= dmeingabe[4]-dmeingabe[0]
  
  }







function mittelw(zahl11,zahl12, zahl13, zahl14, zahl15){
      eingabe = [];
      if (zahl11>0){
        
       eingabe.push( parseFloat(zahl11));
      }
      if (zahl12>0){
         eingabe.push( parseFloat(zahl12));
      }
      if (zahl13>0){
         eingabe.push( parseFloat(zahl13));
      }
      if (zahl14>0){
         eingabe.push( parseFloat(zahl14));
      }
      if (zahl15>0){
         eingabe.push( parseFloat(zahl15));
      }
    function ArrayAvg(myArray){
     
      var i = 0, summ = 0, ArrayLen = myArray.length;
      while (i < ArrayLen) {
           summ = summ + (myArray)[i++];
           
      }   
      a = summ / ArrayLen; 
      mittel = a.toFixed(2);
      
     }
     ArrayAvg(eingabe);
}







function fehler1(){
        alert('Nicht im Messbereich')
}






   function test(mittelwert) {
    
x =Math.PI;
    if (verfahren===0){
        alert('Wählen die ein Verfahren aus.')
       }

 $(".angabe").addClass("textDrehen");
 $(".ausgabe").addClass("textDrehen");
 $(".ausgabeKarte").addClass("drehen");
  // Vikers

if(verfahren===1){
    dm=Math.sqrt(18.54949981/mittelwert);
}
if(verfahren===2){
    dm=Math.sqrt(1.854949981/mittelwert);
}
if(verfahren===3){
    dm=Math.sqrt(0.1854949981/mittelwert);
}
if(verfahren===4){
    dm=Math.sqrt(55.64849942/mittelwert);
}
if(verfahren===5){
    dm=Math.sqrt(5.564849942/mittelwert);
}
if(verfahren===6){
    dm=Math.sqrt(0.5564849942/mittelwert);
}
if(verfahren===7){
    dm=Math.sqrt(9.274749903/mittelwert);
}
if(verfahren===8){
   dm=Math.sqrt(0.9274749903/mittelwert);
}
if(verfahren===9){
    dm=Math.sqrt(0.027824249/mittelwert);
}
if(verfahren===10){
    dm=Math.sqrt((1**2)-(1-(2*9.807*0.102)/(1*x*mittelwert))**2)
    }
if(verfahren===11){
   dm=Math.sqrt((1**2)-(1-(2*24.52*0.102)/(1*x*mittelwert))**2)
}
if(verfahren===12){ 
  dm=Math.sqrt((1**2)-(1-(2*49.03*0.102)/(1*x*mittelwert))**2)
}
if(verfahren===13){
  dm=Math.sqrt((1**2)-(1-(2*98.07*0.102)/(1*x*mittelwert))**2)
}
if(verfahren===14){
  dm=Math.sqrt((1**2)-(1-(2*294.2*0.102)/(1*x*mittelwert))**2)
}
//2,5
if(verfahren===15){
    dm=Math.sqrt((2.5**2)-(2.5-(2*61.29*0.102)/(2.5*x*mittelwert))**2)
}
if(verfahren===16){
  dm=Math.sqrt((2.5**2)-(2.5-(2*153.2*0.102)/(2.5*x*mittelwert))**2)
}
if(verfahren===17){
    dm=Math.sqrt((2.5**2)-(2.5-(2*306.5*0.102)/(2.5*x*mittelwert))**2)
}
if(verfahren===18){
    dm=Math.sqrt((2.5**2)-(2.5-(2*612.9*0.102)/(2.5*x*mittelwert))**2)
}
if(verfahren===19){
  dm=Math.sqrt((2.5**2)-(2.5-(2*1839*0.102)/(2.5*x*mittelwert))**2);
}
//5
if(verfahren===20){
  dm=Math.sqrt((5**2)-(5-(2*245.2*0.102)/(5*x*mittelwert))**2)
}
if(verfahren===21){
dm=Math.sqrt((5**2)-(5-(2* 612.9*0.102)/(5*x*mittelwert))**2)
}
if(verfahren===22){
  dm=Math.sqrt((5**2)-(5-(2*1226*0.102)/(5*x*mittelwert))**2)
}
if(verfahren===23){
   dm=Math.sqrt((5**2)-(5-(2*2452*0.102)/(5*x*mittelwert))**2)
}
if(verfahren===24){
  dm = Math.sqrt((5**2)-(5-(2*7355*0.102)/(5*x*mittelwert))**2)
}

//10
if(verfahren===25){
dm=Math.sqrt((10**2)-(10-(2*980.7*0.102)/(10*x*mittelwert))**2)
}
if(verfahren===26){
 dm=Math.sqrt((10**2)-(10-(2*2452*0.102)/(10*x*mittelwert))**2)
}
if(verfahren===27){
dm=Math.sqrt((10**2)-(10-(2*4903*0.102)/(10*x*mittelwert))**2)
}
if(verfahren===28){
    dm=Math.sqrt((10**2)-(10-(2*9807*0.102)/(10*x*mittelwert))**2)
}
if(verfahren===29){
dm=Math.sqrt((10**2)-(10-(2*29420*0.102)/(10*x*mittelwert))**2)
}




if (verfahren===30){
    vickersTiefe=(100-mittelwert)*0.002;
    dm = (vickersTiefe*0.5)*2;
    }


if (verfahren===31){
    
    vickersTiefe=(100-mittelwert)*0.002;
    dm=(vickersTiefe*0.5)*2;
}
if (verfahren===32){
        vickersTiefe=(100-mittelwert)*0.002;
        dm=(vickersTiefe*0.5)*2;
 
}
if (verfahren===33){
    vickersTiefe=(100-mittelwert)*0.001;
    dm=(vickersTiefe*0.5)*2;

}
if (verfahren===34){
    vickersTiefe=(100-mittelwert)*0.001;
    dm=(vickersTiefe*0.5)*2;
}
if (verfahren===35){
    vickersTiefe=(100-mittelwert)*0.001;
    dm =(vickersTiefe*0.5)*2;
}


function hu(k,s,d){
    vickersTiefe=(k-mittelwert)*s;
    dm = Math.sqrt(d**2-(d-(2*vickersTiefe)**2));
    }  



if (verfahren===36){
    hu(130, 0.002, 1.5875);
}
if (verfahren===37){
  
    hu(130, 0.002, 3.175);
}
if (verfahren===38){

    hu(130, 0.002, 1.5875);
}
if (verfahren===39){
    hu(130, 0.002, 1.5875);  
}
if (verfahren===40){
    hu(130, 0.002, 3.175);
}
if (verfahren===41){
    hu(130, 0.002, 3.175); 
}
if (verfahren===42){
    hu(100, 0.001, 1.5875);

}
if (verfahren===43){
    hu(100, 0.001, 1.5875);
 
}
if (verfahren===44){
    hu(100, 0.001, 1.5875);

}












   
    setTimeout(remove, 3000);
    
   }

function remove(){
    if ($('.ausgabe').hasClass('textDrehen')) {
        $('.ausgabe').removeClass('textDrehen');
        $('.angabe').removeClass('textDrehen');
        $('.ausgabeKarte').removeClass('drehen');
     }
}
