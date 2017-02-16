Ext.define('TestApp2.view.sidepanel.SidePanelModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.sidepanel',

    stores: {
        value2Store: {
            fields: [
                {name: 'value', type: 'string'}
            ],
            data: [
                {'value': 'Option 1'},
                {'value': 'Option 2'}
            ]
        },
        value3Store: {
            fields: [
                {name: 'value', type: 'string'}
            ],
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: '/combobox3',
                reader: {
                    type: 'json'
                },
                writer: 'json'
            }
        }
    },

    formulas: {
        disabledValue2: function(get) {
            var v4 = get('currentReport.value4').value4 || get('currentReport.value4')
            return v4 == "Field 2" ? true : false;
        },
        disabledValue3: function(get) {
            var v4 = get('currentReport.value4').value4 || get('currentReport.value4')
            return v4 == "Field 1" ? true : false;
        },
        setValue4: {
            get: function(get){
                return get('currentReport.value4');
            },
            set: function(value){
                console.log(value);
                this.set('currentReport.value4', value.option);
            }
        }
    }

});
