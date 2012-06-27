
Ext.define('ParisJS.store.SenchaTweets', {
    extend: 'ParisJS.store.Tweets',
    config: {
        storeId: 'SenchaTweets',
        proxy: {
            extraParams: {
                q: 'sencha'
            }
        }
    }
});