var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,m=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,s=(e,t)=>{for(var a in t||(t={}))r.call(t,a)&&m(e,a,t[a]);if(l)for(var a of l(t))n.call(t,a)&&m(e,a,t[a]);return e},c=(e,l)=>t(e,a(l));import{R as o,N as i,C as u,a as d,b as E,c as p,r as g,d as y,L as v,B as h,u as f,e as x,f as b,g as N,F as k,A as w,h as $,i as _,T as S,j as P,k as T,I,S as O,l as j,m as L,Q as C,n as q,o as F,p as W,q as D}from"./vendor.be1f3b67.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const B=()=>o.createElement(i,{bg:"dark",variant:"dark",expand:"md"},o.createElement(u,null,o.createElement(d,{to:"/",className:"fs-4 navbar-brand"},"TMDB - 2.0"),o.createElement(i.Toggle,{className:"light","aria-controls":"basic-navbar-nav"}),o.createElement(i.Collapse,{id:"basic-navbar-nav"},o.createElement(E,{className:"ms-auto"},o.createElement(d,{to:"/cinema",className:"nav-link"},"Cinema"),o.createElement(d,{to:"/popular",className:"nav-link"},"Popular"),o.createElement(d,{to:"/top-rated",className:"nav-link"},"Top Rated"),o.createElement(d,{to:"/genre",className:"nav-link"},"Genres"))))),G=e=>e.sort(((e,t)=>t.vote_average-e.vote_average)),R="https://image.tmdb.org/t/p/w400/",J="https://via.placeholder.com/400",M="0dd7b23e90e1f5fb99986582b77937d0";p.defaults.baseURL="https://api.themoviedb.org/3";const A=async e=>await p.get(e),H=async()=>(await A(`/movie/now_playing?api_key=${M}&region=se`)).data,Q=async e=>{const t=await A(`/trending/movie/${e}?api_key=${M}&sort_by=vote_average.desc&vote_count.gte=1000&&region=se`),{results:a}=t.data;return G(a)},U=async()=>(await A(`/movie/top_rated?api_key=${M}&region=se`)).data,z=async()=>(await A(`/genre/movie/list?api_key=${M}`)).data,K=async e=>{const t=await A(`/movie/${e}/similar?api_key=0dd7b23e90e1f5fb99986582b77937d0&language=en-US`);return G(t.data.results).slice(0,5)},V=async e=>{const t=await A(`/person/${e}?api_key=${M}`);return{movies:await(async e=>(await A(`https://api.themoviedb.org/3/discover/movie?api_key=${M}&with_people=${e}`)).data)(e),actor:t.data}},X=()=>o.createElement(g.BounceLoader,{color:"black"}),Y=({movie:e})=>o.createElement(y,{className:"bg-dark text-white card-container m-2"},o.createElement(y.Img,{src:e.poster_path?`${R}${e.poster_path}`:`${J}`}),o.createElement(y.ImgOverlay,{className:"d-flex flex-column justify-content-end"},o.createElement(y.Title,null,e.title),o.createElement(y.Text,null,`Släpps: ${e.release_date}`),o.createElement(y.Text,null,`Rating: ${e.vote_average}`),o.createElement(v,{to:`/movie/${e.id}`},o.createElement(h,{style:{width:"100%"},variant:"primary"},"Gå till film 👣")))),Z=({movie:e})=>o.createElement(y,{style:{maxWidth:"100%"},className:"bg-dark text-white m-3"},o.createElement(y.Img,{src:`${R}${e.poster_path}`}),o.createElement(y.ImgOverlay,{className:"d-flex flex-column justify-content-end"},o.createElement(y.Title,{style:{fontSize:"1rem"}},e.title),o.createElement(y.Text,null,`Rating: ${e.vote_average}`),o.createElement(v,{to:`/movie/${e.id}`},o.createElement(h,{style:{width:"100%"},variant:"primary"},"Gå till film 👣")))),ee=()=>{const{data:e,isLoading:t,isError:a,error:l}=f("now-playing",H);return a?o.createElement("div",null,l):o.createElement(o.Fragment,null,t&&o.createElement(X,null),o.createElement(x,{className:"justify-content-sm-around"},e&&e.results.slice(0,4).map(((e,t)=>o.createElement(b,{key:t,sm:12,md:12,lg:3},o.createElement(Z,{movie:e}))))))},te=()=>{const{data:e,isLoading:t,isError:a,error:l}=f("popular",(()=>Q("week")));return a?o.createElement("div",null,l):o.createElement(o.Fragment,null,t&&o.createElement(X,null),o.createElement(x,{className:"justify-content-sm-around"},e&&e.slice(0,4).map(((e,t)=>o.createElement(b,{key:t,xs:12,md:6,lg:3},o.createElement(Z,{movie:e}))))))},ae=({handleFormSubmit:e,query:t})=>{const[a,l]=N.exports.useState(""),[r,n]=N.exports.useState(!1);N.exports.useEffect((()=>{l(t)}),[t]);const m=t=>{t.preventDefault(),a.length<3?n(!0):(n(!1),e(a))};return o.createElement(k,{onSubmit:m,className:"mt-3"},o.createElement(k.Group,{className:"d-sm-flex",controlId:"search"},o.createElement(k.Control,{style:{width:"80%"},className:"m-1",type:"text",placeholder:"Search for movie by title",value:a,onChange:e=>l(e.target.value)}),o.createElement(h,{className:"m-1 px-4",type:"submit",onSubmit:m},"Sök! 🚀")),r&&o.createElement(w,{className:"my-3 text-center mx-auto",style:{width:"60%"},variant:"warning"},"Pleace enter more than two characters"))},le=()=>{const{data:e,isLoading:t,isError:a,error:l}=f("top-rated",U);return a?o.createElement("div",null,l):o.createElement(o.Fragment,null,t&&o.createElement(X,null),o.createElement(x,{className:"justify-content-sm-around"},e&&e.results.slice(0,4).map(((e,t)=>o.createElement(b,{key:t,xs:12,md:6,lg:3},o.createElement(Z,{movie:e}))))))},re=N.exports.createContext(),ne=()=>N.exports.useContext(re),me=({children:e})=>{const[t,a]=N.exports.useState(""),l={inputText:t,setInputText:a};return o.createElement(re.Provider,{value:l},e)},se=(e,t=null)=>{const[a,l]=N.exports.useState((()=>{const a=localStorage.getItem(e);return a?JSON.parse(a):t}));return N.exports.useEffect((()=>{let a=[];if(!t)return;const l=localStorage.getItem(e);if(l){a=JSON.parse(l);if(-1!==a.findIndex((e=>e.id===t.id)))return;if(a.length>9)return a.pop(),a.unshift(t),void localStorage.setItem(e,JSON.stringify(a));a.unshift(t),localStorage.setItem(e,JSON.stringify(a))}else a.push(t),localStorage.setItem(e,JSON.stringify(a))}),[t]),[a,l]},ce=()=>{const[e]=se("movies");return o.createElement($,{className:"mt-5 p-4",style:{minWidth:"300px"}},e&&o.createElement("h5",null,"Historik"),e&&e.map(((e,t)=>o.createElement(v,{key:t,to:`/movie/${e.id}`},e.original_title))))},oe=()=>{const{inputText:e,setInputText:t}=ne(),a=_();N.exports.useEffect((()=>{t("")}),[]);return o.createElement(u,null,o.createElement(ae,{query:e,handleFormSubmit:e=>{t(e),a.push("/search")}}),o.createElement("div",{className:"d-md-flex justify-content-md-around"},o.createElement("div",null,o.createElement("h3",{className:"mt-5"},"Filmer på bio just nu"),o.createElement(ee,null),o.createElement("h3",{className:"mt-5"},"Populäraste filmerna"),o.createElement(te,null),o.createElement("h3",{className:"mt-5"},"Topprankade filmer"),o.createElement(le,null)),o.createElement(ce,null)))},ie=()=>{const{data:e,isError:t,isLoading:a,error:l}=f("genres",z);return o.createElement(u,null,t&&o.createElement("div",{className:"text-center py-5"},l),a&&o.createElement(X,null),o.createElement("h3",{style:{maxWidth:"80%"},className:"mx-auto m-2"},"Pick a genre you like!"),o.createElement(S,{striped:!0,bordered:!0,hover:!0,className:"mx-auto m-3",style:{maxWidth:"80%"}},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"#"),o.createElement("th",null,"Genre"))),o.createElement("tbody",null,e&&e.genres.map(((e,t)=>o.createElement("tr",{key:t},o.createElement("td",{style:{width:"100px"}}," ",t+1),o.createElement("td",null,o.createElement(v,{to:`/genre/${e.id}`},e.name))))))))},ue=({page:e,setPage:t,isPreviousData:a,total:l})=>o.createElement("div",{className:"pagination d-flex justify-content-between align-items-center m-4"},o.createElement(h,{onClick:()=>t((e=>Math.max(e-1,1))),disabled:1===e},"Previous Page"),o.createElement("span",null,"Current Page: ",e),o.createElement(h,{onClick:()=>{a||e===l||t((e=>e+1))},disabled:a||e===l},"Next Page")),de=()=>{const[e,t]=P({page:1},{page:Number}),[a,l]=N.exports.useState(e.page),{id:r}=T();N.exports.useEffect((()=>{t(c(s({},e),{page:a}))}),[a]);const{data:n,isError:m,isLoading:i,error:d,isPreviousData:E}=f(["genre",r,e.page],(()=>(async(e,t)=>(await A(`/discover/movie?api_key=${M}&with_genres=${e}&page=${t}`)).data)(r,e.page)),{keepPreviousData:!0});return m?o.createElement("div",null,d):o.createElement(u,null,i&&o.createElement(X,null),n&&o.createElement(ue,{page:e.page,setPage:l,isPreviousData:E,total:n.total_pages}),o.createElement(x,null,n&&n.results.map(((e,t)=>o.createElement(b,{className:"p-4",key:t,sm:12,md:3},o.createElement(Y,{movie:e}))))))},Ee=({actors:e})=>o.createElement($,null,o.createElement(x,{className:"mb-5"},e.slice(0,9).map(((e,t)=>o.createElement(b,{xs:12,md:6,lg:4,key:t,className:"my-2"},o.createElement($.Item,{className:"d-flex align-items-center"},o.createElement(I,{width:50,height:50,roundedCircle:!0,src:e.profile_path?`${R}${e.profile_path}`:`${J}`}),o.createElement(v,{to:`/actor/${e.id}`,className:"mx-2"},e.original_name))))))),pe=()=>{const{id:e}=T(),{data:t,isLoading:a,isError:l,error:r}=f(["movie",e],(()=>(async e=>{const t=await A(`/movie/${e}?&append_to_response=credits&api_key=${M}`);return{related:await K(e),movie:t.data}})(e)));return se("movies",null==t?void 0:t.movie),o.createElement(u,null,l&&o.createElement("div",null,r),a&&o.createElement(X,null),t&&o.createElement(o.Fragment,null,o.createElement(y,{style:{},className:"flex-row my-5",style:{border:"none",maxWidth:"80%"}},o.createElement(y.Img,{variant:"top",style:{width:"100px",height:"100%"},src:`${R}${t.movie.poster_path}`,alt:"Profile image"}),o.createElement(y.Body,{className:"align-self-end pb-0"},o.createElement(y.Title,null,t.movie.title),o.createElement(y.Text,null,t.movie.overview))),o.createElement("h3",null,"Cast: "),o.createElement(Ee,{actors:t.movie.credits.cast})),t&&o.createElement(S,{striped:!0,bordered:!0,hover:!0},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"#"),o.createElement("th",null,"Title"))),o.createElement("tbody",null,t&&t.related.map(((e,t)=>o.createElement("tr",{key:t},o.createElement("td",null,t+1),o.createElement("td",null,o.createElement(v,{to:`/movie/${e.id}`},e.original_title))))))))},ge=()=>{const{data:e,isLoading:t,isError:a,error:l}=f("now-playing",H);return o.createElement(u,{className:"mt-4"},a&&o.createElement("h1",null,l),t&&o.createElement(O,null),o.createElement(x,{className:"justify-content-center"},e&&e.results.map(((e,t)=>o.createElement(b,{className:"m-2",key:t,sm:12,md:4,lg:3},o.createElement(Y,{movie:e}))))))},ye=()=>{const{data:e,isLoading:t,isError:a,error:l}=f("top-rated",U);return o.createElement(u,{className:"mt-4"},a&&o.createElement("h1",null,l),t&&o.createElement(O,null),o.createElement(x,{className:"justify-content-center"},e&&e.results.map(((e,t)=>o.createElement(b,{className:"m-2",style:{maxHeight:"500px"},key:t,sm:12,md:4,lg:3},o.createElement(Y,{movie:e}))))))},ve=()=>{const[e,t]=N.exports.useState("day"),{data:a,isLoading:l,isError:r,error:n}=f(["popular",e],(()=>Q(e)));return o.createElement(u,{className:"mt-4"},r&&o.createElement("h1",null,n),l&&o.createElement(X,null),o.createElement("div",{className:""},o.createElement(h,{style:{minWidth:"200px"},onClick:()=>t("day"),disabled:"day"===e},"För dagen"),o.createElement(h,{style:{minWidth:"200px"},className:"mx-4",onClick:()=>t("week"),disabled:"week"===e},"För veckan")),o.createElement(x,{className:"my-2"},a&&a.map(((e,t)=>o.createElement(b,{key:t,className:"my-2",sm:12,md:6,lg:3},o.createElement(Y,{movie:e}))))))},he=({movies:e})=>o.createElement(S,{striped:!0,bordered:!0,hover:!0,className:"mx-auto m-3"},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"#"),o.createElement("th",null,"Moives"))),o.createElement("tbody",null,e.results.slice(0,5).map(((e,t)=>o.createElement("tr",{key:t},o.createElement("td",null,t+1),o.createElement("td",null,o.createElement(v,{to:`/movie/${e.id}`},e.original_title))))))),fe=()=>{const{id:e}=T(),{data:t,isError:a,error:l,isLoading:r}=f(["actor",e],(()=>V(e)));return o.createElement(u,{style:{maxWidth:"80%"},className:"mx-auto"},a&&o.createElement("div",null,l),r&&o.createElement(X,null),t&&o.createElement(o.Fragment,null,o.createElement(y,{style:{border:"none"},className:"my-3"},o.createElement(y.Img,{className:"my-3 p-3 mx-auto",style:{minWidth:"100px",maxWidth:"400px"},variant:"top",src:t.actor.profile_path?`${R}${t.actor.profile_path}`:`${J}`}),o.createElement(y.Body,{className:"p-0"},o.createElement(y.Title,null,t.actor.name),o.createElement(y.Text,null,o.createElement("span",{style:{fontWeight:"bold"}},"Bio:")," ",t.actor.biography.slice(0,400)," ..."))),o.createElement("h3",null," 🌟 Starred in:"),o.createElement(he,{movies:t.movies})))},xe=()=>{const{inputText:e,setInputText:t}=ne(),[a,l]=P({page:1,q:e},{page:Number}),[r,n]=N.exports.useState(a.page),{data:m,isLoading:i,isError:d,error:E,isPreviousData:p}=f(["movies",a],(()=>(async e=>{if(!e.q)return;return(await A(`/search/movie?api_key=${M}&query=${e.q}&page=${e.page}`)).data})(a)),{keepPreviousData:!0});return N.exports.useEffect((()=>{l(c(s({},a),{page:r,q:e}))}),[r,e]),N.exports.useEffect((()=>{t(a.q)}),[]),d?o.createElement("div",null,E):o.createElement(u,null,o.createElement(ae,{query:a.q,handleFormSubmit:e=>{t(e),n(1)}}),i&&o.createElement(X,null),o.createElement(x,null,m&&0===m.results.length?o.createElement(w,{className:"m-4 text-center",variant:"warning"},o.createElement("h3",null,"Sorry nothing matches what you are looking for! 😞")):null==m?void 0:m.results.map(((e,t)=>o.createElement(b,{key:t,sm:12,md:3},o.createElement(Y,{movie:e})))),m&&m.total_pages>1&&o.createElement(ue,{page:a.page,setPage:n,isPreviousData:p,total:m.total_pages})))},be=()=>o.createElement(u,{className:"text-center my-5"},o.createElement("h1",null,"The page you are looking for could not be found! 😿 "),o.createElement(v,{to:"/"},o.createElement(h,{className:"my-2 p-3",variant:"danger"},"Go back to homepage! 🏠 ")));function Ne(){return o.createElement("div",{className:"App"},o.createElement(B,null),o.createElement(j,null,o.createElement(L,{exact:!0,path:"/"},o.createElement(oe,null)),o.createElement(L,{path:"/movie/:id"},o.createElement(pe,null)),o.createElement(L,{path:"/genre/:id"},o.createElement(de,null)),o.createElement(L,{path:"/genre"},o.createElement(ie,null)),o.createElement(L,{path:"/cinema"},o.createElement(ge,null)),o.createElement(L,{path:"/top-rated"},o.createElement(ye,null)),o.createElement(L,{path:"/popular"},o.createElement(ve,null)),o.createElement(L,{path:"/actor/:id"},o.createElement(fe,null)),o.createElement(L,{path:"/search"},o.createElement(xe,null)),o.createElement(L,{path:"*"},o.createElement(be,null))))}const ke=new C({defaultOptions:{queries:{refetchOnWindowFocus:!1,staleTime:12e4,cacheTime:72e5}}});q.render(o.createElement(o.StrictMode,null,o.createElement(F,{client:ke},o.createElement(W,null,o.createElement(me,null,o.createElement(Ne,null)),o.createElement(D.exports.ReactQueryDevtools,{initialIsOpen:!1})))),document.getElementById("root"));