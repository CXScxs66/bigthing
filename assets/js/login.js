$(function () {
    $('#link_lg').on('click', function () {
        $('.login_lg').hide()
        $('.login_reg').show()
    })
    $('#link_reg').on('click', function () {
        $('.login_lg').show()
        $('.login_reg').hide()
    })
})