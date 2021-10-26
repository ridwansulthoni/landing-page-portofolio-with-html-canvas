var canvas = document.getElementById("myCanvas");
//membuat variabel ctx
//dengan objek 2d 
var ctx = canvas.getContext("2d");
//memulai menggambar
ctx.beginPath();
//pemberian warna latar
ctx.fillStyle = " #98FB98";
//membuat persegi panjang sebagai latar 
//dengan posisi x = 0 dan y = 0
//dengan ukuran lebar 1265 dan panjang 578
ctx.fillRect(0,0,1265,578);
ctx.fill();

//memulai menggambar
ctx.beginPath();
//membuat lingkaran sebagai profile 
//dengan posisi x = 632.5 dan y = 218
//dengan ukuran diameter = 80
ctx.arc(632.5,218,80,0,2*Math.PI);
//memberikan efek garis luar
ctx.stroke();

//memulai menggambar
ctx.beginPath();
//mengatur jarak
ctx.moveTo(0,0);
//mengatur posisi garis
//dari titik x = 421.6 dan y = 0
ctx.lineTo(421.6, 0);
//mengatur lebar dari garis 
ctx.lineWidth = 35;
//pemberian warna latar
ctx.strokeStyle = "#000080";
ctx.stroke();

//memulai menggambar
ctx.beginPath();
//mengatur jarak
ctx.moveTo(0,100);
//mengatur posisi garis
//dari titik x = 421.6 dan y = 0
ctx.lineTo(421.6, 0);
//mengatur lebar dari garis 
ctx.lineWidth = 35;
//pemberian warna latar
ctx.strokeStyle = "#000080";
ctx.stroke();


