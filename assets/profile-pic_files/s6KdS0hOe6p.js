;/*FB_PKG_DELIM*/

__d("LSGetParentThreadKey",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[],d=[];return b.sequence([function(e){return b.sequence([function(d){return b.db.table(9).fetch([[[a[0]]]]).next().then(function(a,d){var e=a.done;a=a.value;return e?c[0]=b.i64.cast([0,0]):(d=a.item,c[0]=d.parentThreadKey)})},function(a){return d[0]=c[0]}])},function(a){return b.resolve(d)}])}e.exports=a}),null);
__d("LSUpdateFolderThreadSnippet",["LSArrayGetObjectAt","LSGetThreadParticipantDisplayName","LSGetViewerFBID"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1],d=[],e=[];return c.sequence([function(e){return c.sequence([function(e){return c.i64.eq(a[0],c.i64.cast([-1,4294967284]))&&!1?c.sequence([function(e){return c.i64.eq(a[0],c.i64.cast([-1,4294967284]))&&!1?c.sequence([function(e){return c.i64.neq(a[1],void 0)?c.resolve(d[3]=a[1]):c.sequence([function(b){return d[4]=c.createArray(),c.forEach(c.islc(c.db.table(9).fetchDesc([[[a[0]]],"parentThreadKeyLastActivityTimestampMs"]),0,c.i64.to_float(c.i64.cast([0,20]))),function(a){a=a.item;return d[7]=(d[4].push(a.threadKey),d[4])})},function(a){return c.sequence([function(a){return d[7]=c.createArray(),d[8]=c.i64.of_int32(d[4].length),c.i64.gt(d[8],c.i64.cast([0,0]))?c.loopAsync(d[8],function(a){return d[10]=a,c.sequence([function(a){return c.nativeTypeOperation("Array",b("LSArrayGetObjectAt"),d[4],d[10]).then(function(a){return a=a,d[11]=a[0],d[12]=a[1],a})},function(a){return d[13]=(d[7].push(c.i64.to_string(d[11])),d[7])}])}):c.resolve()},function(a){return d[9]=d[7].join(","),d[5]=d[9]}])},function(a){return c.count(c.filter(c.db.table(9).fetch(),function(a){return d[4].some(function(b){return c.i64.eq(a.threadKey,b)})&&c.i64.lt(a.lastReadWatermarkTimestampMs,a.lastActivityTimestampMs)&&!0&&!0})).then(function(a){return d[6]=a})},function(a){return d[3]=d[6]}])},function(a){return d[1]=d[3]}]):c.sequence([function(b){return c.i64.neq(a[1],void 0)?c.resolve(d[3]=a[1]):c.sequence([function(b){return c.count(c.filter(c.db.table(9).fetch([[[a[0]]],"parentThreadKeyLastActivityTimestampMs"]),function(b){return c.i64.eq(b.parentThreadKey,a[0])&&c.i64.lt(b.lastReadWatermarkTimestampMs,b.lastActivityTimestampMs)})).then(function(a){return d[4]=a})},function(a){return d[3]=d[4]}])},function(a){return d[1]=d[3]}])},function(e){return c.i64.eq(d[1],c.i64.cast([0,0]))?c.sequence([function(b){return d[3]=c.createArray(),c.forEach(c.islc(c.db.table(9).fetchDesc([[[a[0]]],"parentThreadKeyLastActivityTimestampMs"]),0,c.i64.to_float(c.i64.cast([0,20]))),function(a){a=a.item;return d[8]=(d[3].push(a.threadKey),d[3])})},function(a){return c.sequence([function(a){return d[8]=c.createArray(),d[9]=c.i64.of_int32(d[3].length),c.i64.gt(d[9],c.i64.cast([0,0]))?c.loopAsync(d[9],function(a){return d[11]=a,c.sequence([function(a){return c.nativeTypeOperation("Array",b("LSArrayGetObjectAt"),d[3],d[11]).then(function(a){return a=a,d[12]=a[0],d[13]=a[1],a})},function(a){return d[14]=(d[8].push(c.i64.to_string(d[12])),d[8])}])}):c.resolve()},function(a){return d[10]=d[8].join(","),d[4]=d[10]}])},function(a){return c.storedProcedure(b("LSGetViewerFBID")).then(function(a){return a=a,d[5]=a[0],a})},function(a){return c.count(c.filter(c.db.table(9).fetch(),function(a){return d[3].some(function(b){return c.i64.eq(a.threadKey,b)})&&c.i64.eq(a.lastReadWatermarkTimestampMs,a.lastActivityTimestampMs)&&c.i64.neq(a.snippetSenderContactId,d[5])&&a.isAdminSnippet===!1})).then(function(a){return d[6]=a})},function(e){return c.i64.eq(c.i64.cast([0,0]),d[6])?c.resolve((d[8]=a[2].get("all_read"),a[2],d[7]=d[8])):c.sequence([function(b){return d[8]=c.createArray(),c.forEach(c.islc(c.db.table(9).fetchDesc([[[a[0]]],"parentThreadKeyLastActivityTimestampMs"]),0,c.i64.to_float(c.i64.cast([0,20]))),function(a){a=a.item;return d[19]=(d[8].push(a.threadKey),d[8])})},function(a){return c.sequence([function(a){return d[19]=c.createArray(),d[20]=c.i64.of_int32(d[8].length),c.i64.gt(d[20],c.i64.cast([0,0]))?c.loopAsync(d[20],function(a){return d[22]=a,c.sequence([function(a){return c.nativeTypeOperation("Array",b("LSArrayGetObjectAt"),d[8],d[22]).then(function(a){return a=a,d[23]=a[0],d[24]=a[1],a})},function(a){return d[25]=(d[19].push(c.i64.to_string(d[23])),d[19])}])}):c.resolve()},function(a){return d[21]=d[19].join(","),d[9]=d[21]}])},function(a){return c.storedProcedure(b("LSGetViewerFBID")).then(function(a){return a=a,d[10]=a[0],a})},function(a){return c.islc(c.filter(c.db.table(9).fetchDesc([[[]],"lastActivityTimestampMs"]),function(a){return d[8].some(function(b){return c.i64.eq(a.threadKey,b)})&&c.i64.eq(a.lastReadWatermarkTimestampMs,a.lastActivityTimestampMs)&&c.i64.neq(a.snippetSenderContactId,d[10])&&a.isAdminSnippet===!1}),0,c.i64.to_float(c.i64.cast([0,1]))).next().then(function(a,b){var e=a.done;a=a.value;return e?(e=["",c.i64.cast([-1,4294967295])],d[11]=e[0],d[12]=e[1],e):(b=a.item,e=[b.snippet,b.threadKey],d[11]=e[0],d[12]=e[1],e)})},function(a){return c.storedProcedure(b("LSGetViewerFBID")).then(function(a){return a=a,d[14]=a[0],a})},function(a){return c.islc(c.db.table(14).fetch([[[d[12],{gt:d[14]}],[d[12],{lt:d[14]}]]]),0,c.i64.to_float(c.i64.cast([0,1]))).next().then(function(a,b){var e=a.done;a=a.value;return e?d[15]=c.i64.cast([-1,4294967295]):(b=a.item,d[15]=b.contactId)})},function(a){return c.storedProcedure(b("LSGetThreadParticipantDisplayName"),d[12],d[15]).then(function(a){return a=a,d[17]=a[0],a})},function(a){return c.i64.eq(d[6],c.i64.cast([0,1]))?c.sequence([function(a){return d[19]=c.createArray(),d[21]=(d[19].push(d[17]),d[19]),c.localizeV2Async(c.i64.cast([0,1907280305]),d[19]).then(function(a){return d[20]=a})},function(a){return d[18]=d[20]}]):c.sequence([function(a){return d[19]=c.createArray(),d[21]=(d[19].push(d[17]),d[19]),c.localizeV2Async(c.i64.cast([0,1112375422]),d[19]).then(function(a){return d[20]=a})},function(a){return d[18]=d[20]}])},function(a){return d[7]=d[18]}])},function(a){return d[2]=d[7]}]):c.sequence([function(e){return c.i64.eq(d[1],c.i64.cast([0,1]))?c.sequence([function(b){return d[4]=c.createArray(),c.forEach(c.islc(c.db.table(9).fetchDesc([[[a[0]]],"parentThreadKeyLastActivityTimestampMs"]),0,c.i64.to_float(c.i64.cast([0,20]))),function(a){a=a.item;return d[10]=(d[4].push(a.threadKey),d[4])})},function(a){return c.sequence([function(a){return d[10]=c.createArray(),d[11]=c.i64.of_int32(d[4].length),c.i64.gt(d[11],c.i64.cast([0,0]))?c.loopAsync(d[11],function(a){return d[13]=a,c.sequence([function(a){return c.nativeTypeOperation("Array",b("LSArrayGetObjectAt"),d[4],d[13]).then(function(a){return a=a,d[14]=a[0],d[15]=a[1],a})},function(a){return d[16]=(d[10].push(c.i64.to_string(d[14])),d[10])}])}):c.resolve()},function(a){return d[12]=d[10].join(","),d[5]=d[12]}])},function(a){return c.islc(c.filter(c.db.table(9).fetchDesc([[[]],"lastActivityTimestampMs"]),function(a){return d[4].some(function(b){return c.i64.eq(a.threadKey,b)})&&c.i64.lt(a.lastReadWatermarkTimestampMs,a.lastActivityTimestampMs)&&!0&&a.isAdminSnippet===!1}),0,c.i64.to_float(c.i64.cast([0,1]))).next().then(function(a,b){var e=a.done;a=a.value;return e?(e=["",c.i64.cast([-1,4294967295])],d[6]=e[0],d[7]=e[1],e):(b=a.item,e=[b.snippet,b.threadKey],d[6]=e[0],d[7]=e[1],e)})},function(b){return d[6]!==void 0?d[9]=d[6]:(d[10]=a[2].get("unread_singular"),a[2],d[9]=[c.i64.to_string(d[1]),d[10]].join("")),d[3]=d[9]}]):c.sequence([function(a){return d[4]=c.createArray(),d[6]=(d[4].push(c.i64.to_string(d[1])),d[4]),c.localizeV2Async(c.i64.cast([0,3575257287]),d[4]).then(function(a){return d[5]=a})},function(a){return d[3]=d[5]}])},function(a){return d[2]=d[3]}])},function(a){return d[0]=d[2]}]):c.sequence([function(e){return c.i64.eq(a[0],c.i64.cast([-1,4294967284]))&&!1?c.sequence([function(e){return c.i64.neq(a[1],void 0)?c.resolve(d[6]=a[1]):c.sequence([function(b){return d[7]=c.createArray(),c.forEach(c.islc(c.db.table(9).fetchDesc([[[a[0]]],"parentThreadKeyLastActivityTimestampMs"]),0,c.i64.to_float(c.i64.cast([0,20]))),function(a){a=a.item;return d[10]=(d[7].push(a.threadKey),d[7])})},function(a){return c.sequence([function(a){return d[10]=c.createArray(),d[11]=c.i64.of_int32(d[7].length),c.i64.gt(d[11],c.i64.cast([0,0]))?c.loopAsync(d[11],function(a){return d[13]=a,c.sequence([function(a){return c.nativeTypeOperation("Array",b("LSArrayGetObjectAt"),d[7],d[13]).then(function(a){return a=a,d[14]=a[0],d[15]=a[1],a})},function(a){return d[16]=(d[10].push(c.i64.to_string(d[14])),d[10])}])}):c.resolve()},function(a){return d[12]=d[10].join(","),d[8]=d[12]}])},function(a){return c.count(c.filter(c.db.table(9).fetch(),function(a){return d[7].some(function(b){return c.i64.eq(a.threadKey,b)})&&c.i64.lt(a.lastReadWatermarkTimestampMs,a.lastActivityTimestampMs)&&!0&&!0})).then(function(a){return d[9]=a})},function(a){return d[6]=d[9]}])},function(a){return d[1]=d[6]}]):c.sequence([function(b){return c.i64.neq(a[1],void 0)?c.resolve(d[6]=a[1]):c.sequence([function(b){return c.count(c.filter(c.db.table(9).fetch([[[a[0]]],"parentThreadKeyLastActivityTimestampMs"]),function(b){return c.i64.eq(b.parentThreadKey,a[0])&&c.i64.lt(b.lastReadWatermarkTimestampMs,b.lastActivityTimestampMs)})).then(function(a){return d[7]=a})},function(a){return d[6]=d[7]}])},function(a){return d[1]=d[6]}])},function(b){return d[2]=a[2].get("all_read"),a[2],d[3]=a[2].get("unread_singular"),a[2],d[4]=a[2].get("unread_plural"),a[2],c.i64.eq(d[1],c.i64.cast([0,0]))?d[5]=d[2]:(c.i64.eq(d[1],c.i64.cast([0,1]))?d[6]=[c.i64.to_string(d[1]),d[3]].join(""):d[6]=[c.i64.to_string(d[1]),d[4]].join(""),d[5]=d[6]),d[0]=d[5]}])},function(b){return c.forEach(c.db.table(9).fetch([[[a[0]]]]),function(a){var b=a.update;a.item;return b({snippet:d[0],snippetStringHash:void 0,snippetStringArgument1:void 0,snippetAttribution:void 0,snippetAttributionStringHash:void 0})})}])},function(a){return c.resolve(e)}])}e.exports=a}),null);
__d("LSUpdateParentFolderReadWatermark",["LSArrayGetObjectAt","LSGetParentThreadKey","LSUpdateFolderThreadSnippet"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1],d=[],e=[];return c.sequence([function(e){return c.sequence([function(e){return c.storedProcedure(b("LSGetParentThreadKey"),a[0]).then(function(a){return a=a,d[0]=a[0],a})},function(e){return c.i64.neq(d[0],c.i64.cast([0,0]))?c.sequence([function(a){return c.i64.eq(d[0],c.i64.cast([-1,4294967284]))&&!1?c.sequence([function(a){return d[2]=c.createArray(),c.forEach(c.islc(c.db.table(9).fetchDesc([[[d[0]]],"parentThreadKeyLastActivityTimestampMs"]),0,c.i64.to_float(c.i64.cast([0,20]))),function(a){a=a.item;return d[6]=(d[2].push(a.threadKey),d[2])})},function(a){return c.sequence([function(a){return d[6]=c.createArray(),d[7]=c.i64.of_int32(d[2].length),c.i64.gt(d[7],c.i64.cast([0,0]))?c.loopAsync(d[7],function(a){return d[9]=a,c.sequence([function(a){return c.nativeTypeOperation("Array",b("LSArrayGetObjectAt"),d[2],d[9]).then(function(a){return a=a,d[10]=a[0],d[11]=a[1],a})},function(a){return d[12]=(d[6].push(c.i64.to_string(d[10])),d[6])}])}):c.resolve()},function(a){return d[8]=d[6].join(","),d[3]=d[8]}])},function(a){return c.sortBy(c.filter(c.db.table(9).fetch(),function(a){return d[2].some(function(b){return c.i64.eq(a.threadKey,b)})&&c.i64.lt(a.lastReadWatermarkTimestampMs,a.lastActivityTimestampMs)}),[["lastReadWatermarkTimestampMs","ASC"]]).next().then(function(a,b){var c=a.done;a=a.value;return c?d[4]=void 0:(b=a.item,d[4]=b.lastReadWatermarkTimestampMs)})},function(a){return d[1]=d[4]}]):c.sequence([function(a){return c.sortBy(c.filter(c.db.table(9).fetch([[[d[0]]],"parentThreadKeyLastActivityTimestampMs"]),function(a){return c.i64.eq(a.parentThreadKey,d[0])&&c.i64.lt(a.lastReadWatermarkTimestampMs,a.lastActivityTimestampMs)}),[["lastReadWatermarkTimestampMs","ASC"]]).next().then(function(a,b){var c=a.done;a=a.value;return c?d[2]=void 0:(b=a.item,d[2]=b.lastReadWatermarkTimestampMs)})},function(a){return d[1]=d[2]}])},function(a){return c.i64.neq(d[1],void 0)?c.forEach(c.db.table(9).fetch([[[d[0]]]]),function(a){var b=a.update;a.item;return b({lastReadWatermarkTimestampMs:d[1]})}):c.sequence([function(a){return c.db.table(9).fetch([[[d[0]]]]).next().then(function(a,b){var c=a.done;a=a.value;return c?d[2]=void 0:(b=a.item,d[2]=b.lastActivityTimestampMs)})},function(a){return c.i64.neq(d[2],void 0)?c.forEach(c.db.table(9).fetch([[[d[0]]]]),function(a){var b=a.update;a.item;return b({lastReadWatermarkTimestampMs:d[2]})}):c.resolve()}])},function(e){return c.storedProcedure(b("LSUpdateFolderThreadSnippet"),d[0],void 0,a[1])}]):c.resolve()}])},function(a){return c.resolve(e)}])}e.exports=a}),null);