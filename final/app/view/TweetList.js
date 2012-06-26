Ext.define('ParisJS.view.TweetList', {
    extend: 'Ext.dataview.List',

    xtype: 'tweetlist',

    config: {
        itemTpl: '<div class="tweet">' +
                     '<img src="{profile_image_url}">' +
                     '<p>' +
                        '<strong>{from_user}</strong><br>' +
                        '{text}' +
                     '</p>' +
                     '<div class="clear"></div>' +
                 '</div>'
    }

});