/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'RestfulApp.Application',

    name: 'RestfulApp',

    requires: [
        // This will automatically load all classes in the RestfulApp namespace
        // so that application classes do not need to require each other.
        'RestfulApp.*'
    ],

    // The name of the initial view to create.
    mainView: 'RestfulApp.view.main.Main'
});
