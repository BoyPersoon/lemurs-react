(this["webpackJsonplemurs-react"]=this["webpackJsonplemurs-react"]||[]).push([[0],{27:function(e,a,t){e.exports=t.p+"static/media/logo-circ-bg-w.ad7570e6.png"},28:function(e,a,t){e.exports=t.p+"static/media/logo-lemurs-text-w-min.57d243bb.png"},33:function(e,a,t){e.exports=t.p+"static/media/soft-1.195fef45.jpg"},34:function(e,a,t){e.exports=t.p+"static/media/hard-1.8413e682.jpg"},35:function(e,a,t){e.exports=t.p+"static/media/host-1.2311defd.jpg"},37:function(e,a,t){e.exports=t.p+"static/media/logo-text.7305313c.png"},38:function(e,a,t){e.exports=t(50)},43:function(e,a,t){},44:function(e,a,t){},50:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(26),c=t.n(r),o=(t(43),t(44),t(5)),s=t(13),m=t(8),i=t(9),u=t(11),d=t(10),p=t(19),E=t(12),g=t(27),h=t.n(g),f=t(28),v=t.n(f),b=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).state={toggle:!1},t.toggleMenu=t.toggleMenu.bind(Object(p.a)(t)),t}return Object(E.a)(a,e),Object(i.a)(a,[{key:"toggleMenu",value:function(){this.setState({toggle:!this.state.toggle})}},{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-dark navbar-expand-lg fixed-top bg-dark shadow portfolio-navbar gradient"},l.a.createElement("div",{className:"container"},l.a.createElement("a",{className:"navbar-brand logo",href:"/"},l.a.createElement("img",{src:h.a,alt:""}),l.a.createElement("img",{src:v.a,alt:"Lemurs Webdevelopment"})),l.a.createElement("button",{"data-toggle":"collapse",className:"navbar-toggler","data-target":"#navbarNav",onClick:this.toggleMenu},l.a.createElement("span",{className:"sr-only"},"Toggle navigation"),l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav",style:this.state.toggle?{display:"block"}:{display:"none"},onClick:this.toggleMenu},l.a.createElement("ul",{className:"nav navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item",role:"presentation"},l.a.createElement(o.b,{className:"nav-link active",to:"/"},"Home")),l.a.createElement("li",{className:"nav-item",role:"presentation"},l.a.createElement(o.b,{className:"nav-link",to:"/projects"},"Projects")),l.a.createElement("li",{className:"nav-item",role:"presentation"},l.a.createElement(o.b,{className:"nav-link",to:"/repos"},"Repos")),l.a.createElement("li",{className:"nav-item",role:"presentation"},l.a.createElement(o.b,{className:"nav-link",to:"/about"},"About")),l.a.createElement("li",{className:"nav-item",role:"presentation"},l.a.createElement(o.b,{className:"nav-link",to:"/contact"},"Contact"))))))}}]),a}(l.a.Component),N=function(){return l.a.createElement("footer",{className:"page-footer"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"copyright"},l.a.createElement("p",null,"\xa9 2020 Lemurs Webdevelopment. All rights reserved. | KVK 67732860 | VAT NL209076689B01",l.a.createElement("br",null),"Coded with \xa0\u2615 and \xa0\u2764")),l.a.createElement("ul",{className:"icons"},l.a.createElement("li",null,l.a.createElement("a",{className:"icon brands fa-github",href:"https://github.com/BoyPersoon",target:"_blank",rel:"noopener noreferrer"})),l.a.createElement("li",null,l.a.createElement("a",{className:"icon brands fa-linkedin",href:"https://www.linkedin.com/in/boy-persoon-webdeveloper/",target:"_blank",rel:"noopener noreferrer"})),l.a.createElement("li",null,l.a.createElement("a",{className:"fab solid fa-stack-overflow",href:"https://stackoverflow.com/users/7467381/boy-persoon",target:"_blank",rel:"noopener noreferrer"})),l.a.createElement("li",null,l.a.createElement("a",{className:"icon solid fa-envelope",href:"mailto:b.persoon@lemursdev.com",target:"_blank",rel:"noopener noreferrer"})))))},y=t(15),k=t.n(y),j=function(e){return{root:"https://cdn.sanity.io/images/7s6fo221/production/",dimension:"1395x931",extension:".jpg",params:w(e)}},w=function(e){var a;switch(e){case"projects":a=D();break;case"projectDetail":a=x();break;case"otherProjects":a=I();break;default:a=D()}var t=a,n=t.imgWidth,l=t.pixelDensity,r=t.aspectRatio,c=Math.round(n/r*l),o=Math.round(n*l);return"?h=".concat(c,"&w=").concat(o,"&fit=min&q=85")},D=function(){var e=0,a=k()(window).width(),t=1.5;switch(!0){case a>=2500:e=2500/3,t=2;break;case a>=1920:e=640,t=2;break;case a>=1024:e=1024/3;break;case a>=780:e=390;break;case a<780:e=780,t=1;break;default:e=1024/3}return{imgWidth:e,pixelDensity:t,aspectRatio:1.5}},I=function(){var e=0,a=k()(window).width(),t=1.5;switch(!0){case a>=1440:e=255,t=2;break;case a>=1024:e=210,t=1.5;break;case a>=768:e=209,t=1;break;case a<780:e=510,t=1;break;default:e=255}return{imgWidth:e,pixelDensity:t,aspectRatio:1.5}},x=function(){var e=0,a=k()(window).width(),t=1.5;switch(!0){case a>=2500:case a>=1440:e=1140,t=2;break;case a>=1024:e=960;break;case a>=780:e=690;break;case a<780:e=510,t=1;break;default:e=960}return{imgWidth:e,pixelDensity:t,aspectRatio:1.83}},M=function(e,a){var t=e.split("-")[1],n=e.split("-")[2],l=e.split("-")[3];return"undefined"!==typeof t&&t.length?a.root+t+"-"+n+"."+l+a.params:""},P=function(e){var a=e.asset;return"undefined"!==typeof a&&"undefined"!==typeof a._ref?a._ref:null},O=function(e){var a=e.link,t=e.details,n=e.children;return t?l.a.createElement(o.b,{to:a},n):n},_=function(e){var a=e.project,t=e.metaImgData,n=a._id,r=a.details,c=a.title,o=a.description,s=a.image,m=P(s),i=M(m,t),u=o?o.slice(0,150)+"... ":"",d=a.tags?a.tags.filter((function(e){return e.length})).map((function(e,a){return l.a.createElement("small",{key:a},e)})):[];return l.a.createElement("div",{className:"col-md-6 col-lg-4 item ".concat(r?"zoom-on-hover":"")},l.a.createElement(O,{link:"/project/".concat(n),details:r},l.a.createElement("img",{alt:"project img",className:"img-fluid image",src:i}),l.a.createElement("span",{className:"description"},l.a.createElement("hr",null),l.a.createElement("span",{className:"description-heading"},c),l.a.createElement("span",{className:"description-body"},l.a.createElement("div",{dangerouslySetInnerHTML:{__html:u}})),l.a.createElement("span",{className:"description-tags"},d))))},C=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).state={projects:[]},t}return Object(E.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.fetchProjectData()}},{key:"fetchProjectData",value:function(){var e=this;return fetch("https://7s6fo221.api.sanity.io/v1/data/query/production?query=*%5B_type%20%3D%3D%20%22project_summary%22%5D").then((function(e){return e.json()})).then((function(e){return e?e.result.sort((function(e,a){return e.order-a.order})):null})).then((function(a){var t=j("projects"),n=a.map((function(e){return{project:e,galleryMetaImage:t}}));e.setState({projects:n})})).catch((function(e){}))}},{key:"render",value:function(){var e=this,a=this.state.projects.map((function(e){var a=e.project,t=e.galleryMetaImage;return l.a.createElement(_,{key:a._id,project:a,metaImgData:t})})),t=l.a.Children.map(this.props.children,(function(t){return l.a.cloneElement(t,{projects:a,projectsData:e.state.projects})}));return l.a.createElement("div",null,t)}}]),a}(l.a.Component),S=t(20),T=t(4),W=function(e){var a=e.project,t=e.metaImgData,n=a._id,r=a.image,c=P(r),s=M(c,t);return l.a.createElement("div",{className:"col-md-4 col-lg-3"},l.a.createElement("div",{className:"item"},l.a.createElement(o.b,{to:"/project/".concat(n)},l.a.createElement("img",{alt:"other-project",className:"img-fluid scale-on-hover",src:s}))))},L=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).state={loading:!0,projectTitle:"Project",projectDesc:"",projectContractor:"",project:{}},t}return Object(E.a)(a,e),Object(i.a)(a,[{key:"getProjectId",value:function(){return this.props.match.params.id}},{key:"filterOtherProjects",value:function(e){var a=this;return this.state.loading?[]:e.filter((function(e){var t=e.project;return t._id!==a.getProjectId()&&t.details})).sort((function(){return Math.random()-Math.random()})).slice(0,4)}},{key:"componentDidMount",value:function(){this.fetchProjectData()}},{key:"componentDidUpdate",value:function(e,a){var t=this;if(a.projectId!==this.getProjectId()&&this.fetchProjectData(),a.loading!==this.state.loading){var n=k()("img.project-side-img"),l=k()(".project-main-img .image");n.hover((function(e){var a=k()(e.target).attr("src");l.fadeTo("fast",.1,(function(){l.css({"background-image":"url("+a+")"})})).fadeTo("slow",1)}),(function(){l.css({"background-image":"url("+t.state.mainImg+")"})}))}}},{key:"fetchProjectData",value:function(){var e,a=this,t=this.getProjectId();return this.setState({projectId:t,loading:!0}),window.scrollTo(0,0),fetch("https://7s6fo221.api.sanity.io/v1/data/query/production"+(e=t,"?query=*%5B_type%20%3D%3D%20%22project_summary%22%20%26%26%20_id%20%3D%3D%20%22"+e+"%22%5D")).then((function(e){return e.json()})).then((function(e){if("undefined"!==typeof e&&e.result&&e.result.length){var t=e.result[0],n=a.getSlideShow(t),l=a.getMainImg(t);a.setState({loading:!1,project:t,sideGallery:n,mainImg:l})}})).catch((function(e){console.log(e)}))}},{key:"getSlideShow",value:function(e){var a=e.slideshow,t=j("projectDetail");return a?a.slice(0,3).map((function(e){return M(P(e),t)})):[]}},{key:"getMainImg",value:function(e){var a=e.image,t=j("projectDetail");return M(P(a),t)}},{key:"render",value:function(){var e=this,a=this.filterOtherProjects(this.props.projectsData).map((function(e){var a=e.project,t=e.galleryMetaImage;return l.a.createElement(W,{key:a._id,project:a,metaImgData:t})})),t=l.a.Children.map(this.props.children,(function(t){return l.a.cloneElement(t,Object(S.a)({},e.state.project,{otherProjectTiles:a,sideGallery:e.state.sideGallery,mainImg:e.state.mainImg}))}));return l.a.createElement("div",null,l.a.createElement(T.a,null,l.a.createElement("title",null,this.state.projectTitle),l.a.createElement("meta",{name:"description",content:this.state.projectDesc})),t)}}]),a}(l.a.Component),B=Object(s.f)(L),A=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).state={loading:!0,reposData:[]},t}return Object(E.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.fetchGitData()}},{key:"fetchGitData",value:function(){var e=this;return fetch("https://api.github.com/users/BoyPersoon/repos").then((function(e){return e.json()})).then((function(e){return e.map((function(e){return e.parcedDate=function(e){var a=new Date(e);return a.getDate()+"/"+(a.getMonth()+1)+"/"+a.getFullYear()}(e.updated_at),e}))})).then((function(a){"undefined"!==typeof a&&a.length&&e.setState({reposData:a,loading:!1})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.cloneElement(this.props.children,Object(S.a)({},this.state)))}}]),a}(l.a.Component),G=t(33),H=t.n(G),R=t(34),q=t.n(R),V=t(35),J=t.n(V),F=t(36),K=t.n(F),U=function(e){function a(){return Object(m.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e={strings:this.props.strings.map((function(e){return"guest$ echo rand fact -type lemur ^1000\n `</br>"+e+"</br> guest$ `"}),""),smartBackspace:!1,typeSpeed:40,preStringTyped:function(e,a){var t=a.strings[e];a.backDelay=40*t.length},loop:!0,loopCount:1/0};this.typed=new K.a(this.el,e)}},{key:"componentWillUnmount",value:function(){this.typed.destroy()}},{key:"render",value:function(){var e=this;return l.a.createElement("span",{ref:function(a){e.el=a}})}}]),a}(l.a.Component),$=["The ring tailed lemur\u2019s tail is longer than its body!","The ring tailed lemur is used as a symbol for Madagascar and for endangered animals on the island, because it\u2019s so well-known.","The ring tailed lemur is known as \u2018maky\u2019 in Malagasy, the language spoken on Madagascar.","The ring tailed lemur\u2019s Latin name is \u2018catta\u2019 because of its cat-like looks.","King Julien, the most famous ring tailed lemur, likes to move it, move it!"],z=function(){return l.a.createElement("div",null,l.a.createElement(T.a,null,l.a.createElement("title",null,"Home"),l.a.createElement("meta",{name:"description",content:""})),l.a.createElement("main",{className:"page lanidng-page"},l.a.createElement("section",{className:"portfolio-block block-intro"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"avatar"}),l.a.createElement("div",{className:"about-me"},l.a.createElement("p",null,"Hello! Welcome to ",l.a.createElement("strong",null,"Lemurs Development")," - the home base for my freelance work as a developer."),l.a.createElement(o.b,{className:"button small",to:"/about"},"More about me")))),l.a.createElement("section",{className:"portfolio-block website gradient parallax"},l.a.createElement("div",{className:"bg-overlay"}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row align-items-center"},l.a.createElement("div",{className:"col-md-12 col-lg-5 offset-lg-1 text"},l.a.createElement("h3",null,"Programming with passion"),l.a.createElement("p",null,"While having enjoyed over a decade of dabbing and working in code, I keep being baffled by tricks and techniques. Attempting to overcome this giant will always be a daunting but invigorating passion.")),l.a.createElement("div",{className:"col-md-12 col-lg-5"},l.a.createElement("div",{className:"portfolio-laptop-mockup"},l.a.createElement("div",{className:"screen"},l.a.createElement("div",{className:"screen-content",style:{backgroundColor:"black"}},l.a.createElement("div",{className:"terminal"},l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"dot red"}),l.a.createElement("div",{className:"dot yellow"}),l.a.createElement("div",{className:"dot green"})),l.a.createElement("div",{className:"panel"},l.a.createElement("div",{className:"action"},l.a.createElement("div",{className:"command"},l.a.createElement(U,{strings:$}))))))),l.a.createElement("div",{className:"keyboard"})))))),l.a.createElement("section",{className:"featured"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-4 col-sm-12"},l.a.createElement("section",{className:"image-feature"},l.a.createElement("a",null,l.a.createElement("header",null,l.a.createElement("h3",null,"Full-stack Development")),l.a.createElement("span",{className:"image fit"},l.a.createElement("img",{src:H.a,alt:""})),l.a.createElement("div",{className:"image-feature-footer"},l.a.createElement("p",null,"Bringing your product to life from concept to completion."))))),l.a.createElement("div",{className:"col-md-4 col-sm-12"},l.a.createElement("section",{className:"image-feature"},l.a.createElement("a",null,l.a.createElement("header",null,l.a.createElement("h3",null,"Maintenance")),l.a.createElement("span",{className:"image fit"},l.a.createElement("img",{src:q.a,alt:""})),l.a.createElement("div",{className:"image-feature-footer"},l.a.createElement("p",null,"I resolve feature requests, optimize processes and fix bugs for your project."))))),l.a.createElement("div",{className:"col-md-4 col-sm-12"},l.a.createElement("section",{className:"image-feature"},l.a.createElement("a",null,l.a.createElement("header",null,l.a.createElement("h3",null,"Hosting & Consulting")),l.a.createElement("span",{className:"image fit"},l.a.createElement("img",{src:J.a,alt:""})),l.a.createElement("div",{className:"image-feature-footer"},l.a.createElement("p",null,"I provide hosting solutions for projects that require an online presence."))))))))))},Y=function(e){var a=e.projects;return l.a.createElement("div",null,l.a.createElement(T.a,null,l.a.createElement("title",null,"Projects"),l.a.createElement("meta",{name:"description",content:""})),l.a.createElement("main",{className:"page projets-page"},l.a.createElement("section",{className:"portfolio-block projects compact-grid"},l.a.createElement("header",{className:"major"},l.a.createElement("h2",null,"Portfolio"),l.a.createElement("p",null,"Projects & Contributions")),l.a.createElement("div",{className:"row no-gutters",id:"projects"},a))))},Q=function(e){var a=e.loading,t=e.title,n=e.contractor,r=e.period,c=e.tags,o=e.description,s=e.status,m=e.otherProjectTiles,i=e.sideGallery,u=e.mainImg;return l.a.createElement("main",{className:"page project-page"},l.a.createElement("section",{className:"portfolio-block project"},l.a.createElement("div",{className:"container"},l.a.createElement("header",{className:"major"},l.a.createElement("h2",null,t),l.a.createElement("p",null,n)),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12 project-main-img "+(i&&!i.length?"col-lg-12":"col-lg-9")},l.a.createElement("div",{className:"image",style:{backgroundImage:"url("+u+")"}},l.a.createElement("img",{className:"project-main-img-2",src:u,alt:""}))),!a&&i?i.length?l.a.createElement("div",{className:"col-lg-3 col-sm-12 project-sidebar-gallery"},i.map((function(e,a){return l.a.createElement("div",{key:a,className:"bg-image img-block"},l.a.createElement("img",{className:"project-side-img",src:e,alt:""}))}))):"":l.a.createElement("div",{className:"col-lg-3 col-sm-12 project-sidebar-gallery"},[0,1,2].map((function(e){return l.a.createElement("div",{key:e,className:"bg-image img-block"},l.a.createElement("img",{className:"project-side-img",src:"",alt:""}))})))),l.a.createElement("div",{className:"row"},a?l.a.createElement("div",{className:"col-12 col-md-6 col-lg-9 offset-md-1 offset-lg-0 info"},l.a.createElement("div",{className:"loading-text loading-animate loading-small"}),l.a.createElement("div",{className:"loading-text loading-animate"}),l.a.createElement("div",{className:"loading-text loading-animate"})):l.a.createElement("div",{className:"col-12 col-md-6 col-lg-9 offset-md-1 offset-lg-0 info"},l.a.createElement("h3",null,"Description"),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:o}})),l.a.createElement("div",{id:"meta",className:"col-12 col-md-3 offset-md-1 offset-lg-0 meta"},s&&s.length?l.a.createElement("div",{className:"meta-block tags"},l.a.createElement("span",{className:"meta-heading"},"Status"),l.a.createElement("span",{className:""},s)):"",r&&r.length?l.a.createElement("div",{className:"meta-block tags"},l.a.createElement("span",{className:"meta-heading"},"Period"),l.a.createElement("span",{className:""},r)):"",n&&n.length?l.a.createElement("div",{className:"meta-block tags"},l.a.createElement("span",{className:"meta-heading"},"Contractor"),l.a.createElement("span",{className:""},n)):"",c&&c.length?l.a.createElement("div",{className:"meta-block tags"},l.a.createElement("span",{className:"meta-heading"},"Tags"),c.map((function(e){return l.a.createElement("div",{key:e},e)}))):"")),l.a.createElement("div",{className:"more-projects"},l.a.createElement("h3",{className:"text-center"},"More Projects"),a?l.a.createElement("div",{className:"row gallery"},[0,1,2,3].map((function(e){return l.a.createElement("div",{key:e,className:"col-md-4 col-lg-3"},l.a.createElement("div",{className:"loading-card loading-animate"}))}))):l.a.createElement("div",{className:"row gallery"},m)))))},X=function(){return l.a.createElement("div",null,l.a.createElement(T.a,null,l.a.createElement("title",null,"About Me"),l.a.createElement("meta",{name:"description",content:""})),l.a.createElement("main",{className:"page about-page"},l.a.createElement("section",{className:"portfolio-block"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"avatar avatar-pf"}),l.a.createElement("header",{className:"major"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,"Up close & personal")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 col-sm-12"},l.a.createElement("h3",{className:!0},"Career"),l.a.createElement("p",null,"I am a professional and dedicated web developer with a knack for critical thinking. With already a few years of practical experience in the field as developer, I now have integral knowledge of the full-cycle of web software development. While I have robust technical skills, my background highlights inter-disciplinary diversity of thought."),l.a.createElement("p",null,"Find my complete professional profile on LinkedIn:"),l.a.createElement("a",{className:"button small alt",role:"button",href:"https://www.linkedin.com/in/boy-persoon-webdeveloper/",target:"_blank",rel:"noopener noreferrer"},"Go to my LinkedIn")),l.a.createElement("div",{className:"col-md-6 col-sm-12"},l.a.createElement("h3",{className:!0},"Personal"),l.a.createElement("p",null,"Tell me about yourself! As a curious person, I like to know what is on people's minds. I enjoy travelling and getting myself into awkward spots. I tend to get absorbed by challenges, and somehow manage to always find new ones. Whether it is through playing chess, bouldering or playing a complicated piece on the piano, I always keep myself entertained."),l.a.createElement("p",null,"Feel free to chess me up!",l.a.createElement("a",{href:"https://www.chess.com/member/sixconquer",target:"_blank",rel:"noopener noreferrer"}," Check out my profile at chess.com"))))))))},Z={C:{color:"#555555",url:"https://github.com/trending?l=C"},"C#":{color:"#178600",url:"https://github.com/trending?l=Csharp"},CSS:{color:"#563d7c",url:"https://github.com/trending?l=CSS"},"C++":{color:"#f34b7d",url:"https://github.com/trending?l=C++"},HTML:{color:"#e34c26",url:"https://github.com/trending?l=HTML"},Java:{color:"#b07219",url:"https://github.com/trending?l=Java"},JavaScript:{color:"#f1e05a",url:"https://github.com/trending?l=JavaScript"},Processing:{color:"#0096D8",url:"https://github.com/trending?l=Processing"},Python:{color:"#3572A5",url:"https://github.com/trending?l=Python"},Racket:{color:"#3c5caa",url:"https://github.com/trending?l=Racket"},TypeScript:{color:"#2b7489",url:"https://github.com/trending?l=TypeScript"},Scilab:{color:null,url:"https://github.com/trending?l=Scilab"}},ee=function(e){var a=e.name,t=e.description,n=e.language,r=e.html_url,c=function(e){var a=Z[e];return"undefined"!==typeof a&&"string"==typeof a.color?a.color:""}(n);return l.a.createElement("div",{className:"col-md-6 col-lg-4"},l.a.createElement("div",{className:"project-card-no-image",style:{borderTop:"4px solid "+c}},l.a.createElement("h4",null,a),l.a.createElement("p",null,t),l.a.createElement("div",{className:"bottom-row"},l.a.createElement("a",{target:"_blank",className:"button alt small",role:"button",href:r},"See More"),l.a.createElement("div",{className:"tags"},l.a.createElement("p",null,n)))))},ae=function(e){var a=e.reposData;return"undefined"!==typeof a&&a.length?a.map((function(e,a){var t=e.name,n=e.description,r=e.language,c=e.color,o=e.html_url;return l.a.createElement(ee,{key:a,name:t,description:n,language:r,color:c,html_url:o})})):l.a.createElement("div",{className:"col-12"},l.a.createElement("p",{style:{textAlign:"center"}},"No available public repositories, please check back in later."))},te=function(e){var a=e.reposData,t=e.loading;return l.a.createElement("div",null,l.a.createElement(T.a,null,l.a.createElement("title",null,"Repos"),l.a.createElement("meta",{name:"description",content:""})),l.a.createElement("main",{className:"page projets-page"},l.a.createElement("section",{className:"portfolio-block project-no-images"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"repo-heading heading"},l.a.createElement("h1",null,"Github Repos"),l.a.createElement("h3",null,"@BoyPersoon")))),l.a.createElement("div",{id:"repos",className:"row"},t?[0,1,2,3,4,5].map((function(e){return l.a.createElement("div",{key:e,className:"col-md-6 col-lg-4"},l.a.createElement("div",{className:"loading-card loading-animate"}))})):l.a.createElement(ae,{reposData:a}))))))},ne=t(37),le=t.n(ne),re=function(){return l.a.createElement("div",null,l.a.createElement(T.a,null,l.a.createElement("title",null,"Contact"),l.a.createElement("meta",{name:"description",content:""})),l.a.createElement("main",{className:"page contact-page"},l.a.createElement("section",{className:"portfolio-block contact"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("header",{className:"major"},l.a.createElement("h2",null,"Contact details"),l.a.createElement("p",null)))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 col-sm-12"},l.a.createElement("div",null,l.a.createElement("h3",null,"Personal Details"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-1"},l.a.createElement("i",{className:"fas fa-user"})),l.a.createElement("div",{className:"col-9"},l.a.createElement("span",null,"Boy Persoon"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-1"},l.a.createElement("i",{className:"fas fa-map-marker-alt"})),l.a.createElement("div",{className:"col-9"},l.a.createElement("span",null,"Gen\xe8ve, Suisse"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-1"},l.a.createElement("i",{className:"fas fa-envelope"})),l.a.createElement("div",{className:"col-9"},l.a.createElement("span",null,l.a.createElement("a",{href:"mailto:b.persoon@lemursdev.com?Subject=Hi%20There"},"b.persoon@lemursdev.com")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-1"},l.a.createElement("i",{className:"fas fa-mobile-alt"})),l.a.createElement("div",{className:"col-9"},l.a.createElement("span",null,l.a.createElement("a",{href:""},"+41 778159706")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("ul",{className:"icons"},l.a.createElement("li",null,l.a.createElement("a",{className:"icon brands fa-github",href:"https://github.com/BoyPersoon",target:"_blank",rel:"noopener noreferrer"})),l.a.createElement("li",null,l.a.createElement("a",{className:"icon brands fa-linkedin",href:"https://www.linkedin.com/in/boy-persoon-webdeveloper/",target:"_blank",rel:"noopener noreferrer"})),l.a.createElement("li",null,l.a.createElement("a",{className:"fab solid fa-stack-overflow",href:"https://stackoverflow.com/users/7467381/boy-persoon",target:"_blank",rel:"noopener noreferrer"})),l.a.createElement("li",null,l.a.createElement("a",{className:"icon solid fa-envelope",href:"mailto:b.persoon@lemursdev.com",target:"_blank",rel:"noopener noreferrer"}))))))),l.a.createElement("div",{className:"col-md-6 col-sm-12"},l.a.createElement("div",null,l.a.createElement("h3",null,"Lemurs Webdevelopment"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-1"}),l.a.createElement("div",{className:"col-9"},l.a.createElement("span",null,"KVK 67732860"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-1"}),l.a.createElement("div",{className:"col-9"},l.a.createElement("span",null,"VAT NL209076689B01"))),l.a.createElement("img",{src:le.a,style:{width:"175px",margin:"30px 0 0 38px"},alt:"lemurs-logo"})))),l.a.createElement("hr",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("h3",null,"Get In Touch"),l.a.createElement("p",null,'If you are in need of information, advice, work or you just want to drop in and say "hi!", feel free to do so below!'),l.a.createElement("br",null),l.a.createElement("form",{method:"post",action:"#"},l.a.createElement("div",{className:"row gtr-uniform gtr-50"},l.a.createElement("div",{className:"col-md-6 col-sm-12"},l.a.createElement("input",{type:"text",name:"name",id:"name",defaultValue:"Name"})),l.a.createElement("div",{className:"col-md-6 col-sm-12"},l.a.createElement("input",{type:"text",name:"email",id:"email",defaultValue:"Email"})),l.a.createElement("div",{className:"col-md-6 col-sm-12"},l.a.createElement("input",{type:"checkbox",id:"copy",name:"copy"}),l.a.createElement("label",{htmlFor:"copy"},"Email me a copy of this message")),l.a.createElement("div",{className:"col-md-6 col-sm-12"},l.a.createElement("input",{type:"checkbox",id:"human",name:"human",defaultChecked:!0}),l.a.createElement("label",{htmlFor:"human"},"I am a human and not a robot")),l.a.createElement("div",{className:"col-12"},l.a.createElement("textarea",{name:"message",id:"message",placeholder:"Enter your message",rows:6,defaultValue:""})),l.a.createElement("div",{className:"col-12"},l.a.createElement("ul",{className:"actions"},l.a.createElement("li",null,l.a.createElement("input",{type:"submit",defaultValue:"Send Message"})),l.a.createElement("li",null,l.a.createElement("input",{type:"reset",defaultValue:"Reset",className:"alt"}))))))))))))};var ce=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(T.a,{titleTemplate:"%s | Lemurs Webdevelopment"},l.a.createElement("meta",{charSet:"utf-8"}),l.a.createElement("title",null,"Home"),l.a.createElement("link",{rel:"canonical",href:"https://lemurs.dev"})),l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement(b,null),l.a.createElement(s.c,null,l.a.createElement(s.a,{path:"/projects"},l.a.createElement(C,null,l.a.createElement(Y,null))),l.a.createElement(s.a,{path:"/project/:id"},l.a.createElement(C,null,l.a.createElement(B,null,l.a.createElement(Q,null)))),l.a.createElement(s.a,{path:"/repos"},l.a.createElement(A,null,l.a.createElement(te,null))),l.a.createElement(s.a,{path:"/about"},l.a.createElement(X,null)),l.a.createElement(s.a,{path:"/contact"},l.a.createElement(re,null)),l.a.createElement(s.a,{path:"/"},l.a.createElement(z,null))),l.a.createElement(N,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[38,1,2]]]);
//# sourceMappingURL=main.f9614e53.chunk.js.map