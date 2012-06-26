Ext.define('ParisJS.store.Tweets', {
    extend: 'Ext.data.Store',
    config: {
        storeId: 'Tweets',
        autoLoad: true,
        model: 'ParisJS.model.Tweet',
        pageSize: 25,
        proxy: {
            type: 'jsonp',
            limitParam: 'rpp',
            extraParams: {
                q: 'parisjs'
            },
            url: 'http://search.twitter.com/search.json',
            reader: {
                rootProperty: 'results'
            }
        }
    }
});



// ?q=parisjs