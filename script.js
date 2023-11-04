function showCalculator(bangunDatar) {
    hideAll();
    document.getElementById(bangunDatar).style.display = "block";
}

function hitungLuasKeliling(bangunDatar) {
    switch(bangunDatar) {
        case 'persegiPanjang':
            const panjang = parseFloat(document.getElementById("panjang").value);
            const lebar = parseFloat(document.getElementById("lebar").value);

            const luasPP = panjang * lebar;
            const kelilingPP = 2 * (panjang + lebar);
            
            // nilai input hasil luas dan keliling
            document.getElementById("luasPersegiPanjang").innerHTML = "Luas: <span>" + luasPP + "</span>";
            document.getElementById("kelilingPersegiPanjang").innerHTML = "Keliling: <span>" + kelilingPP + "</span>";
            break;

        case 'segitiga':
            const alas = parseFloat(document.getElementById("alas").value);
            const tinggi = parseFloat(document.getElementById("tinggi").value);
            const sisiA = parseFloat(document.getElementById("sisiA").value);
            const sisiB = parseFloat(document.getElementById("sisiB").value);
            const sisiC = parseFloat(document.getElementById("sisiC").value);

            const luasSegitiga = 0.5 * alas * tinggi;
            const kelilingSegitiga = sisiA + sisiB + sisiC;

            // nilai input hasil luas dan keliling
            document.getElementById("luasSegitiga").innerHTML = "Luas: <span>" + luasSegitiga + "</span>";
            document.getElementById("kelilingSegitiga").innerHTML = "Keliling: <span>" + kelilingSegitiga + "</span>";
            break;

        case 'lingkaran':
            const jariJari = parseFloat(document.getElementById("jariJari").value);

            const luasLingkaran = Math.PI * Math.pow(jariJari, 2);
            const kelilingLingkaran = 2 * Math.PI * jariJari;

            // nilai input hasil luas dan keliling
            document.getElementById("luasLingkaran").innerHTML = "Luas: <span>" + luasLingkaran + "</span>";
            document.getElementById("kelilingLingkaran").innerHTML = "Keliling: <span>" + kelilingLingkaran + "</span>";
            break;
    }
}

function hideAll(bangunDatar) {
    document.getElementById("persegiPanjang").style.display = "none";
    document.getElementById("segitiga").style.display = "none";
    document.getElementById("lingkaran").style.display = "none";
}
