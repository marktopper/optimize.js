Optimize.js
===========

Optimize.js is a Javascript Library for optimizing image and videos resolutions. Supports Retina.

# Fast looktrought
- [Basic Usage](#basic-usage)
- [Settings](#settings)
- [Events](#events)
- [Changelog](#changelog)
- [License](#license)

# Basic Usage

Since it depends on jQuery, you need to include the jQuery JS file first.    
```
<script type="text/javascript" src="path/to/jquery.js"></script>
```

Then you can go include Optimize.js.    
```
<script type="text/javascript" src="path/to/optimize.js"></script>
```

Then we need to initialize it.    
```
optimize.init();
```

And your good to go.

# Settings

Settings can be set into the `init`-method as a object.    
```
var settings = {
  cache: true,
  images: $('img')
};
optimize.init(settings)
```

## Possible settings

Name | Description
| --- | ---
**[onReady](#onready)** | Determind if this should run on DOM ready.
**[onResize](#onresize)** | Determind if this should run on resizing window.
**[images](#images)** | The images this script should be running on.
**[backgrounds](#backgrounds)** | The backgrounds this script should be running on.
**[turnoffClass](#turnoffclass)** | If a element has this class, the script will not run on that element.
**[turnoffSizesClass](#turnoffsizesclass)** | If a element has this class, the script will not optimize the sizes.
**[turnoffRetinaClass](#turnoffretinaclass)** | If a element has this class, the script will not optimize the retina.
**[debug](#debug)** | Turn on or off the debug informations in the console.
**[runSizes](#runsizes)** | Determind if the script should optimize the sizes.
**[runRetina](#runretina)** | Determind if the script should optimize the retina.
**[runImages](#runimages)** | Determind if the script should run on images.
**[runBackgrounds](#runbackgrounds)** | Determind if the script should run on background images.
**[ajaxCheck](#ajaxcheck)** | Determind if the script check if the file exists before setting it.
**[methodOrder](#methodorder)** | Choose the order of methods this script runs for each element.
**[elementsOrder](#elementsorder)** | Choose the order of elements that this script runs on.
**[sizes](#sizes)** | Set in the default sizes for both images and background images.
**[imageSizes](#imagesizes)** | Set in the default sizes for images.
**[backgroundSizes](#backgroundsizes)** | Set in the default sizes for background images.
**[retina](#retina)** | Set in the default retina solutions.
**[imageRetina](#imageretina)** | Set in the default retina solutions for images.
**[backgroundRetina](#backgroundretina)** | Set in the default retina solutions for background images.
**[sizesAttr](#sizesattr)** | Set the html attribute name you want to set custom sizes.
**[imageSizesAttr](#imagesizesattr)** | Set the html attribute name you want to set custom sizes for images.
**[backgroundSizesAttr](#backgroundsizesattr)** | Set the html attribute name you want to set custom sizes for background images.
**[retinaAttr](#retinaattr)** | Set the html attribute name you want to set custom retina solutions.
**[imageRetinaAttr](#imageretinaattr)** | Set the html attribute name you want to set custom retina solutions for images.
**[backgroundRetinaAttr](#backgroundretinaattr)** | Set the html attribute name you want to set custom retina solutions for background images.
**[cache](#cache)** | Choose if the script should cache the [ajaxCheck](#ajaxcheck)'s.
**[preload](#preload)** | Choose if images should be preloaded into the DOM before set.

### Setting Details 

#### onReady

> Description: Determind if this should run on DOM ready.    
> Default: `true`    
> Type: `boolean`  
> Options: `true` or `false`    

#### onResize

> Description: Determind if this should run on resizing window.     
> Default: `false`     
> Type: `boolean`   
> Options: `true` or `false`       

#### images

> Description: The images this script should be running on.    
> Default: `$('img')`    
> Type: `object`    
> Options: `object`    

#### backgrounds

> Description: The backgrounds this script should be running on.    
> Default: `$('.optimize-background')`    
> Type: `object`    
> Options: `object`    

#### turnoffClass

> Description: If a element has this class, the script will not run on that element.    
> Default: `'no-optimize'`    
> Type: `string`    
> Options: `string`    

#### turnoffSizesClass

> Description: If a element has this class, the script will not optimize the sizes.    
> Default: `'no-optimize-sizes'`    
> Type: `string`    
> Options: `string`    

#### turnoffRetinaClass

> Description: If a element has this class, the script will not optimize the retina.    
> Default: `'no-optimize-retina'`    
> Type: `string`    
> Options: `string`    

#### debug

> Description: Turn on or off the debug informations in the console.    
> Default: `false`    
> Type: `boolean`    
> Options: `true` or `false`    

#### runSizes

> Description: Determind if the script should optimize the sizes.    
> Default: `false`    
> Type: `boolean`    
> Options: `true` or `false`    

#### runRetina

> Description: Determind if the script should optimize the retina.    
> Default: `true`    
> Type: `boolean`    
> Options: `true` or `false`    

#### runImages

> Description: Determind if the script should run on images.    
> Default: `true`    
> Type: `boolean`    
> Options: `true` or `false`    

#### runBackgrounds

> Description: Determind if the script should run on background images.    
> Default: `true`    
> Type: `boolean`    
> Options: `true` or `false`    

#### ajaxCheck

> Description: Determind if the script check if the file exists before setting it.    
> Default: `true`    
> Type: `boolean`    
> Options: `true` or `false`    

#### methodOrder

> Description: Choose the order of methods this script runs for each element.    
> Default: `['sizes', 'retina']`    
> Type: `array`    
> Options: `sizes` (starts [runSize](#runSize)) and `retina` (starts [runRetina](#runRetina))    

#### elementsOrder

> Description: Choose the order of elements that this script runs on.    
> Default: `['images', 'backgrounds']`    
> Type: `array`    
> Options: `images` (starts [runImages](#runImages)) and `backgrounds` (starts [runBackgrounds](#runBackgrounds))    

#### sizes

> Description: Set in the default sizes for both images and background images.    
> Default: `[]`    
> Type: `array`    
> Options: `array of numbers` (Determind the width of sizes)    

#### imageSizes

> Description: Set in the default sizes for images.    
> Default: `[]`    
> Type: `array`    
> Options: `array of numbers` (Determind the width of sizes)    

#### backgroundSizes

> Description: Set in the default sizes for background images.    
> Default: `[]`    
> Type: `array`    
> Options: `array of numbers` (Determind the width of sizes)    

#### retina

> Description: Set in the default retina solutions.    
> Default: `[2]`    
> Type: `array`    
> Options: `array of numbers` (Determind the retina solutions)    

#### imageRetina

> Description: Set in the default retina solutions for images.    
> Default: `[]`    
> Type: `array`    
> Options: `array of numbers` (Determind the retina solutions)    

#### backgroundRetina

> Description: Set in the default retina solutions for background images.    
> Default: `[]`    
> Type: `array`    
> Options: `array of numbers` (Determind the retina solutions)    

#### sizesAttr

> Description: Set the html attribute name you want to set custom sizes.    
> Default: `optimize-sizes`    
> Type: `string`    
> Options: `string`    

#### imageSizesAttr

> Description: Set the html attribute name you want to set custom sizes for images.    
> Default: `optimize-images-sizes`    
> Type: `string`    
> Options: `string`    

#### backgroundSizesAttr

> Description: Set the html attribute name you want to set custom sizes for background images.    
> Default: `optimize-background-sizes`    
> Type: `string`    
> Options: `string`    

#### retinaAttr

> Description: Set the html attribute name you want to set custom retina solutions.    
> Default: `optimize-retina`    
> Type: `string`    
> Options: `string`    

#### imageRetinaAttr

> Description: Set the html attribute name you want to set custom retina solutions for images.    
> Default: `optimize-images-retina`    
> Type: `string`    
> Options: `string`    

#### imageRetinaAttr

> Description: Set the html attribute name you want to set custom retina solutions for background images.    
> Default: `optimize-backgrounds-retina`    
> Type: `string`    
> Options: `string`    

#### cache

> Description: Choose if the script should cache the [ajaxCheck](#ajaxcheck)'s.    
> Default: `true`    
> Type: `boolean`    
> Options: `true` or `false`    

#### preload

> Description: Choose if images should be preloaded into the DOM before set.    
> Default: `true`    
> Type: `boolean`    
> Options: `true` or `false`    

# Events

Events can be added to the `settings` into the `init`-method as a object.    
```
var settings = {
  cache: true,
  beforeRunImage: function(element, type){
    return false;
  }
};
optimize.init(settings)
```

On each event there is a `before`- and `after` event.

The `before` event can cancel the actual method from running by returning `false`.

The `after` event will get a extra argument with the return from the main method.

### Possible events

Method | Description
| --- | ---
**[init](#init-events)** | Description comming soon.
**[onReady](#onready-events)** | Description comming soon.
**[onResize](#onresize-events)** | Description comming soon.
**[run](#run-events)** | Description comming soon.
**[runImages](#runimages-events)** | Description comming soon.
**[runBackgrounds](#runbackgrounds-events)** | Description comming soon.
**[runImage](#runimage-events)** | Description comming soon.
**[runBackground](#runbackground-events)** | Description comming soon.
**[nextMethod](#nextmethod-events)** | Description comming soon.
**[nextElement](#nextelement-events)** | Description comming soon.
**[runSizes](#runsizes-events)** | Description comming soon.
**[getDefaultSize](#getdefaultsize-events)** | Description comming soon.
**[getRetina](#getretina-events)** | Description comming soon.
**[getClientRetina](#getclientretina-events)** | Description comming soon.
**[getSize](#getsize-events)** | Description comming soon.
**[findClosest](#findclosest-events)** | Description comming soon.
**[addTag](#addtag-events)** | Description comming soon.
**[preloadSource](#preloadsource-events)** | Description comming soon.
**[setSource](#setsource-events)** | Description comming soon.
**[exists](#exists-events)** | Description comming soon.
**[sourceExists](#sourceexists-events)** | Description comming soon.
**[getCache](#getcache-events)** | Description comming soon.
**[setCache](#setcache-events)** | Description comming soon.
**[setDefaultSource](#setdefaultsource-events)** | Description comming soon.
**[getSource](#getsource-events)** | Description comming soon.
**[runRetina](#runretina-events)** | Description comming soon.

### Event Details

#### init events

###### beforeInit
> Description: Description comming soon.    
> Default: `null`    

###### afterInit
> Description: Description comming soon.    
> Default: `null`    
>    
> afterInit(response)    
>> response    
>>> type: mixed    
>>> something: yeah    

# Changelog

### version 1.0.0
- Initial release

# License

The MIT License (MIT)

Copyright (c) 2014 Mark Topper

Permission is hereby granted, free of charge, to any person obtaining a copy    
of this software and associated documentation files (the "Software"), to deal    
in the Software without restriction, including without limitation the rights    
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell    
copies of the Software, and to permit persons to whom the Software is    
furnished to do so, subject to the following conditions:    

The above copyright notice and this permission notice shall be included in all    
copies or substantial portions of the Software.    

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR    
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,    
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE    
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER    
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,    
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE    
SOFTWARE.    
