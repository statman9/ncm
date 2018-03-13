var sites = require('./sites');

module.exports = {
    loadAll: function (id) {
        var site = sites.sites.filter(u => u.url === "http://localhost:8081")[0];
                var page = site.content.filter(p => p.page === id)[0];
                if (page) {
                    return page.content_areas;
                }
    },
    edit: function () {

    },
    save: function () {

    },
    delete: function () {

    },
    add: function () {

    }
}