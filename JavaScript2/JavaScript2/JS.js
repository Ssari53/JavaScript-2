var puan = 0;
function btn_cevap() {
    var cvp = document.getElementById('t_verilencvp').value;
    if (cvp == "Ankara") {
        puan += 5;
        document.getElementById('sonuc').innerHTML = '5 puan kazandınız';
        document.getElementById('sonuc').style.color = 'green';
        document.getElementById('foto1').src = 'İmages/Tick.png';
        document.getElementById('foto1').style.width = '100px';
        document.getElementById('foto1').style.height = '100px';
    }
    else {
        document.getElementById('sonuc').innerHTML = 'Puan kazanamadınız';
        document.getElementById('sonuc').style.color = 'red';
        document.getElementById('foto1').src = 'İmages/Wrong.png';
        document.getElementById('foto1').style.width = '100px';
        document.getElementById('foto1').style.height = '100px';
    }   
}

function btn_cvp2() {
    var cvp2 = document.getElementById('t_verilencvp2').value;
    if (cvp2 == "Paris") {
        puan += 5;
        document.getElementById('sonuc2').innerHTML = '5 puan kazandınız';
        document.getElementById('sonuc2').style.color = 'green';
        document.getElementById('foto2').src = 'İmages/Tick.png';
        document.getElementById('foto2').style.width = '100px';
        document.getElementById('foto2').style.height = '100px';
    }
    else {
        document.getElementById('sonuc2').innerHTML = 'Puan kazanamadınız';
        document.getElementById('sonuc2').style.color = 'red';
        document.getElementById('foto2').src = 'İmages/Wrong.png';
        document.getElementById('foto2').style.width = '100px';
        document.getElementById('foto2').style.height = '100px';
    }
}

function btn_cvp3() {
    var cvp3 = document.getElementById('t_verilencvp3').value;
    if (cvp3 == "Amsterdam") {
        puan += 5;
        document.getElementById('sonuc3').innerHTML = '5 puan kazandınız';
        document.getElementById('sonuc3').style.color = 'green';
        document.getElementById('foto3').src = 'İmages/Tick.png';
        document.getElementById('foto3').style.width = '100px';
        document.getElementById('foto3').style.height = '100px';
    }
    else {
        document.getElementById('sonuc3').innerHTML = 'Puan kazanamadınız';
        document.getElementById('sonuc3').style.color = 'red';
        document.getElementById('foto3').src = 'İmages/Wrong.png';
        document.getElementById('foto3').style.width = '100px';
        document.getElementById('foto3').style.height = '100px';
    }
}

function btn_cvp4() {
    var cvp4 = document.getElementById('t_verilencvp4').value;
    if (cvp4 == "Roma") {
        puan += 5;
        document.getElementById('sonuc4').innerHTML = '5 puan kazandınız';
        document.getElementById('sonuc4').style.color = 'green';
        document.getElementById('foto4').src = 'İmages/Tick.png';
        document.getElementById('foto4').style.width = '100px';
        document.getElementById('foto4').style.height = '100px';
    }
    else {
        document.getElementById('sonuc4').innerHTML = 'Puan kazanamadınız';
        document.getElementById('sonuc4').style.color = 'red';
        document.getElementById('foto4').src = 'İmages/Wrong.png';
        document.getElementById('foto4').style.width = '100px';
        document.getElementById('foto4').style.height = '100px';
    }
}

function btn_cvp5() {
    var cvp5 = document.getElementById('t_verilencvp5').value;
    if (cvp5 == "Berlin") {
        puan += 5;
        document.getElementById('sonuc5').innerHTML = '5 puan kazandınız';
        document.getElementById('sonuc5').style.color = 'green';
        document.getElementById('foto5').src = 'İmages/Tick.png';
        document.getElementById('foto5').style.width = '100px';
        document.getElementById('foto5').style.height = '100px';
    }
    else {
        document.getElementById('sonuc5').innerHTML = 'Puan kazanamadınız';
        document.getElementById('sonuc5').style.color = 'red';
        document.getElementById('foto5').src = 'İmages/Wrong.png';
        document.getElementById('foto5').style.width = '100px';
        document.getElementById('foto5').style.height = '100px';
    }
}
function toplam_sonuc() {
    document.getElementById('sonpuan').innerHTML = puan + ' puan kazandınız..';
}