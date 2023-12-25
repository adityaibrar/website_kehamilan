function moveToService() {
    var konten = document.getElementById('service');
    konten.scrollIntoView();
}

function moveToAboutUs() {
    var konten = document.getElementById('tentang-kami');
    konten.scrollIntoView();
}

function moveToTeam() {
    var konten = document.getElementById('team');
    konten.scrollIntoView();
}

function moveToHome() {
    var content = document.getElementById('header');
    content.scrollIntoView();
}

function trimester1UsiaKehamilan() {
    var whyContainer = document.querySelector('.why__container');
    var serviceGrid = document.querySelector('.service__grid');
    var doctorsNav = document.querySelector('.doctors__nav');
    var title = document.querySelector('.service__container');
    
    if (whyContainer.style.display === 'none' || whyContainer.style.display === '') {
        whyContainer.style.display = 'block';
        serviceGrid.style.display = 'none';
        doctorsNav.style.display = 'block';
        title.style.display = 'none';
    } else {
        whyContainer.style.display = 'none';
        serviceGrid.style.display = 'block';
        doctorsNav.style.display = 'none'; 
        title.style.display = 'block'; 
    }
}

function backNavigator() {
    var backNav = document.querySelector('.doctors__nav');
    var whyContainer = document.querySelector('.why__container');
    var serviceGrid = document.querySelector('.service__grid');
    var title = document.querySelector('.service__container');
    
    if (backNav.style.display === 'block' || backNav.style.display === '') {
        whyContainer.style.display = 'none';
        serviceGrid.style.display = 'grid';
        backNav.style.display = 'none';
        title.style.display= 'block';
    } else {
        // Hanya menampilkan serviceGrid dan menyembunyikan yang lain
        whyContainer.style.display = 'none';
        serviceGrid.style.display = 'none'; // Setel kembali ke grid atau sesuai dengan style aslinya
        title.style.display= 'none';
    }
}



