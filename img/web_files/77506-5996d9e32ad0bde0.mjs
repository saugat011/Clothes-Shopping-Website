(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[77506],{361259:(e,n,t)=>{t.d(n,{$:()=>c,r:()=>m});var a=t(667294),r=t(829407),o=t(497529),i=t(773285),s=t(425288),p=t(785893);const{Provider:d,useHook:c}=(0,s.Z)("PinRep");function m({children:e}){const[n,t]=(0,a.useState)(!0),[s,c]=(0,a.useState)(!1),m=(0,o.Z)(1000069),{checkExperiment:u}=(0,i.F)();(0,r.Z)((()=>{m.triggerExperimentsForPlacement(1000069);const e=u("web_simplify_pin_grid",{dangerouslySkipActivation:!0}).group.includes("enabled");(async()=>{var n,a,r,o;const i=e?await m.fetchAllExperiences():{};i&&i.payload&&500417===(null===(n=i.payload.experiences)||void 0===n||null===(a=n[1000069])||void 0===a?void 0:a.experience_id)&&null!==(r=i.payload.experiences)&&void 0!==r&&null!==(o=r[1000069])&&void 0!==o&&o.display_data.hide_footer||t(!1),c(!0)})()}));const l=(0,a.useMemo)((()=>({hasSimplifiedPinGridExpLoaded:s,hidePinRepFooter:n})),[s,n]);return(0,p.jsx)(d,{value:l,children:e})}},199324:(e,n,t)=>{t.d(n,{Z:()=>a});const a=["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto","Oxygen-Sans","Ubuntu","Cantarell",'"Fira Sans"','"Droid Sans"','"Helvetica Neue"',"Helvetica",'"ヒラギノ角ゴ Pro W3"','"Hiragino Kaku Gothic Pro"',"メイリオ","Meiryo",'"ＭＳ Ｐゴシック"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")},745760:(e,n,t)=>{t.d(n,{Ch:()=>u,nc:()=>v,a:()=>A,ZP:()=>I,cA:()=>T,li:()=>E,h1:()=>c});var a=t(682492),r=t.n(a),o=t(6637),i=t(594881),s=t(706922);var p=t(385740),d=t(172045);const c=()=>1e6*Date.now(),m=[6945,170],u={3829:"articleImpressions",18:"pinImpressions",3700:"boardImpressions",3803:"searchImpressions",170:"storyImpression",3704:"userImpressions"},l=[4700,4701,4702,4703,7042,7043],_=e=>function(e){let n=e.length;for(let t=e.length-1;t>=0;t-=1){const a=e.charCodeAt(t);a>127&&a<=2047?n+=1:a>2047&&a<=65535&&(n+=2),a>=56320&&a<=57343&&(t-=1)}return n}(JSON.stringify(e)),g=e=>m.includes(e);let y;function f(){const e=new Date;y?y&&y.getUTCDate()!==e.getUTCDate()&&(y=e,(0,i.Z)()):y=e}function b(e){return e.reduce(((e,n)=>{const t=e.find((a=n,e=>e.view_type===a.viewType&&e.view_parameter===a.viewParameter&&e.event_type===a.eventType&&e.object_id_str===a.objectIdStr&&(0,s.Z)(e.view_data,a.viewData)));var a;if(t&&!g(n.eventType))n.impressionType in t.event_data?t.event_data[n.impressionType].push(n.eventData):t.event_data[n.impressionType]=[n.eventData];else{const t={event_type:n.eventType,view_parameter:n.viewParameter,view_type:n.viewType,view_data:n.viewData,time:c(),component:n.component,clientUUID:(0,d.Z)(),aux_data:n.auxData||{},appState:n.appState,event_data:{[n.impressionType]:g(n.eventType)?{...n.eventData,...(n.eventData||{})[n.impressionType]}:[n.eventData]},object_id_str:n.objectIdStr||void 0};e.push(t)}return e}),[])}const T=e=>{const n=e.event_type,t=l.includes(n),a=(0,p.BE)();return!(!t&&13!==n&&!a)},E=(e,n)=>{const t=e.event_type,a=l.includes(t),o=(0,p.BE)();return a?e:13===t&&e.view_type?(null==n||n({viewType:e.view_type,viewParameter:e.view_parameter,viewData:null!=o&&o.viewData?r()(o.viewData,e.view_data):r()({},e.view_data)}),e):!o||e.view_type&&e.view_parameter?e:{...e,view_type:o.viewType,view_parameter:o.viewParameter,view_data:e.view_data?r()(e.view_data,o.viewData):r()({},o.viewData)}},v=(e,n)=>{var t,a;const r=e.component,o=e.object_id_str,i=e.view_type,s=e.event_type,p=e.appState;return null!==(t=((null===(a=e.event_data)||void 0===a?void 0:a[n])||[]).map((t=>({auxData:e.aux_data,...r?{component:r}:{},eventData:t,...s?{eventType:s}:{},...i?{viewType:i}:{},viewData:e.view_data,viewParameter:e.view_parameter,...o?{objectIdStr:o}:null,impressionType:n,appState:p}))))&&void 0!==t?t:[]},A=(e,n)=>({...e.component?{component:e.component}:{},...e.object_id_str?{objectIdStr:e.object_id_str}:null,...e.view_type?{viewType:e.view_type}:{},eventType:e.event_type,auxData:e.aux_data,impressionType:n,viewData:e.view_data,viewParameter:e.view_parameter,eventData:e.event_data});function I(){let e=[],n=[],t=0;function a(){return[...e,...b(n)]}function r(){e=[],n=[],t=0}function i(e=!1){const n=a();n.length&&(o.Z.create("ContextLogResource",{events:n,report_time:c()}).callCreate({async:!e,showError:!1}),r(),f())}return{flushContextEvents:i,getContextEvents:a,logContextEvent:function({object_id_str:n,...a}){const r={aux_data:{},event_data:{},view_data:{},...a,time:c(),clientUUID:(0,d.Z)(),...n?{object_id_str:n}:null};r.aux_data=function(e){if(!e)return e;const{element:n,eventData:t,component:a,objectId:r,view:o,viewParameter:i,viewData:s,durationNs:p,pairId:d,clientTrackingParams:c,...m}=e;return m}(r.aux_data),t+_(r)>20480&&i(!1),e.push(r),f()},logImpression:function(e){t+_(e)>20480&&i(!1),n.push(e)},resetEventsBuffer:r}}},66743:(e,n,t)=>{t.d(n,{NC:()=>o,Rc:()=>s,WK:()=>d,X9:()=>r,b9:()=>a,f9:()=>p,gu:()=>i});const a="pin-builder-font-faces",r="system-font-faces",o="pin-builder-education-font-faces",i="licensed",s="system",p="brand",d=4},56528:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(6637);const r=e=>{const n=a.Z.create("ApiResource",{url:"/v3/users/password/",data:e});return e.old?n.callCreate({showError:!1}):n.callUpdate({showError:!1})}},584992:(e,n,t)=>{t.d(n,{Z:()=>I});var a=t(667294),r=t(425288),o=t(198462),i=t(729524),s=t(860273),p=t(169213),d=t(358864),c=t(558775),m=t(505771),u=t(985271),l=t(383434),_=t(543059),g=t(453821),y=t(638089),f=t(607150),b=t(790348);const T=(0,l.X)("PwtStopwatch"),E=(e,n)=>{if(u.Z){if("start"===n.type&&!e.isTiming){const{name:t,startTime:a,navigationType:r}=n;return(0,b.A9)(`TIMING.${t}`),{isTiming:!0,name:t,isSampled:n.isSampled,startTime:"number"==typeof a?a:u.Z.now(),metricId:{type:"stopwatch",name:t,navigationType:r},pwtStaticContext:n.pwtStaticContext,annotations:e.annotations,binaryAnnotations:e.binaryAnnotations,spans:e.spans,traceId:e.traceId,spanNameUpdates:e.spanNameUpdates}}if(!e.isTiming){if(!n.bypassIsTimingCheck){const t=n.name||e.name;return T("ignoring action - stopwatch is not actively timing",n),(0,b.A9)(`WARN.${t}.noTiming.${n.type}`),e}T("allowing action while stopwatch is not actively timing (bypassIsTimingCheck is set to true)",n)}if("annotate"===n.type){const t=u.Z.now();return T(`adding annotation {${n.label}: ${t}}`),{...e,annotations:e.annotations.concat([{label:n.label,timestamp:t}])}}if("binaryAnnotate"===n.type)return T(`adding binary annotation {${n.name}: ${String(n.value)}}`),{...e,binaryAnnotations:{...e.binaryAnnotations,[n.name]:{value:n.value,type:n.annotationType}}};if("binaryAnnotateOperation"===n.type){const{value:t,type:a}=n.binaryAnnotationValueAndType;if(e.binaryAnnotations[n.name]){const r=e.binaryAnnotations[n.name].value||0;return T(`operating on binary annotation {\n          name: ${n.name}\n          pervious value: ${String(r)}\n          operand: ${String(t)}\n        }`),{...e,binaryAnnotations:{...e.binaryAnnotations,[n.name]:{value:t?n.operation(r,t):r,type:a}}}}return{...e,binaryAnnotations:{...e.binaryAnnotations,[n.name]:{value:t,type:a}}}}if("addSubspan"===n.type){T(`adding subspan {${n.name}}`);-1!==e.spans.findIndex((e=>e.name===n.name))&&T(`WARNING: adding duplicate subspan name {${n.name}}`);const t=n.id||(0,d.Z)();-1!==e.spans.findIndex((e=>e.id===t))&&T(`WARNING: adding duplicate subspan id {${n.name}: ${t}}`);let a=0;return n.startTime?a=n.startTime:e.startTime?a=e.startTime:T(`WARNING: adding subspan {${n.name}} without start time`),{...e,spans:[...e.spans,{name:n.name,id:t,startTime:a,endTime:n.endTime||1/0,annotationMap:{...n.annotations},binaryAnnotationMap:{...n.binaryAnnotations},parentId:n.parentId}]}}if("subspanStart"===n.type){var t;T(`starting subspan {${n.name}}`);-1!==e.spans.findIndex((e=>e.name===n.name))&&T(`WARNING: starting duplicate subspan name {${n.name}}`);const a=n.id||(0,d.Z)();-1!==e.spans.findIndex((e=>e.id===a))&&T(`WARNING: starting duplicate subspan id {${n.name}: ${a}}`);const r=n.parentName?null===(t=e.spans.find((e=>e.name===n.parentName)))||void 0===t?void 0:t.id:null;return{...e,spans:[...e.spans,{name:n.name,id:a,parentId:n.parentId||r,startTime:u.Z.now(),endTime:1/0,annotationMap:{...n.annotations},binaryAnnotationMap:{...n.binaryAnnotations}}]}}if("subspanStop"===n.type){if(T(`stopping subspan {${n.name}}`),!n.id){e.spans.reduce(((e,t)=>(t.name===n.name&&e.push(t),e)),[]).length>1&&(0,b.H)("duplicate_subspan_stop_name",{name:n.name,type:n.type})}const t=n.id?e.spans.findIndex((e=>e.id===n.id)):e.spans.findIndex((e=>e.name===n.name));return t>-1?(e.spans[t].endTime=u.Z.now(),n.annotations&&(e.spans[t].annotationMap={...e.spans[t].annotationMap,...n.annotations}),n.binaryAnnotations&&(e.spans[t].binaryAnnotationMap={...e.spans[t].binaryAnnotationMap,...n.binaryAnnotations})):(0,b.H)("invalid_subspan_stop_name",{name:n.name}),e}if("subspanUpdateName"===n.type){e.spans.reduce(((e,t)=>(t.name===n.currentName&&e.push(t),e)),[]).length>1&&(0,b.H)("duplicate_subspan_stop_name",{name:n.currentName,type:n.type});const t=e.spans.findIndex((e=>e.name===n.currentName));return t>-1?n.updateWhenStopwatchCompletes?e.spanNameUpdates=[...e.spanNameUpdates,{currentName:n.currentName,newName:n.newName}]:(T(`renaming subspan {${n.currentName}} to {${n.newName}}`),e.spans[t].name=n.newName):(0,b.H)("no_subspan_found_to_rename",{name:n.currentName}),e}if("stop"===n.type&&e.isTiming){const{startTime:t,metricId:a,pwtStaticContext:r,annotations:o,binaryAnnotations:p,isSampled:l,spans:b,traceId:E}=e;if(n.stopwatchPerformanceObserver&&n.stopwatchPerformanceObserver.disconnect(),l){const l=n.stopTime||u.Z.now(),v=[...b.map((n=>{n.endTime===1/0&&(n.endTime=l);const t=e.spanNameUpdates.findIndex((e=>n.name===e.currentName));return t>-1&&(T(`renaming subspan {${n.name}} to {${e.spanNameUpdates[t].newName}}`),n.name=e.spanNameUpdates[t].newName,e.spanNameUpdates=e.spanNameUpdates.filter((e=>e.newName!==n.name))),n}))];if(n.manualAndResourceSpans||0===b.length){const e=(0,d.Z)();v.push({name:"network_resources",id:e,startTime:t,endTime:l,annotationMap:{},binaryAnnotationMap:{},parentId:null},...(n.customStopwatchBuffer||[]).map((n=>(0,m.Z)((0,g.p)(n,[]),e))).filter(Boolean))}const A="initial_app_load"===a.navigationType&&(0,s.Z)(),I={type:"COMPLETE",traceId:E,startTime:t,endTime:l,spans:v,annotationMap:{...(0,i.Z)(o),...(0,f.jh)("browser_",A?(0,f.D3)(A):{}),...(0,f.jh)("mark_",(0,_.gQ)())},binaryAnnotationMap:(0,y.ng)({metricId:a,pwtStaticContext:r,binaryAnnotations:p,performanceResourceTimings:n.customStopwatchBuffer||[]})};(0,c.Z)({metricId:a,pwtStaticContext:r,result:I})}return{isTiming:!1,name:e.name,annotations:[],binaryAnnotations:{},spans:[],traceId:(0,d.Z)(),spanNameUpdates:[]}}if("error"===n.type){const{error:t,stopwatchPerformanceObserver:a}=n;return t&&(0,b.H)(t),a&&a.disconnect(),{isTiming:!1,name:e.name,annotations:[],binaryAnnotations:{},spans:[],traceId:(0,d.Z)(),spanNameUpdates:[]}}if("abort"===n.type&&e.isTiming){n.stopwatchPerformanceObserver&&n.stopwatchPerformanceObserver.disconnect();const{metricId:t,pwtStaticContext:a}=e,r=n.reason||"";return(0,c.Z)({metricId:t,pwtStaticContext:a,result:{type:"ABORT",reason:r}}),{isTiming:!1,name:e.name,annotations:[],binaryAnnotations:{},spans:[],traceId:(0,d.Z)(),spanNameUpdates:[]}}}return e},v=({name:e,sampleRate:n,navigationType:t,manualAndResourceSpans:r=!1})=>{const i=(0,o.N5)(),s=(0,a.useRef)([]),c=(0,a.useRef)(null),[m,u]=(0,a.useReducer)(E,{isTiming:!1,name:e,annotations:[],binaryAnnotations:{},spans:[],traceId:(0,d.Z)(),spanNameUpdates:[]});return i?{isTiming:m.isTiming,start:a=>{if(window.PerformanceObserver){const e=1e3;s.current=[],c.current=(0,p.Z)({entryTypes:["resource"]},(n=>{s.current=s.current.concat(n.getEntries()),s.current.length>e&&(s.current=s.current.slice(-e))}))}const r={type:"start",startTime:a,name:e,navigationType:t,pwtStaticContext:i,isSampled:!n||Math.random()<n};return u(r)},stop:e=>u({type:"stop",stopTime:e,stopwatchPerformanceObserver:c.current,customStopwatchBuffer:s.current,manualAndResourceSpans:r}),error:e=>{u({type:"error",stopwatchPerformanceObserver:c.current,error:e})},abort:e=>u({type:"abort",stopwatchPerformanceObserver:c.current,customStopwatchBuffer:s.current,reason:e}),annotate:(e,n,t=!1)=>u({type:"annotate",label:e,parentId:n,bypassIsTimingCheck:t}),binaryAnnotate:(e,n,t,a,r=!1)=>u({type:"binaryAnnotate",name:e,value:n,annotationType:t,parentId:a,bypassIsTimingCheck:r}),binaryAnnotateOperation:({name:e,binaryAnnotationValueAndType:n,operation:t,parentId:a,bypassIsTimingCheck:r=!1})=>u({type:"binaryAnnotateOperation",name:e,binaryAnnotationValueAndType:n,operation:t,parentId:a,bypassIsTimingCheck:r}),addSubspan:({name:e,startTime:n,endTime:t,annotations:a={},binaryAnnotations:r={},parentId:o=null,id:i=null,bypassIsTimingCheck:s=!1})=>u({type:"addSubspan",name:e,startTime:n,endTime:t,annotations:a,binaryAnnotations:r,parentId:o,id:i,bypassIsTimingCheck:s}),subspanStart:({name:e,annotations:n={},binaryAnnotations:t={},parentId:a=null,parentName:r=null,id:o=null,bypassIsTimingCheck:i=!1})=>u({type:"subspanStart",name:e,annotations:n,binaryAnnotations:t,parentId:a,parentName:r,id:o,bypassIsTimingCheck:i}),subspanStop:({name:e,annotations:n,binaryAnnotations:t,id:a,parentId:r,bypassIsTimingCheck:o=!1})=>u({type:"subspanStop",name:e,annotations:n,binaryAnnotations:t,id:a,parentId:r,bypassIsTimingCheck:o}),subspanUpdateName:({currentName:e,newName:n,bypassIsTimingCheck:t,updateWhenStopwatchCompletes:a=!0})=>u({type:"subspanUpdateName",currentName:e,newName:n,bypassIsTimingCheck:t,updateWhenStopwatchCompletes:a}),getSpans:(e,n)=>m.spans.filter((t=>t[e]===n)),getTraceId:()=>m.traceId}:null};var A=t(785893);const I=({name:e,sampleRate:n,abortOnUnloadOrClientNavigation:t=!0,navigationType:i,manualAndResourceSpans:s=!1})=>{const{Provider:p,useMaybeHook:d}=(0,r.Z)(`Stopwatch_${e}`);return{Provider:function({children:r}){const d=v({name:e,sampleRate:n,navigationType:i,manualAndResourceSpans:s}),c=(0,o.fM)(),m=c?c.time:0,u=(0,a.useRef)(!1),l=null==d?void 0:d.isTiming,_=(0,a.useCallback)((n=>{u.current?(u.current=!1,null==d||d.abort(n)):(0,b.A9)(`WARN.${e}.noTiming.abort`)}),[d]),g=(0,a.useCallback)(((e,n)=>{null==d||d.annotate(e,n)}),[d]),y=(0,a.useCallback)(((e,n,t,a)=>{null==d||d.binaryAnnotate(e,n,t,a)}),[d]),f=(0,a.useCallback)((({name:e,binaryAnnotationValueAndType:n,operation:t,parentId:a,bypassIsTimingCheck:r})=>{null==d||d.binaryAnnotateOperation({name:e,binaryAnnotationValueAndType:n,operation:t,parentId:a,bypassIsTimingCheck:r})}),[d]),T=(0,a.useCallback)((({name:e,startTime:n,endTime:t,annotations:a,binaryAnnotations:r,parentId:o,id:i,bypassIsTimingCheck:s})=>{null==d||d.addSubspan({name:e,startTime:n,endTime:t,annotations:a,binaryAnnotations:r,parentId:o,id:i,bypassIsTimingCheck:s})}),[d]),E=(0,a.useCallback)((({name:e,annotations:n,binaryAnnotations:t,parentId:a,parentName:r,id:o,bypassIsTimingCheck:i})=>{null==d||d.subspanStart({name:e,annotations:n,binaryAnnotations:t,parentId:a,parentName:r,id:o,bypassIsTimingCheck:i})}),[d]),I=(0,a.useCallback)((({name:e,annotations:n,binaryAnnotations:t,id:a,parentId:r,bypassIsTimingCheck:o})=>{null==d||d.subspanStop({name:e,annotations:n,binaryAnnotations:t,id:a,parentId:r,bypassIsTimingCheck:o})}),[d]),C=(0,a.useCallback)((({currentName:e,newName:n,bypassIsTimingCheck:t,updateWhenStopwatchCompletes:a})=>{null==d||d.subspanUpdateName({currentName:e,newName:n,bypassIsTimingCheck:t,updateWhenStopwatchCompletes:a})}),[d]),h=(0,a.useCallback)(((e,n)=>d?d.getSpans(e,n):[]),[d]),N=(0,a.useCallback)((()=>d?d.getTraceId():0),[d]),w=(0,a.useCallback)((n=>{u.current?(u.current=!1,null==d||d.error(n)):(0,b.A9)(`WARN.${e}.noTiming.error`)}),[d]),R=(0,a.useCallback)((e=>{u.current&&(null==d||d.abort("duplicated_init_stopwatch_action")),u.current=!0,null==d||d.start(e)}),[d]),D=(0,a.useCallback)((n=>{u.current?(u.current=!1,null==d||d.stop(n)):(0,b.A9)(`WARN.${e}.noTiming.stop`)}),[d]);(0,a.useEffect)((()=>()=>{t&&_("unloadOrClientNavigation")}),[m]);const S=(0,a.useMemo)((()=>({isTiming:l,abort:_,addAnnotation:g,addBinaryAnnotation:y,binaryAnnotationOperation:f,addSubspan:T,subspanStart:E,subspanStop:I,getSpans:h,getTraceId:N,updateSubspanName:C,stop:D,error:w,start:R})),[l,_,g,y,f,T,E,I,h,N,C,D,w,R]);return(0,A.jsx)(p,{value:S,children:r})},useHook:d}}},729524:(e,n,t)=>{t.d(n,{Z:()=>a});const a=e=>{let n={};e.forEach((({label:e,timestamp:t})=>{n={...n,[e]:(n[e]||[]).concat([t])}}));let t=Object.freeze({});return Object.keys(n).forEach((e=>{(n[e]||[]).forEach(((n,a)=>{const r=a?`${e}_${a+1}`:e;t={...t,[r]:n}}))})),t}},224496:(e,n,t)=>{t.d(n,{Cc:()=>m,Gf:()=>l,LX:()=>r,Rf:()=>p,YL:()=>s,ap:()=>o,h8:()=>c,kF:()=>_,pE:()=>d,s5:()=>u,yR:()=>i});var a=t(883119);const r={w:9,h:16},o=r.w/r.h,i=8,s=10,p=5e3;function d(e,n=1){return{x:(null!=e?e:24)/5,y:(null!=e?e:24)*(n-1)}}const c={COMMENT_REPLY_STICKER:"story_pin_comment_reply_block",GENERIC_STICKER:"story_pin_generic_interactive_sticker_block",HEADING:"story_pin_heading_block",IMAGE:"story_pin_image_block",INGREDIENT:"story_pin_ingredient_block",LINK:"story_pin_link_block",MENTION_STICKER:"story_pin_mention_sticker_block",MUSIC:"story_pin_music_block",PARAGRAPH:"story_pin_paragraph_block",PRODUCT_STICKER:"story_pin_product_sticker_block",SUPPLY:"story_pin_supply_block",VIDEO:"story_pin_video_block",VTO_MAKEUP_STICKER:"story_pin_virtual_try_on_makeup_sticker_block"},m={alignment:1,hex_color:"#111111",highlight_color:"#FFFFFF",vertical_alignment:1,font:{default_size:28,id:"1",key:"Graphik-Regular.otf",letter_spacing:-.4,line_height:1.25,name:"Teaspoon",url:"https://s.pinimg.com/story_pins/fonts/Graphik-Regular.otf"},font_size:28},u=new a.Ry(5),l=new a.H3([u]),_=new a.H3([l])},139405:(e,n,t)=>{t.d(n,{pb:()=>f,nf:()=>b,lV:()=>T});var a=t(667294),r=t(6637),o=t(618446),i=t.n(o),s=t(682492),p=t.n(s);const d={feature_map:Object.freeze({})},c=(e,n)=>{const t={...p()({},e,n),...n.content?{content:n.content}:Object.freeze({}),...n.reaction_counts?{reaction_counts:n.reaction_counts}:Object.freeze({}),...n.tags?{tags:n.tags}:Object.freeze({}),...n.tagged_users?{tagged_users:n.tagged_users}:Object.freeze({})};return i()(e,t)?e:t},m=(e=d,n)=>{if("FETCH_COMPLETE"===n.type){const{payload:{resource:t}}=n,a=n.payload.response.resource_response.data;if("AggregatedCommentFeedResource"===t||"AggregatedCommentReplyFeedResource"===t||"DidItCommentsResource"===t){const n=(a||[]).reduce(((n,t)=>(n[t.id]=c(e[t.id],t),n)),{});return{...e,...n}}if("UnifiedCommentsResource"===t&&a&&a.length>0){const n=a.filter((e=>"aggregatedcomment"===e.type)).reduce(((n,t)=>(n[t.id]=c(e[t.id],t),n)),{});return{...e,...n}}if("UnifiedCommentsPreviewResource"===t&&a&&a.length>0){const n=a[0].aggregated_comment,t=n?{[n.id]:c(e[n.id],n)}:{},r=a[0].creator_reply,o=r?{[r.id]:c(e[r.id],r)}:{};return{...e,...t,...o}}if("AggregatedCommentFeaturesResource"===t&&a&&Object.keys(a).length>0)return{...e,feature_map:a}}else{if("AGGREGATED_COMMENT_CREATED"===n.type){const{payload:{aggregatedComment:t}}=n;return t.id?{...e,[t.id]:t}:e}if("AGGREGATED_COMMENT_DELETED"===n.type||"AGGREGATED_COMMENT_HIDDEN"===n.type){const{payload:{aggregatedCommentId:t}}=n,a={...e};return delete a[t],a}if("AGGREGATED_COMMENT_HIDDEN_FOR_USER"===n.type){const{payload:{userId:t}}=n;return Object.fromEntries(Object.entries(e).filter((e=>{var n;return(null===(n=e[1].user)||void 0===n?void 0:n.id)!==t})))}if("AGGREGATED_COMMENT_UPDATED"===n.type){const{payload:{data:t}}=n;return{...e,[t.id]:c(e[t.id],t)}}if("AGGREGATED_COMMENT_LIKE_TOGGLED"===n.type){const{payload:{data:t}}=n,a=e[t.id],r=a.reaction_counts[1]||0,o={1:t.reaction_by_me?r+1:r-1},i={...a,reaction_by_me:t.reaction_by_me,reaction_counts:o};return{...e,[t.id]:i}}if("AGGREGATED_COMMENT_HELPFUL_TOGGLED"===n.type){const{payload:{data:t}}=n,a=e[t.id],r=a.helpful_count||0,o=t.marked_helpful_by_me?r+1:r-1,i={...a,marked_helpful_by_me:t.marked_helpful_by_me,helpful_count:o};return{...e,[t.id]:i}}if("AGGREGATED_COMMENT_HIGHLIGHT_TOGGLED"===n.type){const{payload:{data:t}}=n,a={...e[t.aggregated_comment_id],highlighted_by_pin_owner:t.is_highlighted};return{...e,[t.aggregated_comment_id]:a}}if("AGGREGATED_COMMENT_FEATURES_UPDATED"===n.type){const{payload:{data:{featureMap:t}}}=n;return{...e,feature_map:{...e.feature_map,...t}}}if("UPDATE_AGGREGATED_COMMENT_COMMENT_COUNT"===n.type){const{payload:{increment:t,id:a}}=n,r=e[a],o={...r,comment_count:r.comment_count+t};return{...e,[a]:o}}if("DELETE_COMMENT_MENTION"===n.type){const{payload:{aggregatedCommentId:t,tagged_users:a}}=n,r={...e[t],tagged_users:a};return{...e,[t]:r}}}return e};var u=t(425288),l=t(505920),_=t(785893);const{Provider:g,useHook:y}=(0,u.Z)("AggregatedComments");function f({children:e}){const[n,t]=(0,a.useReducer)(m,d),r=e=>{t({type:"FETCH_COMPLETE",payload:e})};(0,l.Z8)("AggregatedCommentFeaturesResource",r),(0,l.my)("AggregatedCommentFeaturesResource",r),(0,l.Z8)("AggregatedCommentFeedResource",r),(0,l.my)("AggregatedCommentFeedResource",r),(0,l.Z8)("AggregatedCommentReplyFeedResource",r),(0,l.my)("AggregatedCommentReplyFeedResource",r),(0,l.Z8)("DidItCommentsResource",r),(0,l.my)("DidItCommentsResource",r),(0,l.Z8)("UnifiedCommentsPreviewResource",r),(0,l.my)("UnifiedCommentsPreviewResource",r),(0,l.Z8)("UnifiedCommentsResource",r),(0,l.my)("UnifiedCommentsResource",r);const o=(0,a.useMemo)((()=>({aggregatedComments:n,dispatch:t})),[n,t]);return(0,_.jsx)(g,{value:o,children:e})}function b(){const{dispatch:e}=y();return(0,a.useMemo)((()=>({aggregatedCommentCreated(n,t){e({type:"AGGREGATED_COMMENT_CREATED",payload:{parentId:n,aggregatedComment:t}})},aggregatedCommentDeleted:(n,t)=>{e({type:"AGGREGATED_COMMENT_DELETED",payload:{parentId:n,aggregatedCommentId:t}})},aggregatedCommentHidden:n=>{e({type:"AGGREGATED_COMMENT_HIDDEN",payload:{aggregatedCommentId:n}})},aggregatedCommentsHiddenForUser:n=>{e({type:"AGGREGATED_COMMENT_HIDDEN_FOR_USER",payload:{userId:n}})},flagAggregatedComment:async({commentId:e,reason:n,detailedReasons:t})=>{const a={commentId:e,reason:n,detailedReasons:t};return r.Z.create("AggregatedCommentFlagResource",a).callCreate()},deleteCommentMention:async n=>{var t;const{resource_response:a}=await r.Z.create("MentionsResource",{aggregatedCommentId:n,field_set_key:"comment"}).callDelete(),o=null!==(t=null==a?void 0:a.data)&&void 0!==t?t:{};e({type:"DELETE_COMMENT_MENTION",payload:{aggregatedCommentId:o.id,tagged_users:o.tagged_users}})},toggleAggregatedCommentHelpful:({aggregatedCommentId:n,isMarkedHelpfulByMe:t})=>{const a=r.Z.create("HelpfulResource",{helpfulModelType:1,objectId:n});t?a.callDelete({showError:!1}):a.callCreate({showError:!1}),e({type:"AGGREGATED_COMMENT_HELPFUL_TOGGLED",payload:{data:{id:n,marked_helpful_by_me:!t}}})},toggleAggregatedCommentHighlight:async({aggregatedCommentId:n,pinId:t,isHighlighted:a})=>{const o=r.Z.create("AggregatedCommentHighlightResource",{aggregatedCommentId:n,pinId:t});a?await o.callDelete({showError:!1}):await o.callCreate({showError:!1}),e({type:"AGGREGATED_COMMENT_HIGHLIGHT_TOGGLED",payload:{data:{aggregated_comment_id:n,pin_id:t,is_highlighted:!a}}})},toggleAggregatedCommentLike:({aggregatedCommentId:n,isLikedByMe:t})=>{const a=r.Z.create("AggregatedCommentLikeResource",{aggregatedCommentId:n});t?a.callDelete({showError:!1}):a.callCreate({showError:!1}),e({type:"AGGREGATED_COMMENT_LIKE_TOGGLED",payload:{data:{id:n,reaction_by_me:t?0:1}}})},updateAggregatedComment:async({commentId:n,force:t,orbacSubjectId:a,tags:o,text:i})=>{var s;const{resource_response:p}=await r.Z.create("AggregatedCommentResource",{commentId:n,force:t,tags:o,text:i,...a?{orbacSubjectId:a}:{}}).callUpdate({showError:!1}),{tagged_users:d}=null!==(s=null==p?void 0:p.data)&&void 0!==s?s:{},c=d.map((e=>({...e})));e({type:"AGGREGATED_COMMENT_UPDATED",payload:{data:{id:n,tagged_users:c,tags:JSON.parse(o),text:i}}})},updateAggregatedCommentFeatures:async({userId:n,featureMap:t})=>{var a;const{resource_response:o}=await r.Z.create("AggregatedCommentFeaturesResource",{userId:n,featureMap:t}).callUpdate({showError:!1}),i=null!==(a=null==o?void 0:o.data)&&void 0!==a?a:Object.freeze({});e({type:"AGGREGATED_COMMENT_FEATURES_UPDATED",payload:{data:{featureMap:i}}})},updateCommentCount:(n,t)=>{e({type:"UPDATE_AGGREGATED_COMMENT_COMMENT_COUNT",payload:{increment:t,id:n}})}})),[e])}function T(){const{aggregatedComments:e}=y();return e}},550448:(e,n,t)=>{t.d(n,{e:()=>r,p:()=>o});var a=t(425288);const{Provider:r,useHook:o}=(0,a.Z)("headerButtonContext")},924114:(e,n,t)=>{t.d(n,{H8:()=>l,Ut:()=>u,fr:()=>m});var a=t(667294),r=t(839377),o=t(311541),i=t(425288),s=t(785893);const p=()=>t.e(67891).then(t.bind(t,367891)),{Provider:d,useHook:c}=(0,i.Z)("IdeaPin");function m({children:e}){const[n,t]=(0,o.Z)(p,r.Z),i=(0,a.useMemo)((()=>({dispatch:t,ideaPin:n})),[t,n]);return(0,s.jsx)(d,{value:i,children:e})}function u(){const{dispatch:e}=c();return(0,a.useMemo)((()=>({setIdeaPinActivePage:n=>{e({type:"IDEA_PIN_ACTIVE_PAGE",payload:{activePage:n}})},setIdeaPinDynamicWidth:n=>{e({type:"IDEA_PIN_DYNAMIC_WIDTH",payload:{dynamicWidth:n}})}})),[e])}function l(){const{ideaPin:e}=c();return e}},839377:(e,n,t)=>{t.d(n,{Z:()=>a});const a={activePage:0,dynamicWidth:0}},878552:(e,n,t)=>{t.d(n,{P:()=>u,Q:()=>m});var a=t(667294),r=t(784590);const o=()=>(0,r.Z)({name:"ApiResource",options:{url:"/v3/users/me/",data:{fields:["user.full_name","user.email","user.is_name_eligible_for_lead_form_autofill","user.is_email_eligible_for_lead_form_autofill"]}}});var i=t(425288);const s={fullName:"",email:"",phoneNumber:"",zipCode:"",formSubmissions:{}};function p(e=s,n){switch(n.type){case"AUTOFILL_LEADGEN_USER_INFO":return{...e,fullName:n.payload.fullName,email:n.payload.email};case"SET_LEADGEN_USER_INFO":return{...e,formSubmissions:n.payload.formSubmissions};default:return e}}var d=t(785893);const{Provider:c,useHook:m}=(0,i.Z)("LeadGen");function u({children:e}){const{isLoaded:n,data:t}=o(),[r,i]=(0,a.useReducer)(p,s),m=(0,a.useCallback)((e=>i({type:"SET_LEADGEN_USER_INFO",payload:e})),[]);(0,a.useEffect)((()=>{if(n){const e={...s,fullName:null!=t&&t.is_name_eligible_for_lead_form_autofill?t.full_name:"",email:null!=t&&t.is_email_eligible_for_lead_form_autofill?t.email:""};i({type:"AUTOFILL_LEADGEN_USER_INFO",payload:e})}}),[n,t]);const u=(0,a.useMemo)((()=>({updateLeadGenInfo:m,leadGen:r})),[m,r]);return(0,d.jsx)(c,{value:u,children:e})}},94089:(e,n,t)=>{t.d(n,{G:()=>u,Kl:()=>l,vo:()=>m});var a=t(667294),r=t(311541),o=t(425288),i=t(505920),s=t(785893);const p=()=>t.e(18870).then(t.bind(t,218870)),{Provider:d,useHook:c}=(0,o.Z)("NativeEngagements");function m({children:e}){const[n,t]=(0,r.Z)(p,[]),o=e=>{t({type:"FETCH_COMPLETE",payload:e})};(0,i.Z8)("NativeInteractionsResource",o),(0,i.my)("NativeInteractionsResource",o);const c=(0,a.useMemo)((()=>({dispatch:t,nativeEngagements:n})),[t,n]);return(0,s.jsx)(d,{value:c,children:e})}function u(){const{dispatch:e}=c();return(0,a.useMemo)((()=>({nativeEngagementsHiddenForUser:n=>{e({type:"NATIVE_ENGAGEMENT_HIDDEN_FOR_USER",payload:{userId:n}})}})),[e])}function l(){const{nativeEngagements:e}=c();return e}},205992:(e,n,t)=>{t.d(n,{Cp:()=>l,GT:()=>p,V6:()=>i,W6:()=>_,_L:()=>u,fm:()=>s,hT:()=>d});var a=t(56528),r=t(6637),o=t(379725);function i(e,n){return{type:"UPDATE_USER_SOCIAL_NETWORK",payload:{socialNetworkName:e,connected:n}}}const s=e=>({type:"USER_DOMAIN_VERIFIED",payload:{verifiedWebsite:e}}),p=e=>({type:"USER_DOMAIN_UNVERIFIED",payload:{verifiedWebsite:e}});function d(e){return{type:"UPDATE_HAS_QUICKSAVE_BOARD",payload:{createdQuicksaveBoard:e}}}const c=(e,n,t)=>a=>{a({type:"USER_SETTING_CHANGE",payload:{id:e,field:n,value:t}})},m=e=>{const n=e.split(" ");return{first_name:n[0],last_name:n[1]}},u=({field:e,value:n,onSettingSavedHn:t,showErrorHn:a,surfaceTag:i,userId:s})=>(p,d)=>{const u=d().users[s],l={user_id:s,surface_tag:i};if("full_name"===e)if(u.is_partner)l.business_name=n;else{const e=m(n);l.first_name=e.first_name,l.last_name=e.last_name||""}else l[e]=n;r.Z.create("UserSettingsResource",l).callUpdate().then((()=>{if("profile_image_url"===e)p((0,o.b)("UserResource",{options:l}));else if("full_name"===e)if(u.is_partner)p(c(s,"first_name",n));else{const e=m(n);p(c(s,"first_name",e.first_name)),p(c(s,"last_name",e.last_name))}!u.is_partner||"account_type"!==e&&"contact_name"!==e?p(c(s,e,n)):p(((e,n,t)=>a=>{a({type:"USER_PARTNER_SETTING_CHANGE",payload:{id:e,field:n,value:t}})})(s,e,n)),t()}),a)},l=(e,n,t,r,o)=>()=>{(0,a.Z)({new:n,new_confirm:t,old:e}).then(r,o)},_=(e,n,t,a,o,i)=>s=>{s(c(e,`${n}.${t}`,a));let p={},d="EmailSettingsResource";void 0!==o?(p={section:n,option:t,value:a,od:o.od,user_id:o.user_id},d="UnsubEmailSettingsResource"):p={section:n,option:t,value:a},r.Z.create(d,p).callUpdate().then(i).catch((()=>s(c(e,`${n}.${t}`,!a))))}},829084:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(66743);function r(e){var n;return{defaultStyle:0,fontFamily:null!==(n=e.name)&&void 0!==n?n:"",fontGroup:a.gu,fontOverrides:{letterSpacing:e.letter_spacing,lineHeight:e.line_height},format:"truetype",id:e.id,styles:[{fontStyle:"",fontUrl:e.url,fontWeight:"normal",name:"normal"}]}}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/77506-5996d9e32ad0bde0.mjs.map