(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{144:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(150),r=i.__importStar(a(0)),l=i.__importDefault(a(152)),s=a(155),n=i.__importDefault(a(153)),o=i.__importDefault(a(181)),c=i.__importDefault(a(151)),d=a(182);t.default=function(e){var t=e.data;return console.log("\n______                   _        ______                 _               \n|  _  \\                 | |       | ___ \\               (_)              \n| | | | ___ __   __ ___ | |  ___  | |_/ /__ _  ___  ___  _   ___   _ __  \n| | | |/ _ \\\\ \\ / // _ \\| | / _ \\ |  __// _` |/ __|/ __|| | / _ \\ | '_ \\ \n| |/ /|  __/ \\ V /|  __/| || (_) || |  | (_| |\\__ \\\\__ \\| || (_) || | | |\n|___/  \\___|  \\_/  \\___||_| \\___/ \\_|   \\__,_||___/|___/|_| \\___/ |_| |_|\n                                                                         \n                                                                         \nBecause passion makes all the difference.\n"),r.createElement(c.default,null,r.createElement(l.default,null,r.createElement("html",{lang:"en"}),r.createElement("meta",{charSet:"utf-8"}),r.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),r.createElement("title",null,"DeveloPassion"),r.createElement("meta",{name:"description",content:"DeveloPassion. Passion makes all the difference."}),r.createElement("meta",{name:"keywords",content:"developassion, software, development, architecture, web"}),r.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),r.createElement("link",{rel:"canonical",href:"https://www.developassion.be/robots.txt"}),r.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com"})),r.createElement(o.default,null),r.createElement("div",{className:"main"},r.createElement("section",{id:"one",className:"tiles"},r.createElement("article",null,r.createElement(n.default,{fluid:t.imagePassion.childImageSharp.fluid,style:d.backgroundImage}),r.createElement("header",{className:"major"},r.createElement("h3",null,"About DeveloPassion"),r.createElement("p",null,"Learn more about our company.")),r.createElement(s.Link,{to:"/about",className:"link primary",title:"About"})),r.createElement("article",null,r.createElement(n.default,{fluid:t.imageServices.childImageSharp.fluid,style:d.backgroundImage}),r.createElement("header",{className:"major"},r.createElement("h3",null,"Services"),r.createElement("p",null,"Discover our services.")),r.createElement(s.Link,{to:"/services",className:"link primary",title:"Services"})),r.createElement("article",null,r.createElement(n.default,{fluid:t.imageTeam.childImageSharp.fluid,style:d.backgroundImage}),r.createElement("header",{className:"major"},r.createElement("h3",null,"Team"),r.createElement("p",null,"Meet our team.")),r.createElement(s.Link,{to:"/team",className:"link primary",title:"Team"})),r.createElement("article",null,r.createElement(n.default,{fluid:t.imageNews.childImageSharp.fluid,style:d.backgroundImage}),r.createElement("header",{className:"major"},r.createElement("h3",null,"News"),r.createElement("p",null,"Discover what we've been up to recently!")),r.createElement(s.Link,{to:"/news",className:"link primary",title:"News"})))))},t.query="426365403"},153:function(e,t,a){"use strict";a(33),Object.defineProperty(t,"__esModule",{value:!0});var i=a(150),r=i.__importStar(a(0)),l=i.__importDefault(a(154));t.default=function(e){var t=e;return e.fluid&&e.fluid.presentationWidth&&(t=Object.assign({},e,{style:Object.assign({},e.style||{},{margin:"0 auto",maxWidth:e.fluid.presentationWidth})})),r.createElement(l.default,Object.assign({},t))}},154:function(e,t,a){"use strict";var i=a(8);t.__esModule=!0,t.default=void 0;var r,l=i(a(7)),s=i(a(34)),n=i(a(73)),o=i(a(74)),c=i(a(0)),d=i(a(4)),u=function(e){var t=(0,o.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},m=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},p=[];var h=function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){p.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),p.push([e,t])},_=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",l=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',n=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+i+"<img "+n+o+a+r+t+s+l+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},g=c.default.forwardRef(function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,l=e.style,s=e.onLoad,d=e.onError,u=(0,n.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return c.default.createElement("img",(0,o.default)({sizes:a,srcSet:i,src:r},u,{onLoad:s,onError:d,ref:t,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},l)}))});g.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,r=!1,l=t.fadeIn,n=m(t);!n&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,r=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,r=!1);var o=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:i,imgLoaded:!1,IOSupported:r,fadeIn:l,hasNoScript:o,seenBefore:n},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,l=void 0===r?{}:r,s=e.imgStyle,n=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,m=e.placeholderClassName,p=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.Tag,E=e.itemProp,v="boolean"==typeof b?"lightgray":b,w=(0,o.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},n,f),S=(0,o.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},n),L={title:t,alt:this.state.isVisible?"":a,style:w,className:m};if(p){var I=p;return c.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},l),ref:this.handleRef,key:"fluid-"+JSON.stringify(I.srcSet)},c.default.createElement(y,{style:{width:"100%",paddingBottom:100/I.aspectRatio+"%"}}),I.base64&&c.default.createElement(g,(0,o.default)({src:I.base64},L)),I.tracedSVG&&c.default.createElement(g,(0,o.default)({src:I.tracedSVG},L)),v&&c.default.createElement(y,{title:t,style:{backgroundColor:v,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,I.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:I.srcSetWebp,sizes:I.sizes}),c.default.createElement(g,{alt:a,title:t,sizes:I.sizes,src:I.src,srcSet:I.srcSet,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:_((0,o.default)({alt:a,title:t},I))}}))}if(h){var N=h,k=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:N.width,height:N.height},l);return"inherit"===l.display&&delete k.display,c.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:k,ref:this.handleRef,key:"fixed-"+JSON.stringify(N.srcSet)},N.base64&&c.default.createElement(g,(0,o.default)({src:N.base64},L)),N.tracedSVG&&c.default.createElement(g,(0,o.default)({src:N.tracedSVG},L)),v&&c.default.createElement(y,{title:t,style:{backgroundColor:v,width:N.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:N.height}}),this.state.isVisible&&c.default.createElement("picture",null,N.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:N.srcSetWebp,sizes:N.sizes}),c.default.createElement(g,{alt:a,title:t,width:N.width,height:N.height,sizes:N.sizes,src:N.src,srcSet:N.srcSet,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:_((0,o.default)({alt:a,title:t,width:N.width,height:N.height},N))}}))}return null},t}(c.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var y=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),E=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});b.propTypes={resolutions:y,sizes:E,fixed:y,fluid:E,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var v=b;t.default=v},181:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(150).__importStar(a(0));t.default=function(){return i.createElement("section",{className:"banner major"},i.createElement("div",{className:"inner"},i.createElement("header",{className:"major"},i.createElement("h1",null,"Welcome to DeveloPassion's home")),i.createElement("div",{className:"content"},i.createElement("p",null,"This is the official Website of DeveloPassion."),i.createElement("ul",{className:"actions"},i.createElement("li",null,i.createElement("a",{href:"#one",className:"button next scrolly"},"How can we help?"))))))}},182:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.backgroundImage={height:"100%",left:0,position:"absolute",top:0,width:"100%"}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-689738387ac14cdf56b0.js.map