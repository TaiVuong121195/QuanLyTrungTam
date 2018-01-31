var danhSachKhoaHoc = new DanhSachKhoaHoc();
var danhSachNguoiDung = new DanhSachNguoiDung();
var danhSachHocVien = new DanhSachHocVien();


var service = new HocVienService();
service.LayDanhSachHocVien();

GetStorage();


function DomID(id){
    var element = document.getElementById(id);
    return element;
}

function CapNhatDanhSachHocVien(DanhSachHocVien){
    var lstTableHV = DomID("tbodyHV");
    lstTableHV.innerHTML = "";

    for(var i = 0; i < DanhSachHocVien.DSHV.length; i++){
        var hv = danhSachHocVien.DSHV[i];
        // Tạo thẻ tr
        var trHocVien = document.createElement("tr");
        trHocVien.id = hv.MaKhoaHoc;
        trHocVien.className = "trHocVien";

        var tdCheckbox = document.createElement('td');
        var ckbHocVien = document.createElement('input');
        ckbHocVien.setAttribute("class","ckbHocVien");
        ckbHocVien.setAttribute('type','checkbox');
        ckbHocVien.setAttribute("value", hv.MaKhoaHoc);
        tdCheckbox.appendChild(ckbHocVien);
        

        var tdMaSoKhoaHoc = TaoTD('MaSoKhoaHoc', hv.MaKhoaHoc);
        var tdTaiKhoan = TaoTD('TaiKhoan', hv.TaiKhoan);
        var tdNgayGhiDanh = TaoTD('NgayGhiDanh', hv.NgayGhiDanh);

        trHocVien.appendChild(tdCheckbox);
        trHocVien.appendChild(tdMaSoKhoaHoc);
        trHocVien.appendChild(tdTaiKhoan);
        trHocVien.appendChild(tdNgayGhiDanh);

        lstTableHV.appendChild(trHocVien);
    }
}

function TaoTD(className, value){
    var td = document.createElement("td");
    td.className = className;
    td.innerHTML = value;
    return td;
}

function SetStorage(){
    var jsonDanhSachHocVien = JSON.stringify(danhSachHocVien.DSHV);
    localStorage.setItem("DanhSachHV", jsonDanhSachHocVien);
}

function GetStorage(){
    var jsonDanhSachHocVien = localStorage.getItem("DanhSachHV");
    var mangDSHV = JSON.parse(jsonDanhSachHocVien);
    danhSachHocVien.DSHV = mangDSHV;
    CapNhatDanhSachHocVien(danhSachHocVien);
}