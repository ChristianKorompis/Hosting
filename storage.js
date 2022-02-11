$(document).ready(function () {
    $('.layout-post').click(function (e) {
        e.preventDefault();
        var $nextDiv = $(this).closest('.pelindung-link');
        var $divs = $('.pelindung-link').removeClass('visitednw');

        if (!$nextDiv.length) $nextDiv = $divs.first();

        $nextDiv.addClass('visitednw');

        var indices = getActiveIndices(),
            index = $nextDiv.index('.pelindung-link');

        var activeIndices = (Array.isArray(indices)) ? indices : [indices];

        if (activeIndices.indexOf(index) === -1) {
            activeIndices.push(index);
            localStorage.setItem("activeIndices", JSON.stringify(activeIndices));
        }

        setActive(activeIndices);
    });
});


function setActive(activeIndices) {
    for (var activeIndex of activeIndices) {
        $('.pelindung-link').eq(parseInt(activeIndex, 10)).addClass('visitednw');
    }
}

function getActiveIndices() {
    var storageData = localStorage.getItem("activeIndices");
    return (storageData) ? JSON.parse(storageData) : [];
}

setActive(getActiveIndices());
