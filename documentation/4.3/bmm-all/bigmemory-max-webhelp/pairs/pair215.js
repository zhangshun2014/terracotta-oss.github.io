var pairs =
{
"configuration":{"examples":1,"provides":1,"<cache>":1,"example":1,"cachemanagerconfig":1,".diskstore":1}
,"examples":{"<<this":1}
,"<<this":{"topic":1}
,"topic":{"shared":1}
,"shared":{"bmg":1}
,"bmg":{"bmm":1}
,"bmm":{"product":1,"section":1}
,"product":{"docs.>>":1}
,"docs.>>":{"bmm":1}
,"section":{"presents":1}
,"presents":{"possible":1}
,"possible":{"disk":1}
,"disk":{"usage":1,"storage":1,"tier":1,"persistence":1,"configuration":1}
,"usage":{"configurations":1}
,"configurations":{"using":1}
,"using":{"standalone":1}
,"standalone":{"deployment":1}
,"deployment":{"options":1}
,"options":{"crash":1}
,"crash":{"resilience":1}
,"resilience":{"following":1}
,"following":{"configuration":1,"example":1}
,"provides":{"fast":1}
,"fast":{"restartability":1}
,"restartability":{"fully":1,"eventually":1,"enabled":1}
,"fully":{"consistent":1}
,"consistent":{"data":1}
,"data":{"persistence":1,"during":1}
,"persistence":{"<ehcache>":1,"strategy":1,"disk)":1,"disk":1}
,"<ehcache>":{"<diskstore":1}
,"<diskstore":{"path=\u0022\u002Fpath\u002Fto\u002Fstore\u002Fdata":1,"path=\u0022\u002Fauto\u002Fdefault\u002Fpath":1}
,"path=\u0022\u002Fpath\u002Fto\u002Fstore\u002Fdata":{"\u0022\u002F>":1}
,"\u0022\u002F>":{"<cache>":1,"<\u002Fcache>":1,"<terracotta":1}
,"<cache>":{"<persistence":1,"maxentriesincache=\u0022":1}
,"<persistence":{"strategy=\u0022":1}
,"strategy=\u0022":{"localrestartable":1,"distributed":1,"localtempswap":1,"none":1}
,"localrestartable":{"synchronouswrites=\u0022":1}
,"synchronouswrites=\u0022":{"true":1,"false":1}
,"true":{"\u0022\u002F>":1,"consistency=\u0022":1}
,"<\u002Fcache>":{"<\u002Fehcache>":1,"attribute":1,"programmatic":1}
,"<\u002Fehcache>":{"following":1,"clustered":1,"localtempswap":1}
,"eventually":{"consistent":1}
,"false":{"\u0022\u002F>":1}
,"clustered":{"caches":1}
,"caches":{"distributing":1}
,"distributing":{"bigmemory":1}
,"bigmemory":{"max":1,"operation":1}
,"max":{"across":1}
,"across":{"terracotta":1}
,"terracotta":{"server":1}
,"server":{"array":1}
,"array":{"(tsa)":1}
,"(tsa)":{"persistence":1}
,"strategy":{"ehcache.xml":1,"create":1,"maxentrieslocaldisk":1,"none":1}
,"ehcache.xml":{"distributed":1}
,"distributed":{"<terracotta>":1,"\u0022\u002F>":1,"cache":1}
,"<terracotta>":{"sub-element":1}
,"sub-element":{"present":1}
,"present":{"configuration":1}
,"maxentriesincache=\u0022":{"100000":1}
,"100000":{"<persistence":1}
,"<terracotta":{"clustered=\u0022":1}
,"clustered=\u0022":{"true":1}
,"consistency=\u0022":{"eventual":1}
,"eventual":{"synchronouswrites=\u0022":1}
,"attribute":{"maxentriesincache":1}
,"maxentriesincache":{"configures":1}
,"configures":{"maximum":1}
,"maximum":{"number":1}
,"number":{"entries":1}
,"entries":{"distributed":1}
,"cache":{"(maxentriesincache":1,"cachemanager":1,"persistence":1,"stays":1}
,"(maxentriesincache":{"required":1}
,"required":{"default":1}
,"default":{"unlimited.)":1}
,"unlimited.)":{"restartability":1}
,"enabled":{"tsa":1}
,"tsa":{"order":1}
,"order":{"clients":1}
,"clients":{"restartable":1}
,"restartable":{"temporary":1}
,"temporary":{"disk":1,"cleared":1}
,"storage":{"localtempswap":1,"temporary":1}
,"localtempswap":{"persistence":1,"\u0022\u002F>":1,"strategy":1}
,"create":{"local":1}
,"local":{"disk":1}
,"tier":{"in-memory":1}
,"in-memory":{"data":1,"cache":1}
,"during":{"bigmemory":1}
,"operation":{"disk":1}
,"cleared":{"restart":1}
,"restart":{"<ehcache>":1}
,"path=\u0022\u002Fauto\u002Fdefault\u002Fpath":{"\u0022\u002F>":1}
,"maxentrieslocaldisk":{"maxbyteslocaldisk":1}
,"maxbyteslocaldisk":{"either":1}
,"either":{"cache":1}
,"cachemanager":{"level":1,"cachemanager":1,"=new":1,"(cachemanagerconfig)":1}
,"level":{"control":1}
,"control":{"size":1}
,"size":{"disk":1}
,"none":{"cache":1,"\u0022\u002F>":1}
,"stays":{"memory":1}
,"memory":{"(with":1}
,"(with":{"overflow":1}
,"overflow":{"disk":1}
,"disk)":{"<cache>":1}
,"programmatic":{"configuration":1}
,"example":{"following":1,"programmatically":1}
,"programmatically":{"configure":1}
,"configure":{"cache":1}
,"cachemanagerconfig":{"=new":1}
,"=new":{"configuration":1,"cacheconfiguration":1,"cachemanager":1}
,".diskstore":{"(new":1}
,"(new":{"diskstoreconfiguration":1,"persistenceconfiguration":1}
,"diskstoreconfiguration":{".path":1}
,".path":{"(\u0022\u002Fpath\u002Fto\u002Fstore\u002Fdata":1}
,"(\u0022\u002Fpath\u002Fto\u002Fstore\u002Fdata":{"\u0022))":1}
,"\u0022))":{"cacheconfiguration":1}
,"cacheconfiguration":{"cacheconfig":1,".name":1}
,"cacheconfig":{"=new":1}
,".name":{"my-cache":1}
,"my-cache":{".maxbyteslocalheap":1}
,".maxbyteslocalheap":{"(16":1}
,"(16":{"memoryunit.megabytes)":1}
,"memoryunit.megabytes)":{".maxbyteslocaloffheap":1,".persistence":1}
,".maxbyteslocaloffheap":{"(256":1}
,"(256":{"memoryunit.megabytes)":1}
,".persistence":{"(new":1}
,"persistenceconfiguration":{".strategy":1}
,".strategy":{"(strategy.localrestartable))":1}
,"(strategy.localrestartable))":{"cachemanagerconfig.addcache":1}
,"cachemanagerconfig.addcache":{"(cacheconfig)":1}
,"(cacheconfig)":{"cachemanager":1}
,"(cachemanagerconfig)":{"ehcache":1}
,"ehcache":{"mycache":1}
,"mycache":{"=cachemanager.getehcache":1}
,"=cachemanager.getehcache":{"my-cache":1}
}
;Search.control.loadWordPairs(pairs);
