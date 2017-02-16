Ext.define('TestApp2.view.sidepanel.SidePanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.sidepanel',
    
    printMessage: function(msg) {
        Ext.MessageBox.show({
            title: 'Error',
            msg: msg,
            icon: Ext.MessageBox.INFO,
            buttons: Ext.Msg.OK
        });
    },

    saveReport: function() {
        var flatten = function (obj) {
            var result = Object.create(obj);
            for(var key in result) {
                result[key] = result[key];
            }
            return result;
        };

        var me = this,
            view = me.getView(),
            app = view.up('app-main'),
            vm = app.getViewModel();

        var curRep = vm.get('currentReport');

        curRep.value6 = view.down('mychecktree').getController().getChecked();

        if (!curRep.value1) {
            me.printMessage('Please set up Value 1')
            return;
        }
        if (curRep.value4 == 'Field 1') {
            if (!curRep.value2) {
                me.printMessage('Please set up Value 2 or toggle Value 4')
                return;
            }
            curRep.value3 = '';
        } else {
            if (!curRep.value3) {
                me.printMessage('Please, set up Value 3 or toggle Value 4');
                return;
            }
            curRep.value2 = '';
        }

        reportStore.insert(0, JSON.parse(JSON.stringify(flatten(curRep))));
    },

    cancelReport: function() {
        var me = this,
            view = me.getView(),
            app = view.up('app-main'),
            vm = app.getViewModel();

        var curRep = vm.get('currentReport');
        var protoRep = Object.getPrototypeOf(curRep);

        vm.set('currentReport.id', null);
        vm.set('currentReport.value1', protoRep.value1);
        vm.set('currentReport.value2', protoRep.value2);
        vm.set('currentReport.value3', protoRep.value3);
        vm.set('currentReport.value4', protoRep.value4);
        vm.set('currentReport.value5', protoRep.value5);
        vm.set('currentReport.value6', protoRep.value6);

        var items = me.lookupReference('value4').items.items;
        items[0].setValue(true);

        me.lookupReference('value5').setValue(false);

        view.down('mychecktree').getController().uncheckAll();

    },

    showMessage: function() {
        var me = this,
            view = me.getView(),
            app = view.up('app-main'),
            vm = app.getViewModel();
        
        var d = new Date();
        var n = d.valueOf();

        me.printMessage(n);

        me.redirectTo(n);
    }
});
