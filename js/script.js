$(function () {
  /* Inits */

});
$(function () {
  /* Inits */

  functionMoreQuest();

  /* Functions */
  function functionMoreQuest() {
    accordeon(document.querySelectorAll('.quest__info-top'));

    function accordeon(items) {

      if (items.length === 0) { return };

      for (let item of items) {
        item.addEventListener('click', function () {
          let textContent = document.querySelector('.quest__info-toggle');
          let currentArrow = document.querySelector('.quest__info-arrow');

          this.classList.toggle('active');
          textContent.classList.toggle('active');
          currentArrow.classList.toggle('active');

          this.classList.contains('active') ? textContent.style.height = textContent.scrollHeight + 'px' : textContent.style.height = '0px';
        })

      }
    }
  }

  questTabs();
  function questTabs() {
    let tabsItems = document.querySelectorAll('.quest__tab')
    let tabsContents = document.querySelectorAll('.quest__item')
    for (let i = 0; i < tabsItems.length; i++) {
      tabsItems[0].classList.add('active')
      tabsContents[0].style.display = 'flex';
      tabsItems[i].addEventListener('click', (e) => {
        for (let j = 0; j < tabsItems.length; j++) {
          tabsItems[j].classList.remove('active')
          tabsContents[j].style.display = 'none';
        }
        tabsContents[i].style.display = 'flex';
        tabsItems[i].classList.add('active');
      })
    }
  }

});



mainProgramTabs()
function mainProgramTabs() {
    let tabsItems = document.querySelectorAll('.mainprogram__btn')
    let tabsContents = document.querySelectorAll('.mainprogram__slider')
    for (let i = 0; i < tabsItems.length; i++) {
        tabsItems[0].classList.add('section__btn--active')
        tabsContents[0].style.display = 'block';
        tabsItems[i].addEventListener('click', (e) => {
            for (let i = 0; i < tabsItems.length; i++) {
                tabsItems[i].classList.remove('section__btn--active')
                tabsContents[i].style.display = 'none';
            }
            if (tabsContents[i].dataset.content == i) {
                tabsContents[i].style.display = 'block';
                tabsItems[i].classList.add('section__btn--active')
            } else {
            }
        })
    }
}




//   workshopSlider1();

function workshopSlider1() {

    var workshopSlider1Options = {
        slidesPerView: 1,
        spaceBetween: 15,
        scrollbar: {
            el: '.workshop-scrollbar1',
        },
    }

    var workshopSlider1 = null;
    toggleworkshopSlider1();

    window.addEventListener('resize', toggleworkshopSlider1);
    window.addEventListener('orientationchange', toggleworkshopSlider1);

    function toggleworkshopSlider1() {

        if (document.body.clientWidth < 575 && workshopSlider1 === null) {

            workshopSlider1 = new Swiper('.workshop-slider1', workshopSlider1Options);

        } else if (document.body.clientWidth >= 575 && workshopSlider1 !== null) {

            workshopSlider1.destroy();
            workshopSlider1 = null;
        }
    }
}


// workshopSlider2();

function workshopSlider2() {

    var workshopSlider2Options = {
        slidesPerView: 1,
        spaceBetween: 15,
        scrollbar: {
            el: '.workshop-scrollbar2',
        },
    }

    var workshopSlider2 = null;
    toggleworkshopSlider2();

    window.addEventListener('resize', toggleworkshopSlider2);
    window.addEventListener('orientationchange', toggleworkshopSlider2);

    function toggleworkshopSlider2() {

        if (document.body.clientWidth < 575 && workshopSlider2 === null) {

            workshopSlider2 = new Swiper('.workshop-slider2', workshopSlider2Options);

        } else if (document.body.clientWidth >= 575 && workshopSlider2 !== null) {

            workshopSlider2.destroy();
            workshopSlider2 = null;
        }
    }
}


workshopTabs()
function workshopTabs() {
    let tabsItems = document.querySelectorAll('.workshop__btn')
    let tabsContents = document.querySelectorAll('.workshop__slider')
    let title = document.querySelectorAll('.workshop__title-text')
    let day = document.querySelectorAll('.workshop__day')

    for (let i = 0; i < tabsItems.length; i++) {
        tabsItems[0].classList.add('section__btn--active')
        tabsContents[0].style.display = 'block';
        day[0].style.display = 'flex';
        if (window.innerWidth >= 768) {
            title[2].style.display = 'block';
        } else {
            title[0].style.display = 'block';
        }
        tabsItems[i].addEventListener('click', (e) => {
            for (let i = 0; i < tabsItems.length; i++) {
                tabsItems[i].classList.remove('section__btn--active')
                for (item of title) {
                    item.style.display = 'none';
                }

                tabsContents[i].style.display = 'none';
                day[i].style.display = 'none';
            }
            if (tabsContents[i].dataset.content == i) {
                tabsContents[i].style.display = 'block';
                day[i].style.display = 'flex';
                if (window.innerWidth >= 768) {
                    title[i + tabsItems.length].style.display = 'block';
                } else {
                    title[i].style.display = 'block';
                }
                tabsItems[i].classList.add('section__btn--active')
            }
        })
    }
}


masterclassTabs()
function masterclassTabs() {
    let tabsItems = document.querySelectorAll('.masterclass-tabs__item')
    let tabsContents = document.querySelectorAll('.masterclass__contant')
    for (let i = 0; i < tabsItems.length; i++) {
        tabsItems[0].classList.add('masterclass-tabs__item--active')
        tabsContents[0].style.display = 'block';
        tabsItems[i].addEventListener('click', (e) => {
            for (let i = 0; i < tabsItems.length; i++) {
                tabsItems[i].classList.remove('masterclass-tabs__item--active')
                tabsContents[i].style.display = 'none';
            }
            if (tabsContents[i].dataset.content == i) {
                tabsContents[i].style.display = 'block';
                tabsItems[i].classList.add('masterclass-tabs__item--active')
            } else {
            }
        })
    }
}

consultationTabs()
function consultationTabs() {
    let tabsItems = document.querySelectorAll('.consultation__btn')
    let tabsContents = document.querySelectorAll('.consultation__slider')
    for (let i = 0; i < tabsItems.length; i++) {
        tabsItems[0].classList.add('section__btn--active')
        tabsContents[0].style.display = 'block';
        tabsItems[i].addEventListener('click', (e) => {
            for (let i = 0; i < tabsItems.length; i++) {
                tabsItems[i].classList.remove('section__btn--active')
                tabsContents[i].style.display = 'none';
            }
            if (tabsContents[i].dataset.content == i) {
                tabsContents[i].style.display = 'block';
                tabsItems[i].classList.add('section__btn--active')
            } else {
            }
        })
    }
}

initHistoryPopup();


function initHistoryPopup() {
    let items = document.querySelectorAll('.history__item-btn'),
        popup = document.querySelector('#popup-history'),
        programPopup = popup.querySelector('.history__item-program'),
        namePopup = popup.querySelector('.history__item-name'),
        srcPopup = popup.querySelector('.history__item-photo'),
        srcPopup2 = popup.querySelector('.history__item-photo-2'),
        listPopup = popup.querySelector('.history__item-list'),
        textPopupShort = popup.querySelector('.history__item-text'),
        textPopupFull = popup.querySelector('.history__item-text-full')

    if (!items.length) return;

    for (let currenBtn of items) {
        currenBtn.addEventListener('click', function () {
            let currentItem = this.closest('.history__item'),
                program = currentItem.querySelector('.history__item-program').textContent,
                name = currentItem.querySelector('.history__item-name').textContent,
                src = currentItem.querySelector('.history__item-photo').getAttribute("src");
            list = currentItem.querySelector('.history__item-list').innerHTML
            textShort = currentItem.querySelector('.history__item-text').textContent
            textFull = currentItem.querySelector('.history__item-full').innerHTML

            programPopup.textContent = program
            namePopup.textContent = name
            srcPopup.src = src
            srcPopup2.src = src
            listPopup.innerHTML = list
            textPopupShort.textContent = textShort
            textPopupFull.innerHTML = textFull
        })
    }
}

$('.video__swiper').each(function(index, el) {
    partners = new Swiper('.video__swiper', {
        direction: 'horizontal',
        autoplay: false,
        loop: false,
        slidesPerView: 1.1,
        slidesPerGroup: 1,
        spaceBetween: 20,
        allowTouchMove: true,
        watchOverflow: true,
        mousewheel: {
            forceToAxis: true,
        }
    });
});



$(function () {
    /* Inits */
    initScroll();
    initBodyScroll();
    initMenu();
    initMore();
    initTabs();
    initFormCheckbox();
    initFormRadio();
    // initCarousel();
    initAccordion();
    initShowBlock();
    initLazy();

    let elCollection = document.getElementsByClassName('choise_radio');
    let elNodes = document.querySelectorAll(".choise_radio");
    for (let i = 0; i < elCollection.length; i++) {
        let elem = elCollection[i];
        elem.addEventListener("click", function () {
            this.classList.toggle("active");
        })
    }

    /* Functions */
    function initScroll() {
        if (!$('.scroll').length) return;

        $('.scroll').click(function (event) {
            event.preventDefault();
            var hrefId = $(this).attr('href');
            var posTop = $(hrefId).offset().top - 100;
            $('html, body').animate({
                scrollTop: posTop
            }, 1000);
        });
    }

    /* Шапка */
    function initBodyScroll() {
        $(window).scroll(function () {

            if ($(this).scrollTop() > 0) {
                $('body').addClass('page-scrolled');
            } else {
                $('body').removeClass('page-scrolled');
            }
        });

        $(document).ready(function () {

            if ($(this).scrollTop() > 0) {
                $('body').addClass('page-scrolled');
            } else {
                $('body').removeClass('page-scrolled');
            }
        });
    }


    /* Меню */
    function initMenu() {

        $('.header__icon').click(function () {
            $('.header__menu').slideToggle('fast').toggleClass('header__menu_open');
            $(this).toggleClass('open');
            return false;
        });

        $('.header__menu-link').click(function () {
            var windowWidth = parseInt($(window).width());
            if (windowWidth < 767) {
                $('.header__menu').slideUp('fast').removeClass('header__menu_open');
            }
            $('.header__icon-menu').removeClass('open');
            return false;
        });

        $(window).resize(function () {
            var windowWidth = parseInt($(window).width());
            if ($('.header__menu').css('display', 'flex')) {
                $('.header__menu').css('display', 'none');
            }
            $('.header__icon-menu').removeClass('open');
            return false;
        });

        $('a[href^="#"').on('click', function() {
            $('.header__icon').removeClass('open');
            $('.header__menu').removeClass('header__menu_open');
        });
    }


    /* Показать еще */
    function initMore() {

        $('[data-more-btn]').on('init.more click', function (event) {
            var
                $container = $('[data-more-options]', $(this).parent()),
                options = {},
                visible = 0,
                window_width = $(window).width(),
                $items;

            options = $container.data('more-options') || {}

            if (event.type == 'init' && window_width > 991) {
                visible = options.init;
            } else if (event.type == 'init' && window_width > 767 && window_width <= 991) {
                visible = options.inittablet;
            } else if (event.type == 'init' && window_width <= 767) {
                visible = options.initmobile;
            } else if (window_width > 991) {
                visible = options.desktop;
            } else if (window_width > 767 && window_width <= 991) {
                visible = options.tablet;
            } else if (window_width <= 767) {
                visible = options.mobile;
            }

            $items = $(options.target + '[data-more-hidden]', $container);
            $items.slice(0, visible).removeAttr('data-more-hidden');

            $('html, body')
                .animate({
                    scrollTop: '+=1'
                }, 0)
                .animate({
                    scrollTop: '-=1'
                }, 0);

            if ($items.length - visible <= 0) {
                $(this).addClass('d-none');
                $(this).parents('.more').css('display', 'none');
            }
        })
            .trigger('init.more');
    }


    /* Tabs */
    function initTabs() {
        $('ul.tabs').delegate('li:not(.current)', 'click', function () {
            $(this).addClass('current').siblings().removeClass('current')
                .parents('div.tabsblock').find('div.tabsbox').removeClass("visible").eq($(this).index()).addClass("visible");

            initCombatSlider();
        })
    }


    // jQuery(function(){
    // $("#mydata").mask("99.99.9999");
    // });

    $('[name=secondName]').bind("change keyup input click", function () {
        if (this.value.match(/[^А-Яа-яЁё]/g)) {
            this.value = this.value.replace(/[^А-Яа-яЁё]/g, '');
        }
    });

    function getTodaysDate() {
        date = new Date();
        day = date.getDate();
        month = date.getMonth() + 1;
        year = date.getFullYear();

        if (month < 10) month = "0" + month;
        if (day < 10) day = "0" + day;

        today = year + "-" + month + "-" + day;
        console.log(today);
        return today;
    }

    function validDate(date, bdInput) {
        var date = document.getElementById('#mydata').value;
        todayDate = getTodaysDate();
        if (date > todayDate) {
            bdInput.value = todayDate;
        }
    }

    /* slick-carousel  */
    function initCarousel() {

        if ($(window).width() < 768) {
            $('.program__carousel_1').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                rows: 2,
                variableWidth: true,
                infinite: false,
                arrows: false,
                dots: true,
                focusOnSelect: true,
                appendDots: $('#program_1-slider-dots')
            });
        }

        if ($(window).width() < 768) {
            $('.program__carousel_2').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                rows: 2,
                variableWidth: true,
                infinite: false,
                arrows: false,
                dots: true,
                focusOnSelect: true,
                appendDots: $('#program_2-slider-dots')
            });
        }
    }


    /* Accordion */
    function initAccordion() {
        $('.accordion__hide:not(.open)').hide();

        $('.accordion .accordion__item').click(function () {
            $(this).siblings('.accordion__item').find('.accordion__hide').slideUp('300');
            $(this).siblings('.accordion__item').removeClass('open');
            $(this).find('.accordion__hide').slideToggle(300);
            $(this).toggleClass('open');
        });
    }


    /* Показать скрытый блок */
    function initShowBlock() {
        $('#participated').on('click', function () {
            $(this).parents('fieldset').find(".form__checkbox").show("normal");
        });

        $('#not-participated').on('click', function () {
            $(this).parents('fieldset').find(".form__checkbox").hide("normal");
        });
    }

    /*  */
    function initFormCheckbox() {
        $('.form__button').on('click', function () {
            if ($('.choise_radio_hidden').val() == '') {
                $('.choise__radio-current').addClass('error')
            }
            else {
                $('.choise__radio-current').removeClass('error')
            }
        });
    }
    function initFormRadio() {
        $('.form__radio-select').on('click', function () {
            let currentFormat = $(this).text();
            let currentInput = $('.choise_radio_hidden');
            let currentText = $('.form__legend');
            currentInput.val(currentFormat)
            currentText.text(currentFormat);
        });
    }

    /* Lazy */
    function initLazy() {

        let
            lazyArr = [].slice.call(document.querySelectorAll('.lazy')),
            active = false,
            threshold = 200;

        const lazyLoad = function (e) {
            if (active === false) {
                active = true;

                setTimeout(function () {
                    lazyArr.forEach(function (lazyObj) {
                        if ((lazyObj.getBoundingClientRect().top <= window.innerHeight + threshold && lazyObj.getBoundingClientRect().bottom >= -threshold) && getComputedStyle(lazyObj).display !== 'none') {

                            if (lazyObj.dataset.src) {
                                let
                                    img = new Image(),
                                    src = lazyObj.dataset.src;
                                img.src = src;
                                img.onload = function () {
                                    if (!!lazyObj.parent) {
                                        lazyObj.parent.replaceChild(img, lazyObj);
                                    } else {
                                        lazyObj.src = src;
                                    }
                                }
                                lazyObj.removeAttribute('data-src');
                            }

                            if (lazyObj.dataset.srcset) {
                                lazyObj.srcset = lazyObj.dataset.srcset;
                                lazyObj.removeAttribute('data-srcset');
                            }

                            lazyObj.classList.remove('lazy');
                            lazyObj.classList.add('lazy-loaded');

                            lazyArr = lazyArr.filter(function (obj) {
                                return obj !== lazyObj;
                            });

                            if (lazyArr.length === 0) {
                                document.removeEventListener('scroll', lazyLoad);
                                window.removeEventListener('resize', lazyLoad);
                                window.removeEventListener('orientationchange', lazyLoad);
                            }
                        }
                    });

                    active = false;
                }, 200);
            }
        };

        lazyLoad();

        document.addEventListener('scroll', lazyLoad);
        window.addEventListener('resize', lazyLoad);
        window.addEventListener('orientationchange', lazyLoad);
    }
});