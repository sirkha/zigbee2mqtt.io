"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[94666],{25873:(e,t,a)=>{a.r(t),a.d(t,{data:()=>s});const s={key:"v-09bebcaa",path:"/devices/S1-R.html",title:"Ubisys S1-R control via MQTT",lang:"en-US",frontmatter:{title:"Ubisys S1-R control via MQTT",description:"Integrate your Ubisys S1-R via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2021-02-28T13:58:01.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Power (numeric, meter endpoint)",slug:"power-numeric-meter-endpoint",children:[]},{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/S1-R.md",git:{updatedTime:1642312391e3}}},76555:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var s=a(66252);const o=(0,s.uE)('<h1 id="ubisys-s1-r" tabindex="-1"><a class="header-anchor" href="#ubisys-s1-r" aria-hidden="true">#</a> Ubisys S1-R</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>S1-R</td></tr><tr><td>Vendor</td><td>Ubisys</td></tr><tr><td>Description</td><td>Power switch S1-R</td></tr><tr><td>Exposes</td><td>switch (state), power, action, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/S1-R.jpg" alt="Ubisys S1-R"></td></tr></tbody></table><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates" aria-hidden="true">#</a> OTA updates</h2>',3),i=(0,s.Uk)("This device supports OTA updates, for more information see "),n=(0,s.Uk)("OTA updates"),d=(0,s.Uk)("."),r=(0,s._)("h2",{id:"options",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,s.Uk)(" Options")],-1),c=(0,s.Uk)("How to use device type specific configuration"),l=(0,s.uE)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. Example:</li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span>\n  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span>\n  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="power-numeric-meter-endpoint" tabindex="-1"><a class="header-anchor" href="#power-numeric-meter-endpoint" aria-hidden="true">#</a> Power (numeric, meter endpoint)</h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>toggle</code>, <code>on</code>, <code>off</code>, <code>recall_*</code>, <code>brightness_move_up</code>, <code>brightness_move_down</code>, <code>brightness_stop</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',11),u={},h=(0,a(83744).Z)(u,[["render",function(e,t){const a=(0,s.up)("RouterLink");return(0,s.wg)(),(0,s.iD)(s.HY,null,[o,(0,s._)("p",null,[i,(0,s.Wm)(a,{to:"/guide/usage/ota_updates.html"},{default:(0,s.w5)((()=>[n])),_:1}),d]),r,(0,s._)("p",null,[(0,s._)("em",null,[(0,s.Wm)(a,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,s.w5)((()=>[c])),_:1})])]),l],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[a,s]of t)e[a]=s;return e}}}]);