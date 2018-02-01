function KhoaHocService(){

    this.LayDanhSachKhoaHoc = function(){
        var urlApi = "http://sv.myclass.vn/api/QuanLyTrungTam/DanhSachKhoaHoc";
		$.ajax({
			type: 'GET',
			url: urlApi,
			
			success: function(ketqua){
				var DSKH = JSON.stringify(ketqua);
				localStorage.setItem("DanhSachKH",DSKH);
				
			},
			error: function(parsedjson, textStatus, errorThown){
				console.log();
			}
		});
	}
	
	this.ThemKhoaHoc = function(khoahoc){	
		var urlApi = `http://sv.myclass.vn/api/QuanLyTrungTam/ThemKhoaHoc`;
		$.ajax({
			type: 'POST',
			url: urlApi,
            data:khoahoc,
			success: function(ketqua){
				console.log(ketqua);
				
			},
			error: function (xhr, ajaxOptions, thrownError) {
				console.log(xhr.status);
				console.log(xhr.responseText);
				console.log(thrownError);
			}
		});
	}
}