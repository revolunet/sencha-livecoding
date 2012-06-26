Ext.application({
    name: 'ParisJS',
    models: ['Tweet'],
    stores: ['Tweets', 'SenchaTweets'],
    launch: function() {
        Ext.create("Ext.tab.Panel", {
            fullscreen: true,
            tabBarPosition: 'bottom',
            items: [
                {
                    title: 'Home',
                    iconCls: 'home',
                    padding: 20,
                    html: [
                        '<div style="text-align:center">',
                        '<h1>ParisJS Sencha live coding</h1>',
                        '<br><br>',
                        '<img src="img/parisjs.png" width=200 />',
                        '<br><br><br><br>',
                        '<h1>by @revolunet</h1>',
                        '</div>'
                    ].join('')
                },
                {
                    title: 'Tweets',
                    iconCls: 'twitter2',
                    xtype: 'list',

                    //set the itemtpl to show the fields for the store
                    itemTpl: '<div class="tweet">' +
                                '<img src="{profile_image_url}">' +
                                '<p>' +
                                    '<strong>{from_user}</strong><br>' +
                                    '{text}' +
                                '</p>' +
                                '<div class="clear"></div>' +
                             '</div>',

                    store: 'Tweets'
                },{
                    title: 'SenchaTweets',
                    iconCls: 'twitter2',
                    xtype: 'list',

                    //set the itemtpl to show the fields for the store
                    itemTpl: '<div class="tweet">' +
                                '<img src="{profile_image_url}">' +
                                '<p>' +
                                    '<strong>{from_user}</strong><br>' +
                                    '{text}' +
                                '</p>' +
                                '<div class="clear"></div>' +
                             '</div>',

                    store: 'SenchaTweets'
                },
                {
                    title: 'Favorites',
                    iconCls: 'favorites',
                    html: 'My favorites'
                },
                {
                    title: 'Locate',
                    iconCls: 'locate',
                    html: 'Locate all the guyz'
                }
            ]
        });
    }
});