/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"CO/COM/zUI_PRUEBA/zUI_PRUEBA/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});