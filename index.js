(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,0,160,600],[0,815,79,113],[0,602,160,211]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.skyscrapertable = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.wideskyscraperstuffing = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.wideskyscraperturkeyplate = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.wideskyscraperstuffing_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wideskyscraperstuffing();
	this.instance.parent = this;
	this.instance.setTransform(-39.5,-56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.wideskyscraperstuffing_1, new cjs.Rectangle(-39.5,-56.5,79,113), null);


(lib.whiterectanglefade = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgQFAy9MAAAhl5MAgLAAAMAAABl5g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.whiterectanglefade, new cjs.Rectangle(-103,-326,206.1,652.2), null);


(lib.tastingevent = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPA4QgHgCgGgFQgFgEgEgHQgEgHAAgIQAAgIADgEQACgEADgDIAFgEQACgDAAgDIgBgDIgDgFIgDgGIgBgIQAAgHADgFQADgGAFgEQAFgEAHgCQAFgCAGAAQAHAAAGACQAGACAFAEQAFAEADAGQADAFAAAHQAAAFgBAEIgEAGIgDAEIgBAEQAAAAAAABQAAAAABABQAAAAAAABQABAAAAABIAGAEIAFAIQADAFAAAHQAAAIgEAHQgDAHgGAEQgGAFgHACQgIADgIAAQgHAAgIgDgAgHAFQgEABgDADQgDACgCADQgBAEAAAEQAAAFABADIAFAGIAHAEIAHABIAIgBIAHgEIAFgGQACgDAAgFQAAgEgCgEQgCgDgDgCQgDgDgEgBIgIgBIgHABgAgFgpIgFADIgDAFQgCADAAAEQAAADACACIADAGIAFADIAFACQAEAAACgCIAFgDIADgGQABgCABgDQgBgEgBgDIgDgFIgFgDQgCgCgEAAIgFACg");
	this.shape.setTransform(19.9,174.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAdA6IgDgBIgDgBIgBgBIgUgfIgCgDIgFgBIgOAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABgBAAQAAAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIAAAcQAAABAAAAQAAAAAAABQgBAAAAAAQAAABAAAAIgFABIgEABIgEAAQgDgBgCgBQgCgBAAgEIABhnQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBIADgBIAvAAQAKABAGACQAIADAGAFQAFAFADAHQADAHAAAJQAAAKgDAFQgFAFgDAEIgIAGQgEADAAACIAAADIAFAGIAGAJIAGAJIADAFQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAIgDADIgEABIgFABgAgXgkQAAABgBAAQAAABgBAAQAAABAAAAQAAABAAABIAAAaQAAAAAAABQAAABAAAAQABABAAAAQABABAAAAQACABAEAAIAWAAIAIgBQAEAAADgDQADgCABgEQADgEAAgEQAAgJgHgFQgDgCgEgCQgEgBgEAAIgWAAQgEAAgCABg");
	this.shape_1.setTransform(4.7,174.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLA6IgMgEIgKgFIgJgHQgIgIgFgLIgEgLIgBgMIABgLIAEgLQAFgLAIgIIAJgHIAKgGIAMgDIALgBIAMABIAMADQALAFAIAIQAIAIAFALQAFAKAAAMQAAAGgCAGIgDALQgFALgIAIQgIAIgLAEIgMAEQgGABgGAAIgLgBgAgOgjQgHADgFAFQgGAFgDAIQgDAGAAAIQAAAIADAHQADAIAGAEQAFAGAHADQAHADAHAAQAHAAAHgDQAHgDAGgGQAFgEADgIQAEgHAAgIQAAgIgEgGQgDgIgFgFQgGgFgHgDQgHgDgHAAQgHAAgHADg");
	this.shape_2.setTransform(-8.2,174.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AghA6IgEAAQgFAAgCgFIAAhoQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABgBABAAIBMAAIADABIACAEIAAADIAAADIAAAGIgFADIg4AAQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQAAABAAAAQgBAAAAABIAAAOQAAABABAAQAAABAAAAQAAABAAAAQABABAAAAIAEABIAkAAQABAAAAABQAAAAABAAQAAAAAAAAQABABAAAAIACAEIAAAEIAAADIgBAEQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgkAAIgBABIgCACIgCABIgBACIAAAoQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAIgEACg");
	this.shape_3.setTransform(-18.8,174.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZA2QgMgEgIgJIgCgCIAAgCIABgEIADgEIAFgDIAEgBQACAAADACIAHAFIAJAFQAGACAHAAIAJgBQAEAAAEgCQAFgCACgDQACgEABgFQAAgEgDgDQgEgDgEgBIgNgDIgMgBIgNgDIgMgEQgFgEgDgGQgDgFAAgJQAAgJAEgGQAFgHAHgEQAHgEAHgCQAJgCAGAAIALABIAMACIALAFQAFADAEADIABACIAAACIgBAEIgEAEIgEACIgFABIgDAAQgGgFgGgDQgIgDgHAAIgHAAIgIADIgGAFQgCADgBAEQABAGAFADQAGADAHABIARACQAJACAIADQAJADAFAFQAGAGgBAMQABAKgFAHQgEAHgIAFQgHAEgJADQgJACgHAAQgNAAgMgFg");
	this.shape_4.setTransform(50.8,148.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AglA5IgEgBQgBgBAAAAQgBgBAAAAQAAAAAAgBQAAAAgBgBIAAhnQABgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBIAEgBIBOAAIADACIABAEIABAEIAAAEIgBADIgEADIg6AAIgDADIgCACIAAAQQAAABABAAQAAABAAAAQAAABAAAAQABAAAAAAQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAIAlAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAIACAFIAAAEIAAADQAAAEgEABIgkAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAAAABQgBAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAIAAARQAAABABABQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAIA5AAQAEACAAAEIAAAEIAAAEIgBAEQgBAAAAABQAAAAgBAAQAAAAAAAAQgBABAAAAg");
	this.shape_5.setTransform(40.5,148.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgvA5IgEgBQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAhmQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABgBABAAIApAAIALABIAMAEQALAEAIAHQAJAIAEAKQADAFABAGQABAGAAAFQAAANgFAKIgFAKIgIAIIgJAHIgKAEQgLAFgMAAgAgeghQgBAAAAAAQAAABgBAAQAAABAAABQAAAAAAABIAAA9QAAABAAAAQAAAAAAABQABAAAAABQAAAAABAAIAEACIAUAAQAIAAAHgDQAHgDAFgEQAGgFADgHQADgGAAgJQAAgIgDgGQgDgHgGgEQgFgGgHgCQgHgDgIAAIgUAAQAAAAgBABQgBAAAAAAQgBAAAAABQgBAAAAABg");
	this.shape_6.setTransform(28.4,148.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgDA6QgEAAgCgDIAAhtIACgDIAFgBIACAAIAFAAQAEABABADIAABsIgCADIgEABIgEAAg");
	this.shape_7.setTransform(19,148.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgZA2QgMgEgJgJIgBgCIAAgCIABgEIADgEIAFgDIADgBQADAAADACIAHAFIAKAFQAFACAHAAIAIgBQAFAAAEgCQAEgCADgDQADgEgBgFQAAgEgCgDQgDgDgFgBIgMgDIgNgBIgNgDIgMgEQgFgEgDgGQgDgFAAgJQAAgJAEgGQAFgHAHgEQAGgEAIgCQAJgCAGAAIALABIAMACIALAFQAFADAEADIABACIAAACIgBAEIgEAEIgFACIgDABIgEAAQgGgFgGgDQgIgDgHAAIgHAAIgIADIgGAFQgDADAAAEQAAAGAGADQAFADAJABIAQACQAKACAHADQAJADAFAFQAGAGAAAMQAAAKgFAHQgFAHgHAFQgHAEgJADQgJACgHAAQgMAAgNgFg");
	this.shape_8.setTransform(11,148.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgXA5QgJgCgGgFQgFgEgEgHQgDgHAAgIQAAgIACgHQAEgGAHgDIACgDIAAgCIgCgEIgCgEIgDgGIgBgIQAAgIADgFQADgGAFgEQAGgEAGgCQAHgCAHAAQAHAAAGADQAIACAFAFQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAIgBAEIgCADIgEACIgDABQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAIgEgDIgDgDQgDgBgEAAIgHABIgFADIgEAFQgCACABAEQAAAHACADQAEAEAEABIAIABIAEABQABABAAAAQABAAAAABQAAAAAAABQAAAAAAABIAAAEIgBAEQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAIgJABQgFAAgEADQgDACgDAEQgCADAAAGQAAAFACAEQACADAEADQADACAEABIAJABQAHAAAFgDQAGgEADgGQADgGABgHIABgOIABgCIAAgDIADgFQADgCAEAAIARAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAIABAEQAAABAAABQAAABAAAAQAAABAAAAQgBAAAAAAIgCABIgFAAIgDACIgBADIgBACQAAALgEAJQgCAKgHAGQgFAHgJAEQgIAEgLAAQgIAAgHgCg");
	this.shape_9.setTransform(-4.8,148.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAhA7QgCAAgCgDIguhAQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBgBAAAAIgDACQgBAAAAABQAAAAAAAAQgBABAAAAQAAAAAAABIAAA5QgBAEgDABIgFABIgHgBQgDAAgCgFIAAhqQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABgBIADgBIAEAAIADgBQAFAAADAEIAuA9IADABIACgBIABgCIAAg5QAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABgBIADgBIAEAAIAEAAQAFAAACAFIAABrQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAg");
	this.shape_10.setTransform(-21.8,148.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgDA6QgFAAgCgDIAAhtIAEgDIADgBIADAAIAFAAQAEABACADIAABsIgDADIgEABIgEAAg");
	this.shape_11.setTransform(-30.2,148.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAsA5IgCAAIgHAAQgCgBgCgDIgGgPIgCgDIgEgBIglAAIgBABIgCABIgCABIgBABIgGAPIgCACIgDABIgDABIgEAAIgDAAIgDAAIgDgCQAAAAgBAAQAAAAAAAAQAAgBAAAAQgBAAAAgBIAvhqQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABAAIADgBIAFAAQADABAAACIAtBqIAAABQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAAAIgEABgAAAgRIgBACIgCADIgCAFIgDAHIgCAFIgCAFIgCACIACADIACABIAVAAIADgBIABgCIgCgFIgEgJIgDgJIgDgGIgDgBg");
	this.shape_12.setTransform(-38.2,148.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAmA5IgFgBQgDgBAAgDIAAg0IgBgBIgDgBQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAABIgSAcQgCADgDABIgDgCIgDgCIgQgcQAAgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAABIgBABIAAAzQgCADgDABIgHABIgDgBIgDgBIgCgBIgBgDIAAhmQABgDADgBIAHAAIAEABIADABIAbAuQACADADAAIADgBIACgCIAbgtQADgEAGAAIAFABQAAAAABAAQAAAAABAAQAAABAAAAQABABAAAAIAABpIgBACIgDACIgEABg");
	this.shape_13.setTransform(-50,148.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.4,138.7,116.8,46.1);


(lib.skyscrapertableatasteof = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.skyscrapertable();
	this.instance.parent = this;
	this.instance.setTransform(-80,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.skyscrapertableatasteof, new cjs.Rectangle(-80,-300,160,600), null);


(lib.ordernow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAYAyIgYhPIAAAAIgXBPIgPAAIgdhiIAPAAIAWBNIAAAAIAXhNIAPAAIAXBNIAAAAIAWhNIAPAAIgdBig");
	this.shape.setTransform(37.1,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKAzIgKgDQgKgDgGgIQgIgGgDgKQgFgJAAgMQAAgLAFgJQADgKAIgHQAGgGAKgEIAKgDIAKgBQALAAAKAEIAJAEIAHAGQAIAHADAKQAFAJAAALQAAAMgFAJQgDAKgIAGIgHAHIgJAEQgKAEgLAAIgKgBgAgPgkQgGADgFAGQgFAFgDAHQgDAIABAHQgBAIADAIQADAGAFAGQAFAFAGADQAIADAHABQAIgBAIgDQAHgDAFgFQAEgGADgGQADgIgBgIQABgHgDgIQgDgHgEgFQgFgGgHgDQgIgDgIAAQgHAAgIADg");
	this.shape_1.setTransform(24.3,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAZAyIg0hQIAABQIgOAAIAAhiIASAAIAzBNIAAhNIAOAAIAABig");
	this.shape_2.setTransform(12.9,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AATAyIgZgsIgOAAIAAAsIgOAAIAAhiIAgAAQAGAAAGABQAHABAEADQAFAEADAFQADAGAAAHQAAAKgHAIQgDADgFABIgJADIAbAugAgUgFIAQAAIAIgBIAHgDQADgCACgCQACgDAAgFQAAgEgCgDIgFgGQgDgBgEgBIgHgBIgRAAg");
	this.shape_3.setTransform(0.2,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AggAyIAAhiIA/AAIAAALIgxAAIAAAeIAuAAIAAALIguAAIAAAhIAzAAIAAANg");
	this.shape_4.setTransform(-8.5,0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgrAyIAAhiIAiAAQAJAAAJACQAKADAIAGQAHAGAFAKIAEAKIABALIgBAMIgEAKIgFAJIgHAGQgIAHgKACQgLAEgHAAgAgdAlIASAAQAIAAAHgCQAIgDAFgFQAGgEADgHIACgIIABgIIgBgIIgCgIQgDgGgGgFQgFgFgIgCQgHgCgIgBIgSAAg");
	this.shape_5.setTransform(-18,0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AATAyIgZgsIgOAAIAAAsIgOAAIAAhiIAgAAQAGAAAGABQAHABAEADQAFAEADAFQADAGAAAHQAAAKgHAIQgDADgFABIgJADIAbAugAgUgFIAQAAIAIgBIAHgDQADgCACgCQACgDAAgFQAAgEgCgDIgFgGQgDgBgEgBIgHgBIgRAAg");
	this.shape_6.setTransform(-27.4,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgKAzIgKgDQgKgDgGgIQgHgGgFgKQgDgJAAgMQAAgLADgJQAFgKAHgHQAGgGAKgEIAKgDIAKgBQALAAAKAEIAJAEIAIAGQAGAHAEAKQAEAJABALQgBAMgEAJQgEAKgGAGIgIAHIgJAEQgKAEgLAAIgKgBgAgPgkQgHADgEAGQgFAFgDAHQgCAIAAAHQAAAIACAIQADAGAFAGQAEAFAHADQAIADAHABQAJgBAGgDQAHgDAGgFQAEgGADgGQACgIABgIQgBgHgCgIQgDgHgEgFQgGgGgHgDQgGgDgJAAQgHAAgIADg");
	this.shape_7.setTransform(-38,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ordernow, new cjs.Rectangle(-46,-10.6,92.1,21.2), null);


(lib.mainbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006F46").s().p("EgQFAzRMAAAhmhMAgLAAAMAAABmhg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.greyrectangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("EgL3guZIXvAAMAAABc0I3vAAg");
	this.shape.setTransform(0,0,1.046,1.008);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.greyrectangle, new cjs.Rectangle(-80.5,-300.5,161,601), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AqNYMQktiAjpjoQjpjph/ktQiEk4AAlWQAAlVCEk4QB/ktDpjpQDpjpEth/QE4iEFVAAQFWAAE4CEQEtB/DpDpQDoDpCAEtQCEE4AAFVQAAFWiEE4QiAEtjoDpQjpDoktCAQk4CElWAAQlVAAk4iEg");
	this.shape.setTransform(168,168);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,336,336), null);


(lib.ctarollovervideo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B63100").s().p("AphBlIAAjJITDAAIAADJg");
	this.shape.setTransform(0,0,1.099,1.677);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctarollovervideo, new cjs.Rectangle(-67,-16.9,134.1,34), null);


(lib.ctarectangleorange = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D63900").s().p("AqdCqIAAlTIU7AAIAAFTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctarectangleorange, new cjs.Rectangle(-67,-17,134.1,34), null);


(lib.classicturkeydinnerplate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wideskyscraperturkeyplate();
	this.instance.parent = this;
	this.instance.setTransform(-80,-105.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.classicturkeydinnerplate, new cjs.Rectangle(-80,-105.5,160,211), null);


(lib.classicturkeydinner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag2BaQgJgDAAgIQAAgHAJgCIAFgCQAFgDABgGQACgGAAgOIAAgMIAAgOIAAgMQAAgggCgKQgBgKgEgDIgIgCQgLgEAAgGQAAgFADgDQAEgCAHgEIAZgIIAQgDQAJABACAYIABADIABABQAJgOAKgIQAKgHALgBQAMABAIAHQAHAIAAAMQAAANgGAHQgFAHgLAAIgJgBIgHgGIgFgHQgBgFgCAAQgNAAgFASQgEARAAA2QAAAQABAIQACAIAFACIAIADQALACgBAIQABAHgKADQgLADgYAAQgbAAgJgDg");
	this.shape.setTransform(50.6,43);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag6BEQgagaAAgnQAAgqAagbQAbgbAoAAQAjAAAVAUQAUATAAAiQAAALgDAEQgEADgNAAIhFAAQgGAAgDgCQgDgDAAgFQAAgFADgDQADgCAGAAIAlAAIAJgCQADgBAAgEQAAgSgMgLQgMgMgQAAQgWAAgKATQgKASAAAbQAAAbAOAVQAOAUAXAAQANAAAJgCQAJgDAJgHIAHgFQAJgHAFAAQAEAAACADQADACAAAEQAAAEgFAHQgEAGgIAGQgQANgOAGQgPAFgRAAQgmAAgZgag");
	this.shape_1.setTransform(33.7,43.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAYBaQgIgDgBgHQAAgHAJgDIAHgDQAFgCABgIQACgIAAgUQAAg4gHgPQgIgPgTAAQgJAAgIAGQgKAGgEAJQgEAJgBAOQgCANAAAjQAAASACAGQABAGADACIAHADQAKADgBAHQAAAHgIADQgJADgYAAQgbAAgJgDQgKgDAAgIQABgHAIgCIAGgCQAEgDACgGQACgGAAgOIAAgMIAAgOIAAgSQgBgdgBgJQgBgIgEgDIgJgCQgLgEABgGQAAgEADgDQADgDAIgEIAagIIATgDQAFAAACACQACAEABAFIAAANIAAABIABABIABAAIABgBIAEgEIAEgEQATgRAXgBQAMABAMAFQAMAGAJAJQAIAKAEAOQADANAAAeIAAAXIAAAMIAAALQAAANABAFQADAFAEADIAFACQAIACABAHQAAAHgJADQgIADgcABQgaAAgIgDg");
	this.shape_2.setTransform(13.3,43);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAYBaQgJgDABgHQAAgHAJgDIAGgDQAEgCACgIQACgIAAgUQAAg4gIgPQgHgPgTAAQgJAAgJAGQgIAGgFAJQgEAJgCAOQgBANAAAjQAAASABAGQACAGAEACIAHADQAIADABAHQAAAHgJADQgJADgYAAQgbAAgJgDQgJgDAAgIQgBgHAKgCIAEgCQAFgDACgGQACgGAAgOIgBgMIAAgOIAAgSQAAgdgBgJQgCgIgDgDIgIgCQgMgEAAgGQAAgEAEgDQAEgDAHgEIAagIIATgDQAFAAADACQABAEAAAFIAAANIABABIABABIABAAIAAgBIAFgEIADgEQAUgRAWgBQANABANAFQAMAGAIAJQAIAKADAOQAEANAAAeIAAAXIAAAMIAAALQAAANACAFQACAFAEADIAEACQAKACgBAHQAAAHgIADQgIADgcABQgZAAgJgDg");
	this.shape_3.setTransform(-8.2,43);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfCCQgKgDAAgIQAAgHAJgDIAGgCQAEgCACgHQACgFAAgPIgBgLIAAgPIAAgTQAAgdgBgHQgCgJgDgCIgIgDQgLgDAAgHQAAgDADgDQAEgEAHgDIAbgJIASgDQAFAAADADQACAEAAAIIAAALIgBAIIgBAtIAAACIgBAsQABARABAHQACAHAEACIAHAEQAIACABAIQAAAHgJADQgJACgYAAQgbAAgIgCgAgWhbQgHgFAAgLQAAgJAIgIQAJgHAMAAQALAAAIAGQAHAHABAKQAAAKgJAHQgJAHgLAAQgMAAgIgHg");
	this.shape_4.setTransform(-24.2,39.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgnCCIgWAAIgPAAIgQAAQgWAAgGgDQgIgCAAgIQAAgGAKgEQAKgFABgCQADgEACgbIABhFIgBhDQgCgcgDgDQgBgDgKgEQgKgDAAgIQAAgHAIgDQAIgDAVAAIAQAAIASABIAZgBIAUgBQBDAAAlAjQAlAjAAA/QAAA/gmAhQgmAghHAAgAgnhmQgIACgCAGQgDAHgBAVIgCA4IACBEQABAcADAGQABAFAMAEQANAEAQAAQApAAAVgZQAVgZAAgzQgBg1gXgcQgYgcgsAAQgPAAgIADg");
	this.shape_5.setTransform(-43.3,39.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhTB3QgIgHAAgMQAAgIAGgHQAGgGAJAAIAIABIAGAEIAFAGQAEAIAEAAQAJAAAKgNQAJgNAAgPQAAgQgNgcIgCgFIgcg+IgRgkQgDgGgLgEIAAAAQgGgDgCgDQgDgCAAgEQAAgIAKgDQAKgDAaAAQAaAAAJADQAJACAAAIIgBAFIgDAEIgHADQgHADAAADIAEANIAOAkIAPAjQAEAIADABQACAAAEgJIAMgcIANgkQAEgNAAgFQAAgGgKgFQgKgFAAgGQAAgFAIgEQAIgCAVAAQAWAAAHADQAIACAAAIQAAAGgKADIgIADQgKAGgMAeIgFAOIgXA6QgeBKgSAYQgTAWgbAAQgNAAgJgIg");
	this.shape_6.setTransform(49.2,7.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag6BEQgagaAAgnQAAgqAagbQAbgbAoAAQAjAAAVAUQAUATAAAiQAAALgDAEQgEADgNAAIhFAAQgGAAgDgCQgDgDAAgFQAAgFADgDQADgCAGAAIAlAAIAJgCQADgBAAgEQAAgSgMgLQgMgMgQAAQgWAAgKATQgKASAAAbQAAAbAOAVQAOAUAXAAQANAAAJgCQAJgDAJgHIAHgFQAJgHAFAAQAEAAACADQADACAAAEQAAAEgFAHQgEAGgIAGQgQANgOAGQgPAFgRAAQgmAAgZgag");
	this.shape_7.setTransform(30.5,4.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA7CEIgIgBQgHgDgRgWIgIgKIgEgEQgrg5gEAAQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAIgBAIIAAAIIACAmQABALACADIAKAFQAJADgBAHQAAAHgJADQgIADgYAAQgcAAgIgDQgJgDAAgIQAAgGAJgDIAEgCQAFgDACgJQACgJAAgVIAAgWIgBgcIAAgWIgBhDQAAgRgDgDQgCgCgJgCIgFgCIgHgDIgCgGQAAgEAEgDQAEgDAMgFIAZgGIATgDQAEAAADAEQACADAAAIIgBAjIgBAvIAAAtIABAJQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAAAIAIgEIANgLIARgRQAFgFAAgDQAAgCgHgDQgFgEgBgFQAAgIAJgEQAKgDAZAAQARAAAIADQAJAEgBAHQABAIgNAEQgOADgFADQgHAEgQAPIgCADIgHAGIgBAEQgBADARAVIACADIAeAlQANAPAIAGQAEADALADQAMAEAAAHQAAAIgIAEQgIADgUAAg");
	this.shape_8.setTransform(11.5,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag2BaQgJgDAAgIQAAgGAJgDIAEgDQAGgCABgGQACgGAAgOIAAgMIAAgPIAAgLQAAgggCgKQgBgKgEgCIgIgDQgLgEAAgGQAAgEADgDQAEgEAHgDIAZgIIAQgCQAJgBADAZIAAAEIABAAQAJgOAKgIQALgIAKABQAMgBAIAIQAHAIAAAMQAAANgGAHQgFAHgLAAIgJgBIgHgGIgEgHQgCgFgDAAQgMAAgFASQgEARAAA2QAAAQABAIQADAIAEACIAIADQALADgBAHQABAHgKADQgLADgYgBQgbABgJgDg");
	this.shape_9.setTransform(-5.8,4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAnBbQgCgCAAgGIAAgNIAAgBIgBAAQgCAAgFAEIgCADQgJAJgLAEQgKAEgNABQgOgBgLgEQgMgFgIgKQgJgKgDgPQgEgOAAgmIAAgNIAAgNIAAgEQAAgOgCgFQgCgEgHgCIgHgDQgKgCAAgHQAAgEAEgDQADgDANgEIAZgHIATgCQAFgBACAEQACAEAAAHIAAAHIgCBFQAAAjAIAOQAHAOATABQAUAAAJgTQAJgSAAgrIAAgOQAAgOgCgFQgCgEgHgCIgHgDQgKgCAAgHQAAgEAEgDQADgDANgEIAYgHIATgCQAFAAADACQACAEAAAIIgBAKIgCBLIABAeIABAMQABAIAJADIAEABQAKAEAAAGQAAADgDAEQgDADgIADIgaAIQgNAEgGAAQgFAAgDgEg");
	this.shape_10.setTransform(-24.1,4.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AglCBQgLgDAAgIQAAgIAKgDQAKgEACgDQACgDABgeIABhVIAAgvIgCgdQgBgFgDgCQgDgBgHAAIgIAAQgNAAgGADQgHADgFAHIgGAMIgFAMIgGAGQgDACgDAAQgGAAgCgFQgDgFAAgLQAAgYAGgOQAGgPAIAAIACAAQAPADAWAAIBpAAQAWAAAPgDIACAAQAJAAAFAPQAGAOAAAYQAAALgDAFQgCAFgGAAIgGgCIgFgGIgGgMIgGgMQgEgHgIgDQgHgDgMAAIgIAAQgHAAgDABQgDACgBAFIgBAdIgBAvIABBVQABAeACADQACADAKAEQAKADAAAIQAAAIgLADQgKADgcAAQgbAAgKgDg");
	this.shape_11.setTransform(-46.5,0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag5BEQgagaAAgnQABgpAbgcQAbgbAoAAQAeAAAUAPQAWAQAAAUQgBAJgGAFQgFAFgKAAQgIAAgGgEQgGgEgGgPQgGgNgHgFQgHgFgLAAQgUAAgMAPQgLAQAAAcQAAAfARAUQAQAVAZAAQAJAAAJgDQAIgCAGgFIAIgFQAJgIAGAAQADAAACADQACACABAEQAAAEgEAGQgEAHgGAFQgOAMgPAGQgQAGgSAAQglAAgagag");
	this.shape_12.setTransform(48.1,-34.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgfCBQgKgDABgHQAAgHAJgDIAEgCQAFgDACgFQACgHAAgOIgBgMIAAgOIAAgTQAAgdgBgHQgCgJgDgCIgJgDQgKgEgBgFQABgFADgCQAEgEAHgDIAcgJIASgDQAEAAADADQACADAAAJIAAALIAAAIIgCAtIAAACIAAAsQAAARABAHQABAHAEADIAHADQAKACgBAHQAAAIgIACQgJADgXAAQgbAAgJgDgAgVhaQgIgGAAgKQAAgKAJgIQAIgHAMAAQALAAAHAHQAJAGgBAKQAAAKgIAHQgJAHgLAAQgMAAgHgGg");
	this.shape_13.setTransform(33.5,-38.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgNBeIgTgDIgGADIgFABIgEgBIgEgCQgGgFgFgPQgFgPAAgNQAAgFADgEQADgFAFAAQAIAAAJAPIAHALQAFAHAJAEQAKAFAJAAQAMgBAHgGQAHgFAAgLQAAgPgdgOIgKgGQgdgOgKgLQgKgLAAgSQAAgXARgPQAQgPAaAAIAMABIANACIAJgDIAFgBQAJAAAJAOQAIAOAAAQQAAAGgDAEQgDAEgFAAQgEgBgEgDQgEgDgFgJQgHgLgHgFQgIgEgKAAQgJAAgHAGQgGAGAAAJQAAAJAGAGQAHAHAWALIACABQAyAYAAAdQAAAZgTARQgUARgdAAg");
	this.shape_14.setTransform(20.5,-34.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgNBeIgTgDIgGADIgFABIgEgBIgEgCQgGgFgFgPQgFgPAAgNQAAgFADgEQADgFAFAAQAIAAAJAPIAHALQAFAHAJAEQAKAFAJAAQAMgBAHgGQAHgFAAgLQAAgPgdgOIgKgGQgdgOgKgLQgKgLAAgSQAAgXARgPQAQgPAaAAIAMABIANACIAJgDIAFgBQAJAAAJAOQAIAOAAAQQAAAGgDAEQgDAEgFAAQgEgBgEgDQgEgDgFgJQgHgLgHgFQgIgEgKAAQgJAAgHAGQgGAGAAAJQAAAJAGAGQAHAHAWALIACABQAyAYAAAdQAAAZgTARQgUARgdAAg");
	this.shape_15.setTransform(4.8,-34.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAgBVIgJgKIgIAFQgWAOgWAAQgbAAgQgPQgRgQAAgYQAAgeAWgPQAUgQAmAAQAJAAAFADQAEACAAAIQAAAJgMABQgSAAgKAIQgMAJAAAPQAAAOAKAJQAKAJAPAAQARAAAIgIQAHgIAAgTIAAhEQAAgQgHgIQgGgJgNAAQgJAAgHAEQgHAEgIAIIgEAEQgLAPgMAAQgHAAgEgFQgFgFABgHQAAgRAUgMQAWgMAgAAQAUABAOAFQAPAFAHAKQAGAHACALQADALAAAaIAAA5QAAALABAFQACAFADABIAGACQALACAAAHQABAIgMAIQgNAGgQAAQgIAAgJgJg");
	this.shape_16.setTransform(-12.3,-34.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgeCCQgJgDAAgIQAAgFAIgEIAJgFQADgDACgLIABgkIAAgcIgBghIAAgOQAAgugBgNQgCgNgDgCIgMgEQgLgDAAgHQAAgEAEgDQADgDANgFIAYgGIASgDQAFAAADAEQACADAAAIIAAAOQgCBBAABBIABA9QABANADAEIAKAFQAIADAAAHQAAAHgJADQgJADgXAAQgbAAgJgDg");
	this.shape_17.setTransform(-27.6,-39);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgbB+QgZgJgSgQQgVgTgLgbQgLgbAAgfQAAgZAIgWQAHgWAOgRQASgWAagLQAZgMAdAAIAWACIAjAHIAEgBIAOgDIAGACIAFAFQAFAKAFAOQADANAAALQAAAIgCAEQgEADgFAAQgIAAgOgQIgMgNQgJgKgPgFQgOgFgRAAQgiAAgVAYQgUAYgBAqQAAA1AaAiQAaAjAnAAQAQAAAPgFQAOgGAIgJIAJgKQAIgKAGAAQAFAAADAFQACAEAAAJQAAARgEAJQgGAKgIAAIgBAAIgDgBQgRAJgQAFQgRAEgTAAQgaAAgYgJg");
	this.shape_18.setTransform(-44.6,-38.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.classicturkeydinner, new cjs.Rectangle(-60.2,-62.5,120.5,125), null);


(lib.whitelogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(0,0,0.189,0.189);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAaQgKgLAAgPQAAgOAKgKQAKgLAOABQAPgBAKALQAKAKAAAOQAAAPgKALQgKAJgPABQgOgBgKgJgAAWAYIgPgVQANgBAAgNQAAgPgRAAIgTAAIAAAyIAJAAIAAgVIAFAAIAOAVIAKAAg");
	this.shape_1.setTransform(24.6,11.2,0.189,0.189);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgrAiQgFAAgEgDQgEgDAAgFIAAgtQAAgLANAAIA+AAQARAAAKAJQALAJAAAPQAAAQgLAJQgKAJgRAAg");
	this.shape_2.setTransform(-2.1,16,0.189,0.189);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJAHIAAgNIAIAAQALAAAAAGQAAAHgNAAg");
	this.shape_3.setTransform(24.6,10.9,0.189,0.189);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhvCsQgog9AAhtQAAhtAog/QAog/BHAAQBGAAAoA/QAqBAAABqQAABrgpBAQgpA/hFAAQhIAAgog+g");
	this.shape_4.setTransform(-9.2,5.7,0.189,0.189);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYAfQgIAAADgIIAZgyQABgDADAAQADAAACADIAZAzQABADgCACQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAg");
	this.shape_5.setTransform(-8.4,16.6,0.189,0.189);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtDtQgngDgNgHQgVgLAAghIAAljQAAghAKgMQAKgLAcgFIAdgDQBLAAAqA/QArA/AABvQAABxgrA/QgqA8hGAAIgJAAg");
	this.shape_6.setTransform(12.2,5.7,0.189,0.189);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhvCsQgog9AAhtQAAhtAog/QApg/BGAAQBFAAAqA/QApBAAABqQAABrgpBAQgpA/hGAAQhGAAgpg+g");
	this.shape_7.setTransform(1.3,5.7,0.189,0.189);

	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.189,0.189,0,0,0,168.1,168.1);
	this.instance.alpha = 0.551;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-33,66,66);


(lib.darkctarollover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(12).call(this.frame_23).wait(7));

	// Layer 1
	this.instance = new lib.ctarollovervideo();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},9).wait(2).to({alpha:0},10).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67,-16.9,134.1,34);


// stage content:
(lib.wideskyscraperclassicturkeymealnoprice = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_54 = function() {
		//onhover event to reveal green cta rectangle over orange rectangle
		
		console.log("this frame works");
		this.btn_main.addEventListener("mouseover", fl_MouseOverHandler.bind(this));
		this.btn_main.addEventListener("mouseout", fl_MouseOutHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			this.cta_rollover.gotoAndPlay(2);
		}
		
		function fl_MouseOutHandler()
		{
		this.cta_rollover.gotoAndPlay(13);
		}
	}
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(54).call(this.frame_54).wait(45).call(this.frame_99).wait(6));

	// button
	this.btn_main = new lib.mainbutton();
	this.btn_main.parent = this;
	this.btn_main.setTransform(82.2,302,0.797,0.919,0,0,0,0.1,0.4);
	new cjs.ButtonHelper(this.btn_main, 0, 1, 2, false, new lib.mainbutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_main).wait(105));

	// grey-rectangle
	this.instance = new lib.greyrectangle();
	this.instance.parent = this;
	this.instance.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(105));

	// fade-from-white
	this.instance_1 = new lib.whiterectanglefade();
	this.instance_1.parent = this;
	this.instance_1.setTransform(91,300.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},9).wait(96));

	// white-logo
	this.instance_2 = new lib.whitelogo("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(80,37);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({scaleX:0.06,scaleY:0.06},0).to({scaleX:1.53,scaleY:1.53,alpha:1},6,cjs.Ease.get(1)).to({scaleX:1.42,scaleY:1.42,y:36.9},7,cjs.Ease.get(1)).wait(83));

	// classic-turkey-dinner
	this.instance_3 = new lib.classicturkeydinner();
	this.instance_3.parent = this;
	this.instance_3.setTransform(80,191.6);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(28).to({alpha:1},10).wait(67));

	// dinner-sides-for-eight
	this.instance_4 = new lib.tastingevent("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(80,163.5);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(41).to({y:131.5},0).to({alpha:1},10).wait(54));

	// order-now
	this.instance_5 = new lib.ordernow();
	this.instance_5.parent = this;
	this.instance_5.setTransform(80,363.1);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(54).to({alpha:1},10).wait(41));

	// cta-rollover
	this.cta_rollover = new lib.darkctarollover();
	this.cta_rollover.parent = this;
	this.cta_rollover.setTransform(80.1,363.2);

	this.timeline.addTween(cjs.Tween.get(this.cta_rollover).wait(54).to({alpha:0},0).to({alpha:1},10).wait(41));

	// cta-rectangle
	this.instance_6 = new lib.ctarectangleorange();
	this.instance_6.parent = this;
	this.instance_6.setTransform(80,363.1);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(54).to({alpha:1},10).wait(41));

	// stuffing
	this.instance_7 = new lib.wideskyscraperstuffing_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(39.5,56.5);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(67).to({alpha:1},10).wait(28));

	// turkey
	this.instance_8 = new lib.classicturkeydinnerplate();
	this.instance_8.parent = this;
	this.instance_8.setTransform(80,494.5);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(80).to({alpha:1},10).wait(15));

	// table
	this.instance_9 = new lib.skyscrapertableatasteof();
	this.instance_9.parent = this;
	this.instance_9.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(105));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(68,274,206.1,652.2);
// library properties:
lib.properties = {
	id: '85088BD5353243C8B4895C262600CED3',
	width: 160,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/index_atlas_.png", id:"index_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['85088BD5353243C8B4895C262600CED3'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;