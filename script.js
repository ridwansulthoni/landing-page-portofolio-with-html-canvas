//definisikan variabel canvas dengan nilai dari id "mycanvas"
var canvas = document.getElementById("myCanvas");
//membuat variabel ctx
//dengan objek 2d
var ctx = canvas.getContext("2d");

//membuat persegi panjang sebagai latar
//memulai menggambar
ctx.beginPath();
//pemberian warna latar
ctx.fillStyle = "#A0FF99";
//dengan posisi x = 0 dan y = 0
//dengan ukuran panjang 1265 dan lebar 578
ctx.fillRect(0, 0, 1265, 578);
//mengakhir menggambar
ctx.closePath();
ctx.fill();

//membuat objek garis
//memulai menggambar
ctx.beginPath();
//mengatur jarak awal
//x = 0 dan y = 0
ctx.moveTo(0, 0);
//mengatur jarak awal
//x = 421.6 dan y = 0
ctx.lineTo(421.6, 0);
//mengakhir menggambar
ctx.closePath();
//mengatur lebar dari garis
ctx.lineWidth = 35;
//pemberian warna stroke
ctx.strokeStyle = "#554CCD";
ctx.stroke();

//membuat objek garis
//memulai menggambar
ctx.beginPath();
//mengatur jarak awal
//x = 0 dan y = 0
ctx.moveTo(0, 0);
//mengatur jarak akhir
//x = 0 dan y = 192.6
ctx.lineTo(0, 192.6);
//mengakhir menggambar
ctx.closePath();
//mengatur lebar dari garis
ctx.lineWidth = 35;
//pemberian warna stroke
ctx.strokeStyle = "#554CCD";
ctx.stroke();

//membuat objek garis
//memulai menggambar
ctx.beginPath();
//mengatur jarak awal
//x = 1260 dan y = 578
ctx.moveTo(1260, 575);
//mengatur jarak akhir
//x = 843.3 dan y = 578
ctx.lineTo(843.3, 575);
//mengakhir menggambar
ctx.closePath();
//mengatur lebar dari garis
ctx.lineWidth = 35;
//pemberian warna stroke
ctx.strokeStyle = "#554CCD";
ctx.stroke();

//membuat objek garis
//memulai menggambar
ctx.beginPath();
//mengatur jarak awal
//x = 1260 dan y = 385.3
ctx.moveTo(1260, 385.3);
//mengatur jarak akhir
//x = 1260 dan y = 578
ctx.lineTo(1260, 578);
//mengakhir menggambar
ctx.closePath();
//mengatur lebar dari garis
ctx.lineWidth = 35;
//pemberian warna stroke
ctx.strokeStyle = "#554CCD";
ctx.stroke();

//menambahkan objek gambar
//mendenifisikan variabel a
var a = new Image();
//memanggilkan gambar
a.src ='https://cdn.glitch.me/2d0b9181-b0d2-485c-b446-69ca8368b86a%2Fhinata-souyo(2).png?v=1635599074342';
//membuat gambar dengan posisi x = 680 dan y = 45
ctx.drawImage(a, 680, 45);

//menambahkan objek teks
//memberikan warna pada teks
ctx.fillStyle = "#FFFFFF";
//mengatur ketebalan, ukuran, dan jenis font yang dipakai
ctx.font = "bold 80pt Calibri";
//menulis teks dan memberikan jarak x = 100 dan y = 200
ctx.fillText("Hello.", 160, 200);

//menambahkan objek teks
//memberikan warna pada teks
ctx.fillStyle = "#000080";
//mengatur ketebalan, ukuran, dan jenis font yang dipakai
ctx.font = "bold 40pt Calibri";
//menulis teks dan memberikan jarak x = 108 dan y = 260
ctx.fillText("I'm Ridhwan Sulthoni", 168, 260);

//menambahkan objek teks pada objek grafik
//memulai menggambar
ctx.beginPath();
//pemberian warna latar
ctx.fillStyle = "#FFCBC1";
//menggunakan translate
//memetakan ulang posisi x = 108 dan y = 300
ctx.translate(168, 300);
//dengan posisi x = 0 dan y = 0
//dengan ukuran lebar 180 dan tinggi 45
ctx.fillRect(0, 0, 180, 45);
//mengakhir menggambar
ctx.closePath();
//memberikan warna pada teks
ctx.fillStyle = "#FFFFFFFF";
//mengatur ketebalan, ukuran, dan jenis font yang dipakai
ctx.font = "bold 18pt Calibri";
//menulis teks dan memberikan jarak x = 12 dan y = 30
ctx.fillText("Web Developer",12,30);
ctx.fill();

//menambahkan objek teks pada objek grafik
//memulai menggambar
ctx.beginPath();
//pemberian warna latar
ctx.fillStyle = "#B5B9FF";
//menggunakan translate
//memetakan ulang posisi x = 200 dan y = 0
ctx.translate(200, 0);
//dengan posisi x = 0 dan y = 0
//dengan ukuran panjang 120 dan lebar 45
ctx.fillRect(0, 0, 120, 45);
//mengakhir menggambar
ctx.closePath();
//memberikan warna pada teks
ctx.fillStyle = "#FFFFFFFF";
//mengatur ketebalan, ukuran, dan jenis font yang dipakai
ctx.font = "bold 18pt Calibri";
//menulis teks dan memberikan jarak x = 12 dan y = 30
ctx.fillText("UI Design", 12, 30);
ctx.fill();

//menambahkan objek kotak
//memulai menggambar
ctx.beginPath();
//menggunakan rotate
//memutar sebanyak 90 derajat
ctx.rotate(90 * Math.PI / 180);
//memberikan warna
ctx.fillStyle = "#7A72E4";
//membuat objek kotak
//posisi dengan x = -100 dan y = 350
//ukuran panjang 40 dan lebar 20
ctx.fillRect(-100, 350, 40, 20);
//mengakhir menggambar
ctx.closePath();
ctx.fill();

//menambahkan objek kotak
//memulai menggambar
ctx.beginPath();
//menggunakan rotate
//memutar sebanyak 0 derajat
ctx.rotate(0 * Math.PI / 180);
//memberikan warna
ctx.fillStyle = "#7A72E4";
//membuat objek kotak
//posisi dengan x = 38 dan y = -895
//ukuran panjang 40 dan lebar 20
ctx.fillRect(38, -895, 40, 20);
//mengakhir menggambar
ctx.closePath();
ctx.fill();

//menambahkan objek yang diclip
//memulai menggambar
ctx.beginPath();
//membuat lingkaran 
//posisi x = 270 dan y = 370
//radius 100
ctx.arc(270, 370, 100, 0, Math.PI * 2);
//membuat clip
ctx.clip();
//memberikan warna
ctx.fillStyle = "#554CCD";
//membuat persegi
//dengan posisi x = 100 dan y = 100
//ukuran panjang 200 dan lebar 200
ctx.fillRect(100, 200, 200, 200);

//menambahkan objek yang diclip
//memulai menggambar
ctx.beginPath();
//membuat lingkaran 
//posisi x = 270 dan y = 370
//radius 80
ctx.arc(270, 370, 80, 0, Math.PI * 2);
//membuat clip
ctx.clip();
//menggambar clip
//memberikan warna
ctx.fillStyle = "#7A72E4";
//membuat persegi
//dengan posisi x = 100 dan y = 100
//ukuran panjang 200 dan lebar 200
ctx.fillRect(100, 200, 200, 200);

//menambahkan objek yang diclip
//memulai menggambar
ctx.beginPath();
//membuat lingkaran 
//posisi x = 270 dan y = 370
//radius 60
ctx.arc(270, 370, 60, 0, Math.PI * 2);
//membuat clip
ctx.clip();
//menggambar clip
//memberikan warna
ctx.fillStyle = "#938CF9";
//membuat persegi
//dengan posisi x = 100 dan y = 100
//ukuran panjang 200 dan lebar 200
ctx.fillRect(100, 200, 200, 200);

//menambahkan objek yang diclip
//memulai menggambar
ctx.beginPath();
//membuat lingkaran 
//posisi x = 270 dan y = 370
//radius 40
ctx.arc(270, 370, 40, 0, Math.PI * 2);
//membuat clip
ctx.clip();
//menggambar clip
//memberikan warna
ctx.fillStyle = "#ADA7FF";
//membuat persegi
//dengan posisi x = 100 dan y = 100
//ukuran panjang 200 dan lebar 200
ctx.fillRect(100, 200, 200, 200);

//menambahkan objek yang diclip
//memulai menggambar
ctx.beginPath();
//membuat lingkaran 
//posisi x = 270 dan y = 370
//radius 20
ctx.arc(270, 370, 20, 0, Math.PI * 2);
//membuat clip
ctx.clip();
//menggambar clip
//memberikan warna
ctx.fillStyle = "#CFCCFF";
//membuat persegi
//dengan posisi x = 100 dan y = 100
//ukuran panjang 200 dan lebar 200
ctx.fillRect(100, 200, 200, 200);