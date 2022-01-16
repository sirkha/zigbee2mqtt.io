"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[2946],{81829:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-ca3c1c02",path:"/guide/configuration/homeassistant.html",title:"Home Assistant integration",lang:"en-US",frontmatter:{sidebarDepth:1},excerpt:"",headers:[],filePathRelative:"guide/configuration/homeassistant.md",git:{updatedTime:1642312391e3}}},79914:(s,n,a)=>{a.r(n),a.d(n,{default:()=>c});var e=a(66252);const t=(0,e._)("h1",{id:"home-assistant-integration",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#home-assistant-integration","aria-hidden":"true"},"#"),(0,e.Uk)(" Home Assistant integration")],-1),i=(0,e.Uk)("See: "),l=(0,e.Uk)("Home Assistant integration guide"),o=(0,e.Uk)("."),p=(0,e.uE)('<div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># Optional: Home Assistant integration (MQTT discovery) (default: false)</span>\n<span class="token key atrule">homeassistant</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n\n<span class="token key atrule">advanced</span><span class="token punctuation">:</span>\n  <span class="token comment"># Optional: Home Assistant discovery topic (default: shown below)</span>\n  <span class="token key atrule">homeassistant_discovery_topic</span><span class="token punctuation">:</span> <span class="token string">&#39;homeassistant&#39;</span>\n  <span class="token comment"># Optional: Home Assistant status topic (default: shown below)</span>\n  <span class="token key atrule">homeassistant_status_topic</span><span class="token punctuation">:</span> <span class="token string">&#39;homeassistant/status&#39;</span>\n  <span class="token comment"># Optional: Home Assistant legacy entity attributes, (default: shown below), when enabled:</span>\n  <span class="token comment"># Zigbee2MQTT will send additional states as attributes with each entity. For example,</span>\n  <span class="token comment"># A temperature &amp; humidity sensor will have 2 entities for the temperature and</span>\n  <span class="token comment"># humidity, with this setting enabled both entities will also have</span>\n  <span class="token comment"># an temperature and humidity attribute.</span>\n  <span class="token comment"># Note: Disabling this option, requires a Home Assistant restart</span>\n  <span class="token key atrule">homeassistant_legacy_entity_attributes</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n  <span class="token comment"># Optional: Home Assistant legacy triggers (default: shown below), when enabled:</span>\n  <span class="token comment"># - Zigbee2mqt will send an empty &#39;action&#39; or &#39;click&#39; after one has been send</span>\n  <span class="token comment"># - A &#39;sensor_action&#39; and &#39;sensor_click&#39; will be discoverd</span>\n  <span class="token key atrule">homeassistant_legacy_triggers</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>',1),r={},c=(0,a(83744).Z)(r,[["render",function(s,n){const a=(0,e.up)("RouterLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[t,(0,e._)("p",null,[i,(0,e.Wm)(a,{to:"/guide/usage/integrations/home_assistant.html"},{default:(0,e.w5)((()=>[l])),_:1}),o]),p],64)}]])},83744:(s,n)=>{n.Z=(s,n)=>{for(const[a,e]of n)s[a]=e;return s}}}]);