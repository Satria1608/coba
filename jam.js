var div = document.getElementById('kata');

var waktu = new Date();
var jam = waktu.getHours();
var tgl = waktu.getDate();
var bln = waktu.getMonth();
var thn = waktu.getFullYear();
var hr = waktu.getDay();

var bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
var hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

document.write(hari[hr]+" / "+tgl+" / "+bulan[bln]+" / "+thn+"<br>");
if (jam<=10) 
{
	document.write("Selamat Pagi");
}
else if (jam<=14) 
{
	document.write("Selamat Siang");
}
else if (jam<=17) 
{
	document.write("Selamat Sore");
}
else 
{
	document.write("Selamat Malam");
}

function time() {
  var waktu = new Date();
  var s = waktu.getSeconds();
  var m = waktu.getMinutes();
  var h = waktu.getHours();
  div.textContent = 
    ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
    
}

setInterval(time, 1000);