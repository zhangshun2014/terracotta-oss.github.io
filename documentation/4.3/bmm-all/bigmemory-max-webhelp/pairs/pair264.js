var pairs =
{
"terracotta":{"cluster":1,"server":1,"configuration":1,"management":1,"client":1}
,"cluster":{"high":1,"server":1,"fails":1,"continues":1,"started":1,"(active":1,"active":1,"don":1,"removing":1,"state":1,"follow":1,"mirror":1,"shutdown":1,"first":1,"split":1}
,"high":{"availability":1}
,"availability":{"persistence":1,"mirror":1}
,"persistence":{"failover":1}
,"failover":{"scale":1,"adding":1,"active":1,"new":1,"(migration":1,"successful":1,"procedure":1,"(passive-standby":1,"concern":1}
,"scale":{"example":1}
,"example":{"above":1,"new":1}
,"above":{"presents":1,"depending":1}
,"presents":{"reliable":1}
,"reliable":{"highly":1}
,"highly":{"available":1}
,"available":{"cluster":1,"election":1,"result":1}
,"server":{"fails":1,"adds":1,"case":1,"instance":1,"having":1,"instances":1,"started":1,"(active-coordinator":1,"mirror":1,"following":1,"fail":1,"initialized":1,"went":1,"returns":1,"offline":1,"try":1,"fully":1,"successful":1,"failover":1,"fully-synchronized":1,"smaller":1,"active":1,"restarts":1,"don":1,"without":1,"using":1,"already":1,"ready":1,"standby":1,"restart":1,"within":1,"rejoin":1,"restartable":1,"safe":1,"last":1,"open":1,"-the":1,"zaps":1,"causing":1,"starts":1,"new":1,"restarted":1,"original":1,"-in":1,"servers":1,"remains":1}
,"fails":{"cluster":1,"redundancy":1,"mirror":1,"two":1,"shut":1}
,"redundancy":{"provide":1}
,"provide":{"failover":1}
,"adding":{"mirror":1,"<server>":1}
,"mirror":{"server":1,"serves":1,"instantly":1,"servers":1,"terracotta":1,"active":1,"state":1,"beginning":1,"synchronizing":1,"synchronized":1,"during":1,"server\u0027s":1,"role":1,"mirror\u0027s":1,"failover":1,"available":1,"hot-swapped":1,"host":1,"information":1,"different":1,"takes":1,"become":1,"minority":1,"clients":1}
,"adds":{"availability":1}
,"serves":{"hot":1}
,"hot":{"standby":1}
,"standby":{"ready":1,"state":1}
,"ready":{"active":1,"run":1,"perform":1,"failover":1}
,"active":{"server":1,"terracotta":1,"mirror":1,"fail":1,"ready":1,"waits":1,"returns":1,"syncs":1,"successful":1,"takes":1,"hot-swapping":1,"automatically":1,"clustered":1,"restarts":1,"attempt":1,"succeed":1,"within":1,"server\u0027s":1,"manual":1}
,"case":{"failure":1,"split-brain":1}
,"failure":{"array":1,"datastorage":1}
,"array":{"active":1,"xml":1}
,"instance":{"fails":1,"started":1,"already":1,"becoming":1,"carries":1,"mirrors":1,"running":1,"servers":1}
,"instantly":{"takes":1}
,"takes":{"cluster":1,"place":1,"crashed":1}
,"continues":{"functioning":1}
,"functioning":{"data":1}
,"data":{"lost":1,"directories":1,"directory":1,"current":1,"even":1,"erased":1,"active":1,"objects":1,"mirror":1,"necessary":1,"persisted":1,"loss":1,"saved":1,"terracotta":1,"first":1,"read":1,"conflicts":1,"event":1}
,"lost":{"following":1}
,"following":{"terracotta":1,"states":1,"scenarios":1}
,"configuration":{"file":1,"adding":1,"server":1,"invalid":1,"example":1,"refer":1}
,"file":{"demonstrates":1,"ensure":1}
,"demonstrates":{"configure":1}
,"configure":{"two-server":1}
,"two-server":{"array":1}
,"xml":{"version=\u0022":1}
,"version=\u0022":{"1.0":1}
,"1.0":{"encoding=\u0022":1}
,"encoding=\u0022":{"utf-8":1}
,"utf-8":{"<tc:tc-config":1}
,"<tc:tc-config":{"xmlns:tc=\u0022":1}
,"xmlns:tc=\u0022":{"http:\u002F\u002Fwww.terracotta.org\u002Fconfig":1}
,"http:\u002F\u002Fwww.terracotta.org\u002Fconfig":{"xmlns:xsi=\u0022":1}
,"xmlns:xsi=\u0022":{"http:\u002F\u002Fwww.w3.org\u002F2001\u002Fxmlschema-instance":1}
,"http:\u002F\u002Fwww.w3.org\u002F2001\u002Fxmlschema-instance":{"xsi:schemalocation=\u0022":1}
,"xsi:schemalocation=\u0022":{"http:\u002F\u002Fwww.terracotta.org\u002Fschema\u002Fterracotta-9.xsd":1}
,"http:\u002F\u002Fwww.terracotta.org\u002Fschema\u002Fterracotta-9.xsd":{"<servers>":1}
,"<servers>":{"<server":1}
,"<server":{"name=\u0022":1}
,"name=\u0022":{"server1":1,"server2":1}
,"server1":{"<data>\u002Fopt\u002Fterracotta\u002Fserver1-data":1}
,"<data>\u002Fopt\u002Fterracotta\u002Fserver1-data":{"<\u002Fdata>":1}
,"<\u002Fdata>":{"<tsa-port>":1}
,"<tsa-port>":{"9510":1}
,"9510":{"<\u002Ftsa-port>":1}
,"<\u002Ftsa-port>":{"<jmx-port>":1}
,"<jmx-port>":{"9520":1}
,"9520":{"<\u002Fjmx-port>":1}
,"<\u002Fjmx-port>":{"<tsa-group-port>":1}
,"<tsa-group-port>":{"9530":1}
,"9530":{"<\u002Ftsa-group-port>":1}
,"<\u002Ftsa-group-port>":{"<management-port>":1}
,"<management-port>":{"9540":1}
,"9540":{"<\u002Fmanagement-port>":1}
,"<\u002Fmanagement-port>":{"<datastorage":1}
,"<datastorage":{"size=\u0022":1}
,"size=\u0022":{"<offheap":1,"\u0022\u002F>":1}
,"<offheap":{"size=\u0022":1}
,"\u0022\u002F>":{"<\u002Fdatastorage>":1,"<client-reconnect-window>":1}
,"<\u002Fdatastorage>":{"<\u002Fserver>":1}
,"<\u002Fserver>":{"<server":1,"<restartable":1}
,"server2":{"<data>\u002Fopt\u002Fterracotta\u002Fserver2-data":1}
,"<data>\u002Fopt\u002Fterracotta\u002Fserver2-data":{"<\u002Fdata>":1}
,"<restartable":{"enabled=\u0022":1}
,"enabled=\u0022":{"true":1}
,"true":{"\u0022\u002F>":1}
,"<client-reconnect-window>":{"120":1}
,"120":{"<\u002Fclient-reconnect-window>":1}
,"<\u002Fclient-reconnect-window>":{"<\u002Fservers>":1}
,"<\u002Fservers>":{"<\u002Ftc:tc-config>":1}
,"<\u002Ftc:tc-config>":{"add":1}
,"add":{"mirror":1}
,"servers":{"configuration":1,"due":1,"server":1,"logs":1,"always":1,"startup":1,"down":1,"using":1,"started":1,"assume":1,"causing":1,"restored":1,"attempt":1,"may":1}
,"<server>":{"sections":1,"block":1}
,"sections":{"however":1}
,"however":{"performance":1,"connection":1}
,"performance":{"overhead":1}
,"overhead":{"may":1}
,"may":{"become":1}
,"become":{"evident":1,"active":1,"necessary":1}
,"evident":{"adding":1}
,"due":{"load":1}
,"load":{"placed":1,"sending":1,"cluster":1}
,"placed":{"active":1}
,"having":{"synchronize":1}
,"synchronize":{"mirror":1,"dependent":1,"again":1}
,"instances":{"share":1,"behave":1,"started":1,"available":1,"acting":1}
,"share":{"data":1}
,"directories":{"server\u0027s":1}
,"server\u0027s":{"<data>":1,"status":1,"data":1,"new":1,"clients":1}
,"<data>":{"element":1}
,"element":{"point":1}
,"point":{"different":1,"mirror":1}
,"different":{"preferably":1,"configuration":1}
,"preferably":{"local":1}
,"local":{"data":1}
,"directory":{"starting":1,"active":1,"cleared":1,"manually":1}
,"starting":{"servers":1}
,"behave":{"startup":1,"noted":1}
,"startup":{"depends":1,"routine":1,"sequence":1,"affect":1,"restarted":1}
,"depends":{"life":1}
,"life":{"cluster":1}
,"started":{"single-server":1,"performs":1,"time":1,"active":1,"together":1,"first":1}
,"single-server":{"configuration":1}
,"performs":{"startup":1}
,"routine":{"ready":1}
,"run":{"cluster":1,"similarly":1,"either":1}
,"(active":{"status)":1}
,"status)":{"multiple":1,"others":1,"election":1,"tmc":1,"occur":1}
,"multiple":{"server":1,"mirrors":1}
,"time":{"elected":1,"taken":1}
,"elected":{"active":1,"new":1}
,"(active-coordinator":{"status)":1}
,"others":{"serve":1}
,"serve":{"mirrors":1}
,"mirrors":{"(passive-standby":1,"run":1,"differing":1,"mirror":1}
,"(passive-standby":{"status)":1}
,"election":{"recorded":1,"determines":1}
,"recorded":{"servers":1}
,"logs":{"server":1}
,"already":{"running":1,"configured":1}
,"running":{"syncs":1,"restartable":1,"start":1}
,"syncs":{"state":1,"data":1}
,"state":{"active":1,"mirror":1,"changed":1,"synchronized":1,"isn\u0027t":1}
,"becoming":{"mirror":1}
,"always":{"synchronized":1}
,"synchronized":{"allowing":1,"ready":1,"failed":1,"new":1}
,"allowing":{"mirror":1}
,"states":{"passive-uninitialized":1}
,"passive-uninitialized":{"-the":1}
,"-the":{"mirror":1,"original":1,"new":1}
,"beginning":{"startup":1}
,"sequence":{"ready":1,"servers":1}
,"perform":{"failover":1}
,"fail":{"shut":1,"start":1,"reconnect":1}
,"shut":{"down":1}
,"down":{"server\u0027s":1,"active":1,"mirror":1,"clustered":1,"clients":1,"shut":1,"application":1}
,"status":{"light":1}
,"light":{"terracotta":1,"tmc":1,"cyan":1}
,"management":{"console":1}
,"console":{"(tmc)":1}
,"(tmc)":{"switches":1}
,"switches":{"red":1,"orange":1}
,"red":{"orange":1}
,"orange":{"initializing":1,"passive-standby":1,"cyan":1}
,"initializing":{"-the":1}
,"synchronizing":{"state":1}
,"tmc":{"orange":1,"switches":1,"status":1}
,"passive-standby":{"-the":1}
,"cyan":{"active":1,"shut":1}
,"carries":{"load":1}
,"sending":{"state":1}
,"during":{"synchronization":1,"startup":1,"network":1}
,"synchronization":{"process":1}
,"process":{"time":1}
,"taken":{"synchronize":1}
,"dependent":{"amount":1}
,"amount":{"clustered":1}
,"clustered":{"data":1}
,"current":{"load":1,"data":1}
,"similarly":{"configured":1}
,"configured":{"machines":1,"passive":1,"original":1,"terracotta":1,"reconnection":1}
,"machines":{"better":1}
,"better":{"throughput":1}
,"throughput":{"started":1}
,"together":{"avoid":1}
,"avoid":{"unnecessary":1,"errors":1}
,"unnecessary":{"sync":1}
,"sync":{"ups":1}
,"ups":{"sequence":1}
,"affect":{"data":1}
,"even":{"former":1,"active":1}
,"former":{"mirror":1,"active":1}
,"initialized":{"former":1}
,"erased":{"event":1}
,"event":{"mirror":1,"exactly":1,"certain":1}
,"went":{"offline":1}
,"offline":{"active":1,"point":1}
,"returns":{"remembers":1,"clients":1,"restart":1}
,"remembers":{"mirror":1}
,"role":{"even":1,"active":1}
,"try":{"become":1}
,"waits":{"until":1}
,"until":{"active":1}
,"clients":{"blocked":1,"mirror":1,"connect":1,"fail":1,"terracotta":1,"(<client-reconnect-window>)":1,"loses":1,"defected":1,"connects":1,"behave":1}
,"blocked":{"updating":1}
,"updating":{"data":1}
,"restart":{"mirror":1,"clients":1,"cluster":1,"wipe":1}
,"mirror\u0027s":{"data":1,"<server>":1}
,"objects":{"indices":1}
,"indices":{"moved":1}
,"moved":{"dirty-objectdb-backup":1}
,"dirty-objectdb-backup":{"directory":1}
,"two":{"mirror":1,"servers":1,"independent":1}
,"determines":{"new":1}
,"new":{"active":1,"active)":1,"mirror":1,"state":1}
,"successful":{"failover":1,"client":1,"shutting":1}
,"place":{"least":1,"split":1}
,"least":{"mirror":1}
,"fully":{"synchronized":1}
,"failed":{"active":1}
,"client":{"failover":1,"shut":1}
,"(migration":{"new":1}
,"active)":{"happen":1}
,"happen":{"server":1}
,"shutting":{"down":1}
,"fully-synchronized":{"mirror":1}
,"result":{"cluster-wide":1}
,"cluster-wide":{"failure":1}
,"datastorage":{"and\u002For":1,"offheap":1}
,"and\u002For":{"offheap":1}
,"offheap":{"size":1,"sizes":1,"sizes)":1}
,"size":{"mirror":1}
,"smaller":{"active":1}
,"start":{"user":1,"mirror":1,"server":1}
,"user":{"alerted":1}
,"alerted":{"configuration":1}
,"invalid":{"multiple":1}
,"differing":{"amounts":1}
,"amounts":{"storage":1}
,"storage":{"configured":1}
,"passive":{"smallest":1}
,"smallest":{"datastorage":1}
,"sizes":{"(that":1}
,"(that":{"greater":1}
,"greater":{"equal":1}
,"equal":{"active\u0027s":1,"number":1}
,"active\u0027s":{"datastorage":1}
,"sizes)":{"elected":1}
,"hot-swapping":{"mirrors":1}
,"hot-swapped":{"replacement":1}
,"replacement":{"matches":1}
,"matches":{"original":1}
,"original":{"mirror\u0027s":1,"mirror":1,"active":1}
,"block":{"terracotta":1}
,"host":{"name":1}
,"name":{"address":1}
,"address":{"configured":1}
,"information":{"swapping":1,"refer":1}
,"swapping":{"mirror":1}
,"refer":{"changing":1,"clearing":1}
,"changing":{"topology":1}
,"topology":{"live":1}
,"live":{"cluster":1}
,"don":{"added":1}
,"added":{"link":1}
,"link":{"terracotta":1,"safe":1}
,"acting":{"mirrors":1}
,"either":{"restartable":1,"server":1}
,"restartable":{"mode":1}
,"mode":{"non-persistent":1,"server":1,"down":1,"enabled":1}
,"non-persistent":{"mode":1}
,"crashed":{"server\u0027s":1}
,"cleared":{"restarted":1,"information":1}
,"restarted":{"allowed":1,"server\u0027s":1,"majority":1,"equal":1}
,"allowed":{"rejoin":1}
,"rejoin":{"cluster":1}
,"removing":{"data":1}
,"necessary":{"cluster":1,"timely":1}
,"changed":{"crash":1}
,"crash":{"during":1}
,"persisted":{"last":1,"meaning":1,"servers":1}
,"last":{"server":1,"active":1}
,"automatically":{"started":1}
,"first":{"avoid":1,"certain":1,"removed":1,"start":1,"data":1}
,"errors":{"data":1}
,"loss":{"setups":1}
,"setups":{"data":1}
,"meaning":{"restartable":1}
,"enabled":{"data":1}
,"saved":{"either":1}
,"certain":{"circumstances":1}
,"circumstances":{"pertaining":1}
,"pertaining":{"server":1}
,"restarts":{"data":1,"wipes":1}
,"manually":{"cleared":1}
,"clearing":{"data":1}
,"safe":{"failover":1,"cluster":1}
,"procedure":{"safely":1,"safe":1}
,"safely":{"migrate":1}
,"migrate":{"clients":1}
,"without":{"stopping":1}
,"stopping":{"cluster":1}
,"follow":{"steps":1}
,"steps":{"already":1,"shut":1}
,"using":{"start-tc-server":1,"stop-tc-server":1}
,"start-tc-server":{"script":1}
,"script":{"mirror":1,"script":1,"detects":1,"shut":1,"restart":1}
,"ensure":{"mirror":1}
,"stop-tc-server":{"script":1}
,"detects":{"mirror":1}
,"isn\u0027t":{"reachable":1}
,"reachable":{"issues":1}
,"issues":{"warning":1}
,"warning":{"fails":1}
,"concern":{"override":1}
,"override":{"behavior":1}
,"behavior":{"--force":1}
,"--force":{"flag":1}
,"flag":{"clients":1}
,"connect":{"new":1}
,"reconnect":{"new":1,"timeout":1,"original":1}
,"within":{"configured":1,"parameters":1}
,"reconnection":{"window":1}
,"window":{"previously":1,"clients":1,"restarted":1}
,"previously":{"active":1}
,"removed":{"current":1}
,"read":{"active":1}
,"shutdown":{"procedure":1,"follow":1,"servers":1}
,"application":{"shut":1}
,"conflicts":{"place":1}
,"split":{"brain":1}
,"brain":{"scenario":1,"refers":1}
,"scenario":{"terracotta":1,"two":1}
,"refers":{"scenario":1}
,"assume":{"role":1}
,"occur":{"during":1,"case":1}
,"network":{"problem":1}
,"problem":{"disconnects":1}
,"disconnects":{"active":1}
,"causing":{"mirror":1,"restart":1}
,"open":{"reconnection":1}
,"(<client-reconnect-window>)":{"connection":1}
,"connection":{"two":1,"restored":1}
,"restored":{"two":1,"following":1}
,"independent":{"clusters":1}
,"clusters":{"operation":1}
,"operation":{"split-brain":1}
,"split-brain":{"situation":1,"occurrences":1}
,"situation":{"however":1}
,"scenarios":{"results":1}
,"results":{"clients":1}
,"zaps":{"new":1,"original":1,"loser":1}
,"wipe":{"database":1}
,"database":{"synchronize":1,"synchronizes":1}
,"again":{"mirror":1}
,"minority":{"clients":1}
,"starts":{"reconnect":1}
,"timeout":{"clients":1}
,"loses":{"zapping":1}
,"zapping":{"new":1}
,"wipes":{"database":1}
,"synchronizes":{"again":1}
,"defected":{"new":1}
,"attempt":{"reconnect":1,"determine":1}
,"succeed":{"within":1}
,"parameters":{"server":1}
,"majority":{"clients":1}
,"connects":{"new":1}
,"number":{"clients":1}
,"-in":{"unlikely":1}
,"unlikely":{"event":1}
,"exactly":{"half":1}
,"half":{"original":1}
,"determine":{"holds":1}
,"holds":{"latest":1}
,"latest":{"transactions":1}
,"transactions":{"(or":1}
,"(or":{"freshest":1}
,"freshest":{"data)":1}
,"data)":{"winner":1}
,"winner":{"zaps":1}
,"loser":{"clients":1}
,"noted":{"above":1}
,"depending":{"server":1}
,"remains":{"active":1}
,"manual":{"shutdown":1}
,"timely":{"resolution":1}
,"resolution":{"occur":1}
,"occurrences":{"imperative":1}
,"imperative":{"confirm":1}
,"confirm":{"integrity":1}
,"integrity":{"shared":1}
,"shared":{"data":1}
}
;Search.control.loadWordPairs(pairs);