function f(a,b){function d(){}d.prototype=b.prototype;a.prototype=new d;a.prototype.constructor=a;for(var c in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,c);e&&Object.defineProperty(a,c,e)}else a[c]=b[c]};self.log=self.log||{j:null,c:null,l:null};function g(a){AMP.BaseElement.call(this,a)}f(g,AMP.BaseElement);AMP.h("amp-audio","0.1",function(a){a.registerElement("amp-audio",g)});
