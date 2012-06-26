
Ext.define('ParisJS.store.SenchaTweets', {
    extend: 'ParisJS.store.Tweets',
    config: {
        storeId: 'SenchaTweets',
        pageSize: 100,
        proxy: {
            extraParams: {
                q: 'sencha'
            }
        }
    }
});