var danhSachNguoiDung = new DanhSachNguoiDung();

var service = new NguoiDungService();


GetStorage();

validate = new Validation();

function DomID(id){
    var element = document.getElementById(id);
    return element;
}

function ThemNguoiDung(){
    
    // Lấy dữ liệu người dùng nhập vào
    var taikhoan = DomID("id").value;
    var matkhau = DomID("matkhau").value;
    var hoten = DomID("hoten").value;
    var email = DomID("email").value;
    var sodt = DomID("sodt").value;
    var maloainguoidung = DomID("maloainguoidung").value;
    var loi = 0;
    // Kiểm tra validation
   if(KiemTraDauVaoRong("id", taikhoan) == true){
        loi++;
   }
   if(KiemTraDauVaoRong("matkhau", matkhau) == true){
    loi++;
}
   if(KiemTraDauVaoRong("hoten", hoten) == true){
        loi++;
   }
   if(validate.KiemTraEmail(email)){
       document.getElementById("email").style.borderColor = "green";
   }else{
       document.getElementById("email").style.borderColor = "red";
       loi++;
   }
    if(validate.KiemTraSoDT(sodt)){
        document.getElementById("sodt").style.borderColor = "green";
    }else{
        document.getElementById("sodt").style.borderColor = "red";
        loi++;
    }
   if(KiemTraDauVaoRong("maloainguoidung", maloainguoidung) == true){
        loi++;
   }
   if(loi != 0){
       return;
   }
   // Thêm người dùng
   var nguoidung = new NguoiDung(taikhoan, matkhau, hoten, email, sodt, maloainguoidung);
   danhSachNguoiDung.ThemNguoiDung(nguoidung);
   CapNhatDanhSachNguoiDung(danhSachNguoiDung);
   console.log(nguoidung)
   console.log(danhSachNguoiDung);
   service.ThemNguoiDung(nguoidung);
}



function CapNhatDanhSachNguoiDung(DanhSachNguoiDung){
    var lstTableND = DomID("tbodyND");
    lstTableND.innerHTML = "";
    for(var i = 0; i < DanhSachNguoiDung.DSND.length; i++){
        var nd = danhSachNguoiDung.DSND[i];
        // Tạo thẻ tr
        var trNguoiDung = document.createElement("tr");
        trNguoiDung.id = nd.TaiKhoan;
        trNguoiDung.className = "trNguoiDung";
        //trNguoiDung.setAttribute("onclick","ChinhSuaNguoiDung('"+nd.TaiKhoan+"')");
        // tạo các thẻ td và filter dữ người dùng thứ i vào
       var  tdCheckBox = document.createElement("td");
        var ckbTaiKhoan = document.createElement("input");
        ckbTaiKhoan.setAttribute("class","ckbTaiKhoan");
        ckbTaiKhoan.setAttribute("type", "checkbox");
        ckbTaiKhoan.setAttribute("value", nd.TaiKhoan);
        tdCheckBox.appendChild(ckbTaiKhoan);

        var tdTaiKhoan = TaoTheTD("TaiKhoan", nd.TaiKhoan);
        var tdMatKhau = TaoTheTD("MatKhau", nd.MatKhau);
        var tdHoTen = TaoTheTD("HoTen", nd.HoTen);
        var tdEmail = TaoTheTD("Email", nd.Email);
        var tdSoDT = TaoTheTD("SoDT", nd.SoDT);
        var tdMaLoaiNguoiDung = TaoTheTD("MaLoaiNguoiDung", nd.MaLoaiNguoiDung);

        var tdXoaSua = document.createElement("td");
        var btnSua = document.createElement("button");
        btnSua.setAttribute("class", "btn btn-info btn-simple btn-xs");
        btnSua.setAttribute("rel", "tooltip");
        btnSua.setAttribute("title", "Cập nhật");
        btnSua.setAttribute("onclick","ChinhSuaNguoiDung('"+nd.TaiKhoan +"')");
        btnSua.setAttribute("data-toggle", "modal");
        btnSua.setAttribute("data-target", "#addUserModal");
        
       
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
        // Append các td vào tr

        
        trNguoiDung.appendChild(tdCheckBox);
        trNguoiDung.appendChild(tdTaiKhoan);
        trNguoiDung.appendChild(tdMatKhau);
        trNguoiDung.appendChild(tdHoTen);
        trNguoiDung.appendChild(tdEmail);
        trNguoiDung.appendChild(tdSoDT);
        trNguoiDung.appendChild(tdMaLoaiNguoiDung);
        trNguoiDung.appendChild(tdXoaSua);
        // Append các tr vào tbodyHV
        lstTableND.appendChild(trNguoiDung);

    }
}

function TaoTheTD(className, value){
    var td = document.createElement("td");
    td.className = className;
    td.innerHTML = value;
    return td;
}

function KiemTraDauVaoRong(ID, value){
    if(validate.KiemTraRong(value) == true){
        DomID(ID).style.borderColor = "red";
        return true;
    }else{
        DomID(ID).style.borderColor = "green";
        return false;
    }
}

function SetStorage(){
    var jsonDanhSachNguoiDung = JSON.stringify(danhSachNguoiDung.DSND);
    localStorage.setItem("DanhSachND", jsonDanhSachNguoiDung);
}

function GetStorage(){
    var jsonDanhSachNguoiDung = localStorage.getItem("DanhSachND");
    var mangDSND = JSON.parse(jsonDanhSachNguoiDung);
    danhSachNguoiDung.DSND = mangDSND;
    CapNhatDanhSachNguoiDung(danhSachNguoiDung);
    service.LayDanhSachNguoiDung();
}


function XoaNguoiDung(){
    // Mảng checkbox
    var lstTaiKhoan = document.getElementsByClassName("ckbTaiKhoan");
    // Mảng tài khoản được chọn
    var lstTaiKhoanDuocChon = [];
    for(var i = 0; i < lstTaiKhoan.length; i++){
        if(lstTaiKhoan[i].checked){
            lstTaiKhoanDuocChon.push(lstTaiKhoan[i].value);
            // Xóa sinh viên trên server
            service.XoaNguoiDung(lstTaiKhoan[i].value);
        }
    }
    danhSachNguoiDung.XoaNguoiDung(lstTaiKhoanDuocChon);
    CapNhatDanhSachNguoiDung(danhSachNguoiDung);

    
}


function ChinhSuaNguoiDung(taikhoan){
    
    
    var nguoidung = danhSachNguoiDung.TimNDTheoTaiKhoan(taikhoan);
    if(nguoidung != null){
        DomID("id").value = nguoidung.TaiKhoan;
        DomID("matkhau").value = nguoidung.MatKhau;
        DomID("hoten").value = nguoidung.HoTen;
        DomID("email").value = nguoidung.Email;
        DomID("sodt").value = nguoidung.SoDT;
        DomID("maloainguoidung").value = nguoidung.MaLoaiNguoiDung;
    }
}

function LuuThongTin(){
    // Lấy dữ liệu người dùng nhập vào
    var taikhoan = DomID("id").value;
    var matkhau = DomID("matkhau").value;
    var hoten = DomID("hoten").value;
    var email = DomID("email").value;
    var sodt = DomID("sodt").value;
    var maloainguoidung = DomID("maloainguoidung").value;
    var loi = 0;
    // Kiểm tra validation
   if(KiemTraDauVaoRong("id", taikhoan) == true){
        loi++;
   }
   if(KiemTraDauVaoRong("matkhau", matkhau) == true){
    loi++;
}
   if(KiemTraDauVaoRong("hoten", hoten) == true){
        loi++;
   }
   if(validate.KiemTraEmail(email)){
       document.getElementById("email").style.borderColor = "green";
   }else{
       document.getElementById("email").style.borderColor = "red";
       loi++;
   }
    if(validate.KiemTraSoDT(sodt)){
        document.getElementById("sodt").style.borderColor = "green";
    }else{
        document.getElementById("sodt").style.borderColor = "red";
        loi++;
    }
   if(KiemTraDauVaoRong("maloainguoidung", maloainguoidung) == true){
        loi++;
   }
   if(loi != 0){
       return;
   }
   // Thêm người dùng
   var nguoidung = new NguoiDung(taikhoan,matkhau, hoten, email, sodt, maloainguoidung);
   danhSachNguoiDung.SuaNguoiDung(nguoidung);
   CapNhatDanhSachNguoiDung(danhSachNguoiDung);

   service.CapNhatThongTinNguoiDung(nguoidung);
}


function TimKiemNguoiDung(){
    var tukhoa =  DomID("tukhoa").value;
    var lstDanhSachNguoiDungTimKiem = danhSachNguoiDung.TimKiemNguoiDung(tukhoa);
    CapNhatDanhSachNguoiDung(lstDanhSachNguoiDungTimKiem);
}



