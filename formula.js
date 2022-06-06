//Confirm wholesale information
function wholesale() {
    var name =  document.getElementById("wholesale-name");
    var age = document.getElementById("wholesale-age");
    var email = document.getElementById("wholesale-email");
    var address = document.getElementById("wholesale-address");
    var male = document.getElementById("wholesale-male");
    var female = document.getElementById("wholesale-female");
    var arrString = email.value.split("");

    //Save the price off all the product
    var price = [20000, 22000, 10000, 25000, 28000, 23000, 25000, 31000, 20000, 10000, 5000, 8000, 7000, 8000, 10000, 12000, 12000, 10000, 10000, 1000000, 18000, 20000, 17000, 1200000, 1100000, 25000, 23000, 80000, 32000, 35000, 27000, 120000, 1000000000, 50000, 50000, 36000, 35000, 32000, 37000, 32000];

    //Sex
    if (male.checked) {
        gender = male.value;
    }else {
        gender = female.value;
    }
    
    //Fill the gap
    if (name.value == "" || email.value == "" || age.value == "" || address.value == "") {
        alert("Hãy điền đầy đủ thông tin!");
        return;
    }

    //Age checked 
    if (isNaN(age.value)) {
        alert("Tuổi phải là một con số!");
        return;
    }else if (age.value <= 0) {
        alert("Tuổi phải là số dương!");
        return;
    }else if (age.value <= 10) {
        alert("You are not allowed to use this service, just support 10 and up");
        return;
    }

    //Email checked
    if (arrString.includes("@") == false || arrString.includes(".") == false) {
        alert("Đây không phải là một địa chỉ email!");
        return;
    }

    //Wholesale array
    var arrWholesale = document.getElementsByClassName("wholesale-buying")
    var bill = 0;
    var check = 0;
    var product = "";
    var notNumber = [];
    var notPositive = [];

    //Buy checked
    for (var i=0; i<=39; i=i+1) {
        if (arrWholesale[i].value == "") {
            
        }else {
            check = check + 1;
            product = product + arrWholesale[i].name + ": " + arrWholesale[i].value + "\n";
        };

        if (arrWholesale[i].value == "") {
            
        }else if (isNaN(arrWholesale[i].value)) {
            notNumber.push(i);
        }else if (arrWholesale[i].value <= 0) {
            notPositive.push(i)
        };
    }
    if (check == 0) {
        alert("Bạn phải mua hàng chứ:v");
        return;
    }
    var productNotNumber = "";
    if (notNumber.length != 0) {
        for (let i = 0;i < notNumber.length;i++) {
            productNotNumber = productNotNumber + " " + arrWholesale[notNumber[i]].name + ",";
        };

        alert("Đơn hàng"+ productNotNumber + " phải là số!");
        return;
    }
    var productNotPositive = "";
    if (notPositive.length != 0) {
        for (let i = 0;i < notPositive.length;i++) {
            productNotPositive = productNotPositive + " " + arrWholesale[notPositive[i]].name + ",";
        };

        alert("Đơn hàng"+ productNotPositive + " phải lớn hơn 0!");
        return;
    }

    //Bill
    for (var i=0; i<=39; i=i+1) {
        if (arrWholesale[i].value != "") {
            bill = bill + (arrWholesale[i].value * price[i])
        };
    }

    //Give the time
    var today = new Date();
    var clock = today.getHours()+"/"+today.getMinutes()+"/"+today.getSeconds()+"-"+today.getDate()+"/"+(today.getMonth()+1)+"/"+today.getFullYear();

    //Confirm
    var customerInfor = confirm("Đã xác nhận thông tin của bạn\n"+"Họ tên: "+name.value+"\n"+"Tuổi: "+age.value+"\n"+"Giới tính: "+gender+"\n"+"Email: "+email.value+"\n"+"Địa chỉ: "+address.value);
    var productInfor = confirm("Đơn mua hàng: \n"+product+"Tổng cộng: "+bill+"vnđ"+"\n"+"Cảm ơn quý khách<3"+"\n"+"("+clock+")");
    if (customerInfor == 1) {
        alert("Thông tin đã được gửi");
    }
}

//Reset wholesale data
function wholesaleReset(){
    document.getElementsByClassName("wholesale-confirm")[0].reset();
}

//Confirm retail information
function retail() {
    var name =  document.getElementById("retail-name");
    var age = document.getElementById("retail-age");
    var email = document.getElementById("retail-email");
    var address = document.getElementById("retail-address");
    var male = document.getElementById("retail-male");
    var female = document.getElementById("retail-female");
    var cost = document.getElementById("cost");
    var number = document.getElementById("retail-number")
    var product = document.getElementById("product")
    var idea = document.getElementById("retail-idea")
    var arrString = email.value.split("");

    //Sex
    if (male.checked) {
        gender = male.value;
    }else {
        gender = female.value;
    }
    
    //Fill the gap
    if (name.value == "" || email.value == "" || age.value == "" || address.value == "") {
        alert("Hãy điền đầy đủ thông tin!");
        return;
    }

    //Age checked 
    if (isNaN(age.value)) {
        alert("Tuổi phải là một con số!");
        return;
    }else if (age.value <= 0) {
        alert("Tuổi phải là số dương!");
        return;
    }else if (age.value <= 10) {
        alert("You are not allowed to use this service, just support 10 and up");
        return;
    }

    //Email checked
    if (arrString.includes("@") == false || arrString.includes(".") == false) {
        alert("Đây không phải là một địa chỉ email!");
        return;    
    }

    //Number checked
    if (number.value == "") {
        alert("Bạn phải mua hàng chứ!");
        return;
    }

    //Bill
    let bill = number.value * cost.textContent;

    //Give the time
    var today = new Date();
    var clock = today.getHours()+"/"+today.getMinutes()+"/"+today.getSeconds()+"-"+today.getDate()+"/"+(today.getMonth()+1)+"/"+today.getFullYear();

    //Confirm
    var customerInfor = confirm("Đã xác nhận thông tin của bạn\n"+"Họ tên: "+name.value+"\n"+"Tuổi: "+age.value+"\n"+"Giới tính: "+gender+"\n"+"Email: "+email.value+"\n"+"Địa chỉ: "+address.value);
    var productInfor = confirm("Hóa đơn"+"\n"+product.textContent+number.value+"\n"+"Trị giá: "+bill+"vnđ"+"\n"+"Góp ý: "+idea.value+"\n"+"Cảm ơn quý khách<3"+"\n"+"("+clock+")");
    if (customerInfor == 1) {
        alert("Thông tin đã được gửi");
    }
}