function checkNumber() {
    let area = $('#area').val();
    let gdp = $('#gdp').val();
    let population = $('#population').val();
    let regex = /^[\-0-9]*$/;
    let checkArea = regex.test(area);
    let checkGdp = regex.test(gdp);
    let checkPopulation = regex.test(population);
    if (checkArea) {
        if (parseFloat(area) <= 0) {
            let message = "Không được nhập số nhỏ hơn 0";
            $("#check-area").html(message);
            $("#submit").disabled = true;
        } else {
            $('#check-area').html("");
        }
    } else {
        let message = "Trường này phải nhập số!!";
        $("#check-area").html(message);
    }
    if (checkGdp) {
        if (parseFloat(gdp) <= 0) {
            let message = "Không được nhập số nhỏ hơn 0";
            $("#check-gdp").html(message);
        } else {
            $('#check-gdp').html("");
        }
    } else {
        let message = "Trường này phải nhập số!!";
        $("#check-gdp").html(message);
    }
    if (checkPopulation) {
        if (parseInt(population) <= 0) {
            let message = "Không được nhập số nhỏ hơn 0";
            $("#check-population").html(message);
        } else {
            $('#check-population').html("");
        }
    } else {
        let message = "Trường này phải nhập số!!";
        $("#check-population").html(message);
    }
}

function checkName() {
    let name = $("#name").val();

    let regex = /^[a-zA-Z0-9aAàÀảẢãÃáÁạẠăĂằẰẳẲẵẴắẮặẶâÂầẦẩẨẫẪấẤậẬbBcCdDđĐeEèÈẻẺẽẼéÉẹẸêÊềỀểỂễỄếẾệỆfFgGhHiIìÌỉỈĩĨíÍịỊjJkKlLmMnNoOòÒỏỎõÕóÓọỌôÔồỒổỔỗỖốỐộỘơƠờỜởỞỡỠớỚợỢpPqQrRsStTuUùÙủỦũŨúÚụỤưƯừỪửỬữỮứỨựỰvVwWxXyYỳỲỷỶỹỸýÝỵỴzZ\- ]*$/
    console.log(regex.exec(name))
    if(name === "" || name == null) {
        $("#check-name").html(`<span style="color: red">Tên không thể bỏ trống</span>`)
    }else if(regex.exec(name) == null) {
        $("#check-name").html(`<span style="color: red">Tên không đúng định dạng</span>`)
    }else if(name.length <2 || name.length >50) {
        $("#check-name").html(`<span style="color: red">Tên phải lơn hơn 2 và nhỏ hơn 50 ký tự</span>`)
    }else {
        $("#check-name").html(`<span"></span>`)
    }
}