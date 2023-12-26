function viewTrimester1() {
    var trims1 = document.getElementById('trimester1');
    var trims_btn1 = document.getElementById('trims2');
    var trims_btn2 = document.getElementById('trims3');
    if (trims1.style.display === 'none') {
        trims1.style.display = '';
        trims1.scrollIntoView();
    } else {
        trims1.style.display = 'none';
    }
}
function viewTrimester2() {
    var trims2 = document.getElementById('trimester2');
    if (trims2.style.display === 'none') {
        trims2.style.display = '';
        trims2.scrollIntoView();
    } else {
        trims2.style.display = 'none';
    }
}
function viewTrimester3() {
    var trims3 = document.getElementById('trimester3');
    if (trims3.style.display === 'none') {
        trims3.style.display = '';
        trims3.scrollIntoView();
    } else {
        trims3.style.display = 'none';
    }
}

function movetoServiceTrims1() {
    var service = document.getElementById('header');
    var trimester1 = document.getElementById('trimester1');
    service.scrollIntoView();
    setTimeout(
        function() {
            trimester1.style.display = 'none'
        }, 500
    )
}
function movetoServiceTrims2() {
    var service = document.getElementById('header');
    var trimester1 = document.getElementById('trimester2');
    service.scrollIntoView();
    setTimeout(
        function() {
            trimester1.style.display = 'none'
        }, 500
    )
}
function movetoServiceTrims3() {
    var service = document.getElementById('header');
    var trimester1 = document.getElementById('trimester3');
    service.scrollIntoView();
    setTimeout(
        function() {
            trimester1.style.display = 'none'
        }, 500
    )
}