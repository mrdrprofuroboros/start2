Ext.define('TestApp2.view.sidepanel.checktree.CheckTreeController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mychecktree',


    getChecked: function() {
        var me = this;

        var records = me.getView().getChecked(),
            names = [];
                   
        Ext.Array.each(records, function(rec){
            names.push(rec.get('text'));
        });
        var checked = names.join('#');
        return checked;
    },

    setChecked: function(str) {
        var me = this;

        var names = str.split('#');

        me.uncheckAll();
        me.getView().getRootNode().cascadeBy(function(node) {
            if (node.isLeaf() && names.indexOf(node.data.text) >= 0) {

                node.set({checked:true});
            }
        })
    },

    uncheckAll: function() {
        var me = this;

        var records = me.getView().getChecked(),
            names = [];
                   
        Ext.Array.each(records, function(rec){
            rec.set('checked', false);
        });
    }
    
});
