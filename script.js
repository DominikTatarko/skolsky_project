

function switchmode() {
    var sun = document.getElementById("sun");
    var moon = document.getElementById("moon");
    var body = document.getElementById("body");
    var nav = document.getElementById("navbar");
    var foot = document.getElementById("footer");
    var atag = document.getElementsByTagName("a");


    
    if (moon.style.display === "none") {
        sun.style.display = "none";
        moon.style.display = "block";
        body.classList.toggle("darkmode");
        nav.classList.remove("bg-body-secondary");
        nav.style.background= "black"
        foot.style.background= "black"
        foot.classList.remove("bg-body-secondary");
        for (var i = 0; i < 4; i++) {
            atag[i].style.color = "white";
        }


    } 
    else {
        sun.style.display = "block";
        moon.style.display = "none";
        body.classList.remove("darkmode");
        
        nav.classList.add("bg-body-secondary");
        
        foot.classList.add("bg-body-secondary");
        for (var i = 0; i < 4; i++) {
            atag[i].style.color = "black";
        }
    }


}

function test(){
 var meno = document.getElementById("meno").value;
 var priezvisko = document.getElementById("priezvisko").value;
 var body = 0;
 var vysledok = document.getElementById("vysledok");
 
 body = otazkajedna(body);
 body = otazkadva(body);
 body = otazkatri(body);
 body = otazkastyri(body);
 body = otazkapat(body);
 vysledok.innerHTML = "Ahoj "+ meno + " " + priezvisko + " získal si " + body + " bodov.";
}

function otazkajedna(body){
    var jedenjeden = document.getElementById("jedenjeden");
    var jedendva = document.getElementById("jedendva");
    var jedentri = document.getElementById("jedentri");

    if(jedendva.checked){
        body++;
    }else{
        body+=0;
    }
    return body
}
function otazkadva(body){
    var dvajeden = document.getElementById("dvajeden");
    var dvadva = document.getElementById("dvadva");
    var dvatri = document.getElementById("dvatri");

    if(dvadva.checked){
        body++;
    }else{
        body+=0;
    }
    return body
}
function otazkatri(body){
    var trijeden = document.getElementById("trijeden");
    var dvandva = document.getElementById("tridva");
    var tritri = document.getElementById("tritri");

    if(trijeden.checked){
        body++;
    }else{
        body+=0;
    }
    return body
}
function otazkastyri(body){
    var styrijeden = document.getElementById("styrijeden");
    var styridva = document.getElementById("styridva");
    var styritri = document.getElementById("styritri");

    if(styrijeden.checked){
        body++;
    }else{
        body+=0;
    }
    return body
}
function otazkapat(body){
    var patjeden = document.getElementById("patjeden");
    var patdva = document.getElementById("patdva");
    var pattri = document.getElementById("pattri");

    if(pattri.checked){
        body++;
    }else{
        body+=0;
    }
    return body
}

function vyjadrenie() {
    var email = document.getElementById("emailInput").value;
    var komentar = document.getElementById("komentarInput").value;
    var hodnotenie = document.getElementById("hodnoteniaInput").value;

    var vstupElement = document.getElementById("vstup");
    var vystupElement = document.getElementById("vystup");

    
    vstupElement.style.display = "none";
    vystupElement.style.display = "block";
    document.getElementById("vysemail").innerHTML = "Email: " + email;
    document.getElementById("vyskomentar").innerHTML = "Komentar: " + komentar;
    document.getElementById("vyshodnotenie").innerHTML = "Hodnotenie: " + hodnotenie;
    
}