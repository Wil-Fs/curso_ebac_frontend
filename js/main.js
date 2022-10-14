$(document).ready(function () {
    var form = $('#form');

    $('button').click('submit', function (e) {
        e.preventDefault();

        $('input').val('');
    })


    form.validate({
        rules: {
            name: {
                required: true,
            },
            email: {
                required: true
            },
            cpf: {
                required: true,
            },
            name: {
                required: true,
            },
            cep: {
                required: true,
            },
            adress: {
                required: true,
            },
        },

    })

    
    $('#cpf').mask('000.000.000-00', {placeholder:'XXX.XXX.XXX-XX'});
    $('#telefone').mask('(00) 00000-0000', {placeholder:'(XX) XXXXX-XXXX'});
    $('#cep').mask('00000-000', {placeholder: 'XXXXX-XXX'});
});