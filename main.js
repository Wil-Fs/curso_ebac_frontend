$(document).ready(function () {


    $('#incluir-tarefa').click(function () {
        $('form').show(1000);
    });

    $('#button-cancel').click(function () {
        $('form').hide(1000);
    });

    $('#button-add').click(function (e) {
        e.preventDefault()

        const tarefa = $('#input-tarefa').val();

        const novaTarefa = $(`<li class="tarefa"><p>${tarefa}</p></li>`)

        novaTarefa.appendTo('ul');

        $('.tarefa').fadeIn(1000);
        $('#input-tarefa').val('');


    });

    $('.tarefa').click(function (e) {
        $(e.target).addClass('tarefa-completa');

    })
});