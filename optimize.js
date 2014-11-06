"use strict";

/**
 * Optimize.js
 * 
 * @name: Optimize.js
 * @version: 1.0.0
 * @description: Optimize.js is a Javascript Library for optimizing images and backgrounds.
 * @author: Mark Topper
 * @email: mail@webman.io
 * @twitter: webmanio
 * @website: https://github.com/marktopper/Optimize.js
 *
 **/

var optimize = {
    
    // the core functionality
    core: {
        
        // placeholder for the configuration
        config: {},
        
        defaults: {
            // runs on
            onReady: true,
            onResize: true,
            
            // elements
            images: $('img'),
            backgrounds: $('.optimize-background'),
            
            // turn-off
            turnoffClass: 'no-optimize',
            turnoffSizesClass: 'no-optimize-sizes',
            turnoffRetinaClass: 'no-optimize-retina',
            
            // debug
            debug: false,
            
            // run methods
            runSizes: false,
            runRetina: true,
            
            // run elements
            runImages: true,
            runBackgrounds: true,
            
            // perform ajax check
            ajaxCheck: true,
            
            // ordering
            methodOrder: ['sizes', 'retina'],
            elementsOrder: ['images', 'backgrounds'],
            
            // sizes
            sizes: [],
            imageSizes: [],
            backgroundSizes: [],
            
            // retina
            retina: [2],
            imageRetina: [],
            backgroundRetina: [],
            
            // html tags
            sizesAttr: 'optimize-sizes',
            imageSizesAttr: 'optimize-images-sizes',
            backgroundSizesAttr: 'optimize-background-sizes',
            retinaAttr: 'optimize-retina',
            imageRetinaAttr: 'optimize-images-retina',
            backgroundRetinaAttr: 'optimize-background-retina',
            
            // cache
            cache: true,
            
            // preload
            preload: true,
        },
        
        __call: function(method){
        	if (arguments.length === 0) return;
        	var args = [];
        	Array.prototype.push.apply( args, arguments );
        	args.shift();
        	
        	var run = optimize.core.__before.apply(this, arguments);
        	if (run === false) return;
	        var call = optimize.core[method];
	        
	        if (typeof call != 'function') {
		        console.log('METHOD "' + method + '" NOT FOUND!');
	        };
	        
	        call = call.apply(this, args);
	        
	        optimize.core.__after.apply(this, arguments);
	        
	        return call;
        },
        
        __before: function(method){
        	if (arguments.length === 0) return;
        	var args = [];
        	Array.prototype.push.apply( args, arguments );
        	args.shift();
        	
        	if (typeof optimize.core['__before' + optimize.core.__capitaliseFirstLetter(method)] == 'function'){
        		optimize.core.__debug('__before' + optimize.core.__capitaliseFirstLetter(method) + ' called with the following arguments:', args);
        		if (optimize.core['__before' + optimize.core.__capitaliseFirstLetter(method)].apply(this, args) === false){
        			optimize.core.__debug('__before' + optimize.core.__capitaliseFirstLetter(method) + ' returns:', false);
        			return false;
        		}
        		optimize.core.__debug('before' + optimize.core.__capitaliseFirstLetter(method) + ' returns:', undefined);
        	}
        	
        	if (typeof optimize.core.config['before' + optimize.core.__capitaliseFirstLetter(method)] == 'function'){
        		optimize.core.__debug('before' + optimize.core.__capitaliseFirstLetter(method) + ' called with the following arguments:', args);
        		var returned = optimize.core.config['before' + optimize.core.__capitaliseFirstLetter(method)].apply(this, args);
        		optimize.core.__debug('before' + optimize.core.__capitaliseFirstLetter(method) + ' returned: ', returned);
        		return returned;
        	}
        },
        
        __after: function(method){
        	if (arguments.length === 0) return;
        	var args = [];
        	Array.prototype.push.apply( args, arguments );
        	args.shift();
        	
        	if (typeof optimize.core['__after' + optimize.core.__capitaliseFirstLetter(method)] == 'function'){
        		optimize.core.__debug('__after' + optimize.core.__capitaliseFirstLetter(method) + ' called with the following arguments:', args);
        		optimize.core['__after' + optimize.core.__capitaliseFirstLetter(method)].apply(this, args);
        	}
        	
        	if (typeof optimize.core.config['after' + optimize.core.__capitaliseFirstLetter(method)] == 'function'){
        		optimize.core.__debug('after' + optimize.core.__capitaliseFirstLetter(method) + ' called with the following arguments:', args);
        		optimize.core.config['after' + optimize.core.__capitaliseFirstLetter(method)].apply(this, args);
        	}
        },
        
        __debug: function(){
        	if (arguments.length === -1) return;
        	
	        if (optimize.core.__config['debug'])
	        	console.log(arguments);
        },
        
        __config: function(name){
        	optimize.core.__debug('config called with the following arguments:', [name]);
        	optimize.core.__debug('config returns:', (typeof optimize.core.config[name] != 'undefined' ? optimize.core.config[name] : optimize.core.defaults[name]));
	        if (typeof optimize.core.config[name] != 'undefined')
	        	return optimize.core.config[name];
	        else
	        	return optimize.core.defaults[name];
        },
    
	init: function(obj){
		if (typeof obj == 'object')
		    optimize.core.config = obj;
		
		$(document).ready(function(){
			optimize.core.__call('onReady');
		});
		$(window).resize(function(){
			optimize.core.__call('onResize');
		});
	},
        
        __beforeOnReady: function(){
	        return optimize.core.__config('onReady');
        },
        
        onReady: function(){
	        optimize.core.__call('run');
        },
        
        __beforeOnResize: function(){
	        return optimize.core.__config('onResize');
        },
        
        onResize: function(){
	        optimize.core.__call('run');
        },
        
        run: function(){
			optimize.core.__call('nextElement');
        },
        
        __beforeRunImages: function(){
	        var run = optimize.core.__config('runImages');
	        
	        if (!run)
	        	optimize.core.__call('nextElement', 'image');
	        
	        return run;
        },
        
        runImages: function(){
	        optimize.core.__config('images').each(function(i){
                optimize.core.__call('runImage', this);
            });
        },
        
        __afterRunImages: function(){
            optimize.core.__call('nextElement', 'image');
        },
        
        __beforeRunBackgrounds: function(){
	        var run = optimize.core.__config('runBackgrounds');
	        
	        if (!run)
	        	optimize.core.__call('nextElement', 'background');
	        
	        return run;
        },
        
        runBackgrounds: function(){
	        optimize.core.__config('backgrounds').each(function(i){
                optimize.core.__call('runBackground', this);
            });
        },
        
        __afterRunBackgrounds: function(){
            optimize.core.__call('nextElement', 'background');
        },
        
        __beforeRunImage: function(element){
	        var run = optimize.core.__config('runImages');
	        
	        if ($(element).hasClass(optimize.core.__config('turnoffClass')))
	        	run = false;
	        
	        var src = $(element).attr('src');
	        if (typeof src == 'undefined')
	        	run = false;
	        
	        return run;
        },
        
        runImage: function(element){
        	optimize.core.__call('nextMethod', element, 'image');
        },
        
        __beforeRunBackground: function(element){
	        var run = optimize.core.__config('runBackgrounds');
	        
	        if ($(element).hasClass(optimize.core.__config('turnoffClass')))
	        	run = false;
	        
	        var src = $(element).css('background-image');
            src = src.replace('url(','').replace(')','');
	        if (typeof src == 'undefined')
	        	run = false;
	        
	        return run;
        },
        
        runBackground: function(element){
        	optimize.core.__call('nextMethod', element, 'background');
        },
        
        nextMethod: function(element, type, method){
        	method = (typeof method == 'undefined' ? null : method);
	        if (method == null){
	        	var order = optimize.core.__config('methodOrder');
	        	optimize.core.__call('run' + optimize.core.__capitaliseFirstLetter(order[0]), element, type);
	        }
	        else
	        {
	        	var order = optimize.core.__config('methodOrder');
		        var key = null;
		        jQuery.each(order, function(i){
			        if (order[i] == method)
			        	key = i;
		        });
		        
		        if (key != null && typeof order[key + 1] != 'undefined')
		        	optimize.core.__call('run' + optimize.core.__capitaliseFirstLetter(order[key + 1]), element, type);
	        }
        },
        
        nextElement: function(type){
        	type = (typeof type == 'undefined' ? null : type + 's');
        	
	        if (type == null){
	        	var order = optimize.core.__config('elementsOrder');
	        	optimize.core.__call('run' + optimize.core.__capitaliseFirstLetter(order[0]));
	        }
	        else
	        {
	        	var order = optimize.core.__config('elementsOrder');
		        var key = null;
		        jQuery.each(order, function(i){
			        if (order[i] == type)
			        	key = i;
		        });
		        
		        if (key != null && typeof order[key + 1] != 'undefined')
		        	optimize.core.__call('run' + optimize.core.__capitaliseFirstLetter(order[key + 1]));
	        }
        },
        
        __beforeRunSizes: function(element, type){
	        var run = optimize.core.__config('runSizes');
	        
	        if ($(element).hasClass(optimize.core.__config('turnoffSizesClass')))
	        	run = false;
	        
	        if (!run)
	        	optimize.core.__call('nextMethod', element, type, 'sizes');
	        
	        return run;
        },
        
        runSizes: function(element, type){
        	optimize.core.__call('setDefaultSource', element, type, 'sizes');
        	var src = optimize.core.__call('getSource', element, type, 'sizes');
        	
        	var size = optimize.core.__call('getSize', element, type);
        	if (size == null)
        		src = null;
        	
        	if (src != null && size != optimize.core.__call('getDefaultSize', element, type))
        		var src = optimize.core.__call('addTag', src, '.width-' + size);
        	
        	optimize.core.__call('exists', element, src, function(){
	        	optimize.core.__call('preloadSource', element, type, src);
	        	optimize.core.__call('sourceExists', element, type, src);
        	}, 'sizes', type);
        },
        
        getDefaultSize: function(element, type){
        	var size = null;
        	
	        var attr = $(element).attr('optimize-default-size');
	        if (typeof attr != 'undefined')
	        	size = attr;
        	
	        var attr = $(element).attr('optimize-default-' + type + '-size');
	        if (typeof attr != 'undefined')
	        	size = attr;
	        
	        return size;
        },
        
        getRetina: function(element, type){
	        var retina = optimize.core.__config('retina');
	        
	        var typeRetina = optimize.core.__config(type + 'Retina');
	        if (typeRetina && typeRetina.length > 0)
	        	retina = optimize.core.__config(type + 'Retina');
	        
	        var retinaAttr = $(element).attr(optimize.core.__config('retinaAttr'));
	        if (typeof retinaAttr != 'undefined')
	        	retina = retinaAttr.split(',');
	        
	        var retinaAttr = $(element).attr(optimize.core.__config(type + 'RetinaAttr'));
	        if (typeof retinaAttr != 'undefined')
	        	retina = retinaAttr.split(',');
        	
        	var clientRetina = optimize.core.__call('getClientRetina');
        	
        	if (jQuery.inArray(clientRetina, retina) !== -1)
        		return clientRetina;
        	
	        return null;
        },
        
        getClientRetina: function(){
	        if (window.devicePixelRatio > 1)
                return window.devicePixelRatio;
            return null;
        },
        
        getSize: function(element, type){
	        var sizes = optimize.core.__config('sizes');
	        
	        if (optimize.core.__config(type + 'Sizes'))
	        	sizes = optimize.core.__config(type + 'Sizes');
	        
	        var sizesAttr = $(element).attr(optimize.core.__config('sizesAttr'));
	        if (typeof sizesAttr != 'undefined')
	        	sizes = sizesAttr.split(',');
	        
	        var sizesAttr = $(element).attr(optimize.core.__config(type + 'SizesAttr'));
	        if (typeof sizesAttr != 'undefined')
	        	sizes = sizesAttr.split(',');
	        
	        if (typeof sizes[0] != 'undefined')
	        	return optimize.core.__call('findClosest', $(element).width(), sizes).toString();
			return null;
        },
        
        findClosest: function(goal, numbers){
            var closest = null;
            
            $.each(numbers, function(){
              if (closest == null || Math.abs(this - goal) < Math.abs(closest - goal))
                closest = this;
            });
            
            return closest;
        },
        
        addTag: function(src, tag){
		    var type = src.substr(src.lastIndexOf('.') + 1);
		    var name = src.substr(0, (src.length - (1 + type.length)));
		    return name + tag + '.' + type;
        },
        
        preloadSource: function(element, type, src){
        	if (optimize.core.__config('preload')){
	        	var img = $("<img />").attr('src', src).load(function() {
			        if (!this.complete || typeof this.naturalWidth == "undefined" || this.naturalWidth == 0)
			            console.log('BROKEN IMAGE!');
			        else
			            optimize.core.__call('setSource', element, type, src);
			    });
			}
			else
				optimize.core.__call('setSource', element, type, src);
        },
        
        setSource: function(element, type, src){$(element).attr('optimize-' + type + '-source', src);
	        if (type == 'image')
	        	$(element).attr('src', src);
	        else if (type == 'background')
	        	$(element).css('background-image', 'url(' + src + ')');
		},
        
        exists: function(element, src, success, method, type){
        	if (src == null || src == optimize.core.getSource(element, type, method)){
        		optimize.core.__call('nextMethod', element, type, method);
        		return;
        	}
	        if (optimize.core.__config('ajaxCheck')){
	        	if (optimize.core.__config('cache')){
	        		var cache = optimize.core.__call('getCache', src);
		        	if (cache !== false){
			        	if (cache == 'success')
			        		eval(success());
			        	optimize.core.__call('nextMethod', element, type, method);
			        	return;
		        	}
	        	}
	        	
	        	$.ajax({
	                url: src,
	                type: 'HEAD',
	                complete: function(request){
	                	if (optimize.core.__config('cache')){
		                    if (request.statusText == 'error' || request.statusText == 'Not Found')
		                        optimize.core.__call('setCache', src, 'error');
		                    else if (request.statusText == 'success' || request.statusText == 'OK')
		                        optimize.core.__call('setCache', src, 'success');
		                    else{
		                        console.log('UNKNOWN STATUSTEXT: ' + request.statusText);
		                        optimize.core.__call('setCache', src, 'error');
		                    }
		                }
	                    
		                optimize.core.__call('nextMethod', element, type, method);
	                },
	                success: success
	            });
	        }
	        else{
	        	eval(success());
				optimize.core.__call('nextMethod', element, type, method);
	        }
        },
        
        sourceExists: function(element, type, src){
	        $(element).attr('optimize-' + type + '-source', src);
        },
        
        cache: {
	        success: [],
	        error: []
        },
        
        getCache: function(src){
	        var success = jQuery.inArray(src, optimize.core.cache.success);
	        var error = jQuery.inArray(src, optimize.core.cache.error);
	        
	        if (success >= 0)
	        	return 'success';
	        if (error >= 0)
	        	return 'error';
	        return false;
        },
        
        setCache: function(src, status){
	        if (optimize.core.__call('getCache', src) !== false)
	        	return;
	        
	        if (status == 'success')
	        	optimize.core.cache.success.push(src);
	        else
	        	optimize.core.cache.error.push(src);
        },
        
        __beforeSetDefaultSource: function(element, type, method){
	        var defaultSource = $(element).attr('optimize-default-' + type + '-source');
	        var source = $(element).attr('src');
	        if (type == 'background'){
		        source = $(element).css('background-image');
	        }
	        if (typeof defaultSource != 'undefined' || typeof source == 'undefined')
	        	return false;
        },
        
        setDefaultSource: function(element, type, method){
        	if (type == 'image')
	        	$(element).attr('optimize-default-' + type + '-source', $(element).attr('src'));
        	else if (type == 'background'){
        		var bg = $(element).css('background-image');
                bg = bg.replace('url(','').replace(')','');
	        	$(element).attr('optimize-default-' + type + '-source', bg);
	        }
        },
        
        __beforeGetSource: function(element, type, method){
        	var attr = $(element).attr('optimize-' + type + '-source');
        	var order = optimize.core.__config('methodOrder');
        	if (typeof attr == 'undefined' || order[0] == method)
        		$(element).attr('optimize-' + type + '-source', $(element).attr('optimize-default-' + type + '-source'));
        },
        
        getSource: function(element, type, method){
	        return $(element).attr('optimize-' + type + '-source');
        },
        
        __capitaliseFirstLetter: function(string)
		{
			if (typeof string != 'string' || string == null) return string;
			var original = string;
			string = string.charAt(0);
			string = string.toUpperCase();
			string = string + original.slice(1);
		    return string;
		},
        
        __beforeRunRetina: function(element, type){
	        var run = optimize.core.__config('runRetina');
	        
	        if ($(element).hasClass(optimize.core.__config('turnoffRetinaClass')))
	        	run = false;
	        
	        if (!run)
	        	optimize.core.__call('nextMethod', element, type, 'retina');
	        
	        return run;
        },
        
        runRetina: function(element, type){
        	optimize.core.__call('setDefaultSource', element, type, 'retina');
        	var src = optimize.core.__call('getSource', element, type, 'retina');
        	
        	var size = optimize.core.__call('getRetina', element, type);
        	if (size == null)
        		src = null;
        	
        	if (src != null)
        		var src = optimize.core.__call('addTag', src, '@' + size + 'x');
        	
        	optimize.core.__call('exists', element, src, function(){
	        	optimize.core.__call('preloadSource', element, type, src);
	        	optimize.core.__call('sourceExists', element, type, src);
        	}, 'retina', type);
        },
    
    },
    
    init: function(obj){
        optimize.core.__call('init', obj);
    },
    
    run: function(){
        optimize.core.__call('run');
    }
    
};
