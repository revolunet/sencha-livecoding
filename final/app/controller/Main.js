Ext.define('ParisJS.controller.Main', {

    extend: 'Ext.app.Controller',

    config: {
        refs: {
            'tweets': 'tweetlist'
        },
        control: {
            'tweets': {
                itemtap: 'onTweetTap'
            }
        }
    },

    onTweetTap: function(list, index, target, record) {
        Ext.Msg.show({title:'tweet clicked', message:'You clicked on tweet #' + record.get('id')});
        console.log('onTweetTap', arguments);
    },

    init: function() {
       // alert('init');
    }


});