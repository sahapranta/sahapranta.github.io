import{u as l,d as _,e as h,f as i,o as m,c as p,b as t,t as o,g as e,h as u,w as f}from"./index-65dc395f.js";const g={class:"features-inner section-inner has-bottom-divider"},b={class:"features-header text-center"},v={class:"container-sm"},k={class:"section-title mt-0"},x={class:"section-paragraph"},j=["href"],w=["href"],B={class:"features-image"},y=["src"],S={style:{display:"flex","justify-content":"center"}},C=["onClick"],D={__name:"ProjectView",setup(P){const a=l();_(()=>n.loadData());const n=h(),c=i(()=>a.currentRoute.value),s=i(()=>n.data.find(r=>r.name===c.value.params.slug)),d=()=>a.push({name:"home"});return(r,R)=>(m(),p("div",g,[t("div",b,[t("div",v,[t("h2",k,o(e(c).params.slug),1),t("p",x," The Project is made using "+o(e(s).tech)+". ",1),t("p",null,o(e(s).description),1),u(),t("a",{class:"button button-shadow button-sm",target:"_blank",href:e(s).url},"See Live",8,j),u(" & "),t("a",{class:"button button-shadow button-sm",target:"_blank",href:e(s).source},"Source Code",8,w),t("div",B,[t("img",{class:"features-box project-img",src:`/images/${e(s).img}`,alt:"Feature box"},null,8,y)]),t("div",S,[t("a",{class:"button button-danger",onClick:f(d,["prevent"])},"Go Back",8,C)])])])]))}};export{D as default};
