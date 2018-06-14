/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('RestfulApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onClickLoadData: function() {
        var gridStore = this.getStore('personnelstore');
        var columnsArray = gridStore.getProxy().getReader().rawData.dataAndMetaData.columns;
        this.getView().query('grid')[0].reconfigure(gridStore,columnsArray);
        //console.log(this.getS);
    },

    // onItemSelected: function (sender, record) {
    //     Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    // },

    // onConfirm: function (choice) {
    //     if (choice === 'yes') {
    //         //
    //     }
    // }
});
