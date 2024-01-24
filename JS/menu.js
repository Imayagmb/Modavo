

$('#chk').change(function() {
    if ($(this).is(':checked')) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
});