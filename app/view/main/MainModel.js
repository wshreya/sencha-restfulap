/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('RestfulApp.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',
    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],
    stores: {
        personnelstore: {
            fields: [
                'name', 'email', 'phone'
            ],
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: 'resources/gridResponse.json',
                reader: {
                    type: 'json',
                    rootProperty: 'dataAndMetaData.records',
                    keepRawData: true,
                }
            }   
        }
    }
    
});
