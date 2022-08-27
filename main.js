
//  bài 1 :
//  input : nhập vào số ngày làm , lương = 100.000
document.getElementById('btnTinhTien').onclick = function () {
    var soNgayLam = document.getElementById('soNgayLam').value * 1;
    const soGioLam = 100000;
    //progress
    var tongLuong = soGioLam * soNgayLam;
    var currentFormat = new Intl.NumberFormat("VN-vn");
    //output
    document.getElementById('tongLuong').innerHTML = 'Tổng lương là:' + currentFormat.format(tongLuong);
}
//bai 2
// gán function
//input:nhap vao 5 số thực
document.getElementById('btnTinhTrungBinh').onclick = function () {
    var soThuNhat = document.getElementById('soThuNhat').value * 1;
    var soThuHai = document.getElementById('soThuHai').value * 1;
    var soThuBa = document.getElementById('soThuBa').value * 1;
    var soThuTu = document.getElementById('soThuTu').value * 1;
    var soThuNam = document.getElementById('soThuNam').value * 1;
    //progress
    var tongTrungBinh = (soThuNhat + soThuHai + soThuBa + soThuTu + soThuNam) / 5;
    //output
    document.getElementById('tongTrungBinh').innerHTML = 'Trung bình của 5 số cộng lại là:    ' + tongTrungBinh;

}
//bai 3 
// input : nhập vào số tiền muốn qui đổi , 1usd = 23500
document.getElementById('btnQuyDoi').onclick = function () {
    const USD = 23500;
    var soTienDoi = document.getElementById('soTienDoi').value * 1;
    //progress
    var tienViet = soTienDoi * 23500;
    var currentFormat = new Intl.NumberFormat("VN-vn");
    //output : xuất ra tiền  việt
    document.getElementById('tongTienQuyDoi').innerHTML = 'Tổng tiền từ USD sang VND là:   ' + currentFormat.format(tienViet) + ' VND';
}

//bai 4 :
document.getElementById('btnTinhCvDt').onclick = function () {
    //input : nhập vào chiều dài và chiều rộng
    var chieuDai = document.getElementById('chieuDai').value * 1;
    var chieuRong = document.getElementById('chieuRong').value * 1;
    //progress
    var chuVi = (chieuDai + chieuRong) * 2;
    var dienTich = chieuDai * chieuRong;
    //output
    document.getElementById('tongCvDt').innerHTML = 'Chu vi : ' + chuVi + '   | Dien Tich: ' + dienTich;
}
//bai 5 :
document.getElementById('btnTongKiSo').onclick = function () {
    //input : nhap vao so 2 chu so
    var soHaiChuSo = document.getElementById('soHaiChuSo').value * 1;
    var soHangDonVi = soHaiChuSo % 10;
    var soHangChuc = Math.floor((soHaiChuSo % 100) / 10);
    var tongKiSo = soHangDonVi + soHangChuc;
    document.getElementById('tongKiSo').innerHTML = 'tong ki so la :' + tongKiSo;
}




