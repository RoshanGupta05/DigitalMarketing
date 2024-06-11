$(document).ready(function() {
    var modal = $('#contactFormModal');
    var btn = $('#contactUsBtn');
    var span = $('.close');

    btn.on('click', function() {
        modal.show();
    });

    span.on('click', function() {
        modal.hide();
    });

    $(window).on('click', function(event) {
        if ($(event.target).is(modal)) {
            modal.hide();
        }
    });

    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        var form = $(this);
        $.ajax({
            type: "POST",
            url: form.attr('action'),
            data: form.serialize(),
            success: function(response) {
                $('#formMessage').html('<div class="alert alert-success">Thank you for contacting us! We will get back to you soon.</div>').show();
                form[0].reset();
                setTimeout(function() {
                    modal.hide();
                    $('#formMessage').hide();
                }, 3000);
            },
            error: function() {
                $('#formMessage').html('<div class="alert alert-danger">There was an error submitting your form. Please try again.</div>').show();
            }
        });
    });
});
