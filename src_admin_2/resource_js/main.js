var dskh = new DSKhoaHoc();
var dshv = new DSNguoiDung();
function TaoTD(className, value){
	var td = document.createElement('td');
	td.className=className;
	td.innerHTML = value;
	return td;
}
function CapNhat(){
	var tbodyKH = document.getElementById('tbodyKH')
	tbodyKH.innerHTML = '';
	for(var i =0; i<dskh.mangKH.length;i++)
	{	
		var kh = dskh.mangKH[i];
		var trKH = document.createElement('tr');
		var ckbKH = document.createElement('input');
		ckbKH.setAttribute('type','checkbox');
		ckbKH.value = kh.MaKhoaHoc;
		ckbKH.className = 'ckbKH';
		
		var tdCheckbox = document.createElement('td');
		tdCheckbox.appendChild(ckbKH);
		trKH.appendChild(tdCheckbox);
	
		var tdMSKH = TaoTD('mskh',kh.MaKhoaHoc);
		var tdTen = TaoTD('ten',kh.TenKhoaHoc);
		
        var tdLuotXem = TaoTD('luotxem',kh.LuotXem);
        var tdMoTa = TaoTD('mota',kh.MoTa);
		var tdNguoiTao = TaoTD('nguoitao',kh.NguoiTao);
		trKH.appendChild(tdMSKH);
		trKH.appendChild(tdTen);
		trKH.appendChild(tdLuotXem);
		trKH.appendChild(tdMoTa);
		trKH.appendChild(tdNguoiTao);
		tbodyKH.appendChild(trKH);}
}
function CapNhat_HV(){
	var tbodyHV = document.getElementById('tbodyHV')
	tbodyHV.innerHTML = '';
	for(var i =0; i<dshv.mangHV.length;i++)
	{	
		var hv = dshv.mangHV[i];
		var trHV = document.createElement('tr');
		var ckbHV = document.createElement('input');
		ckbHV.setAttribute('type','checkbox');
		ckbHV.value = hv.MaKhoaHoc;
		ckbHV.className = 'ckbHV';
		
		var tdCheckbox = document.createElement('td');
		tdCheckbox.appendChild(ckbHV);
		trHV.appendChild(tdCheckbox);
	
		var tdTaiKhoan = TaoTD('taikhoan',hv.TaiKhoan);
		var tdHoTen = TaoTD('hoten',hv.HoTen);
		
        var tdEmail = TaoTD('emailhv',hv.Email);
        var tdSoDT = TaoTD('sodt',hv.SoDT);
		var tdLoaiND = TaoTD('loainguoi',hv.MaLoaiNguoiDung);
		trHV.appendChild(tdTaiKhoan);
		trHV.appendChild(tdHoTen);
		trHV.appendChild(tdEmail);
		trHV.appendChild(tdSoDT);
		trHV.appendChild(tdLoaiND);
		tbodyHV.appendChild(trHV);}
}
function GetStorage_KH(){
	var urlApi = "http://sv.myclass.vn/api/QuanLyTrungTam/DanhSachKhoaHoc";
	$.ajax({
		type: 'GET',
		url: urlApi,
		cache: "false",
		success: function(ketqua){
			console.log(ketqua);
			dskh.mangKH = ketqua;
			CapNhat(dskh);
			console.log(dskh);
		},
		error: function(parsedjson, textStatus, errorThown){
			$('body').append(
				"parsedJson status: " + parsedjson.status + '<br/>' + 
				"errorStatus: " + textStatus + '<br/>' + 
				"errorThrown: " + errorThown
			);
		}
	});
}
function GetStorage_HV(){
	var urlApi = "http://sv.myclass.vn/api/QuanLyTrungTam/DanhSachHocvien";
	$.ajax({
		type: 'GET',
		url: urlApi,
		cache: "false",
		success: function(ketqua){
			console.log(ketqua);
			dshv.mangHV = ketqua;
			CapNhat_HV(dshv);
			console.log(dshv);
		},
		error: function(parsedjson, textStatus, errorThown){
			$('body').append(
				"parsedJson status: " + parsedjson.status + '<br/>' + 
				"errorStatus: " + textStatus + '<br/>' + 
				"errorThrown: " + errorThown
			);
		}
	});
}