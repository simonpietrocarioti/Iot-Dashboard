(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["5fc6ff99"],{"04b2":function(e,t,i){"use strict";var a=i("2a92"),s=i.n(a);s.a},"1bca":function(e,t,i){"use strict";var a=i("ff57"),s=i.n(a);s.a},"2a92":function(e,t,i){},"8b24":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",{staticClass:"flex flex-center"},[i("div",{staticClass:"q-pa-md"},[i("div",{staticClass:"row"},e._l(e.items,function(t,a){return i("div",{key:a,staticClass:"col-auto"},["temperatura"===t.type?i("q-card",{staticClass:"card-bg",attrs:{flat:"",bordered:""}},[i("q-bar",[i("q-icon",{attrs:{name:"fas fa-clock"}}),i("div",[e._v(e._s(e.deviceInfo(t.id).ora))]),i("q-space"),!0===e.isAdmin?i("q-btn",{attrs:{dense:"",flat:"",icon:"close"},on:{click:function(t){return e.removeItem(a)}}}):e._e()],1),i("q-card-section",[i("div",{staticClass:"text-h6 text-center"},[e._v(e._s(t.label))])]),i("q-card-section",{staticClass:"text-center"},[i("q-icon",{staticStyle:{"font-size":"3rem"},attrs:{name:"fas fa-thermometer-half"}})],1),i("q-card-section",{staticClass:"text-h5 text-center"},[i("span",{staticClass:"label-blue"},[e._v(e._s(e.deviceInfo(t.id).DeviceValue)+"°C")])]),i("q-card-section",[e._v(e._s(t.description))])],1):e._e(),"switch"===t.type?i("q-card",{staticClass:"card-bg",attrs:{flat:"",bordered:""}},[i("q-bar",[i("q-icon",{attrs:{name:"fas fa-clock"}}),i("div",[e._v(e._s(e.deviceInfo(t.id).ora))]),i("q-space"),!0===e.isAdmin?i("q-btn",{attrs:{dense:"",flat:"",icon:"close"},on:{click:function(t){return e.removeItem(a)}}}):e._e()],1),i("q-card-section",[i("div",{staticClass:"text-h6 text-center"},[e._v(e._s(t.label))])]),i("q-card-section",{staticClass:"text-center"},[i("q-btn",{staticClass:"glossy",attrs:{round:"",color:e.icon(t).color,icon:e.icon(t).icon},on:{click:function(i){return e.buttonEvent(t.id)}}})],1),i("q-card-section",[e._v(e._s(t.description))])],1):e._e(),"button"===t.type?i("q-card",{staticClass:"card-bg",attrs:{flat:"",bordered:""}},[i("q-bar",[i("q-icon",{attrs:{name:"fas fa-clock"}}),i("div",[e._v(e._s(e.deviceInfo(t.id).ora))]),i("q-space"),!0===e.isAdmin?i("q-btn",{attrs:{dense:"",flat:"",icon:"close"},on:{click:function(t){return e.removeItem(a)}}}):e._e()],1),i("q-card-section",[i("div",{staticClass:"text-h6 text-center"},[e._v(e._s(t.label))])]),i("q-card-section",{staticClass:"text-center"},[i("q-btn",{staticClass:"glossy",attrs:{round:"",color:e.icon(t).color,icon:e.icon(t).icon},on:{mousedown:function(i){return e.pushEvent(t.id)},mouseup:function(i){return e.releaseEvent(t.id)}}})],1),i("q-card-section",[e._v(e._s(t.description))])],1):e._e(),"termostato"===t.type?i("q-card",{staticClass:"card-bg",attrs:{flat:"",bordered:""}},[i("q-bar",[i("q-icon",{attrs:{name:"fas fa-clock"}}),i("div",[e._v(e._s(e.deviceInfo(t.id).ora))]),i("q-space"),!0===e.isAdmin?i("q-btn",{attrs:{dense:"",flat:"",icon:"close"},on:{click:function(t){return e.removeItem(a)}}}):e._e()],1),i("q-card-section",[i("div",{staticClass:"text-h6 text-center"},[e._v(e._s(t.label))])]),i("q-card-section",{staticClass:"text-center"},[i("q-knob",{attrs:{"show-value":"",min:-10,max:50},model:{value:t.DeviceLimit,callback:function(i){e.$set(t,"DeviceLimit",i)},expression:"item.DeviceLimit"}})],1),i("q-card-section",{staticClass:"text-center"},[i("q-btn-toggle",{attrs:{color:"blue-2","text-color":"white","toggle-color":"blue","toggle-text-color":"black",rounded:"",unelevated:"",glossy:"",size:"xs",options:[{label:"On",value:"on"},{label:"Off",value:"off"}]},model:{value:t.DeviceStatus,callback:function(i){e.$set(t,"DeviceStatus",i)},expression:"item.DeviceStatus"}})],1),i("q-card-section",[e._v(e._s(t.description))])],1):e._e()],1)}),0)]),i("q-dialog",{attrs:{persistent:"","full-width":"","transition-show":"flip-down","transition-hide":"flip-up"},model:{value:e.newItemDialog,callback:function(t){e.newItemDialog=t},expression:"newItemDialog"}},[i("q-card",{staticClass:"bg-primary text-white"},[i("q-card-section",{staticClass:"row items-center"},[i("div",{staticClass:"text-h6"},[e._v("Aggiungi Widget")]),i("q-space"),i("q-btn",{attrs:{icon:"close",flat:"",round:"",dense:""},on:{click:function(t){e.newItemDialog=!1}}})],1),i("q-card-section",[i("div",{staticClass:"q-pa-md"},[i("div",{staticClass:"row wrap"},[i("div",{staticClass:"col-auto"},[i("q-btn-dropdown",{staticClass:"glossy",attrs:{color:"grey-1","text-color":"black",label:e.newItem.type||"Tipo Widget",size:"sm"}},[i("q-list",e._l(e.widtgetType,function(t,a){return i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:a,attrs:{clickable:""},on:{click:function(i){return e.setValue("type",t.value)}}},[i("q-item-section",[i("q-item-label",[e._v(e._s(t.label))])],1)],1)}),1)],1)],1),i("div",{staticClass:"col-auto"},[i("q-btn-dropdown",{staticClass:"glossy",attrs:{color:"grey-1","text-color":"black",label:e.newItem.id||"Elemento da controllare",size:"sm"}},[i("q-list",e._l(e.devicesArray,function(t,a){return i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:a,attrs:{clickable:""},on:{click:function(i){return e.setValue("id",t)}}},[i("q-item-section",[i("q-item-label",[e._v(e._s(t))])],1)],1)}),1)],1)],1),i("div",{staticClass:"col-auto"},[i("q-input",{attrs:{dense:"","bg-color":"white",outlined:"",label:"Etichetta"},model:{value:e.newItem.label,callback:function(t){e.$set(e.newItem,"label",t)},expression:"newItem.label"}})],1),i("div",{staticClass:"col-auto"},[i("q-input",{attrs:{dense:"","bg-color":"white",outlined:"",label:"Descrizione"},model:{value:e.newItem.description,callback:function(t){e.$set(e.newItem,"description",t)},expression:"newItem.description"}})],1)]),i("div",{staticClass:"row"},["button"===e.newItem.type||"switch"===e.newItem.type?i("div",{staticClass:"col-auto"},["button"===e.newItem.type||"switch"===e.newItem.type?i("q-btn-dropdown",{staticClass:"glossy",attrs:{color:"grey-1","text-color":"black",label:"Icona ON",icon:e.newItem.iconOn||null,size:"sm"}},[i("q-list",e._l(e.icons,function(t,a){return i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"},{name:"ripple",rawName:"v-ripple"}],key:a,attrs:{clickable:""},on:{click:function(i){return e.setValue("iconOn",t.value)}}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:t.value}})],1),i("q-item-section",[i("q-item-label",[e._v(e._s(t.label))])],1)],1)}),1)],1):e._e()],1):e._e(),"button"===e.newItem.type||"switch"===e.newItem.type?i("div",{staticClass:"col-auto"},["button"===e.newItem.type||"switch"===e.newItem.type?i("q-btn-dropdown",{staticClass:"glossy",attrs:{color:"grey-1","text-color":"black",label:"Icona OFF",icon:e.newItem.iconOff||null,size:"sm"}},[i("q-list",e._l(e.icons,function(t,a){return i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"},{name:"ripple",rawName:"v-ripple"}],key:a,attrs:{clickable:""},on:{click:function(i){return e.setValue("iconOff",t.value)}}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:t.value}})],1),i("q-item-section",[i("q-item-label",[e._v(e._s(t.label))])],1)],1)}),1)],1):e._e()],1):e._e(),"button"===e.newItem.type||"switch"===e.newItem.type?i("div",{staticClass:"col-auto"},[i("q-btn-dropdown",{staticClass:"glossy",attrs:{color:e.newItem.iconOnColor||"grey-1","text-color":"black",label:"Colore Icona ON",icon:e.newItem.iconOn||null,size:"sm"}},[i("q-list",e._l(e.colors,function(t,a){return i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"},{name:"ripple",rawName:"v-ripple"}],key:a,attrs:{clickable:""},on:{click:function(i){return e.setValue("iconOnColor",t.value)}}},[i("q-item-section",{attrs:{avatar:""}},[i("q-avatar",{attrs:{color:t.value,icon:e.newItem.iconOn}})],1),i("q-item-section",[i("q-item-label",[e._v(e._s(t.label))])],1)],1)}),1)],1)],1):e._e(),"button"===e.newItem.type||"switch"===e.newItem.type?i("div",{staticClass:"col-auto"},[i("q-btn-dropdown",{staticClass:"glossy",attrs:{color:e.newItem.iconOffColor||"grey-1","text-color":"black",label:"Colore Icona OFF",icon:e.newItem.iconOff||null,size:"sm"}},[i("q-list",e._l(e.colors,function(t,a){return i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"},{name:"ripple",rawName:"v-ripple"}],key:a,attrs:{clickable:""},on:{click:function(i){return e.setValue("iconOffColor",t.value)}}},[i("q-item-section",{attrs:{avatar:""}},[i("q-avatar",{attrs:{color:t.value,icon:e.newItem.iconOff}})],1),i("q-item-section",[i("q-item-label",[e._v(e._s(t.label))])],1)],1)}),1)],1)],1):e._e(),"termostato"===e.newItem.type?i("div",{staticClass:"col-auto"},[i("q-btn-dropdown",{staticClass:"glossy",attrs:{color:"grey-1","text-color":"black",label:e.newItem.Listener||"Elemento da monitorare",size:"sm"}},[i("q-list",e._l(e.devicesArray,function(t,a){return i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:a,attrs:{clickable:""},on:{click:function(i){return e.setValue("Listener",t)}}},[i("q-item-section",[i("q-item-label",[e._v(e._s(t))])],1)],1)}),1)],1)],1):e._e(),"termostato"===e.newItem.type?i("div",{staticClass:"col-auto"},[i("q-btn-dropdown",{staticClass:"glossy",attrs:{color:"grey-1","text-color":"black",label:e.newItem.ListenerType||"Tipo",size:"sm"}},[i("q-list",e._l(e.listenerTypes,function(t,a){return i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:a,attrs:{clickable:""},on:{click:function(i){return e.setValue("ListenerType",t.label)}}},[i("q-item-section",[i("q-item-label",[e._v(e._s(t.label))])],1)],1)}),1)],1)],1):e._e()])])]),i("q-separator"),i("q-card-actions",[i("q-space"),i("q-btn",{attrs:{flat:""},on:{click:e.addItem}},[e._v("Aggiungi")])],1)],1)],1),i("q-dialog",{attrs:{persistent:"","transition-show":"flip-down","transition-hide":"flip-up"},model:{value:e.loginDialog,callback:function(t){e.loginDialog=t},expression:"loginDialog"}},[i("q-card",{staticClass:"bg-primary text-white"},[i("q-card-section",{staticClass:"row items-center"},[i("div",{staticClass:"text-h6"},[e._v("Accesso Admin")])]),i("q-card-section",{staticClass:"row items-center"},[i("q-input",{attrs:{outlined:"",label:"Admin Password",color:"white",type:"password",hint:"Password"},model:{value:e.insertedPassword,callback:function(t){e.insertedPassword=t},expression:"insertedPassword"}})],1),i("q-card-actions",[i("q-btn",{attrs:{flat:""},on:{click:function(t){return e.login()}}},[e._v("LOGIN")])],1)],1)],1),i("q-page-sticky",{attrs:{position:"bottom-right",offset:[18,18]}},[i("q-fab",{attrs:{fab:"",icon:"fas fa-bars",color:"primary",direction:"up"}},[!0===e.isAdmin?i("q-fab-action",{attrs:{color:"accent",icon:"fas fa-plus"},on:{click:function(t){e.newItemDialog=!0}}}):e._e(),!0===e.isAdmin?i("q-fab-action",{attrs:{color:"warning",icon:"fas fa-save"},on:{click:e.saveItems}}):e._e(),!1===e.isAdmin?i("q-fab-action",{attrs:{color:"info",icon:"fas fa-key"},on:{click:function(t){e.loginDialog=!0}}}):e._e()],1)],1)],1)},s=[],n=(i("ac6a"),i("cadf"),i("456d"),i("6b54"),i("06db"),i("2b0e")),o=(i("2a19"),{name:"PageIndex",mounted:function(){var e=this;this.items=JSON.parse(this.$store.state.defaultModule.items),this.$client.on("message",function(t,i){var a={DeviceName:t.toString(),DeviceValue:i.toString().trim(),ora:e.aggiornaOra()};n["a"].set(e.devices,t.toString(),a)})},created:function(){this.termostatoListener()},data:function(){return{adminpwd:"Simcari0@1",insertedPassword:null,isAdmin:!1,fab:!1,polling:null,items:[],newItemDialog:!1,loginDialog:!1,widtgetType:[{label:"Temperatura",value:"temperatura"},{label:"Switch",value:"switch"},{label:"Button",value:"button"},{label:"Termostato",value:"termostato"}],icons:[{label:"Home",value:"home"},{label:"Power",value:"power_settings_new"},{label:"Sun",value:"wb_sunny"},{label:"Snow",value:"ac_unit"}],colors:[{label:"Primary",value:"primary"},{label:"Secondary",value:"secondary"},{label:"Accent",value:"accent"},{label:"Positive",value:"positive"},{label:"Negative",value:"negative"},{label:"Info",value:"info"},{label:"Warning",value:"warning"}],listenerTypes:[{label:"Estate",value:">"},{label:"Inverno",value:">"}],newItem:{},devices:{}}},methods:{login:function(){this.adminpwd===this.insertedPassword?(this.isAdmin=!0,this.loginDialog=!1,this.insertedPassword=null):(this.loginDialog=!1,this.insertedPassword=null,this.$q.notify({message:"Password errata!",color:"negative",icon:"fas fa-exclamation-triangle"}))},addItem:function(){"termostato"===this.newItem.type&&(this.newItem.DeviceLimit=0,this.newItem.DeviceStatus="off"),this.items.push(this.newItem),this.newItem={},this.newItemDialog=!1},removeItem:function(e){this.items.splice(e,1)},saveItems:function(){this.$store.dispatch("defaultModule/saveItems",this.items),this.$q.notify({message:"Salvataggio completato!",color:"positive",icon:"fas fa-info"})},aggiornaOra:function(){var e=new Date,t=(e.getDate().toString().length<2?e.getDate():e.getDate(),e.getMonth().toString().length<2?e.getMonth():e.getMonth(),e.getFullYear(),e.getHours().toString().length<2?"0"+e.getHours():e.getHours()),i=e.getMinutes().toString().length<2?"0"+e.getMinutes():e.getMinutes(),a=e.getSeconds().toString().length<2?"0"+e.getSeconds():e.getSeconds();return t+":"+i+":"+a},pushEvent:function(e){var t=e+"/status";this.$client.publish(t,"1")},releaseEvent:function(e){var t=e+"/status";this.$client.publish(t,"0")},buttonEvent:function(e){var t=e+"/status";"0"===this.devices[e].DeviceValue?this.$client.publish(t,"1"):this.$client.publish(t,"0")},deviceInfo:function(e){return void 0!==this.devices[e]?this.devices[e]:{DeviceName:null,DeviceValue:null,ora:null}},icon:function(e){var t=this.devices[e.id];if(void 0!==t){if("1"===t.DeviceValue){var i={icon:e.iconOn,color:e.iconOnColor};return i}var a={icon:e.iconOff,color:e.iconOffColor};return a}return{icon:null,color:null}},getItem:function(){return this.newItem},setValue:function(e,t){n["a"].set(this.newItem,e,t)},termostatoListener:function(){var e=this;console.log("LISTENER"),this.polling=setInterval(function(){e.items.forEach(function(t){if("termostato"===t.type&&"on"===t.DeviceStatus){var i=e.devices[t.Listener],a=(e.devices[t.id],parseFloat(i.DeviceValue));"Estate"===t.ListenerType?a>=t.DeviceLimit?(console.log("ALTO"),e.pushEvent(t.id)):(console.log("BASSO"),e.releaseEvent(t.id)):a<t.DeviceLimit?e.pushEvent(t.id):e.releaseEvent(t.id)}})},1e3)}},computed:{devicesArray:function(){var e=this.devices,t=[];return Object.keys(e).forEach(function(e){t.push(e)}),t}},watch:{}}),l=o,c=(i("1bca"),i("04b2"),i("2877")),r=Object(c["a"])(l,a,s,!1,null,"5cf8f253",null);t["default"]=r.exports},ff57:function(e,t,i){}}]);