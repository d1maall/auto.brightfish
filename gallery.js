/**
 * Created by Ole4ka on 26.02.2015.
 */
/**
 * Created by dmitry on 25.02.15.
 */

$(document).ready(function() {
    $('#some-button').magnificPopup({
        items: {
            src: '../img/daisy.jpg'
        },
        type: 'image' // this is default type
    });

    $('#another-button').magnificPopup({
        items: {
            src: '../img/fantasy_space-wide.jpg'
        },
        type: 'image', // this is default type
        closeOnContentClick: 'true',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        image: {
            cursor: 'pointer'
        }
    });

    $('.gallery1').magnificPopup({
        items: {
            src: './img/auto/full/1autogal.jpg'
        },
        type: 'image',
        closeOnContentClick: 'true',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        image: {
            cursor: 'pointer'
        }
    })

    $('.gallery2').magnificPopup({
        items: {
            src: './img/auto/full/2autogal.jpg'
        },
        type: 'image',
        closeOnContentClick: 'true',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        image: {
            cursor: 'pointer'
        }
    })


    $('.gallery3').magnificPopup({
        items: {
            src: './img/auto/full/3autogal.jpg'
        },
        type: 'image',
        closeOnContentClick: 'true',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        image: {
            cursor: 'pointer'
        }
    })


    $('.gallery4').magnificPopup({
        items: {
            src: './img/auto/full/4autogal.jpg'
        },
        type: 'image',
        closeOnContentClick: 'true',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        image: {
            cursor: 'pointer'
        }
    })


    $('.gallery5').magnificPopup({
        items: {
            src: './img/auto/full/5autogal.jpg'
        },
        type: 'image',
        closeOnContentClick: 'true',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        image: {
            cursor: 'pointer'
        }
    })


    $('.gallery6').magnificPopup({
        items: {
            src: './img/auto/full/7autogal.jpg'
        },
        type: 'image',
        closeOnContentClick: 'true',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        image: {
            cursor: 'pointer'
        }
    })

    $('.gallery7').magnificPopup({
        items: {
            src: './img/auto/full/8autogal.jpg'
        },
        type: 'image',
        closeOnContentClick: 'true',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        image: {
            cursor: 'pointer'
        }
    })

    $('.popup-with-form').magnificPopup({
        closeOnContentClick: false,
        type: 'inline',
        preloader: false,
        focus: '#name',
        mainClass: 'mfp-fade',

        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
            beforeOpen: function() {
                if($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            },
            open: function() {
                $.fn.fullpage.setAllowScrolling(false);
            },
            close: function() {
                $.fn.fullpage.setAllowScrolling(true);
            }
        }
    });
});
