$(document).ready(function () {
    var modal = $('.popup'),
        overlay = $('.overlay'),
        link = $('button[data-popup="true"]'),
        close = $('.close-btn'),
        choose = $('.seat'),
        ticketNumber = $('.seat[data-seat]');
    vipTicketNumber = $('.seat[data-seat-vip]');

    choose.click(function () {
        $(this).toggleClass('active');
    });

    ticketNumber.click(function () {
        $('.ticket-number').text($(this).attr('data-seat'));
    });

    vipTicketNumber.click(function () {
        $('.ticket-number-vip').text($(this).attr('data-seat-vip'));
    });

    close.click(function () {
        modal.toggleClass('popup_active');
        overlay.hide();
    });

    link.on('click', function () {
        overlay.show();
        modal.toggleClass('popup_active');
    });

    $('.btn-danger').on('click', function () {
        var dataSeat = $('span').find('.ticket-number').val();
        var dataSeatVip = $('span').find('.ticket-number-vip').val();
        $.ajax({
            url: '51.68.137.193:9000/movie-park/get-seance-info/81',
            type: 'POST',
            data: {
                "place": dataSeat,
            },
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            crossDomain: true,
            async: true,
            success: function (msg) {
                alert("Прибыли данные:" + dataSeat);
            }
        });
    });
});