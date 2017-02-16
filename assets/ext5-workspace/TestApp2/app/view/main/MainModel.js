/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Report', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id',  type: 'string', useNull: true},
        {name: 'value1',  type: 'string'},
        {name: 'value2',  type: 'string'},
        {name: 'value3',  type: 'string'},
        {name: 'value4',  type: 'string'},
        {name: 'value5',  type: 'boolean'},
        {name: 'value6',  type: 'string'}
    ]
});

var urlRoot = '/data';

var reportStore = Ext.create('Ext.data.Store', {
    model: 'Report',
    autoLoad: true,
    autoSync: true, 
    proxy: {
        noCache: false,
        api: {
            create:     urlRoot + '/',
            read:       urlRoot,
            update:     urlRoot,
            destroy:    urlRoot
        },
        type: 'rest',
        reader: {   
            type: 'json',
            successProperty: 'success',
            rootProperty: 'data',
            messageProperty: 'message'
        },
        writer: {
            type: 'json',
            writeAllFields: false,
            rootProperty: 'data'
        },
        listeners: { 
            exception: function(proxy, response, options) {
                var data = Ext.decode(response.responseText).data;
                var msg = '';
                for (var key in data) {
                    msg += key + ' error: ' + data[key] + '<br>';
                }
                Ext.MessageBox.show({
                    title: 'Input error!',
                    msg: msg,
                    buttons: 'OK'
                });
            }
        }
    }
});

Ext.define('TestApp2.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        currentReport: {
            value1: '',
            value2: '',
            value3: '',
            value4: "Field 1",
            value5: false,
            value6: ''
        }
    },

    stores: {
        reportStore: reportStore
    }
});