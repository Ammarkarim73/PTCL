

// function FirstFactorial(num) {
//     var myVar = 1;
//     for (var i = 1; i <= num; i++) {
//       myVar = myVar * i;
//       return myVar;
//     }
//   };
  
//   console.log(FirstFactorial(5));

const myFunction = () => {
    let abc, filter, ul, li, a, b, c, d, e, f, g, i, j, k, txtValue;
    abc = document.getElementById("myInput");
    filter = abc.value;
    ul = document.getElementsByTagName("tr");
    document.getElementById('ol').innerHTML = '';  
   
    if(!filter){
        for (i = 0; i < ul.length; i++) {
            li = ul[i].getElementsByTagName("td");
            for (j = 0; j < li.length; j++) {
                li[j].style.display = "";
            }}
    }else{ 
        if(isNaN(filter)){

            for (i = 0; i < ul.length; i++) {
                li = ul[i].getElementsByTagName("td"); 
                
                for (j = 0; j < li.length; j++) {
                     a = li[j].childNodes;
                     for (k = 0; k < a.length; k++) {
                        b = a[k];
                        if(b.id == 'input1'){
                            e = b.value;
                        }
                        if(b.id == 'input2'){
                                        txtValue = b.value;  
                                    }
                
            if(txtValue != undefined && txtValue != ''){
                // if(e != undefined && e != ''){
                //     f=e;
                // }
            for (let index = 0; index < 1; index++) {
            
                if (txtValue.indexOf(filter) > -1 == true) {
                    li[j].style.display = "";  
                    c = j;
                    c++
        
                    var classname;
                    var br;
                    
                    c==1 ? d='T/NO     : ':''
                    if(c == 2){
                        d='ADDRESS  : ';
                        classname = 'second';
                    }else{
                        classname='';
                    }
                    c==3 ? d='N.E      : ':''
                    c==4 ? d='PRY PAIR : ':''
                    c==5 ? d='SEC PAIR : ':''
                    c==6 ? d='MODEM ID : ':''
                    c==7 ? d='NTC BY   : ':''
                    c==8 ? d='DATE     : ':''
                    c==9 ? d='MODEM #  : ':''
        
                    if(c == 10){
                        c = 0
                        br = '<br />'}else{br = ''}
        
                    document.getElementById('p').innerHTML = 'You Have Searched From Address';
                    document.getElementById('ol').innerHTML += `<li class="${classname}"> ${d} ${b.value}</li>` + br + br;
        
                    
                }
                 else {
                    li[j].style.display = "none";
                }
        }
            }else{}
        }
        
                    
                }
        
        
            }


        }else {

            for (i = 0; i < ul.length; i++) {
                li = ul[i].getElementsByTagName("td"); 
                
                for (j = 0; j < li.length; j++) {
                     a = li[j].childNodes;
                     for (k = 0; k < a.length; k++) {
                        b = a[k];
                        if(b.id == 'input1'){
                                        txtValue = b.value;
                                        
                                    }
                
                    
            for (let index = 0; index < 1; index++) {
                
            
                if (txtValue.indexOf(filter) > -1 == true) {
                    li[j].style.display = "";  
                    c = j;
                    c++;
        
                    var classname;
                    var br;
        
                    if(c == 1){
                        d='T/NO     : ';
                        classname = 'first';
                    }else{
                        classname='';
                    }
                    c==2 ? d='ADDRESS  : ':''
                    c==3 ? d='N.E      : ':''
                    c==4 ? d='PRY PAIR : ':''
                    c==5 ? d='SEC PAIR : ':''
                    c==6 ? d='MODEM ID : ':''
                    c==7 ? d='NTC BY   : ':''
                    c==8 ? d='DATE     : ':''
                    c==9 ? d='MODEM #  : ':''
        
        
                    if(c == 10){
                        c = 0
                        br = '<br />'}else{br = ''}
        
                    document.getElementById('p').innerHTML = 'You Have Searched From Telephone Number';
                    document.getElementById('ol').innerHTML += `<li class="${classname}"> ${d} ${b.value}</li>` + br + br;
        
                    
                }
                 else {
                    li[j].style.display = "none";
                }
            }
            }
        
                    
                }
        
        
            }

        }


}
}

window.myFunction = myFunction;






// Import the functions you need from the SDKs you need
	import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
    import { doc, setDoc, collection, getFirestore, getDocs} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
	// TODO: Add SDKs for Firebase products that you want to use
	// https://firebase.google.com/docs/web/setup#available-libraries
  
	// Your web app's Firebase configuration
	// For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {};
  
	// Initialize Firebase
	const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    var a = 1;
    let content;
    let tableChild;
    let tbodyChild;
    let tdChild;
    let input;

    let val1;let val2;let val3;let val4;let val5;let val6;let val7;let val8;
    let val9;let val10;let val11;let val12;let val13;let val14;let val15;
    let val16;let val17;let val18;let val19;let val20;let val21;let val22;
    let val23;let val24;let val25;let val26;let val27;let val28;let val29;
    let val30;let val31;let val32;let val33;let val34;let val35;let val36;
    let val37;let val38;let val39;let val40;let val41;let val42;let val43;
    let val44;let val45;let val46;let val47;let val48;let val49;let val50;
    let val51;let val52;let val53;let val54;let val55;let val56;let val57;
    let val58;let val59;let val60;let val61;let val62;let val63;let val64;
    let val65;let val66;let val67;let val68;let val69;let val70;let val71;
    let val72;let val73;let val74;let val75;let val76;let val77;let val78;
    let val79;let val80;let val81;let val82;let val83;let val84;let val85;
    let val86;let val87;let val88;let val89;let val90;let val91;let val92;
    let val93;let val94;let val95;let val96;let val97;let val98;let val99;
    let val100;let val101;let val102;let val103;let val104;let val105;let val106;
    let val107;let val108;let val109;let val110;let val111;let val112;let val113;
    let val114;let val115;let val116;let val117;let val118;let val119;let val120;
    let val121;let val122;let val123;let val124;let val125;let val126;let val127;
    let val128;let val129;let val130;let val131;let val132;let val133;let val134;
    let val135;let val136;let val137;let val138;let val139;let val140;let val141;
    let val142;let val143;let val144;let val145;let val146;let val147;let val148;
    let val149;let val150;let val151;let val152;let val153;let val154;let val155;
    let val156;let val157;let val158;let val159;let val160;let val161;let val162;
    let val163;let val164;let val165;let val166;let val167;let val168;let val169;
    let val170;let val171;let val172;let val173;let val174;let val175;let val176;
    let val177;let val178;let val179;let val180;let val181;let val182;let val183;
    let val184;let val185;let val186;let val187;let val188;let val189;let val190;
    let val191;let val192;let val193;let val194;let val195;let val196;let val197;
    let val198;let val199;let val200;let val201;let val202;let val203;let val204;
    let val205;let val206;let val207;let val208;let val209;let val210;let val211;
    let val212;let val213;let val214;let val215;let val216;let val217;let val218;
    let val219;let val220;let val221;let val222;let val223;let val224;let val225;
    let val226;let val227;let val228;let val229;let val230;let val231;let val232;
    let val233;let val234;let val235;let val236;let val237;let val238;let val239;
    let val240;let val241;let val242;let val243;let val244;let val245;let val246;
    let val247;let val248;let val249;let val250;let val251;let val252;let val253;
    let val254;let val255;let val256;let val257;let val258;let val259;let val260;
    let val261;let val262;let val263;let val264;let val265;let val266;let val267;
    let val268;let val269;let val270;let val271;let val272;let val273;let val274;
    let val275;let val276;let val277;let val278;let val279;let val280;let val281;
    let val282;let val283;let val284;let val285;let val286;let val287;let val288;
    let val289;let val290;let val291;let val292;let val293;let val294;let val295;
    let val296;let val297;let val298;let val299;let val300;

    
    
    var J = 0;
    var m;
    var t;


    
      const updateDoc = async(id, month) => {
        var mon = document.getElementById(month).value;
        content = document.getElementById(id);
        tableChild = content.childNodes[3];
        for (var i = 0; i < 23; i++){
            tbodyChild = tableChild.childNodes[a];
            if(i >= 22){
                a++;
                if(a == 60){
                    i = 23
                }else{
                    i = 0
                }
            }else{ 
            }
            tdChild = tbodyChild.childNodes[i];
            try {
            input = tdChild.childNodes[0].value;
            if (input == undefined){
            }
            else{
                if(a == 1 && i == 3){
                val1 = input;
                }
                if(a == 1 && i == 5){
                    val2 = input;
                }
                if(a == 1 && i == 7){
                    val3 = input;
                }
                if(a == 1 && i == 9){
                    val4 = input;
                }
                if(a == 1 && i == 11){
                    val5 = input;
                }
                if(a == 1 && i == 13){
                    val6 = input;
                }
                if(a == 1 && i == 15){
                    val7 = input;
                }
                if(a == 1 && i == 17){
                    val8 = input;
                }
                if(a == 1 && i == 19){
                    val9 = input;
                }
                if(a == 1 && i == 21){
                    val10 = input;
                }
                if(a == 3 && i == 3){
                val11 = input;
                }
                if(a == 3 && i == 5){
                    val12 = input;
                }
                if(a == 3 && i == 7){
                    val13 = input;
                }
                if(a == 3 && i == 9){
                    val14 = input;
                }
                if(a == 3 && i == 11){
                    val15 = input;
                }
                if(a == 3 && i == 13){
                    val16 = input;
                }
                if(a == 3 && i == 15){
                    val17 = input;
                }
                if(a == 3 && i == 17){
                    val18 = input;
                }
                if(a == 3 && i == 19){
                    val19 = input;
                }
                if(a == 3 && i == 21){
                    val20 = input;
                }
                if(a == 5 && i == 3){
                val21 = input;
                }
                if(a == 5 && i == 5){
                    val22 = input;
                }
                if(a == 5 && i == 7){
                    val23 = input;
                }
                if(a == 5 && i == 9){
                    val24 = input;
                }
                if(a == 5 && i == 11){
                    val25 = input;
                }
                if(a == 5 && i == 13){
                    val26 = input;
                }
                if(a == 5 && i == 15){
                    val27 = input;
                }
                if(a == 5 && i == 17){
                    val28 = input;
                }
                if(a == 5 && i == 19){
                    val29 = input;
                }
                if(a == 5 && i == 21){
                    val30 = input;
                }
                if(a == 7 && i == 3){
                val31 = input;
                }
                if(a == 7 && i == 5){
                    val32 = input;
                }
                if(a == 7 && i == 7){
                    val33 = input;
                }
                if(a == 7 && i == 9){
                    val34 = input;
                }
                if(a == 7 && i == 11){
                    val35 = input;
                }
                if(a == 7 && i == 13){
                    val36 = input;
                }
                if(a == 7 && i == 15){
                    val37 = input;
                }
                if(a == 7 && i == 17){
                    val38 = input;
                }
                if(a == 7 && i == 19){
                    val39 = input;
                }
                if(a == 7 && i == 21){
                    val40 = input;
                }
                if(a == 9 && i == 3){
                val41 = input;
                }
                if(a == 9 && i == 5){
                    val42 = input;
                }
                if(a == 9 && i == 7){
                    val43 = input;
                }
                if(a == 9 && i == 9){
                    val44 = input;
                }
                if(a == 9 && i == 11){
                    val45 = input;
                }
                if(a == 9 && i == 13){
                    val46 = input;
                }
                if(a == 9 && i == 15){
                    val47 = input;
                }
                if(a == 9 && i == 17){
                    val48 = input;
                }
                if(a == 9 && i == 19){
                    val49 = input;
                }
                if(a == 9 && i == 21){
                    val50 = input;
                }
                if(a == 11 && i == 3){
                val51 = input;
                }
                if(a == 11 && i == 5){
                    val52 = input;
                }
                if(a == 11 && i == 7){
                    val53 = input;
                }
                if(a == 11 && i == 9){
                    val54 = input;
                }
                if(a == 11 && i == 11){
                    val55 = input;
                }
                if(a == 11 && i == 13){
                    val56 = input;
                }
                if(a == 11 && i == 15){
                    val57 = input;
                }
                if(a == 11 && i == 17){
                    val58 = input;
                }
                if(a == 11 && i == 19){
                    val59 = input;
                }
                if(a == 11 && i == 21){
                    val60 = input;
                }
                if(a == 13 && i == 3){
                val61 = input;
                }
                if(a == 13 && i == 5){
                    val62 = input;
                }
                if(a == 13 && i == 7){
                    val63 = input;
                }
                if(a == 13 && i == 9){
                    val64 = input;
                }
                if(a == 13 && i == 11){
                    val65 = input;
                }
                if(a == 13 && i == 13){
                    val66 = input;
                }
                if(a == 13 && i == 15){
                    val67 = input;
                }
                if(a == 13 && i == 17){
                    val68 = input;
                }
                if(a == 13 && i == 19){
                    val69 = input;
                }
                if(a == 13 && i == 21){
                    val70 = input;
                }
                if(a == 15 && i == 3){
                val71 = input;
                }
                if(a == 15 && i == 5){
                    val72 = input;
                }
                if(a == 15 && i == 7){
                    val73 = input;
                }
                if(a == 15 && i == 9){
                    val74 = input;
                }
                if(a == 15 && i == 11){
                    val75 = input;
                }
                if(a == 15 && i == 13){
                    val76 = input;
                }
                if(a == 15 && i == 15){
                    val77 = input;
                }
                if(a == 15 && i == 17){
                    val78 = input;
                }
                if(a == 15 && i == 19){
                    val79 = input;
                }
                if(a == 15 && i == 21){
                    val80 = input;
                }
                if(a == 17 && i == 3){
                val81 = input;
                }
                if(a == 17 && i == 5){
                    val82 = input;
                }
                if(a == 17 && i == 7){
                    val83 = input;
                }
                if(a == 17 && i == 9){
                    val84 = input;
                }
                if(a == 17 && i == 11){
                    val85 = input;
                }
                if(a == 17 && i == 13){
                    val86 = input;
                }
                if(a == 17 && i == 15){
                    val87 = input;
                }
                if(a == 17 && i == 17){
                    val88 = input;
                }
                if(a == 17 && i == 19){
                    val89 = input;
                }
                if(a == 17 && i == 21){
                    val90 = input;
                }
                if(a == 19 && i == 3){
                val91 = input;
                }
                if(a == 19 && i == 5){
                    val92 = input;
                }
                if(a == 19 && i == 7){
                    val93 = input;
                }
                if(a == 19 && i == 9){
                    val94 = input;
                }
                if(a == 19 && i == 11){
                    val95 = input;
                }
                if(a == 19 && i == 13){
                    val96 = input;
                }
                if(a == 19 && i == 15){
                    val97 = input;
                }
                if(a == 19 && i == 17){
                    val98 = input;
                }
                if(a == 19 && i == 19){
                    val99 = input;
                }
                if(a == 19 && i == 21){
                    val100 = input;
                }
                if(a == 21 && i == 3){
                val101 = input;
                }
                if(a == 21 && i == 5){
                    val102 = input;
                }
                if(a == 21 && i == 7){
                    val103 = input;
                }
                if(a == 21 && i == 9){
                    val104 = input;
                }
                if(a == 21 && i == 11){
                    val105 = input;
                }
                if(a == 21 && i == 13){
                    val106 = input;
                }
                if(a == 21 && i == 15){
                    val107 = input;
                }
                if(a == 21 && i == 17){
                    val108 = input;
                }
                if(a == 21 && i == 19){
                    val109 = input;
                }
                if(a == 21 && i == 21){
                    val110 = input;
                }
                if(a == 23 && i == 3){
                val111 = input;
                }
                if(a == 23 && i == 5){
                    val112 = input;
                }
                if(a == 23 && i == 7){
                    val113 = input;
                }
                if(a == 23 && i == 9){
                    val114 = input;
                }
                if(a == 23 && i == 11){
                    val115 = input;
                }
                if(a == 23 && i == 13){
                    val116 = input;
                }
                if(a == 23 && i == 15){
                    val117 = input;
                }
                if(a == 23 && i == 17){
                    val118 = input;
                }
                if(a == 23 && i == 19){
                    val119 = input;
                }
                if(a == 23 && i == 21){
                    val120 = input;
                }
                if(a == 25 && i == 3){
                val121 = input;
                }
                if(a == 25 && i == 5){
                    val122 = input;
                }
                if(a == 25 && i == 7){
                    val123 = input;
                }
                if(a == 25 && i == 9){
                    val124 = input;
                }
                if(a == 25 && i == 11){
                    val125 = input;
                }
                if(a == 25 && i == 13){
                    val126 = input;
                }
                if(a == 25 && i == 15){
                    val127 = input;
                }
                if(a == 25 && i == 17){
                    val128 = input;
                }
                if(a == 25 && i == 19){
                    val129 = input;
                }
                if(a == 25 && i == 21){
                    val130 = input;
                }
                if(a == 27 && i == 3){
                val131 = input;
                }
                if(a == 27 && i == 5){
                    val132 = input;
                }
                if(a == 27 && i == 7){
                    val133 = input;
                }
                if(a == 27 && i == 9){
                    val134 = input;
                }
                if(a == 27 && i == 11){
                    val135 = input;
                }
                if(a == 27 && i == 13){
                    val136 = input;
                }
                if(a == 27 && i == 15){
                    val137 = input;
                }
                if(a == 27 && i == 17){
                    val138 = input;
                }
                if(a == 27 && i == 19){
                    val139 = input;
                }
                if(a == 27 && i == 21){
                    val140 = input;
                }
                if(a == 29 && i == 3){
                val141 = input;
                }
                if(a == 29 && i == 5){
                    val142 = input;
                }
                if(a == 29 && i == 7){
                    val143 = input;
                }
                if(a == 29 && i == 9){
                    val144 = input;
                }
                if(a == 29 && i == 11){
                    val145 = input;
                }
                if(a == 29 && i == 13){
                    val146 = input;
                }
                if(a == 29 && i == 15){
                    val147 = input;
                }
                if(a == 29 && i == 17){
                    val148 = input;
                }
                if(a == 29 && i == 19){
                    val149 = input;
                }
                if(a == 29 && i == 21){
                    val150 = input;
                }
                if(a == 31 && i == 3){
                val151 = input;
                }
                if(a == 31 && i == 5){
                    val152 = input;
                }
                if(a == 31 && i == 7){
                    val153 = input;
                }
                if(a == 31 && i == 9){
                    val154 = input;
                }
                if(a == 31 && i == 11){
                    val155 = input;
                }
                if(a == 31 && i == 13){
                    val156 = input;
                }
                if(a == 31 && i == 15){
                    val157 = input;
                }
                if(a == 31 && i == 17){
                    val158 = input;
                }
                if(a == 31 && i == 19){
                    val159 = input;
                }
                if(a == 31 && i == 21){
                    val160 = input;
                }
                if(a == 33 && i == 3){
                val161 = input;
                }
                if(a == 33 && i == 5){
                    val162 = input;
                }
                if(a == 33 && i == 7){
                    val163 = input;
                }
                if(a == 33 && i == 9){
                    val164 = input;
                }
                if(a == 33 && i == 11){
                    val165 = input;
                }
                if(a == 33 && i == 13){
                    val166 = input;
                }
                if(a == 33 && i == 15){
                    val167 = input;
                }
                if(a == 33 && i == 17){
                    val168 = input;
                }
                if(a == 33 && i == 19){
                    val169 = input;
                }
                if(a == 33 && i == 21){
                    val170 = input;
                }
                if(a == 35 && i == 3){
                val171 = input;
                }
                if(a == 35 && i == 5){
                    val172 = input;
                }
                if(a == 35 && i == 7){
                    val173 = input;
                }
                if(a == 35 && i == 9){
                    val174 = input;
                }
                if(a == 35 && i == 11){
                    val175 = input;
                }
                if(a == 35 && i == 13){
                    val176 = input;
                }
                if(a == 35 && i == 15){
                    val177 = input;
                }
                if(a == 35 && i == 17){
                    val178 = input;
                }
                if(a == 35 && i == 19){
                    val179 = input;
                }
                if(a == 35 && i == 21){
                    val180 = input;
                }
                if(a == 37 && i == 3){
                val181 = input;
                }
                if(a == 37 && i == 5){
                    val182 = input;
                }
                if(a == 37 && i == 7){
                    val183 = input;
                }
                if(a == 37 && i == 9){
                    val184 = input;
                }
                if(a == 37 && i == 11){
                    val185 = input;
                }
                if(a == 37 && i == 13){
                    val186 = input;
                }
                if(a == 37 && i == 15){
                    val187 = input;
                }
                if(a == 37 && i == 17){
                    val188 = input;
                }
                if(a == 37 && i == 19){
                    val189 = input;
                }
                if(a == 37 && i == 21){
                    val190 = input;
                }
                if(a == 39 && i == 3){
                val191 = input;
                }
                if(a == 39 && i == 5){
                    val192 = input;
                }
                if(a == 39 && i == 7){
                    val193 = input;
                }
                if(a == 39 && i == 9){
                    val194 = input;
                }
                if(a == 39 && i == 11){
                    val195 = input;
                }
                if(a == 39 && i == 13){
                    val196 = input;
                }
                if(a == 39 && i == 15){
                    val197 = input;
                }
                if(a == 39 && i == 17){
                    val198 = input;
                }
                if(a == 39 && i == 19){
                    val199 = input;
                }
                if(a == 39 && i == 21){
                    val200 = input;
                }
                if(a == 41 && i == 3){
                val201 = input;
                }
                if(a == 41 && i == 5){
                    val202 = input;
                }
                if(a == 41 && i == 7){
                    val203 = input;
                }
                if(a == 41 && i == 9){
                    val204 = input;
                }
                if(a == 41 && i == 11){
                    val205 = input;
                }
                if(a == 41 && i == 13){
                    val206 = input;
                }
                if(a == 41 && i == 15){
                    val207 = input;
                }
                if(a == 41 && i == 17){
                    val208 = input;
                }
                if(a == 41 && i == 19){
                    val209 = input;
                }
                if(a == 41 && i == 21){
                    val210 = input;
                }
                if(a == 43 && i == 3){
                val211 = input;
                }
                if(a == 43 && i == 5){
                    val212 = input;
                }
                if(a == 43 && i == 7){
                    val213 = input;
                }
                if(a == 43 && i == 9){
                    val214 = input;
                }
                if(a == 43 && i == 11){
                    val215 = input;
                }
                if(a == 43 && i == 13){
                    val216 = input;
                }
                if(a == 43 && i == 15){
                    val217 = input;
                }
                if(a == 43 && i == 17){
                    val218 = input;
                }
                if(a == 43 && i == 19){
                    val219 = input;
                }
                if(a == 43 && i == 21){
                    val220 = input;
                }
                if(a == 45 && i == 3){
                val221 = input;
                }
                if(a == 45 && i == 5){
                    val222 = input;
                }
                if(a == 45 && i == 7){
                    val223 = input;
                }
                if(a == 45 && i == 9){
                    val224 = input;
                }
                if(a == 45 && i == 11){
                    val225 = input;
                }
                if(a == 45 && i == 13){
                    val226 = input;
                }
                if(a == 45 && i == 15){
                    val227 = input;
                }
                if(a == 45 && i == 17){
                    val228 = input;
                }
                if(a == 45 && i == 19){
                    val229 = input;
                }
                if(a == 45 && i == 21){
                    val230 = input;
                }
                if(a == 47 && i == 3){
                val231 = input;
                }
                if(a == 47 && i == 5){
                    val232 = input;
                }
                if(a == 47 && i == 7){
                    val233 = input;
                }
                if(a == 47 && i == 9){
                    val234 = input;
                }
                if(a == 47 && i == 11){
                    val235 = input;
                }
                if(a == 47 && i == 13){
                    val236 = input;
                }
                if(a == 47 && i == 15){
                    val237 = input;
                }
                if(a == 47 && i == 17){
                    val238 = input;
                }
                if(a == 47 && i == 19){
                    val239 = input;
                }
                if(a == 47 && i == 21){
                    val240 = input;
                }
                if(a == 49 && i == 3){
                val241 = input;
                }
                if(a == 49 && i == 5){
                    val242 = input;
                }
                if(a == 49 && i == 7){
                    val243 = input;
                }
                if(a == 49 && i == 9){
                    val244 = input;
                }
                if(a == 49 && i == 11){
                    val245 = input;
                }
                if(a == 49 && i == 13){
                    val246 = input;
                }
                if(a == 49 && i == 15){
                    val247 = input;
                }
                if(a == 49 && i == 17){
                    val248 = input;
                }
                if(a == 49 && i == 19){
                    val249 = input;
                }
                if(a == 49 && i == 21){
                    val250 = input;
                }
                if(a == 51 && i == 3){
                val251 = input;
                }
                if(a == 51 && i == 5){
                    val252 = input;
                }
                if(a == 51 && i == 7){
                    val253 = input;
                }
                if(a == 51 && i == 9){
                    val254 = input;
                }
                if(a == 51 && i == 11){
                    val255 = input;
                }
                if(a == 51 && i == 13){
                    val256 = input;
                }
                if(a == 51 && i == 15){
                    val257 = input;
                }
                if(a == 51 && i == 17){
                    val258 = input;
                }
                if(a == 51 && i == 19){
                    val259 = input;
                }
                if(a == 51 && i == 21){
                    val260 = input;
                }
                if(a == 53 && i == 3){
                val261 = input;
                }
                if(a == 53 && i == 5){
                    val262 = input;
                }
                if(a == 53 && i == 7){
                    val263 = input;
                }
                if(a == 53 && i == 9){
                    val264 = input;
                }
                if(a == 53 && i == 11){
                    val265 = input;
                }
                if(a == 53 && i == 13){
                    val266 = input;
                }
                if(a == 53 && i == 15){
                    val267 = input;
                }
                if(a == 53 && i == 17){
                    val268 = input;
                }
                if(a == 53 && i == 19){
                    val269 = input;
                }
                if(a == 53 && i == 21){
                    val270 = input;
                }
                if(a == 55 && i == 3){
                val271 = input;
                }
                if(a == 55 && i == 5){
                    val272 = input;
                }
                if(a == 55 && i == 7){
                    val273 = input;
                }
                if(a == 55 && i == 9){
                    val274 = input;
                }
                if(a == 55 && i == 11){
                    val275 = input;
                }
                if(a == 55 && i == 13){
                    val276 = input;
                }
                if(a == 55 && i == 15){
                    val277 = input;
                }
                if(a == 55 && i == 17){
                    val278 = input;
                }
                if(a == 55 && i == 19){
                    val279 = input;
                }
                if(a == 55 && i == 21){
                    val280 = input;
                }
                if(a == 57 && i == 3){
                val281 = input;
                }
                if(a == 57 && i == 5){
                    val282 = input;
                }
                if(a == 57 && i == 7){
                    val283 = input;
                }
                if(a == 57 && i == 9){
                    val284 = input;
                }
                if(a == 57 && i == 11){
                    val285 = input;
                }
                if(a == 57 && i == 13){
                    val286 = input;
                }
                if(a == 57 && i == 15){
                    val287 = input;
                }
                if(a == 57 && i == 17){
                    val288 = input;
                }
                if(a == 57 && i == 19){
                    val289 = input;
                }
                if(a == 57 && i == 21){
                    val290 = input;
                }
                if(a == 59 && i == 3){
                val291 = input;
                }
                if(a == 59 && i == 5){
                    val292 = input;
                }
                if(a == 59 && i == 7){
                    val293 = input;
                }
                if(a == 59 && i == 9){
                    val294 = input;
                }
                if(a == 59 && i == 11){
                    val295 = input;
                }
                if(a == 59 && i == 13){
                    val296 = input;
                }
                if(a == 59 && i == 15){
                    val297 = input;
                }
                if(a == 59 && i == 17){
                    val298 = input;
                }
                if(a == 59 && i == 19){
                    val299 = input;
                }
                if(a == 59 && i == 21){
                    val300 = input;
                }
            }
   
        } catch (error) {
         }

        }
        const docRef = doc(db, "table", id);
        await setDoc(docRef, {
            month: month,mon: mon,input1: val1,input2: val2,input3: val3,input4: val4,input5: val5,
            input6: val6,input7: val7,input8: val8,input9: val9,input10: val10,
            input11: val11,input12: val12,input13: val13,input14: val14,input15: val15,
            input16: val16,input17: val17,input18: val18,input19: val19,input20: val20,
            input21: val21,input22: val22,input23: val23,input24: val24,input25: val25,
            input26: val26,input27: val27,input28: val28,input29: val29,input30: val30,
            input31: val31,input32: val32,input33: val33,input34: val34,input35: val35,
            input36: val36,input37: val37,input38: val38,input39: val39,input40: val40,
            input41: val41,input42: val42,input43: val43,input44: val44,input45: val45,
            input46: val46,input47: val47,input48: val48,input49: val49,input50: val50,
            input51: val51,input52: val52,input53: val53,input54: val54,input55: val55,
            input56: val56,input57: val57,input58: val58,input59: val59,input60: val60,
            input61: val61,input62: val62,input63: val63,input64: val64,input65: val65,
            input66: val66,input67: val67,input68: val68,input69: val69,input70: val70,
            input71: val71,input72: val72,input73: val73,input74: val74,input75: val75,
            input76: val76,input77: val77,input78: val78,input79: val79,input80: val80,
            input81: val81,input82: val82,input83: val83,input84: val84,input85: val85,
            input86: val86,input87: val87,input88: val88,input89: val89,input90: val90,
            input91: val91,input92: val92,input93: val93,input94: val94,input95: val95,
            input96: val96,input97: val97,input98: val98,input99: val99,input100: val100,
            input101: val101,input102: val102,input103: val103,input104: val104,input105: val105,
            input106: val106,input107: val107,input108: val108,input109: val109,input110: val110,
            input111: val111,input112: val112,input113: val113,input114: val114,input115: val115,
            input116: val116,input117: val117,input118: val118,input119: val119,input120: val120,
            input121: val121,input122: val122,input123: val123,input124: val124,input125: val125,
            input126: val126,input127: val127,input128: val128,input129: val129,input130: val130,
            input131: val131,input132: val132,input133: val133,input134: val134,input135: val135,
            input136: val136,input137: val137,input138: val138,input139: val139,input140: val140,
            input141: val141,input142: val142,input143: val143,input144: val144,input145: val145,
            input146: val146,input147: val147,input148: val148,input149: val149,input150: val150,
            input151: val151,input152: val152,input153: val153,input154: val154,input155: val155,
            input156: val156,input157: val157,input158: val158,input159: val159,input160: val160,
            input161: val161,input162: val162,input163: val163,input164: val164,input165: val165,
            input166: val166,input167: val167,input168: val168,input169: val169,input170: val170,
            input171: val171,input172: val172,input173: val173,input174: val174,input175: val175,
            input176: val176,input177: val177,input178: val178,input179: val179,input180: val180,
            input181: val181,input182: val182,input183: val183,input184: val184,input185: val185,
            input186: val186,input187: val187,input188: val188,input189: val189,input190: val190,
            input191: val191,input192: val192,input193: val193,input194: val194,input195: val195,
            input196: val196,input197: val197,input198: val198,input199: val199,input200: val200,
            input201: val201,input202: val202,input203: val203,input204: val204,input205: val205,
            input206: val206,input207: val207,input208: val208,input209: val209,input210: val210,
            input211: val211,input212: val212,input213: val213,input214: val214,input215: val215,
            input216: val216,input217: val217,input218: val218,input219: val219,input220: val220,
            input221: val221,input222: val222,input223: val223,input224: val224,input225: val225,
            input226: val226,input227: val227,input228: val228,input229: val229,input230: val230,
            input231: val231,input232: val232,input233: val233,input234: val234,input235: val235,
            input236: val236,input237: val237,input238: val238,input239: val239,input240: val240,
            input241: val241,input242: val242,input243: val243,input244: val244,input245: val245,
            input246: val246,input247: val247,input248: val248,input249: val249,input250: val250,
            input251: val251,input252: val252,input253: val253,input254: val254,input255: val255,
            input256: val256,input257: val257,input258: val258,input259: val259,input260: val260,
            input261: val261,input262: val262,input263: val263,input264: val264,input265: val265,
            input266: val266,input267: val267,input268: val268,input269: val269,input270: val270,
            input271: val271,input272: val272,input273: val273,input274: val274,input275: val275,
            input276: val276,input277: val277,input278: val278,input279: val279,input280: val280,
            input281: val281,input282: val282,input283: val283,input284: val284,input285: val285,
            input286: val286,input287: val287,input288: val288,input289: val289,input290: val290,
            input291: val291,input292: val292,input293: val293,input294: val294,input295: val295,
            input296: val296,input297: val297,input298: val298,input299: val299,input300: val300
         });
         alert('your data has been stored');
         window.open('./index.html', '_self');
      }
      window.updateDoc = updateDoc;




      window.onload = async() => {
        const querySnapshot = await getDocs(collection(db, "table"));
        querySnapshot.forEach((doc) => { 
            const div = `    <center>

<p>Month: <input id="${doc.data().month}" class="month" type="text" value="${doc.data().mon}"/></p>

<table id="${doc.id}" border="1" width="1350px">


    <thead>
        <th>S/NO</th>
        <th>T/NO</th>
        <th>ADDRESS</th>
        <th>N.E</th>
        <th>PRY PAIR</th>
        <th>SEC PAIR</th>
        <th>MODEM ID</th>
        <th>NTC BY</th>
        <th>DATE</th>
        <th colspan="11">MODEM #</th>
    </thead>

    <tbody>
        <tr align="center">

        <th>1</th>
        <td><input id="input1" class="input" type="number" value="${doc.data().input1}" /></td>
        <td><input id="input2" class="input" type="text" value="${doc.data().input2}" /></td>
        <td><input id="input3" class="input" type="text" value="${doc.data().input3}" /></td>
        <td><input id="input4" class="input" type="text" value="${doc.data().input4}" /></td>
        <td><input id="input5" class="input" type="text" value="${doc.data().input5}" /></td>
        <td><input id="input6" class="input" type="text" value="${doc.data().input6}" /></td>
        <td><input id="input7" class="input" type="text" value="${doc.data().input7}" /></td>
        <td><input id="input8" class="input" type="date" value="${doc.data().input8}" /></td>
        <td><input id="input9" class="input" type="text" value="${doc.data().input9}" /></td>
        <td><input id="input10" class="input" type="text" value="${doc.data().input10}" /></td>

        </tr>

        
        <tr align="center">

        <th>2</th>
        <td><input id="input1" class="input" type="number" value="${doc.data().input11}" /></td>
        <td><input id="input2" class="input" type="text" value="${doc.data().input12}" /></td>
        <td><input id="input3" class="input" type="text" value="${doc.data().input13}" /></td>
        <td><input id="input4" class="input" type="text" value="${doc.data().input14}" /></td>
        <td><input id="input5" class="input" type="text" value="${doc.data().input15}" /></td>
        <td><input id="input6" class="input" type="text" value="${doc.data().input16}" /></td>
        <td><input id="input7" class="input" type="text" value="${doc.data().input17}" /></td>
        <td><input id="input8" class="input" type="date" value="${doc.data().input18}" /></td>
        <td><input id="input9" class="input" type="text" value="${doc.data().input19}" /></td>
        <td><input id="input10" class="input" type="text" value="${doc.data().input20}" /></td>

        </tr>

        
        <tr align="center">

        <th>3</th>
        <td><input id="input1" class="input" type="number" value="${doc.data().input21}" /></td>
        <td><input id="input2" class="input" type="text" value="${doc.data().input22}" /></td>
        <td><input id="input3" class="input" type="text" value="${doc.data().input23}" /></td>
        <td><input id="input4" class="input" type="text" value="${doc.data().input24}" /></td>
        <td><input id="input5" class="input" type="text" value="${doc.data().input25}" /></td>
        <td><input id="input6" class="input" type="text" value="${doc.data().input26}" /></td>
        <td><input id="input7" class="input" type="text" value="${doc.data().input27}" /></td>
        <td><input id="input8" class="input" type="date" value="${doc.data().input28}" /></td>
        <td><input id="input9" class="input" type="text" value="${doc.data().input29}" /></td>
        <td><input id="input10" class="input" type="text" value="${doc.data().input30}" /></td>

        </tr>

        
        <tr align="center">

        <th>4</th>
        <td><input id="input1" class="input" type="number" value="${doc.data().input31}" /></td>
        <td><input id="input2" class="input" type="text" value="${doc.data().input32}" /></td>
        <td><input id="input3" class="input" type="text" value="${doc.data().input33}" /></td>
        <td><input id="input4" class="input" type="text" value="${doc.data().input34}" /></td>
        <td><input id="input5" class="input" type="text" value="${doc.data().input35}" /></td>
        <td><input id="input6" class="input" type="text" value="${doc.data().input36}" /></td>
        <td><input id="input7" class="input" type="text" value="${doc.data().input37}" /></td>
        <td><input id="input8" class="input" type="date" value="${doc.data().input38}" /></td>
        <td><input id="input9" class="input" type="text" value="${doc.data().input39}" /></td>
        <td><input id="input10" class="input" type="text" value="${doc.data().input40}" /></td>

        </tr>

        
        <tr align="center">

        <th>5</th>
        <td><input id="input1" class="input" type="number" value="${doc.data().input41}" /></td>
        <td><input id="input2" class="input" type="text" value="${doc.data().input42}" /></td>
        <td><input id="input3" class="input" type="text" value="${doc.data().input43}" /></td>
        <td><input id="input4" class="input" type="text" value="${doc.data().input44}" /></td>
        <td><input id="input5" class="input" type="text" value="${doc.data().input45}" /></td>
        <td><input id="input6" class="input" type="text" value="${doc.data().input46}" /></td>
        <td><input id="input7" class="input" type="text" value="${doc.data().input47}" /></td>
        <td><input id="input8" class="input" type="date" value="${doc.data().input48}" /></td>
        <td><input id="input9" class="input" type="text" value="${doc.data().input49}" /></td>
        <td><input id="input10" class="input" type="text" value="${doc.data().input50}" /></td>

        </tr>

        
        <tr align="center">

        <th>6</th>
        <td><input id="input1" class="input" type="number" value="${doc.data().input51}" /></td>
        <td><input id="input2" class="input" type="text" value="${doc.data().input52}" /></td>
        <td><input id="input3" class="input" type="text" value="${doc.data().input53}" /></td>
        <td><input id="input4" class="input" type="text" value="${doc.data().input54}" /></td>
        <td><input id="input5" class="input" type="text" value="${doc.data().input55}" /></td>
        <td><input id="input6" class="input" type="text" value="${doc.data().input56}" /></td>
        <td><input id="input7" class="input" type="text" value="${doc.data().input57}" /></td>
        <td><input id="input8" class="input" type="date" value="${doc.data().input58}" /></td>
        <td><input id="input9" class="input" type="text" value="${doc.data().input59}" /></td>
        <td><input id="input10" class="input" type="text" value="${doc.data().input60}" /></td>

        </tr>

        
        <tr align="center">

        <th>7</th>
        <td><input id="input1" class="input" type="number" value="${doc.data().input61}" /></td>
        <td><input id="input2" class="input" type="text" value="${doc.data().input62}" /></td>
        <td><input id="input3" class="input" type="text" value="${doc.data().input63}" /></td>
        <td><input id="input4" class="input" type="text" value="${doc.data().input64}" /></td>
        <td><input id="input5" class="input" type="text" value="${doc.data().input65}" /></td>
        <td><input id="input6" class="input" type="text" value="${doc.data().input66}" /></td>
        <td><input id="input7" class="input" type="text" value="${doc.data().input67}" /></td>
        <td><input id="input8" class="input" type="date" value="${doc.data().input68}" /></td>
        <td><input id="input9" class="input" type="text" value="${doc.data().input69}" /></td>
        <td><input id="input10" class="input" type="text" value="${doc.data().input70}" /></td>

        </tr>

        
        <tr align="center">

        <th>8</th>
        <td><input id="input1" class="input" type="number" value="${doc.data().input71}" /></td>
        <td><input id="input2" class="input" type="text" value="${doc.data().input72}" /></td>
        <td><input id="input3" class="input" type="text" value="${doc.data().input73}" /></td>
        <td><input id="input4" class="input" type="text" value="${doc.data().input74}" /></td>
        <td><input id="input5" class="input" type="text" value="${doc.data().input75}" /></td>
        <td><input id="input6" class="input" type="text" value="${doc.data().input76}" /></td>
        <td><input id="input7" class="input" type="text" value="${doc.data().input77}" /></td>
        <td><input id="input8" class="input" type="date" value="${doc.data().input78}" /></td>
        <td><input id="input9" class="input" type="text" value="${doc.data().input79}" /></td>
        <td><input id="input10" class="input" type="text" value="${doc.data().input80}" /></td>

        </tr>

        
        <tr align="center">

        <th>9</th>
        <td><input id="input1" class="input" type="number" value="${doc.data().input81}" /></td>
        <td><input id="input2" class="input" type="text" value="${doc.data().input82}" /></td>
        <td><input id="input3" class="input" type="text" value="${doc.data().input83}" /></td>
        <td><input id="input4" class="input" type="text" value="${doc.data().input84}" /></td>
        <td><input id="input5" class="input" type="text" value="${doc.data().input85}" /></td>
        <td><input id="input6" class="input" type="text" value="${doc.data().input86}" /></td>
        <td><input id="input7" class="input" type="text" value="${doc.data().input87}" /></td>
        <td><input id="input8" class="input" type="date" value="${doc.data().input88}" /></td>
        <td><input id="input9" class="input" type="text" value="${doc.data().input89}" /></td>
        <td><input id="input10" class="input" type="text" value="${doc.data().input90}" /></td>

        </tr>

        
        <tr align="center">

        <th>10</th>
        <td><input id="input1" class="input" type="number" value="${doc.data().input91}" /></td>
        <td><input id="input2" class="input" type="text" value="${doc.data().input92}" /></td>
        <td><input id="input3" class="input" type="text" value="${doc.data().input93}" /></td>
        <td><input id="input4" class="input" type="text" value="${doc.data().input94}" /></td>
        <td><input id="input5" class="input" type="text" value="${doc.data().input95}" /></td>
        <td><input id="input6" class="input" type="text" value="${doc.data().input96}" /></td>
        <td><input id="input7" class="input" type="text" value="${doc.data().input97}" /></td>
        <td><input id="input8" class="input" type="date" value="${doc.data().input98}" /></td>
        <td><input id="input9" class="input" type="text" value="${doc.data().input99}" /></td>
        <td><input id="input10" class="input" type="text" value="${doc.data().input100}" /></td>

        </tr>

        
        <tr align="center">

        <th>11</th>
        <td><input id="input1" class="input" type="number" value="${doc.data().input101}" /></td>
        <td><input id="input2" class="input" type="text" value="${doc.data().input102}" /></td>
        <td><input id="input3" class="input" type="text" value="${doc.data().input103}" /></td>
        <td><input id="input4" class="input" type="text" value="${doc.data().input104}" /></td>
        <td><input id="input5" class="input" type="text" value="${doc.data().input105}" /></td>
        <td><input id="input6" class="input" type="text" value="${doc.data().input106}" /></td>
        <td><input id="input7" class="input" type="text" value="${doc.data().input107}" /></td>
        <td><input id="input8" class="input" type="date" value="${doc.data().input108}" /></td>
        <td><input id="input9" class="input" type="text" value="${doc.data().input109}" /></td>
        <td><input id="input10" class="input" type="text" value="${doc.data().input110}" /></td>

        </tr>

        
        <tr align="center">

        <th>12</th>
        <td><input id="input1" class="input" type="number" value="${doc.data().input111}" /></td>
        <td><input id="input2" class="input" type="text" value="${doc.data().input112}" /></td>
        <td><input id="input3" class="input" type="text" value="${doc.data().input113}" /></td>
        <td><input id="input4" class="input" type="text" value="${doc.data().input114}" /></td>
        <td><input id="input5" class="input" type="text" value="${doc.data().input115}" /></td>
        <td><input id="input6" class="input" type="text" value="${doc.data().input116}" /></td>
        <td><input id="input7" class="input" type="text" value="${doc.data().input117}" /></td>
        <td><input id="input8" class="input" type="date" value="${doc.data().input118}" /></td>
        <td><input id="input9" class="input" type="text" value="${doc.data().input119}" /></td>
        <td><input id="input10" class="input" type="text" value="${doc.data().input120}" /></td>

        </tr>

        
        <tr align="center">

        <th>13</th>
        <td><input id="input1" class="input" type="number" value="${doc.data().input121}" /></td>
        <td><input id="input2" class="input" type="text" value="${doc.data().input122}" /></td>
        <td><input id="input3" class="input" type="text" value="${doc.data().input123}" /></td>
        <td><input id="input4" class="input" type="text" value="${doc.data().input124}" /></td>
        <td><input id="input5" class="input" type="text" value="${doc.data().input125}" /></td>
        <td><input id="input6" class="input" type="text" value="${doc.data().input126}" /></td>
        <td><input id="input7" class="input" type="text" value="${doc.data().input127}" /></td>
        <td><input id="input8" class="input" type="date" value="${doc.data().input128}" /></td>
        <td><input id="input9" class="input" type="text" value="${doc.data().input129}" /></td>
        <td><input id="input10" class="input" type="text" value="${doc.data().input130}" /></td>

        </tr>

        
        <tr align="center">

        <th>14</th>
        <td><input id="input1" class="input" type="number" value="${doc.data().input131}" /></td>
        <td><input id="input2" class="input" type="text" value="${doc.data().input132}" /></td>
        <td><input id="input3" class="input" type="text" value="${doc.data().input133}" /></td>
        <td><input id="input4" class="input" type="text" value="${doc.data().input134}" /></td>
        <td><input id="input5" class="input" type="text" value="${doc.data().input135}" /></td>
        <td><input id="input6" class="input" type="text" value="${doc.data().input136}" /></td>
        <td><input id="input7" class="input" type="text" value="${doc.data().input137}" /></td>
        <td><input id="input8" class="input" type="date" value="${doc.data().input138}" /></td>
        <td><input id="input9" class="input" type="text" value="${doc.data().input139}" /></td>
        <td><input id="input10" class="input" type="text" value="${doc.data().input140}" /></td>

        </tr>

        
        <tr align="center">

        <th>15</th>
        <td><input id="input1" class="input" type="number" value="${doc.data().input141}" /></td>
        <td><input id="input2" class="input" type="text" value="${doc.data().input142}" /></td>
        <td><input id="input3" class="input" type="text" value="${doc.data().input143}" /></td>
        <td><input id="input4" class="input" type="text" value="${doc.data().input144}" /></td>
        <td><input id="input5" class="input" type="text" value="${doc.data().input145}" /></td>
        <td><input id="input6" class="input" type="text" value="${doc.data().input146}" /></td>
        <td><input id="input7" class="input" type="text" value="${doc.data().input147}" /></td>
        <td><input id="input8" class="input" type="date" value="${doc.data().input148}" /></td>
        <td><input id="input9" class="input" type="text" value="${doc.data().input149}" /></td>
        <td><input id="input10" class="input" type="text" value="${doc.data().input150}" /></td>

        </tr>

        
        <tr align="center">

        <th>16</th>
        <td><input id="input1" class="input" type="number" value="${doc.data().input151}" /></td>
        <td><input id="input2" class="input" type="text" value="${doc.data().input152}" /></td>
        <td><input id="input3" class="input" type="text" value="${doc.data().input153}" /></td>
        <td><input id="input4" class="input" type="text" value="${doc.data().input154}" /></td>
        <td><input id="input5" class="input" type="text" value="${doc.data().input155}" /></td>
        <td><input id="input6" class="input" type="text" value="${doc.data().input156}" /></td>
        <td><input id="input7" class="input" type="text" value="${doc.data().input157}" /></td>
        <td><input id="input8" class="input" type="date" value="${doc.data().input158}" /></td>
        <td><input id="input9" class="input" type="text" value="${doc.data().input159}" /></td>
        <td><input id="input10" class="input" type="text" value="${doc.data().input160}" /></td>

        </tr>

        
        <tr align="center">

        <th>17</th>
        <td><input id="input1" class="input" type="number" value="${doc.data().input161}" /></td>
        <td><input id="input2" class="input" type="text" value="${doc.data().input162}" /></td>
        <td><input id="input3" class="input" type="text" value="${doc.data().input163}" /></td>
        <td><input id="input4" class="input" type="text" value="${doc.data().input164}" /></td>
        <td><input id="input5" class="input" type="text" value="${doc.data().input165}" /></td>
        <td><input id="input6" class="input" type="text" value="${doc.data().input166}" /></td>
        <td><input id="input7" class="input" type="text" value="${doc.data().input167}" /></td>
        <td><input id="input8" class="input" type="date" value="${doc.data().input168}" /></td>
        <td><input id="input9" class="input" type="text" value="${doc.data().input169}" /></td>
        <td><input id="input10" class="input" type="text" value="${doc.data().input170}" /></td>

        </tr>

        
        <tr align="center">

        <th>18</th>
        <td><input id="input1" class="input" type="number" value="${doc.data().input171}" /></td>
        <td><input id="input2" class="input" type="text" value="${doc.data().input172}" /></td>
        <td><input id="input3" class="input" type="text" value="${doc.data().input173}" /></td>
        <td><input id="input4" class="input" type="text" value="${doc.data().input174}" /></td>
        <td><input id="input5" class="input" type="text" value="${doc.data().input175}" /></td>
        <td><input id="input6" class="input" type="text" value="${doc.data().input176}" /></td>
        <td><input id="input7" class="input" type="text" value="${doc.data().input177}" /></td>
        <td><input id="input8" class="input" type="date" value="${doc.data().input178}" /></td>
        <td><input id="input9" class="input" type="text" value="${doc.data().input179}" /></td>
        <td><input id="input10" class="input" type="text" value="${doc.data().input180}" /></td>

        </tr>

        
        <tr align="center">

        <th>19</th>
        <td><input id="input1" class="input" type="number" value="${doc.data().input181}" /></td>
        <td><input id="input2" class="input" type="text" value="${doc.data().input182}" /></td>
        <td><input id="input3" class="input" type="text" value="${doc.data().input183}" /></td>
        <td><input id="input4" class="input" type="text" value="${doc.data().input184}" /></td>
        <td><input id="input5" class="input" type="text" value="${doc.data().input185}" /></td>
        <td><input id="input6" class="input" type="text" value="${doc.data().input186}" /></td>
        <td><input id="input7" class="input" type="text" value="${doc.data().input187}" /></td>
        <td><input id="input8" class="input" type="date" value="${doc.data().input188}" /></td>
        <td><input id="input9" class="input" type="text" value="${doc.data().input189}" /></td>
        <td><input id="input10" class="input" type="text" value="${doc.data().input190}" /></td>

        </tr>

        
        <tr align="center">

        <th>20</th>
        <td><input id="input1" class="input" type="number" value="${doc.data().input191}" /></td>
        <td><input id="input2" class="input" type="text" value="${doc.data().input192}" /></td>
        <td><input id="input3" class="input" type="text" value="${doc.data().input193}" /></td>
        <td><input id="input4" class="input" type="text" value="${doc.data().input194}" /></td>
        <td><input id="input5" class="input" type="text" value="${doc.data().input195}" /></td>
        <td><input id="input6" class="input" type="text" value="${doc.data().input196}" /></td>
        <td><input id="input7" class="input" type="text" value="${doc.data().input197}" /></td>
        <td><input id="input8" class="input" type="date" value="${doc.data().input198}" /></td>
        <td><input id="input9" class="input" type="text" value="${doc.data().input199}" /></td>
        <td><input id="input10" class="input" type="text" value="${doc.data().input200}" /></td>

        </tr>

        
        <tr align="center">

        <th>21</th>
        <td><input id="input1" class="input" type="number" value="${doc.data().input201}" /></td>
        <td><input id="input2" class="input" type="text" value="${doc.data().input202}" /></td>
        <td><input id="input3" class="input" type="text" value="${doc.data().input203}" /></td>
        <td><input id="input4" class="input" type="text" value="${doc.data().input204}" /></td>
        <td><input id="input5" class="input" type="text" value="${doc.data().input205}" /></td>
        <td><input id="input6" class="input" type="text" value="${doc.data().input206}" /></td>
        <td><input id="input7" class="input" type="text" value="${doc.data().input207}" /></td>
        <td><input id="input8" class="input" type="date" value="${doc.data().input208}" /></td>
        <td><input id="input9" class="input" type="text" value="${doc.data().input209}" /></td>
        <td><input id="input10" class="input" type="text" value="${doc.data().input210}" /></td>

        </tr>

        
        <tr align="center">

        <th>22</th>
        <td><input id="input1" class="input" type="number" value="${doc.data().input211}" /></td>
        <td><input id="input2" class="input" type="text" value="${doc.data().input212}" /></td>
        <td><input id="input3" class="input" type="text" value="${doc.data().input213}" /></td>
        <td><input id="input4" class="input" type="text" value="${doc.data().input214}" /></td>
        <td><input id="input5" class="input" type="text" value="${doc.data().input215}" /></td>
        <td><input id="input6" class="input" type="text" value="${doc.data().input216}" /></td>
        <td><input id="input7" class="input" type="text" value="${doc.data().input217}" /></td>
        <td><input id="input8" class="input" type="date" value="${doc.data().input218}" /></td>
        <td><input id="input9" class="input" type="text" value="${doc.data().input219}" /></td>
        <td><input id="input10" class="input" type="text" value="${doc.data().input220}" /></td>

        </tr>

        
        <tr align="center">

        <th>23</th>
        <td><input id="input1" class="input" type="number" value="${doc.data().input221}" /></td>
        <td><input id="input2" class="input" type="text" value="${doc.data().input222}" /></td>
        <td><input id="input3" class="input" type="text" value="${doc.data().input223}" /></td>
        <td><input id="input4" class="input" type="text" value="${doc.data().input224}" /></td>
        <td><input id="input5" class="input" type="text" value="${doc.data().input225}" /></td>
        <td><input id="input6" class="input" type="text" value="${doc.data().input226}" /></td>
        <td><input id="input7" class="input" type="text" value="${doc.data().input227}" /></td>
        <td><input id="input8" class="input" type="date" value="${doc.data().input228}" /></td>
        <td><input id="input9" class="input" type="text" value="${doc.data().input229}" /></td>
        <td><input id="input10" class="input" type="text" value="${doc.data().input230}" /></td>

        </tr>

        
        <tr align="center">

        <th>24</th>
        <td><input id="input1" class="input" type="number" value="${doc.data().input231}" /></td>
        <td><input id="input2" class="input" type="text" value="${doc.data().input232}" /></td>
        <td><input id="input3" class="input" type="text" value="${doc.data().input233}" /></td>
        <td><input id="input4" class="input" type="text" value="${doc.data().input234}" /></td>
        <td><input id="input5" class="input" type="text" value="${doc.data().input235}" /></td>
        <td><input id="input6" class="input" type="text" value="${doc.data().input236}" /></td>
        <td><input id="input7" class="input" type="text" value="${doc.data().input237}" /></td>
        <td><input id="input8" class="input" type="date" value="${doc.data().input238}" /></td>
        <td><input id="input9" class="input" type="text" value="${doc.data().input239}" /></td>
        <td><input id="input10" class="input" type="text" value="${doc.data().input240}" /></td>

        </tr>

        
        <tr align="center">

        <th>25</th>
        <td><input id="input1" class="input" type="number" value="${doc.data().input241}" /></td>
        <td><input id="input2" class="input" type="text" value="${doc.data().input242}" /></td>
        <td><input id="input3" class="input" type="text" value="${doc.data().input243}" /></td>
        <td><input id="input4" class="input" type="text" value="${doc.data().input244}" /></td>
        <td><input id="input5" class="input" type="text" value="${doc.data().input245}" /></td>
        <td><input id="input6" class="input" type="text" value="${doc.data().input246}" /></td>
        <td><input id="input7" class="input" type="text" value="${doc.data().input247}" /></td>
        <td><input id="input8" class="input" type="date" value="${doc.data().input248}" /></td>
        <td><input id="input9" class="input" type="text" value="${doc.data().input249}" /></td>
        <td><input id="input10" class="input" type="text" value="${doc.data().input250}" /></td>

        </tr>

        
        <tr align="center">

        <th>26</th>
        <td><input id="input1" class="input" type="number" value="${doc.data().input251}" /></td>
        <td><input id="input2" class="input" type="text" value="${doc.data().input252}" /></td>
        <td><input id="input3" class="input" type="text" value="${doc.data().input253}" /></td>
        <td><input id="input4" class="input" type="text" value="${doc.data().input254}" /></td>
        <td><input id="input5" class="input" type="text" value="${doc.data().input255}" /></td>
        <td><input id="input6" class="input" type="text" value="${doc.data().input256}" /></td>
        <td><input id="input7" class="input" type="text" value="${doc.data().input257}" /></td>
        <td><input id="input8" class="input" type="date" value="${doc.data().input258}" /></td>
        <td><input id="input9" class="input" type="text" value="${doc.data().input259}" /></td>
        <td><input id="input10" class="input" type="text" value="${doc.data().input260}" /></td>

        </tr>

        
        <tr align="center">

        <th>27</th>
        <td><input id="input1" class="input" type="number" value="${doc.data().input261}" /></td>
        <td><input id="input2" class="input" type="text" value="${doc.data().input262}" /></td>
        <td><input id="input3" class="input" type="text" value="${doc.data().input263}" /></td>
        <td><input id="input4" class="input" type="text" value="${doc.data().input264}" /></td>
        <td><input id="input5" class="input" type="text" value="${doc.data().input265}" /></td>
        <td><input id="input6" class="input" type="text" value="${doc.data().input266}" /></td>
        <td><input id="input7" class="input" type="text" value="${doc.data().input267}" /></td>
        <td><input id="input8" class="input" type="date" value="${doc.data().input268}" /></td>
        <td><input id="input9" class="input" type="text" value="${doc.data().input269}" /></td>
        <td><input id="input10" class="input" type="text" value="${doc.data().input270}" /></td>

        </tr>

        
        <tr align="center">

        <th>28</th>
        <td><input id="input1" class="input" type="number" value="${doc.data().input271}" /></td>
        <td><input id="input2" class="input" type="text" value="${doc.data().input272}" /></td>
        <td><input id="input3" class="input" type="text" value="${doc.data().input273}" /></td>
        <td><input id="input4" class="input" type="text" value="${doc.data().input274}" /></td>
        <td><input id="input5" class="input" type="text" value="${doc.data().input275}" /></td>
        <td><input id="input6" class="input" type="text" value="${doc.data().input276}" /></td>
        <td><input id="input7" class="input" type="text" value="${doc.data().input277}" /></td>
        <td><input id="input8" class="input" type="date" value="${doc.data().input278}" /></td>
        <td><input id="input9" class="input" type="text" value="${doc.data().input279}" /></td>
        <td><input id="input10" class="input" type="text" value="${doc.data().input280}" /></td>

        </tr>

        
        <tr align="center">

        <th>29</th>
        <td><input id="input1" class="input" type="number" value="${doc.data().input281}" /></td>
        <td><input id="input2" class="input" type="text" value="${doc.data().input282}" /></td>
        <td><input id="input3" class="input" type="text" value="${doc.data().input283}" /></td>
        <td><input id="input4" class="input" type="text" value="${doc.data().input284}" /></td>
        <td><input id="input5" class="input" type="text" value="${doc.data().input285}" /></td>
        <td><input id="input6" class="input" type="text" value="${doc.data().input286}" /></td>
        <td><input id="input7" class="input" type="text" value="${doc.data().input287}" /></td>
        <td><input id="input8" class="input" type="date" value="${doc.data().input288}" /></td>
        <td><input id="input9" class="input" type="text" value="${doc.data().input289}" /></td>
        <td><input id="input10" class="input" type="text" value="${doc.data().input290}" /></td>

        </tr>

        
        <tr align="center">

        <th>30</th>
        <td><input id="input1" class="input" type="number" value="${doc.data().input291}" /></td>
        <td><input id="input2" class="input" type="text" value="${doc.data().input292}" /></td>
        <td><input id="input3" class="input" type="text" value="${doc.data().input293}" /></td>
        <td><input id="input4" class="input" type="text" value="${doc.data().input294}" /></td>
        <td><input id="input5" class="input" type="text" value="${doc.data().input295}" /></td>
        <td><input id="input6" class="input" type="text" value="${doc.data().input296}" /></td>
        <td><input id="input7" class="input" type="text" value="${doc.data().input297}" /></td>
        <td><input id="input8" class="input" type="date" value="${doc.data().input298}" /></td>
        <td><input id="input9" class="input" type="text" value="${doc.data().input299}" /></td>
        <td><input id="input10" class="input" type="text" value="${doc.data().input300}" /></td>

        </tr>

        
    </tbody>

</table>

<br />
<br />

    <button id="updateDoc" onclick="updateDoc('${doc.id}', '${doc.data().month}')">Update</button>
    <br />
    <br />
    <hr />
    <br />
    <br />
</center>
`;
document.getElementById('T').innerHTML += div;

            })
        }

        let docId;

const createTable = async()=> {
    const querySnapshot = await getDocs(collection(db, "table"));
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        docId = doc.id;
        m = 'month'+J;
        t = 'table'+J;
        if (t == docId){
            J++
        }else{}
        })
        



const create = `    <center>

<p>Month: <input id="month`+J+`" class="month" type="text" value=""/></p>

<table id="table`+J+`" border="1" width="1350px">


    <thead>
        <th>S/NO</th>
        <th>T/NO</th>
        <th>ADDRESS</th>
        <th>N.E</th>
        <th>PRY PAIR</th>
        <th>SEC PAIR</th>
        <th>MODEM ID</th>
        <th>NTC BY</th>
        <th>DATE</th>
        <th colspan="11">MODEM #</th>
    </thead>

    <tbody>
        <tr align="center">

        <th>1</th>
        <td><input id="input1" class="input" type="number" value="" /></td>
        <td><input id="input2" class="input" type="text" value="" /></td>
        <td><input id="input3" class="input" type="text" value="" /></td>
        <td><input id="input4" class="input" type="text" value="" /></td>
        <td><input id="input5" class="input" type="text" value="" /></td>
        <td><input id="input6" class="input" type="text" value="" /></td>
        <td><input id="input7" class="input" type="text" value="" /></td>
        <td><input id="input8" class="input" type="date" value="" /></td>
        <td><input id="input9" class="input" type="text" value="" /></td>
        <td><input id="input10" class="input" type="text" value="" /></td>

        </tr>

        
        <tr align="center">

        <th>2</th>
        <td><input id="input11" class="input" type="number" value="" /></td>
        <td><input id="input12" class="input" type="text" value="" /></td>
        <td><input id="input13" class="input" type="text" value="" /></td>
        <td><input id="input14" class="input" type="text" value="" /></td>
        <td><input id="input15" class="input" type="text" value="" /></td>
        <td><input id="input16" class="input" type="text" value="" /></td>
        <td><input id="input17" class="input" type="text" value="" /></td>
        <td><input id="input18" class="input" type="date" value="" /></td>
        <td><input id="input19" class="input" type="text" value="" /></td>
        <td><input id="input20" class="input" type="text" value="" /></td>

        </tr>

        
        <tr align="center">

        <th>3</th>
        <td><input id="input21" class="input" type="number" value="" /></td>
        <td><input id="input22" class="input" type="text" value="" /></td>
        <td><input id="input23" class="input" type="text" value="" /></td>
        <td><input id="input24" class="input" type="text" value="" /></td>
        <td><input id="input25" class="input" type="text" value="" /></td>
        <td><input id="input26" class="input" type="text" value="" /></td>
        <td><input id="input27" class="input" type="text" value="" /></td>
        <td><input id="input28" class="input" type="date" value="" /></td>
        <td><input id="input29" class="input" type="text" value="" /></td>
        <td><input id="input30" class="input" type="text" value="" /></td>

        </tr>

        
        <tr align="center">

        <th>4</th>
        <td><input id="input1" class="input" type="number" value="" /></td>
        <td><input id="input2" class="input" type="text" value="" /></td>
        <td><input id="input3" class="input" type="text" value="" /></td>
        <td><input id="input4" class="input" type="text" value="" /></td>
        <td><input id="input5" class="input" type="text" value="" /></td>
        <td><input id="input6" class="input" type="text" value="" /></td>
        <td><input id="input7" class="input" type="text" value="" /></td>
        <td><input id="input8" class="input" type="date" value="" /></td>
        <td><input id="input9" class="input" type="text" value="" /></td>
        <td><input id="input10" class="input" type="text" value="" /></td>

        </tr>

        
        <tr align="center">

        <th>5</th>
        <td><input id="input1" class="input" type="number" value="" /></td>
        <td><input id="input2" class="input" type="text" value="" /></td>
        <td><input id="input3" class="input" type="text" value="" /></td>
        <td><input id="input4" class="input" type="text" value="" /></td>
        <td><input id="input5" class="input" type="text" value="" /></td>
        <td><input id="input6" class="input" type="text" value="" /></td>
        <td><input id="input7" class="input" type="text" value="" /></td>
        <td><input id="input8" class="input" type="date" value="" /></td>
        <td><input id="input9" class="input" type="text" value="" /></td>
        <td><input id="input10" class="input" type="text" value="" /></td>

        </tr>

        
        <tr align="center">

        <th>6</th>
        <td><input id="input1" class="input" type="number" value="" /></td>
        <td><input id="input2" class="input" type="text" value="" /></td>
        <td><input id="input3" class="input" type="text" value="" /></td>
        <td><input id="input4" class="input" type="text" value="" /></td>
        <td><input id="input5" class="input" type="text" value="" /></td>
        <td><input id="input6" class="input" type="text" value="" /></td>
        <td><input id="input7" class="input" type="text" value="" /></td>
        <td><input id="input8" class="input" type="date" value="" /></td>
        <td><input id="input9" class="input" type="text" value="" /></td>
        <td><input id="input10" class="input" type="text" value="" /></td>

        </tr>

        
        <tr align="center">

        <th>7</th>
        <td><input id="input1" class="input" type="number" value="" /></td>
        <td><input id="input2" class="input" type="text" value="" /></td>
        <td><input id="input3" class="input" type="text" value="" /></td>
        <td><input id="input4" class="input" type="text" value="" /></td>
        <td><input id="input5" class="input" type="text" value="" /></td>
        <td><input id="input6" class="input" type="text" value="" /></td>
        <td><input id="input7" class="input" type="text" value="" /></td>
        <td><input id="input8" class="input" type="date" value="" /></td>
        <td><input id="input9" class="input" type="text" value="" /></td>
        <td><input id="input10" class="input" type="text" value="" /></td>

        </tr>

        
        <tr align="center">

        <th>8</th>
        <td><input id="input1" class="input" type="number" value="" /></td>
        <td><input id="input2" class="input" type="text" value="" /></td>
        <td><input id="input3" class="input" type="text" value="" /></td>
        <td><input id="input4" class="input" type="text" value="" /></td>
        <td><input id="input5" class="input" type="text" value="" /></td>
        <td><input id="input6" class="input" type="text" value="" /></td>
        <td><input id="input7" class="input" type="text" value="" /></td>
        <td><input id="input8" class="input" type="date" value="" /></td>
        <td><input id="input9" class="input" type="text" value="" /></td>
        <td><input id="input10" class="input" type="text" value="" /></td>

        </tr>

        
        <tr align="center">

        <th>9</th>
        <td><input id="input1" class="input" type="number" value="" /></td>
        <td><input id="input2" class="input" type="text" value="" /></td>
        <td><input id="input3" class="input" type="text" value="" /></td>
        <td><input id="input4" class="input" type="text" value="" /></td>
        <td><input id="input5" class="input" type="text" value="" /></td>
        <td><input id="input6" class="input" type="text" value="" /></td>
        <td><input id="input7" class="input" type="text" value="" /></td>
        <td><input id="input8" class="input" type="date" value="" /></td>
        <td><input id="input9" class="input" type="text" value="" /></td>
        <td><input id="input10" class="input" type="text" value="" /></td>

        </tr>

        
        <tr align="center">

        <th>10</th>
        <td><input id="input1" class="input" type="number" value="" /></td>
        <td><input id="input2" class="input" type="text" value="" /></td>
        <td><input id="input3" class="input" type="text" value="" /></td>
        <td><input id="input4" class="input" type="text" value="" /></td>
        <td><input id="input5" class="input" type="text" value="" /></td>
        <td><input id="input6" class="input" type="text" value="" /></td>
        <td><input id="input7" class="input" type="text" value="" /></td>
        <td><input id="input8" class="input" type="date" value="" /></td>
        <td><input id="input9" class="input" type="text" value="" /></td>
        <td><input id="input10" class="input" type="text" value="" /></td>

        </tr>

        
        <tr align="center">

        <th>11</th>
        <td><input id="input1" class="input" type="number" value="" /></td>
        <td><input id="input2" class="input" type="text" value="" /></td>
        <td><input id="input3" class="input" type="text" value="" /></td>
        <td><input id="input4" class="input" type="text" value="" /></td>
        <td><input id="input5" class="input" type="text" value="" /></td>
        <td><input id="input6" class="input" type="text" value="" /></td>
        <td><input id="input7" class="input" type="text" value="" /></td>
        <td><input id="input8" class="input" type="date" value="" /></td>
        <td><input id="input9" class="input" type="text" value="" /></td>
        <td><input id="input10" class="input" type="text" value="" /></td>

        </tr>

        
        <tr align="center">

        <th>12</th>
        <td><input id="input1" class="input" type="number" value="" /></td>
        <td><input id="input2" class="input" type="text" value="" /></td>
        <td><input id="input3" class="input" type="text" value="" /></td>
        <td><input id="input4" class="input" type="text" value="" /></td>
        <td><input id="input5" class="input" type="text" value="" /></td>
        <td><input id="input6" class="input" type="text" value="" /></td>
        <td><input id="input7" class="input" type="text" value="" /></td>
        <td><input id="input8" class="input" type="date" value="" /></td>
        <td><input id="input9" class="input" type="text" value="" /></td>
        <td><input id="input10" class="input" type="text" value="" /></td>

        </tr>

        
        <tr align="center">

        <th>13</th>
        <td><input id="input1" class="input" type="number" value="" /></td>
        <td><input id="input2" class="input" type="text" value="" /></td>
        <td><input id="input3" class="input" type="text" value="" /></td>
        <td><input id="input4" class="input" type="text" value="" /></td>
        <td><input id="input5" class="input" type="text" value="" /></td>
        <td><input id="input6" class="input" type="text" value="" /></td>
        <td><input id="input7" class="input" type="text" value="" /></td>
        <td><input id="input8" class="input" type="date" value="" /></td>
        <td><input id="input9" class="input" type="text" value="" /></td>
        <td><input id="input10" class="input" type="text" value="" /></td>

        </tr>

        
        <tr align="center">

        <th>14</th>
        <td><input id="input1" class="input" type="number" value="" /></td>
        <td><input id="input2" class="input" type="text" value="" /></td>
        <td><input id="input3" class="input" type="text" value="" /></td>
        <td><input id="input4" class="input" type="text" value="" /></td>
        <td><input id="input5" class="input" type="text" value="" /></td>
        <td><input id="input6" class="input" type="text" value="" /></td>
        <td><input id="input7" class="input" type="text" value="" /></td>
        <td><input id="input8" class="input" type="date" value="" /></td>
        <td><input id="input9" class="input" type="text" value="" /></td>
        <td><input id="input10" class="input" type="text" value="" /></td>

        </tr>

        
        <tr align="center">

        <th>15</th>
        <td><input id="input1" class="input" type="number" value="" /></td>
        <td><input id="input2" class="input" type="text" value="" /></td>
        <td><input id="input3" class="input" type="text" value="" /></td>
        <td><input id="input4" class="input" type="text" value="" /></td>
        <td><input id="input5" class="input" type="text" value="" /></td>
        <td><input id="input6" class="input" type="text" value="" /></td>
        <td><input id="input7" class="input" type="text" value="" /></td>
        <td><input id="input8" class="input" type="date" value="" /></td>
        <td><input id="input9" class="input" type="text" value="" /></td>
        <td><input id="input10" class="input" type="text" value="" /></td>

        </tr>

        
        <tr align="center">

        <th>16</th>
        <td><input id="input1" class="input" type="number" value="" /></td>
        <td><input id="input2" class="input" type="text" value="" /></td>
        <td><input id="input3" class="input" type="text" value="" /></td>
        <td><input id="input4" class="input" type="text" value="" /></td>
        <td><input id="input5" class="input" type="text" value="" /></td>
        <td><input id="input6" class="input" type="text" value="" /></td>
        <td><input id="input7" class="input" type="text" value="" /></td>
        <td><input id="input8" class="input" type="date" value="" /></td>
        <td><input id="input9" class="input" type="text" value="" /></td>
        <td><input id="input10" class="input" type="text" value="" /></td>

        </tr>

        
        <tr align="center">

        <th>17</th>
        <td><input id="input1" class="input" type="number" value="" /></td>
        <td><input id="input2" class="input" type="text" value="" /></td>
        <td><input id="input3" class="input" type="text" value="" /></td>
        <td><input id="input4" class="input" type="text" value="" /></td>
        <td><input id="input5" class="input" type="text" value="" /></td>
        <td><input id="input6" class="input" type="text" value="" /></td>
        <td><input id="input7" class="input" type="text" value="" /></td>
        <td><input id="input8" class="input" type="date" value="" /></td>
        <td><input id="input9" class="input" type="text" value="" /></td>
        <td><input id="input10" class="input" type="text" value="" /></td>

        </tr>

        
        <tr align="center">

        <th>18</th>
        <td><input id="input1" class="input" type="number" value="" /></td>
        <td><input id="input2" class="input" type="text" value="" /></td>
        <td><input id="input3" class="input" type="text" value="" /></td>
        <td><input id="input4" class="input" type="text" value="" /></td>
        <td><input id="input5" class="input" type="text" value="" /></td>
        <td><input id="input6" class="input" type="text" value="" /></td>
        <td><input id="input7" class="input" type="text" value="" /></td>
        <td><input id="input8" class="input" type="date" value="" /></td>
        <td><input id="input9" class="input" type="text" value="" /></td>
        <td><input id="input10" class="input" type="text" value="" /></td>

        </tr>

        
        <tr align="center">

        <th>19</th>
        <td><input id="input1" class="input" type="number" value="" /></td>
        <td><input id="input2" class="input" type="text" value="" /></td>
        <td><input id="input3" class="input" type="text" value="" /></td>
        <td><input id="input4" class="input" type="text" value="" /></td>
        <td><input id="input5" class="input" type="text" value="" /></td>
        <td><input id="input6" class="input" type="text" value="" /></td>
        <td><input id="input7" class="input" type="text" value="" /></td>
        <td><input id="input8" class="input" type="date" value="" /></td>
        <td><input id="input9" class="input" type="text" value="" /></td>
        <td><input id="input10" class="input" type="text" value="" /></td>

        </tr>

        
        <tr align="center">

        <th>20</th>
        <td><input id="input1" class="input" type="number" value="" /></td>
        <td><input id="input2" class="input" type="text" value="" /></td>
        <td><input id="input3" class="input" type="text" value="" /></td>
        <td><input id="input4" class="input" type="text" value="" /></td>
        <td><input id="input5" class="input" type="text" value="" /></td>
        <td><input id="input6" class="input" type="text" value="" /></td>
        <td><input id="input7" class="input" type="text" value="" /></td>
        <td><input id="input8" class="input" type="date" value="" /></td>
        <td><input id="input9" class="input" type="text" value="" /></td>
        <td><input id="input10" class="input" type="text" value="" /></td>

        </tr>

        
        <tr align="center">

        <th>21</th>
        <td><input id="input1" class="input" type="number" value="" /></td>
        <td><input id="input2" class="input" type="text" value="" /></td>
        <td><input id="input3" class="input" type="text" value="" /></td>
        <td><input id="input4" class="input" type="text" value="" /></td>
        <td><input id="input5" class="input" type="text" value="" /></td>
        <td><input id="input6" class="input" type="text" value="" /></td>
        <td><input id="input7" class="input" type="text" value="" /></td>
        <td><input id="input8" class="input" type="date" value="" /></td>
        <td><input id="input9" class="input" type="text" value="" /></td>
        <td><input id="input10" class="input" type="text" value="" /></td>

        </tr>

        
        <tr align="center">

        <th>22</th>
        <td><input id="input1" class="input" type="number" value="" /></td>
        <td><input id="input2" class="input" type="text" value="" /></td>
        <td><input id="input3" class="input" type="text" value="" /></td>
        <td><input id="input4" class="input" type="text" value="" /></td>
        <td><input id="input5" class="input" type="text" value="" /></td>
        <td><input id="input6" class="input" type="text" value="" /></td>
        <td><input id="input7" class="input" type="text" value="" /></td>
        <td><input id="input8" class="input" type="date" value="" /></td>
        <td><input id="input9" class="input" type="text" value="" /></td>
        <td><input id="input10" class="input" type="text" value="" /></td>

        </tr>

        
        <tr align="center">

        <th>23</th>
        <td><input id="input1" class="input" type="number" value="" /></td>
        <td><input id="input2" class="input" type="text" value="" /></td>
        <td><input id="input3" class="input" type="text" value="" /></td>
        <td><input id="input4" class="input" type="text" value="" /></td>
        <td><input id="input5" class="input" type="text" value="" /></td>
        <td><input id="input6" class="input" type="text" value="" /></td>
        <td><input id="input7" class="input" type="text" value="" /></td>
        <td><input id="input8" class="input" type="date" value="" /></td>
        <td><input id="input9" class="input" type="text" value="" /></td>
        <td><input id="input10" class="input" type="text" value="" /></td>

        </tr>

        
        <tr align="center">

        <th>24</th>
        <td><input id="input1" class="input" type="number" value="" /></td>
        <td><input id="input2" class="input" type="text" value="" /></td>
        <td><input id="input3" class="input" type="text" value="" /></td>
        <td><input id="input4" class="input" type="text" value="" /></td>
        <td><input id="input5" class="input" type="text" value="" /></td>
        <td><input id="input6" class="input" type="text" value="" /></td>
        <td><input id="input7" class="input" type="text" value="" /></td>
        <td><input id="input8" class="input" type="date" value="" /></td>
        <td><input id="input9" class="input" type="text" value="" /></td>
        <td><input id="input10" class="input" type="text" value="" /></td>

        </tr>

        
        <tr align="center">

        <th>25</th>
        <td><input id="input1" class="input" type="number" value="" /></td>
        <td><input id="input2" class="input" type="text" value="" /></td>
        <td><input id="input3" class="input" type="text" value="" /></td>
        <td><input id="input4" class="input" type="text" value="" /></td>
        <td><input id="input5" class="input" type="text" value="" /></td>
        <td><input id="input6" class="input" type="text" value="" /></td>
        <td><input id="input7" class="input" type="text" value="" /></td>
        <td><input id="input8" class="input" type="date" value="" /></td>
        <td><input id="input9" class="input" type="text" value="" /></td>
        <td><input id="input10" class="input" type="text" value="" /></td>

        </tr>

        
        <tr align="center">

        <th>26</th>
        <td><input id="input1" class="input" type="number" value="" /></td>
        <td><input id="input2" class="input" type="text" value="" /></td>
        <td><input id="input3" class="input" type="text" value="" /></td>
        <td><input id="input4" class="input" type="text" value="" /></td>
        <td><input id="input5" class="input" type="text" value="" /></td>
        <td><input id="input6" class="input" type="text" value="" /></td>
        <td><input id="input7" class="input" type="text" value="" /></td>
        <td><input id="input8" class="input" type="date" value="" /></td>
        <td><input id="input9" class="input" type="text" value="" /></td>
        <td><input id="input10" class="input" type="text" value="" /></td>

        </tr>

        
        <tr align="center">

        <th>27</th>
        <td><input id="input1" class="input" type="number" value="" /></td>
        <td><input id="input2" class="input" type="text" value="" /></td>
        <td><input id="input3" class="input" type="text" value="" /></td>
        <td><input id="input4" class="input" type="text" value="" /></td>
        <td><input id="input5" class="input" type="text" value="" /></td>
        <td><input id="input6" class="input" type="text" value="" /></td>
        <td><input id="input7" class="input" type="text" value="" /></td>
        <td><input id="input8" class="input" type="date" value="" /></td>
        <td><input id="input9" class="input" type="text" value="" /></td>
        <td><input id="input10" class="input" type="text" value="" /></td>

        </tr>

        
        <tr align="center">

        <th>28</th>
        <td><input id="input1" class="input" type="number" value="" /></td>
        <td><input id="input2" class="input" type="text" value="" /></td>
        <td><input id="input3" class="input" type="text" value="" /></td>
        <td><input id="input4" class="input" type="text" value="" /></td>
        <td><input id="input5" class="input" type="text" value="" /></td>
        <td><input id="input6" class="input" type="text" value="" /></td>
        <td><input id="input7" class="input" type="text" value="" /></td>
        <td><input id="input8" class="input" type="date" value="" /></td>
        <td><input id="input9" class="input" type="text" value="" /></td>
        <td><input id="input10" class="input" type="text" value="" /></td>

        </tr>

        
        <tr align="center">

        <th>29</th>
        <td><input id="input1" class="input" type="number" value="" /></td>
        <td><input id="input2" class="input" type="text" value="" /></td>
        <td><input id="input3" class="input" type="text" value="" /></td>
        <td><input id="input4" class="input" type="text" value="" /></td>
        <td><input id="input5" class="input" type="text" value="" /></td>
        <td><input id="input6" class="input" type="text" value="" /></td>
        <td><input id="input7" class="input" type="text" value="" /></td>
        <td><input id="input8" class="input" type="date" value="" /></td>
        <td><input id="input9" class="input" type="text" value="" /></td>
        <td><input id="input10" class="input" type="text" value="" /></td>

        </tr>

        
        <tr align="center">

        <th>30</th>
        <td><input id="input1" class="input" type="number" value="" /></td>
        <td><input id="input2" class="input" type="text" value="" /></td>
        <td><input id="input3" class="input" type="text" value="" /></td>
        <td><input id="input4" class="input" type="text" value="" /></td>
        <td><input id="input5" class="input" type="text" value="" /></td>
        <td><input id="input6" class="input" type="text" value="" /></td>
        <td><input id="input7" class="input" type="text" value="" /></td>
        <td><input id="input8" class="input" type="date" value="" /></td>
        <td><input id="input9" class="input" type="text" value="" /></td>
        <td><input id="input10" class="input" type="text" value="" /></td>

        </tr>

        
    </tbody>

</table>

<br />
<br />

    <button id="updateDoc" onclick="updateDoc('table`+ J +`', 'month`+ J +`')">Update</button>
</center>
`;
document.getElementById('T').innerHTML += create;
}

window.createTable = createTable;
