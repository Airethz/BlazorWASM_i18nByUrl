/* loading時檢查lang參數內容 */
window.onload = function () {
    var langValue = getParameterByName("lang");
    if (langValue.length > 0 && window.localStorage['BlazorCulture'] != langValue) {
        window.localStorage['BlazorCulture'] = langValue;
    }
}

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

window.blazorCulture = {
    get: () => window.localStorage['BlazorCulture'],
    set: (value) => window.localStorage['BlazorCulture'] = value
};

/*取得組合url用的lang字串*/
function GetLangString() {
    var langVaule = window.localStorage['BlazorCulture'];
    var result = "";
    if (langVaule.length > 0) {
        result = "lang=" + langVaule;
    }
    return result;
}