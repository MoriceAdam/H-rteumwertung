

setTimeout(startremove, 3000);

function startremove(){
     $('.ausgabe').removeClass('starttextDrehen');
     $('.angabe').removeClass('starttextDrehen');
     $('.ausgabeKarte').removeClass('startdrehen');
  }




 verfahren= 0;
 anzahl = 1 ;
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
        $("#auswahlrm").click(function(){
            verfahren = 1;
           $("#aktuellesVerfahren").html("MPa");
        });
        $("#auswahlHV").click(function(){
            verfahren = 2;
           $("#aktuellesVerfahren").html("HV");
        });
        $("#auswahlhb").click(function(){
            verfahren = 3;
           $("#aktuellesVerfahren").html("HBW");
        });
        $("#auswahlhrb").click(function(){
            verfahren = 4;
           $("#aktuellesVerfahren").html("HRB");
        });
        $("#auswahlhrf").click(function(){
            verfahren = 5;
           $("#aktuellesVerfahren").html("HRF");
        });
        $("#auswahlhrc").click(function(){
            verfahren = 6;
           $("#aktuellesVerfahren").html("HRC");
        });
        $("#auswahlhra").click(function(){
            verfahren = 7;
           $("#aktuellesVerfahren").html("HRA");
        });
        $("#auswahlhrd").click(function(){
            verfahren = 8;
           $("#aktuellesVerfahren").html("HRD");
        });
        $("#auswahlhr15").click(function(){
            verfahren = 9;
           $("#aktuellesVerfahren").html("HR15N");
        });
        $("#auswahlhr30").click(function(){
            verfahren = 10;
           $("#aktuellesVerfahren").html("HR30N");
        });
        $("#auswahlhr45").click(function(){
            verfahren = 11;
           $("#aktuellesVerfahren").html("HR45N");

        });
      });

   

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
         
         mittel = a.toFixed(1);
       
     }
     ArrayAvg(eingabe);
    }


    function stabw(zahl21,zahl22, zahl23, zahl24, zahl25){
        
        eingabeS = [];
        if (zahl21>0){
          
      eingabeS.push( parseFloat(zahl21));
   }
   if (zahl22>0){
       eingabeS.push( parseFloat(zahl22));
    }
    if (zahl23>0){
       eingabeS.push( parseFloat(zahl23));
    }
    if (zahl24>0){
       eingabeS.push( parseFloat(zahl24));
    }
    if (zahl25>0){
       eingabeS.push( parseFloat(zahl25));
    }
      function ArrayStab(myArrayS){
          var iS = 0, summS = 0, ArrayLenS = myArrayS.length;
        
           while (iS < ArrayLenS) {
            wert= (myArrayS)[iS] 
            wert=(wert-mittel)**2;
             summS = summS + (wert);
             [iS++]
           }
           aS =  Math.sqrt(summS / (ArrayLenS-1));
           Stabw = aS.toFixed(1);
        }
       ArrayStab(eingabeS);
    }

    if (document.getElementById("start")) {
        
     document.getElementById("start").addEventListener("click",() => {
        $(".hvkarte").css('background-image', 'url(' + 'card.png' + ')');
        $(".hbkarte").css('background-image', 'url(' + 'card.png' + ')');
        $(".zugkarte").css('background-image', 'url(' + 'card.png' + ')');
        $(".hrbkarte").css('background-image', 'url(' + 'card.png' + ')');
        $(".hrfkarte").css('background-image', 'url(' + 'card.png' + ')');
        $(".hrakarte").css('background-image', 'url(' + 'card.png' + ')');
        $(".hrdkarte").css('background-image', 'url(' + 'card.png' + ')');
        $(".hr15nkarte").css('background-image', 'url(' + 'card.png' + ')');
        $(".hr30nkarte").css('background-image', 'url(' + 'card.png' + ')');
        $(".hr45nkarte").css('background-image', 'url(' + 'card.png' + ')');
        $(".hrckarte").css('background-image', 'url(' + 'card.png' + ')');

        document.getElementById("vickers").innerHTML = ("");
        document.getElementById("brinell").innerHTML = ("");
        document.getElementById("zug").innerHTML = ("");
        document.getElementById("hrb").innerHTML = ("");
        document.getElementById("hrf").innerHTML = ("");
        document.getElementById("hrc").innerHTML = ("");
        document.getElementById("hra").innerHTML = ("");
        document.getElementById("hrd").innerHTML = ("");
        document.getElementById("hr15n").innerHTML = ("");
        document.getElementById("hr30n").innerHTML = ("");
        document.getElementById("hr45n").innerHTML = ("");
        tabelleLöschen();


        zahl1 = document.getElementById("eingabe_1").value;
        zahl2 = document.getElementById("eingabe_2").value;
        zahl3 = document.getElementById("eingabe_3").value;
        zahl4 = document.getElementById("eingabe_4").value;
        zahl5 = document.getElementById("eingabe_5").value;
        mittelw(zahl1,zahl2,zahl3,zahl4,zahl5);
        $("#härtemittel").html(mittel);

        
        
        setTimeout(test(zahl1), 500);
        hv1 = hv;
        HB1 = HB;
        Rm1 = Rm;
        hrb1 = hrb;
        hrf1 = hrf;
        hrc1 = hrc;
        hra1 = hra;
        hrd1 = hrd;
        hr15n1 = hr15n;
        hr30n1 = hr30n;
        hr45n1 = hr45n;
    
        setTimeout(test(zahl2), 100);
        hv2 = hv;
        HB2 = HB;
        Rm2 = Rm;
        hrb2 = hrb;
        hrf2 = hrf;
        hrc2 = hrc;
        hra2 = hra;
        hrd2 = hrd;
        hr15n2 = hr15n
        hr30n2 = hr30n
        hr45n2 = hr45n

        setTimeout(test(zahl3), 100);
        hv3 = hv;
        HB3 = HB;
        Rm3 = Rm;
        hrb3 = hrb;
        hrf3 = hrf;
        hrc3 = hrc;
        hra3 = hra;
        hrd3 = hrd;
        hr15n3 = hr15n
        hr30n3 = hr30n
        hr45n3 = hr45n

        setTimeout(test(zahl4), 100);
        hv4 = hv;
        HB4 = HB;
        Rm4 = Rm;
        hrb4 = hrb;
        hrf4 = hrf;
        hrc4 = hrc;
        hra4 = hra;
        hrd4 = hrd;
        hr15n4 = hr15n
        hr30n4 = hr30n
        hr45n4 = hr45n
        
        setTimeout(test(zahl5), 100);
        hv5 = hv;
        HB5 = HB;
        Rm5 = Rm;
        hrb5 = hrb;
        hrf5 = hrf;
        hrc5 = hrc;
        hra5 = hra;
        hrd5 = hrd;
        hr15n5 = hr15n
        hr30n5 = hr30n
        hr45n5 = hr45n
        
        
        mittelw(hv1,hv2,hv3,hv4,hv5);
        document.getElementById("vickers").innerHTML = Math.round(mittel);
        stabw(hv1,hv2,hv3,hv4,hv5);
        document.getElementById("vickersS").innerHTML = ("&#177 "+Stabw);
        mittelw(HB1,HB2,HB3,HB4,HB5);
        document.getElementById("brinell").innerHTML = Math.round(mittel);
        stabw(HB1,HB2,HB3,HB4,HB5);
        document.getElementById("brinellS").innerHTML = ("&#177 "+Stabw);
        mittelw(Rm1,Rm2,Rm3,Rm4,Rm5);
        document.getElementById("zug").innerHTML = Math.round(mittel);
        stabw(Rm1,Rm2,Rm3,Rm4,Rm5);
        document.getElementById("zugS").innerHTML = ("&#177 "+Stabw);
        mittelw(hrb1,hrb2,hrb3,hrb4,hrb5);
        document.getElementById("hrb").innerHTML = (mittel);
        stabw(hrb1,hrb2,hrb3,hrb4,hrb5);
        document.getElementById("hrbS").innerHTML = ("&#177 "+Stabw);
        mittelw(hrf1,hrf2,hrf3,hrf4,hrf5);
        document.getElementById("hrf").innerHTML = (mittel);
        stabw(hrf1,hrf2,hrf3,hrf4,hrf5);
        document.getElementById("hrfS").innerHTML = ("&#177 "+Stabw);
        mittelw(hrc1,hrc2,hrc3,hrc4,hrc5);
        document.getElementById("hrc").innerHTML = (mittel);
        stabw(hrc1,hrc2,hrc3,hrc4,hrc5);
        document.getElementById("hrcS").innerHTML = ("&#177 "+Stabw);
        mittelw(hra1,hra2,hra3,hra4,hra5);
        document.getElementById("hra").innerHTML = (mittel);
        stabw(hra1,hra2,hra3,hra4,hra5);
        document.getElementById("hraS").innerHTML = ("&#177 "+Stabw);
        mittelw(hrd1,hrd2,hrd3,hrd4,hrd5);
        document.getElementById("hrd").innerHTML = (mittel);
        stabw(hrd1,hrd2,hrd3,hrd4,hrd5);
        document.getElementById("hrdS").innerHTML = ("&#177 "+Stabw);
        mittelw(hr15n1,hr15n2,hr15n3,hr15n4,hr15n5);
        document.getElementById("hr15n").innerHTML = (mittel);
        stabw(hr15n1,hr15n2,hr15n3,hr15n4,hr15n5);
        document.getElementById("hr15nS").innerHTML = ("&#177 "+Stabw);
        mittelw(hr30n1,hr30n2,hr30n3,hr30n4,hr30n5);
        document.getElementById("hr30n").innerHTML = (mittel);
        stabw(hr30n1,hr30n2,hr30n3,hr30n4,hr30n5);
        document.getElementById("hr30nS").innerHTML = ("&#177 "+Stabw);
        mittelw(hr45n1,hr45n2,hr45n3,hr45n4,hr45n5);
        document.getElementById("hr45n").innerHTML = (mittel);
        stabw(hr45n1,hr45n2,hr45n3,hr45n4,hr45n5);
        document.getElementById("hr45nS").innerHTML = ("&#177 "+Stabw);
        



  
       

        document.getElementById("ZUG1").innerHTML = Math.round(Rm1);
        document.getElementById("HV1").innerHTML = Math.round(hv1);
        document.getElementById("HB1").innerHTML = Math.round(HB1);
        document.getElementById("HRB1").innerHTML = (hrb1);
        document.getElementById("HRF1").innerHTML = (hrf1);
        document.getElementById("HRC1").innerHTML = (hrc1).toFixed(1);
        document.getElementById("HRA1").innerHTML = (hra1).toFixed(1);
        document.getElementById("HRD1").innerHTML = (hrd1).toFixed(1);
        document.getElementById("HR15N1").innerHTML = (hr15n1).toFixed(1);
        document.getElementById("HR30N1").innerHTML = (hr30n1).toFixed(1);
        document.getElementById("HR45N1").innerHTML = (hr45n1).toFixed(1);
        
        document.getElementById("ZUG2").innerHTML = Math.round(Rm2);
        document.getElementById("HV2").innerHTML = Math.round(hv2);
        document.getElementById("HB2").innerHTML = Math.round(HB2);
        document.getElementById("HRB2").innerHTML = Math.round(hrb2);
        document.getElementById("HRF2").innerHTML = Math.round(hrf2);
        document.getElementById("HRC2").innerHTML = Math.round(hrc2);
        document.getElementById("HRA2").innerHTML = Math.round(hra2);
        document.getElementById("HRD2").innerHTML = Math.round(hrd2);
        document.getElementById("HR15N2").innerHTML = Math.round(hr15n2);
        document.getElementById("HR30N2").innerHTML = Math.round(hr30n2);
        document.getElementById("HR45N2").innerHTML = Math.round(hr45n2);
        
        document.getElementById("ZUG3").innerHTML = Math.round(Rm3);
        document.getElementById("HV3").innerHTML = Math.round(hv3);
        document.getElementById("HB3").innerHTML = Math.round(HB3);
        document.getElementById("HRB3").innerHTML = Math.round(hrb3);
        document.getElementById("HRF3").innerHTML = Math.round(hrf3);
        document.getElementById("HRC3").innerHTML = Math.round(hrc3);
        document.getElementById("HRA3").innerHTML = Math.round(hra3);
        document.getElementById("HRD3").innerHTML = Math.round(hrd3);
        document.getElementById("HR15N3").innerHTML = Math.round(hr15n3);
        document.getElementById("HR30N3").innerHTML = Math.round(hr30n3);
        document.getElementById("HR45N3").innerHTML = Math.round(hr45n3);
        
        document.getElementById("ZUG4").innerHTML = Math.round(Rm4);
        document.getElementById("HV4").innerHTML = Math.round(hv4);
        document.getElementById("HB4").innerHTML = Math.round(HB4);
        document.getElementById("HRB4").innerHTML = Math.round(hrb4);
        document.getElementById("HRF4").innerHTML = Math.round(hrf4);
        document.getElementById("HRC4").innerHTML = Math.round(hrc4);
        document.getElementById("HRA4").innerHTML = Math.round(hra4);
        document.getElementById("HRD4").innerHTML = Math.round(hrd4);
        document.getElementById("HR15N4").innerHTML = Math.round(hr15n4);
        document.getElementById("HR30N4").innerHTML = Math.round(hr30n4);
        document.getElementById("HR45N4").innerHTML = Math.round(hr45n4);

        document.getElementById("ZUG5").innerHTML = Math.round(Rm5);
        document.getElementById("HV5").innerHTML = Math.round(hv5);
        document.getElementById("HB5").innerHTML = Math.round(HB5);
        document.getElementById("HRB5").innerHTML = Math.round(hrb5);
        document.getElementById("HRF5").innerHTML = Math.round(hrf5);
        document.getElementById("HRC5").innerHTML = Math.round(hrc5);
        document.getElementById("HRA5").innerHTML = Math.round(hra5);
        document.getElementById("HRD5").innerHTML = Math.round(hrd5);
        document.getElementById("HR15N5").innerHTML = Math.round(hr15n5);
        document.getElementById("HR30N5").innerHTML = Math.round(hr30n5);
        document.getElementById("HR45N5").innerHTML = Math.round(hr45n5);
    });
    }
   


   

//Umwertung

   function test(mittelwert) {





    if (verfahren===0){
        alert('Wählen die ein Verfahren aus.')
    }

    if(verfahren>0){
      

$(".angabe").addClass("textDrehen");
 $(".ausgabe").addClass("textDrehen");
 $(".ausgabeKarte").addClass("drehen");
  // Vikers
  Rm= 0;
  hv=0;
  HB=0;
  hrb=0;
  hra=0;
  hrf=0;
  hrc=0;
  hrd=0;
  hr15n=0;
  hr30n=0;
  hr45n=0;
if(verfahren===2){
  Rm= 0;

    
     hv = (mittelwert);

    if (mittelwert>=80 && mittelwert<=650){
         Rm = Math.round(-0.000000000000033051023081579100*mittelwert**6 + 0.000000000055199584611145400000*mittelwert**5 - 0.000000031702112824172500000000*mittelwert**4 + 0.000007881369833892620000000000*mittelwert**3 - 0.000808699350075553000000000000*mittelwert**2 + 3.239441381257880000000000000000*mittelwert - 1.901332866049050000000000000000);
    }
    else {
        if (mittelwert!=0){
        $(".zugkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}
        
    }
    
    if (mittelwert>=80 && mittelwert<=650){
         HB = Math.round(-0.000000000000001761444212250190*mittelwert**6 + 0.000000000004036184839453120000*mittelwert**5 - 0.000000003594298337857430000000*mittelwert**4 + 0.000001563601496185270000000000*mittelwert**3 - 0.000342989401280058000000000000*mittelwert**2 + 0.985827873333358000000000000000*mittelwert - 1.346145272750010000000000000000);        
    }
    else {
        if (mittelwert!=0){
        $(".hbkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}
        
    }
    if (mittelwert>=85 && mittelwert<=290){
         hrb = (-0.000000000012588708734624700000*mittelwert**6 + 0.000000014941375262332800000000*mittelwert**5 - 0.000007230799434550590000000000*mittelwert**4 + 0.001828932137286380000000000000*mittelwert**3 - 0.256613558225974000000000000000*mittelwert**2 + 19.392304645642100000000000000000*mittelwert - 559.899363867060000000000000000000);
    }
    else {
        if (mittelwert!=0){
        $(".hrbkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}
       
    }
    if (mittelwert>=90 && mittelwert<=250){    
         hrf = (-0.000000000011164848993244800000*mittelwert**6 + 0.000000011874739250933300000000*mittelwert**5 - 0.000005161613629735620000000000*mittelwert**4 + 0.001174665228559580000000000000*mittelwert**3 - 0.148757713166904000000000000000*mittelwert**2 + 10.277913513324900000000000000000*mittelwert - 219.276950499477000000000000000000);
    }
    else {
        if (mittelwert!=0){
        $(".hrfkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}
        
    }
    if (mittelwert>=240 && mittelwert<=940){
         hrc = (-0.000000000000001310317964033520*mittelwert**6 + 0.000000000004795781031590630000*mittelwert**5 - 0.000000007219355283232990000000*mittelwert**4 + 0.000005801106395051900000000000*mittelwert**3 - 0.002734227623276840000000000000*mittelwert**2 + 0.811591942224873000000000000000*mittelwert - 76.533188311938000000000000000000);
    }
    else {
        if (mittelwert!=0){
        $(".hrckarte").css('background-image', 'url(' + 'cardblue.png' + ')');}
       
    }
    if (mittelwert>=240 && mittelwert<=940){
         hra = (-0.000000000000000244904996709707*mittelwert**6 + 0.000000000000879133796817072000*mittelwert**5 - 0.000000001303940482682380000000*mittelwert**4 + 0.000001060308201033440000000000*mittelwert**3 - 0.000553634821561067000000000000*mittelwert**2 + 0.220213370893433000000000000000*mittelwert + 28.874922725158600000000000000000);
        }
        else {
            if (mittelwert!=0){
            $(".hrakarte").css('background-image', 'url(' + 'cardblue.png' + ')');}
            
        }
    if (mittelwert>=240 && mittelwert<=940){
         hrd  = (-0.000000000000000840225344904784*mittelwert**6 + 0.000000000003084662750907860000*mittelwert**5 - 0.000000004673717131439220000000*mittelwert**4 + 0.000003803571519740030000000000*mittelwert**3 - 0.001836676657090500000000000000*mittelwert**2 + 0.569225667049665000000000000000*mittelwert - 29.740289367700700000000000000000);                           
    }
    else {
        if (mittelwert!=0){
        $(".hrdkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}
        
    }
    if (mittelwert>=240 && mittelwert<=940){
         hr15n = (-0.000000000000000546499869785729*mittelwert**6 + 0.000000000002122985512717510000*mittelwert**5 - 0.000000003411469317539140000000*mittelwert**4 + 0.000002938147732083380000000000*mittelwert**3 - 0.001485645095386760000000000000*mittelwert**2 + 0.462237183577348000000000000000*mittelwert + 13.440222247291900000000000000000);
    }
    else {
        if (mittelwert!=0){
        $(".hr15nkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}
        
    }

    if (mittelwert>=240 && mittelwert<=940){
         hr30n = (-0.000000000000001042082098574570*mittelwert**6 + 0.000000000003804472741526960000*mittelwert**5 - 0.000000005740850134215050000000*mittelwert**4 + 0.000004654170435654270000000000*mittelwert**3 - 0.002235236498448350000000000000*mittelwert**2 + 0.685850157105378000000000000000*mittelwert - 42.074932287753700000000000000000);                  
    }
    else {
        if (mittelwert!=0){
        $(".hr30nkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}
       
    }

    if (mittelwert>=240 && mittelwert<=940){             
         hr45n = (-0.000000000000001635883204360230*mittelwert**6 + 0.000000000006044938375694170000*mittelwert**5 - 0.000000009129329550657920000000*mittelwert**4 + 0.000007298981901001080000000000*mittelwert**3 - 0.003393344924137850000000000000*mittelwert**2 + 0.986411643233487000000000000000*mittelwert - 96.154936260970500000000000000000);
    
    } 
    else {
        if (mittelwert!=0){
        $(".hr45nkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}
    
    }
}
        

 // Vikers ende


 //Brinell

 if(verfahren===3){
    
    
   HB = (mittelwert);
   

    if (mittelwert>=76 && mittelwert<=618){
        Rm = Math.round(3.3852*mittelwert - 2.2772);
    }
    else {
        if (mittelwert!=0){
        $(".zugkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}  
    }
    

    if (mittelwert>=76 && mittelwert<=618){
        hv = Math.round(1.052*mittelwert + 0.0261);
    }
    else {
        if (mittelwert!=0){
        $(".hvkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}
        
    }

    if (mittelwert>=80.7 && mittelwert<=267){
        hrb = (-0.000000000017013632325964000000*mittelwert**6 + 0.000000019166447810824000000000*mittelwert**5 - 0.000008802390389543740000000000*mittelwert**4 + 0.002112607973565500000000000000*mittelwert**3 - 0.281262366020033000000000000000*mittelwert**2 + 20.177269186655300000000000000000*mittelwert - 552.744643182022000000000000000000);                  
    }
    else {
        if (mittelwert!=0){
        $(".hrbkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}
        
    }

    if (mittelwert>=85.5 && mittelwert<=238){
        hrf = (-0.000000000015976505158098800000*mittelwert**6 + 0.000000016070913147451100000000*mittelwert**5 - 0.000006604659621539860000000000*mittelwert**4 + 0.001420449767354410000000000000*mittelwert**3 - 0.169871711727337000000000000000*mittelwert**2 + 11.069346117913700000000000000000*mittelwert - 224.001113440629000000000000000000);                   
           
    }
    else {
        if (mittelwert!=0){
        $(".hrfkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}
        
    }

    if (mittelwert>=228 && mittelwert<=618){
         hrc = (-0.000000000000060441261518669800*mittelwert**6 + 0.000000000161208071929281000000*mittelwert**5 - 0.000000176012319110189000000000*mittelwert**4 + 0.000100721403486961000000000000*mittelwert**3 - 0.032011942029524500000000000000*mittelwert**2 + 5.498916098009250000000000000000*mittelwert - 378.374250208658000000000000000000); 
        
    }
    else {
        if (mittelwert!=0){
        $(".hrckarte").css('background-image', 'url(' + 'cardblue.png' + ')');}
        
    }

    if (mittelwert>=228 && mittelwert<=618){
         hra = (-0.000000000000015701879231970600*mittelwert**6 + 0.000000000042273459687221300000*mittelwert**5 - 0.000000046534555479433900000000*mittelwert**4 + 0.000026815672005708100000000000*mittelwert**3 - 0.008600133462517920000000000000*mittelwert**2 + 1.526356479912400000000000000000*mittelwert - 56.140025838083200000000000000000);
             
    }
    else {
        if (mittelwert!=0){
        $(".hrakarte").css('background-image', 'url(' + 'cardblue.png' + ')');}
        
    }

    if (mittelwert>=228 && mittelwert<=618){
        hrd  = (-0.000000000000042556920053539900*mittelwert**6 + 0.00000000011199241265739700*mittelwert**5 - 0.0000001207398667538030*mittelwert**4 + 0.00006831355425155590*mittelwert**3 - 0.0215224999386154000*mittelwert**2 + 3.6907819029228100*mittelwert - 228.8396867960290);
                   
    }
    else {
        if (mittelwert!=0){
        $(".hrdkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}
        
    }

    if (mittelwert>=228 && mittelwert<=618){
        hr15n = (-0.00000000000004013908262085790*mittelwert**6 + 0.00000000010569748633693700*mittelwert**5 - 0.0000001139702503711870*mittelwert**4 + 0.00006445680237702360*mittelwert**3 - 0.0202704024679990*mittelwert**2 + 3.440711921923990*mittelwert - 176.7012918773490);
                
    }
    else {
        if (mittelwert!=0){
        $(".hr15nkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}
        
    }
   

    if (mittelwert>=228 && mittelwert<=618){
        hr30n = (-0.000000000000053241343622322200*mittelwert**6 + 0.0000000001415692228750420*mittelwert**5 - 0.000000154085423845213000*mittelwert**4 + 0.00008790615721105020*mittelwert**3 - 0.027867989773465100000000000000*mittelwert**2 + 4.783518574815020000000000000000*mittelwert - 305.577906922050);
               
        }
        else {
            if (mittelwert!=0){
            $(".hr30nkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}  
        }

    if (mittelwert>=228 && mittelwert<=618){
         hr45n = (-0.000000000000075105396879473900*mittelwert**6 + 0.00000000019884630492573100*mittelwert**5 - 0.00000021565111789656900*mittelwert**4 + 0.0001226376433926880*mittelwert**3 - 0.03874418201464310*mittelwert**2 + 6.613664896652660*mittelwert - 456.7154427258190);
   
    }
    else {
        if (mittelwert!=0){
        $(".hr45nkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}
        
    }
}

      //Zugvestigkeit

 if(verfahren===1){
    
        Rm = Math.round(mittelwert);
        
       
    if (mittelwert>=255 && mittelwert<=2180){
         HB = Math.round(0.00000000000000000017818161865685500*mittelwert**6 + 0.00000000000000983916799621997000000*mittelwert**5 - 0.00000000005925148798145150*mittelwert**4 + 0.0000001157213206566270*mittelwert**3 - 0.0000977591929463020*mittelwert**2 + 0.331248792857050*mittelwert - 3.870894913761230);      
    }
    else {
        if (mittelwert!=0){
        $(".hbkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}
        
    }

    if (mittelwert>=255 && mittelwert<=2180){
         hv = Math.round(0.0000000000000000013334510635530500*mittelwert**6 + 0.0000000000000016960199594158100000*mittelwert**5 - 0.00000000003704490082476830*mittelwert**4 + 0.00000008587971231846330*mittelwert**3 - 0.00007743713397164270*mittelwert**2 + 0.3401382733583750*mittelwert - 3.0590975566261600  );       
    }
    else {
        if (mittelwert!=0){
        $(".hvkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}
        
    }

    if (mittelwert>=270 && mittelwert<=930){
        hrb = (-0.000000000000010130831737181500*mittelwert**6 + 0.000000000038429332306144800000*mittelwert**5 - 0.000000059445004570997700000000*mittelwert**4 + 0.000048093597858391100000000000*mittelwert**3 - 0.021627896785724200000000000000*mittelwert**2 + 5.268944260893220*mittelwert - 486.0576185484590);                    
        }
        else {
            if (mittelwert!=0){
            $(".hrbkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}
            
        }

    if (mittelwert>=285 && mittelwert<=800){
        hrf =(-0.000000000000007033132956586500*mittelwert**6 + 0.000000000023881880759343300000*mittelwert**5 - 0.000000033086721818106400000000*mittelwert**4 + 0.000023989080034141600000000000*mittelwert**3 - 0.009720081664110000000000000000*mittelwert**2 + 2.1942546893361100*mittelwert - 131.485230465994000000000000000000);                   
    }
    else {
        if (mittelwert!=0){
        $(".hrfkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}
        
    }

    if (mittelwert>=770 && mittelwert<=2180){
        hrc = (-0.00000000000000003504956042705190*mittelwert**6 + 0.00000000000031981348552555800000*mittelwert**5 - 0.000000001191057515592280*mittelwert**4 + 0.000002318834160341830*mittelwert**3 - 0.00250438846738950*mittelwert**2 + 1.4652445265212300*mittelwert - 342.23512737504400000000000000000000);                    
    }
    else {
        if (mittelwert!=0){
        $(".hrckarte").css('background-image', 'url(' + 'cardblue.png' + ')');}  
    }

    if (mittelwert>=770 && mittelwert<=2180){
        hra =(-0.000000000000000011107878824194*mittelwert**6 + 0.000000000000100866508060033000*mittelwert**5 - 0.0000000003729895680335340*mittelwert**4 + 0.0000007193504441000920*mittelwert**3 - 0.0007701526142219690*mittelwert**2 + 0.4556099508108520*mittelwert - 55.7181221369558000);                     
        
    }
    else {
        if (mittelwert!=0){
        $(".hrakarte").css('background-image', 'url(' + 'cardblue.png' + ')');}     
    }

  if (mittelwert>=770 && mittelwert<=2180){
        hrd  =(-0.000000000000000023680374589808500*mittelwert**6 + 0.0000000000002137591432454420*mittelwert**5 - 0.0000000007877561277826060*mittelwert**4 + 0.000001518939475199690*mittelwert**3 - 0.001628998372720740*mittelwert**2 + 0.9546952294638570*mittelwert - 198.40120632091100);               
       
    }
    else {
        if (mittelwert!=0){
        $(".hrdkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}
        
    }

  if (mittelwert>=770 && mittelwert<=2180){
        hr15n =(-0.000000000000000021737066924124800*mittelwert**6 + 0.000000000000196729369749238000000*mittelwert**5 - 0.000000000727087059462238000000000*mittelwert**4 + 0.000001406237180681080000000000000*mittelwert**3 - 0.001511177334033670000000000000000*mittelwert**2 + 0.8794073912112360*mittelwert - 146.72012191372700);
        
    }
    else {
        if (mittelwert!=0){
        $(".hr15nkarte").css('background-image', 'url(' + 'cardblue.png' + ')');} 
    }
    
  if (mittelwert>=770 && mittelwert<=2180){
        hr30n = (-0.000000000000000031331567248111800*mittelwert**6 + 0.0000000000002849653084456420*mittelwert**5 - 0.000000001057671766625920*mittelwert**4 + 0.000002052087150817990*mittelwert**3 - 0.0022093807661825400*mittelwert**2 + 1.290389962328070*mittelwert - 277.5947028335090);
       
    }
    else {
        if (mittelwert!=0){
        $(".hr30nkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}
        
    }
    
    if (mittelwert>=770 && mittelwert<=2180){
        hr45n = (-0.000000000000000041896919380635200*mittelwert**6 + 0.0000000000003806380033953660*mittelwert**5 - 0.000000001412000906503770*mittelwert**4 + 0.000002738917971777630*mittelwert**3 - 0.002947758388833720*mittelwert**2 + 1.71919094593410*mittelwert - 404.4032465323060);
        
    }
    else {
        if (mittelwert!=0){
        $(".hr45nkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}  
    }
   
            }

 // hrb   
 

if(verfahren===4){
    
    

    hrb = (mittelwert);

    if (mittelwert>=41 && mittelwert<=105){
         Rm = Math.round(-0.00000009924051938559*mittelwert**6 + 0.00004272606266891850*mittelwert**5 - 0.00747745037818112000*mittelwert**4 + 0.68166940068703300000*mittelwert**3 - 34.06125331396050000000*mittelwert**2 + 886.17981961053400000000*mittelwert - 9137.47351380143000000000);    
    }
    else {
        if (mittelwert!=0){
        $(".zugkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}  
    }

    if (mittelwert>=41 && mittelwert<=105){
         hv = Math.round(-0.000000034764855520383300*mittelwert**6 + 0.000015047694975029600000*mittelwert**5 - 0.002649540221023510000000*mittelwert**4 + 0.243114600104053000000000*mittelwert**3 - 12.233034533255500000000000*mittelwert**2 + 320.496778773760000000000000*mittelwert - 3338.748023587100000000000000);        
    }
    else {
        if (mittelwert!=0){
        $(".hvkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}
        
    }

    if (mittelwert>=41 && mittelwert<=105){
         HB = Math.round(-0.0000000329192592733729000*mittelwert**6 + 0.0000142362908679486000000*mittelwert**5 - 0.0025039012263717200000000*mittelwert**4 + 0.2294495353747510000000000*mittelwert**3 - 11.5281292033732000000000000*mittelwert**2 + 301.5429697626570000000000000*mittelwert - 3135.3611630513700000000000000);
    }
    else {
        if (mittelwert!=0){
        $(".hbkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}
        
    }

    if (mittelwert>=48 && mittelwert<=99.5){ 
         hrf = (-0.0000000091876641433730200*mittelwert**6 + 0.0000040966273431308800000*mittelwert**5 - 0.0007524539344565540000000*mittelwert**4 + 0.0727774222841617000000000*mittelwert**3 - 3.9025901693085000000000000*mittelwert**2 + 110.4240984803470000000000000*mittelwert - 1211.8657626930900000000000000);
    }
    else {
        if (mittelwert!=0){
        $(".hrfkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}
        
    }


    if (mittelwert>=89.1 && mittelwert<=105){
         hrc = (-0.00075012016816344800*mittelwert**6 + 0.46256780744058700000*mittelwert**5 - 118.81638669851600000000*mittelwert**4 + 16272.15926637340000000000*mittelwert**3 - 1253162.152601680000*mittelwert**2 + 51456506.93411000000*mittelwert - 880107647.53229300);  
    }
    else {
        if (mittelwert!=0){
        $(".hrckarte").css('background-image', 'url(' + 'cardblue.png' + ')');}  
    }


    if (mittelwert>=89.1 && mittelwert<=105){
         hra = (-0.00031730139176033800*mittelwert**6 + 0.19586675761715900000*mittelwert**5 - 50.36177824802780000000*mittelwert**4 + 6904.06369382052000000000*mittelwert**3 - 532227.79792692600000000000*mittelwert**2 + 21875466.99249400000000000000*mittelwert - 374520711.61945700000000000000);
        }
        else {
            if (mittelwert!=0){
            $(".hrakarte").css('background-image', 'url(' + 'cardblue.png' + ')');}     
        }

    if (mittelwert>=89.1 && mittelwert<=105){
         hrd  = (-0.00161701566287320000*mittelwert**6 + 0.99104204742041000000*mittelwert**5 - 253.03711295854900000000*mittelwert**4 + 34450.90660601150000000000*mittelwert**3 - 2637941.82975970000000000000*mittelwert**2 + 107709536.58636200000000000000*mittelwert - 1832135440.62031000000000000000);                              
    }
    else {
        if (mittelwert!=0){
        $(".hrdkarte").css('background-image', 'url(' + 'cardblue.png' + ')');} 
    }


    if (mittelwert>=89.1 && mittelwert<=105){
         hr15n = (-0.00052091113957430900*mittelwert**6 + 0.32075202531359500000*mittelwert**5 - 82.27066878432220000000*mittelwert**4 + 11251.26853963900000000000*mittelwert**3 - 865293.80579458900000000000*mittelwert**2 + 35482036.53656550000000000000*mittelwert - 606076299.65920500000000000000);
 
    } 
     else {
        if (mittelwert!=0){
        $(".hr15nkarte").css('background-image', 'url(' + 'cardblue.png' + ')');} 
    }


    if (mittelwert>=89.1 && mittelwert<=105){
         hr30n = (-0.00003720752454228200*mittelwert**6 + 0.02695864001727840000*mittelwert**5 - 7.92721060011229000000*mittelwert**4 + 1219.17225354922000000000*mittelwert**3 - 103894.00715385400000000000*mittelwert**2 + 4665608.81305836000000000000*mittelwert - 86450835.13955310000000000000 );                  
          
    }
    else {
        if (mittelwert!=0){
        $(".hr30nkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}  
    }

    if (mittelwert>=89.1 && mittelwert<=105){           
         hr45n = (-0.00085015746185490600*mittelwert**6 + 0.52476181092774800000*mittelwert**5 - 134.91867028525500000000*mittelwert**4 + 18494.42120590080000000000*mittelwert**3 - 1425587.76850123000000000000*mittelwert**2 + 58588142.36017110000000000000*mittelwert - 1002951353.13085000000000000000 );   
    }
    else {
        if (mittelwert!=0){
        $(".hr45nkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}  
    }

}
   

//hrf


if(verfahren===5){
  
hrf = (mittelwert);

    if (mittelwert>=82.6 && mittelwert<=115.1){
        Rm = Math.round(-0.0000011778638204784600000*mittelwert**6 + 0.0007062331271058930000000*mittelwert**5 - 0.1754198577252370000000000*mittelwert**4 + 23.1162666603234000000000000*mittelwert**3 - 1705.0000726512000000000000000*mittelwert**2 + 66759.9115144510*mittelwert - 1084277.3638577200000000000000000);
    }
    else {
        if (mittelwert!=0){
        $(".zugkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}  
    }

    if (mittelwert>=82.6 && mittelwert<=115.1){
         hv = Math.round(-0.0000000928570514924232000*mittelwert**6 + 0.0000578916615159297000000*mittelwert**5 - 0.0147733970483465000000000*mittelwert**4 + 1.9812405502709800000000000*mittelwert**3 - 147.5268876434160000000000000*mittelwert**2 + 5791.4713362631200000000000000*mittelwert - 93694.5121010391000000000000000   );        
    }
    else {
        if (mittelwert!=0){
        $(".hvkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}  
    }


    if (mittelwert>=82.6 && mittelwert<=115.1){
        HB = (-0.0000000023892089417998400*mittelwert**6 + 0.0000041431810604120000000*mittelwert**5 - 0.0015070574309620700000000*mittelwert**4 + 0.2399552582042150000000000*mittelwert**3 - 19.3405229447526000000000000*mittelwert**2 + 773.3520536907980000000000000*mittelwert - 12085.0964561572000000000000000 ); 
    }
    else {
        if (mittelwert!=0){
        $(".hbkarte").css('background-image', 'url(' + 'cardblue.png' + ')');} 
    }


    if (mittelwert>=82.6 && mittelwert<=115.1){   
         hrb = (0.0000002087684745077920000*mittelwert**6 - 0.0001238137336599720000000*mittelwert**5 + 0.0305119692866040000000000*mittelwert**4 - 3.9987601694039500000000000*mittelwert**3 + 293.8989675314120000000000000*mittelwert**2 - 11482.6139337854000000000000000*mittelwert + 186280.2840884630000000000000000);
    }
    else {
        if (mittelwert!=0){
        $(".hrbkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}  
    }
  

    if (mittelwert>=114.3 && mittelwert<=115.1){
         hrc = (-0.31250000000022700000*mittelwert**2 + 74.06250000005220000000*mittelwert - 4362.39062500300000000000);
    }
    else {
        if (mittelwert!=0){
        $(".hrckarte").css('background-image', 'url(' + 'cardblue.png' + ')');}  
    }
  

    if (mittelwert>=114.3 && mittelwert<=115.1){
         hra = (-0.31250000000045500000*mittelwert**2 + 72.81250000010490000000*mittelwert - 4179.11562500604000000000);
        }
        else {
            if (mittelwert!=0){
            $(".hrakarte").css('background-image', 'url(' + 'cardblue.png' + ')');}     
        }


    if (mittelwert>=114.3 && mittelwert<=115.1){
         hrd  = (-0.62500000000022700000*mittelwert**2 + 145.12500000005200000000*mittelwert - 8382.18125000302000000000);                              
    }
    else {
        if (mittelwert!=0){
        $(".hrdkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}
        
    }


    if (mittelwert>=114.3 && mittelwert<=115.1){
        hr15n = (-0.00000000000045474735*mittelwert**2 + 1.25000000010441000000*mittelwert - 73.27500000599300000000 );
    }
    else {
        if (mittelwert!=0){
        $(".hr15nkarte").css('background-image', 'url(' + 'cardblue.png' + ')');} 
    }
 

    if (mittelwert>=114.3 && mittelwert<=115.1){
         hr30n = (0.31250000000000000000*mittelwert**2 - 69.56249999999980000000*mittelwert + 3910.04062499997000000000);                  
    }
    else {
        if (mittelwert!=0){
        $(".hr30nkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}  
    }


    if (mittelwert>=114.3 && mittelwert<=115.1){             
        hr45n = (-0.31250000000000000000*mittelwert**2 + 74.56250000000010000000*mittelwert - 4419.94062500001000000000 ); 
    }
    else {
        if (mittelwert!=0){
        $(".hr45nkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}  
    }

}



//hrc
if(verfahren===6){
  
hrc = (mittelwert);

    if (mittelwert>=20.3 && mittelwert<=57.8){
     Rm = Math.round(-0.0000012517370246989400000*mittelwert**6 + 0.0002707561901430290000000*mittelwert**5 - 0.0230953897593225000000000*mittelwert**4 + 0.9941358666394190000000000*mittelwert**3 - 22.2707524350533000000000000*mittelwert**2 + 258.2154965544690000000000000*mittelwert - 533.3744520940140000000000000);
    }
    
    else {
        if (mittelwert!=0){
        $(".zugkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}  
    }

    if (mittelwert>=20.3 && mittelwert<=57.8){
       HB = Math.round(-0.0000003301324251747670000*mittelwert**6 + 0.0000734466416238089000000*mittelwert**5 - 0.0064974799791218600000000*mittelwert**4 + 0.2924812273721640000000000*mittelwert**3 - 6.9304228516308100000000000*mittelwert**2 + 86.1219044974385000000000000*mittelwert - 237.3317822221780000000000000);        
    }
    else {
        if (mittelwert!=0){
        $(".hbkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}   
    }

    if (mittelwert>=20.3 && mittelwert<=28.5){
         hrb = (-0.0000927422461245442000000*mittelwert**6 + 0.0114159200751601000000000*mittelwert**5 - 0.5639300439636830000000000*mittelwert**4 + 14.0673350195125000000000000*mittelwert**3 - 180.5185604403210000000000000*mittelwert**2 + 1033.4238814901200000000000000*mittelwert - 1268.2643177404800000000000000);  
    }
    else {
        if (mittelwert!=0){
        $(".hrbkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}  
    }

    if (mittelwert>=20.3 && mittelwert<=22.2){    
         hrf = (0.02339181286549770000*mittelwert**2 - 0.57309941520450100000*mittelwert + 116.29438596490900000000 );    
    }
    else {
        if (mittelwert!=0){
        $(".hrfkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}
        
    }

    if (mittelwert>=20.3 && mittelwert<=68){
         hv = Math.round(0.0000002862847575807460000*mittelwert**6 - 0.0000737619927113881000000*mittelwert**5 + 0.0078180256475409600000000*mittelwert**4 - 0.4317522298912240000000000*mittelwert**3 + 13.1458641280814000000000000*mittelwert**2 - 202.3610341731010000000000000*mittelwert + 1450.8661637450900000000000000 );
    }

    else {
        if (mittelwert!=0){
        $(".hvkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}
        
    }


    if (mittelwert>=20.3 && mittelwert<=68){
         hra = (0.0000000032245758372490000*mittelwert**6 - 0.0000008828139832623570000*mittelwert**5 + 0.0000982552263398682000000*mittelwert**4 - 0.0057015886824588400000000*mittelwert**3 + 0.1832711594692390000000000*mittelwert**2 - 2.6050352402801200000000000*mittelwert + 71.9515571252594000000000000);
        }
        else {
            if (mittelwert!=0){
            $(".hrakarte").css('background-image', 'url(' + 'cardblue.png' + ')');}     
        }

    if (mittelwert>=20.3 && mittelwert<=68){
        hrd  = (0.0000000028357291133318500*mittelwert**6 - 0.0000007918173716293940000*mittelwert**5 + 0.0000901040978708896000000*mittelwert**4 - 0.0053326350368408000000000*mittelwert**3 + 0.1725118044967460000000000*mittelwert**2 - 2.1126367941606700000000000*mittelwert + 43.9596336767936000000000000  );                                
    }
    else {
        if (mittelwert!=0){
        $(".hrdkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}
        
    }

    if (mittelwert>=20.3 && mittelwert<=68){
         hr15n = (-0.0000000003161456305078580*mittelwert**6 + 0.0000000076115880862093200*mittelwert**5 + 0.0000065100626979421700000*mittelwert**4 - 0.0007357120866993290000000*mittelwert**3 + 0.0313919223086345000000000*mittelwert**2 - 0.0279066813954568000000000*mittelwert + 62.2377782955156000000000000 );
    }
    else {
        if (mittelwert!=0){
        $(".hr15nkarte").css('background-image', 'url(' + 'cardblue.png' + ')');} 
    }


    if (mittelwert>=20.3 && mittelwert<=68){
        hr30n = (-0.0000000019837187916621500*mittelwert**6 + 0.0000004630932396870040000*mittelwert**5 - 0.0000430728465656013000000*mittelwert**4 + 0.0020235532440984700000000*mittelwert**3 - 0.0500595135167445000000000*mittelwert**2 + 1.5130704313237800000000000*mittelwert + 20.5168366985518000000000000 );                  
    }
    else {
        if (mittelwert!=0){
        $(".hr30nkarte").css('background-image', 'url(' + 'cardblue.png' + ')');} 
    }


    if (mittelwert>=20.3 && mittelwert<=68){             
        hr45n = (0.0000000047218726359488100*mittelwert**6 - 0.0000012160881482190000000*mittelwert**5 + 0.0001253220945074550000000*mittelwert**4 - 0.0066275195342983900000000*mittelwert**3 + 0.1902232687290470000000000*mittelwert**2 - 1.6397552943875700000000000*mittelwert + 12.8666454050355000000000000); 
    }
    else {
        if (mittelwert!=0){
        $(".hr45nkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}  
    }
    
}



//hra
if(verfahren===7){
  
    
    

   hra = (mittelwert);

    if (mittelwert>=60.7 && mittelwert<=80){
         Rm = Math.round(-0.00002697893724246110*mittelwert**6 + 0.01095450582668320000*mittelwert**5 - 1.84109994664362000000*mittelwert**4 + 163.95313393317200000000*mittelwert**3 - 8157.77246664705000000000*mittelwert**2 + 214999.96236468900000000000*mittelwert - 2343986.06283381000000000000 );
    }
    else {
        if (mittelwert!=0){
        $(".zugkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}  
    }

    if (mittelwert>=60.7 && mittelwert<=80){
         HB = Math.round(-0.00000928048854476060*mittelwert**6 + 0.00386046779993663000*mittelwert**5 - 0.66623293189340800000*mittelwert**4 + 61.06844524521080000000*mittelwert**3 - 3135.81540490424000000000*mittelwert**2 + 85534.71350502440000000000*mittelwert - 968241.42703935500000000000);        
    }
    else {
        if (mittelwert!=0){
        $(".hbkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}
        
    }

    if (mittelwert>=60.7 && mittelwert<=64.5 ){
     hrb = (0.01068096097878880000*mittelwert**6 - 4.10521747619932000000*mittelwert**5 + 657.00840998414500000000*mittelwert**4 - 56044.72797573140000000000*mittelwert**3 + 2687577.63473017000000000000*mittelwert**2 - 68696533.62601470000000000000*mittelwert + 731231078.10845900000000000000 );
    }
    else {
        if (mittelwert!=0){
        $(".hrbkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}  
    }

    if (mittelwert>=60.7 && mittelwert<=61.6){    
      hrf = (0.22222222222262600000*mittelwert**2 - 26.28888888893840000000*mittelwert + 891.26000000151800000000
            );
    }
    else {
        if (mittelwert!=0){
        $(".hrfkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}
        
    }

    if (mittelwert>=60.7 && mittelwert<=85.6){
         hv = Math.round(0.00001032353564500710*mittelwert**6 - 0.00446971668917957000*mittelwert**5 + 0.80569183107738300000*mittelwert**4 - 77.36514318745690000000*mittelwert**3 + 4172.91913740849000000000*mittelwert**2 - 119846.60964644100000000000*mittelwert + 1431624.80804862000000000000);
    }
    else {
        if (mittelwert!=0){
        $(".hvkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}
        
    }

    if (mittelwert>=60.7 && mittelwert<=85.6){
         hrc = (-0.00000036854737339719900*mittelwert**6 + 0.00016338047239299300000*mittelwert**5 - 0.03010627332343040000000*mittelwert**4 + 2.95196401495781000000000*mittelwert**3 - 162.45715613742100000000000*mittelwert**2 + 4760.53576767609000000000000*mittelwert - 58064.62150771190000);
        }
        else {
            if (mittelwert!=0){
            $(".hrckarte").css('background-image', 'url(' + 'cardblue.png' + ')');}  
        }

    if (mittelwert>=60.7 && mittelwert<=85.6){
        hrd  = (-0.00000012006706984202300*mittelwert**6 + 0.00005293258604903710000*mittelwert**5 - 0.00969985525577340000000*mittelwert**4 + 0.94598504259662700000000*mittelwert**3 - 51.80454322787760000000000*mittelwert**2 + 1512.54948912488000000000000*mittelwert - 18398.81372779230000000000000);                        
    }
    else {
        if (mittelwert!=0){
        $(".hrdkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}
        
    }
  

    if (mittelwert>=60.7 && mittelwert<=85.6){
        hr15n = (-0.00000018586749450655300*mittelwert**6 + 0.00008071591062015490000*mittelwert**5 - 0.01458868592879310000000*mittelwert**4 + 1.40481159826194000000000*mittelwert**3 - 76.02808647124650000000000*mittelwert**2 + 2194.26445294192000000000000*mittelwert - 26349.038539640300000);
    }
    else {
        if (mittelwert!=0){
        $(".hr15nkarte").css('background-image', 'url(' + 'cardblue.png' + ')');} 
    }


    if (mittelwert>=60.7 && mittelwert<=85.6){
        hr30n = (-0.00000041708201681256400*mittelwert**6 + 0.00018281946800449100000*mittelwert**5 - 0.03331571141909520000000*mittelwert**4 + 3.23104154554379000000000*mittelwert**3 - 175.90323999769500000000000*mittelwert**2 + 5099.49555025451000000000000*mittelwert - 61512.48824135710000000000000);                     
    }
    else {
        if (mittelwert!=0){
        $(".hr30nkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}  
    }


    if (mittelwert>=60.7 && mittelwert<=85.6){             
         hr45n = (-0.000000189753163348794000*mittelwert**6 + 0.000086291858582254700000*mittelwert**5 - 0.016317072357899100000000*mittelwert**4 + 1.641998474255400000000000*mittelwert**3 - 92.743728083914100000000000*mittelwert**2 + 2790.203933980330000000000000*mittelwert - 34966.887440121600000000000000);   
    }
    else {
        if (mittelwert!=0){
        $(".hr45nkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}  
    }
 
}



//hrd
if(verfahren===8){
  
    
  hrd= (mittelwert);

    if (mittelwert>=40.3 && mittelwert<=69){
     Rm = Math.round(-0.0000020239789240150700000*mittelwert**6 + 0.0005964901878488860000000*mittelwert**5 - 0.0704352323088446000000000*mittelwert**4 + 4.2392690807396100000000000*mittelwert**3 - 134.7411682718340000000000000*mittelwert**2 + 2087.4371639490500000000000000*mittelwert - 10934.3332699141000000000000000
);
    }
    else {
        if (mittelwert!=0){
        $(".zugkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}  
    }

    if (mittelwert>=40.3 && mittelwert<=69 ){
         HB = Math.round(-0.0000005382661083519480000*mittelwert**6 + 0.0001666449801815960000000*mittelwert**5 - 0.0209546703394030000000000*mittelwert**4 + 1.3692460206946700000000000*mittelwert**3 - 48.7494749689993000000000000*mittelwert**2 + 895.0779997520320000000000000*mittelwert - 6424.5116985484000000000000000 );        
    }
    else {
        if (mittelwert!=0){
        $(".hbkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}
        
    }

    if (mittelwert>=40.3 && mittelwert<=46.5 ){
         hrb = (0.00285649824672873000*mittelwert**6 - 0.75572395485014600000*mittelwert**5 + 83.23825155000300000000*mittelwert**4 - 4885.66996531452000000000*mittelwert**3 + 161172.73726296800000000000*mittelwert**2 - 2833365.22201542000000000000*mittelwert + 20737198.02879340000000000000
            );
    }
    else {
        if (mittelwert!=0){
        $(".hrbkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}  
    }

    if (mittelwert>=40.3 && mittelwert<=41.7){    
         hrf = (0.11904761904816000000*mittelwert**2 - 9.19047619052026000000*mittelwert + 291.33214285804000000000);
    }
    else {
        if (mittelwert!=0){
        $(".hrfkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}
        
    }

    if (mittelwert>=40.3 && mittelwert<=76.9){
         hv = Math.round(0.0000011946880660307400000*mittelwert**6 - 0.0004117682459075400000000*mittelwert**5 + 0.0589178013378646000000000*mittelwert**4 - 4.4702036335147800000000000*mittelwert**3 + 189.6060681886650000000000000*mittelwert**2 - 4254.3730181825700000000000000*mittelwert + 39580.7084757816000000000000000);
    }
    else {
        if (mittelwert!=0){
        $(".hvkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}
        
    }

    if (mittelwert>=40.3 && mittelwert<=76.9){
         hra = (0.00000000724733465601313000*mittelwert**6 - 0.00000256994271953942000000*mittelwert**5 + 0.00037613394657946800000000*mittelwert**4 - 0.02913270144739230000000000*mittelwert**3 + 1.26325768740151000000000000*mittelwert**2 - 28.51594185542080000000000000*mittelwert + 315.07894825840700000000000000);
    }
    else {
        if (mittelwert!=0){
        $(".hrakarte").css('background-image', 'url(' + 'cardblue.png' + ')');}     
    }

    if (mittelwert>=40.3 && mittelwert<=76.9){
         hrc  = (-0.00000001874836291076990*mittelwert**6 + 0.00000677914204170044000*mittelwert**5 - 0.00101345073629245000000*mittelwert**4 + 0.08014258061527430000000*mittelwert**3 - 3.53410504426226000000000*mittelwert**2 + 83.66314735602750000000000*mittelwert - 824.18944821569500000000000 );                             
    }
    else {
        if (mittelwert!=0){
        $(".hrckarte").css('background-image', 'url(' + 'cardblue.png' + ')');}  
    }

    if (mittelwert>=40.3 && mittelwert<=76.9){
         hr15n = (-0.00000001129636703622870*mittelwert**6 + 0.00000379897138810814000*mittelwert**5 - 0.00053061748791347800000*mittelwert**4 + 0.03938224321636120000000*mittelwert**3 - 1.63983034011755000000000*mittelwert**2 + 37.09412815809190000000000*mittelwert - 295.55072728312700000000000);
    }
    else {
        if (mittelwert!=0){
        $(".hr15nkarte").css('background-image', 'url(' + 'cardblue.png' + ')');} 
    }

    if (mittelwert>=40.3 && mittelwert<=76.9){
         hr30n = (-0.0000000274731975918874000*mittelwert**6 + 0.0000095801016074287300000*mittelwert**5 - 0.0013817768434083000000000*mittelwert**4 + 0.1054848074423570000000000*mittelwert**3 - 4.4939983237780800000000000*mittelwert**2 + 102.4602026415260000000000000*mittelwert - 948.8895303463070000000000000
            );                    
    }
    else {
        if (mittelwert!=0){
        $(".hr30nkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}  
    }

    if (mittelwert>=40.3 && mittelwert<=76.9){             
         hr45n = (0.0000000017466262117182800*mittelwert**6 - 0.0000002543147805192380000*mittelwert**5 - 0.0000219312890829635000000*mittelwert**4 + 0.0065951178225483100000000*mittelwert**3 - 0.5042048793709540000000000*mittelwert**2 + 18.1134727923269000000000000*mittelwert - 245.4357878660200000000000000  ); 
    } 
    else {
        if (mittelwert!=0){
        $(".hr45nkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}  
    }
}



//hr15
if(verfahren===9){
  
    
    
hr15n = (mittelwert);

    if (mittelwert>=69.6 && mittelwert<=89.2){
         Rm = Math.round(-0.0000904331563162941000000*mittelwert**6 + 0.0426365902827001000000000*mittelwert**5 - 8.3537718586582700000000000*mittelwert**4 + 870.7355274507230000000000000*mittelwert**3 - 50926.8722408146000000000000000*mittelwert**2 + 1584776.6918809800000000000000000*mittelwert - 20500082.0514056000000000000000000
            );
        }
        else {
            if (mittelwert!=0){
            $(".zugkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}  
        }

    if (mittelwert>=69.6 && mittelwert<=89.2){
         HB = Math.round(-0.0000226405147039088000000*mittelwert**6 + 0.0107120651373918000000000*mittelwert**5 - 2.1065795128645600000000000*mittelwert**4 + 220.4190738483530000000000000*mittelwert**3 - 12942.8711529310000000000000000*mittelwert**2 + 404405.3307104820000000000000000*mittelwert - 5252974.6196230500000000000000000  );        
    }
    else {
        if (mittelwert!=0){
        $(".hbkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}
        
    }

    if (mittelwert>=69.6 && mittelwert<=74.2){
         hrb = (-0.00230636476408108000*mittelwert**6 + 0.95322016917052700000*mittelwert**5 - 163.84344542414200000000*mittelwert**4 + 14989.19890948270000000000*mittelwert**3 - 769641.69502027900000000000*mittelwert**2 + 21025584.26539100000000000000*mittelwert - 238696225.92349700000000000000);
    }
    else {
        if (mittelwert!=0){
        $(".hrbkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}  
    }

    if (mittelwert>=69.6 && mittelwert<=70.6){    
         hrf = (y = 0.00000000000090949470*mittelwert**2 + 0.79999999987267100000*mittelwert + 58.62000000445660000000);
    }
    else {
        if (mittelwert!=0){
        $(".hrfkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}
        
    }

    if (mittelwert>=69.6 && mittelwert<=93.2){
         hv = Math.round(0.0000475125115482200000000*mittelwert**6 - 0.0228566068137269000000000*mittelwert**5 + 4.5758027891618000000000000*mittelwert**4 - 487.9246780980940000000000000*mittelwert**3 + 29226.1526720043000000000000000*mittelwert**2 - 932356.8241557670000000000000000*mittelwert + 12375513.2359809000000000000000000 );
    }
    else {
        if (mittelwert!=0){
        $(".hvkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}
        
    }

    if (mittelwert>=69.6 && mittelwert<=93.2){
         hra = (0.00000050347792868166200000*mittelwert**6 - 0.00024305268586459800000000*mittelwert**5 + 0.04881728313424390000000000*mittelwert**4 - 5.22163567145471000000000000*mittelwert**3 + 313.71411504636100000000000000*mittelwert**2 - 10037.24331524100000000000000000*mittelwert + 133651.99631641300000000000000000);
    }
    else {
        if (mittelwert!=0){
        $(".hrakarte").css('background-image', 'url(' + 'cardblue.png' + ')');}     
    }

    if (mittelwert>=69.6 && mittelwert<=93.2){
         hrd =(0.00000063378098269506500000000000000*mittelwert**6 - 0.00030488678576556800000000000000000*mittelwert**5 + 0.06102793294774680000000000000000000*mittelwert**4 - 6.50589131593375000000000000000000000*mittelwert**3 + 389.57727953927700000000000000000000000*mittelwert**2 - 12422.825981841900000000000*mittelwert + 164809.60869864400000000000000000000000000);                               
    }
    else {
        if (mittelwert!=0){
        $(".hrdkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}
        
    }

    if (mittelwert>=69.6 && mittelwert<=93.2){
         hrc = (0.00000065174886831886900*mittelwert**6 - 0.00031042813326482800000*mittelwert**5 + 0.06149783200631980000000*mittelwert**4 - 6.48589287794687000000000*mittelwert**3 + 384.07030113793300000000000*mittelwert**2 - 12105.98192517220000000000000*mittelwert + 158652.62251394400000000000000 );
    }
    else {
        if (mittelwert!=0){
        $(".hrckarte").css('background-image', 'url(' + 'cardblue.png' + ')');}  
    }

    if (mittelwert>=69.6 && mittelwert<=93.2){
         hr30n = (0.0000003444307119515600000*mittelwert**6 - 0.0001632270437092130000000*mittelwert**5 + 0.0321796847618302000000000*mittelwert**4 - 3.3780253171192200000000000*mittelwert**3 + 199.1413004495610000000000000*mittelwert**2 - 6249.6786728342100000000000000*mittelwert + 81569.7319934340000000000000000);                     
    }
    else {
        if (mittelwert!=0){
        $(".hr30nkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}  
    }

    if (mittelwert>=69.6 && mittelwert<=93.2){             
         hr45n = (0.0000008624987365424270000*mittelwert**6 - 0.0004131573270237610000000*mittelwert**5 + 0.0822953059782133000000000*mittelwert**4 - 8.7244574476549900000000000*mittelwert**3 + 519.1975178663380000000000000*mittelwert**2 - 16443.3453462138000000000000000*mittelwert + 216487.208360042000000000000000);  
    }
    else {
        if (mittelwert!=0){
        $(".hr45nkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}  
    }
}


//hr30
if(verfahren===10){
  
    
  hr30n = (mittelwert);

    if (mittelwert>=41.7 && mittelwert<=75.5){
         Rm = Math.round(-0.0000022438764220034100000*mittelwert**6 + 0.0007502601480346090000000*mittelwert**5 - 0.1026141340709300000000000*mittelwert**4 + 7.3538748345624500000000000*mittelwert**3 - 290.8505650230640000000000000*mittelwert**2 + 6027.8380345905000000000000000*mittelwert - 50598.2030192035000000000000000);
    }
    else {
        if (mittelwert!=0){
        $(".zugkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}  
    }


    if (mittelwert>=41.7 && mittelwert<=75.5){
         HB = Math.round(-0.0000005899959085731150000*mittelwert**6 + 0.0002006955172972450000000*mittelwert**5 - 0.0279977087685221000000000*mittelwert**4 + 2.0514550869953100000000000*mittelwert**3 - 83.1523011856532000000000000*mittelwert**2 + 1770.9145485267400000000000000*mittelwert - 15326.1973750051000000000000000);        
    }
    else {
        if (mittelwert!=0){
        $(".hbkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}
        
    }

    if (mittelwert>=41.7 && mittelwert<=49){
         hrb = (-0.00065494880436745000*mittelwert**6 + 0.17500530057186600000*mittelwert**5 - 19.46716459119040000000*mittelwert**4 + 1153.91771663803000000000*mittelwert**3 - 38440.98515772030000000000*mittelwert**2 + 682404.06325246100000000000*mittelwert - 5043155.66109385000000000000);
    }
    else {
        if (mittelwert!=0){
        $(".hrbkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}  
    }

    if (mittelwert>=41.7 && mittelwert<=43.4 ){    
         hrf = (-0.03267973856191020000*mittelwert**2 + 3.25163398691266000000*mittelwert + 35.53333333366230000000);
    }
    else {
        if (mittelwert!=0){
        $(".hrfkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}
        
    }

    if (mittelwert>=41.7 && mittelwert<=84.4){
         hv = Math.round(0.0000007997896087075240000*mittelwert**6 - 0.0002956130895035990000000*mittelwert**5 + 0.0452299299287783000000000*mittelwert**4 - 3.6607230761675200000000000*mittelwert**3 + 165.2566374835010000000000000*mittelwert**2 - 3938.0748839733500000000000000*mittelwert + 38847.3956652175000000000000000);
    }
    else {
        if (mittelwert!=0){
        $(".hvkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}
        
    }

    if (mittelwert>=41.7 && mittelwert<=84.4){
         hra = (0.00000000915004169307898000*mittelwert**6 - 0.00000344738859430552000000*mittelwert**5 + 0.00053608768397108800000000*mittelwert**4 - 0.04405884030747810000000000*mittelwert**3 + 2.02058263086392000000000000*mittelwert**2 - 48.53267345743810000000000000*mittelwert + 531.038461559832300000000000000);
    }
    else {
        if (mittelwert!=0){
        $(".hrakarte").css('background-image', 'url(' + 'cardblue.png' + ')');}     
    }

    if (mittelwert>=41.7 && mittelwert<=84.4){
         hrd  = (0.00000000965089557922183000000000000*mittelwert**6 - 0.00000362501581231203000000000000000*mittelwert**5 + 0.00056247506256170900000000000000000*mittelwert**4 - 0.04612992196239020000000000000000000*mittelwert**3 + 2.10821603583013000000000000000000000*mittelwert**2 - 50.04034601725040000000000000000000000*mittelwert + 511.59141797850200000000000000000000000 );                           
    }
    else {
        if (mittelwert!=0){
        $(".hrdkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}
        
    }

    if (mittelwert>=41.7 && mittelwert<=84.4){
         hr15n = (0.00000000016926609419654100*mittelwert**6 - 0.00000014585534136718500000*mittelwert**5 + 0.00003399204429499650000000*mittelwert**4 - 0.00361585485408296000000000*mittelwert**3 + 0.19706691424919400000000000*mittelwert**2 - 4.72823019959378000000000000*mittelwert + 100.97455211307200000000000000);
    }
    else {
        if (mittelwert!=0){
        $(".hr15nkarte").css('background-image', 'url(' + 'cardblue.png' + ')');} 
    }

    if (mittelwert>=41.7 && mittelwert<=84.4){
         hrc = (0.00000000536691164079728*mittelwert**6 - 0.00000190316393237286000*mittelwert**5 + 0.00027727587507592000000*mittelwert**4 - 0.02122498617356900000000*mittelwert**3 + 0.89965004394648100000000*mittelwert**2 - 18.90194403984740000000000*mittelwert + 156.55250482814600000000000 );                   
    }
    else {
        if (mittelwert!=0){
        $(".hrckarte").css('background-image', 'url(' + 'cardblue.png' + ')');}  
    }

    if (mittelwert>=41.7 && mittelwert<=84.4){             
         hr45n = (0.0000000142779109299496000*mittelwert**6 - 0.0000052108948486853700000*mittelwert**5 + 0.0007809049880023290000000*mittelwert**4 - 0.0615173424332994000000000*mittelwert**3 + 2.6876545478689400000000000*mittelwert**2 - 60.4698791653667000000000000*mittelwert + 549.4853466010510000000000000);   
    }
    else {
        if (mittelwert!=0){
        $(".hr45nkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}  
    }
}



//hr45
if(verfahren===11){
  
 hr45n = (mittelwert);

    if (mittelwert>=19.9 && mittelwert<=64.1 ){
         Rm = Math.round(-0.0000001211645035970040000*mittelwert**6 + 0.0000237221934393905000000*mittelwert**5 - 0.0013886927309891800000000*mittelwert**4 + 0.0079391763491348400000000*mittelwert**3 + 2.1217301207752800000000000*mittelwert**2 - 55.9065135400575000000000000*mittelwert + 1132.741813724340000000000000);
    }    else {
        if (mittelwert!=0){
        $(".zugkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}  
    }

    if (mittelwert>=19.9 && mittelwert<=64.1 ){
         HB = Math.round(-0.0000000332016691084736000*mittelwert**6 + 0.0000074087044917237100000*mittelwert**5 - 0.0005791091153937600000000*mittelwert**4 + 0.0181265531951362000000000*mittelwert**3 - 0.0122728481011580000000000*mittelwert**2 - 4.6149935654122800000000000*mittelwert + 252.2071879363700000000000000);        
    }
    else {
        if (mittelwert!=0){
        $(".hbkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}
        
    }

    if (mittelwert>=19.9 && mittelwert<=29.5){
         hrb = (-0.00008007438088952770*mittelwert**6 + 0.01085191347399360000*mittelwert**5 - 0.60540640523952900000*mittelwert**4 + 17.77240687196580000000*mittelwert**3 - 289.04186228186500000000*mittelwert**2 + 2463.98766989692000000000*mittelwert - 8480.46533387933000000000 );
    }
    else {
        if (mittelwert!=0){
        $(".hrbkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}  
    }

    if (mittelwert>=19.9 && mittelwert<=22.2){    
         hrf = (0.01317523056673050000*mittelwert**2 - 0.20685111990260300000*mittelwert + 113.19881422933100000000);
    }
    else {
        if (mittelwert!=0){
        $(".hrfkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}
        
    }

    if (mittelwert>=19.9 && mittelwert<=75.4 ){   
         hv = Math.round(0.0000000882777400484924000*mittelwert**6 - 0.0000238817483193959000000*mittelwert**5 + 0.0026868411823140700000000*mittelwert**4 - 0.1581856485271280000000000*mittelwert**3 + 5.1716361934865600000000000*mittelwert**2 - 82.9253235045514000000000000*mittelwert + 737.7277707811760000000000000 );
    }
    else {
        if (mittelwert!=0){
        $(".hvkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}
        
    }

    if (mittelwert>=19.9 && mittelwert<=75.4 ){   
         hra = (0.00000000035245984603138300*mittelwert**6 - 0.00000011992585478709500000*mittelwert**5 + 0.00001669063054284370000000*mittelwert**4 - 0.00120545476817666000000000*mittelwert**3 + 0.04808303870319480000000000*mittelwert**2 - 0.57514747121819000000000000*mittelwert + 60.38330408728890000000000000);
    }
    else {
        if (mittelwert!=0){
        $(".hrakarte").css('background-image', 'url(' + 'cardblue.png' + ')');}     
    }

    if (mittelwert>=19.9 && mittelwert<=75.4 ){   
         hrd  = (-0.00000000011093875557782700000000000*mittelwert**6 + 0.00000000567426158299550000000000000*mittelwert**5 + 0.00000335369849381287000000000000000*mittelwert**4 - 0.00048414184338627400000000000000000*mittelwert**3 + 0.02571814457583490000000000000000000*mittelwert**2 + 0.05488266859817340000000000000000000*mittelwert + 32.29480912718440000000000000000000000);                              
    }
    else {
        if (mittelwert!=0){
        $(".hrdkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}
        
    }

    if (mittelwert>=19.9 && mittelwert<=75.4 ){   
         hr15n = (-0.00000000107211487864606000*mittelwert**6 + 0.00000026163353382801400000*mittelwert**5 - 0.00002512014917958260000000*mittelwert**4 + 0.00119931357050553000000000*mittelwert**3 - 0.03061271509109300000000000*mittelwert**2 + 0.88349750432528500000000000*mittelwert + 57.81999102952750000000000000 );
    }
    else {
        if (mittelwert!=0){
        $(".hr15nkarte").css('background-image', 'url(' + 'cardblue.png' + ')');} 
    }

    if (mittelwert>=19.9 && mittelwert<=75.4 ){   
         hr30n = (-0.0000000023991556024824400*mittelwert**6 + 0.0000006470005692349110000*mittelwert**5 - 0.0000694643903903199000000*mittelwert**4 + 0.0037925824624076700000000*mittelwert**3 - 0.1110028560607220000000000*mittelwert**2 + 2.4205118143838600000000000*mittelwert + 16.5610389902641000000000000 );                    
    }
    else {
        if (mittelwert!=0){
        $(".hr30nkarte").css('background-image', 'url(' + 'cardblue.png' + ')');}  
    }

    if (mittelwert>=19.9 && mittelwert<=75.4 ){             
         hrc = (-0.0000000015820340315553200*mittelwert**6 + 0.0000004434854353252420000*mittelwert**5 - 0.0000493709101144060000000*mittelwert**4 + 0.0027991400042524600000000*mittelwert**3 - 0.0855028468158813000000000*mittelwert**2 + 2.1873913894890200000000000*mittelwert - 5.0122445388933800000000000 );  
    } 
    else {
        if (mittelwert!=0){
        $(".hrckarte").css('background-image', 'url(' + 'cardblue.png' + ')');}  
    }
}

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

function tabelleLöschen(){
document.getElementById("ZUG1").innerHTML = ("");
document.getElementById("HV1").innerHTML = ("");
document.getElementById("HB1").innerHTML = ("");
document.getElementById("HRB1").innerHTML = ("");
document.getElementById("HRF1").innerHTML = ("");
document.getElementById("HRC1").innerHTML = ("");
document.getElementById("HRA1").innerHTML = ("");
document.getElementById("HRD1").innerHTML = ("");
document.getElementById("HR15N1").innerHTML =("");
document.getElementById("HR30N1").innerHTML = ("");
document.getElementById("HR45N1").innerHTML =("");

document.getElementById("ZUG2").innerHTML = ("");
document.getElementById("HV2").innerHTML = ("");
document.getElementById("HB2").innerHTML = ("");
document.getElementById("HRB2").innerHTML = ("");
document.getElementById("HRF2").innerHTML = ("");
document.getElementById("HRC2").innerHTML = ("");
document.getElementById("HRA2").innerHTML = ("");
document.getElementById("HRD2").innerHTML = ("");
document.getElementById("HR15N2").innerHTML = ("");
document.getElementById("HR30N2").innerHTML = ("");
document.getElementById("HR45N2").innerHTML = ("");

document.getElementById("ZUG3").innerHTML = ("");
document.getElementById("HV3").innerHTML = ("");
document.getElementById("HB3").innerHTML = ("");
document.getElementById("HRB3").innerHTML = ("");
document.getElementById("HRF3").innerHTML = ("");
document.getElementById("HRC3").innerHTML = ("");
document.getElementById("HRA3").innerHTML = ("");
document.getElementById("HRD3").innerHTML = ("");
document.getElementById("HR15N3").innerHTML = ("");
document.getElementById("HR30N3").innerHTML = ("");
document.getElementById("HR45N3").innerHTML = ("");

document.getElementById("ZUG4").innerHTML = ("");
document.getElementById("HV4").innerHTML = ("");
document.getElementById("HB4").innerHTML = ("");
document.getElementById("HRB4").innerHTML = ("");
document.getElementById("HRF4").innerHTML = ("");
document.getElementById("HRC4").innerHTML = ("");
document.getElementById("HRA4").innerHTML = ("");
document.getElementById("HRD4").innerHTML = ("");
document.getElementById("HR15N4").innerHTML = ("");
document.getElementById("HR30N4").innerHTML = ("");
document.getElementById("HR45N4").innerHTML = ("");

document.getElementById("ZUG5").innerHTML = ("");
document.getElementById("HV5").innerHTML = ("");
document.getElementById("HB5").innerHTML = ("");
document.getElementById("HRB5").innerHTML = ("");
document.getElementById("HRF5").innerHTML = ("");
document.getElementById("HRC5").innerHTML = ("");
document.getElementById("HRA5").innerHTML = ("");
document.getElementById("HRD5").innerHTML = ("");
document.getElementById("HR15N5").innerHTML = ("");
document.getElementById("HR30N5").innerHTML = ("");
document.getElementById("HR45N5").innerHTML = ("");
}