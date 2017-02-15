Ext.define("TestApp2.view.maingrid.MainGrid",{
    extend: "Ext.grid.Panel",
    alias: "widget.main-grid",

    requires: [
        "TestApp2.view.maingrid.MainGridController",
        "TestApp2.view.maingrid.MainGridModel"
    ],
    
    controller: "maingrid",
    viewModel: {
        type: "maingrid"
    },
    
    queryMode: 'local',

    listeners: {
        rowclick: 'selectRow'
    },

    initComponent: function() {
        var me = this;

        me.tbar = {
            border: true,
            items: [{
                xtype: 'panel',
                // html: 'Hello world',
                height: 25,
                bind: {
                    html: '{currentReport.title}'
                }
            }]
        };

        me.store = reportStore;

        me.columns = [{
            header: 'Value 1',
            dataIndex: 'value1',
            flex: 1
        }, {
            header: 'Value 2',
            dataIndex: 'value2',
            flex: 1
        }, {
            header: 'Value 3',
            dataIndex: 'value3',
            flex: 1
        }, {
            header: 'Value 4',
            dataIndex: 'value4',
            flex: 1
        }, {
            xtype: 'checkcolumn',
            header: 'Value 5',
            dataIndex: 'value5',
            flex: 1
        }, {
            header: 'Value 6',
            dataIndex: 'value6',
            flex: 1
        }];

        me.callParent(arguments);
    }
});
