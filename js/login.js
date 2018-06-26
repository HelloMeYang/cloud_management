/**
 * 注册检查
 */
function registerInspect() {
    var inputEmail = $("#inputEmail").val();
    var inputPassword = $("#inputPassword").val();
    var inputPassword1 = $("#inputPassword1").val();
    if (inputEmail != "" && inputEmail != undefined && inputEmail != null && inputPassword != "" && inputPassword != undefined
        && inputPassword != null && inputPassword1 != "" && inputPassword1 != undefined && inputPassword1 != null) {
        if (inputEmail.length < 100 && inputPassword.length < 100 && inputPassword1.length < 100){
            $.post("/register", {userName: inputEmail, password: inputPassword,password1:inputPassword1}, function (data) {
                warning(data);
            });
        }else{
            warning('为了方便您记忆，帐号密码不宜过长!');
        }
    } else {
        warning('帐号密码不能为空！');
    }
}

/**
 * 登录检查
 */
function loginInspect() {
    var inputEmail3 = $("#inputEmail3").val();
    var inputPassword3 = $("#inputPassword3").val();
    if (inputEmail3 != null &&inputPassword3 != null &&  inputEmail3 != undefined &&inputEmail3 != "" &&  inputPassword3 != "" && inputPassword3 != undefined) {
        if (inputEmail3.length < 100 && inputPassword3.length < 100) {
            $.post("/login", {userName: inputEmail3, password: inputPassword3}, function (data) {
                warning(data);
            });
        } else {
            warning('帐号密码错误！');
        }
    } else {
        warning('帐号密码不能为空！');
    }
}


function warning(data) {
    $("#warning").css('display','block');
    $("#warning").text(data);
    setInterval(function(){
        $("#warning").css('display','none');
    },3000);
}







