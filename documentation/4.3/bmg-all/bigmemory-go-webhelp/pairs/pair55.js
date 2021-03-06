var pairs =
{
"using":{"bigmemory":1,"querymanagerbuilder":1}
,"bigmemory":{"sql":1}
,"sql":{"configure":1,"include":1,"query":1,"syntax":1}
,"configure":{"ehcache":1}
,"ehcache":{"file":1}
,"file":{"<<this":1,"enable":1,"called":1}
,"<<this":{"topic":1}
,"topic":{"shared":1}
,"shared":{"bmg":1}
,"bmg":{"bmm":1}
,"bmm":{"product":1}
,"product":{"docs.>>":1}
,"docs.>>":{"confirm":1}
,"confirm":{"search":1}
,"search":{"configuration":1,"attributes":1}
,"configuration":{"sub-elements":1,"ehcache.xml":1}
,"sub-elements":{"present":1}
,"present":{"ehcache.xml":1}
,"ehcache.xml":{"file":1}
,"enable":{"searching":1,"addition":1}
,"searching":{"cache":1,"issue":1}
,"cache":{"bigmemory":1,"initialized":1}
,"include":{"<searchable\u002F>":1,"allowdynamicindexing":1}
,"<searchable\u002F>":{"tag":1}
,"tag":{"enable":1}
,"addition":{"search":1}
,"attributes":{"cache":1}
,"initialized":{"include":1}
,"allowdynamicindexing":{"option":1}
,"option":{"example":1}
,"example":{"defines":1}
,"defines":{"searchable":1}
,"searchable":{"cache\u0027s":1}
,"cache\u0027s":{"configuration":1}
,"called":{"ehcache-users.xml":1}
,"ehcache-users.xml":{"<ehcache":1,"\u002F\u002Fbuild":1}
,"<ehcache":{"name=\u0022":1}
,"name=\u0022":{"users":1,"person":1,"name":1,"age":1,"address":1,"zip":1}
,"users":{"<cache":1}
,"<cache":{"name=\u0022":1}
,"person":{"<searchable":1,"age":1}
,"<searchable":{"allowdynamicindexing=\u0022":1}
,"allowdynamicindexing=\u0022":{"true":1}
,"true":{"<searchattribute":1}
,"<searchattribute":{"name=\u0022":1}
,"name":{"type=\u0022":1}
,"type=\u0022":{"string":1,"int":1}
,"string":{"expression=\u0022":1}
,"expression=\u0022":{"value.getname":1,"value.getage":1,"value.address.getzip":1}
,"value.getname":{"\u0022\u002F>":1}
,"\u0022\u002F>":{"<searchattribute":1,"<\u002Fsearchable>":1}
,"age":{"type=\u0022":1,"query":1}
,"int":{"expression=\u0022":1}
,"value.getage":{"\u0022\u002F>":1}
,"<\u002Fsearchable>":{"<\u002Fcache>":1}
,"<\u002Fcache>":{"<cache":1,"<\u002Fehcache>":1}
,"address":{"<searchable>":1,"zip":1}
,"<searchable>":{"<searchattribute":1}
,"zip":{"type=\u0022":1,"address":1,"=94115":1}
,"value.address.getzip":{"\u0022\u002F>":1}
,"<\u002Fehcache>":{"instantiate":1}
,"instantiate":{"querymanager":1}
,"querymanager":{"application":1,"using":1,"querymanager":1,"=querymanagerbuilder":1}
,"application":{"instantiate":1}
,"querymanagerbuilder":{"\u002F\u002Fget":1}
,"\u002F\u002Fget":{"cachemanager":1}
,"cachemanager":{"contains":1,"userscachemanager":1,"ehcache-users.xml":1}
,"contains":{"caches":1}
,"caches":{"query":1}
,"query":{"cachemanager":1,"issue":1,"\u002F\u002Fconstruct":1,"personquery":1,"addressquery":1,"sql":1}
,"userscachemanager":{"=new":1}
,"=new":{"cachemanager":1}
,"\u002F\u002Fbuild":{"querymanager":1}
,"=querymanagerbuilder":{".newquerymanagerbuilder":1}
,".newquerymanagerbuilder":{".addcache":1}
,".addcache":{"(person)":1,"(address)":1}
,"(person)":{".addcache":1}
,"(address)":{".build":1}
,".build":{"information":1}
,"information":{"step":1,"specifying":1}
,"step":{"searching":1}
,"issue":{"query":1,"bigmemory":1}
,"\u002F\u002Fconstruct":{"queries":1}
,"queries":{"query":1,"results":1}
,"personquery":{"=querymanager.createquery":1}
,"=querymanager.createquery":{"select":1}
,"select":{"*from":1,"zip":1}
,"*from":{"person":1}
,"addressquery":{"=querymanager.createquery":1}
,"=94115":{"\u002F\u002Fexecute":1}
,"\u002F\u002Fexecute":{"queries":1}
,"results":{"personresults":1,"addressresults":1,"information":1}
,"personresults":{"=personquery.end":1}
,"=personquery.end":{".execute":1}
,".execute":{"results":1,"\u002F\u002Fiterate":1}
,"addressresults":{"=addressquery.end":1}
,"=addressquery.end":{".execute":1}
,"\u002F\u002Fiterate":{"results":1}
,"specifying":{"sql":1}
,"syntax":{"examples":1}
}
;Search.control.loadWordPairs(pairs);
