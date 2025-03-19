// //no 1
// let saldo = prompt("Masukkan saldo anda: ");
// let bonus = prompt("Masukkan bonus anda: ");
// let hutang = prompt("Masukkan hutang anda: ");

// let total = Number(saldo) + Number(bonus) - Number(hutang);
// alert("Total saldo anda adalah: " + total);

//no 2
let hari = new Date().getDay();
switch (hari) {
    case 0:
        hari = "Minggu";
        break;
    case 1:
        hari = "Senin";
        break;
    case 2:
        hari = "Selasa";
        break;
    case 3:
        hari = "Rabu";
        break;
    case 4:
        hari = "Kamis";
        break;
    case 5:
        hari = "Jumat";
        break;
    case 6:
        hari = "Sabtu";
        break;
    default:
        hari = "Tidak ada";
        break;
}

alert(`hari ini adalah hari ${hari}`);