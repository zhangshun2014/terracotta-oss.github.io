var pairs =
{
"cache-aside":{"<<this":1,"pattern":1}
,"<<this":{"topic":1}
,"topic":{"shared":1}
,"shared":{"ehc":1}
,"ehc":{"bmg":1}
,"bmg":{"bmm":1}
,"bmm":{"product":1}
,"product":{"docs.>>":1}
,"docs.>>":{"cache-aside":1}
,"pattern":{"application":1}
,"application":{"code":1}
,"code":{"uses":1,"accesses":1,"fetch":1,"often":1}
,"uses":{"cache":1}
,"cache":{"directly":1,"first":1,"contains":1,"bypassing":1,"return":1,"updated":1,"public":1,"\u002F\u002Fwill":1,"\u0027nulls":1,"*\u002Fpublic":1}
,"directly":{"means":1,"cache":1}
,"means":{"application":1}
,"accesses":{"system-of-record":1}
,"system-of-record":{"(sor)":1,"store":1,"results":1}
,"(sor)":{"consult":1}
,"consult":{"cache":1}
,"first":{"cache":1,"otherwise":1}
,"contains":{"data":1}
,"data":{"return":1,"directly":1,"system-of-record":1,"cache":1,"written":1,"check":1,"write":1}
,"return":{"data":1,"value":1}
,"bypassing":{"sor":1}
,"sor":{"otherwise":1,"*\u002Fpublic":1,"update":1}
,"otherwise":{"application":1,"read":1}
,"fetch":{"data":1}
,"store":{"data":1}
,"written":{"cache":1}
,"updated":{"system-of-record":1}
,"results":{"code":1}
,"often":{"looks":1}
,"looks":{"following":1}
,"following":{"pseudo-code":1}
,"pseudo-code":{"public":1}
,"public":{"class":1,"mydataaccessclass":1}
,"class":{"mydataaccessclass":1}
,"mydataaccessclass":{"{private":1,"(ehcache":1}
,"{private":{"final":1}
,"final":{"ehcache":1}
,"ehcache":{"cache":1}
,"(ehcache":{"cache)":1}
,"cache)":{"{this.cache":1}
,"{this.cache":{"=cache":1}
,"=cache":{"\u002F*read":1}
,"\u002F*read":{"data":1}
,"check":{"cache":1}
,"read":{"sor":1}
,"*\u002Fpublic":{"readsomedata":1,"void":1}
,"readsomedata":{"key)":1}
,"key)":{"{element":1}
,"{element":{"element":1}
,"element":{"((element":1,"(key":1}
,"((element":{"=cache.get":1}
,"=cache.get":{"(key))":1}
,"(key))":{"!=null)":1}
,"!=null)":{"{return":1,"{cache.put":1}
,"{return":{"element.getvalue":1}
,"element.getvalue":{"\u002F\u002Fnote":1}
,"\u002F\u002Fnote":{"decide":1}
,"decide":{"whether":1}
,"whether":{"cache":1}
,"\u002F\u002Fwill":{"cache":1}
,"\u0027nulls":{"(value":1}
,"(value":{"=readdatafromdatastore":1}
,"=readdatafromdatastore":{"(key))":1}
,"{cache.put":{"(new":1}
,"(new":{"element":1}
,"(key":{"value))":1,"value)":1}
,"value))":{"return":1}
,"value":{"\u002F*write":1}
,"\u002F*write":{"data":1}
,"write":{"sor":1}
,"update":{"cache":1}
,"void":{"writesomedata":1}
,"writesomedata":{"key":1}
,"key":{"value)":1}
,"value)":{"{writedatatodatastore":1,"cache.put":1}
,"{writedatatodatastore":{"(key":1}
,"cache.put":{"(new":1}
}
;Search.control.loadWordPairs(pairs);
