(this["webpackJsonplemurs-react"]=this["webpackJsonplemurs-react"]||[]).push([[0],{25:function(e,a,t){e.exports=t.p+"static/media/logo-circ-bg-w.ad7570e6.png"},26:function(e,a,t){e.exports=t.p+"static/media/logo-lemurs-text-w-min.57d243bb.png"},31:function(e,a,t){e.exports=t.p+"static/media/soft-1.195fef45.jpg"},32:function(e,a,t){e.exports=t.p+"static/media/hard-1.8413e682.jpg"},33:function(e,a,t){e.exports=t.p+"static/media/host-1.2311defd.jpg"},35:function(e,a,t){e.exports=t.p+"static/media/logo-text.7305313c.png"},37:function(e,a,t){e.exports=t(49)},42:function(e,a,t){},43:function(e,a,t){},49:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(24),c=t.n(r),o=(t(42),t(43),t(6)),s=t(9),m=t(25),i=t.n(m),d=t(26),u=t.n(d),p=function(){return l.a.createElement("nav",{className:"navbar navbar-dark navbar-expand-lg fixed-top bg-dark shadow portfolio-navbar gradient"},l.a.createElement("div",{className:"container"},l.a.createElement("a",{className:"navbar-brand logo",href:"/"},l.a.createElement("img",{src:i.a,alt:""}),l.a.createElement("img",{src:u.a,alt:"Lemurs Webdevelopment"})),l.a.createElement("button",{"data-toggle":"collapse",className:"navbar-toggler","data-target":"#navbarNav"},l.a.createElement("span",{className:"sr-only"},"Toggle navigation"),l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},l.a.createElement("ul",{className:"nav navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item",role:"presentation"},l.a.createElement(o.b,{className:"nav-link active",to:"/"},"Home")),l.a.createElement("li",{className:"nav-item",role:"presentation"},l.a.createElement(o.b,{className:"nav-link",to:"/projects"},"Projects")),l.a.createElement("li",{className:"nav-item",role:"presentation"},l.a.createElement(o.b,{className:"nav-link",to:"/repos"},"Repos")),l.a.createElement("li",{className:"nav-item",role:"presentation"},l.a.createElement(o.b,{className:"nav-link",to:"/about"},"About")),l.a.createElement("li",{className:"nav-item",role:"presentation"},l.a.createElement(o.b,{className:"nav-link",to:"/contact"},"Contact"))))))},E=function(){return l.a.createElement("footer",{className:"page-footer"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"copyright"},l.a.createElement("p",null,"\xa9 2020 Lemurs Webdevelopment. All rights reserved. | KVK 67732860 | VAT NL209076689B01",l.a.createElement("br",null),"Coded with \xa0\u2615 and \xa0\u2764")),l.a.createElement("ul",{className:"icons"},l.a.createElement("li",null,l.a.createElement("a",{className:"icon brands fa-github",href:"https://github.com/BoyPersoon",target:"_blank",rel:"noopener noreferrer"})),l.a.createElement("li",null,l.a.createElement("a",{className:"icon brands fa-linkedin",href:"https://www.linkedin.com/in/boy-persoon-webdeveloper/",target:"_blank",rel:"noopener noreferrer"})),l.a.createElement("li",null,l.a.createElement("a",{className:"fab solid fa-stack-overflow",href:"https://stackoverflow.com/users/7467381/boy-persoon",target:"_blank",rel:"noopener noreferrer"})),l.a.createElement("li",null,l.a.createElement("a",{className:"icon solid fa-envelope",href:"mailto:b.persoon@lemursdev.com",target:"_blank",rel:"noopener noreferrer"})))))},g=t(11),f=t(12),v=t(14),h=t(13),N=t(15),b=t(7),y=t.n(b),k=function(e){return{root:"https://cdn.sanity.io/images/7s6fo221/production/",dimension:"1395x931",extension:".jpg",params:j(e)}},j=function(e){var a;switch(e){case"projects":a=w();break;case"projectDetail":a=I();break;case"otherProjects":a=D();break;default:a=w()}var t=a,n=t.imgWidth,l=t.pixelDensity,r=t.aspectRatio,c=Math.round(n/r*l),o=Math.round(n*l);return"?h=".concat(c,"&w=").concat(o,"&fit=min&q=85")},w=function(){var e=0,a=y()(window).width(),t=1.5;switch(!0){case a>=2500:e=2500/3,t=2;break;case a>=1920:e=640,t=2;break;case a>=1024:e=1024/3;break;case a>=780:e=390;break;case a<780:e=780,t=1;break;default:e=1024/3}return{imgWidth:e,pixelDensity:t,aspectRatio:1.5}},D=function(){var e=0,a=y()(window).width(),t=1.5;switch(!0){case a>=1440:e=255,t=2;break;case a>=1024:e=210,t=1.5;break;case a>=768:e=209,t=1;break;case a<780:e=510,t=1;break;default:e=255}return{imgWidth:e,pixelDensity:t,aspectRatio:1.5}},I=function(){var e=0,a=y()(window).width(),t=1.5;switch(!0){case a>=2500:case a>=1440:e=1140,t=2;break;case a>=1024:e=960;break;case a>=780:e=690;break;case a<780:e=510,t=1;break;default:e=960}return{imgWidth:e,pixelDensity:t,aspectRatio:1.83}},x=function(e,a){var t=e.split("-")[1],n=e.split("-")[2],l=e.split("-")[3];return"undefined"!==typeof t&&t.length?a.root+t+"-"+n+"."+l+a.params:""},P=function(e){var a=e.asset;return"undefined"!==typeof a&&"undefined"!==typeof a._ref?a._ref:null},_=function(e){var a=e.link,t=e.details,n=e.children;return t?l.a.createElement(o.b,{to:a},n):n},M=function(e){var a=e.project,t=e.metaImgData,n=a._id,r=a.details,c=a.title,o=a.description,s=a.image,m=P(s),i=x(m,t),d=o?o.slice(0,150)+"... ":"",u=a.tags?a.tags.filter((function(e){return e.length})).map((function(e,a){return l.a.createElement("small",{key:a},e)})):[];return l.a.createElement("div",{className:"col-md-6 col-lg-4 item ".concat(r?"zoom-on-hover":"")},l.a.createElement(_,{link:"/project/".concat(n),details:r},l.a.createElement("img",{alt:"project img",className:"img-fluid image",src:i}),l.a.createElement("span",{className:"description"},l.a.createElement("hr",null),l.a.createElement("span",{className:"description-heading"},c),l.a.createElement("span",{className:"description-body"},l.a.createElement("div",{dangerouslySetInnerHTML:{__html:d}})),l.a.createElement("span",{className:"description-tags"},u))))},O=function(e){function a(e){var t;return Object(g.a)(this,a),(t=Object(v.a)(this,Object(h.a)(a).call(this,e))).state={projects:[]},t}return Object(N.a)(a,e),Object(f.a)(a,[{key:"componentDidMount",value:function(){this.fetchProjectData()}},{key:"fetchProjectData",value:function(){var e=this;return fetch("https://7s6fo221.api.sanity.io/v1/data/query/production?query=*%5B_type%20%3D%3D%20%22project_summary%22%5D").then((function(e){return e.json()})).then((function(e){return e?e.result.sort((function(e,a){return e.order-a.order})):null})).then((function(a){var t=k("projects"),n=a.map((function(e){return{project:e,galleryMetaImage:t}}));e.setState({projects:n})})).catch((function(e){}))}},{key:"render",value:function(){var e=this,a=this.state.projects.map((function(e){var a=e.project,t=e.galleryMetaImage;return l.a.createElement(M,{key:a._id,project:a,metaImgData:t})})),t=l.a.Children.map(this.props.children,(function(t){return l.a.cloneElement(t,{projects:a,projectsData:e.state.projects})}));return l.a.createElement("div",null,t)}}]),a}(l.a.Component),T=t(36),C=t(4),S=function(e){var a=e.project,t=e.metaImgData,n=a._id,r=a.image,c=P(r),s=x(c,t);return l.a.createElement("div",{className:"col-md-4 col-lg-3"},l.a.createElement("div",{className:"item"},l.a.createElement(o.b,{to:"/project/".concat(n)},l.a.createElement("img",{alt:"other-project",className:"img-fluid scale-on-hover",src:s}))))},W=function(e){function a(e){var t;return Object(g.a)(this,a),(t=Object(v.a)(this,Object(h.a)(a).call(this,e))).state={loading:!0,projectTitle:"Project",projectDesc:"",projectContractor:"",project:{}},t}return Object(N.a)(a,e),Object(f.a)(a,[{key:"getProjectId",value:function(){return this.props.match.params.id}},{key:"filterOtherProjects",value:function(e){var a=this;return this.state.loading?[]:e.filter((function(e){var t=e.project;return t._id!==a.getProjectId()&&t.details})).sort((function(){return Math.random()-Math.random()})).slice(0,4)}},{key:"componentDidMount",value:function(){this.fetchProjectData()}},{key:"componentDidUpdate",value:function(e,a){var t=this;if(a.projectId!==this.getProjectId()&&this.fetchProjectData(),a.loading!==this.state.loading){var n=y()("img.project-side-img"),l=y()(".project-main-img .image");n.hover((function(e){var a=y()(e.target).attr("src");l.fadeTo("fast",.1,(function(){l.css({"background-image":"url("+a+")"})})).fadeTo("slow",1)}),(function(){l.css({"background-image":"url("+t.state.mainImg+")"})}))}}},{key:"fetchProjectData",value:function(){var e,a=this,t=this.getProjectId();return this.setState({projectId:t,loading:!0}),window.scrollTo(0,0),fetch("https://7s6fo221.api.sanity.io/v1/data/query/production"+(e=t,"?query=*%5B_type%20%3D%3D%20%22project_summary%22%20%26%26%20_id%20%3D%3D%20%22"+e+"%22%5D")).then((function(e){return e.json()})).then((function(e){if("undefined"!==typeof e&&e.result&&e.result.length){var t=e.result[0],n=a.getSlideShow(t),l=a.getMainImg(t);a.setState({loading:!1,project:t,sideGallery:n,mainImg:l})}})).catch((function(e){console.log(e)}))}},{key:"getSlideShow",value:function(e){var a=e.slideshow,t=k("projectDetail");return a?a.slice(0,3).map((function(e){return x(P(e),t)})):[]}},{key:"getMainImg",value:function(e){var a=e.image,t=k("projectDetail");return x(P(a),t)}},{key:"render",value:function(){var e=this,a=this.filterOtherProjects(this.props.projectsData).map((function(e){var a=e.project,t=e.galleryMetaImage;return l.a.createElement(S,{key:a._id,project:a,metaImgData:t})})),t=l.a.Children.map(this.props.children,(function(t){return l.a.cloneElement(t,Object(T.a)({},e.state.project,{otherProjectTiles:a,sideGallery:e.state.sideGallery,mainImg:e.state.mainImg}))}));return l.a.createElement("div",null,l.a.createElement(C.a,null,l.a.createElement("title",null,this.state.projectTitle),l.a.createElement("meta",{name:"description",content:this.state.projectDesc})),t)}}]),a}(l.a.Component),L=Object(s.f)(W),B=function(e){function a(){return Object(g.a)(this,a),Object(v.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(N.a)(a,e),Object(f.a)(a,[{key:"componentDidMount",value:function(){this.fetchGitData()}},{key:"fetchGitData",value:function(){var e=this;return fetch("https://api.github.com/users/BoyPersoon/repos").then((function(e){return e.json()})).then((function(e){return e.map((function(e){return e.parcedDate=function(e){var a=new Date(e);return a.getDate()+"/"+(a.getMonth()+1)+"/"+a.getFullYear()}(e.updated_at),e.color=function(e){switch(e){case"JavaScript":return"#F1E05A";case"CSS":return"#563D7C";case"HTML":return"#E34C26";default:return"#777"}}(e.language),e}))})).then((function(a){y()("#repos").empty(),"undefined"!==typeof a&&a.length?a.forEach((function(a){e.appendRepo(a)})):y()("#repos").append('<p style="margin: auto">An unknown error has occured.</p>')})).catch((function(e){console.log(e)}))}},{key:"appendRepo",value:function(e){var a=e.name,t=e.description,n=e.language,l=e.color,r=e.html_url;y()("#repos").append('\n          <div class="col-md-6 col-lg-4">\n            <div class="project-card-no-image" style="border-top: 4px solid '+l+'">\n              <h3>'+a+"</h3>\n              <h4>"+t+'</h4><a class="button alt small" role="button" href="#">See More</a>\n              <div class="tags"><a target="_blank" rel="noopener noreferrer" href="'+r+'">'+n+"</a></div>\n              </div>\n            </div>\n        ")}},{key:"render",value:function(){return this.props.children}}]),a}(l.a.Component),A=t(31),G=t.n(A),R=t(32),H=t.n(R),V=t(33),q=t.n(V),F=t(34),K=t.n(F),J=function(e){function a(){return Object(g.a)(this,a),Object(v.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(N.a)(a,e),Object(f.a)(a,[{key:"componentDidMount",value:function(){var e={strings:this.props.strings.map((function(e){return"guest$ echo rand fact -type lemur ^1000\n `</br>"+e+"</br> guest$ `"}),""),smartBackspace:!1,typeSpeed:40,preStringTyped:function(e,a){var t=a.strings[e];a.backDelay=40*t.length},loop:!0,loopCount:1/0};this.typed=new K.a(this.el,e)}},{key:"componentWillUnmount",value:function(){this.typed.destroy()}},{key:"render",value:function(){var e=this;return l.a.createElement("span",{ref:function(a){e.el=a}})}}]),a}(l.a.Component),U=["The ring tailed lemur\u2019s tail is longer than its body!","The ring tailed lemur is used as a symbol for Madagascar and for endangered animals on the island, because it\u2019s so well-known.","The ring tailed lemur is known as \u2018maky\u2019 in Malagasy, the language spoken on Madagascar.","The ring tailed lemur\u2019s Latin name is \u2018catta\u2019 because of its cat-like looks.","King Julien, the most famous ring tailed lemur, likes to move it, move it!"],$=function(){return l.a.createElement("div",null,l.a.createElement(C.a,null,l.a.createElement("title",null,"Home"),l.a.createElement("meta",{name:"description",content:""})),l.a.createElement("main",{className:"page lanidng-page"},l.a.createElement("section",{className:"portfolio-block block-intro"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"avatar"}),l.a.createElement("div",{className:"about-me"},l.a.createElement("p",null,"Hello! Welcome to ",l.a.createElement("strong",null,"Lemurs web development")," - the home base for my freelance work as a developer."),l.a.createElement("a",{className:"button small",href:"about.html",role:"button"},"More about me")))),l.a.createElement("section",{className:"portfolio-block website gradient parallax"},l.a.createElement("div",{className:"bg-overlay"}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row align-items-center"},l.a.createElement("div",{className:"col-md-12 col-lg-5 offset-lg-1 text"},l.a.createElement("h3",null,"Programming with passion"),l.a.createElement("p",null,"Will having enjoyed over a decade of dabbing and working in code, I keep being baffled by tricks and techniques. Attempting to overcome this giant will always be a daunting but invigorating passion.")),l.a.createElement("div",{className:"col-md-12 col-lg-5"},l.a.createElement("div",{className:"portfolio-laptop-mockup"},l.a.createElement("div",{className:"screen"},l.a.createElement("div",{className:"screen-content",style:{backgroundColor:"black"}},l.a.createElement("div",{className:"terminal"},l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"dot red"}),l.a.createElement("div",{className:"dot yellow"}),l.a.createElement("div",{className:"dot green"})),l.a.createElement("div",{className:"panel"},l.a.createElement("div",{className:"action"},l.a.createElement("div",{className:"command"},l.a.createElement(J,{strings:U}))))))),l.a.createElement("div",{className:"keyboard"})))))),l.a.createElement("section",{className:"featured"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-4 col-sm-12"},l.a.createElement("section",{className:"image-feature"},l.a.createElement("a",null,l.a.createElement("header",null,l.a.createElement("h3",null,"Full-stack Development")),l.a.createElement("span",{className:"image fit"},l.a.createElement("img",{src:G.a,alt:""})),l.a.createElement("div",{className:"image-feature-footer"},l.a.createElement("p",null,"Taking your product from concept/idea over the finish line."))))),l.a.createElement("div",{className:"col-md-4 col-sm-12"},l.a.createElement("section",{className:"image-feature"},l.a.createElement("a",null,l.a.createElement("header",null,l.a.createElement("h3",null,"Maintenance")),l.a.createElement("span",{className:"image fit"},l.a.createElement("img",{src:H.a,alt:""})),l.a.createElement("div",{className:"image-feature-footer"},l.a.createElement("p",null,"I resolve feature request, optimize processes and fix bugs for your project."))))),l.a.createElement("div",{className:"col-md-4 col-sm-12"},l.a.createElement("section",{className:"image-feature"},l.a.createElement("a",null,l.a.createElement("header",null,l.a.createElement("h3",null,"Hosting & Consulting")),l.a.createElement("span",{className:"image fit"},l.a.createElement("img",{src:q.a,alt:""})),l.a.createElement("div",{className:"image-feature-footer"},l.a.createElement("p",null,"I provide hosting solutions for any project that requires online presence."))))))))))},z=function(e){var a=e.projects;return l.a.createElement("div",null,l.a.createElement(C.a,null,l.a.createElement("title",null,"Projects"),l.a.createElement("meta",{name:"description",content:""})),l.a.createElement("main",{className:"page projets-page"},l.a.createElement("section",{className:"portfolio-block projects compact-grid"},l.a.createElement("header",{className:"major"},l.a.createElement("h2",null,"Portfolio"),l.a.createElement("p",null,"Projects & Contributions")),l.a.createElement("div",{className:"row no-gutters",id:"projects"},a))))},Y=function(e){var a=e.loading,t=e.title,n=e.contractor,r=e.period,c=e.tags,o=e.description,s=e.status,m=e.otherProjectTiles,i=e.sideGallery,d=e.mainImg;return l.a.createElement("main",{className:"page project-page"},l.a.createElement("section",{className:"portfolio-block project"},l.a.createElement("div",{className:"container"},l.a.createElement("header",{className:"major"},l.a.createElement("h2",null,t),l.a.createElement("p",null,n)),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:i&&!i.length?"col-lg-12 project-main-img":"col-lg-9 project-main-img"},l.a.createElement("div",{className:"image",style:{backgroundImage:"url("+d+")"}})),!a&&i?i.length?l.a.createElement("div",{className:"col-lg-3 project-sidebar-gallery"},i.map((function(e,a){return l.a.createElement("div",{key:a,className:"bg-image img-block"},l.a.createElement("img",{className:"project-side-img",src:e,alt:""}))}))):"":l.a.createElement("div",{className:"col-lg-3 project-sidebar-gallery"},[0,1,2].map((function(e){return l.a.createElement("div",{key:e,className:"bg-image img-block"},l.a.createElement("img",{className:"project-side-img",src:"",alt:""}))})))),l.a.createElement("div",{className:"row"},a?l.a.createElement("div",{className:"col-12 col-md-6 col-lg-9 offset-md-1 offset-lg-0 info"},l.a.createElement("div",{className:"loading-text loading-animate loading-small"}),l.a.createElement("div",{className:"loading-text loading-animate"}),l.a.createElement("div",{className:"loading-text loading-animate"})):l.a.createElement("div",{className:"col-12 col-md-6 col-lg-9 offset-md-1 offset-lg-0 info"},l.a.createElement("h3",null,"Description"),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:o}})),l.a.createElement("div",{id:"meta",className:"col-12 col-md-3 offset-md-1 offset-lg-0 meta"},s&&s.length?l.a.createElement("div",{className:"meta-block tags"},l.a.createElement("span",{className:"meta-heading"},"Status"),l.a.createElement("span",{className:""},s)):"",r&&r.length?l.a.createElement("div",{className:"meta-block tags"},l.a.createElement("span",{className:"meta-heading"},"Period"),l.a.createElement("span",{className:""},r)):"",n&&n.length?l.a.createElement("div",{className:"meta-block tags"},l.a.createElement("span",{className:"meta-heading"},"Contractor"),l.a.createElement("span",{className:""},n)):"",c&&c.length?l.a.createElement("div",{className:"meta-block tags"},l.a.createElement("span",{className:"meta-heading"},"Tags"),c.map((function(e){return l.a.createElement("div",{key:e},e)}))):"")),l.a.createElement("div",{className:"more-projects"},l.a.createElement("h3",{className:"text-center"},"More Projects"),a?l.a.createElement("div",{className:"row gallery"},[0,1,2,3].map((function(e){return l.a.createElement("div",{key:e,className:"col-md-4 col-lg-3"},l.a.createElement("div",{className:"loading-card loading-animate"}))}))):l.a.createElement("div",{className:"row gallery"},m)))))},Q=function(){return l.a.createElement("div",null,l.a.createElement(C.a,null,l.a.createElement("title",null,"About Me"),l.a.createElement("meta",{name:"description",content:""})),l.a.createElement("main",{className:"page about-page"},l.a.createElement("section",{className:"portfolio-block"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"avatar avatar-pf"}),l.a.createElement("header",{className:"major"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,"Up close & personal")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("h3",{className:!0},"Career"),l.a.createElement("p",null,"I am a professional and dedicated web developer with a knack for critical thinking. With already a few years of practical experience in the field as developer, I now have integral knowledge of the full-cycle of web software development. While I have robust technical skills, my background highlights inter-disciplinary diversity of thought."),l.a.createElement("p",null,"Find my complete professional profile on LinkedIn:"),l.a.createElement("a",{className:"button small alt",role:"button",href:"https://www.linkedin.com/in/boy-persoon-webdeveloper/",target:"_blank",rel:"noopener noreferrer"},"Go to my LinkedIn"))),l.a.createElement("hr",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("h3",{className:!0},"Personal"),l.a.createElement("p",null,"Tell me about you! As a curious person I like to know what is on people's mind. I enjoy travelling and getting myself in awkward spots. Working behind my laptop has given me the opportunity to work and traveling."),l.a.createElement("p",null,"I don't shy away from a little competition, feel free to ",l.a.createElement("strong",null,"challenge")," me below:")))))))},X=function(){return l.a.createElement("div",null,l.a.createElement(C.a,null,l.a.createElement("title",null,"Repos"),l.a.createElement("meta",{name:"description",content:""})),l.a.createElement("main",{className:"page projets-page"},l.a.createElement("section",{className:"portfolio-block project-no-images"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"repo-heading heading"},l.a.createElement("h1",null,"Github Repos"),l.a.createElement("h3",null,"@BoyPersoon")))),l.a.createElement("div",{id:"repos",className:"row"},l.a.createElement("div",{className:"col-md-6 col-lg-4"},l.a.createElement("div",{className:"loading-card loading-animate"})),l.a.createElement("div",{className:"col-md-6 col-lg-4"},l.a.createElement("div",{className:"loading-card loading-animate"})),l.a.createElement("div",{className:"col-md-6 col-lg-4"},l.a.createElement("div",{className:"loading-card loading-animate"})),l.a.createElement("div",{className:"col-md-6 col-lg-4"},l.a.createElement("div",{className:"loading-card loading-animate"})),l.a.createElement("div",{className:"col-md-6 col-lg-4"},l.a.createElement("div",{className:"loading-card loading-animate"})),l.a.createElement("div",{className:"col-md-6 col-lg-4"},l.a.createElement("div",{className:"loading-card loading-animate"})))))))},Z=t(35),ee=t.n(Z),ae=function(){return l.a.createElement("div",null,l.a.createElement(C.a,null,l.a.createElement("title",null,"Contact"),l.a.createElement("meta",{name:"description",content:""})),l.a.createElement("main",{className:"page contact-page"},l.a.createElement("section",{className:"portfolio-block contact"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("header",{className:"major"},l.a.createElement("h2",null,"Contact details"),l.a.createElement("p",null)))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 col-sm-12"},l.a.createElement("div",null,l.a.createElement("h3",null,"Personal Details"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-1"},l.a.createElement("i",{className:"fas fa-user"})),l.a.createElement("div",{className:"col-9"},l.a.createElement("span",null,"Boy Persoon"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-1"},l.a.createElement("i",{className:"fas fa-map-marker-alt"})),l.a.createElement("div",{className:"col-9"},l.a.createElement("span",null,"Gen\xe8ve, Suisse"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-1"},l.a.createElement("i",{className:"fas fa-envelope"})),l.a.createElement("div",{className:"col-9"},l.a.createElement("span",null,l.a.createElement("a",{href:"mailto:b.persoon@lemursdev.com?Subject=Hi%20There"},"b.persoon@lemursdev.com")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-1"},l.a.createElement("i",{className:"fas fa-mobile-alt"})),l.a.createElement("div",{className:"col-9"},l.a.createElement("span",null,l.a.createElement("a",{href:"http://192.168.1.27:8080/true"},"+31 648903913")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("ul",{className:"icons"},l.a.createElement("li",null,l.a.createElement("a",{className:"icon brands fa-github",href:"https://github.com/BoyPersoon",target:"_blank",rel:"noopener noreferrer"})),l.a.createElement("li",null,l.a.createElement("a",{className:"icon brands fa-linkedin",href:"https://www.linkedin.com/in/boy-persoon-webdeveloper/",target:"_blank",rel:"noopener noreferrer"})),l.a.createElement("li",null,l.a.createElement("a",{className:"fab solid fa-stack-overflow",href:"https://stackoverflow.com/users/7467381/boy-persoon",target:"_blank",rel:"noopener noreferrer"})),l.a.createElement("li",null,l.a.createElement("a",{className:"icon solid fa-envelope",href:"mailto:b.persoon@lemursdev.com",target:"_blank",rel:"noopener noreferrer"}))))))),l.a.createElement("div",{className:"col-md-6 col-sm-12"},l.a.createElement("div",null,l.a.createElement("h3",null,"Lemurs Webdevelopment"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-1"}),l.a.createElement("div",{className:"col-9"},l.a.createElement("span",null,"KVK 67732860"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-1"}),l.a.createElement("div",{className:"col-9"},l.a.createElement("span",null,"VAT NL209076689B01"))),l.a.createElement("img",{src:ee.a,style:{width:"175px",margin:"30px 0 0 38px"},alt:"lemurs-logo"})))),l.a.createElement("hr",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("h3",null,"Get In Touch"),l.a.createElement("p",null,'In need of information, advice, work or you just want to drop in and say "hi!", feel free to do so below!'),l.a.createElement("br",null),l.a.createElement("form",{method:"post",action:"#"},l.a.createElement("div",{className:"row gtr-uniform gtr-50"},l.a.createElement("div",{className:"col-md-6 col-sm-12"},l.a.createElement("input",{type:"text",name:"name",id:"name",defaultValue:"Name"})),l.a.createElement("div",{className:"col-md-6 col-sm-12"},l.a.createElement("input",{type:"text",name:"email",id:"email",defaultValue:"Email"})),l.a.createElement("div",{className:"col-md-6 col-sm-12"},l.a.createElement("input",{type:"checkbox",id:"copy",name:"copy"}),l.a.createElement("label",{htmlFor:"copy"},"Email me a copy of this message")),l.a.createElement("div",{className:"col-md-6 col-sm-12"},l.a.createElement("input",{type:"checkbox",id:"human",name:"human",defaultChecked:!0}),l.a.createElement("label",{htmlFor:"human"},"I am a human and not a robot")),l.a.createElement("div",{className:"col-12"},l.a.createElement("textarea",{name:"message",id:"message",placeholder:"Enter your message",rows:6,defaultValue:""})),l.a.createElement("div",{className:"col-12"},l.a.createElement("ul",{className:"actions"},l.a.createElement("li",null,l.a.createElement("input",{type:"submit",defaultValue:"Send Message"})),l.a.createElement("li",null,l.a.createElement("input",{type:"reset",defaultValue:"Reset",className:"alt"}))))))))))))};var te=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(C.a,{titleTemplate:"%s | Lemurs Webdevelopment"},l.a.createElement("meta",{charSet:"utf-8"}),l.a.createElement("title",null,"Home"),l.a.createElement("link",{rel:"canonical",href:"https://lemurs.dev"})),l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement(p,null),l.a.createElement(s.c,null,l.a.createElement(s.a,{path:"/projects"},l.a.createElement(O,null,l.a.createElement(z,null))),l.a.createElement(s.a,{path:"/project/:id"},l.a.createElement(O,null,l.a.createElement(L,null,l.a.createElement(Y,null)))),l.a.createElement(s.a,{path:"/repos"},l.a.createElement(B,null,l.a.createElement(X,null))),l.a.createElement(s.a,{path:"/about"},l.a.createElement(Q,null)),l.a.createElement(s.a,{path:"/contact"},l.a.createElement(ae,null)),l.a.createElement(s.a,{path:"/"},l.a.createElement($,null))),l.a.createElement(E,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[37,1,2]]]);
//# sourceMappingURL=main.e0826ff3.chunk.js.map