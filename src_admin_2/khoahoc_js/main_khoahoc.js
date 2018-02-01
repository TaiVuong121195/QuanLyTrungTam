var danhSachKhoaHoc = new DanhSachKhoaHoc();

var service = new KhoaHocService();


GetStorage();


function DomID(id){
    var element = document.getElementById(id);
    return element;
}

function ThemKhoaHoc(){
    var makhoahoc = DomID("makhoahoc").value;
    var tenkhoahoc = DomID("tenkhoahoc").value;
    var luotxem = DomID("luotxem").value;
    var mota = DomID("mota").value;
    var hinhanh = DomID("hinhanh").value;
    var nguoitao = DomID("nguoitao").value;
   
    var khoahoc = new KhoaHoc(makhoahoc, tenkhoahoc,  hinhanh, luotxem);

    danhSachKhoaHoc.ThemKhoaHoc(khoahoc);
    CapNhatDanhSachKhoaHoc(danhSachKhoaHoc);
    console.log(khoahoc);
    console.log(danhSachKhoaHoc);
    service.ThemKhoaHoc(khoahoc);
}

function CapNhatDanhSachKhoaHoc(DanhSachKhoaHoc){
	var lstTableKH = DomID("tbodyKH");
    lstTableKH.innerHTML = "";

	for(var i = 0; i < DanhSachKhoaHoc.DSKH.length; i++)
	{	
        var kh = danhSachKhoaHoc.DSKH[i];
        // Tạo thẻ tr
        var trKhoaHoc = document.createElement('tr');
        trKhoaHoc.id = kh.MaKhoaHoc;
        trKhoaHoc.className = "trKhoaHoc";
        // tạo các thẻ td và filter dữ người dùng thứ i vào
        var tdCheckbox = document.createElement('td');
        var ckbKhoaHoc = document.createElement('input');
        ckbKhoaHoc.setAttribute("class","ckbKhoaHoc");
        ckbKhoaHoc.setAttribute('type','checkbox');
        ckbKhoaHoc.setAttribute("value", kh.MaKhoaHoc);
        tdCheckbox.appendChild(ckbKhoaHoc);

        var tdXoaSua = document.createElement("td");
        var btnSua = document.createElement("button");
        btnSua.setAttribute("class", "btn btn-info btn-simple btn-xs");
        btnSua.setAttribute("rel", "tooltip");
        btnSua.setAttribute("title", "Cập nhật");
       
        var iconEdit = document.createElement("i");
        iconEdit.setAttribute("class", "fa fa-edit")
        btnSua.appendChild(iconEdit);
        tdXoaSua.appendChild(btnSua);

        var btnXoa = document.createElement("button");
        btnXoa.setAttribute("class", "btn btn-danger btn-simple btn-xs");
        btnXoa.setAttribute("rel", "tooltip");
        btnXoa.setAttribute("title", "Xóa");
       
        var iconDelete = document.createElement("i");
        iconDelete.setAttribute("class", "fa fa-remove")
        btnXoa.appendChild(iconDelete);
        tdXoaSua.appendChild(btnXoa);
        
		var tdMaSoKhoaHoc = TaoTD('MaSoKhoaHoc',kh.MaKhoaHoc);
		var tdTen = TaoTD('Ten',kh.TenKhoaHoc);
        var tdLuotXem = TaoTD('LuotXem',kh.LuotXem);
        var tdMoTa = TaoTD('MoTa',kh.MoTa);
        var tdHinhAnh = TaoTD('HinhAnh', kh.HinhAnh);
        var tdNguoiTao = TaoTD('NguoiTao',kh.NguoiTao);
        
        trKhoaHoc.appendChild(tdCheckbox);
		trKhoaHoc.appendChild(tdMaSoKhoaHoc);
		trKhoaHoc.appendChild(tdTen);
		trKhoaHoc.appendChild(tdLuotXem);
        trKhoaHoc.appendChild(tdMoTa);
        trKhoaHoc.appendChild(tdHinhAnh);
        trKhoaHoc.appendChild(tdNguoiTao);
        trKhoaHoc.appendChild(tdXoaSua);
        
        lstTableKH.appendChild(trKhoaHoc);
    }
}

function TaoTD(className, value){
    var td = document.createElement("td");
    td.className = className;
    td.innerHTML = value;
    return td;
}

function SetStorage(){
    var jsonDanhSachKhoaHoc = JSON.stringify(danhSachKhoaHoc.DSKH);
    localStorage.setItem("DanhSachKH", jsonDanhSachKhoaHoc);
}

function GetStorage(){
    var jsonDanhSachKhoaHoc = localStorage.getItem("DanhSachKH");
    var mangDSKH = JSON.parse(jsonDanhSachKhoaHoc);
    danhSachKhoaHoc.DSKH = mangDSKH;
    CapNhatDanhSachKhoaHoc(danhSachKhoaHoc);
    service.LayDanhSachKhoaHoc();
}