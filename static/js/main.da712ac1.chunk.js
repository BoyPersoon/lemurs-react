(this["webpackJsonplemurs-react"]=this["webpackJsonplemurs-react"]||[]).push([[0],{25:function(e,a,t){e.exports=t.p+"static/media/logo-circ-bg-w.ad7570e6.png"},26:function(e,a,t){e.exports=t.p+"static/media/logo-lemurs-text-w-min.57d243bb.png"},31:function(e,a,t){e.exports=t.p+"static/media/soft-1.195fef45.jpg"},32:function(e,a,t){e.exports=t.p+"static/media/hard-1.8413e682.jpg"},33:function(e,a,t){e.exports=t.p+"static/media/host-1.2311defd.jpg"},34:function(e,a,t){e.exports=t.p+"static/media/logo-text.7305313c.png"},36:function(e,a,t){e.exports=t(48)},41:function(e,a,t){},42:function(e,a,t){},48:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(24),c=t.n(r),o=(t(41),t(42),t(6)),s=t(9),m=t(25),i=t.n(m),d=t(26),u=t.n(d),p=function(){return n.a.createElement("nav",{className:"navbar navbar-dark navbar-expand-lg fixed-top bg-dark shadow portfolio-navbar gradient"},n.a.createElement("div",{className:"container"},n.a.createElement("a",{className:"navbar-brand logo",href:"/"},n.a.createElement("img",{src:i.a,alt:""}),n.a.createElement("img",{src:u.a,alt:"Lemurs Webdevelopment"})),n.a.createElement("button",{"data-toggle":"collapse",className:"navbar-toggler","data-target":"#navbarNav"},n.a.createElement("span",{className:"sr-only"},"Toggle navigation"),n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},n.a.createElement("ul",{className:"nav navbar-nav ml-auto"},n.a.createElement("li",{className:"nav-item",role:"presentation"},n.a.createElement(o.b,{className:"nav-link active",to:"/"},"Home")),n.a.createElement("li",{className:"nav-item",role:"presentation"},n.a.createElement(o.b,{className:"nav-link",to:"/projects"},"Projects")),n.a.createElement("li",{className:"nav-item",role:"presentation"},n.a.createElement(o.b,{className:"nav-link",to:"/repos"},"Repos")),n.a.createElement("li",{className:"nav-item",role:"presentation"},n.a.createElement(o.b,{className:"nav-link",to:"/about"},"About")),n.a.createElement("li",{className:"nav-item",role:"presentation"},n.a.createElement(o.b,{className:"nav-link",to:"/contact"},"Contact"))))))},E=function(){return n.a.createElement("footer",{className:"page-footer"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"copyright"},n.a.createElement("p",null,"\xa9 2020 Lemurs Webdevelopment. All rights reserved. | KVK 67732860 | VAT NL209076689B01",n.a.createElement("br",null),"Coded with \xa0\u2615 and \xa0\u2764")),n.a.createElement("ul",{className:"icons"},n.a.createElement("li",null,n.a.createElement("a",{className:"icon brands fa-github",href:"https://github.com/BoyPersoon",target:"_blank",rel:"noopener noreferrer"})),n.a.createElement("li",null,n.a.createElement("a",{className:"icon brands fa-linkedin",href:"https://www.linkedin.com/in/boy-persoon-webdeveloper/",target:"_blank",rel:"noopener noreferrer"})),n.a.createElement("li",null,n.a.createElement("a",{className:"fab solid fa-stack-overflow",href:"https://stackoverflow.com/users/7467381/boy-persoon",target:"_blank",rel:"noopener noreferrer"})),n.a.createElement("li",null,n.a.createElement("a",{className:"icon solid fa-envelope",href:"mailto:b.persoon@lemursdev.com",target:"_blank",rel:"noopener noreferrer"})))))},g=t(12),v=t(13),f=t(15),h=t(14),N=t(16),b=t(7),k=t.n(b),y=function(e){return{root:"https://cdn.sanity.io/images/7s6fo221/production/",dimension:"1395x931",extension:".jpg",params:j(e)}},j=function(e){var a;switch(e){case"projects":a=w();break;case"projectDetail":a=I();break;case"otherProjects":a=D();break;default:a=w()}var t=a,l=t.imgWidth,n=t.pixelDensity,r=t.aspectRatio,c=Math.round(l/r*n),o=Math.round(l*n);return"?h=".concat(c,"&w=").concat(o,"&fit=min&q=85")},w=function(){var e=0,a=k()(window).width(),t=1.5;switch(!0){case a>=2500:e=2500/3,t=2;break;case a>=1920:e=640,t=2;break;case a>=1024:e=1024/3;break;case a>=780:e=390;break;case a<780:e=780,t=1;break;default:e=1024/3}return{imgWidth:e,pixelDensity:t,aspectRatio:1.5}},D=function(){var e=0,a=k()(window).width(),t=1.5;switch(!0){case a>=1440:e=255,t=2;break;case a>=1024:e=210,t=1.5;break;case a>=768:e=209,t=1;break;case a<780:e=510,t=1;break;default:e=255}return{imgWidth:e,pixelDensity:t,aspectRatio:1.5}},I=function(){var e=0,a=k()(window).width(),t=1.5;switch(!0){case a>=2500:case a>=1440:e=1140,t=2;break;case a>=1024:e=960;break;case a>=780:e=690;break;case a<780:e=510,t=1;break;default:e=960}return{imgWidth:e,pixelDensity:t,aspectRatio:1.83}},x=function(e,a){var t=e.split("-")[1],l=e.split("-")[2],n=e.split("-")[3];return"undefined"!==typeof t&&t.length?a.root+t+"-"+l+"."+n+a.params:""},P=function(e){var a=e.asset;return"undefined"!==typeof a&&"undefined"!==typeof a._ref?a._ref:null},_=function(e){var a=e.link,t=e.details,l=e.children;return t?n.a.createElement(o.b,{to:a},l):l},M=function(e){var a=e.project,t=e.metaImgData,l=a._id,r=a.details,c=a.title,o=a.description,s=a.image,m=P(s),i=x(m,t),d=o?o.slice(0,150)+"... ":"",u=a.tags?a.tags.filter((function(e){return e.length})).map((function(e,a){return n.a.createElement("small",{key:a},e)})):[];return n.a.createElement("div",{className:"col-md-6 col-lg-4 item ".concat(r?"zoom-on-hover":"")},n.a.createElement(_,{link:"/project/".concat(l),details:r},n.a.createElement("img",{alt:"project img",className:"img-fluid image",src:i}),n.a.createElement("span",{className:"description"},n.a.createElement("hr",null),n.a.createElement("span",{className:"description-heading"},c),n.a.createElement("span",{className:"description-body"},n.a.createElement("div",{dangerouslySetInnerHTML:{__html:d}})),n.a.createElement("span",{className:"description-tags"},u))))},S=function(e){function a(e){var t;return Object(g.a)(this,a),(t=Object(f.a)(this,Object(h.a)(a).call(this,e))).state={projects:[]},t}return Object(N.a)(a,e),Object(v.a)(a,[{key:"componentDidMount",value:function(){this.fetchProjectData()}},{key:"fetchProjectData",value:function(){var e=this;return fetch("https://7s6fo221.api.sanity.io/v1/data/query/production?query=*%5B_type%20%3D%3D%20%22project_summary%22%5D").then((function(e){return e.json()})).then((function(e){return e?e.result.sort((function(e,a){return e.order-a.order})):null})).then((function(a){var t=y("projects"),l=a.map((function(e){return{project:e,galleryMetaImage:t}}));e.setState({projects:l})})).catch((function(e){}))}},{key:"render",value:function(){var e=this,a=this.state.projects.map((function(e){var a=e.project,t=e.galleryMetaImage;return n.a.createElement(M,{key:a._id,project:a,metaImgData:t})})),t=n.a.Children.map(this.props.children,(function(t){return n.a.cloneElement(t,{projects:a,projectsData:e.state.projects})}));return n.a.createElement("div",null,t)}}]),a}(n.a.Component),C=t(35),O=t(4),T=function(e){var a=e.project,t=e.metaImgData,l=a._id,r=a.image,c=P(r),s=x(c,t);return n.a.createElement("div",{className:"col-md-4 col-lg-3"},n.a.createElement("div",{className:"item"},n.a.createElement(o.b,{to:"/project/".concat(l)},n.a.createElement("img",{alt:"other-project",className:"img-fluid scale-on-hover",src:s}))))},W=function(e){function a(e){var t;return Object(g.a)(this,a),(t=Object(f.a)(this,Object(h.a)(a).call(this,e))).state={loading:!0,projectTitle:"Project",projectDesc:"",projectContractor:"",project:{}},t}return Object(N.a)(a,e),Object(v.a)(a,[{key:"getProjectId",value:function(){return this.props.match.params.id}},{key:"filterOtherProjects",value:function(e){var a=this;return this.state.loading?[]:e.filter((function(e){var t=e.project;return t._id!==a.getProjectId()&&t.details})).sort((function(){return Math.random()-Math.random()})).slice(0,4)}},{key:"componentDidMount",value:function(){this.fetchProjectData()}},{key:"componentDidUpdate",value:function(e,a){var t=this;if(a.projectId!==this.getProjectId()&&this.fetchProjectData(),a.loading!==this.state.loading){var l=k()("img.project-side-img"),n=k()(".project-main-img .image");l.hover((function(e){var a=k()(e.target).attr("src");n.fadeTo("fast",.1,(function(){n.css({"background-image":"url("+a+")"})})).fadeTo("slow",1)}),(function(){n.css({"background-image":"url("+t.state.mainImg+")"})}))}}},{key:"fetchProjectData",value:function(){var e,a=this,t=this.getProjectId();return this.setState({projectId:t,loading:!0}),window.scrollTo(0,0),fetch("https://7s6fo221.api.sanity.io/v1/data/query/production"+(e=t,"?query=*%5B_type%20%3D%3D%20%22project_summary%22%20%26%26%20_id%20%3D%3D%20%22"+e+"%22%5D")).then((function(e){return e.json()})).then((function(e){if("undefined"!==typeof e&&e.result&&e.result.length){var t=e.result[0],l=a.getSlideShow(t),n=a.getMainImg(t);a.setState({loading:!1,project:t,sideGallery:l,mainImg:n})}})).catch((function(e){console.log(e)}))}},{key:"getSlideShow",value:function(e){var a=e.slideshow,t=y("projectDetail");return a?a.slice(0,3).map((function(e){return x(P(e),t)})):[]}},{key:"getMainImg",value:function(e){var a=e.image,t=y("projectDetail");return x(P(a),t)}},{key:"render",value:function(){var e=this,a=this.filterOtherProjects(this.props.projectsData).map((function(e){var a=e.project,t=e.galleryMetaImage;return n.a.createElement(T,{key:a._id,project:a,metaImgData:t})})),t=n.a.Children.map(this.props.children,(function(t){return n.a.cloneElement(t,Object(C.a)({},e.state.project,{otherProjectTiles:a,sideGallery:e.state.sideGallery,mainImg:e.state.mainImg}))}));return n.a.createElement("div",null,n.a.createElement(O.a,null,n.a.createElement("title",null,this.state.projectTitle),n.a.createElement("meta",{name:"description",content:this.state.projectDesc})),t)}}]),a}(n.a.Component),L=Object(s.f)(W),A=function(e){function a(){return Object(g.a)(this,a),Object(f.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(N.a)(a,e),Object(v.a)(a,[{key:"componentDidMount",value:function(){this.fetchGitData()}},{key:"fetchGitData",value:function(){var e=this;return fetch("https://api.github.com/users/BoyPersoon/repos").then((function(e){return e.json()})).then((function(e){return e.map((function(e){return e.parcedDate=function(e){var a=new Date(e);return a.getDate()+"/"+(a.getMonth()+1)+"/"+a.getFullYear()}(e.updated_at),e.color=function(e){switch(e){case"JavaScript":return"#F1E05A";case"CSS":return"#563D7C";case"HTML":return"#E34C26";default:return"#777"}}(e.language),e}))})).then((function(a){k()("#repos").empty(),"undefined"!==typeof a&&a.length?a.forEach((function(a){e.appendRepo(a)})):k()("#repos").append('<p style="margin: auto">An unknown error has occured.</p>')})).catch((function(e){console.log(e)}))}},{key:"appendRepo",value:function(e){var a=e.name,t=e.description,l=e.language,n=e.color,r=e.html_url;k()("#repos").append('\n          <div class="col-md-6 col-lg-4">\n            <div class="project-card-no-image" style="border-top: 4px solid '+n+'">\n              <h3>'+a+"</h3>\n              <h4>"+t+'</h4><a class="button alt small" role="button" href="#">See More</a>\n              <div class="tags"><a target="_blank" rel="noopener noreferrer" href="'+r+'">'+l+"</a></div>\n              </div>\n            </div>\n        ")}},{key:"render",value:function(){return this.props.children}}]),a}(n.a.Component),B=t(31),G=t.n(B),R=t(32),H=t.n(R),V=t(33),q=t.n(V),F=function(){return n.a.createElement("div",null,n.a.createElement(O.a,null,n.a.createElement("title",null,"Home"),n.a.createElement("meta",{name:"description",content:""})),n.a.createElement("main",{className:"page lanidng-page"},n.a.createElement("section",{className:"portfolio-block block-intro"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"avatar"}),n.a.createElement("div",{className:"about-me"},n.a.createElement("p",null,"Hello! Welcome to ",n.a.createElement("strong",null,"Lemurs web development")," - the home base for my freelance work as a developer."),n.a.createElement("a",{className:"button small",href:"about.html",role:"button"},"More about me")))),n.a.createElement("section",{className:"portfolio-block website gradient parallax"},n.a.createElement("div",{className:"bg-overlay"}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row align-items-center"},n.a.createElement("div",{className:"col-md-12 col-lg-5 offset-lg-1 text"},n.a.createElement("h3",null,"Programming with passion"),n.a.createElement("p",null,"Will having enjoyed over a decade of dabbing and working in code, I keep being baffled by tricks and techniques. Attempting to overcome this giant will always be a daunting but invigorating passion.")),n.a.createElement("div",{className:"col-md-12 col-lg-5"},n.a.createElement("div",{className:"portfolio-laptop-mockup"},n.a.createElement("div",{className:"screen"},n.a.createElement("div",{className:"screen-content",style:{backgroundColor:"black"}},n.a.createElement("div",{className:"terminal"},n.a.createElement("div",{className:"header"},n.a.createElement("div",{className:"dot red"}),n.a.createElement("div",{className:"dot yellow"}),n.a.createElement("div",{className:"dot green"})),n.a.createElement("div",{className:"panel"},n.a.createElement("div",{className:"action"},n.a.createElement("div",{className:"command"},n.a.createElement("div",{className:"in typed-element"}))))))),n.a.createElement("div",{className:"keyboard"})))))),n.a.createElement("section",{className:"featured"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-4 col-sm-12"},n.a.createElement("section",{className:"image-feature"},n.a.createElement("a",{style:{cursor:"pointer"}},n.a.createElement("header",null,n.a.createElement("h3",null,"Full-stack Development")),n.a.createElement("span",{className:"image fit"},n.a.createElement("img",{src:G.a,alt:""})),n.a.createElement("div",{className:"image-feature-footer"},n.a.createElement("p",null,"Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia pulvinar."))))),n.a.createElement("div",{className:"col-md-4 col-sm-12"},n.a.createElement("section",{className:"image-feature"},n.a.createElement("a",{style:{cursor:"pointer"}},n.a.createElement("header",null,n.a.createElement("h3",null,"Maintenance")),n.a.createElement("span",{className:"image fit"},n.a.createElement("img",{src:H.a,alt:""})),n.a.createElement("div",{className:"image-feature-footer"},n.a.createElement("p",null,"Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia pulvinar."))))),n.a.createElement("div",{className:"col-md-4 col-sm-12"},n.a.createElement("section",{className:"image-feature"},n.a.createElement("a",{style:{cursor:"pointer"}},n.a.createElement("header",null,n.a.createElement("h3",null,"Hosting & Consulting")),n.a.createElement("span",{className:"image fit"},n.a.createElement("img",{src:q.a,alt:""})),n.a.createElement("div",{className:"image-feature-footer"},n.a.createElement("p",null,"Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia pulvinar."))))))))))},K=function(e){var a=e.projects;return n.a.createElement("div",null,n.a.createElement(O.a,null,n.a.createElement("title",null,"Projects"),n.a.createElement("meta",{name:"description",content:""})),n.a.createElement("main",{className:"page projets-page"},n.a.createElement("section",{className:"portfolio-block projects compact-grid"},n.a.createElement("header",{className:"major"},n.a.createElement("h2",null,"Portfolio"),n.a.createElement("p",null,"Projects & Contributions")),n.a.createElement("div",{className:"row no-gutters",id:"projects"},a))))},J=function(e){var a=e.loading,t=e.title,l=e.contractor,r=e.period,c=e.tags,o=e.description,s=e.status,m=e.otherProjectTiles,i=e.sideGallery,d=e.mainImg;return n.a.createElement("main",{className:"page project-page"},n.a.createElement("section",{className:"portfolio-block project"},n.a.createElement("div",{className:"container"},n.a.createElement("header",{className:"major"},n.a.createElement("h2",null,t),n.a.createElement("p",null,l)),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:i&&!i.length?"col-lg-12 project-main-img":"col-lg-9 project-main-img"},n.a.createElement("div",{className:"image",style:{backgroundImage:"url("+d+")"}})),!a&&i?i.length?n.a.createElement("div",{className:"col-lg-3 project-sidebar-gallery"},i.map((function(e,a){return n.a.createElement("div",{key:a,className:"bg-image img-block"},n.a.createElement("img",{className:"project-side-img",src:e,alt:""}))}))):"":n.a.createElement("div",{className:"col-lg-3 project-sidebar-gallery"},[0,1,2].map((function(e){return n.a.createElement("div",{key:e,className:"bg-image img-block"},n.a.createElement("img",{className:"project-side-img",src:"",alt:""}))})))),n.a.createElement("div",{className:"row"},a?n.a.createElement("div",{className:"col-12 col-md-6 col-lg-9 offset-md-1 offset-lg-0 info"},n.a.createElement("div",{className:"loading-text loading-animate loading-small"}),n.a.createElement("div",{className:"loading-text loading-animate"}),n.a.createElement("div",{className:"loading-text loading-animate"})):n.a.createElement("div",{className:"col-12 col-md-6 col-lg-9 offset-md-1 offset-lg-0 info"},n.a.createElement("h3",null,"Description"),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:o}})),n.a.createElement("div",{id:"meta",className:"col-12 col-md-3 offset-md-1 offset-lg-0 meta"},s&&s.length?n.a.createElement("div",{className:"meta-block tags"},n.a.createElement("span",{className:"meta-heading"},"Status"),n.a.createElement("span",{className:""},s)):"",r&&r.length?n.a.createElement("div",{className:"meta-block tags"},n.a.createElement("span",{className:"meta-heading"},"Period"),n.a.createElement("span",{className:""},r)):"",l&&l.length?n.a.createElement("div",{className:"meta-block tags"},n.a.createElement("span",{className:"meta-heading"},"Contractor"),n.a.createElement("span",{className:""},l)):"",c&&c.length?n.a.createElement("div",{className:"meta-block tags"},n.a.createElement("span",{className:"meta-heading"},"Tags"),c.map((function(e){return n.a.createElement("div",{key:e},e)}))):"")),n.a.createElement("div",{className:"more-projects"},n.a.createElement("h3",{className:"text-center"},"More Projects"),a?n.a.createElement("div",{className:"row gallery"},[0,1,2,3].map((function(e){return n.a.createElement("div",{key:e,className:"col-md-4 col-lg-3"},n.a.createElement("div",{className:"loading-card loading-animate"}))}))):n.a.createElement("div",{className:"row gallery"},m)))))},U=function(){return n.a.createElement("div",null,n.a.createElement(O.a,null,n.a.createElement("title",null,"About Me"),n.a.createElement("meta",{name:"description",content:""})),n.a.createElement("main",{className:"page about-page"},n.a.createElement("section",{className:"portfolio-block"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"avatar avatar-pf"}),n.a.createElement("header",{className:"major"},n.a.createElement("h2",null,"About Me"),n.a.createElement("p",null,"Up close & personal")),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h3",{className:!0},"Career"),n.a.createElement("p",null,"I am a professional and dedicated web developer with a knack for critical thinking. With already a few years of practical experience in the field as developer, I now have integral knowledge of the full-cycle of web software development. While I have robust technical skills, my background highlights inter-disciplinary diversity of thought."),n.a.createElement("p",null,"Find my complete professional profile on LinkedIn:"),n.a.createElement("a",{className:"button small alt",role:"button",href:"https://www.linkedin.com/in/boy-persoon-webdeveloper/",target:"_blank",rel:"noopener noreferrer"},"Go to my LinkedIn"))),n.a.createElement("hr",null),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h3",{className:!0},"Personal"),n.a.createElement("p",null,"Tell me about you! As a curious person I like to know what is on people's mind. I enjoy travelling and getting myself in awkward spots. Working behind my laptop has given me the opportunity to work and traveling."),n.a.createElement("p",null,"I don't shy away from a little competition, feel free to ",n.a.createElement("strong",null,"challenge")," me below:")))))))},z=function(){return n.a.createElement("div",null,n.a.createElement(O.a,null,n.a.createElement("title",null,"Repos"),n.a.createElement("meta",{name:"description",content:""})),n.a.createElement("main",{className:"page projets-page"},n.a.createElement("section",{className:"portfolio-block project-no-images"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"repo-heading heading"},n.a.createElement("h1",null,"Github Repos"),n.a.createElement("h3",null,"@BoyPersoon")))),n.a.createElement("div",{id:"repos",className:"row"},n.a.createElement("div",{className:"col-md-6 col-lg-4"},n.a.createElement("div",{className:"loading-card loading-animate"})),n.a.createElement("div",{className:"col-md-6 col-lg-4"},n.a.createElement("div",{className:"loading-card loading-animate"})),n.a.createElement("div",{className:"col-md-6 col-lg-4"},n.a.createElement("div",{className:"loading-card loading-animate"})),n.a.createElement("div",{className:"col-md-6 col-lg-4"},n.a.createElement("div",{className:"loading-card loading-animate"})),n.a.createElement("div",{className:"col-md-6 col-lg-4"},n.a.createElement("div",{className:"loading-card loading-animate"})),n.a.createElement("div",{className:"col-md-6 col-lg-4"},n.a.createElement("div",{className:"loading-card loading-animate"})))))))},Y=t(34),$=t.n(Y),Q=function(){return n.a.createElement("div",null,n.a.createElement(O.a,null,n.a.createElement("title",null,"Contact"),n.a.createElement("meta",{name:"description",content:""})),n.a.createElement("main",{className:"page contact-page"},n.a.createElement("section",{className:"portfolio-block contact"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("header",{className:"major"},n.a.createElement("h2",null,"Contact details"),n.a.createElement("p",null)))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6 col-sm-12"},n.a.createElement("div",null,n.a.createElement("h3",null,"Personal Details"),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-1"},n.a.createElement("i",{className:"fas fa-user"})),n.a.createElement("div",{className:"col-9"},n.a.createElement("span",null,"Boy Persoon"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-1"},n.a.createElement("i",{className:"fas fa-map-marker-alt"})),n.a.createElement("div",{className:"col-9"},n.a.createElement("span",null,"Gen\xe8ve, Suisse"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-1"},n.a.createElement("i",{className:"fas fa-envelope"})),n.a.createElement("div",{className:"col-9"},n.a.createElement("span",null,n.a.createElement("a",{href:"mailto:b.persoon@lemursdev.com?Subject=Hi%20There"},"b.persoon@lemursdev.com")))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-1"},n.a.createElement("i",{className:"fas fa-mobile-alt"})),n.a.createElement("div",{className:"col-9"},n.a.createElement("span",null,n.a.createElement("a",{href:"http://192.168.1.27:8080/true"},"+31 648903913")))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement("ul",{className:"icons"},n.a.createElement("li",null,n.a.createElement("a",{className:"icon brands fa-github",href:"https://github.com/BoyPersoon",target:"_blank",rel:"noopener noreferrer"})),n.a.createElement("li",null,n.a.createElement("a",{className:"icon brands fa-linkedin",href:"https://www.linkedin.com/in/boy-persoon-webdeveloper/",target:"_blank",rel:"noopener noreferrer"})),n.a.createElement("li",null,n.a.createElement("a",{className:"fab solid fa-stack-overflow",href:"https://stackoverflow.com/users/7467381/boy-persoon",target:"_blank",rel:"noopener noreferrer"})),n.a.createElement("li",null,n.a.createElement("a",{className:"icon solid fa-envelope",href:"mailto:b.persoon@lemursdev.com",target:"_blank",rel:"noopener noreferrer"}))))))),n.a.createElement("div",{className:"col-md-6 col-sm-12"},n.a.createElement("div",null,n.a.createElement("h3",null,"Lemurs Webdevelopment"),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-1"}),n.a.createElement("div",{className:"col-9"},n.a.createElement("span",null,"KVK 67732860"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-1"}),n.a.createElement("div",{className:"col-9"},n.a.createElement("span",null,"VAT NL209076689B01"))),n.a.createElement("img",{src:$.a,style:{width:"175px",margin:"30px 0 0 38px"},alt:"lemurs-logo"})))),n.a.createElement("hr",null),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h3",null,"Get In Touch"),n.a.createElement("p",null,'In need of information, advice, work or you just want to drop in and say "hi!", feel free to do so below!'),n.a.createElement("br",null),n.a.createElement("form",{method:"post",action:"#"},n.a.createElement("div",{className:"row gtr-uniform gtr-50"},n.a.createElement("div",{className:"col-md-6 col-sm-12"},n.a.createElement("input",{type:"text",name:"name",id:"name",defaultValue:!0,placeholder:"Name"})),n.a.createElement("div",{className:"col-md-6 col-sm-12"},n.a.createElement("input",{type:"email",name:"email",id:"email",defaultValue:!0,placeholder:"Email"})),n.a.createElement("div",{className:"col-md-6 col-sm-12"},n.a.createElement("input",{type:"checkbox",id:"copy",name:"copy"}),n.a.createElement("label",{htmlFor:"copy"},"Email me a copy of this message")),n.a.createElement("div",{className:"col-md-6 col-sm-12"},n.a.createElement("input",{type:"checkbox",id:"human",name:"human",defaultChecked:!0}),n.a.createElement("label",{htmlFor:"human"},"I am a human and not a robot")),n.a.createElement("div",{className:"col-12"},n.a.createElement("textarea",{name:"message",id:"message",placeholder:"Enter your message",rows:6,defaultValue:""})),n.a.createElement("div",{className:"col-12"},n.a.createElement("ul",{className:"actions"},n.a.createElement("li",null,n.a.createElement("input",{type:"submit",defaultValue:"Send Message"})),n.a.createElement("li",null,n.a.createElement("input",{type:"reset",defaultValue:"Reset",className:"alt"}))))))))))))};var X=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(O.a,{titleTemplate:"%s | Lemurs Webdevelopment"},n.a.createElement("meta",{charSet:"utf-8"}),n.a.createElement("title",null,"Home"),n.a.createElement("link",{rel:"canonical",href:"https://lemurs.dev"})),n.a.createElement(o.a,null,n.a.createElement("div",null,n.a.createElement(p,null),n.a.createElement(s.c,null,n.a.createElement(s.a,{path:"/projects"},n.a.createElement(S,null,n.a.createElement(K,null))),n.a.createElement(s.a,{path:"/project/:id"},n.a.createElement(S,null,n.a.createElement(L,null,n.a.createElement(J,null)))),n.a.createElement(s.a,{path:"/repos"},n.a.createElement(A,null,n.a.createElement(z,null))),n.a.createElement(s.a,{path:"/about"},n.a.createElement(U,null)),n.a.createElement(s.a,{path:"/contact"},n.a.createElement(Q,null)),n.a.createElement(s.a,{path:"/"},n.a.createElement(F,null))),n.a.createElement(E,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.da712ac1.chunk.js.map