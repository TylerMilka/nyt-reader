$(document).ready(function() {

    var q;
    var beginYear = '1900';
    var endYear = '2017';

    $('#search-button').on('click', function() {
        q = $('#search-term').val();
        console.log($('#begin-year').val());
        if ($('#begin-year').val() !== '') {
            beginYear = $('#begin-year').val();
        }
        if ($('#end-year').val() !== '') {
            endYear = $('#end-year').val();
        }
        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?' + $.param({
            'api-key': "2434876726a64f759a34973f3c928f7e",
            'q': q,
            'begin_date': beginYear + '0101',
            'end_date': endYear + '0101'
        });
        $.ajax({
            url: url,
            method: 'GET',
        }).done(function(result) {
            console.log(result);
        }).fail(function(err) {
            throw err;
        });
    });


});
