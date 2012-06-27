Ext.define('ParisJS.store.Tweets', {
    extend: 'Ext.data.Store',
    config: {
        storeId: 'Tweets',
        autoLoad: true,
        model: 'ParisJS.model.Tweet',
        proxy: {
            type: 'jsonp',
            extraParams: {
                q: 'parisjs',
                rpp: 25
            },
            url: 'http://search.twitter.com/search.json',
            reader: {
                rootProperty: 'results'
            }
        }
    }
});



// ?q=parisjs