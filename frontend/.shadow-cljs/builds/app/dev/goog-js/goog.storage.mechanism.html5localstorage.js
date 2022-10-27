["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/storage/mechanism/html5localstorage.js"],"~:js","goog.provide(\"goog.storage.mechanism.HTML5LocalStorage\");\ngoog.require(\"goog.storage.mechanism.HTML5WebStorage\");\ngoog.storage.mechanism.HTML5LocalStorage = function() {\n  var storage = null;\n  try {\n    storage = window.localStorage || null;\n  } catch (e) {\n  }\n  goog.storage.mechanism.HTML5LocalStorage.base(this, \"constructor\", storage);\n};\ngoog.inherits(goog.storage.mechanism.HTML5LocalStorage, goog.storage.mechanism.HTML5WebStorage);\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Provides data persistence using HTML5 local storage\n * mechanism. Local storage must be available under window.localStorage,\n * see: http://www.w3.org/TR/webstorage/#the-localstorage-attribute.\n */\n\ngoog.provide('goog.storage.mechanism.HTML5LocalStorage');\n\ngoog.require('goog.storage.mechanism.HTML5WebStorage');\n\n\n\n/**\n * Provides a storage mechanism that uses HTML5 local storage.\n *\n * @constructor\n * @struct\n * @extends {goog.storage.mechanism.HTML5WebStorage}\n */\ngoog.storage.mechanism.HTML5LocalStorage = function() {\n  'use strict';\n  var storage = null;\n\n  try {\n    // May throw an exception in cases where the local storage object\n    // is visible but access to it is disabled.\n    storage = window.localStorage || null;\n  } catch (e) {\n  }\n  goog.storage.mechanism.HTML5LocalStorage.base(this, 'constructor', storage);\n};\ngoog.inherits(\n    goog.storage.mechanism.HTML5LocalStorage,\n    goog.storage.mechanism.HTML5WebStorage);\n","~:compiled-at",1666857464862,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.storage.mechanism.html5localstorage.js\",\n\"lineCount\":12,\n\"mappings\":\"AAYAA,IAAKC,CAAAA,OAAL,CAAa,0CAAb,CAAA;AAEAD,IAAKE,CAAAA,OAAL,CAAa,wCAAb,CAAA;AAWAF,IAAKG,CAAAA,OAAQC,CAAAA,SAAUC,CAAAA,iBAAvB,GAA2CC,QAAQ,EAAG;AAEpD,MAAIH,UAAU,IAAd;AAEA,KAAI;AAGFA,WAAA,GAAUI,MAAOC,CAAAA,YAAjB,IAAiC,IAAjC;AAHE,GAIF,QAAOC,CAAP,CAAU;;AAEZT,MAAKG,CAAAA,OAAQC,CAAAA,SAAUC,CAAAA,iBAAkBK,CAAAA,IAAzC,CAA8C,IAA9C,EAAoD,aAApD,EAAmEP,OAAnE,CAAA;AAVoD,CAAtD;AAYAH,IAAKW,CAAAA,QAAL,CACIX,IAAKG,CAAAA,OAAQC,CAAAA,SAAUC,CAAAA,iBAD3B,EAEIL,IAAKG,CAAAA,OAAQC,CAAAA,SAAUQ,CAAAA,eAF3B,CAAA;;\",\n\"sources\":[\"goog/storage/mechanism/html5localstorage.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Provides data persistence using HTML5 local storage\\n * mechanism. Local storage must be available under window.localStorage,\\n * see: http://www.w3.org/TR/webstorage/#the-localstorage-attribute.\\n */\\n\\ngoog.provide('goog.storage.mechanism.HTML5LocalStorage');\\n\\ngoog.require('goog.storage.mechanism.HTML5WebStorage');\\n\\n\\n\\n/**\\n * Provides a storage mechanism that uses HTML5 local storage.\\n *\\n * @constructor\\n * @struct\\n * @extends {goog.storage.mechanism.HTML5WebStorage}\\n */\\ngoog.storage.mechanism.HTML5LocalStorage = function() {\\n  'use strict';\\n  var storage = null;\\n\\n  try {\\n    // May throw an exception in cases where the local storage object\\n    // is visible but access to it is disabled.\\n    storage = window.localStorage || null;\\n  } catch (e) {\\n  }\\n  goog.storage.mechanism.HTML5LocalStorage.base(this, 'constructor', storage);\\n};\\ngoog.inherits(\\n    goog.storage.mechanism.HTML5LocalStorage,\\n    goog.storage.mechanism.HTML5WebStorage);\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"storage\",\"mechanism\",\"HTML5LocalStorage\",\"goog.storage.mechanism.HTML5LocalStorage\",\"window\",\"localStorage\",\"e\",\"base\",\"inherits\",\"HTML5WebStorage\"]\n}\n"]