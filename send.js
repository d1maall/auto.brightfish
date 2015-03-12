/**
 * Created by dmitry on 12.03.15.
 */

function send() {
    //var name = $('.name').val();
    //var email = $('.email').val();
    //var phone = $('.phone').val();

    yaCounter26346798.reachGoal('AUTO');

    $.post(
        "./mail.php",
        {
            name : $('.name').val(),
            phone : $('.phone').val(),
            email: $('.email').val()
        },
        onAjaxSuccess
    );
    function onAjaxSuccess(data)
    {
        // Здесь мы получаем данные, отправленные сервером и выводим их на экран.
        //alert(data);
    }
    //alert('Имя: ' + name + '\n' + 'Почта: ' + email + '\n' + 'Телефон: ' + phone );
    //немножко говнокода

    alert("Ваша заявка получена. Мы скоро свяжемся с вами.")
    $('.name').val('');
    $('.email').val('');
    $('.phone').val('');

    $.magnificPopup.close();

}