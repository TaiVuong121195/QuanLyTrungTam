function NguoiDungService(){

	this.LayDanhSachNguoiDung = function(){
		var urlApi = "http://sv.myclass.vn/api/QuanLyTrungTam/DanhSachHocvien";
		$.ajax({
			type: 'GET',
			url: urlApi,
			success: function(ketqua){
				var DSND = JSON.stringify(ketqua);
				
				localStorage.setItem("DanhSachND",DSND);
			},
			error: function(parsedjson, textStatus, errorThown){
				console.log();
			}
		});
	}
	this.ThemNguoiDung = function(nguoidung){	
		var urlApi = `http://sv.myclass.vn/api/QuanLyTrungTam/ThemNguoiDung`;
		$.ajax({
			type: 'POST',
			url: urlApi,
            data:nguoidung,
			success: function(ketqua){
			},
			error: function (xhr, ajaxOptions, thrownError) {
				console.log(xhr.status);
				console.log(xhr.responseText);
				console.log(thrownError);
			}
		});
	}
	this.XoaNguoiDung= function(id)
    {
        var urlAPI = `http://sv.myclass.vn/api/QuanLyTrungTam/XoaNguoiDung/${id}`;
        $.ajax({
			type:'DELETE',
			url: urlAPI,
			contentType:"application/json",
            success: function(ketqua)
            {
                console.log(ketqua);
            },
            error:function(error)
            {
                console.log();
            }
        });     
	}
	
	this.CapNhatThongTinNguoiDung= function(nguoidung)
    {
        var urlAPI = `http://sv.myclass.vn/api/QuanLyTrungTam/CapNhatThongTinNguoiDung`;
        $.ajax({
			type:'PUT',
			url: urlAPI,
			contentType:"application/json",
			data:nguoidung,
            success: function(ketqua)
            {
                console.log(ketqua);
            },
            error:function(error)
            {
                console.log();
            }
        });     
    }
}