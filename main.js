$(document).ready(function(){
    // Dùng get để lấy dữ liệu về kiểm tra xem phương thức post đã thêm thành công chưa

    $("#btnGet").click(function(){
       //urlAPI
       var urlAPI = `http://sv.myclass.vn/api/QuanLyTrungTam/DanhSachKhoaHoc`;
       $.ajax({
           type:"GET",
           url: urlAPI,
           success: function(ketqua)
           {
               console.log(ketqua);
           },
           error:function(error)
           {
               console.log();
           }
       });     
    });

});

