var pairs =
{
"instantiating":{"scheduler":1}
,"scheduler":{"scheduler":1,"needs":1,"instantiated":1,"down":1,"started":1,"paused":1,"schedules":1,"sched":1}
,"needs":{"instantiated":1}
,"instantiated":{"schedulerfactory":1,"started":1}
,"schedulerfactory":{"users":1,"schedfact":1}
,"users":{"quartz":1}
,"quartz":{"keep":1,"schedule":1}
,"keep":{"instance":1}
,"instance":{"factory":1,"directly":1}
,"factory":{"jndi":1,"instance":1}
,"jndi":{"store":1}
,"store":{"others":1}
,"others":{"find":1}
,"find":{"just":1}
,"just":{"easy":1}
,"easy":{"(or":1}
,"(or":{"easier)":1}
,"easier)":{"instantiate":1}
,"instantiate":{"factory":1}
,"directly":{"(as":1}
,"(as":{"example":1}
,"example":{"below)":1}
,"below)":{"once":1}
,"once":{"scheduler":1,"shut":1}
,"started":{"placed":1,"fire":1}
,"placed":{"stand-by":1}
,"stand-by":{"mode":1}
,"mode":{"shutdown":1}
,"shutdown":{"aware":1}
,"aware":{"once":1}
,"shut":{"scheduler":1}
,"down":{"cannot":1}
,"cannot":{"restart":1}
,"restart":{"without":1}
,"without":{"reinstantiating":1}
,"reinstantiating":{"triggers":1}
,"triggers":{"fire":1}
,"fire":{"(and":1,"scheduler":1}
,"(and":{"therefore":1}
,"therefore":{"jobs":1}
,"jobs":{"execute)":1}
,"execute)":{"until":1}
,"until":{"scheduler":1}
,"paused":{"state":1}
,"state":{"following":1}
,"following":{"code":1}
,"code":{"snippet":1}
,"snippet":{"instantiates":1}
,"instantiates":{"starts":1}
,"starts":{"scheduler":1}
,"schedules":{"job":1}
,"job":{"execution":1,"tie":1,"=newjob":1,"run":1,"using":1}
,"execution":{"schedulerfactory":1}
,"schedfact":{"=new":1}
,"=new":{"org.quartz.impl.stdschedulerfactory":1}
,"org.quartz.impl.stdschedulerfactory":{"scheduler":1}
,"sched":{"=schedfact.getscheduler":1}
,"=schedfact.getscheduler":{"sched.start":1}
,"sched.start":{"\u002F\u002Fdefine":1}
,"\u002F\u002Fdefine":{"job":1}
,"tie":{"hellojob":1}
,"hellojob":{"class":1}
,"class":{"jobdetail":1}
,"jobdetail":{"job":1}
,"=newjob":{"(hellojob.class)":1}
,"(hellojob.class)":{".withidentity":1}
,".withidentity":{"myjob":1,"mytrigger":1}
,"myjob":{"group1":1}
,"group1":{".build":1,".startnow":1}
,".build":{"\u002F\u002Ftrigger":1,"\u002F\u002Ftell":1}
,"\u002F\u002Ftrigger":{"job":1}
,"run":{"every":1}
,"every":{"seconds":1}
,"seconds":{"trigger":1}
,"trigger":{"trigger":1,"=newtrigger":1,"sched.schedulejob":1}
,"=newtrigger":{".withidentity":1}
,"mytrigger":{"group1":1}
,".startnow":{".withschedule":1}
,".withschedule":{"(simpleschedule":1}
,"(simpleschedule":{".withintervalinseconds":1}
,".withintervalinseconds":{"(40)":1}
,"(40)":{".repeatforever":1}
,".repeatforever":{"())":1}
,"())":{".build":1}
,"\u002F\u002Ftell":{"quartz":1}
,"schedule":{"job":1}
,"using":{"trigger":1}
,"sched.schedulejob":{"(job":1}
,"(job":{"trigger)":1}
}
;Search.control.loadWordPairs(pairs);
