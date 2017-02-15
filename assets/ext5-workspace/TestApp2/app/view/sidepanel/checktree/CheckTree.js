
Ext.define("TestApp2.view.sidepanel.checktree.CheckTree",{
    extend: "Ext.tree.Panel",
    alias: "widget.mychecktree",
 
    requires: [
        "TestApp2.view.sidepanel.checktree.CheckTreeController",
        "TestApp2.view.sidepanel.checktree.CheckTreeModel",
        'Ext.data.TreeStore'
    ],
    
    controller: "mychecktree",
    viewModel: {
        type: "mychecktree"
    },

    xtype: 'check-tree',
    
    rootVisible: true,
    useArrows: true,
    
    initComponent: function(){
        var me = this;

        Ext.apply(me, {
            store: me.getViewModel().getStore('treeStore')
        });

        me.callParent(arguments);
    }
    
});
