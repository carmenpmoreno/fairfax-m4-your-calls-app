(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a.p+"static/media/logo_your_calls.e60bb3ff.svg"},25:function(e,t,a){e.exports=a.p+"static/media/tick.cd8bfaed.svg"},27:function(e,t,a){e.exports=a(54)},32:function(e,t,a){},41:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){},50:function(e,t,a){},52:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(22),o=a.n(r),i=(a(32),a(8)),s=a(3),c=a(4),m=a(6),d=a(5),p=a(7),u=a(2),h=a(23),f=a.n(h),g=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("header",{className:"header"},l.a.createElement("div",{className:"header__logo"},l.a.createElement("h1",{className:"logo"},"Interacso")),l.a.createElement("div",{className:"header__appLogo"},l.a.createElement("img",{src:f.a,className:"your-calls",alt:"Your Calls"})))}}]),t}(n.Component),b=a(59),E=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("nav",{className:"menu"},l.a.createElement("div",{className:"menu__container"},l.a.createElement("div",{className:"menu__newCall"},l.a.createElement(b.a,{exact:!0,to:"/",className:"new-call__link",activeClassName:"is-active"},l.a.createElement("p",{className:"newCall__title"},"Nueva Llamada"))),l.a.createElement("div",null,l.a.createElement(b.a,{to:"/callHistory",className:"call-back__link",activeClassName:"is-active"},l.a.createElement("p",{className:"historic__title"},"Hist\xf3rico"))),l.a.createElement(b.a,{exact:!0,to:"/dashboard",className:"new-call__link",activeClassName:"is-active"},l.a.createElement("p",{className:"stadistics__title"},"Estad\xedsticas"))))}}]),t}(n.Component),y=a(11),v=a(14),C=a(12);y.b.add(C.d,C.c,C.b);var _=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.preventSubmission,a=e.getWhoCalls,n=e.errorPerson,r=e.getRequestedEmployee,o=e.getName,i=e.getCompany,s=e.getPosition,c=e.getOtherInfo,m=e.getEmail,d=e.getPhone,p=e.getCallAction,u=e.getMessage,h=e.errorMessage,f=e.deselectOption,g=e.selectPersonRequested,b=e.redialCheck,E=e.callBackCheck,y=e.callAgainClass,C=e.callBackClass,_=e.getInputTone,O=e.tone,N=e.errorTone;return l.a.createElement("form",{method:"post",onSubmit:t,className:"registration__form"},l.a.createElement("fieldset",{className:"form-section addedBy"},l.a.createElement("div",{className:"formUp"},l.a.createElement("div",{className:"main__addedBy"},l.a.createElement("h2",{className:"main__addedBy--title"},"\xbfQui\xe9n atendi\xf3 la llamada?"),l.a.createElement("select",{className:"main__employees",onChange:a},l.a.createElement("option",{value:"Elige un empleado"},"Elige un empleado"),l.a.createElement("option",{value:"Alex"},"Alex"),l.a.createElement("option",{value:"Bea"},"Bea"),l.a.createElement("option",{value:"Chuck"},"Chuck"),l.a.createElement("option",{value:"Isma"},"Isma"),l.a.createElement("option",{value:"Juan"},"Juan"),l.a.createElement("option",{value:"Lily"},"Lily"),l.a.createElement("option",{value:"Natalia"},"Natalia"),l.a.createElement("option",{value:"Paula"},"Paula"),l.a.createElement("option",{value:"Sera"},"Sera")),l.a.createElement("p",{className:"error-msg-employee ".concat(n)},"Debes seleccionar un empleado")),l.a.createElement("div",{className:"main__personRequested"},l.a.createElement("h2",{className:"main__personRequested-title"},"\xbfPor qui\xe9n preguntaban?"),l.a.createElement("select",{className:"main__employees",onChange:r,onClick:f,ref:g,required:!0},l.a.createElement("option",{className:"option",value:"Elige un empleado"},"Elige un empleado"),l.a.createElement("option",{value:"Alex"},"Alex"),l.a.createElement("option",{value:"Bea"},"Bea"),l.a.createElement("option",{value:"Chuck"},"Chuck"),l.a.createElement("option",{value:"Isma"},"Isma"),l.a.createElement("option",{value:"Juan"},"Juan"),l.a.createElement("option",{value:"Lily"},"Lily"),l.a.createElement("option",{value:"Natalia"},"Natalia"),l.a.createElement("option",{value:"Paula"},"Paula"),l.a.createElement("option",{value:"Sera"},"Sera")),l.a.createElement("p",{className:"error-msg-employee ".concat(n)},"Debes seleccionar un empleado")))),l.a.createElement("div",{className:"incoming-data__container"},l.a.createElement("fieldset",{className:"form-section incoming-data"},l.a.createElement("h2",{className:"incoming-data__title"},"\xbfQui\xe9n llam\xf3?"),l.a.createElement("div",{className:"incoming-data__fieldsContainer"},l.a.createElement("div",{className:"incoming-data__name"},l.a.createElement("label",{htmlFor:"name",className:"incoming-data__name--label label","aria-label":"nombre"},"Nombre"),l.a.createElement("input",{id:"name",type:"text",className:"incoming-data__name--input incoming-data__input",placeholder:"Nombre",onKeyUp:o}),l.a.createElement("p",{className:"error-msg ".concat(this.props.nameRequired)},"El campo nombre es obligatorio")),l.a.createElement("div",{className:"incoming-data__company"},l.a.createElement("label",{htmlFor:"company",className:"incoming-data__company--label label","aria-label":"empresa"},"Empresa"),l.a.createElement("input",{id:"company",type:"text",className:"incoming-data__company--input incoming-data__input",placeholder:"Empresa",onKeyUp:i}),l.a.createElement("p",{className:"error-msg ".concat(this.props.companyRequired)},"El campo empresa es obligatorio")),l.a.createElement("div",{className:"incoming-data__position"},l.a.createElement("label",{htmlFor:"position",className:"incoming-data__position--label label","aria-label":"cargo"},"Cargo"),l.a.createElement("input",{id:"position",type:"text",className:"incoming-data__position--input incoming-data__input",placeholder:"Cargo",onKeyUp:s})),l.a.createElement("div",{className:"incoming-data__other-info"},l.a.createElement("label",{htmlFor:"other-info",className:"incoming-data__other-info--label label","aria-label":"otro detalle"},"Otro detalle"),l.a.createElement("input",{id:"other-info",type:"text",className:"incoming-data__other-info--input incoming-data__input",placeholder:"Otro detalle",onKeyUp:c})),l.a.createElement("div",{className:"incoming-data__email"},l.a.createElement("label",{htmlFor:"email",className:"incoming-data__email--label label","aria-label":"email"},"Email"),l.a.createElement("input",{id:"email",type:"email",className:"incoming-data__email--input incoming-data__input",placeholder:"Email",onKeyUp:m})),l.a.createElement("div",{className:"incoming-data__mobile"},l.a.createElement("label",{htmlFor:"mobile",className:"incoming-data__mobile--label label","aria-label":"tel\xe9fono"},"Tel\xe9fono"),l.a.createElement("input",{id:"mobile",type:"tel",className:"incoming-data__mobile--input incoming-data__input",placeholder:"Tel\xe9fono",onKeyUp:d})))),l.a.createElement("fieldset",{className:"form-section message"},l.a.createElement("h2",{className:"message__title"},"\xbfQu\xe9 mensaje dej\xf3?"),l.a.createElement("div",{className:"call-container__wrapper"},l.a.createElement("div",{className:"call-container__radios"},l.a.createElement("div",{className:"call__container"},l.a.createElement("label",{htmlFor:"redial",className:"callAction_selection label fake-redial-button ".concat(y)},"Llamar\xe1 de nuevo",l.a.createElement("input",{id:"redial",type:"checkbox",checked:b,value:"Llamar\xe1 de nuevo",className:"callAction__selection--redial",placeholder:"Llamar\xe1 de nuevo",name:"call",onChange:p,ref:this.redialButton}))),l.a.createElement("div",{className:"call__container"},l.a.createElement("label",{htmlFor:"call-back",className:"callAction_selection label fake-CallBack-button ".concat(C)},"Devolver la llamada",l.a.createElement("input",{id:"call-back",type:"checkbox",checked:E,value:"Devolver la llamada",className:"callAction__selection--call-back",placeholder:"Devolver la llamada",name:"call",onChange:p,ref:this.callBack})))),l.a.createElement("div",{className:"message_container"},l.a.createElement("label",{htmlFor:"message",className:"message__label label"},"Mensaje personalizado"),l.a.createElement("textarea",{name:"message",id:"message",className:"message__input",placeholder:"Mensaje personalizado",onKeyUp:u}),l.a.createElement("p",{className:"error-msg-textarea ".concat(h)},"Debes rellenar el campo del mensaje."))))),l.a.createElement("fieldset",{className:"form-section tone"},l.a.createElement("legend",{className:"form__tone-title"},"\xbfC\xf3mo fue el clima de la llamada?"),l.a.createElement("div",{className:"form__tone-container"},l.a.createElement("label",{htmlFor:"good",className:O.includes("good")?"tone__label selectedClass":"tone__label"},l.a.createElement(v.a,{icon:"smile",className:"icon"}),"Genial"),l.a.createElement("input",{className:"tone__input",type:"radio",name:"tone",id:"good",value:"good",checked:O.includes("good"),onChange:_,required:!0}),l.a.createElement("label",{htmlFor:"neutral",className:O.includes("neutral")?"tone__label selectedClass":"tone__label"},l.a.createElement(v.a,{icon:"meh",className:"icon"}),"Meh"),l.a.createElement("input",{className:"tone__input",type:"radio",name:"tone",id:"neutral",value:"neutral",checked:O.includes("neutral"),onChange:_,required:!0}),l.a.createElement("label",{htmlFor:"bad",className:O.includes("bad")?"tone__label selectedClass":"tone__label"},l.a.createElement(v.a,{icon:"frown",className:"icon"}),"Bad"),l.a.createElement("input",{className:"tone__input",type:"radio",name:"tone",id:"bad",value:"bad",checked:O.includes("bad"),onChange:_,required:!0}),l.a.createElement("p",{className:"error-msg-tone ".concat(N)},"Debes seleccionar un estado."))))}}]),t}(n.Component),O=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"button-register"},l.a.createElement("input",{type:"submit",className:"register",value:"Registrar",onClick:this.props.sendForm}))}}]),t}(n.Component),N=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(n.Fragment,null,l.a.createElement(_,{preventSubmission:this.props.preventSubmission,getWhoCalls:this.props.getWhoCalls,errorPerson:this.props.errorPerson,getRequestedEmployee:this.props.getRequestedEmployee,errorIncomingData:this.props.errorIncomingData,getName:this.props.getName,getCompany:this.props.getCompany,getPosition:this.props.getPosition,getOtherInfo:this.props.getOtherInfo,getEmail:this.props.getEmail,getPhone:this.props.getPhone,errorCallAction:this.props.errorCallAction,getCallAction:this.props.getCallAction,getMessage:this.props.getMessage,errorMessage:this.props.errorMessage,deselectOption:this.props.deselectOption,selectPersonRequested:this.props.selectPersonRequested,callBackClass:this.props.callBackClass,callAgainClass:this.props.callAgainClass,redialCheck:this.props.redialCheck,callBackCheck:this.props.callBackCheck,getInputTone:this.props.getInputTone,tone:this.props.tone,errorTone:this.props.errorTone,nameRequired:this.props.nameRequired,companyRequired:this.props.companyRequired}),l.a.createElement(O,{sendForm:this.props.sendForm}))}}]),t}(n.Component),S=a(13),j=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"printRow",value:function(e){return l.a.createElement("tr",{className:"list__item",key:e._id},l.a.createElement("td",null,l.a.createElement("p",{className:"date__day"},e.loggedAt.split("T")[0].split("-").reverse().join("/")),l.a.createElement("p",{className:"hour"},e.loggedAt.split("T")[1].split("",5),"h")),l.a.createElement("td",null,l.a.createElement("p",{className:"askfor"},e.personRequested)),l.a.createElement("td",null,l.a.createElement("p",{className:"name"},e.name)),l.a.createElement("td",null,l.a.createElement("p",{className:"company"},e.company)),l.a.createElement("td",null,l.a.createElement("p",{className:"position"},e.position)),l.a.createElement("td",null,l.a.createElement("p",{className:"otherinfo"},e.otherInfo,e.email,e.telephone)),l.a.createElement("td",null,l.a.createElement("p",{className:"message"},e.message),l.a.createElement("p",{className:"action"},e.action)))}},{key:"printTable",value:function(e){var t=this;return e.map(function(e){return t.printRow(e)})}},{key:"componentDidMount",value:function(){this.props.actionShowList()}},{key:"render",value:function(){var e=this.props,t=e.results,a=(e.actionFilterDate,S().format("YYYY-MM-DD")),n=t.filter(function(e){return S(e.loggedAt,"YYYY-MM-DD").isSame(a)}),r=t.filter(function(e){return!S(e.loggedAt,"YYYY-MM-DD").isSame(a)});return l.a.createElement("div",{className:"wrapper__callHistory"},l.a.createElement("table",{className:"table"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{className:"table__title title__date cell"},"Fecha/hora"),l.a.createElement("th",{className:"table__title title__questions cell"},"Preguntaron por"),l.a.createElement("th",{className:"table__title cell",colSpan:"4"},"Llam\xf3"),l.a.createElement("th",{className:"table__title cell"},"Mensaje")),l.a.createElement("tr",null,l.a.createElement("th",{colSpan:"2",className:"cell table__date"},l.a.createElement("div",{className:"main__subtitle--date-container-history"},l.a.createElement("div",{className:"dateStart"},l.a.createElement("label",{htmlFor:"dateStart"}),l.a.createElement("input",{id:"dateStart",type:"date",className:"input-date",placeholder:"Desde: 26/02/1991",onChange:this.props.actionGetStartDate})),l.a.createElement("div",{className:"dateEnd"},l.a.createElement("label",{htmlFor:"dateEnd"}),l.a.createElement("input",{id:"dateEnd",type:"date",className:"input-date",placeholder:"Hasta: 26/03/2019",onChange:this.props.actionGetEndDate})))),l.a.createElement("th",{className:"cell"},"Nombre"),l.a.createElement("th",{className:"cell"},"Empresa"),l.a.createElement("th",{className:"cell"},"Cargo / detalles / contacto"),l.a.createElement("th",{className:"cell",colSpan:"2"},"Detalle")),this.printTable(n),l.a.createElement("tr",null,l.a.createElement("th",{colSpan:"7"},"Ayer y Anteriores")),this.printTable(r))))}}]),t}(n.Component),k=a(19);function D(e){return e<10?"0".concat(e):e}a(41);var F=a(58),T=a(55),A=a(25),P=a.n(A),M=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"modal ".concat(this.props.sucess)}," ",l.a.createElement("img",{src:P.a,alt:"tick",className:"tick"}),"La llamada a ",this.props.personRequested," se ha registrado correctamente y ya se ha notificado.")}}]),t}(n.Component);a(44);y.b.add(C.a);var R=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("fieldset",{className:"dateFilterContainer"},l.a.createElement("legend",{className:"dateFilterLegend"},"Rango de fecha"),l.a.createElement("div",{className:"main__subtitle--date-container"},l.a.createElement("div",{className:"dateStart"},l.a.createElement("label",{htmlFor:"dateStart"}),l.a.createElement("input",{id:"dateStart",value:this.props.dateStart,type:"date",className:"input-date",onChange:this.props.actionSetFilterStartDate})),l.a.createElement("div",{className:"dateEnd"},l.a.createElement("label",{htmlFor:"dateEnd"}),l.a.createElement("input",{id:"dateEnd",value:this.props.dateEnd,type:"date",className:"input-date",onChange:this.props.actionSetFilterEndDate}))))}}]),t}(n.Component);a(46);y.b.add(C.a);var q=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.allCompanies,a=e.getCompanySelected,n=e.companySelected;return l.a.createElement("fieldset",{className:"companyFilterContainer"},l.a.createElement("legend",{className:"companyFilterLegend"},"Cliente"),l.a.createElement("label",{className:"companyFilterLabel"},"Filtro por cliente"),l.a.createElement("div",{className:"selectContainer"},l.a.createElement("select",{className:"companySelect",id:"company",name:"company",value:n,onChange:a},l.a.createElement("option",{value:""},"Elige una compa\xf1ia"),t.map(function(e,t){return l.a.createElement("option",{key:t+1,value:e},e)})),l.a.createElement(v.a,{icon:"chevron-down",className:"faChevronDown"})))}}]),t}(n.Component),B=(a(48),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("form",{className:"filtersForm"},l.a.createElement(R,{actionSetFilterStartDate:this.props.actionSetFilterStartDate,actionSetFilterEndDate:this.props.actionSetFilterEndDate,dateStart:this.props.dateStart,dateEnd:this.props.dateEnd}),l.a.createElement(q,{allCompanies:this.props.allCompanies,getCompanySelected:this.props.getCompanySelected,companySelected:this.props.companySelected}))}}]),t}(n.Component)),I=a(18),L=(a(50),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"charts-container"},"ready"===this.props.barLoading?l.a.createElement(I.a,{chartType:"BarChart",width:"550px",height:"300px",data:this.props.barData,options:{title:"Llamadas totales",chartArea:{width:"50%",stroke:"#1C1C1C"},isStacked:!0,orientation:"horizontal",hAxis:{title:"Mes",titleTextStyle:{color:"#fff"},textStyle:{color:"#fff"},minValue:0},vAxis:{title:"N\xfamero de llamadas",titleTextStyle:{color:"#fff"}},legend:{position:"top",alignment:"start",textStyle:{color:"#fff",fontSize:14,fontName:"Arial",bold:!1,italic:!1}},backgroundColor:"#1C1C1C",titleTextStyle:{color:"white",fontSize:20,bold:!0}}}):l.a.createElement("div",null,"Fetching data from API"),"ready"===this.props.pieLoading?l.a.createElement(I.a,{chartType:"PieChart",width:"550px",height:"300px",data:this.props.pieData,options:{slices:[{color:"#58C155"},{color:"#F5C167"},{color:"#EE8268"}],chartArea:{top:"50",width:"50%",height:"80%",stroke:"#1C1C1C"},legend:{textStyle:{color:"#9E9D9E",fontSize:14}},backgroundColor:"#1C1C1C",pieSliceBorderColor:"#1C1C1C",pieSliceTextStyle:{color:"#1C1C1C",bold:!0},title:"Humor de las llamadas",titleTextStyle:{color:"white",fontSize:20}}}):l.a.createElement("div",null,"Fetching data from API"))}}]),t}(n.Component)),w=(a(52),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"dashboardContainer"},l.a.createElement(B,{actionSetFilterStartDate:this.props.actionSetFilterStartDate,actionSetFilterEndDate:this.props.actionSetFilterEndDate,dateStart:this.props.startDate,dateEnd:this.props.endDate,allCompanies:this.props.allCompanies,getCompanySelected:this.props.getCompanySelected,companySelected:this.props.companySelected}),l.a.createElement(L,{pieData:this.props.pieData,pieLoading:this.props.pieLoading,barData:this.props.barData,barLoading:this.props.barLoading}))}}]),t}(n.Component)),x=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Noviembre","Diciembre"],Y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).selectPersonRequested=l.a.createRef(),a.wholeList=[],a.state={info:{addedBy:"",personRequested:"",name:"",company:"",position:"",otherInfo:"",email:"",telephone:0,action:"",message:"",tone:""},errorTone:"hidden",errorIncomingData:"hidden",errorCallAction:"hidden",errorPerson:"hidden",succesMessage:"hidden",errorMessage:"hidden",callAgainClass:"",callBackClass:"",redialCheck:!1,callBackCheck:!1,results:[],startDate:"",endDate:"",dateValues:{dateEnd:"",dateStart:""},filter:{dateStart:"",dateEnd:"",companySelected:""},pieDataLoadingStatus:"loading",pieChartData:[],nameRequired:"hidden",companyRequired:"hidden",barDataLoadingStatus:"loading",dataBarsTransformed:[],barChartData:[],chartDataBars:[],allCompanies:[]},a.getWhoCalls=a.getWhoCalls.bind(Object(u.a)(Object(u.a)(a))),a.getRequestedEmployee=a.getRequestedEmployee.bind(Object(u.a)(Object(u.a)(a))),a.getName=a.getName.bind(Object(u.a)(Object(u.a)(a))),a.getCompany=a.getCompany.bind(Object(u.a)(Object(u.a)(a))),a.getPosition=a.getPosition.bind(Object(u.a)(Object(u.a)(a))),a.getOtherInfo=a.getOtherInfo.bind(Object(u.a)(Object(u.a)(a))),a.getEmail=a.getEmail.bind(Object(u.a)(Object(u.a)(a))),a.getPhone=a.getPhone.bind(Object(u.a)(Object(u.a)(a))),a.getCallAction=a.getCallAction.bind(Object(u.a)(Object(u.a)(a))),a.getMessage=a.getMessage.bind(Object(u.a)(Object(u.a)(a))),a.sendInfo=a.sendInfo.bind(Object(u.a)(Object(u.a)(a))),a.isEmptyOrNot=a.isEmptyOrNot.bind(Object(u.a)(Object(u.a)(a))),a.sendForm=a.sendForm.bind(Object(u.a)(Object(u.a)(a))),a.deselectOption=a.deselectOption.bind(Object(u.a)(Object(u.a)(a))),a.showList=a.showList.bind(Object(u.a)(Object(u.a)(a))),a.getStartDate=a.getStartDate.bind(Object(u.a)(Object(u.a)(a))),a.getEndDate=a.getEndDate.bind(Object(u.a)(Object(u.a)(a))),a.filterDate=a.filterDate.bind(Object(u.a)(Object(u.a)(a))),a.getInputTone=a.getInputTone.bind(Object(u.a)(Object(u.a)(a))),a.setFilterStartDate=a.setFilterStartDate.bind(Object(u.a)(Object(u.a)(a))),a.setFilterEndDate=a.setFilterEndDate.bind(Object(u.a)(Object(u.a)(a))),a.fetchChartPie=a.fetchChartPie.bind(Object(u.a)(Object(u.a)(a))),a.getCompanySelected=a.getCompanySelected.bind(Object(u.a)(Object(u.a)(a))),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){if(this.getCompaniesData(),!this.state.filter.dateEnd&&!this.state.filter.dateStart){var e=function(){var e=new Date,t=e.toLocaleDateString();e.setMonth(e.getMonth()-1);var a=e.toLocaleDateString(),n=t.split("/").map(function(e){return D(e)}),l=Object(k.a)(n,3),r=l[0],o=l[1],i=l[2],s="".concat(i,"-").concat(o,"-").concat(r),c=a.split("/").map(function(e){return D(e)}),m=Object(k.a)(c,3),d=m[0],p=m[1],u=m[2];return[t,a,"".concat(u,"-").concat(p,"-").concat(d),s]}();this.setState(function(t){return{dateValues:{dateEnd:e[3],dateStart:e[2]},filter:Object(i.a)({},t.filter,{dateStart:e[1],dateEnd:e[0]})}})}}},{key:"componentDidUpdate",value:function(e,t){this.state.filter!==t.filter&&(this.fetchChartPie(this.state.filter.dateStart,this.state.filter.dateEnd,this.state.filter.companySelected),this.fetchChartBar(this.state.filter.dateStart,this.state.filter.dateEnd,this.state.filter.companySelected))}},{key:"fetchChartPie",value:function(e,t,a){var n=this,l="https://adalab.interacso.com/api/graph/pie?from=".concat(e,"&to=").concat(t,"&company=").concat(a.toLowerCase());return fetch(l).then(function(e){return e.json()}).then(function(e){for(var t=["Genial","Meh","Mal"],a=Object.values(e),l=[["Call mood","Quantity"]],r=0;r<t.length;r+=1)l.push([t[r],a[r]]);n.setState({pieDataLoadingStatus:"ready",pieChartData:l})})}},{key:"fetchChartBar",value:function(e,t,a){var n=this,l="https://adalab.interacso.com/api/graph/bar?from=".concat(e,"&to=").concat(t,"&company=").concat(a.toLowerCase());return fetch(l).then(function(e){return e.json()}).then(function(e){return n.setState({barDataLoadingStatus:"ready",dataBarsTransformed:e.sort(function(e,t){return e.month-t.month}).map(function(t,a){return Object(i.a)({},t,{month:x[e[a].month]})})},function(){return n.transformDataBars(n.state.dataBarsTransformed)})})}},{key:"transformDataBars",value:function(e){var t,a=[];e.map(function(e){return Object.keys(e).map(function(e){return a.find(function(t){return t===e})||"year"===e||"month"===e||a.push(e)})});var n=["Meses"].concat(a),l=[];e.map(function(e){for(var t=[e.month],n=0,r=a;n<r.length;n++){var o=r[n];e[o]?t.push(e[o]):t.push(0)}l.push(t)});t=[n].concat(l),this.setState({chartDataBars:t})}},{key:"getInputTone",value:function(e){var t=e.currentTarget.value;this.setState(function(e){return{info:Object(i.a)({},e.info,{tone:t})}})}},{key:"getWhoCalls",value:function(e){var t=this.state.info,a=Object(i.a)({},t,{addedBy:e.currentTarget.value});this.setState({info:a})}},{key:"getRequestedEmployee",value:function(e){var t=this.state.info,a=Object(i.a)({},t,{personRequested:e.currentTarget.value});this.setState({info:a})}},{key:"getName",value:function(e){var t=this.state.info,a=Object(i.a)({},t,{name:e.currentTarget.value});this.setState({info:a})}},{key:"getCompany",value:function(e){var t=this.state.info,a=Object(i.a)({},t,{company:e.currentTarget.value});this.setState({info:a})}},{key:"getPosition",value:function(e){var t=this.state.info,a=Object(i.a)({},t,{position:e.currentTarget.value});this.setState({info:a})}},{key:"getOtherInfo",value:function(e){var t=this.state.info,a=Object(i.a)({},t,{otherInfo:e.currentTarget.value});this.setState({info:a})}},{key:"getEmail",value:function(e){var t=this.state.info,a=Object(i.a)({},t,{email:e.currentTarget.value});this.setState({info:a})}},{key:"getPhone",value:function(e){var t=this.state.info,a=Object(i.a)({},t,{telephone:e.currentTarget.value});this.setState({info:a})}},{key:"getCallAction",value:function(e){var t=this.state.info,a=Object(i.a)({},t,{action:e.currentTarget.value}),n={info:a,callAgainClass:"",callBackClass:"",redialCheck:!1,callBackCheck:!1};"redial"===e.currentTarget.id?this.state.redialCheck||(n={info:a,callAgainClass:"selectedClass",callBackClass:"",redialCheck:!0,callBackCheck:!1}):this.state.callBackCheck||(n={info:a,callAgainClass:"",callBackClass:"selectedClass",redialCheck:!1,callBackCheck:!0}),this.setState(n)}},{key:"getMessage",value:function(e){var t=this.state.info,a=Object(i.a)({},t,{message:e.currentTarget.value});this.setState({info:a})}},{key:"preventSubmission",value:function(e){e.preventDefault()}},{key:"sendInfo",value:function(){(function(e){return fetch("https://adalab.interacso.com/api/call",{method:"POST",body:JSON.stringify(e),cache:"no-cache",headers:{"content-type":"application/json"}}).then(function(e){return e.json()})})(this.state.info).then(function(e){return console.log("Success:",JSON.stringify(e))}).then(this.setState({succesMessage:""})).catch(function(e){return console.error("Error:",e)})}},{key:"sendForm",value:function(e){e.preventDefault(),this.isEmptyOrNot()}},{key:"isEmptyOrNot",value:function(){var e=this.state.info;""===e.personRequested?this.setState({errorPerson:""}):""===e.message?this.setState({errorIncomingData:"hidden",errorCallAction:"",errorPerson:"hidden",errorMessage:""}):""===e.tone?this.setState({errorIncomingData:"hidden",errorCallAction:"hidden",errorPerson:"hidden",errorMessage:"hidden",errorTone:""}):""===e.name?this.setState({errorIncomingData:"hidden",errorCallAction:"hidden",errorPerson:"hidden",errorMessage:"hidden",errorTone:"hidden",nameRequired:""}):""===e.company?this.setState({errorIncomingData:"hidden",errorCallAction:"hidden",errorPerson:"hidden",errorMessage:"hidden",errorTone:"hidden",companyRequired:""}):(this.setState({errorIncomingData:"hidden",errorCallAction:"hidden",errorPerson:"hidden",errorMessage:"hidden",errorTone:"hidden",nameRequired:"hidden",companyRequired:"hidden"}),this.sendInfo(),this.sendSlackInfo())}},{key:"deselectOption",value:function(){var e=this.state.info.addedBy;if(""!==e)for(var t=this.selectPersonRequested.current.getElementsByTagName("option"),a=0;a<t.length;a++)t[a].label.includes(e)?(t[a].disabled=!0,t[a].style.display="none"):(t[a].disabled=!1,t[a].style.display="block")}},{key:"makeMessage",value:function(){var e="*".concat(this.state.info.personRequested,"*, te acaban de llamar y te han dejado el siguiente mensaje: \n*").concat(this.state.info.action," \n").concat(this.state.info.message,"*");return""===this.state.info.name&&""===this.state.info.position&&""===this.state.info.company&&""===this.state.info.otherInfo&&""===this.state.info.email||0!==this.state.info.telephone?""!==this.state.info.name||""!==this.state.info.position||""!==this.state.info.company||""!==this.state.info.otherInfo||""!==this.state.info.email||0!==this.state.info.telephone?"*".concat(this.state.info.personRequested,"*, te acaba de llamar: \n*").concat(this.state.info.name," \n").concat(this.state.info.position," \n").concat(this.state.info.company," \n").concat(this.state.info.telephone," \n").concat(this.state.info.email," \n").concat(this.state.info.otherInfo,"* \nSu mensaje ha sido: \n*").concat(this.state.info.action," \n").concat(this.state.info.message,"*"):e:"*".concat(this.state.info.personRequested,"*, te acaba de llamar: \n*").concat(this.state.info.name," \n").concat(this.state.info.position," \n").concat(this.state.info.company,"  \n").concat(this.state.info.email," \n").concat(this.state.info.otherInfo,"* \nSu mensaje ha sido: \n*").concat(this.state.info.action," \n").concat(this.state.info.message,"*")}},{key:"sendSlackInfo",value:function(){var e=this.makeMessage(),t=Object({NODE_ENV:"production",PUBLIC_URL:"."}).REACT_APP_SKEY,a={url:"https://slack.com/api/chat.postMessage?token=".concat(t,"&channel=%23your-calls-app&text=").concat(e,"&pretty=1"),method:"POST",body:{}};fetch(a.url,{method:a.method,body:JSON.stringify(a.body),cache:"no-cache",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){return console.log("Success:",JSON.stringify(e))}).catch(function(e){return console.error("Error:",e)})}},{key:"showList",value:function(){var e=this;fetch("https://adalab.interacso.com/api/call",{method:"GET",cache:"no-cache",headers:{"content-type":"application/json"}}).then(function(e){return e.json()}).then(function(t){e.setState({results:t}),e.wholeList=t})}},{key:"getStartDate",value:function(e){var t=e.currentTarget.value;this.setState({startDate:t})}},{key:"setFilterStartDate",value:function(e){var t=e.currentTarget.value,a=t.split("-"),n="".concat(a[2],"/").concat(a[1],"/").concat(a[0]);this.setState(function(e){return{dateValues:Object(i.a)({},e,{dateStart:t}),filter:Object(i.a)({},e.filter,{dateStart:n})}})}},{key:"setFilterEndDate",value:function(e){var t=e.currentTarget.value,a=t.split("-"),n="".concat(a[2],"/").concat(a[1],"/").concat(a[0]);this.setState(function(e){return{dateValues:Object(i.a)({},e,{dateStart:t}),filter:Object(i.a)({},e.filter,{dateEnd:n})}})}},{key:"getEndDate",value:function(e){var t=e.currentTarget.value;this.setState({endDate:t})}},{key:"filterDate",value:function(){var e=this.state.startDate,t=this.state.endDate,a=this.wholeList,n=S(e,"YYYY-MM-DD"),l=S(t,"YYYY-MM-DD"),r=a.filter(function(e){var t=e.loggedAt;return S(t,"YYYY-MM-DD").isBetween(n,l,null,"[]")});this.setState({results:r})}},{key:"getCompaniesData",value:function(){var e=this;fetch("https://adalab.interacso.com/api/call",{method:"GET",cache:"no-cache",headers:{"content-type":"application/json"}}).then(function(e){return e.json()}).then(function(e){return e}).then(function(t){var a=t.map(function(e){return e.company}).filter(function(e,t,a){return a.indexOf(e)===t});e.setState({allCompanies:a})})}},{key:"getCompanySelected",value:function(e){var t=e.currentTarget.value;this.setState(function(e){return{filter:Object(i.a)({},e.filter,{companySelected:t})}})}},{key:"render",value:function(){var e=this,t=this.state.info.tone,a=this.state.dateValues,n=a.dateStart,r=a.dateEnd,o=this.state.filter.companySelected,i=this.state,s=i.errorPerson,c=i.errorTone,m=i.errorIncomingData,d=i.errorCallAction,p=i.errorMessage,u=i.callBackClass,h=i.callAgainClass,f=i.redialCheck,b=i.callBackCheck,y=i.results,v=i.pieChartData,C=i.pieDataLoadingStatus,_=i.succesMessage,O=i.personRequested,S=i.nameRequired,k=i.companyRequired,D=i.allCompanies,A=this.preventSubmission,P=this.getWhoCalls,R=this.getRequestedEmployee,q=this.getName,B=this.getCompany,I=this.getPosition,L=this.getOtherInfo,x=this.getEmail,Y=this.getPhone,J=this.getCallAction,U=this.getMessage,z=this.sendForm,G=this.deselectOption,K=this.selectPersonRequested,W=this.getInputTone,H=this.showList,V=this.getStartDate,Q=this.getEndDate,X=this.filterDate,Z=this.setFilterStartDate,$=this.setFilterEndDate,ee=this.getCompanySelected;return l.a.createElement("div",{className:"App"},l.a.createElement(g,null),l.a.createElement("main",{className:"main"},l.a.createElement("div",{className:"form__wrapper"},l.a.createElement(E,null),l.a.createElement(F.a,null,l.a.createElement(T.a,{exact:!0,path:"/",render:function(){return l.a.createElement(N,{preventSubmission:A,getWhoCalls:P,errorPerson:s,getRequestedEmployee:R,errorIncomingData:m,getName:q,getCompany:B,getPosition:I,getOtherInfo:L,getEmail:x,getPhone:Y,errorCallAction:d,getCallAction:J,getMessage:U,errorMessage:p,sendForm:z,deselectOption:G,selectPersonRequested:K,callBackClass:u,callAgainClass:h,redialCheck:f,callBackCheck:b,getInputTone:W,tone:t,errorTone:c,nameRequired:S,companyRequired:k})}}))),l.a.createElement("div",{className:"main__wrapper--callHistory"},l.a.createElement(F.a,null,l.a.createElement(T.a,{path:"/callHistory",render:function(){return l.a.createElement(j,{actionShowList:H,results:y,actionGetStartDate:V,actionGetEndDate:Q,actionFilterDate:X})}}),l.a.createElement(T.a,{path:"/dashboard",render:function(){return l.a.createElement(w,{actionSetFilterStartDate:Z,actionSetFilterEndDate:$,actionFilterDate:e.filterDate,startDate:n,endDate:r,pieData:v,pieLoading:C,barData:e.state.chartDataBars,barLoading:e.state.barDataLoadingStatus,allCompanies:D,getCompanySelected:ee,companySelected:o})}}))),l.a.createElement(T.a,{exact:!0,path:"/",render:function(){return l.a.createElement(M,{sucess:_,personRequested:O})}})))}}]),t}(n.Component),J=a(57);o.a.render(l.a.createElement(J.a,null,l.a.createElement(Y,null)),document.getElementById("root"))}},[[27,2,1]]]);
//# sourceMappingURL=main.9f73f39f.chunk.js.map