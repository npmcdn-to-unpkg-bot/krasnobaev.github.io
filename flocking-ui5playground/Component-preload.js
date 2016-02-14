jQuery.sap.registerPreloadedModules({
	"version": "2.0",
	"name": "src/Component-preload",
	"modules": {
		"src/Component.js": "/*!\n * This file is part of Flocking UI5 Playground\n * Copyright (C) 2016 Aleksey Krasnobaev <alekseykrasnobaev@gmail.com>\n *\n * You should have received a copy of the GNU General Public License\n * version 3 along with this program.\n * If not, see <http://www.gnu.org/licenses/>.\n */\nsap.ui.define([\"sap/ui/core/UIComponent\"],function(e){\"use strict\";var n=e.extend(\"fplay.Component\",{metadata:{name:\"flocking-ui5playground\",version:\"0.0.1\",includes:[\"css/style.css\"],dependencies:{libs:[\"sap.m\",\"zlib\"]},rootView:\"fplay.view.App\"}});return n});",
		"src/controller/App.controller.js": "/*!\n * This file is part of Flocking UI5 Playground\n * Copyright (C) 2016 Aleksey Krasnobaev <alekseykrasnobaev@gmail.com>\n *\n * You should have received a copy of the GNU General Public License\n * version 3 along with this program.\n * If not, see <http://www.gnu.org/licenses/>.\n */\nsap.ui.define([\"sap/ui/core/mvc/Controller\"],function(e){\"use strict\";return e.extend(\"fplay.controller.App\",{onOpenDialog:function(){this.getOwnerComponent().helloDialog.open(this.getView())}})});",
		"src/controller/Main.controller.js": "/*!\n * This file is part of Flocking UI5 Playground\n * Copyright (C) 2016 Aleksey Krasnobaev <alekseykrasnobaev@gmail.com>\n *\n * You should have received a copy of the GNU General Public License\n * version 3 along with this program.\n * If not, see <http://www.gnu.org/licenses/>.\n */\nsap.ui.define([\"sap/ui/core/mvc/Controller\"],function(e){\"use strict\";var n=flock.synth({synthDef:{ugen:\"flock.ugen.sinOsc\",freq:440,mul:.25}});return e.extend(\"fplay.controller.Main\",{handleToggleButtonPress:function(e){e.getParameter(\"pressed\")?n.play():n.pause()}})});",
		"src/model/Settings.js": "/*!\n * This file is part of Flocking UI5 Playground\n * Copyright (C) 2016 Aleksey Krasnobaev <alekseykrasnobaev@gmail.com>\n *\n * You should have received a copy of the GNU General Public License\n * version 3 along with this program.\n * If not, see <http://www.gnu.org/licenses/>.\n */\n",
		"src/zlib/Codemirror.js": "/*!\n * OpenUI5 wrapper for CodeMirror\n * Copyright (C) 2016 Aleksey Krasnobaev <alekseykrasnobaev@gmail.com>\n *\n * This module is licensed under GNU General Public License version 3.\n * You should have received a copy of the License along with this program.\n * If not, see <http://www.gnu.org/licenses/>.\n */\nsap.ui.define([\"sap/m/TextArea\"],function(e){\"use strict\";jQuery.sap.includeStyleSheet(jQuery.sap.getModulePath(\"zlib.Codemirror\")+\".css\");var t=e.extend(\"zlib.Codemirror\",{metadata:{properties:{height:{type:\"sap.ui.core.CSSSize\",group:\"Dimension\",defaultValue:\"auto\"},mode:{type:\"string\",group:\"CodemirrorConfig\",defaultValue:void 0},theme:{type:\"string\",group:\"CodemirrorConfig\",defaultValue:void 0},lineNumbers:{type:\"boolean\",group:\"CodemirrorConfig\",defaultValue:!0},lineWrapping:{type:\"boolean\",group:\"CodemirrorConfig\",defaultValue:!0},readOnly:{type:\"boolean\",group:\"CodemirrorConfig\",defaultValue:!1},autoCloseBrackets:{type:\"boolean\",group:\"CodemirrorConfig\",defaultValue:!0},matchBrackets:{type:\"boolean\",group:\"CodemirrorConfig\",defaultValue:!0},highlightSelectionMatches:{type:\"object\",group:\"CodemirrorConfig\",defaultValue:{showToken:/\\w/,annotateScrollbar:!1},requires:[\"addon/scroll/annotatescrollbar.js\",\"addon/scroll/matchesonscrollbar.js\",\"addon/scroll/searchcursor.js\",\"addon/scroll/match-highlighter.js\"]}},aggregations:{},events:{liveChange:{parameters:{value:\"string\"}}}},_editor:null,dfdAfterRendering:null,constructor:function(){e.apply(this,arguments),this.dfdAfterRendering=jQuery.Deferred()},focus:function(){this._editor.focus()},onAfterRendering:function(e){this._editor||(this._editor=CodeMirror.fromTextArea(this._getCodemirrorDomRef(),{mode:this.getMode(),theme:this.getTheme(),lineNumbers:this.getLineNumbers(),lineWrapping:this.getLineWrapping(),readOnly:this.getReadOnly(),autoCloseBrackets:this.getAutoCloseBrackets(),matchBrackets:this.getMatchBrackets(),highlightSelectionMatches:this.getHighlightSelectionMatches()}),this._editor.on(\"changes\",this._setValue.bind(this))),this.dfdAfterRendering.resolve()},setValue:function(e){jQuery.when(this.dfdAfterRendering).then(function(){e&&(this.setProperty(\"value\",e),this._editor.setValue(e))}.bind(this))},_setValue:function(e){var t=e.getValue();this.setProperty(\"value\",t),this.fireLiveChange({id:\"\",formula:t})},setVisible:function(e){this.setProperty(\"visible\",e),this.rerender()},insertTextInCurrentCursorPosition:function(e){try{this._editor.replaceRange(e,this._editor.getCursor())}catch(t){jQuery.sap.log.error(this.getMetadata().getName(),\"Unable to insert string into CodeMirror\",t)}},_getCodemirrorDomRef:function(){return this.getDomRef().children[0]},renderer:{render:function(e,t){e.write(\"<div\"),e.writeControlData(t),e.addClass(\"zCodemirror\"),e.writeClasses(),e.write(\">\"),e.write(\"<textarea\"),e.writeAttribute(\"id\",t.getId()+\"--cm\"),e.writeAttribute(\"name\",\"codemirror\"),e.write(\"></textarea>\"),e.write(\"</div>\")},updateVisibility:function(e,t){jQuery(t._getCodemirrorDomRef().nextSibling).css(\"display\",t.getVisible()?\"\":\"none\")}},rerender:function(){var e=sap.ui.getCore().getRenderManager();this.getRenderer().updateVisibility(e,this),this._editor.refresh()}});return t});",
		"src/zlib/library.js": "/*!\n * This file is part of Flocking UI5 Playground\n * Copyright (C) 2016 Aleksey Krasnobaev <alekseykrasnobaev@gmail.com>\n *\n * You should have received a copy of the GNU General Public License\n * version 3 along with this program.\n * If not, see <http://www.gnu.org/licenses/>.\n */\nsap.ui.define([],function(){\"use strict\";return sap.ui.getCore().initLibrary({name:\"zlib\",version:\"0.0.1\",dependencies:[\"sap.m\"],noLibraryCSS:!0}),zlib},!0);",
		"src/view/App.view.xml": "<?xml version=\"1.0\" encoding=\"UTF-8\" ?><core:View\n    controllerName=\"fplay.controller.App\"\n    displayBlock=\"true\"\n    xmlns=\"sap.m\"\n\n    xmlns:core=\"sap.ui.core\"\n    xmlns:mvc=\"sap.ui.core.mvc\"\n><App><mvc:XMLView\n        viewName=\"fplay.view.Main\"\n    /></App></core:View>\n",
		"src/view/Main.view.xml": "<?xml version=\"1.0\" encoding=\"UTF-8\" ?><core:View\n    controllerName=\"fplay.controller.Main\"\n    displayBlock=\"true\"\n    xmlns=\"sap.m\"\n    xmlns:core=\"sap.ui.core\"\n    xmlns:zlib=\"zlib\"\n><Page\n      title=\"Flocking Interactive Playground\"\n  ><content><ToggleButton\n          icon=\"sap-icon://hello-world\"\n          press=\"handleToggleButtonPress\"\n      /><zlib:Codemirror\n          theme=\"solarized\"\n      /></content></Page></core:View>\n"
	}
});