Ext.application({
    name: 'ParisJS',
    models: ['Tweet'],
    stores: ['Tweets', 'SenchaTweets'],
    views: ['Home', 'TweetList'],
    controllers: ['Main'],
    
    launch: function() {
        Ext.Viewport.add(
            Ext.create('ParisJS.view.Home')
        );
    }
});