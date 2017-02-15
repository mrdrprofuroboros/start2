var treeStore = Ext.create('Ext.data.TreeStore', {
    proxy: {
        autoLoad: true,
        type: 'ajax',
        url: 'check-nodes.json'
    },
    sorters: [{
        property: 'leaf',
        direction: 'ASC'
    }, {
        property: 'text',
        direction: 'ASC'
    }]
});

Ext.define('TestApp2.view.sidepanel.checktree.CheckTreeModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.mychecktree',
    
    data: {
        name: 'TestApp2'
    },

    stores: {
        treeStore: treeStore
    }

});
