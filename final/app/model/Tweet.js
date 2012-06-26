Ext.define('ParisJS.model.Tweet', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'from_user',
            'to_user',
            'text',
            'profile_image_url'
        ]
    }
});