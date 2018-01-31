function HocVienService(){

    this.LayDanhSachHocVien = function(){
        var urlApi = "http://sv.myclass.vn/Help/Api/GET-api-QuanLyTrungTam-DanhSachHocvien";
		$.ajax({
			type: 'GET',
			url: urlApi,
			
			success: function(ketqua){
				var DSHV = JSON.stringify(ketqua);
				localStorage.setItem("DanhSachHV",DSHV);
			},
			error: function(parsedjson, textStatus, errorThown){
				console.log();
			}
		});
    }
}