Ext.define('TestApp2.view.maingrid.MainGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.maingrid',
    
    selectRow: function(grid, rowIndex, e) {
        var me = this,
            view = me.getView(),
            app = view.up('app-main'),
            vm = app.getViewModel();

        var selectedRep = rowIndex.data;

        vm.set('currentReport.id', selectedRep.id);
        vm.set('currentReport.value1', selectedRep.value1);
        vm.set('currentReport.value2', selectedRep.value2);
        vm.set('currentReport.value3', selectedRep.value3);
        vm.set('currentReport.value4', selectedRep.value4);
        vm.set('currentReport.value5', selectedRep.value5);
        vm.set('currentReport.value6', selectedRep.value6);

        view.up('app-main').down('mychecktree').getController().setChecked(selectedRep.value6);
    }
});
