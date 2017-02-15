/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('TestApp2.view.main.Main', {  
    extend: 'Ext.container.Container',
    requires: [
        'TestApp2.view.main.MainController',
        'TestApp2.view.main.MainModel',
        'TestApp2.view.sidepanel.SidePanel',
        'TestApp2.view.maingrid.MainGrid'
    ],

    xtype: 'app-main',
    
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },
    
    initComponent: function() {
        var me = this;

        me.items = [{
            xtype: 'side-panel',
            region: 'west',
            width: 300,
            split: true
        }, {
            region: 'center',
            xtype: 'main-grid'
        }];

        me.callParent(arguments);
    }
    
});
