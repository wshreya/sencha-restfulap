/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('RestfulApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'RestfulApp.view.main.MainController',
        'RestfulApp.view.main.MainModel',
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: 'Employee Info<br> System'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    tbar: [{
        text: 'Load Data',
        handler: 'onClickLoadData'
    }],
    items: [{
        title: 'Dyanamic Grid',
        xtype: 'grid'
        // The following grid shares a store with the classic version's grid as well!
    },
    {
        title: 'Employee Form',
        iconCls: 'fa-user',
        html: 'Hello world!!'
        // items: [{
        //     xtype: 'employeeForm',
        //     reference: 'employeeEntryForm'
        // }]
    }]
});
