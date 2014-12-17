/* use
$.getUrlVarSetDefault('page',1);
*/

$.extend({
	getUrlVars : function() {
		var vars = [], hash;
		var hashes = window.location.href.slice(
				window.location.href.indexOf('?') + 1).split('&');
		for (var i = 0; i < hashes.length; i++) {
			hash = hashes[i].split('=');
			vars.push(hash[0]);
			vars[hash[0]] = hash[1];
		}
		return vars;
	},
	getUrlVar : function(name) {
		var _v = $.getUrlVars()[name];
		if (_v == undefined || _v == '') {
			return '';
		}
		return _v;
	},
	getUrlVarSetDefault : function(name, defaultValue) {
		var _v = $.getUrlVar(name);
		if (_v === '') {
			_v = defaultValue;
		}
		return _v;
	}
});