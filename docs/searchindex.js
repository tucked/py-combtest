Search.setIndex({envversion:47,filenames:["api","examples","index","introduction","introduction_combtesting"],objects:{"combtest.action":{Action:[0,1,1,""],OptionSet:[0,1,1,""],SyncPoint:[0,1,1,""],get_random_action_by_class:[0,5,1,""]},"combtest.action.Action":{from_json:[0,2,1,""],get_option_set:[0,2,1,""],run:[0,3,1,""],should_cancel:[0,3,1,""],static_ctx:[0,4,1,""],to_json:[0,3,1,""]},"combtest.action.OptionSet":{from_json:[0,2,1,""],next:[0,3,1,""],to_json:[0,3,1,""]},"combtest.action.SyncPoint":{replay:[0,3,1,""],run_as_replay:[0,3,1,""],update_remote_contexts:[0,3,1,""]},"combtest.bootstrap":{ConnectionInfo:[0,1,1,""],ServiceHandleArray:[0,1,1,""],ServiceHandler:[0,1,1,""],ServiceHandler_Local:[0,1,1,""]},"combtest.bootstrap.ServiceHandleArray":{REMOTE_CONNECTION_CLASS:[0,4,1,""],attach:[0,3,1,""],is_alive:[0,4,1,""],shutdown:[0,3,1,""],shutdown_all:[0,2,1,""],spawn:[0,3,1,""],spawn_many:[0,3,1,""]},"combtest.bootstrap.ServiceHandler":{shutdown:[0,3,1,""],start_cmd:[0,3,1,""]},"combtest.config":{CONFIG_LOC:[0,6,1,""],DEFAULT_LOGGER_PORT:[0,6,1,""],DEFAULT_MAX_THREAD_COUNT:[0,6,1,""],DEFAULT_SERVICE_PORT:[0,6,1,""],get_logger_port:[0,5,1,""],get_machine_ips:[0,5,1,""],get_max_thread_count:[0,5,1,""],get_service_port:[0,5,1,""],get_ssh_options:[0,5,1,""],get_ssh_passwords:[0,5,1,""],get_ssh_rsa_keys:[0,5,1,""],get_ssh_usernames:[0,5,1,""],refresh_cfg:[0,5,1,""],set_service_port:[0,5,1,""]},"combtest.encode":{decode:[0,5,1,""],encode:[0,5,1,""]},"combtest.forkjoin":{WorkItem:[0,1,1,""],fork_join:[0,5,1,""]},"combtest.replay":{load_from_master:[0,5,1,""],load_from_trace:[0,5,1,""],replay_walk:[0,5,1,""],replay_walk_by_id:[0,5,1,""]},"combtest.runner":{ContinuingWalkServiceGroup:[0,1,1,""],MultistageWalkRunner:[0,1,1,""],MultistageWalkRunningService:[0,1,1,""],WalkExecutorService:[0,1,1,""],WalkRunner:[0,1,1,""],replay_multistage_walk:[0,5,1,""],run_multistage_walks:[0,5,1,""],run_walks:[0,5,1,""]},"combtest.runner.ContinuingWalkServiceGroup":{gather_all_resp:[0,3,1,""],scatter_work:[0,3,1,""],start_remote_logging:[0,3,1,""],update_remote_contexts:[0,3,1,""]},"combtest.runner.MultistageWalkRunningService":{RUNNER_TYPE:[0,4,1,""]},"combtest.runner.WalkExecutorService":{WALK_RUNNER_TYPE:[0,4,1,""],WORKER_TYPE:[0,4,1,""],work_repack:[0,3,1,""]},"combtest.runner.WalkRunner":{count_cancel:[0,3,1,""],count_error:[0,3,1,""],count_total:[0,3,1,""],prep_work_call:[0,3,1,""],run_walk:[0,3,1,""]},"combtest.ssh_handle":{ServiceHandler_SSH:[0,1,1,""]},"combtest.utils":{RangeTree:[0,1,1,""],get_class_from_qualname:[0,5,1,""],get_class_qualname:[0,5,1,""],get_my_IP:[0,5,1,""],set_my_IP:[0,5,1,""]},"combtest.walk":{CancelWalk:[0,7,1,""],Walk:[0,1,1,""],WalkFailedError:[0,7,1,""],WalkOpTracer:[0,1,1,""],WalkOptions:[0,1,1,""]},"combtest.walk.Walk":{append:[0,3,1,""],execute:[0,3,1,""]},"combtest.walk.WalkOptions":{sizes:[0,4,1,""]},"combtest.worker":{CoordinatorService:[0,1,1,""],ServiceGroup:[0,1,1,""],ThreadPool:[0,1,1,""],start_remote_services:[0,5,1,""],start_service:[0,5,1,""],start_service_by_name:[0,5,1,""]},"combtest.worker.CoordinatorService":{DEFAULT_MAX_THREAD_COUNT:[0,4,1,""],WORKER_TYPE:[0,4,1,""],exposed_add_work:[0,3,1,""],exposed_clean_worker:[0,3,1,""],exposed_gather_ctx:[0,3,1,""],exposed_gather_resp:[0,3,1,""],exposed_join_all_workers:[0,3,1,""],exposed_join_workers:[0,3,1,""],exposed_run:[0,3,1,""],exposed_signal_stop:[0,3,1,""],exposed_start_remote_logging:[0,3,1,""],exposed_start_work:[0,3,1,""],exposed_start_workers_on:[0,3,1,""],on_connect:[0,3,1,""],work_repack:[0,3,1,""]},"combtest.worker.ServiceGroup":{DEFAULT_INSTANCE_COUNT:[0,4,1,""],SPAWN_TIMEOUT:[0,4,1,""],WORK_QUANTUM_SIZE:[0,4,1,""],clients:[0,4,1,""],gather_all_ctxs:[0,3,1,""],gather_all_resp:[0,3,1,""],gather_ctx:[0,3,1,""],gather_resp:[0,3,1,""],give_up:[0,2,1,""],join:[0,3,1,""],run:[0,3,1,""],scatter_work:[0,3,1,""],shutdown:[0,3,1,""],shutdown_clients:[0,3,1,""],shutdown_services:[0,3,1,""],spawn:[0,3,1,""],spawn_clients:[0,3,1,""],spawn_services:[0,3,1,""],start_all_on:[0,3,1,""],start_remote_logging:[0,3,1,""]},"combtest.worker.ThreadPool":{add_work:[0,3,1,""],join:[0,3,1,""],kick_workers:[0,3,1,""],on_error_item:[0,3,1,""],on_finish:[0,3,1,""],on_finish_item:[0,3,1,""],on_start:[0,3,1,""],on_start_item:[0,3,1,""],run:[0,3,1,""],signal_stop:[0,3,1,""],start:[0,3,1,""],start_all_on_next:[0,3,1,""]},combtest:{action:[0,0,0,"-"],bootstrap:[0,0,0,"-"],config:[0,0,0,"-"],encode:[0,0,0,"-"],forkjoin:[0,0,0,"-"],replay:[0,0,0,"-"],runner:[0,0,0,"-"],ssh_handle:[0,0,0,"-"],utils:[0,0,0,"-"],walk:[0,0,0,"-"],worker:[0,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","classmethod","Python class method"],"3":["py","method","Python method"],"4":["py","attribute","Python attribute"],"5":["py","function","Python function"],"6":["py","data","Python data"],"7":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:classmethod","3":"py:method","4":"py:attribute","5":"py:function","6":"py:data","7":"py:exception"},terms:{"__init__":0,"__qualname__":0,"case":[0,2,3],"class":0,"default":0,"function":[0,4],"import":[0,3],"int":0,"long":0,"new":[0,4],"return":0,"super":0,"true":0,"try":0,"while":0,abandon:0,abil:0,abl:0,about:0,abov:[0,4],accept:0,access:0,accomplish:[0,4],accumul:0,achild:0,across:[0,3,4],act:0,action1:0,action2:0,action3:0,action4:0,action_class:0,actual:0,add:0,add_work:0,addit:[0,4],addition:4,address:0,adjac:0,advanc:3,advantag:[0,3],affect:0,after:0,aka:4,algorithm:0,alia:0,all:[0,3,4],all_on_next:0,allevi:4,allow:[0,3],along:0,alreadi:0,also:[0,4],altern:0,amount:0,ani:[0,3,4],anyth:0,appear:0,append:0,applic:0,arbitrari:0,arg:0,argument:0,around:0,arrai:0,aspect:4,assert:0,associ:0,assum:0,assumpt:0,asynchron:0,atexit:0,attach:0,attempt:0,attribut:0,attributeerror:0,authent:0,automat:4,avail:[0,4],awai:0,back:0,bail:0,base:[0,3,4],basic:[0,3],batch:0,becaus:[0,4],becom:3,been:0,befor:0,begin:3,behavior:0,below:0,best:0,bewar:0,bit:0,blah:[0,1],bool:0,both:[0,3],box:[0,4],branch_id:0,bug:0,build:3,built:3,bunch:[0,4],bundl:0,busi:0,button:4,bytecod:0,cach:0,call:[0,4],callabl:0,callback:0,caller:0,can:[0,3,4],cancel:0,cancelwalk:0,cannot:0,capabl:4,care:0,central:0,cfg:0,challeng:3,chanc:0,chang:4,check:[0,4],checkbox1:[0,4],checkbox:[0,4],child:0,children:0,chosen:0,chunk:0,classmethod:0,clean:0,cleanli:0,click:4,client:0,cluster:0,code:0,collaps:4,collect:0,combin:[0,3,4],combinator:2,combinatori:[3,4],come:[0,3],commun:0,compat:0,complet:0,complex:3,concentr:3,concept:0,conceptu:4,concern:3,condit:[0,3,4],confid:3,config_loc:0,configur:3,conn:0,connect:0,connection_info:0,connectioninfo:0,consist:0,constitut:0,constraint:0,contact:0,contain:[0,4],content:4,context:0,continuingwalkservicegroup:0,control:[0,4],convert:0,coordin:0,coordinatorservic:0,copi:0,core:0,correct:0,correspond:0,could:0,count:0,count_cancel:0,count_error:0,count_tot:0,cover:4,coverag:[3,4],cpu:4,crash:0,ctx:0,current:[0,4],custom:[0,3],data:0,dead:0,deal:0,debug:0,decend:0,decid:0,decod:0,default_instance_count:0,default_logger_port:0,default_max_thread_count:0,default_service_port:0,defin:0,depend:4,dequeu:0,describ:0,deseri:0,design:[0,3],desir:3,determinist:3,develop:3,dict:0,dictionari:0,differ:[0,4],direct:0,directli:0,directori:0,disk:0,dispatch:[0,4],doc:0,dodg:0,doe:0,doesn:0,don:0,done:0,down:0,drain:0,drawn:4,due:0,dure:0,dynam:0,dynamic_ctx:0,each:[0,3,4],earli:0,easi:[0,3],easili:3,edg:3,either:0,elaps:0,elem:0,element:4,els:0,end:0,enforc:0,enough:0,enumer:[0,3],eoferror:0,epoch:0,equival:0,error:0,establish:0,etc:[0,3,4],even:[0,3],ever:0,everyth:0,evid:0,exampl:0,exc:0,except:0,execut:[0,3],executor:[0,3],exhaust:0,exist:0,exit:0,expand:4,expect:0,experienc:4,explain:0,explicitli:0,explor:4,explos:[3,4],exponenti:3,expos:0,exposed_add_work:0,exposed_clean_work:0,exposed_gather_ctx:0,exposed_gather_resp:0,exposed_join_all_work:0,exposed_join_work:0,exposed_run:0,exposed_signal_stop:0,exposed_start_remote_log:0,exposed_start_work:0,exposed_start_workers_on:0,extend:0,extra:0,facto:0,fail:0,failur:0,fals:0,fatal:0,featur:0,feedback:4,few:0,figur:0,file:0,find:0,finer:0,finish:0,first:0,fit:0,fix:0,flexibl:0,fly:0,foor:0,footprint:0,foreach:0,fork:0,fork_join:0,form:4,found:0,framework:4,free:0,from:[0,4],from_json:0,full:0,fulli:0,func:0,fundament:0,further:0,fuzz:[0,3],gather:0,gather_all_ctx:0,gather_all_resp:0,gather_ctx:0,gather_resp:0,gener:[0,2,3],get:[0,3,4],get_an_instance_of_my_gui:4,get_class_from_qualnam:0,get_class_qualnam:0,get_logger_port:0,get_machine_ip:0,get_max_thread_count:0,get_my_ip:0,get_option_set:[0,4],get_random_action_by_class:0,get_service_port:0,get_ssh_opt:0,get_ssh_password:0,get_ssh_rsa_kei:0,get_ssh_usernam:0,getter:0,giant:0,gil:0,give:0,give_up:0,given:[0,3,4],global:0,grain:0,graph:[0,4],great:4,guarante:3,guess:0,gui:[0,4],hand:3,handi:0,handl:0,handler:0,happen:[0,4],hard:0,hardcod:3,have:[0,3,4],heard:4,heavi:0,help:0,henc:[0,4],here:0,hidden:0,hide:4,hierarch:0,high:2,highli:3,hit:0,hold:0,hook:0,hostnam:0,how:0,human:0,id_map:0,idea:4,idempot:0,idx:0,ignor:0,illustr:4,immedi:0,immut:0,implement:0,impli:0,importerror:0,includ:[0,4],independ:0,index:[0,2],indic:0,individu:0,info:0,inform:0,infrastructur:3,inherit:0,initi:0,input:[3,4],instanc:[0,4],instanti:0,intend:0,interact:[0,4],interfac:0,intermedi:0,intern:0,interpret:0,interproc:0,introduct:2,invok:0,involv:4,ipsum:4,is_al:0,isn:0,issu:0,item:0,iter:0,itself:0,java:0,job:0,join:0,join_work:0,joing:0,json:0,json_str:0,jsonifi:0,just:[0,3],keep:0,kei:0,kick:0,kick_work:0,kill:0,kind:2,know:0,known:4,kwarg:0,lai:4,larg:0,later:0,layer:0,lazi:0,leak:0,least:0,left:0,len:0,let:0,level:[0,2],leverag:[0,3],lib:[0,3,4],like:[0,3,4],limit:0,list:[0,4],listen:0,load:0,load_from_mast:0,load_from_trac:0,loader:0,local:0,locat:0,log:[0,3],log_dir:0,log_error:0,log_fil:0,log_namespac:0,logger:0,logger_port:0,logic:[0,3],look:[0,4],lorem:4,machin:0,made:0,magnitud:3,mai:[0,3,4],main:0,make:[0,3],makespan:0,man:0,mani:0,manipul:0,manual:0,map:0,massiv:0,master:0,match:0,max:0,max_idx:0,max_spawn_thread:0,max_thread_count:0,maximum:0,mayb:3,mean:[0,3,4],meant:0,measur:0,mechan:[0,3,4],mem:[0,3],member:[0,4],memori:0,menu:4,method:0,metric:[3,4],min_idx:0,mind:3,minim:0,misc:0,model:0,modifi:0,more:[0,3],most:0,much:0,multipl:[0,4],multiprocess:0,multistagewalkrunn:0,multistagewalkrunningservic:0,must:0,mutat:0,myactionclass:[0,4],name:0,namespac:0,natur:3,necessari:3,need:[0,3],net:3,netref:0,network:0,nevertheless:3,next:0,node:[0,4],none:0,note:0,noth:0,notion:0,number:[0,3],obei:0,obj:0,object:0,obtain:0,obviou:0,off:0,on_connect:0,on_error_item:0,on_finish:0,on_finish_item:0,on_start:0,on_start_item:0,onc:0,onli:0,oper:[0,4],opportun:0,optim:0,option:0,optionset:0,order:[0,3],origin:0,other:[0,4],otherwis:[0,3],our:[0,4],out:[0,3,4],output:0,outstand:0,over:0,overrid:0,overridden:0,overriden:0,overview:2,own:0,page:2,pair:0,paral:0,paralel:3,parallel:[0,3,4],paramater:0,paramet:0,parameter:0,paramiko:0,parent:0,part:0,particular:0,particularli:[0,3],partit:0,pass:0,password:0,path:0,pattern:3,per:0,perform:[0,4],perhap:0,pickl:0,picklabl:0,piec:0,pinch:0,place:4,pleas:0,point:0,pointer:[0,4],pool:0,poor:0,pop:0,port:0,portion:0,possibl:[0,4],potenti:0,prefer:0,prefix:0,prep:0,prep_work_cal:0,presum:0,prevent:0,print:0,prior:0,probabl:0,problem:0,proc:0,proce:0,process:0,produc:[0,3],product:3,prove:0,provid:[0,3,4],pseudocod:4,pull:0,purpos:0,push:0,python2:0,python3:0,python:0,qualifi:0,qualiti:3,qualnam:0,quantum:0,queu:0,queue:0,quick:2,quickli:0,quit:0,radio:4,rais:0,ran:0,randomli:0,rang:0,rangetre:0,rather:0,reach:0,readabl:0,realiz:3,realli:[0,3,4],reap:0,reason:0,receiv:0,reclaim:0,ref:0,referenc:0,referenceerror:0,refresh:0,refresh_cfg:0,regardless:0,relat:0,relev:4,remot:[0,3],remote_connection_class:0,repackag:0,replac:0,replay_func_qualnam:0,replay_multistage_walk:0,replay_walk:0,replay_walk_by_id:0,report:0,reporting_interv:0,repres:0,represent:0,request:0,requir:0,resolv:0,resourc:0,resp:0,resp_object:0,respect:[0,3],respon:0,respons:0,rest:0,result:[0,3],retain:0,retri:0,retriev:0,right:0,root:0,root_valu:0,roughli:0,roundtrip:0,rpc:0,rpyc:0,rsa:0,run:[0,3,4],run_as_replai:0,run_multistage_walk:0,run_walk:0,runner_class:0,runner_kwarg:0,runner_typ:0,runtim:0,runtimeerror:0,safe:0,sai:0,sake:0,same:[0,3],sane:0,satisfi:0,scalabl:[0,3],scatter:0,scatter_work:0,scenario:3,schedul:0,search:2,season:3,second:0,see:0,segment:0,self:0,semant:0,send:0,sens:0,sent:0,sequenc:[0,4],seri:4,serial:[0,3],server:0,servic:0,service_class:0,service_group_class:0,service_handler_class:0,service_info:0,service_nam:0,service_run_func:0,servicegroup:0,servicehandl:0,servicehandlearrai:0,servicehandler_loc:0,servicehandler_ssh:0,servicehandlerarrai:0,set:[0,3,4],set_my_ip:0,set_service_port:0,setter:0,share:0,shared_ctx:0,sheer:3,should:0,should_cancel:0,shut:0,shutdown:0,shutdown_al:0,shutdown_cli:0,shutdown_servic:0,side:0,signal:0,signal_stop:0,silent:0,similar:0,simpl:0,simpler:3,simplest:0,simpli:0,simultan:0,sinc:[0,3],singl:0,size:0,slice:0,slightli:0,small:3,softwar:3,solid:0,some:[0,3,4],someth:0,sometim:[0,3,4],somewhat:4,sort:[0,4],sourc:0,space:[0,4],spawn:0,spawn_client:0,spawn_mani:0,spawn_servic:0,spawn_timeout:0,specif:[0,3,4],specifi:0,spend:0,split:0,ssh:0,stage:0,stai:0,start:[0,2,3],start_all_on:0,start_all_on_next:0,start_cmd:0,start_remote_log:0,start_remote_servic:0,start_servic:0,start_service_by_nam:0,start_work:0,stat:[0,3],state:[0,4],stateless:0,static_ctx:0,stderr:0,step:[0,3],still:0,stitch:0,stop:0,stopiter:0,store:0,str:0,stress:0,string:0,struct:0,stuff:0,style:0,sub:0,succe:0,successfulli:0,support:[0,3],suppos:[0,4],suppress_error:0,sure:0,swap:0,synchron:0,syncpoint1:0,syncpoint:0,system:[0,3],systemat:[0,3,4],take:[0,3,4],telescop:3,tell:0,term:[0,3,4],terminolog:4,test:[0,2],tester:[3,4],text:4,than:[0,3],thei:[0,3],them:0,themselv:0,theori:[0,4],therefor:0,thi:[0,2],thing:4,think:[0,4],those:[0,3,4],thread:0,threadedserv:0,threadpool:0,threadsaf:0,three:0,through:[0,4],throughout:4,thu:4,time:[0,3],timeout:0,to_json:0,todo:[3,4],togeth:0,ton:[3,4],too:0,tool:[0,3],toss:0,total:0,trace:0,trace_fil:0,track:0,tradit:3,transit:[0,4],tree:0,tupl:[0,4],turn:4,twiddl:0,two:0,type:0,typeerror:0,typic:0,uncheck:[0,4],underli:0,uniqu:[0,4],unit:0,unittest:3,unless:0,unlik:3,until:[0,4],updat:0,update_remote_context:0,user:[0,3],usernam:0,valid:[0,4],valu:0,vanilla:0,vari:4,variou:[0,3],verbos:0,veri:0,verifi:3,versa:4,via:0,vice:4,volum:3,wai:[0,3,4],wait:0,walk_ctx:0,walk_id:0,walk_opt:0,walk_ord:0,walk_runner_typ:0,walk_to_run:0,walkexecutorservic:0,walkfailederror:0,walkopt:0,walkoptrac:0,walkrunn:0,walkthreadpool:0,want:[0,4],well:0,were:0,what:[0,4],whatev:[0,4],when:[0,4],where:[0,3,4],whether:[0,4],which:[0,3],whitebox:4,whole:0,whose:0,why:2,within:0,won:0,work:0,work_item:0,work_quantum_s:0,work_repack:0,worker_id:0,worker_typ:0,workflow:3,workitem:0,world:4,would:[0,3,4],wrap:0,write:[0,3],writer:[0,3],written:3,xxx:4,yet:0,you:[0,3],your:0},titles:["py-combtest API reference","Example code","py-combtest","Overview","An Introduction To Combinatoric Test Case Generation (Combtesting)"],titleterms:{"case":4,action:0,api:0,bootstrap:0,code:1,combinator:4,combtest:[0,2,4],config:0,encod:0,exampl:[1,3],forkjoin:0,gener:4,high:3,indic:2,introduct:4,kind:3,level:3,modul:0,overview:3,refer:0,replai:0,runner:0,ssh_handl:0,submodul:0,tabl:2,test:[3,4],thi:3,util:0,walk:0,why:3,worker:0}})