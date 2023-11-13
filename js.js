function linkTo(element) {
    if (element == 'FuJen_Web') {
        window.open('https://www.fju.edu.tw/');
    }
    else if (element == 'Information_Engineering_Web') {
        window.open('http://140.136.251.139/DepartmentCSIE/layout/oneblue/vvindex.jsp');
    }
    else if (element == 'Login_Register') {
        alert('不准登入，也不准註冊，目前系統暫未開放此功能，超派~');
    }
}

// $('#FuJen_Web').click(function(){
//     window.open('https://www.fju.edu.tw/');
// });