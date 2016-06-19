// https://github.com/Cherry-Pie/wo
window.wo = (function() {
    'use strict';

    var wo = 
    {
        template: null,
        data: [],
        
        fetch: function(template, data)
        {
            this.template = this.template || document.getElementById(template);
            data = data || {};
            
            var html = this.template.text;
            
            return html.replace(/(~([^~]+)~)/g, function(match, contents, offset, s) {
                var res = null;
                offset.split('.').forEach(function(item) {
                    var tmp = (res === null) ? data : res;
                    res = typeof tmp[item] === 'undefined' ? false : tmp[item];
                });
                
                return res || match;
            });
        }, // end fetch
        
        each: function(data)
        {
            this.data = data || [];
            
            return this;
        }, // end each
        
        render: function(template, data)
        {
            var self = this;
            
            this.template = this.template || document.getElementById(template);
            this.data = data || this.data;
            if (!Array.isArray(this.data)) {
                this.data = [this.data];
            }
            
            if (!this.data.length) {
                this.data.push('');
            }
            var html = '';
            this.data.forEach(function(item) {
                html += self.fetch(template, item);
            });
            
            var into = this.template.getAttribute('into');
            if (into) {
                return document.getElementById(into).innerHTML = html;
            }
            return html;
        }, // end render
        
    };
     
    return wo;
}());
