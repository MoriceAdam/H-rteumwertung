
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
        $("#auswahlhv").click(function(){
            verfahren = 1;
           $("#aktuellesVerfahren").html("HV");
        });
        $("#auswahlhb").click(function(){
            verfahren = 2;
           $("#aktuellesVerfahren").html("HBW");
        });
        $("#auswahlhrc").click(function(){
            verfahren = 3;
           $("#aktuellesVerfahren").html("HRC");
        });
        $("#auswahlhra").click(function(){
            verfahren = 4;
           $("#aktuellesVerfahren").html("HRA");
        });
        $("#auswahlhr45n").click(function(){
            verfahren = 5;
           $("#aktuellesVerfahren").html("HR45N");
        });
        $("#auswahlhr30n").click(function(){
            verfahren = 6;
           $("#aktuellesVerfahren").html("HR30N");
        });
        $("#auswahlhr15n").click(function(){
            verfahren = 7;
           $("#aktuellesVerfahren").html("HR15N");
        });
        $("#auswahlhrb").click(function(){
            verfahren = 8;
           $("#aktuellesVerfahren").html("HRB");
        });
        $("#auswahlhrf").click(function(){
            verfahren = 9;
           $("#aktuellesVerfahren").html("HRF");
        });
        $("#auswahlhr45t").click(function(){
            verfahren = 10;
           $("#aktuellesVerfahren").html("HR45T");
        });
        $("#auswahlhr30t").click(function(){
            verfahren = 11;
           $("#aktuellesVerfahren").html("HR30T");
        });
        $("#auswahlhr15t").click(function(){
            verfahren = 12;
           $("#aktuellesVerfahren").html("HR15T");

        });
        $("#auswahlrm").click(function(){
            verfahren = 13;
           $("#aktuellesVerfahren").html("MPa");

        });
      });



      if (document.getElementById("start")) {
        document.getElementById("start").addEventListener("click",test);
       }
      
   



//Umwertung

   function test() {
    
eingabe = [];
     zahl1 = document.getElementById("eingabe_1").value;
     zahl2 = document.getElementById("eingabe_2").value;
     zahl3 = document.getElementById("eingabe_3").value;
     zahl4 = document.getElementById("eingabe_4").value;
     zahl5 = document.getElementById("eingabe_5").value;

     if (zahl1>0){
   eingabe.push( parseInt(zahl1));
}
if (zahl2>0){
    eingabe.push( parseInt(zahl2));
 }
 if (zahl3>0){
    eingabe.push( parseInt(zahl3));
 }
 if (zahl4>0){
    eingabe.push( parseInt(zahl4));
 }
 if (zahl5>0){
    eingabe.push( parseInt(zahl5));
 }

   function ArrayAvg(myArray){
    
        var i = 0, summ = 0, ArrayLen = myArray.length;
        while (i < ArrayLen) {
          summ = summ + myArray[i++];
        }
        a = summ / ArrayLen;
        mittelwert = a.toFixed(1);
      
      $("#härtemittel").html(mittelwert);
    }
    ArrayAvg(eingabe)

    if (verfahren===0){
        alert('Wählen die ein Verfahren aus.')
       
    }


    if(verfahren>0){

$(".angabe").addClass("textDrehen");
 $(".ausgabe").addClass("textDrehen");
 $(".ausgabeKarte").addClass("drehen");

  // Vikers

if(verfahren===1){
  
    
    

    document.getElementById("vickers").innerHTML = (mittelwert);

    if (mittelwert>=210 && mittelwert<=650){
        let HB = ( 0.00000000000000295381834523008000000*mittelwert**6 - 0.00000000000981521451186351000000000*mittelwert**5 + 0.00000001234707961928560000000000000*mittelwert**4 - 0.00000770985147450041000000000000000*mittelwert**3 + 0.00244025249621936000000000000000000*mittelwert**2 + 0.64126510685291700000000000000000000*mittelwert + 13.64578361653030000000000000000000000);
        HB = HB.toFixed(1);
        $("#brinell").html(HB);
    }

    else{
        document.getElementById("brinell").innerHTML = ('ungültig');
    }

    if (mittelwert>=210 && mittelwert<=650){
       let hrc = ( -0.000000000000002542870780094640*mittelwert**6 + 0.000000000007745240381455990000*mittelwert**5 - 0.000000010015050853208100000000*mittelwert**4 + 0.000007177564235436700000000000*mittelwert**3 - 0.003134718024748820000000000000*mittelwert**2 + 0.881946997607277000000000000000*mittelwert - 81.603388273249400000000000000000);        
        hrc = hrc.toFixed(1);
        $("#hrc").html(hrc);
    }
    else{
        document.getElementById("hrc").innerHTML = ('ungültig');
    }
    if (mittelwert>=210 && mittelwert<=650){    
        let hra = ( -0.0000000000000024409126367576900*mittelwert**6 + 0.0000000000071674916091991000000*mittelwert**5 - 0.0000000088815888895062800000000*mittelwert**4 + 0.0000060443386680162600000000000*mittelwert**3 - 0.0024663317745748000000000000000*mittelwert**2 + 0.6257021972358220000000000000000*mittelwert - 6.8386037184647100000000000000000);
        hra = hra.toFixed(1);
        $("#hra").html(hra);
    }
    else{
        $("#hra").html('ungültig');
    }
    if (mittelwert>=210 && mittelwert<=650){    
        let hr45N = ( -0.0000000000000025219059387546800*mittelwert**6 + 0.0000000000081517805663919500000*mittelwert**5 - 0.0000000111120704983388000000000*mittelwert**4 + 0.0000083161396335947100000000000*mittelwert**3 - 0.0037428092260757500000000000000*mittelwert**2 + 1.0643309990918400000000000000000*mittelwert - 103.5575426345830000000000000000000);
        hr45N = hr45N.toFixed(1);
        $("#hr45n").html(hr45N);
    }
    else{
        $("#hr45n").html('ungültig');
    }
    if (mittelwert>=210 && mittelwert<=650){    
        let hr30N = ( -0.0000000000000064713894327229100*mittelwert**6 + 0.0000000000184071870419689000000*mittelwert**5 - 0.0000000218137673249637000000000*mittelwert**4 + 0.0000139786966355751000000000000*mittelwert**3 - 0.0052772671166775800000000000000*mittelwert**2 + 1.2205356825855600000000000000000*mittelwert - 81.4143345195659000000000000000000);
        hr30N = hr30N.toFixed(1);
        $("#hr30n").html(hr30N);
    }
    else{
        $("#hr30n").html('ungültig');
    }
    if (mittelwert>=210 && mittelwert<=650){    
        let hr15N = ( -0.0000000000000025761205968723200*mittelwert**6 + 0.0000000000076560580386763700000*mittelwert**5 - 0.0000000096389510651713300000000*mittelwert**4 + 0.0000066842534474101400000000000*mittelwert**3 - 0.0027774026823215800000000000000*mittelwert**2 + 0.7083166692773780000000000000000*mittelwert - 7.1278309908516400000000000000000);
        hr15N = hr15N.toFixed(1);
        $("#hr15n").html(hr15N);
    }
    else{
        $("#hr15n").html('ungültig');
    }
    if (mittelwert>=210 && mittelwert<=650){    
        let hrb = ( 0.000000000000141545731028019000*mittelwert**6 - 0.000000000272632876696524000000*mittelwert**5 + 0.000000212672170661474000000000*mittelwert**4 - 0.000084606602795060300000000000*mittelwert**3 + 0.017361287548415600000000000000*mittelwert**2 - 1.476693341131060000000000000000*mittelwert + 108.421525452901000000000000000000);
        hrb = hrb.toFixed(1);
        $("#hrb").html(hrb);
    }
    else{
        $("#hrb").html('ungültig');
    }
    if (mittelwert>=210 && mittelwert<=650){    
        let hrf = ( 0.000000000000659577337612147000*mittelwert**6 - 0.000000001225252052872430000000*mittelwert**5 + 0.000000936927275721403000000000*mittelwert**4 - 0.000376676850611797000000000000*mittelwert**3 + 0.083582563915481900000000000000*mittelwert**2 - 9.576786584729770000000000000000*mittelwert + 545.624188882529000000000000000000);
        hrf = hrf.toFixed(1);
        $("#hrf").html(hrf);
    }
    else{
        $("#hrf").html('ungültig');
    }
  
    if (mittelwert>=210 && mittelwert<=650){    
        let hr45t = ( -0.000000000000038637370619555200*mittelwert**6 + 0.000000000071520362237274300000*mittelwert**5 - 0.000000060753863313499100000000*mittelwert**4 + 0.000031307102436213400000000000*mittelwert**3 - 0.010426892931276200000000000000*mittelwert**2 + 2.121452906052550000000000000000*mittelwert - 117.961424328478000000000000000000);
        hr45t = hr45t.toFixed(1);
        $("#hr45t").html(hr45t);
    }
    else{
        $("#hr15n").html('ungültig');
    }
    if (mittelwert>=210 && mittelwert<=650){    
        let hr30t = ( -0.000000000000221562478218377000*mittelwert**6 + 0.000000000436874874945818000000*mittelwert**5 - 0.000000359066870604591000000000*mittelwert**4 + 0.000158472656152171000000000000*mittelwert**3 - 0.040119791498780500000000000000*mittelwert**2 + 5.664717509420630000000000000000*mittelwert - 272.236162589281000000000000000000);
        hr30t = hr30t.toFixed(1);
        $("#hr30t").html(hr30t);
    }
    else{
        $("#hr30t").html('ungültig');
    }
    if (mittelwert>=210 && mittelwert<=650){    
        let hr15t = ( 0.000000000000526340721334611000*mittelwert**6 - 0.000000000966710796339102000000*mittelwert**5 + 0.000000729013992032327000000000*mittelwert**4 - 0.000288050940404748000000000000*mittelwert**3 + 0.062495903664752300000000000000*mittelwert**2 - 6.949858086143390000000000000000*mittelwert + 392.119128534242000000000000000000);
        hr15t = hr15t.toFixed(1);
        $("#hr15t").html(hr15t);
    }
    else{
        $("#hr15t").html('ungültig');
    }
    if (mittelwert>=210 && mittelwert<=650){    
        let rm = ( -0.000000000001252360669052980000*mittelwert**6 + 0.000000002528071484846160000000*mittelwert**5 - 0.000002088991731457990000000000*mittelwert**4 + 0.000903548878371535000000000000*mittelwert**3 - 0.216233224457414000000000000000*mittelwert**2 + 30.444779351122100000000000000000*mittelwert - 1436.963473166250000000000000000000);
        rm = rm.toFixed(1);
        $("#zug").html(rm);
    }
    else{
        $("#zug").html('ungültig');
    }
}
    

 // Vikers ende


 //Brinell
 if(verfahren===2){
  
    document.getElementById("brinell").innerHTML = (mittelwert);

    if (mittelwert>=205 && mittelwert<=632){
        let hv = Math.round(-0.0000000000000045008613694217400000000000*mittelwert**6 + 0.0000000000142730190993757000000000000000*mittelwert**5 - 0.0000000173058663208605000000000000000000*mittelwert**4 + 0.0000104943828633683000000000000000000000*mittelwert**3 - 0.0032778688302240100000000000000000000000*mittelwert**2 + 1.4878998198978200000000000000000000000000*mittelwert - 21.7474720508388000000000000000000000000000);
        $("#vickers").html(hv);
    }

    else{
        document.getElementById("vickers").innerHTML = ('ungültig');
    }

    if (mittelwert>=205 && mittelwert<=632){
       let hrc = ( -0.000000000000006262408176883300*mittelwert**6 + 0.000000000017158118995655400000*mittelwert**5 - 0.000000019596763310295100000000*mittelwert**4 + 0.000012150152209071000000000000*mittelwert**3 - 0.004494277472972370000000000000*mittelwert**2 + 1.059943869775800000000000000000*mittelwert - 88.900171635895100000000000000000);        
        hrc = hrc.toFixed(1);
        $("#hrc").html(hrc);
    }
    else{
        document.getElementById("hrc").innerHTML = ('ungültig');
    }
    if (mittelwert>=205 && mittelwert<=632){  
        let hra = (-0.0000000000000050951318038384800*mittelwert**6 + 0.0000000000138035693802350000000*mittelwert**5 - 0.0000000155602813608062000000000*mittelwert**4 + 0.0000094751502968386800000000000*mittelwert**3 - 0.0033975189432179400000000000000*mittelwert**2 + 0.7475163060085000000000000000000*mittelwert - 12.0007506536118000000000000000000);
        hra = hra.toFixed(1);
        $("#hra").html(hra);
    }
    else{
        $("#hra").html('ungültig');
    }
    if (mittelwert>=205 && mittelwert<=632){ 
        let hr45N = ( -0.0000000000000068807611691606100*mittelwert**6 + 0.0000000000192141362380601000000*mittelwert**5 - 0.0000000223972338459246000000000*mittelwert**4 + 0.0000141796768255741000000000000*mittelwert**3 - 0.0053455622778772400000000000000*mittelwert**2 + 1.2735557876364100000000000000000*mittelwert - 112.0398841644160000000000000000000);
        hr45N = hr45N.toFixed(1);
        $("#hr45n").html(hr45N);
    }
    else{
        $("#hr45n").html('ungültig');
    }
    if (mittelwert>=205 && mittelwert<=632){ 
        let hr30N = ( -0.0000000000000109635522386519000*mittelwert**6 + 0.0000000000295640672898203000000*mittelwert**5 - 0.0000000329525125263652000000000*mittelwert**4 + 0.0000196450413417446000000000000*mittelwert**3 - 0.0067960849604169300000000000000*mittelwert**2 + 1.4156543480758700000000000000000*mittelwert - 89.3534358898725000000000000000000);
        hr30N = hr30N.toFixed(1);
        $("#hr30n").html(hr30N);
    }
    else{
        $("#hr30n").html('ungültig');
    }
    if (mittelwert>=205 && mittelwert<=632){
        let hr15N = ( -0.0000000000000051776157134234300*mittelwert**6 + 0.0000000000141499479672069000000*mittelwert**5 - 0.0000000161548570386161000000000*mittelwert**4 + 0.0000100118070140014000000000000*mittelwert**3 - 0.0036698093508056600000000000000*mittelwert**2 + 0.8218941197498840000000000000000*mittelwert - 11.5129129163701000000000000000000);
        hr15N = hr15N.toFixed(1);
        $("#hr15n").html(hr15N);
    }
    else{
        $("#hr15n").html('ungültig');
    }
    if (mittelwert>=205 && mittelwert<=405){    
        let hrb = ( 0.000000000000386578923643947000*mittelwert**6 - 0.000000000698079487041582000000*mittelwert**5 + 0.000000513533074424299000000000*mittelwert**4 - 0.000195320420560059000000000000*mittelwert**3 + 0.039707694321968600000000000000*mittelwert**2 - 3.829717081343050000000000000000*mittelwert + 210.984939640005000000000000000000);
        hrb = hrb.toFixed(1);
        $("#hrb").html(hrb);
    }
    else{
        $("#hrb").html('ungültig');
    }
    if (mittelwert>=205 && mittelwert<=405){    
        let hrf = ( 0.000000000000826030573474167000*mittelwert**6 - 0.000000001500281050255700000000*mittelwert**5 + 0.000001120110141752900000000000*mittelwert**4 - 0.000439141367831945000000000000*mittelwert**3 + 0.094958623706008000000000000000*mittelwert**2 - 10.610323461520600000000000000000*mittelwert + 581.772771453705000000000000000000);
        hrf = hrf.toFixed(1);
        $("#hrf").html(hrf);
    }
    else{
        $("#hrf").html('ungültig');
    }
  
    if (mittelwert>=205 && mittelwert<=405){    
        let hr45t = ( 0.000000000000201316866331453000*mittelwert**6 - 0.000000000347233970876306000000*mittelwert**5 + 0.000000237312704152506000000000*mittelwert**4 - 0.000079378818737213400000000000*mittelwert**3 + 0.012218116758592700000000000000*mittelwert**2 - 0.314185960975605000000000000000*mittelwert - 8.156231908780520000000000000000);
        hr45t = hr45t.toFixed(1);
        $("#hr45t").html(hr45t);
    }
    else{
        $("#hr15n").html('ungültig');
    }
    if (mittelwert>=205 && mittelwert<=405){    
        let hr30t = ( -0.000000000000054866928464762300*mittelwert**6 + 0.000000000141843600158910000000*mittelwert**5 - 0.000000145033789461649000000000*mittelwert**4 + 0.000076936386156739000000000000*mittelwert**3 - 0.022860360906913400000000000000*mittelwert**2 + 3.723668213412990000000000000000*mittelwert - 179.813474474876000000000000000000);
        hr30t = hr30t.toFixed(1);
        $("#hr30t").html(hr30t);
    }
    else{
        $("#hr30t").html('ungültig');
    }
    if (mittelwert>=205 && mittelwert<=405){    
        let hr15t = ( 0.000000000000599251898654075000*mittelwert**6 - 0.000000001077128516615050000000*mittelwert**5 + 0.000000793993164918501000000000*mittelwert**4 - 0.000306304763611185000000000000*mittelwert**3 + 0.064817305018897500000000000000*mittelwert**2 - 7.024200775688110000000000000000*mittelwert + 387.292025173102000000000000000000);
        hr15t = hr15t.toFixed(1);
        $("#hr15t").html(hr15t);
    }
    else{
        $("#hr15t").html('ungültig');
    }
    if (mittelwert>=205 && mittelwert<=463){    
        let rm = ( 0.000000000022865346186004700000*mittelwert**6 - 0.000000041066585911015000000000*mittelwert**5 + 0.000030310443378753200000000000*mittelwert**4 - 0.011762946878984500000000000000*mittelwert**3 + 2.530534634791100000000000000000*mittelwert**2 - 282.861244830007000000000000000000*mittelwert + 13270.766302033500000000000000000000);
        rm = rm.toFixed(1);
        $("#zug").html(rm);
    }
    else{
        $("#zug").html('ungültig');
    }
}
//HRC 
if(verfahren===3){
  
    document.getElementById("hrc").innerHTML = (mittelwert);

    if (mittelwert>=15.3 && mittelwert<=57.5){
        let hv = ( 0.0000000014730408837149200000000000000000*mittelwert**6 + 0.0000003757362285250480000000000000000000*mittelwert**5 - 0.0000555357735048431000000000000000000000*mittelwert**4 + 0.0042144686208961500000000000000000000000*mittelwert**3 - 0.0762256303848849000000000000000000000000*mittelwert**2 + 4.7963294360658300000000000000000000000000*mittelwert + 142.0231224839550000000000000000000000000000);
        hv = hv.toFixed(1);
        $("#vickers").html(hv);
    }

    else{
        document.getElementById("vickers").innerHTML = ('ungültig');
    } 
 
   if (mittelwert>=15.3 && mittelwert<=57.5){
    let HB = ( 0.00000001079459455155530000000000000*mittelwert**6 - 0.00000269889115269706000000000000000*mittelwert**5 + 0.00030143185919988500000000000000000*mittelwert**4 - 0.01597103088867620000000000000000000*mittelwert**3 + 0.51801030955398100000000000000000000*mittelwert**2 - 3.79596906693731000000000000000000000*mittelwert + 184.68795800081700000000000000000000000);
    HB = HB.toFixed(1);
    $("#brinell").html(HB);
}

else{
    document.getElementById("brinell").innerHTML = ('ungültig');
} 
if (mittelwert>=15.3 && mittelwert<=57.5){
    let hra = ( -0.0000000028977825208831300000000*mittelwert**6 + 0.0000006619092836987470000000000*mittelwert**5 - 0.0000611724472507385000000000000*mittelwert**4 + 0.0029210102296448700000000000000*mittelwert**3 - 0.0768078441829708000000000000000*mittelwert**2 + 1.6198507640198200000000000000000*mittelwert + 42.7576043552070000000000000000000);
    hra = hra.toFixed(1);
    $("#hra").html(hra);
}

else{
    document.getElementById("hra").innerHTML = ('ungültig');
} 
if (mittelwert>=15.3 && mittelwert<=57.5){
    let h45n = ( -0.0000000008782917969296640000000*mittelwert**6 + 0.0000001877428224307530000000000*mittelwert**5 - 0.0000164405000727961000000000000*mittelwert**4 + 0.0007593506172361830000000000000*mittelwert**3 - 0.0200620604988775000000000000000*mittelwert**2 + 1.4707293211494400000000000000000*mittelwert - 6.3721209229458300000000000000000);
    h45n = h45n.toFixed(1);
    $("#hr45n").html(h45n);
}

else{
    document.getElementById("hr45n").innerHTML = ('ungültig');
} 
if (mittelwert>=15.3 && mittelwert<=57.5){
    let h30n = ( -0.0000000090234082913975800000000*mittelwert**6 + 0.0000020979257909739500000000000*mittelwert**5 - 0.0001975916814654720000000000000*mittelwert**4 + 0.0096189293161706600000000000000*mittelwert**3 - 0.2551908755571260000000000000000*mittelwert**2 + 4.4285708082906300000000000000000*mittelwert + 2.7994622810905800000000000000000);
    h30n = h30n.toFixed(1);
    $("#hr30n").html(h30n);
}

else{
    document.getElementById("hr30n").innerHTML = ('ungültig');
} 
if (mittelwert>=15.3 && mittelwert<=57.5){
    let h15n = ( -0.0000000013603220980207300000000*mittelwert**6 + 0.0000003009791197175480000000000*mittelwert**5 - 0.0000268057778170603000000000000*mittelwert**4 + 0.0012312918351315300000000000000*mittelwert**3 - 0.0327581925226441000000000000000*mittelwert**2 + 1.1008871644683200000000000000000*mittelwert + 52.8355048767892000000000000000000);
    h15n = h15n.toFixed(1);
    $("#hr15n").html(h15n);
}

else{
    document.getElementById("hr15n").innerHTML = ('ungültig');
} 
if (mittelwert>=15.3 && mittelwert<=42.4){
    let hrb = ( -0.000000024224366845793100000000*mittelwert**6 + 0.000003789963450651080000000000*mittelwert**5 - 0.000234726961948223000000000000*mittelwert**4 + 0.007325314721418430000000000000*mittelwert**3 - 0.129808466523268000000000000000*mittelwert**2 + 2.200735930579390000000000000000*mittelwert + 75.272946061797300000000000000000);
    hrb = hrb.toFixed(1);
    $("#hrb").html(hrb);
}

else{
    document.getElementById("hrb").innerHTML = ('ungültig');
} 
if (mittelwert>=15.3 && mittelwert<=42.4){
    let hrf = ( 0.000000094205430234417500000000*mittelwert**6 - 0.000016882123431183300000000000*mittelwert**5 + 0.001235260931179800000000000000*mittelwert**4 - 0.047131446657103400000000000000*mittelwert**3 + 0.982596209815145000000000000000*mittelwert**2 - 10.075514909903300000000000000000*mittelwert + 148.601157615101000000000000000000);
    hrf = hrf.toFixed(1);
    $("#hrf").html(hrf);
}

else{
    document.getElementById("hrf").innerHTML = ('ungültig');
} 
if (mittelwert>=15.3 && mittelwert<=42.4){
    let hr45t = ( 0.000000008386004723970330000000*mittelwert**6 - 0.000002028911117213370000000000*mittelwert**5 + 0.000185212859427289000000000000*mittelwert**4 - 0.008331070066072600000000000000*mittelwert**3 + 0.182958320588450000000000000000*mittelwert**2 - 0.808372521366615000000000000000*mittelwert + 56.215120074773800000000000000000);
    hr45t = hr45t.toFixed(1);
    $("#hr45t").html(hr45t);
}

else{
    document.getElementById("hr45t").innerHTML = ('ungültig');
} 

if (mittelwert>=15.3 && mittelwert<=42.4){
    let hr30t = ( 0.000000042156667101611600000000*mittelwert**6 - 0.000007211531068518350000000000*mittelwert**5 + 0.000501336562745167000000000000*mittelwert**4 - 0.018057358624412200000000000000*mittelwert**3 + 0.342148160272299000000000000000*mittelwert**2 - 2.368191860476550000000000000000*mittelwert + 75.641128918937100000000000000000);
    hr30t = hr30t.toFixed(1);
    $("#hr30t").html(hr30t);
}

else{
    document.getElementById("hr30t").innerHTML = ('ungültig');
} 
if (mittelwert>=15.3 && mittelwert<=42.4){
    let hr15t = ( 0.000000057470921022151300000000*mittelwert**6 - 0.000010334323509453300000000000*mittelwert**5 + 0.000756025954131262000000000000*mittelwert**4 - 0.028726459243106000000000000000*mittelwert**3 + 0.590278385317772000000000000000*mittelwert**2 - 5.801346263019910000000000000000*mittelwert + 109.166061307020000000000000000000);
    hr15t = hr15t.toFixed(1);
    $("#hr15t").html(hr15t);
}

else{
    document.getElementById("hr15t").innerHTML = ('ungültig');
} 
if (mittelwert>=15.3 && mittelwert<=47.2){
    let rm = ( 0.000000228949960323632000000000*mittelwert**6 - 0.000040957229927762700000000000*mittelwert**5 + 0.003011901334712210000000000000*mittelwert**4 - 0.112119351949432000000000000000*mittelwert**3 + 2.463170204019150000000000000000*mittelwert**2 - 14.561928827035500000000000000000*mittelwert + 564.876736179609000000000000000000);
    rm = rm.toFixed(1);
    $("#zug").html(rm);
}

else{
    document.getElementById("zug").innerHTML = ('ungültig');
} 
}
//HRA

if(verfahren===4){
   

   
    document.getElementById("hra").innerHTML = (mittelwert);

    if (mittelwert>=57.2 && mittelwert<=79.9){
        let hv = ( 0.0000019500456431842400000000000000000000*mittelwert**6 - 0.0007866841144391400000000000000000000000*mittelwert**5 + 0.1325272884382800000000000000000000000000*mittelwert**4 - 11.9147815538882000000000000000000000000000*mittelwert**3 + 602.5241271729650000000000000000000000000000*mittelwert**2 - 16238.3293649603000000000000000000000000000000*mittelwert + 182230.3897693610000000000000000000000000000000);
        hv = hv.toFixed(1);
        $("#vickers").html(hv);
    }

    else{
        document.getElementById("vickers").innerHTML = ('ungültig');
    } 
 
    if (mittelwert>=57.2 && mittelwert<=79.9){
    let HB = ( 0.00000186481400987759000000000000000*mittelwert**6 - 0.00077690384921425000000000000000000*mittelwert**5 + 0.13504314955662300000000000000000000*mittelwert**4 - 12.51480364305230000000000000000000000*mittelwert**3 + 651.67607352200000000000000000000000000*mittelwert**2 - 18065.95563640530000000000000000000000000*mittelwert + 208306.51692760100000000000000000000000000);
    HB = HB.toFixed(1);
    $("#brinell").html(HB);
    }

    else{
    document.getElementById("brinell").innerHTML = ('ungültig');
    } 
if (mittelwert>=57.2 && mittelwert<=79.9){
    let hrc = ( 0.000000192561794842838000000000*mittelwert**6 - 0.000080467616761392700000000000*mittelwert**5 + 0.013974688879770700000000000000*mittelwert**4 - 1.290996647921860000000000000000*mittelwert**3 + 66.914221423965600000000000000000*mittelwert**2 - 1843.427780146410000000000000000000*mittelwert + 21065.330664576400000000000000000000);
    hrc = hrc.toFixed(1);
    $("#hrc").html(hrc);
}

else{
    document.getElementById("hrc").innerHTML = ('ungültig');
} 
if (mittelwert>=57.2 && mittelwert<=79.9){
    let h45n = ( 0.0000001841090433440940000000000*mittelwert**6 - 0.0000773237947752747000000000000*mittelwert**5 + 0.0134920283406702000000000000000*mittelwert**4 - 1.2518617739543900000000000000000*mittelwert**3 + 65.1470595466464000000000000000000*mittelwert**2 - 1800.9611565028500000000000000000000*mittelwert + 20630.0244225070000000000000000000000);
    h45n = h45n.toFixed(1);
    $("#hr45n").html(h45n);
}

else{
    document.getElementById("hr45n").innerHTML = ('ungültig');
} 
if (mittelwert>=57.2 && mittelwert<=79.9){
    let h30n = ( -0.0000001876963557911890000000000*mittelwert**6 + 0.0000790265159164250000000000000*mittelwert**5 - 0.0138304333022578000000000000000*mittelwert**4 + 1.2877524929360900000000000000000*mittelwert**3 - 67.2737977473776000000000000000000*mittelwert**2 + 1871.0787319315300000000000000000000*mittelwert - 21644.1693582517000000000000000000000);
    h30n = h30n.toFixed(1);
    $("#hr30n").html(h30n);
}

else{
    document.getElementById("hr30n").innerHTML = ('ungültig');
} 
if (mittelwert>=57.2 && mittelwert<=79.9){
    let h15n = ( 0.0000000647634672557018000000000*mittelwert**6 - 0.0000273011636911846000000000000*mittelwert**5 + 0.0047836528188279100000000000000*mittelwert**4 - 0.4459171144952080000000000000000*mittelwert**3 + 23.3190474975056000000000000000000*mittelwert**2 - 647.4029427787310000000000000000000*mittelwert + 7493.5902562841500000000000000000000);
    h15n = h15n.toFixed(1);
    $("#hr15n").html(h15n);
}

else{
    document.getElementById("hr15n").innerHTML = ('ungültig');
} 
if (mittelwert>=57.2 && mittelwert<=79.9){
    let hrb = ( -0.000002622706620769580000000000*mittelwert**6 + 0.001008356817990830000000000000*mittelwert**5 - 0.161228754388432000000000000000*mittelwert**4 + 13.722623060467000000000000000000*mittelwert**3 - 655.740034843669000000000000000000*mittelwert**2 + 16682.583876473200000000000000000000*mittelwert - 176487.024499612000000000000000000000);
    hrb = hrb.toFixed(1);
    $("#hrb").html(hrb);
}

else{
    document.getElementById("hrb").innerHTML = ('ungültig');
} 
if (mittelwert>=57.2 && mittelwert<=72.2){
    let hrf = ( 0.000002020990940820870000000000*mittelwert**6 - 0.000798029176286264000000000000*mittelwert**5 + 0.131136866387027000000000000000*mittelwert**4 - 11.478457683851400000000000000000*mittelwert**3 + 564.418940149698000000000000000000*mittelwert**2 - 14781.153427328500000000000000000000*mittelwert + 161143.000960432000000000000000000000);
    hrf = hrf.toFixed(1);
    $("#hrf").html(hrf);
}

else{
    document.getElementById("hrf").innerHTML = ('ungültig');
} 
if (mittelwert>=57.2 && mittelwert<=72.2){
    let hr45t = ( -0.000001357336365970240000000000*mittelwert**6 + 0.000512386057374670000000000000*mittelwert**5 - 0.080373008125872100000000000000*mittelwert**4 + 6.704859348833240000000000000000*mittelwert**3 - 313.735653522734000000000000000000*mittelwert**2 + 7809.949428503040000000000000000000*mittelwert - 80797.205745738800000000000000000000);
    hr45t = hr45t.toFixed(1);
    $("#hr45t").html(hr45t);
}

else{
    document.getElementById("hr45t").innerHTML = ('ungültig');
} 

if (mittelwert>=57.2 && mittelwert<=72.2){
    let hr30t = ( 0.000000548031206193400000000000*mittelwert**6 - 0.000214102400545357000000000000*mittelwert**5 + 0.034824739208934800000000000000*mittelwert**4 - 3.018759562107780000000000000000*mittelwert**3 + 147.054156775194000000000000000000*mittelwert**2 - 3814.256214057920000000000000000000*mittelwert + 41181.520151462500000000000000000000);
    hr30t = hr30t.toFixed(1);
    $("#hr30t").html(hr30t);
}

else{
    document.getElementById("hr30t").innerHTML = ('ungültig');
} 
if (mittelwert>=57.2 && mittelwert<=72.2){
    let hr15t = ( 0.000001373692827044690000000000*mittelwert**6 - 0.000542468325700440000000000000*mittelwert**5 + 0.089120153995297400000000000000*mittelwert**4 - 7.796558708335200000000000000000*mittelwert**3 + 383.051792497778000000000000000000*mittelwert**2 - 10019.710234041500000000000000000000*mittelwert + 109079.051015442000000000000000000000);
    hr15t = hr15t.toFixed(1);
    $("#hr15t").html(hr15t);
}

else{
    document.getElementById("hr15t").innerHTML = ('ungültig');
} 
if (mittelwert>=57.2 && mittelwert<=72.2){
    let rm = ( 0.000029936378410866400000000000*mittelwert**6 - 0.011794174634656000000000000000*mittelwert**5 + 1.934395264515820000000000000000*mittelwert**4 - 169.024023586112000000000000000000*mittelwert**3 + 8298.063446104840000000000000000000*mittelwert**2 - 217003.355396947000000000000000000000*mittelwert + 2361767.101165650000000000000000000000);
    rm = rm.toFixed(1);
    $("#zug").html(rm);
}

else{
    document.getElementById("zug").innerHTML = ('ungültig');
} 
}

//HR45N
if(verfahren===5){
   

   
    document.getElementById("hr45n").innerHTML = (mittelwert);

    if (mittelwert>=13.4 && mittelwert<=62.8){
        let hv = ( 0.0000000038210575398212000000000000000000*mittelwert**6 - 0.0000004601710155871520000000000000000000*mittelwert**5 + 0.0000267619467466423000000000000000000000*mittelwert**4 - 0.0000458020273607729000000000000000000000*mittelwert**3 + 0.0262288900545916000000000000000000000000*mittelwert**2 + 3.0750420688784900000000000000000000000000*mittelwert + 163.4565645768670000000000000000000000000000);
        hv = hv.toFixed(1);
        $("#vickers").html(hv);
    }

    else{
        document.getElementById("vickers").innerHTML = ('ungültig');
    } 
 
    if (mittelwert>=13.4 && mittelwert<=62.8){
    let HB = ( 0.00000000637702002315166000000000000*mittelwert**6 - 0.00000152910126560712000000000000000*mittelwert**5 + 0.00016622319611392400000000000000000*mittelwert**4 - 0.00858192743012065000000000000000000*mittelwert**3 + 0.29052947446499000000000000000000000*mittelwert**2 - 0.80972204722949200000000000000000000*mittelwert + 179.65774033083400000000000000000000000);
    HB = HB.toFixed(1);
    $("#brinell").html(HB);
    }

    else{
    document.getElementById("brinell").innerHTML = ('ungültig');
    } 
    if (mittelwert>=13.4 && mittelwert<=62.8){
    let hrc = ( 0.000000000297070394325583000000*mittelwert**6 - 0.000000066016093219073400000000*mittelwert**5 + 0.000005973182517278810000000000*mittelwert**4 - 0.000283872586484299000000000000*mittelwert**3 + 0.007810970040014500000000000000*mittelwert**2 + 0.728043728491301000000000000000*mittelwert + 4.660203897936220000000000000000);
    hrc = hrc.toFixed(1);
    $("#hrc").html(hrc);
}

else{
    document.getElementById("hrc").innerHTML = ('ungültig');
} 
if (mittelwert>=13.4 && mittelwert<=62.8){
    let hra = ( -0.0000000009360651420653450000000*mittelwert**6 + 0.0000002280798987563950000000000*mittelwert**5 - 0.0000222563882119997000000000000*mittelwert**4 + 0.0011076158722965700000000000000*mittelwert**3 - 0.0300524016290652000000000000000*mittelwert**2 + 0.8978660259177710000000000000000*mittelwert + 48.5135521511079000000000000000000);
    hra = hra.toFixed(1);
    $("#hra").html(hra);
}

else{
    document.getElementById("hra").innerHTML = ('ungültig');
} 
if (mittelwert>=13.4 && mittelwert<=62.8){
    let h30n = ( -0.0000000032498149657445000000000*mittelwert**6 + 0.0000008030455599800090000000000*mittelwert**5 - 0.0000797307443544185000000000000*mittelwert**4 + 0.0040490686697328500000000000000*mittelwert**3 - 0.1105887666501940000000000000000*mittelwert**2 + 2.3261748829836700000000000000000*mittelwert + 17.2708273849209000000000000000000);
    h30n = h30n.toFixed(1);
    $("#hr30n").html(h30n);
}

else{
    document.getElementById("hr30n").innerHTML = ('ungültig');
} 
if (mittelwert>=13.4 && mittelwert<=62.8){
    let h15n = ( -0.0000000003309583440636030000000*mittelwert**6 + 0.0000000778139089940844000000000*mittelwert**5 - 0.0000072133238362248600000000000*mittelwert**4 + 0.0003360764562446630000000000000*mittelwert**3 - 0.0095201245664266300000000000000*mittelwert**2 + 0.6766241536318670000000000000000*mittelwert + 57.2224693016420000000000000000000);
    h15n = h15n.toFixed(1);
    $("#hr15n").html(h15n);
}

else{
    document.getElementById("hr15n").innerHTML = ('ungültig');
} 
if (mittelwert>=13.4 && mittelwert<=62.8){
    let hrb = ( -0.000000011694679974416600000000*mittelwert**6 + 0.000001864024851927490000000000*mittelwert**5 - 0.000115954686307079000000000000*mittelwert**4 + 0.003557633980985530000000000000*mittelwert**3 - 0.061999513068185300000000000000*mittelwert**2 + 1.363298353165560000000000000000*mittelwert + 82.104925615282500000000000000000);
    hrb = hrb.toFixed(1);
    $("#hrb").html(hrb);
}

else{
    document.getElementById("hrb").innerHTML = ('ungültig');
} 
if (mittelwert>=13.4 && mittelwert<=45.3){
    let hrf = ( 0.000000033370460672532700000000*mittelwert**6 - 0.000006146840764764680000000000*mittelwert**5 + 0.000459507399640058000000000000*mittelwert**4 - 0.017779543725020100000000000000*mittelwert**3 + 0.371205942568063000000000000000*mittelwert**2 - 3.525171840286120000000000000000*mittelwert + 121.412207029298000000000000000000);
    hrf = hrf.toFixed(1);
    $("#hrf").html(hrf);
}

else{
    document.getElementById("hrf").innerHTML = ('ungültig');
} 
if (mittelwert>=13.4 && mittelwert<=45.3){
    let hr45t = ( 0.000000001203219801571010000000*mittelwert**6 - 0.000000497462514759128000000000*mittelwert**5 + 0.000057330254122101000000000000*mittelwert**4 - 0.002943930579973070000000000000*mittelwert**3 + 0.065789887226837100000000000000*mittelwert**2 + 0.245384294259383000000000000000*mittelwert + 55.737310297644300000000000000000);
    hr45t = hr45t.toFixed(1);
    $("#hr45t").html(hr45t);
}

else{
    document.getElementById("hr45t").innerHTML = ('ungültig');
} 

if (mittelwert>=13.4 && mittelwert<=45.3){
    let hr30t = ( 0.000000015414869075636200000000*mittelwert**6 - 0.000002700053018822590000000000*mittelwert**5 + 0.000191042318601248000000000000*mittelwert**4 - 0.006954404231920490000000000000*mittelwert**3 + 0.128356853492644000000000000000*mittelwert**2 - 0.440104617598534000000000000000*mittelwert + 71.296735830379000000000000000000);
    hr30t = hr30t.toFixed(1);
    $("#hr30t").html(hr30t);
}

else{
    document.getElementById("hr30t").innerHTML = ('ungültig');
} 
if (mittelwert>=13.4 && mittelwert<=45.3){
    let hr15t = ( 0.000000020856461890872400000000*mittelwert**6 - 0.000003857834161813400000000000*mittelwert**5 + 0.000288205798779995000000000000*mittelwert**4 - 0.011085651773536500000000000000*mittelwert**3 + 0.226260582969014000000000000000*mittelwert**2 - 1.986184614660160000000000000000*mittelwert + 94.114679283317000000000000000000);
    hr15t = hr15t.toFixed(1);
    $("#hr15t").html(hr15t);
}

else{
    document.getElementById("hr15t").innerHTML = ('ungültig');
} 
if (mittelwert>=13.4 && mittelwert<=50.8){
    let rm = ( 0.000000225069348269713000000000*mittelwert**6 - 0.000041995810664818800000000000*mittelwert**5 + 0.003185399891533920000000000000*mittelwert**4 - 0.122600510217817000000000000000*mittelwert**3 + 2.704466248441610000000000000000*mittelwert**2 - 18.605391542493300000000000000000*mittelwert + 623.713143826534000000000000000000);
    rm = rm.toFixed(1);
    $("#zug").html(rm);
}

else{
    document.getElementById("zug").innerHTML = ('ungültig');
} 
}

//hr30N
if(verfahren===6){
   

   
    document.getElementById("hr30n").innerHTML = (mittelwert);

    if (mittelwert>=36.1 && mittelwert<=75){
        let hv = ( 0.0000000554556960352670000000000000000000*mittelwert**6 - 0.0000184634581417598000000000000000000000*mittelwert**5 + 0.0026061338802513900000000000000000000000*mittelwert**4 - 0.1954172718399090000000000000000000000000*mittelwert**3 + 8.2435432557388000000000000000000000000000*mittelwert**2 - 180.9012469699880000000000000000000000000000*mittelwert + 1774.2288319501900000000000000000000000000000);
        hv = hv.toFixed(1);
        $("#vickers").html(hv);
    }

    else{
        document.getElementById("vickers").innerHTML = ('ungültig');
    } 
 
    if (mittelwert>=36.1 && mittelwert<=75){
    let HB = ( 0.00000006499532989590050000000000000*mittelwert**6 - 0.00002327570160300940000000000000000*mittelwert**5 + 0.00347931683776881000000000000000000*mittelwert**4 - 0.27359409137406000000000000000000000*mittelwert**3 + 11.97978103187070000000000000000000000*mittelwert**2 - 272.27186358783100000000000000000000000*mittelwert + 2667.56898687800000000000000000000000000);
    HB = HB.toFixed(1);
    $("#brinell").html(HB);
    }

    else{
    document.getElementById("brinell").innerHTML = ('ungültig');
    } 
    if (mittelwert>=36.1 && mittelwert<=75){
    let hrc = ( 0.000000014121830774205300000000*mittelwert**6 - 0.000004915890410869820000000000*mittelwert**5 + 0.000705498525822695000000000000*mittelwert**4 - 0.053400750272090000000000000000*mittelwert**3 + 2.248306176810460000000000000000*mittelwert**2 - 48.854867591606800000000000000000*mittelwert + 433.212596881671000000000000000000);
    hrc = hrc.toFixed(1);
    $("#hrc").html(hrc);
}

else{
    document.getElementById("hrc").innerHTML = ('ungültig');
} 
if (mittelwert>=36.1 && mittelwert<=75){
    let hra = ( 0.0000000038146736811017800000000*mittelwert**6 - 0.0000013448098117388500000000000*mittelwert**5 + 0.0001954912250673610000000000000*mittelwert**4 - 0.0149886596942620000000000000000*mittelwert**3 + 0.6382443030623560000000000000000*mittelwert**2 - 13.6905915625088000000000000000000*mittelwert + 166.8163136476100000000000000000000);
    hra = hra.toFixed(1);
    $("#hra").html(hra);
}

else{
    document.getElementById("hra").innerHTML = ('ungültig');
} 
if (mittelwert>=36.1 && mittelwert<=75){
    let h45n = ( 0.0000000151932855463333000000000*mittelwert**6 - 0.0000053187752655670100000000000*mittelwert**5 + 0.0007671199828018270000000000000*mittelwert**4 - 0.0583119552897087000000000000000*mittelwert**3 + 2.4631907990133500000000000000000*mittelwert**2 - 53.5514343876615000000000000000000*mittelwert + 469.5481293659730000000000000000000);
    h45n = h45n.toFixed(1);
    $("#hr45n").html(h45n);
}

else{
    document.getElementById("hr45n").innerHTML = ('ungültig');
} 
if (mittelwert>=36.1 && mittelwert<=75){
    let h15n = ( 0.0000000073305329237327600000000*mittelwert**6 - 0.0000025662000803131100000000000*mittelwert**5 + 0.0003705242386094880000000000000*mittelwert**4 - 0.0282235287023457000000000000000*mittelwert**3 + 1.1936629195109000000000000000000*mittelwert**2 - 25.8727397044448000000000000000000*mittelwert + 283.2455686984460000000000000000000);
    h15n = h15n.toFixed(1);
    $("#hr15n").html(h15n);
}

else{
    document.getElementById("hr15n").innerHTML = ('ungültig');
} 
if (mittelwert>=36.1 && mittelwert<=61.4){
    let hrb = ( -0.000000057967127764513300000000*mittelwert**6 + 0.000015188004290900300000000000*mittelwert**5 - 0.001602333709732450000000000000*mittelwert**4 + 0.086153213934346600000000000000*mittelwert**3 - 2.449827660399870000000000000000*mittelwert**2 + 34.766102873354100000000000000000*mittelwert - 102.290890698656000000000000000000);
    hrb = hrb.toFixed(1);
    $("#hrb").html(hrb);
}

else{
    document.getElementById("hrb").innerHTML = ('ungültig');
} 
if (mittelwert>=36.1 && mittelwert<=61.4){
    let hrf = ( 0.000000130041849066842000000000*mittelwert**6 - 0.000039630298041837300000000000*mittelwert**5 + 0.005004921051271140000000000000*mittelwert**4 - 0.335159999752956000000000000000*mittelwert**3 + 12.543393295649800000000000000000*mittelwert**2 - 248.058357108064000000000000000000*mittelwert + 2128.347512213180000000000000000000);
    hrf = hrf.toFixed(1);
    $("#hrf").html(hrf);
}

else{
    document.getElementById("hrf").innerHTML = ('ungültig');
} 
if (mittelwert>=36.1 && mittelwert<=61.4){
    let hr45t = ( -0.000000006621270531859120000000*mittelwert**6 - 0.000000379964424612744000000000*mittelwert**5 + 0.000347204259400441000000000000*mittelwert**4 - 0.042923275358536900000000000000*mittelwert**3 + 2.310730416359180000000000000000*mittelwert**2 - 57.731230223129100000000000000000*mittelwert + 605.802423728184000000000000000000);
    hr45t = hr45t.toFixed(1);
    $("#hr45t").html(hr45t);
}

else{
    document.getElementById("hr45t").innerHTML = ('ungültig');
} 

if (mittelwert>=36.1 && mittelwert<=61.4){
    let hr30t = ( 0.000000052274143236275000000000*mittelwert**6 - 0.000016332151559872400000000000*mittelwert**5 + 0.002116340691523840000000000000*mittelwert**4 - 0.145506823106354000000000000000*mittelwert**3 + 5.582377566503400000000000000000*mittelwert**2 - 112.217413444704000000000000000000*mittelwert + 989.696102595356000000000000000000);
    hr30t = hr30t.toFixed(1);
    $("#hr30t").html(hr30t);
}

else{
    document.getElementById("hr30t").innerHTML = ('ungültig');
} 
if (mittelwert>=36.1 && mittelwert<=61.4){
    let hr15t = ( 0.000000078779252787875000000000*mittelwert**6 - 0.000024252394529100700000000000*mittelwert**5 + 0.003089019494754820000000000000*mittelwert**4 - 0.208314331615182000000000000000*mittelwert**3 + 7.836192375419100000000000000000*mittelwert**2 - 155.349774369207000000000000000000*mittelwert + 1351.779682331140000000000000000000);
    hr15t = hr15t.toFixed(1);
    $("#hr15t").html(hr15t);
}

else{
    document.getElementById("hr15t").innerHTML = ('ungültig');
} 
if (mittelwert>=36.1 && mittelwert<=65.8){
    let rm = ( 0.000000975205910247467000000000*mittelwert**6 - 0.000316181477449806000000000000*mittelwert**5 + 0.042422598074500800000000000000*mittelwert**4 - 3.006664566445250000000000000000*mittelwert**3 + 118.890827865618000000000000000000*mittelwert**2 - 2473.377535910710000000000000000000*mittelwert + 21630.123957386200000000000000000000);
    rm = rm.toFixed(1);
    $("#zug").html(rm);
}

else{
    document.getElementById("zug").innerHTML = ('ungültig');
} 
}
//hr15N
if(verfahren===7){
   

   
    document.getElementById("hr15n").innerHTML = (mittelwert);

    if (mittelwert>=36.1 && mittelwert<=75){
        let hv = ( 0.00000154257444684447000000000000000*mittelwert**6 - 0.00068920696105152500000000000000000*mittelwert**5 + 0.12858470488321100000000000000000000*mittelwert**4 - 12.80660810014180000000000000000000000*mittelwert**3 + 717.69540503603600000000000000000000000*mittelwert**2 - 21445.19841362500000000000000000000000000*mittelwert + 266922.04935837500000000000000000000000000);
        hv = hv.toFixed(1);
        $("#vickers").html(hv);
    }

    else{
        document.getElementById("vickers").innerHTML = ('ungültig');
    } 
 
    if (mittelwert>=36.1 && mittelwert<=75){
    let HB = ( 0.00000114932573147541000000000000000*mittelwert**6 - 0.00052905278670749600000000000000000*mittelwert**5 + 0.10183846941511200000000000000000000*mittelwert**4 - 10.47337473292950000000000000000000000*mittelwert**3 + 606.35752472605300000000000000000000000*mittelwert**2 - 18721.27659772230000000000000000000000000*mittelwert + 240770.66603263400000000000000000000000000);
    HB = HB.toFixed(1);
    $("#brinell").html(HB);
    }

    else{
    document.getElementById("brinell").innerHTML = ('ungültig');
    } 
    if (mittelwert>=36.1 && mittelwert<=75){
    let hrc = ( 0.00000005662763180591670000000000000*mittelwert**6 - 0.00002642167784356890000000000000000*mittelwert**5 + 0.00512373707252687000000000000000000*mittelwert**4 - 0.52850771337948000000000000000000000*mittelwert**3 + 30.58902251933410000000000000000000000*mittelwert**2 - 940.65639220250500000000000000000000000*mittelwert + 11984.61692641910000000000000000000000000);
    hrc = hrc.toFixed(1);
    $("#hrc").html(hrc);
}

else{
    document.getElementById("hrc").innerHTML = ('ungültig');
} 
if (mittelwert>=36.1 && mittelwert<=75){
    let hra = ( -0.00000004870702818848830000000000000*mittelwert**6 + 0.00002297352842113300000000000000000*mittelwert**5 - 0.00450591160287637000000000000000000*mittelwert**4 + 0.47039526183841600000000000000000000*mittelwert**3 - 27.56427194787200000000000000000000000*mittelwert**2 + 860.41103700959900000000000000000000000*mittelwert - 11142.15764822620000000000000000000000000);
    hra = hra.toFixed(1);
    $("#hra").html(hra);
}

else{
    document.getElementById("hra").innerHTML = ('ungültig');
} 
if (mittelwert>=36.1 && mittelwert<=75){
    let h45n = ( 0.00000002528502163201550000000000000*mittelwert**6 - 0.00001206418104366950000000000000000*mittelwert**5 + 0.00238717060905067000000000000000000*mittelwert**4 - 0.25068355595178000000000000000000000*mittelwert**3 + 14.74277887082220000000000000000000000*mittelwert**2 - 458.88444038507700000000000000000000000*mittelwert + 5874.77598125904000000000000000000000000);
    h45n = h45n.toFixed(1);
    $("#hr45n").html(h45n);
}

else{
    document.getElementById("hr45n").innerHTML = ('ungültig');
} 

if (mittelwert>=36.1 && mittelwert<=75){
    let h30n = ( -0.00000022652539111156500000000000000*mittelwert**6 + 0.00010704986039709000000000000000000*mittelwert**5 - 0.02103481293064550000000000000000000*mittelwert**4 + 2.19975843331253000000000000000000000*mittelwert**3 - 129.11751231708400000000000000000000000*mittelwert**2 + 4034.26495099705000000000000000000000000*mittelwert - 52418.73684504780000000000000000000000000);
    h30n = h30n.toFixed(1);
    $("#hr30n").html(h30n);
    }

    else{
    document.getElementById("hr30n").innerHTML = ('ungültig');
    } 
/*
if (mittelwert>=36.1 && mittelwert<=75){
    let h15n = ( 0.0000000073305329237327600000000*mittelwert**6 - 0.0000025662000803131100000000000*mittelwert**5 + 0.0003705242386094880000000000000*mittelwert**4 - 0.0282235287023457000000000000000*mittelwert**3 + 1.1936629195109000000000000000000*mittelwert**2 - 25.8727397044448000000000000000000*mittelwert + 283.2455686984460000000000000000000);
    h15n = h15n.toFixed(1);
    $("#hr15n").html(h15n);
}

else{
    document.getElementById("hr15n").innerHTML = ('ungültig');
} 
*/
if (mittelwert>=36.1 && mittelwert<=61.4){
    let hrb = ( -0.00000132729434909606000000000000000*mittelwert**6 + 0.00058278700280993700000000000000000*mittelwert**5 - 0.10646221480266700000000000000000000*mittelwert**4 + 10.35693175150710000000000000000000000*mittelwert**3 - 565.91651797117800000000000000000000000*mittelwert**2 + 16470.00080670940000000000000000000000000*mittelwert - 199412.79439726900000000000000000000000000);
    hrb = hrb.toFixed(1);
    $("#hrb").html(hrb);
}

else{
    document.getElementById("hrb").innerHTML = ('ungültig');
} 
if (mittelwert>=36.1 && mittelwert<=61.4){
    let hrf = ( 0.00000158482808032545000000000000000*mittelwert**6 - 0.00070229295449451000000000000000000*mittelwert**5 + 0.12953122571010700000000000000000000*mittelwert**4 - 12.72788797241220000000000000000000000*mittelwert**3 + 702.71421791961000000000000000000000000*mittelwert**2 - 20667.58276281840000000000000000000000000*mittelwert + 253056.43289002400000000000000000000000000);
    hrf = hrf.toFixed(1);
    $("#hrf").html(hrf);
}

else{
    document.getElementById("hrf").innerHTML = ('ungültig');
} 
if (mittelwert>=36.1 && mittelwert<=61.4){
    let hr45t = ( -0.00000055300874102215400000000000000*mittelwert**6 + 0.00023921897582823700000000000000000*mittelwert**5 - 0.04305131455927120000000000000000000*mittelwert**4 + 4.12567050603888000000000000000000000*mittelwert**3 - 222.06739096309100000000000000000000000*mittelwert**2 + 6368.34024694306000000000000000000000000*mittelwert - 76017.94875925140000000000000000000000000);
    hr45t = hr45t.toFixed(1);
    $("#hr45t").html(hr45t);
}

else{
    document.getElementById("hr45t").innerHTML = ('ungültig');
} 

if (mittelwert>=36.1 && mittelwert<=61.4){
    let hr30t = ( 0.00000067849325091629000000000000000*mittelwert**6 - 0.00029434851060159400000000000000000*mittelwert**5 + 0.05312528611268590000000000000000000*mittelwert**4 - 5.10606743682230000000000000000000000*mittelwert**3 + 275.62039915631600000000000000000000000*mittelwert**2 - 7920.01917565962000000000000000000000000*mittelwert + 94674.41673824270000000000000000000000000);
    hr30t = hr30t.toFixed(1);
    $("#hr30t").html(hr30t);
}

else{
    document.getElementById("hr30t").innerHTML = ('ungültig');
} 
if (mittelwert>=36.1 && mittelwert<=61.4){
    let hr15t = ( 0.00000082304421766821200000000000000*mittelwert**6 - 0.00036624137268290700000000000000000*mittelwert**5 + 0.06780529862460300000000000000000000*mittelwert**4 - 6.68537339692650000000000000000000000*mittelwert**3 + 370.22341009536700000000000000000000000*mittelwert**2 - 10917.10717625820000000000000000000000000*mittelwert + 133984.20296270000000000000000000000000000);
    hr15t = hr15t.toFixed(1);
    $("#hr15t").html(hr15t);
}

else{
    document.getElementById("hr15t").innerHTML = ('ungültig');
} 
if (mittelwert>=36.1 && mittelwert<=65.8){
    let rm = ( -0.00000706888249624171000000000000000*mittelwert**6 + 0.00323005438731343000000000000000000*mittelwert**5 - 0.61235453399385700000000000000000000*mittelwert**4 + 61.69790477335860000000000000000000000*mittelwert**3 - 3485.60606796473000000000000000000000000*mittelwert**2 + 104722.88601401300000000000000000000000000*mittelwert - 1307206.42369923000000000000000000000000000);
    rm = rm.toFixed(1);
    $("#zug").html(rm);
}

else{
    document.getElementById("zug").innerHTML = ('ungültig');
} 
}
//HRB
if(verfahren===8){
   

   
    document.getElementById("hrb").innerHTML = (mittelwert);

    if (mittelwert>=36.1 && mittelwert<=75){
        let hv = ( 0.00000576663531504096000000000000000*mittelwert**6 - 0.00358814412689696000000000000000000*mittelwert**5 + 0.93010879478813100000000000000000000*mittelwert**4 - 128.54840524752300000000000000000000000*mittelwert**3 + 9989.66480167085000000000000000000000000*mittelwert**2 - 413835.38226610900000000000000000000000000*mittelwert + 7139462.14778143000000000000000000000000000);
        hv = hv.toFixed(1);
        $("#vickers").html(hv);
        }
        else{
        document.getElementById("vickers").innerHTML = ('ungültig');
        } 
    
    if (mittelwert>=36.1 && mittelwert<=75){
        let HB = ( 0.00000653157473351484000000000000000*mittelwert**6 - 0.00401232668783109000000000000000000*mittelwert**5 + 1.02655029682376000000000000000000000*mittelwert**4 - 140.00503619080900000000000000000000000*mittelwert**3 + 10734.62519130000000000000000000000000000*mittelwert**2 - 438699.57123652200000000000000000000000000*mittelwert + 7465638.98298601000000000000000000000000000);
        HB = HB.toFixed(1);
        $("#brinell").html(HB);
        }
        else{
        document.getElementById("brinell").innerHTML = ('ungültig');
        } 
    if (mittelwert>=36.1 && mittelwert<=75){
        let hrc = ( 0.00000059960019216376300000000000000*mittelwert**6 - 0.00037388080147273700000000000000000*mittelwert**5 + 0.09705798474878230000000000000000000*mittelwert**4 - 13.42588522106240000000000000000000000*mittelwert**3 + 1043.70861131500000000000000000000000000*mittelwert**2 - 43231.51847479900000000000000000000000000*mittelwert + 745381.50761662300000000000000000000000000);
        hrc = hrc.toFixed(1);
        $("#hrc").html(hrc);
        }
        else{
        document.getElementById("hrc").innerHTML = ('ungültig');
        } 
    if (mittelwert>=36.1 && mittelwert<=75){
        let hra = ( 0.00000073106606102157900000000000000*mittelwert**6 - 0.00045719190924131700000000000000000*mittelwert**5 + 0.11902532884075600000000000000000000*mittelwert**4 - 16.51116645276990000000000000000000000*mittelwert**3 + 1287.15326693882000000000000000000000000*mittelwert**2 - 53464.30752232080000000000000000000000000*mittelwert + 924445.32028737900000000000000000000000000);
        hra = hra.toFixed(1);
        $("#hra").html(hra);
        }
    else{
        document.getElementById("hra").innerHTML = ('ungültig');
        } 
    if (mittelwert>=36.1 && mittelwert<=75){
        let h45n = ( 0.00000086006970922980500000000000000*mittelwert**6 - 0.00053677183172631300000000000000000*mittelwert**5 + 0.13946224759390300000000000000000000*mittelwert**4 - 19.30747120220490000000000000000000000*mittelwert**3 + 1502.13507487223000000000000000000000000*mittelwert**2 - 62268.71959155440000000000000000000000000*mittelwert + 1074436.70022507000000000000000000000000000);
        h45n = h45n.toFixed(1);
        $("#hr45n").html(h45n);
        }
        else{
        document.getElementById("hr45n").innerHTML = ('ungültig');
        } 

    if (mittelwert>=36.1 && mittelwert<=75){
        let h30n = ( 0.00000144314157557446000000000000000*mittelwert**6 - 0.00089939737588231600000000000000000*mittelwert**5 + 0.23329660608441500000000000000000000*mittelwert**4 - 32.23863783969600000000000000000000000*mittelwert**3 + 2503.06094482469000000000000000000000000*mittelwert**2 - 103528.18184921700000000000000000000000000*mittelwert + 1782060.06728819000000000000000000000000000);
        h30n = h30n.toFixed(1);
        $("#hr30n").html(h30n);
        }
        else{
        document.getElementById("hr30n").innerHTML = ('ungültig');
        } 

    if (mittelwert>=36.1 && mittelwert<=75){
        let h15n = ( 0.00000040702205605924700000000000000*mittelwert**6 - 0.00025571166536408900000000000000000*mittelwert**5 + 0.06687813315148010000000000000000000*mittelwert**4 - 9.31993377854482000000000000000000000*mittelwert**3 + 729.88004848163900000000000000000000000*mittelwert**2 - 30455.27244767930000000000000000000000000*mittelwert + 529010.76340090900000000000000000000000000);
        h15n = h15n.toFixed(1);
        $("#hr15n").html(h15n);
        }
        else{
        document.getElementById("hr15n").innerHTML = ('ungültig');
        } 
    /*
    if (mittelwert>=36.1 && mittelwert<=61.4){
        let hrb = ( -0.000000057967127764513300000000*mittelwert**6 + 0.000015188004290900300000000000*mittelwert**5 - 0.001602333709732450000000000000*mittelwert**4 + 0.086153213934346600000000000000*mittelwert**3 - 2.449827660399870000000000000000*mittelwert**2 + 34.766102873354100000000000000000*mittelwert - 102.290890698656000000000000000000);
        hrb = hrb.toFixed(1);
        $("#hrb").html(hrb);
        }
        else{
        document.getElementById("hrb").innerHTML = ('ungültig');
        }
    */ 
    if (mittelwert>=36.1 && mittelwert<=61.4){
        let hrf = ( 0.00000050690818476084600000000000000*mittelwert**6 - 0.00032071613587305600000000000000000*mittelwert**5 + 0.08447413377978280000000000000000000*mittelwert**4 - 11.85615344652880000000000000000000000*mittelwert**3 + 935.19412639694400000000000000000000000*mittelwert**2 - 39306.60009440550000000000000000000000000*mittelwert + 687825.30875070200000000000000000000000000);
        hrf = hrf.toFixed(1);
        $("#hrf").html(hrf);
        }

        else{
        document.getElementById("hrf").innerHTML = ('ungültig');
        } 
    if (mittelwert>=36.1 && mittelwert<=61.4){
        let hr45t = ( 0.00000050690818476084600000000000000*mittelwert**6 - 0.00032071613587305600000000000000000*mittelwert**5 + 0.08447413377978280000000000000000000*mittelwert**4 - 11.85615344652880000000000000000000000*mittelwert**3 + 935.19412639694400000000000000000000000*mittelwert**2 - 39306.60009440550000000000000000000000000*mittelwert + 687825.30875070200000000000000000000000000);
        hr45t = hr45t.toFixed(1);
        $("#hr45t").html(hr45t);
        }
        else{
        document.getElementById("hr45t").innerHTML = ('ungültig');
        } 

    if (mittelwert>=36.1 && mittelwert<=61.4){
        let hr30t = ( 0.00000080201982299854500000000000000*mittelwert**6 - 0.00050259584247953600000000000000000*mittelwert**5 + 0.13109511206140800000000000000000000*mittelwert**4 - 18.21817335977560000000000000000000000*mittelwert**3 + 1422.66261843765000000000000000000000000*mittelwert**2 - 59190.20337695560000000000000000000000000*mittelwert + 1025076.28909679000000000000000000000000000);
        hr30t = hr30t.toFixed(1);
        $("#hr30t").html(hr30t);
        }
        else{
        document.getElementById("hr30t").innerHTML = ('ungültig');
        } 
    if (mittelwert>=36.1 && mittelwert<=61.4){
        let hr15t = ( 0.00000015212856396829000000000000000*mittelwert**6 - 0.00009833183498813010000000000000000*mittelwert**5 + 0.02641894991884330000000000000000000*mittelwert**4 - 3.77702353103574000000000000000000000*mittelwert**3 + 303.08906740521800000000000000000000000*mittelwert**2 - 12944.28929452520000000000000000000000000*mittelwert + 229948.01856678500000000000000000000000000);
        hr15t = hr15t.toFixed(1);
        $("#hr15t").html(hr15t);
        }
        else{
        document.getElementById("hr15t").innerHTML = ('ungültig');
        } 
    if (mittelwert>=36.1 && mittelwert<=65.8){
        let rm = ( 0.00003140285470237810000000000000000*mittelwert**6 - 0.01963951819833480000000000000000000*mittelwert**5 + 5.11516796720574000000000000000000000*mittelwert**4 - 710.12346824479600000000000000000000000*mittelwert**3 + 55418.34158534410000000000000000000000000*mittelwert**2 - 2305026.74620161000000000000000000000000000*mittelwert + 39919006.88708810000000000000000000000000000);
        rm = rm.toFixed(1);
        $("#zug").html(rm);
        }
        else{
        document.getElementById("zug").innerHTML = ('ungültig');
        } 
}

setTimeout(remove, 3000);
}
}
function remove(){
 if ($('.ausgabe').hasClass('textDrehen')) {
     $('.ausgabe').removeClass('textDrehen');
     $('.angabe').removeClass('textDrehen');
     $('.ausgabeKarte').removeClass('drehen');
  }
}
