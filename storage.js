/* Device-only persistence with an honest fallback for private/restricted browsers. */
const deviceStore = (() => {
 const memory=new Map(),dirty=new Set();let unavailable=false;
 try{const k='pylearn-storage-test';localStorage.setItem(k,'1');localStorage.removeItem(k)}catch(e){unavailable=true}
 return {get unavailable(){return unavailable},getItem(k){if(dirty.has(k))return memory.get(k)??null;try{const v=localStorage.getItem(k);if(v!==null)memory.set(k,v);else memory.delete(k);return v}catch(e){unavailable=true;return memory.get(k)??null}},setItem(k,v){memory.set(k,String(v));try{localStorage.setItem(k,v);dirty.delete(k)}catch(e){unavailable=true;dirty.add(k)}},removeItem(k){memory.delete(k);try{localStorage.removeItem(k);dirty.delete(k)}catch(e){unavailable=true;dirty.add(k)}}};
})();
