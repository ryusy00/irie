// 마우스 커서 애니메이션
document.addEventListener('DOMContentLoaded', function() {
    const customCursor = document.querySelector('.custom-cursor');
    let cursorX = 0, cursorY = 0;
    let mouseX = 0, mouseY = 0;

    // 마우스 움직임에 따라 목표 위치 업데이트
    document.addEventListener('mousemove', function(e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
    });

    function animateCursor() {
        // 현재 커서 위치를 목표 위치로 부드럽게 이동
        cursorX += (mouseX - cursorX) * 0.3;
        cursorY += (mouseY - cursorY) * 0.3;

        customCursor.style.left = cursorX + 'px';
        customCursor.style.top = cursorY + 'px';

        requestAnimationFrame(animateCursor);
    }

    // 애니메이션 시작
    animateCursor();
    
});


// 스크롤 이벤트를 사용하여 배경색 변경
window.addEventListener('load', function() {
    const header = document.querySelector('header');
    header.classList.remove('bg-light'); // 초기 로드 시 Bootstrap 클래스 제거
});
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const bannerHeight = document.getElementById('main-banner').offsetHeight;

    if (window.scrollY > bannerHeight) {
        header.classList.add('scrolled'); // 배너 높이를 넘으면 클래스 추가
    } else {
        header.classList.remove('scrolled'); // 배너 높이 이하면 클래스 제거
    }
});

// pc네비게이션
// $(function() {
//     var hideDelay = 300; // delay in milliseconds

//     $('nav > ul > li').hover(function() {
//         // Clear any existing hide timer
//         clearTimeout($(this).data('hideTimer'));

//         // Stop any ongoing animation and slide down the submenu
//         $(this).find('.sub').stop(true, true).slideDown();
//     }, function() {
//         var $submenu = $(this).find('.sub');

//         // Set a timer to slide up the submenu after a delay
//         var hideTimer = setTimeout(function() {
//             $submenu.stop(true, true).slideUp();
//         }, hideDelay);

//         // Store the timer in the data for this menu item
//         $(this).data('hideTimer', hideTimer);
//     });
// });


// 모바일 네비게이션 버튼 색상
$(document).ready(function() {
    $('.navbar-toggler').on('click', function() {
        // 메뉴가 열려있는 상태인지 확인
        var isOpen = $(this).hasClass('collapsed');

        if (isOpen) {
            // 메뉴가 열려있지 않다면
            $(this).css({
                // 'background-color': 'black',
                'color': 'white',
                'border-color': 'white'
            });
            $(this).find('i').css('color', 'white');
        } else {
            // 메뉴가 열려있다면
            $(this).css({
                'background-color': '',
                'color': '',
                'border-color': ''
            });
            $(this).find('i').css('color', '');
        }
    });

    // 메뉴가 닫힐 때 버튼 상태 복원
    $('.navbar-collapse').on('hide.bs.collapse', function() {
        $('.navbar-toggler').css({
            'background-color': '',
            'color': '',
            'border-color': ''
        });
        $('.navbar-toggler').find('i').css('color', '');
    });

    // 메뉴가 열릴 때 버튼 상태 변경
    $('.navbar-collapse').on('show.bs.collapse', function() {
        $('.navbar-toggler').css({
            // 'background-color': 'black',
            'color': 'white',
            'border-color': 'white'
        });
        $('.navbar-toggler').find('i').css('color', 'white');
    });
});