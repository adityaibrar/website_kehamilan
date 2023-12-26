var title = document.querySelector('.service__container')
var backNavigator = document.querySelector('.doctors__nav');
var trimester1 = document.getElementById('trimester1');
var trimester2 = document.getElementById('trimester2');
var trimester3 = document.getElementById('trimester3');
var serviceGrid = document.querySelector('.service__grid');

function moveToHome() {
    backNavigator.style.display = 'block';
    backNavigator.scrollIntoView();
}

function trimester1UsiaKehamilan() {
    if (trimester1.style.display === 'none' || trimester1.style.display === '') {
        trimester1.style.display = '';
        trimester2.style.display = 'none';
        trimester3.style.display = 'none';
        serviceGrid.style.display = 'none';
        title.style.display = 'none';
        trimester1.scrollIntoView();
    } else {
        trimester1.style.display = 'none';
        serviceGrid.style.display = 'block';
        backNavigator.style.display = 'none'; 
        title.style.display = 'block'; 
    }
}

function trimester2UsiaKehamilan() {
    if (trimester2.style.display === 'none' || trimester2.style.display === '') {
        trimester2.style.display = '';
        trimester1.style.display = 'none';
        serviceGrid.style.display = 'none';
        title.style.display = 'none';
        trimester2.scrollIntoView();
    } else {
        trimester1.style.display = 'none';
        trimester2.style.display = 'none';
        serviceGrid.style.display = 'block';
        backNavigator.style.display = 'none'; 
        title.style.display = 'block'; 
    }
}

function trimester3UsiaKehamilan() {
    if (trimester2.style.display === 'none' || trimester2.style.display === '') {
        trimester3.style.display = '';
        trimester2.style.display = 'none';
        trimester1.style.display = 'none';
        serviceGrid.style.display = 'none';
        title.style.display = 'none';
        trimester3.scrollIntoView();
    } else {
        trimester1.style.display = 'none';
        trimester2.style.display = 'none';
        serviceGrid.style.display = 'block';
        backNavigator.style.display = 'none'; 
        title.style.display = 'block'; 
    }
}

function backNav() {
    if (backNavigator.style.display === 'block' || backNavigator.style.display === '') {
        trimester1.style.display = 'none';
        trimester2.style.display = 'none';
        trimester3.style.display = 'none';
        serviceGrid.style.display = 'grid';
        backNavigator.style.display = 'none';
        title.style.display= 'block';
    } else {
        trimester1.style.display = 'none';
        trimester2.style.display = 'none';
        trimester3.style.display = 'none';
        serviceGrid.style.display = 'none'; 
        title.style.display= 'none';
    }
}