$(document).ready(function() {
    $('.submit').on('click', function() {
        console.log("here");
        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        var title = $('.submit').val();
        var date = $('.submit').val();
        console.log(title, date);
        url += '?' + $.param({
            'api-key': "3975a774d730431bb07a22f5358ef37e",
            'q': title,
            'begin_date': date,
            'sort': "newest"
        });
        $.ajax({
            url: url,
            method: 'GET',
        }).done(function(result) {
            console.log(result);
        }).fail(function(err) {
            throw err;
        });
    })
});