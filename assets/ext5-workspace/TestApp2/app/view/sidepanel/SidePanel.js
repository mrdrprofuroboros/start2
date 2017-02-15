
Ext.define("TestApp2.view.sidepanel.SidePanel",{
    extend: "Ext.panel.Panel",
    alias: "widget.side-panel",
 
    requires: [
        "TestApp2.view.sidepanel.SidePanelController",
        "TestApp2.view.sidepanel.SidePanelModel",
        "TestApp2.view.sidepanel.checktree.CheckTree"
    ],
    
    controller: "sidepanel",
    viewModel: {
        type: "sidepanel"
    },

    initComponent: function() {
        var me = this;

        me.items = [{
            xtype: 'tabpanel',
            region: 'center',
            title: 'Settings',
            items: [{
                title: 'Tab 1',

                items: [{
                    xtype: 'panel',
                    border: true,
                    bodyStyle: 'padding: 10px;',

                    items: [{
                        xtype: 'textfield',
                        fieldLabel: 'Value 1',
                        bind: {
                            value: '{currentReport.value1}'
                        }
                    }, {
                        xtype: 'combobox',
                        fieldLabel: 'Value 2',
                        store: me.getViewModel().getStore('value2Store'),
                        queryMode: 'local',
                        displayField: 'value',
                        valueField: 'value',
                        forceSelection : true,
                        editable: false,
                        bind: {
                            value: '{currentReport.value2}',
                            disabled: '{disabledValue2}'
                        }
                    }, {
                        xtype: 'combobox',
                        fieldLabel: 'Value 3',
                        store: me.getViewModel().getStore('value3Store'),
                        queryMode: 'local',
                        displayField: 'value',
                        valueField: 'value',
                        forceSelection : true,
                        editable: false,
                        bind: {
                            value: '{currentReport.value3}',
                            disabled: '{disabledValue3}'
                        }
                    }, {
                        xtype: 'radiogroup',
                        fieldLabel: 'Value 4',
                        labelAlign: 'top',
                        reference: 'value4',
                        layout: {
                            type: 'vbox',
                            align: 'stretch'
                        },
                        defaults: {
                            name: 'option'
                        },
                        items: [{
                            boxLabel  : 'Field 1',
                            inputValue: 'Field 1',
                            checked: true
                        },
                        {
                            boxLabel  : 'Field 2',
                            inputValue: 'Field 2'
                        }],
                        bind: {
                            value: '{setValue4}'
                        }
                    }, {
                        xtype: 'checkbox',
                        fieldLabel: 'Value 5',
                        reference: 'value5',
                        bind: {
                            value: '{currentReport.value5}'
                        }
                    }]
                }, {
                    xtype: 'panel',
                    border: true,
                    bodyStyle: 'padding: 10px;',

                    items: [{
                        xtype: 'mychecktree'
                    }]
                }, {
                    xtype: 'panel',
                    border: true,
                    bodyStyle: 'padding: 10px;',

                    items: [{
                        xtype: 'button',
                        text: 'Cancel',
                        width: 100,
                        handler: 'cancelReport'
                    }, {
                        xtype: 'button',
                        text: 'Save',
                        width: 100,
                        handler: 'saveReport'
                    }]
                }]
            }, {
                title: 'Tab 2',
                items: [{
                    xtype: 'panel',
                    border: true,
                    bodyStyle: 'padding: 10px;',

                    items: [{
                        xtype: 'textfield',
                        fieldLabel: 'Report Title',
                        labelAlign: 'top',
                        bind: {
                            value: '{currentReport.title}'
                        }
                    }, {
                        xtype: 'button',
                        text: 'Show Message',
                        width: 200,
                        handler: 'showMessage'
                    }]
                }]
            }]
            
        }]



        me.callParent(arguments);
    }
});
