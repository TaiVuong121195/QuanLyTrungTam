function DangNhapService (){
    $("#loginModal").submit(function(e){
        e.preventDefault();

        var urlAPI = "http://sv.myclass.vn/api/QuanLyTrungTam/DangNhap?taikhoan={taikhoan}&matkhau={matkhau}"
        $.ajax({
            type: "GET",
            datatype:"json",

        })
    }); 
}