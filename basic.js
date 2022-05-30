//Set the animation for the image when enter the mouse
window.addEventListener("load", function() {
    const table = [...document.querySelectorAll(".keyword")];
    table.forEach(item => item.addEventListener("mouseenter", handleHoverLink));

    const line = document.createElement("div");
    line.className = "line-effect";
    document.body.appendChild(line);

    //Add a rect use left, top, width, height are taken from the "td" FTWH by enter mouse on it
    function handleHoverLink(event) {
        const {left, top, width, height} = event.target.getBoundingClientRect();

        line.style.left = `${left}px`;
        line.style.top = `${top + height - 1}px`;
        line.style.width = `${width}px`;
        line.style.height = `${1}px`;
    }

    //Disapear rect when leave mouse
    const menu = document.querySelector(".finding-bar");
    menu.addEventListener("mouseleave", function() {
        line.style.left = 0;
        line.style.top = 0;
        line.style.width = 0;
        line.style.height = 0;
    })
});

//Send wholesale information

//Send the information
function wholesale() {
    var name =  document.getElementById("wholesale-name");
    var age = document.getElementById("wholesale-age");
    var email = document.getElementById("wholesale-email");
    var male = document.getElementById("wholesale-male");
    var female = document.getElementById("wholesale-female");
    var test = "";
    var arrString = email.value.split("");

    //Sex
    if (male.checked) {
        gender = male.value;
    }else {
        gender = female.value;
    }
    
    //Fill the gap
    if (name.value == "" || email.value == "" || age.value == "") {
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
    var prize = document.getElementsByTagName("strong");
    var cost = 0;
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

        alert("Đơn hàng"+ productNotPositive + " phải là số!");
        return;
    }

    //Bill, i and j go together, i for number và j for prize
    var j = 0;
    for (var i=0; i<=39; i=i+1) {
        if (arrWholesale[i].value != "") {
            cost = cost + (arrWholesale[i].value * prize[j].textContent)
        };
        j = j + 1;
    }

    //Give the time
    var today = new Date();
    var clock = today.getHours()+"/"+today.getMinutes()+"/"+today.getSeconds()+"-"+today.getDate()+"/"+(today.getMonth()+1)+"/"+today.getFullYear();

    //Confirm
    var choice1 = confirm("Đã xác nhận thông tin của bạn\n"+"Họ tên: "+name.value+"\n"+"Tuổi: "+age.value+"\n"+"Giới tính: "+gender+"\n"+"Địa chỉ email: "+email.value);
    var choice2 = confirm("Đơn mua hàng: \n"+product+"Tổng cộng: "+cost+"vnđ"+"\n"+"Cảm ơn quý khách<3"+"\n"+"("+clock+")");
    if (choice1 == 1) {
        alert("Thông tin đã được gửi");
    }
}

//Reset wholesale data
function wholesaleReset(){
    document.getElementsByClassName("wholesale-confirm")[0].reset();
}