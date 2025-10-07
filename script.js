//1.Pilih tombol berdasarkan ID-nya
const tombolSapa=document.getElementByID('sappaButton');
//2.tambahkan 'event listener' untuk aksi 'click'
tombolSapa.addEventListener('click',function(){
  //3.jalankan kode ini ketika tombol di-klik
  alert('Halo! Terima kasih sudah berkunjung!');
});
