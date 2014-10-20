var NULL_CHUNK = 0x0000;
var M3DMAGIC = 0x4D4D;    /*3DS file*/
var SMAGIC = 0x2D2D;
var LMAGIC = 0x2D3D;
var MLIBMAGIC = 0x3DAA;    /*MLI file*/
var MATMAGIC = 0x3DFF;
var CMAGIC = 0xC23D;    /*PRJ file*/
var M3D_VERSION = 0x0002;
var M3D_KFVERSION = 0x0005;
var COLOR_F = 0x0010;
var COLOR_24 = 0x0011;
var LIN_COLOR_24 = 0x0012;
var LIN_COLOR_F = 0x0013;
var INT_PERCENTAGE = 0x0030;
var FLOAT_PERCENTAGE = 0x0031;
var MDATA = 0x3D3D;
var MESH_VERSION = 0x3D3E;
var MASTER_SCALE = 0x0100;
var LO_SHADOW_BIAS = 0x1400;
var HI_SHADOW_BIAS = 0x1410;
var SHADOW_MAP_SIZE = 0x1420;
var SHADOW_SAMPLES = 0x1430;
var SHADOW_RANGE = 0x1440;
var SHADOW_FILTER = 0x1450;
var RAY_BIAS = 0x1460;
var O_CONSTS = 0x1500;
var AMBIENT_LIGHT = 0x2100;
var BIT_MAP = 0x1100;
var SOLID_BGND = 0x1200;
var V_GRADIENT = 0x1300;
var USE_BIT_MAP = 0x1101;
var USE_SOLID_BGND = 0x1201;
var USE_V_GRADIENT = 0x1301;
var FOG = 0x2200;
var FOG_BGND = 0x2210;
var LAYER_FOG = 0x2302;
var DISTANCE_CUE = 0x2300;
var DCUE_BGND = 0x2310;
var USE_FOG = 0x2201;
var USE_LAYER_FOG = 0x2303;
var USE_DISTANCE_CUE = 0x2301;
var MAT_ENTRY = 0xAFFF;
var MAT_NAME = 0xA000;
var MAT_AMBIENT = 0xA010;
var MAT_DIFFUSE = 0xA020;
var MAT_SPECULAR = 0xA030;
var MAT_SHININESS = 0xA040;
var MAT_SHIN2PCT = 0xA041;
var MAT_TRANSPARENCY = 0xA050;
var MAT_XPFALL = 0xA052;
var MAT_USE_XPFALL = 0xA240;
var MAT_REFBLUR = 0xA053;
var MAT_SHADING = 0xA100;
var MAT_USE_REFBLUR = 0xA250;
var MAT_SELF_ILLUM = 0xA084;
var MAT_TWO_SIDE = 0xA081;
var MAT_DECAL = 0xA082;
var MAT_ADDITIVE = 0xA083;
var MAT_WIRE = 0xA085;
var MAT_FACEMAP = 0xA088;
var MAT_TRANSFALLOFF_IN = 0xA08A;
var MAT_PHONGSOFT = 0xA08C;
var MAT_WIREABS = 0xA08E;
var MAT_WIRE_SIZE = 0xA087;
var MAT_TEXMAP = 0xA200;
var MAT_SXP_TEXT_DATA = 0xA320;
var MAT_TEXMASK = 0xA33E;
var MAT_SXP_TEXTMASK_DATA = 0xA32A;
var MAT_TEX2MAP = 0xA33A;
var MAT_SXP_TEXT2_DATA = 0xA321;
var MAT_TEX2MASK = 0xA340;
var MAT_SXP_TEXT2MASK_DATA = 0xA32C;
var MAT_OPACMAP = 0xA210;
var MAT_SXP_OPAC_DATA = 0xA322;
var MAT_OPACMASK = 0xA342;
var MAT_SXP_OPACMASK_DATA = 0xA32E;
var MAT_BUMPMAP = 0xA230;
var MAT_SXP_BUMP_DATA = 0xA324;
var MAT_BUMPMASK = 0xA344;
var MAT_SXP_BUMPMASK_DATA = 0xA330;
var MAT_SPECMAP = 0xA204;
var MAT_SXP_SPEC_DATA = 0xA325;
var MAT_SPECMASK = 0xA348;
var MAT_SXP_SPECMASK_DATA = 0xA332;
var MAT_SHINMAP = 0xA33C;
var MAT_SXP_SHIN_DATA = 0xA326;
var MAT_SHINMASK = 0xA346;
var MAT_SXP_SHINMASK_DATA = 0xA334;
var MAT_SELFIMAP = 0xA33D;
var MAT_SXP_SELFI_DATA = 0xA328;
var MAT_SELFIMASK = 0xA34A;
var MAT_SXP_SELFIMASK_DATA = 0xA336;
var MAT_REFLMAP = 0xA220;
var MAT_REFLMASK = 0xA34C;
var MAT_SXP_REFLMASK_DATA = 0xA338;
var MAT_ACUBIC = 0xA310;
var MAT_MAPNAME = 0xA300;
var MAT_MAP_TILING = 0xA351;
var MAT_MAP_TEXBLUR = 0xA353;
var MAT_MAP_USCALE = 0xA354;
var MAT_MAP_VSCALE = 0xA356;
var MAT_MAP_UOFFSET = 0xA358;
var MAT_MAP_VOFFSET = 0xA35A;
var MAT_MAP_ANG = 0xA35C;
var MAT_MAP_COL1 = 0xA360;
var MAT_MAP_COL2 = 0xA362;
var MAT_MAP_RCOL = 0xA364;
var MAT_MAP_GCOL = 0xA366;
var MAT_MAP_BCOL = 0xA368;
var NAMED_OBJECT = 0x4000;
var N_DIRECT_LIGHT = 0x4600;
var DL_OFF = 0x4620;
var DL_OUTER_RANGE = 0x465A;
var DL_INNER_RANGE = 0x4659;
var DL_MULTIPLIER = 0x465B;
var DL_EXCLUDE = 0x4654;
var DL_ATTENUATE = 0x4625;
var DL_SPOTLIGHT = 0x4610;
var DL_SPOT_ROLL = 0x4656;
var DL_SHADOWED = 0x4630;
var DL_LOCAL_SHADOW2 = 0x4641;
var DL_SEE_CONE = 0x4650;
var DL_SPOT_RECTANGULAR = 0x4651;
var DL_SPOT_ASPECT = 0x4657;
var DL_SPOT_PROJECTOR = 0x4653;
var DL_SPOT_OVERSHOOT = 0x4652;
var DL_RAY_BIAS = 0x4658;
var DL_RAYSHAD = 0x4627;
var N_CAMERA = 0x4700;
var CAM_SEE_CONE = 0x4710;
var CAM_RANGES = 0x4720;
var OBJ_HIDDEN = 0x4010;
var OBJ_VIS_LOFTER = 0x4011;
var OBJ_DOESNT_CAST = 0x4012;
var OBJ_DONT_RECVSHADOW = 0x4017;
var OBJ_MATTE = 0x4013;
var OBJ_FAST = 0x4014;
var OBJ_PROCEDURAL = 0x4015;
var OBJ_FROZEN = 0x4016;
var N_TRI_OBJECT = 0x4100;
var POINT_ARRAY = 0x4110;
var POINT_FLAG_ARRAY = 0x4111;
var FACE_ARRAY = 0x4120;
var MSH_MAT_GROUP = 0x4130;
var SMOOTH_GROUP = 0x4150;
var MSH_BOXMAP = 0x4190;
var TEX_VERTS = 0x4140;
var MESH_MATRIX = 0x4160;
var MESH_COLOR = 0x4165;
var MESH_TEXTURE_INFO = 0x4170;
var KFDATA = 0xB000;
var KFHDR = 0xB00A;
var KFSEG = 0xB008;
var KFCURTIME = 0xB009;
var AMBIENT_NODE_TAG = 0xB001;
var OBJECT_NODE_TAG = 0xB002;
var CAMERA_NODE_TAG = 0xB003;
var TARGET_NODE_TAG = 0xB004;
var LIGHT_NODE_TAG = 0xB005;
var L_TARGET_NODE_TAG = 0xB006;
var SPOTLIGHT_NODE_TAG = 0xB007;
var NODE_ID = 0xB030;
var NODE_HDR = 0xB010;
var PIVOT = 0xB013;
var INSTANCE_NAME = 0xB011;
var MORPH_SMOOTH = 0xB015;
var BOUNDBOX = 0xB014;
var POS_TRACK_TAG = 0xB020;
var COL_TRACK_TAG = 0xB025;
var ROT_TRACK_TAG = 0xB021;
var SCL_TRACK_TAG = 0xB022;
var MORPH_TRACK_TAG = 0xB026;
var FOV_TRACK_TAG = 0xB023;
var ROLL_TRACK_TAG = 0xB024;
var HOT_TRACK_TAG = 0xB027;
var FALL_TRACK_TAG = 0xB028;
var HIDE_TRACK_TAG = 0xB029;
var POLY_2D = 0x5000;
var SHAPE_OK = 0x5010;
var SHAPE_NOT_OK = 0x5011;
var SHAPE_HOOK = 0x5020;
var PATH_3D = 0x6000;
var PATH_MATRIX = 0x6005;
var SHAPE_2D = 0x6010;
var M_SCALE = 0x6020;
var M_TWIST = 0x6030;
var M_TEETER = 0x6040;
var M_FIT = 0x6050;
var M_BEVEL = 0x6060;
var XZ_CURVE = 0x6070;
var YZ_CURVE = 0x6080;
var INTERPCT = 0x6090;
var DEFORM_LIMIT = 0x60A0;
var USE_CONTOUR = 0x6100;
var USE_TWEEN = 0x6110;
var USE_SCALE = 0x6120;
var USE_TWIST = 0x6130;
var USE_TEETER = 0x6140;
var USE_FIT = 0x6150;
var USE_BEVEL = 0x6160;
var DEFAULT_VIEW = 0x3000;
var VIEW_TOP = 0x3010;
var VIEW_BOTTOM = 0x3020;
var VIEW_LEFT = 0x3030;
var VIEW_RIGHT = 0x3040;
var VIEW_FRONT = 0x3050;
var VIEW_BACK = 0x3060;
var VIEW_USER = 0x3070;
var VIEW_CAMERA = 0x3080;
var VIEW_WINDOW = 0x3090;
var VIEWPORT_LAYOUT_OLD = 0x7000;
var VIEWPORT_DATA_OLD = 0x7010;
var VIEWPORT_LAYOUT = 0x7001;
var VIEWPORT_DATA = 0x7011;
var VIEWPORT_DATA_3 = 0x7012;
var VIEWPORT_SIZE = 0x7020;
var NETWORK_VIEW = 0x7030;

Lib3ds = function(element, debug) {
	this.element = element;
	this.debug = debug != undefined ? debug : false;
	this.position = 0;
	this.meshes = [];
	this.materials = {};
};

with ({p:Lib3ds.prototype}) {
	p.readFile = function(fileContents) {
		this.position = 0;
		this.meshes = [];
		this.materials = {};

		var data = new jDataView(fileContents,
								 0,  // offset
								 undefined, // byte length. let the library calculate that.
								 true); // little endian
		var chunk = this.readChunk(data);
		var c = 0;

		switch (chunk.id) {
			case MLIBMAGIC:
		    case CMAGIC:
			case M3DMAGIC:
				c = this.nextChunk(data, chunk);
				while (c != 0) {
					switch (c) {
						case M3D_VERSION:
							this.mesh_version = this.readDWord(data);
							this.log("M3D_VERSION " + this.mesh_version);
							break;
						case MDATA: // Model data
							this.resetPosition(data);
							this.log("MDATA");
							this.readMDATA(data);
							break;
						case KFDATA: // Keyframe data
						default:
							this.log("Unknown chunk: " + c.toString(16));
							break;
					}
					c = this.nextChunk(data, chunk);
				}
				break;
			default:
				this.log("Unknown main chunk: " + c.toString(16));
				break;
		}
		this.log("parsed #" + this.meshes.length + " meshes!");
	}

	p.readMDATA = function(data) {
		var chunk = this.readChunk(data);
		var c = this.nextChunk(data, chunk);

		while (c != 0) {
			switch (c) {
				case MESH_VERSION:
					this.mesh_version = this.readInt(data);
					this.log("MESH_VERSION: " + this.mesh_version);
					break;
				case MASTER_SCALE:
					this.master_scale = this.readFloat(data);
					this.log("MASTER_SCALE: " + this.master_scale);
					break;
				case NAMED_OBJECT:
					this.resetPosition(data);
					this.log("NAMED OBJECT");
					this.readNamedObject(data);
					break;
				case MAT_ENTRY:
					this.resetPosition(data);
					this.log("MATERIAL ENTRY");
					this.readMaterialEntry(data);
					break;
				default:
					this.log("Unknown MDATA chunk: " + c.toString(16));
					break;
			}
			c = this.nextChunk(data, chunk);
		}
	}

	p.readMaterialEntry = function(data) {
		var chunk = this.readChunk(data);
		var c = this.nextChunk(data, chunk);

		var material = new Lib3dsMaterial();

		while (c != 0) {
			switch (c) {
				case MAT_NAME:
					material.name = this.readString(data, 64);
					this.log(" -> name: " + material.name);
					break;
				case MAT_AMBIENT:
					material.ambientColor = this.readColor(data);
					this.log(" -> ambientColor: " + material.ambientColor.toString(16));
					break;
				case MAT_DIFFUSE:
					material.diffuseColor = this.readColor(data);
					this.log(" -> diffuseColor: " + material.diffuseColor.toString(16));
					break;
				case MAT_SPECULAR:
					material.specularColor = this.readColor(data);
					this.log(" -> specularColor: " + material.specularColor.toString(16));
					break;
				case MAT_TEXMAP:
					
					var mapChunk = this.readChunk(data);
					var cm = this.nextChunk(data, mapChunk);
					while(cm != 0) {
						alert(this.readString(data, 64));
						cm = this.nextChunk(data, mapChunk);
					}
					break;
					
				default:
					this.log(" -> Unknown material chunk: " + c.toString(16));
					break;
			}
			c = this.nextChunk(data, chunk);
		}

		this.endChunk(chunk);
		this.materials[material.name] = material;
	}

	p.readColor = function(data) {
		var chunk = this.readChunk(data);

		var color = 0;
		switch (chunk.id) {
			case COLOR_24:
			case LIN_COLOR_24:
				var r = this.readByte(data);
				var g = this.readByte(data);
				var b = this.readByte(data);
				color = r << 16 | g << 8 | b;
				break;
			case COLOR_F:
			case LIN_COLOR_F:
				var r = this.readFloat(data);
				var g = this.readFloat(data);
				var b = this.readFloat(data);
				color = Math.floor(r * 255) << 16 | Math.floor(g * 255) << 8 | Math.floor(b * 255);
				break;
			default:
				this.log("Unknown color chunk: " + c.toString(16));
				break;
		}

		this.endChunk(chunk);
		return color;
	}

	p.readMesh = function(data) {
		var chunk = this.readChunk(data);
		var c = this.nextChunk(data, chunk);
		var mesh = new Lib3dsMesh();
		var i, j;

		while (c != 0) {
			switch (c) {
				case MESH_COLOR:
					mesh.color = this.readByte(data);
					this.log (" -> color: " + mesh.color);
					break;
				case POINT_ARRAY:
					mesh.points = this.readWord(data);
					mesh.pointL = [];
					this.log (" -> #points: " + mesh.points + " " + this.position);
					for (i = 0; i < mesh.points; i++) {
						var vec = [];
						for (j = 0; j < 3; j++) {
							vec.push(this.readFloat(data));
						}
						mesh.pointL.push(vec);
					}
					break;
				case FACE_ARRAY:
					this.resetPosition(data);
					this.readFaceArray(data, mesh);
					break;
				case TEX_VERTS:
					mesh.texels = this.readWord(data);
					mesh.texelL = [];
					this.log (" -> #texels: " + mesh.texels);
					for (i = 0; i < mesh.texels; i++) {
						mesh.texelL.push([this.readFloat(data), this.readFloat(data)]);
					}
					break;
				case MESH_MATRIX:
				case POINT_FLAG_ARRAY:
				case MESH_TEXTURE_INFO:
				default:
					this.log(" -> Unknown mesh chunk: " + c.toString(16));
					break;
			}
			c = this.nextChunk(data, chunk);
		}

		this.endChunk(chunk);

		return mesh;
	}

	p.readFaceArray = function(data, mesh) {
		var chunk = this.readChunk(data);
		var i, j;

		mesh.faces = this.readWord(data);
		mesh.faceL = [];

		this.log (" -> #faces: " + mesh.faces);

		for(i = 0; i < mesh.faces; ++i) {
			var face = new Lib3dsFace();

			face.points = [];
			face.points.push(this.readWord(data));
			face.points.push(this.readWord(data));
			face.points.push(this.readWord(data));

			// visibility I believe (0 or 1)
			face.flags = this.readWord(data);

			mesh.faceL.push(face);
		}

		// Thr rest of the FACE_ARRAY chunk is subchunks
		while (this.position < chunk.end) {
			var chunk = this.readChunk(data);

			switch (chunk.id) {
				case MSH_MAT_GROUP:
					this.log(" -> MATERIAL_GROUP");
					this.resetPosition(data);
					var materialGroup = this.readMaterialGroup(data);

					var faceIdxs = materialGroup.faceIdxs;
					for (i = 0; i < faceIdxs.length; i++) {
						var face = mesh.faceL[faceIdxs[i]];
						face.material = materialGroup.name;
					}
					break;
				case SMOOTH_GROUP:
				default:
					this.log(" -> Unknown face array chunk: " + c.toString(16));
					break;
			}

			this.endChunk(chunk);
		}

		this.endChunk(chunk);
	}

	p.readMaterialGroup = function(data) {
		var chunk = this.readChunk(data);

		var materialName = this.readString(data, 64);
		var numFaces = this.readWord(data);

		this.log(" --> material name: " + materialName);
		this.log(" --> num faces: " + numFaces);

		var faceIdxs = [];
		for(var i = 0; i < numFaces; ++i) {
			faceIdxs.push(this.readWord(data));
		}
		return {name: materialName, faceIdxs: faceIdxs};
	}

	p.readNamedObject = function(data) {
		var chunk = this.readChunk(data);

		var name = this.readString(data, 64);

		this.log(" -> " + name);

		chunk.cur = this.position;

		var c = this.nextChunk(data, chunk);

		while (c != 0) {
			switch (c) {
				case N_TRI_OBJECT:
					this.resetPosition(data);
					var mesh = this.readMesh(data);
					this.meshes.push(mesh);
					break;
				default:
					this.log("Unknown named object chunk: " + c.toString(16));
					break;
			}
			c = this.nextChunk(data, chunk);
		}

		this.endChunk(chunk);
	}

	p.readChunk = function(data) {
		var chunk = new Lib3dsChunk();
		chunk.cur = this.position;
		chunk.id = this.readWord(data);
		chunk.size = this.readDWord(data);
		chunk.end = chunk.cur + chunk.size;
		chunk.cur += 6;
		return chunk;
	}

	p.endChunk = function(chunk) {
		this.position = chunk.end;
	}

	p.nextChunk = function(data, chunk) {
		if (chunk.cur >= chunk.end) {
			return 0;
		}
		this.position = chunk.cur;
		try {
			var next = this.readChunk(data);
			chunk.cur += next.size;
			return next.id;
		} catch(e) {
			this.log('Unable to read chunk at ' + this.position);
			return 0;
		}
	}

	p.resetPosition = function(data, chunk) {
		this.position -= 6;
	}

	p.readByte = function(data) {
		var v = data.getUint8(this.position);
		this.position += 1;
		return v;
	}

	p.readFloat = function(data) {
		try {
			var v = data.getFloat32(this.position);
			this.position += 4;
			return v;
		} catch(e) {
			this.log("" + e + " " + this.position + " " + data.byteLength);
		}
	}

	p.readInt = function(data) {
		var v = data.getInt32(this.position);
		this.position += 4;
		return v;
	}

	p.readShort = function(data) {
		var v = data.getInt16(this.position);
		this.position += 2;
		return v;
	}

	p.readDWord = function(data) {
		var v = data.getUint32(this.position);
		this.position += 4;
		return v;
	}

	p.readWord = function(data) {
		var v = data.getUint16(this.position);
		this.position += 2;
		return v;
	}

	p.readString = function(data, maxLength) {
		var s = "";
		for(var i = 0; i < maxLength; i++) {
			var c = this.readByte(data);
			if( !c ) break;
			s += String.fromCharCode(c);
		}
		return s;
	}

	p.log = function(msg) {
		if(this.debug) {
			console.log(msg);
			if (this.element) {
				this.element.innerHTML += msg + "<br/>";
			}
		}
	}
};

Lib3dsChunk = function() {
	this.cur = 0;
	this.id = 0;
	this.size = 0;
	this.end = 0;
};

Lib3dsFace = function() {
	this.flags = 0;
	this.points = [];
	this.material = "";
};

Lib3dsMesh = function() {
	this.next = null;
	this.matrix = [1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1];
	this.name = "";
	this.color = 0;
	this.points = 0;
	this.pointL = [];
	this.flags = 0;
	this.flagL = [];
	this.texels = 0;
	this.texelL = [];
	this.faces = 0;
	this.faceL = [];
};

Lib3dsMaterial = function() {
	this.name = "";
	this.ambientColor = 0;
	this.diffuseColor = 0;
	this.spectralColor = 0;
};


//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/classes/binary-parser [rev. #1]

BinaryParser = function(bigEndian, allowExceptions){
	this.bigEndian = bigEndian, this.allowExceptions = allowExceptions;
};
with({p: BinaryParser.prototype}){
	p.encodeFloat = function(number, precisionBits, exponentBits){
		var bias = Math.pow(2, exponentBits - 1) - 1, minExp = -bias + 1, maxExp = bias, minUnnormExp = minExp - precisionBits,
		status = isNaN(n = parseFloat(number)) || n == -Infinity || n == +Infinity ? n : 0,
		exp = 0, len = 2 * bias + 1 + precisionBits + 3, bin = new Array(len),
		signal = (n = status !== 0 ? 0 : n) < 0, n = Math.abs(n), intPart = Math.floor(n), floatPart = n - intPart,
		i, lastBit, rounded, j, result;
		for(i = len; i; bin[--i] = 0);
		for(i = bias + 2; intPart && i; bin[--i] = intPart % 2, intPart = Math.floor(intPart / 2));
		for(i = bias + 1; floatPart > 0 && i; (bin[++i] = ((floatPart *= 2) >= 1) - 0) && --floatPart);
		for(i = -1; ++i < len && !bin[i];);
		if(bin[(lastBit = precisionBits - 1 + (i = (exp = bias + 1 - i) >= minExp && exp <= maxExp ? i + 1 : bias + 1 - (exp = minExp - 1))) + 1]){
			if(!(rounded = bin[lastBit]))
				for(j = lastBit + 2; !rounded && j < len; rounded = bin[j++]);
			for(j = lastBit + 1; rounded && --j >= 0; (bin[j] = !bin[j] - 0) && (rounded = 0));
		}
		for(i = i - 2 < 0 ? -1 : i - 3; ++i < len && !bin[i];);

		(exp = bias + 1 - i) >= minExp && exp <= maxExp ? ++i : exp < minExp &&
			(exp != bias + 1 - len && exp < minUnnormExp && this.warn("encodeFloat::float underflow"), i = bias + 1 - (exp = minExp - 1));
		(intPart || status !== 0) && (this.warn(intPart ? "encodeFloat::float overflow" : "encodeFloat::" + status),
			exp = maxExp + 1, i = bias + 2, status == -Infinity ? signal = 1 : isNaN(status) && (bin[i] = 1));
		for(n = Math.abs(exp + bias), j = exponentBits + 1, result = ""; --j; result = (n % 2) + result, n = n >>= 1);
		for(n = 0, j = 0, i = (result = (signal ? "1" : "0") + result + bin.slice(i, i + precisionBits).join("")).length, r = [];
			i; n += (1 << j) * result.charAt(--i), j == 7 && (r[r.length] = String.fromCharCode(n), n = 0), j = (j + 1) % 8);
		r[r.length] = n ? String.fromCharCode(n) : "";
		return (this.bigEndian ? r.reverse() : r).join("");
	};
	p.encodeInt = function(number, bits, signed){
		var max = Math.pow(2, bits), r = [];
		(number >= max || number < -(max >> 1)) && this.warn("encodeInt::overflow") && (number = 0);
		number < 0 && (number += max);
		for(; number; r[r.length] = String.fromCharCode(number % 256), number = Math.floor(number / 256));
		for(bits = -(-bits >> 3) - r.length; bits--; r[r.length] = "\0");
		return (this.bigEndian ? r.reverse() : r).join("");
	};
	p.decodeFloat = function(data, precisionBits, exponentBits){
		var b = ((b = new this.Buffer(this.bigEndian, data)).checkBuffer(precisionBits + exponentBits + 1), b),
			bias = Math.pow(2, exponentBits - 1) - 1, signal = b.readBits(precisionBits + exponentBits, 1),
			exponent = b.readBits(precisionBits, exponentBits), significand = 0,
			divisor = 2, curByte = b.buffer.length + (-precisionBits >> 3) - 1,
			byteValue, startBit, mask;
		do
			for(byteValue = b.buffer[ ++curByte ], startBit = precisionBits % 8 || 8, mask = 1 << startBit;
				mask >>= 1; (byteValue & mask) && (significand += 1 / divisor), divisor *= 2);
		while(precisionBits -= startBit);
		return exponent == (bias << 1) + 1 ? significand ? NaN : signal ? -Infinity : +Infinity
			: (1 + signal * -2) * (exponent || significand ? !exponent ? Math.pow(2, -bias + 1) * significand
			: Math.pow(2, exponent - bias) * (1 + significand) : 0);
	};
	p.decodeInt = function(data, bits, signed){
		var b = new this.Buffer(this.bigEndian, data), x = b.readBits(0, bits), max = Math.pow(2, bits);
		return signed && x >= max / 2 ? x - max  : x;
	};
	with({p: (p.Buffer = function(bigEndian, buffer){
		this.bigEndian = bigEndian || 0, this.buffer = [], this.setBuffer(buffer);
	}).prototype}){
		p.readBits = function(start, length){
			//shl fix: Henri Torgemane ~1996 (compressed by Jonas Raoni)
			function shl(a, b){
				for(++b; --b; a = ((a %= 0x7fffffff + 1) & 0x40000000) == 0x40000000 ? a * 2 : (a - 0x40000000) * 2 + 0x7fffffff + 1);
				return a;
			}
			if(start < 0 || length <= 0)
				return 0;
			this.checkBuffer(start + length);
			for(var offsetLeft, offsetRight = start % 8, curByte = this.buffer.length - (start >> 3) - 1,
				lastByte = this.buffer.length + (-(start + length) >> 3), diff = curByte - lastByte,
				sum = ((this.buffer[ curByte ] >> offsetRight) & ((1 << (diff ? 8 - offsetRight : length)) - 1))
				+ (diff && (offsetLeft = (start + length) % 8) ? (this.buffer[ lastByte++ ] & ((1 << offsetLeft) - 1))
				<< (diff-- << 3) - offsetRight : 0); diff; sum += shl(this.buffer[ lastByte++ ], (diff-- << 3) - offsetRight)
			);
			return sum;
		};
		p.setBuffer = function(data){
			if(data){
				for(var l, i = l = data.length, b = this.buffer = new Array(l); i; b[l - i] = data.charCodeAt(--i));
				this.bigEndian && b.reverse();
			}
		};
		p.hasNeededBits = function(neededBits){
			return this.buffer.length >= -(-neededBits >> 3);
		};
		p.checkBuffer = function(neededBits){
			if(!this.hasNeededBits(neededBits))
				throw new Error("checkBuffer::missing bytes");
		};
	}
	p.warn = function(msg){
		if(this.allowExceptions)
			throw new Error(msg);
		return 1;
	};
	p.toSmall = function(data){return this.decodeInt(data, 8, true);};
	p.fromSmall = function(number){return this.encodeInt(number, 8, true);};
	p.toByte = function(data){return this.decodeInt(data, 8, false);};
	p.fromByte = function(number){return this.encodeInt(number, 8, false);};
	p.toShort = function(data){return this.decodeInt(data, 16, true);};
	p.fromShort = function(number){return this.encodeInt(number, 16, true);};
	p.toWord = function(data){return this.decodeInt(data, 16, false);};
	p.fromWord = function(number){return this.encodeInt(number, 16, false);};
	p.toInt = function(data){return this.decodeInt(data, 32, true);};
	p.fromInt = function(number){return this.encodeInt(number, 32, true);};
	p.toDWord = function(data){return this.decodeInt(data, 32, false);};
	p.fromDWord = function(number){return this.encodeInt(number, 32, false);};
	p.toFloat = function(data){return this.decodeFloat(data, 23, 8);};
	p.fromFloat = function(number){return this.encodeFloat(number, 23, 8);};
	p.toDouble = function(data){return this.decodeFloat(data, 52, 11);};
	p.fromDouble = function(number){return this.encodeFloat(number, 52, 11);};
}


//
// jDataView by Vjeux - Jan 2010
//
// A unique way to work with a binary file in the browser
// http://github.com/vjeux/jDataView
// http://blog.vjeux.com/ <vjeuxx@gmail.com>
//

(function (exports) {

var global = this;

var compatibility = {
	ArrayBuffer: typeof ArrayBuffer !== 'undefined',
	DataView: typeof DataView !== 'undefined' &&
		('getFloat64' in DataView.prototype ||				// Chrome
		 'getFloat64' in new DataView(new ArrayBuffer(1))), // Node
	// NodeJS Buffer in v0.5.5 and newer
	NodeBuffer: typeof Buffer !== 'undefined' && 'readInt16LE' in Buffer.prototype
};

var dataTypes = {
	'Int8': 1,
	'Int16': 2,
	'Int32': 4,
	'Uint8': 1,
	'Uint16': 2,
	'Uint32': 4,
	'Float32': 4,
	'Float64': 8
};

var nodeNaming = {
	'Int8': 'Int8',
	'Int16': 'Int16',
	'Int32': 'Int32',
	'Uint8': 'UInt8',
	'Uint16': 'UInt16',
	'Uint32': 'UInt32',
	'Float32': 'Float',
	'Float64': 'Double'
};

var jDataView = function (buffer, byteOffset, byteLength, littleEndian) {
	if (!(this instanceof jDataView)) {
		throw new Error("jDataView constructor may not be called as a function");
	}

	this.buffer = buffer = jDataView.wrapBuffer(buffer);

	// Check parameters and existing functionnalities
	this._isArrayBuffer = compatibility.ArrayBuffer && buffer instanceof ArrayBuffer;
	this._isDataView = compatibility.DataView && this._isArrayBuffer;
	this._isNodeBuffer = compatibility.NodeBuffer && buffer instanceof Buffer;

	// Handle Type Errors
	if (!this._isNodeBuffer && !this._isArrayBuffer && !(buffer instanceof Array)) {
		throw new TypeError('jDataView buffer has an incompatible type');
	}

	// Default Values
	this._littleEndian = Boolean(littleEndian);

	var bufferLength = this._isArrayBuffer ? buffer.byteLength : buffer.length;
	if (byteOffset === undefined) {
		byteOffset = 0;
	}
	this.byteOffset = byteOffset;

	if (byteLength === undefined) {
		byteLength = bufferLength - byteOffset;
	}
	this.byteLength = byteLength;

	if (!this._isDataView) {
		// Do additional checks to simulate DataView
		if (typeof byteOffset !== 'number') {
			throw new TypeError('jDataView byteOffset is not a number');
		}
		if (typeof byteLength !== 'number') {
			throw new TypeError('jDataView byteLength is not a number');
		}
		if (byteOffset < 0) {
			throw new Error('jDataView byteOffset is negative');
		}
		if (byteLength < 0) {
			throw new Error('jDataView byteLength is negative');
		}
	}

	// Instanciate
	if (this._isDataView) {
		this._view = new DataView(buffer, byteOffset, byteLength);
	}
	this._start = byteOffset;
	if (byteOffset + byteLength > bufferLength) {
		throw new Error("jDataView (byteOffset + byteLength) value is out of bounds");
	}

	this._offset = 0;

	// Create uniform reading methods (wrappers) for the following data types

	if (this._isDataView) { // DataView: we use the direct method
		for (var type in dataTypes) {
			if (!dataTypes.hasOwnProperty(type)) {
				continue;
			}
			(function(type, view){
				var size = dataTypes[type];
				view['get' + type] = function (byteOffset, littleEndian) {
					// Handle the lack of endianness
					if (littleEndian === undefined) {
						littleEndian = view._littleEndian;
					}

					// Handle the lack of byteOffset
					if (byteOffset === undefined) {
						byteOffset = view._offset;
					}

					// Move the internal offset forward
					view._offset = byteOffset + size;

					return view._view['get' + type](byteOffset, littleEndian);
				};
				view['set' + type] = function (byteOffset, value, littleEndian) {
					// Handle the lack of endianness
					if (littleEndian === undefined) {
						littleEndian = view._littleEndian;
					}

					// Handle the lack of byteOffset
					if (byteOffset === undefined) {
						byteOffset = view._offset;
					}

					// Move the internal offset forward
					view._offset = byteOffset + size;

					view._view['set' + type](byteOffset, value, littleEndian);
				};
			})(type, this);
		}
	} else if (this._isNodeBuffer) {
		for (var type in dataTypes) {
			if (!dataTypes.hasOwnProperty(type)) {
				continue;
			}
			(function(type, view){
				var size = dataTypes[type];
				view['get' + type] = function (byteOffset, littleEndian) {
					// Handle the lack of endianness
					if (littleEndian === undefined) {
						littleEndian = view._littleEndian;
					}

					// Handle the lack of byteOffset
					if (byteOffset === undefined) {
						byteOffset = view._offset;
					}

					var name;
					if (type === 'Int8' || type === 'Uint8') {
						name = 'read' + nodeNaming[type];
					} else if (littleEndian) {
						name = 'read' + nodeNaming[type] + 'LE';
					} else {
						name = 'read' + nodeNaming[type] + 'BE';
					}

					// Move the internal offset forward
					view._offset = byteOffset + size;

					return view.buffer[name](view._start + byteOffset);
				};
				view['set' + type] = function (byteOffset, value, littleEndian) {
					// Handle the lack of endianness
					if (littleEndian === undefined) {
						littleEndian = view._littleEndian;
					}

					// Handle the lack of byteOffset
					if (byteOffset === undefined) {
						byteOffset = view._offset;
					}

					var name;
					if (type === 'Int8' || type === 'Uint8') {
						name = 'write' + nodeNaming[type];
					} else if (littleEndian) {
						name = 'write' + nodeNaming[type] + 'LE';
					} else {
						name = 'write' + nodeNaming[type] + 'BE';
					}

					// Move the internal offset forward
					view._offset = byteOffset + size;

					view.buffer[name](value, view._start + byteOffset);
				};
			})(type, this);
		}
	} else if (this._isArrayBuffer) {
		for (var type in dataTypes) {
			if (!dataTypes.hasOwnProperty(type)) {
				continue;
			}
			(function(type, view){
				var size = dataTypes[type];
				view['get' + type] = function (byteOffset, littleEndian) {
					// Handle the lack of endianness
					if (littleEndian === undefined) {
						littleEndian = view._littleEndian;
					}

					// Handle the lack of byteOffset
					if (byteOffset === undefined) {
						byteOffset = view._offset;
					}

					// ArrayBuffer: we use a typed array of size 1 from original buffer if alignment is good and from slice when it's not
					var buffer, offset;
					if (size === 1 || ((view._start + byteOffset) % size === 0 && littleEndian)) {
						buffer = view.buffer;
						offset = view._start + byteOffset;
						view._offset = byteOffset + size;
					} else {
						// standard decoding functions are still faster than JS implementations, so let's use them via hack
						buffer = new Uint8Array(view.getBytes(size, byteOffset, littleEndian)).buffer;
						offset = 0;
					}

					return new global[type + 'Array'](buffer, offset, 1)[0];
				};
				view['set' + type] = function (byteOffset, value, littleEndian) {
					// Handle the lack of endianness
					if (littleEndian === undefined) {
						littleEndian = view._littleEndian;
					}

					// Handle the lack of byteOffset
					if (byteOffset === undefined) {
						byteOffset = view._offset;
					}

					// ArrayBuffer: we use a typed array of size 1 from original buffer if alignment is good and from slice when it's not
					var TypedArray = global[type + 'Array'];
					if (size === 1 || ((view._start + byteOffset) % size === 0 && littleEndian)) {
						new TypedArray(view.buffer, view._start + byteOffset, 1)[0] = value;
						view._offset = byteOffset + size;
					} else {
						// standard encoding functions are still faster than JS implementations, so let's use them via hack
						var bytes = new Uint8Array(size);
						new TypedArray(bytes.buffer, 0, 1)[0] = value;
						view.setBytes(byteOffset, bytes, littleEndian);
					}
				};
			})(type, this);
		}
	} else {
		for (var type in dataTypes) {
			if (!dataTypes.hasOwnProperty(type)) {
				continue;
			}
			(function(type, view){
				var size = dataTypes[type];
				view['get' + type] = function (byteOffset, littleEndian) {
					// Handle the lack of endianness
					if (littleEndian === undefined) {
						littleEndian = view._littleEndian;
					}

					// Handle the lack of byteOffset
					if (byteOffset === undefined) {
						byteOffset = view._offset;
					}

					// Error checking:
					if (typeof byteOffset !== 'number') {
						throw new TypeError('jDataView byteOffset is not a number');
					}
					if (byteOffset + size > view.byteLength) {
						throw new Error('jDataView (byteOffset + size) value is out of bounds');
					}

					return view['_get' + type](byteOffset, littleEndian);
				};
				view['set' + type] = function (byteOffset, value, littleEndian) {
					// Handle the lack of endianness
					if (littleEndian === undefined) {
						littleEndian = view._littleEndian;
					}

					// Handle the lack of byteOffset
					if (byteOffset === undefined) {
						byteOffset = view._offset;
					}

					// Move the internal offset forward
					view._offset = byteOffset + size;

					// Error checking:
					if (typeof byteOffset !== 'number') {
						throw new TypeError('jDataView byteOffset is not a number');
					}
					if (byteOffset + size > view.byteLength) {
						throw new Error('jDataView (byteOffset + size) value is out of bounds');
					}

					view['_set' + type.replace('Uint', 'Int')](byteOffset, value, littleEndian);
				};
			})(type, this);
		}
	}

	for (var type in dataTypes) {
		if (!dataTypes.hasOwnProperty(type)) {
			continue;
		}
		(function (type, view) {
			view['write' + type] = function (value, littleEndian) {
				this['set' + type](undefined, value, littleEndian);
			};
		})(type, this);
	}
};

// mostly internal function for wrapping any supported input (String or Array-like) to best suitable buffer format
jDataView.wrapBuffer = function (buffer) {
	switch (typeof buffer) {
		case 'string':
			buffer = Array.prototype.map.call(buffer, function (char) {
				return char.charCodeAt(0) & 0xff;
			});
			break;

		case 'number':
			buffer = {length: buffer};
			break;
	}

	if ('length' in buffer && !((compatibility.NodeBuffer && buffer instanceof Buffer) || (compatibility.ArrayBuffer && buffer instanceof ArrayBuffer))) {
		if (compatibility.NodeBuffer) {
			buffer = new Buffer(buffer);
		} else
		if (compatibility.ArrayBuffer) {
			var bytes = buffer instanceof Uint8Array ? buffer : new Uint8Array(buffer);
			buffer = bytes.buffer;
		} else {
			if (!(buffer instanceof Array)) {
				buffer = Array.prototype.slice.call(buffer);
			}
			// as simple Array may contain non-byte values (incl. undefined)
			for (var i = 0, length = buffer.length; i < length; i++) {
				buffer[i] &= 0xff;
			}
		}
	}

	return buffer;
};

// left for backward compatibility
jDataView.createBuffer = function () {
	return jDataView.wrapBuffer(arguments);
};

jDataView.prototype = {
	compatibility: compatibility,

	// Helpers

	_getBytes: function (length, byteOffset, littleEndian) {
		var result;

		// Handle the lack of endianness
		if (littleEndian === undefined) {
			littleEndian = this._littleEndian;
		}

		// Handle the lack of byteOffset
		if (byteOffset === undefined) {
			byteOffset = this._offset;
		}

		if (length === undefined) {
			length = this.byteLength - byteOffset;
		}

		// Error Checking
		if (typeof byteOffset !== 'number') {
			throw new TypeError('jDataView byteOffset is not a number');
		}
		if (length < 0 || byteOffset + length > this.byteLength) {
			throw new Error('jDataView length or (byteOffset+length) value is out of bounds');
		}

		byteOffset += this._start;

		if (this._isArrayBuffer) {
			result = new Uint8Array(this.buffer, byteOffset, length);
		}
		else {
			result = this.buffer.slice(byteOffset, byteOffset + length);
		}

		if (!littleEndian && length > 1) {
			if (!(result instanceof Array)) {
				result = Array.prototype.slice.call(result);
			}

			result.reverse();
		}

		this._offset = byteOffset - this._start + length;

		return result;
	},

	// wrapper for external calls (do not return inner buffer directly to prevent it's modifying)
	getBytes: function (length, byteOffset, littleEndian) {
		var result = this._getBytes.apply(this, arguments);

		if (!(result instanceof Array)) {
			result = Array.prototype.slice.call(result);
		}

		return result;
	},

	setBytes: function (byteOffset, bytes, littleEndian) {
		var length = bytes.length;

		// Handle the lack of endianness
		if (littleEndian === undefined) {
			littleEndian = this._littleEndian;
		}

		// Handle the lack of byteOffset
		if (byteOffset === undefined) {
			byteOffset = this._offset;
		}

		// Error Checking
		if (typeof byteOffset !== 'number') {
			throw new TypeError('jDataView byteOffset is not a number');
		}
		if (length < 0 || byteOffset + length > this.byteLength) {
			throw new Error('jDataView length or (byteOffset+length) value is out of bounds');
		}

		if (!littleEndian && length > 1) {
			bytes = Array.prototype.slice.call(bytes).reverse();
		}

		byteOffset += this._start;

		if (this._isArrayBuffer) {
			new Uint8Array(this.buffer, byteOffset, length).set(bytes);
		}
		else {
			if (this._isNodeBuffer) {
				new Buffer(bytes).copy(this.buffer, byteOffset);
			} else {
				for (var i = 0; i < length; i++) {
					this.buffer[byteOffset + i] = bytes[i];
				}
			}
		}

		this._offset = byteOffset - this._start + length;
	},

	writeBytes: function (bytes, littleEndian) {
		this.setBytes(undefined, bytes, littleEndian);
	},

	getString: function (length, byteOffset) {
		return String.fromCharCode.apply(null, this._getBytes(length, byteOffset, true));
	},

	setString: function (byteOffset, subString) {
		this.setBytes(byteOffset, Array.prototype.map.call(subString, function (char) {
			return char.charCodeAt(0) & 0xff;
		}), true);
	},

	writeString: function (subString) {
		this.setString(undefined, subString);
	},

	getChar: function (byteOffset) {
		return this.getString(1, byteOffset);
	},

	setChar: function (byteOffset, char) {
		this.setString.apply(this, arguments);
	},

	writeChar: function (char) {
		this.setChar(undefined, char);
	},

	tell: function () {
		return this._offset;
	},

	seek: function (byteOffset) {
		if (typeof byteOffset !== 'number') {
			throw new TypeError('jDataView byteOffset is not a number');
		}
		if (byteOffset < 0 || byteOffset > this.byteLength) {
			throw new Error('jDataView byteOffset value is out of bounds');
		}

		return this._offset = byteOffset;
	},

	slice: function (start, end, forceCopy) {
		return forceCopy
			   ? new jDataView(this.getBytes(end - start, start), undefined, undefined, true)
			   : new jDataView(this.buffer, this._start + start, end - start, this._littleEndian);
	},

	// Compatibility functions on a String Buffer

	_getFloat64: function (byteOffset, littleEndian) {
		var b = this._getBytes(8, byteOffset, littleEndian),

			sign = 1 - (2 * (b[7] >> 7)),
			exponent = ((((b[7] << 1) & 0xff) << 3) | (b[6] >> 4)) - ((1 << 10) - 1),

		// Binary operators such as | and << operate on 32 bit values, using + and Math.pow(2) instead
			mantissa = ((b[6] & 0x0f) * Math.pow(2, 48)) + (b[5] * Math.pow(2, 40)) + (b[4] * Math.pow(2, 32)) +
						(b[3] * Math.pow(2, 24)) + (b[2] * Math.pow(2, 16)) + (b[1] * Math.pow(2, 8)) + b[0];

		if (exponent === 1024) {
			if (mantissa !== 0) {
				return NaN;
			} else {
				return sign * Infinity;
			}
		}

		if (exponent === -1023) { // Denormalized
			return sign * mantissa * Math.pow(2, -1022 - 52);
		}

		return sign * (1 + mantissa * Math.pow(2, -52)) * Math.pow(2, exponent);
	},

	_getFloat32: function (byteOffset, littleEndian) {
		var b = this._getBytes(4, byteOffset, littleEndian),

			sign = 1 - (2 * (b[3] >> 7)),
			exponent = (((b[3] << 1) & 0xff) | (b[2] >> 7)) - 127,
			mantissa = ((b[2] & 0x7f) << 16) | (b[1] << 8) | b[0];

		if (exponent === 128) {
			if (mantissa !== 0) {
				return NaN;
			} else {
				return sign * Infinity;
			}
		}

		if (exponent === -127) { // Denormalized
			return sign * mantissa * Math.pow(2, -126 - 23);
		}

		return sign * (1 + mantissa * Math.pow(2, -23)) * Math.pow(2, exponent);
	},

	_getInt32: function (byteOffset, littleEndian) {
		var b = this._getBytes(4, byteOffset, littleEndian);
		return (b[3] << 24) | (b[2] << 16) | (b[1] << 8) | b[0];
	},

	_getUint32: function (byteOffset, littleEndian) {
		return this._getInt32(byteOffset, littleEndian) >>> 0;
	},

	_getInt16: function (byteOffset, littleEndian) {
		return (this._getUint16(byteOffset, littleEndian) << 16) >> 16;
	},

	_getUint16: function (byteOffset, littleEndian) {
		var b = this._getBytes(2, byteOffset, littleEndian);
		return (b[1] << 8) | b[0];
	},

	_getInt8: function (byteOffset) {
		return (this._getUint8(byteOffset) << 24) >> 24;
	},

	_getUint8: function (byteOffset) {
		return this._getBytes(1, byteOffset)[0];
	},

	_setBinaryFloat: function (byteOffset, value, mantSize, expSize, littleEndian) {
		var signBit = value < 0 ? 1 : 0,
			exponent,
			mantissa,
			eMax = ~(-1 << (expSize - 1)),
			eMin = 1 - eMax;

		if (value < 0) {
			value = -value;
		}

		if (value === 0) {
			exponent = eMin - 1;
			mantissa = 0;
		} else
		if (isNaN(value)) {
			exponent = eMax + 1;
			mantissa = 1;
		} else
		if (value === Infinity) {
			exponent = eMax + 1;
			mantissa = 0;
		} else {
			exponent = Math.floor(Math.log(value) / Math.LN2);
			if (exponent > eMin && exponent <= eMax) {
				mantissa = Math.floor((value * Math.pow(2, -exponent) - 1) * Math.pow(2, mantSize));
			} else {
				mantissa = Math.floor(value * Math.pow(2, mantSize - eMin));
				exponent = eMin - 1;
			}
		}

		exponent += eMax;

		var b = [];
		while (mantSize >= 8) {
			b.push(mantissa % 256);
			mantissa = Math.floor(mantissa / 256);
			mantSize -= 8;
		}
		exponent = (exponent << mantSize) | mantissa;
		expSize += mantSize;
		while (expSize >= 8) {
			b.push(exponent & 0xff);
			exponent >>>= 8;
			expSize -= 8;
		}
		b.push((signBit << expSize) | exponent);

		this.setBytes(byteOffset, b, littleEndian);
	},

	_setFloat32: function (byteOffset, value, littleEndian) {
		this._setBinaryFloat(byteOffset, value, 23, 8, littleEndian);
	},

	_setFloat64: function (byteOffset, value, littleEndian) {
		this._setBinaryFloat(byteOffset, value ,52, 11, littleEndian);
	},

	_setInt32: function (byteOffset, value, littleEndian) {
		this.setBytes(byteOffset, [
			value & 0xff,
			(value >>> 8) & 0xff,
			(value >>> 16) & 0xff,
			value >>> 24
		], littleEndian);
	},

	_setInt16: function (byteOffset, value, littleEndian) {
		this.setBytes(byteOffset, [
			value & 0xff,
			value >>> 8
		], littleEndian);
	},

	_setInt8: function (byteOffset, value) {
		this.setBytes(byteOffset, [value]);
	}
};

if (typeof module !== 'undefined' && exports === module.exports) {
	module.exports = jDataView;
} else {
	exports.jDataView = jDataView;
}

})(this);



/*
Lib3dsChunk = function() {
	this.cur = 0;
	this.id = 0;
	this.size = 0;
	this.end = 0;
};

Lib3dsFace = function() {
	this.flags = 0;
	this.points = [];
	this.material = "";
};

Lib3dsMesh = function() {
	this.next = null;
	this.matrix = [1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1];
	this.name = "";
	this.color = 0;
	this.points = 0;
	this.pointL = [];
	this.flags = 0;
	this.flagL = [];
	this.texels = 0;
	this.texelL = [];
	this.faces = 0;
	this.faceL = [];
};

Lib3dsMaterial = function() {
	this.name = "";
	this.ambientColor = 0;
	this.diffuseColor = 0;
	this.spectralColor = 0;
};
*/

function parse3DS(url) {


	//document.write("<div id='dbg'></div>");

	try {

	var req = new XMLHttpRequest();

	if(req.overrideMimeType) {
	  req.overrideMimeType("text/plain; charset=x-user-defined");
	}
	
	var geometries = new Array();

	var getKeys = function(obj){
	   var keys = [];
	   for(var key in obj){
		  keys.push(key);
	   }
	   return keys;
	};
	
	req.onreadystatechange = function() {

		if(req.readyState == 4) {
			if(req.status == 0 || req.status == 200) {
				// Note that turning on debugging makes reading the file much slower.
				
				try{
				var lib3ds = new Lib3ds(null, false);
				lib3ds.readFile(req.responseText);
		  
				for(var i = 0; i < lib3ds.meshes.length; i++) {
					var mesh = lib3ds.meshes[i];
				
					var faceNormals = new Array();

					var faceIndices = new Array();
					for(var fi = 0; fi < mesh.faces; fi++) {
						faceIndices.push(mesh.faceL[fi].points[0]);
						faceIndices.push(mesh.faceL[fi].points[1]);
						faceIndices.push(mesh.faceL[fi].points[2]);
						
						faceNormals.push(new V3f(0,0,0));
						
						
						//alert(getKeys(mesh.faceL[fi].points));
						
					}
					
					var bounds = new Box3f(new V3f(666,666,666), new V3f(-666,-666,-666));
					
					
					var vertices = new Array();
					for(var vi = 0; vi < mesh.points; vi++) {
						var pi = new V3f(mesh.pointL[vi][0], mesh.pointL[vi][1], mesh.pointL[vi][2]);
						vertices.push(pi);
						
						
						if(pi.X > bounds.Max.X)bounds.Max.X = pi.X;
						if(pi.Y > bounds.Max.Y)bounds.Max.Y = pi.Y;
						if(pi.Z > bounds.Max.Z)bounds.Max.Z = pi.Z;
						
						if(pi.X < bounds.Min.X)bounds.Min.X = pi.X;
						if(pi.Y < bounds.Min.Y)bounds.Min.Y = pi.Y;
						if(pi.Z < bounds.Min.Z)bounds.Min.Z = pi.Z;
					}
					//alert(mesh.texels);
					var texCoords = new Array();
					for(var ti = 0; ti < mesh.texels; ti++) {
						texCoords.push(new V2f(mesh.texelL[ti][0], mesh.texelL[ti][1]));
					}
					
					var faceVertexIndices = new Array();
					var faceVertexNormals = new Array();
					var faceInfluence = new Array();
					var max = 0;
					var fi = 0;
					for(var ti = 0; ti < faceIndices.length; ti = ti + 3) {
					
						var i0 = faceIndices[ti+0];
						var i1 = faceIndices[ti+1];
						var i2 = faceIndices[ti+2];
					
						var p0 = vertices[i0];
						var p1 = vertices[i1];
						var p2 = vertices[i2];
						
						var e01 = p1.minus(p0);
						var e02 = p2.minus(p0);
						
						var fn = e01.cross(e02).normalized();
						
						faceVertexIndices.push(ti+0);
						faceVertexIndices.push(ti+1);
						faceVertexIndices.push(ti+2);
						
						faceVertexNormals.push(new V3f(0,0,0));
						faceVertexNormals.push(new V3f(0,0,0));
						faceVertexNormals.push(new V3f(0,0,0));
						
						if(faceInfluence[i0] == undefined)faceInfluence[i0] = [fi];
						else faceInfluence[i0].push(fi);
						
						if(faceInfluence[i1] == undefined)faceInfluence[i1] = [fi];
						else faceInfluence[i1].push(fi);
						
						if(faceInfluence[i2] == undefined)faceInfluence[i2] = [fi];
						else faceInfluence[i2].push(fi);
						
						faceNormals[fi] = fn;
						
						if(i0 > max)max = i0;
						if(i1 > max)max = i1;
						if(i2 > max)max = i2;
						
						fi++;
					}
					
					for(var vi = 0; vi < vertices.length; vi++) {
					
						var influential = faceInfluence[vi];
						if(influential != undefined && influential.length > 0) {
							//var n0 = faceNormals[influential[0]];
							var maxAngle = 0.0;
							
							var normals = new Array();
							for(var lii = 0; lii < influential.length; lii++) {
								normals[lii] = faceNormals[influential[lii]].normalized();
							}
							
							for(var lii = 0; lii < influential.length; lii++) {
								for(var ii = 0; ii < influential.length; ii++) {
									if(ii != lii) {
										var ni = normals[lii];
										var nr = normals[ii];
										
										var invert = false;
										var d = ni.dot(nr);
										if(d < 0) {
											d = -d;
											invert = true;
											}
										
										if(d >= Math.cos(50/57.296)) {
											var avg = (ni.plus(nr)).normalized();
											if(invert) avg = ni.minus(nr).normalized();
											
											normals[ii] = avg;
											normals[lii] = avg;
											//lii = ii+1;
											//ii = 1;
											//alert("crease 2");
										}
										
										maxAngle = Math.min(d, maxAngle);
									}
								}
							}
							
							//maxAngle = Math.acos(maxAngle);
	
	
							for(var fii = 0; fii < influential.length; fii++) {
								var fi = influential[fii];
								
								var i0 = faceIndices[3*fi+0];
								var i1 = faceIndices[3*fi+1];
								var i2 = faceIndices[3*fi+2];
								
								if(i0 == vi)faceVertexNormals[3*fi+0] = normals[fii];
								if(i1 == vi)faceVertexNormals[3*fi+1] = normals[fii];
								if(i2 == vi)faceVertexNormals[3*fi+2] = normals[fii];
		
							}
	
							/*if(maxAngle >= Math.cos(15/57.296)) {
								alert(maxAngle);
								
								var sum = new V3f(0,0,0);
								for(var fii = 0; fii < influential.length; fii++) {
									var fi = influential[fii];
									var faceNormal = faceNormals[fi];
									sum = sum.plus(faceNormal);
								}
								sum = sum.normalized();
								//alert("creased " + influential.length + " normals: " + sum);
								for(var fii = 0; fii < influential.length; fii++) {
									var fi = influential[fii];
									faceVertexNormals[3*fi+0] = sum;
									faceVertexNormals[3*fi+1] = sum;
									faceVertexNormals[3*fi+2] = sum;
								}
								
							}
							else {
							
								
							
							}*/
							
						}
						else alert("empty");
					
					}
					
					/*fi = -1;
					for(var ti = 0; ti < faceVertexNormals.length; ti++) {
					
						if(ti % 3 == 0) fi++;
					
						var faceNormal = faceNormals[fi];
						var n0 = faceVertexNormals[ti];
						
						//alert(faceNormal);
						if(n0 == undefined || n0.length() < 0.1) faceVertexNormals[ti] = faceNormal;
						else {
							
							var angle = Math.acos(n0.normalized().dot(faceNormal));
							
							if(angle < 90 / 57.296) {
								faceVertexNormals[ti] = faceVertexNormals[ti] + faceNormal;
							}
							
						}
						
						
					
					}*/
		
					
					
					
					
					//alert(max + " vs. " + vertices.length);
					
					if(faceIndices.length == 0) faceIndices = null;
					
					var tangents = null;
					var binormals = null;
					
					if(texCoords.length > 0) {
						//tangents = new Array();
						//binormals = new Array();
						//createTangents(vertices, texCoords, faceIndices, faceIndices, faceVertexIndices, faceVertexNormals, tangents, binormals);
					}
					
					var realPositions = new Array();
					var realTexCoords = new Array();
					
					for(var ti = 0; ti < faceIndices.length; ti++) {
						realPositions.push(vertices[faceIndices[ti]]);
						if(texCoords.length > 0) realTexCoords.push(texCoords[faceIndices[ti]]);
					}
					
					
					var vg = new VertexGeometry(mesh.name, realPositions, realTexCoords, null, bounds);
					vg.Normals = faceVertexNormals;
					vg.Material = new Material();
					vg.Tangents = tangents;
					vg.BiNormals = binormals;

					
					
					geometries.push(vg);
				}
				}
				catch(x){alert(x); }
		  
			}
		}
	};
	req.open("GET", url, false);
	req.send(null);
	
	
	
	
	
	
	}
	catch(x) {alert(x);}
	
	
	
	return geometries;
  }