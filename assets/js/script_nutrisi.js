var title = document.querySelector('.service__container')
var backNavigator = document.querySelector('.header');
var trimester1 = document.getElementById('trimester1');
var trimester2 = document.getElementById('trimester2');
var trimester3 = document.getElementById('trimester3');
var btnUp = document.getElementById('btn-up');
var serviceGrid = document.querySelector('.service__grid');

function moveToHome() {
    backNavigator.scrollIntoView();
}

function back() {
    if(trimester1.style.display === '') {
        trimester1.style.display = 'none';
        btnUp.style.display = 'none';
        title.style.display = '';
        serviceGrid.style.display = '';
    } else if(trimester2.style.display === '') {
        trimester2.style.display = 'none'
        btnUp.style.display = 'none';
        title.style.display = '';
        serviceGrid.style.display = '';
    } else if(trimester3.style.display === '') {
        trimester3.style.display = 'none'
        btnUp.style.display = 'none';
        title.style.display = '';
        serviceGrid.style.display = '';
    }
}

function explore() {
    window.location.href = "../index.html";
}

function trimester1NutrisiKehamilan() {
    if (trimester1.style.display === 'none' || trimester1.style.display === '') {
        trimester1.style.display = '';
        trimester2.style.display = 'none';
        trimester3.style.display = 'none';
        serviceGrid.style.display = 'none';
        title.style.display = 'none';
    } else {
        trimester1.style.display = 'none';
        serviceGrid.style.display = 'block';
        backNavigator.style.display = 'none';
        title.style.display = 'block';
    }
}

function trimester2NutrisiKehamilan() {
    if (trimester2.style.display === 'none' || trimester2.style.display === '') {
        trimester2.style.display = '';
        trimester1.style.display = 'none';
        serviceGrid.style.display = 'none';
        title.style.display = 'none';
        btnUp.style.display = '';
    } else {
        trimester1.style.display = 'none';
        trimester2.style.display = 'none';
        serviceGrid.style.display = 'block';
        backNavigator.style.display = 'none';
        title.style.display = 'block';
    }
}

function trimester3NutrisiKehamilan() {
    if (trimester3.style.display === 'none' || trimester3.style.display === '') {
        trimester3.style.display = '';
        trimester2.style.display = 'none';
        trimester1.style.display = 'none';
        serviceGrid.style.display = 'none';
        title.style.display = 'none';
        btnUp.style.display = '';
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
        title.style.display = 'block';
    } else {
        trimester1.style.display = 'none';
        trimester2.style.display = 'none';
        trimester3.style.display = 'none';
        serviceGrid.style.display = 'none';
        title.style.display = 'none';
    }
}