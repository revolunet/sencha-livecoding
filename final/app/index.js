Ext.application({
    name: 'ParisJS',
    models: ['Tweet'],
    stores: ['Tweets', 'SenchaTweets'],
    views: ['Home', 'TweetList'],
    controllers: ['Main'],
    
    launch: function() {
        Ext.create('ParisJS.view.Home');
    }
});