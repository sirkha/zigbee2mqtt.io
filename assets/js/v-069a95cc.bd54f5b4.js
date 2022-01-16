"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[6833],{54267:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a={key:"v-069a95cc",path:"/devices/ZG302-BOX-RELAY.html",title:"Envilar ZG302-BOX-RELAY control via MQTT",lang:"en-US",frontmatter:{title:"Envilar ZG302-BOX-RELAY control via MQTT",description:"Integrate your Envilar ZG302-BOX-RELAY via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2021-08-01T20:41:55.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/ZG302-BOX-RELAY.md",git:{updatedTime:1642312391e3}}},42595:(e,t,i)=>{i.r(t),i.d(t,{default:()=>o});const a=(0,i(66252).uE)('<h1 id="envilar-zg302-box-relay" tabindex="-1"><a class="header-anchor" href="#envilar-zg302-box-relay" aria-hidden="true">#</a> Envilar ZG302-BOX-RELAY</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>ZG302-BOX-RELAY</td></tr><tr><td>Vendor</td><td>Envilar</td></tr><tr><td>Description</td><td>Zigbee AC in wall switch</td></tr><tr><td>Exposes</td><td>switch (state), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/ZG302-BOX-RELAY.jpg" alt="Envilar ZG302-BOX-RELAY"></td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',7),d={},o=(0,i(83744).Z)(d,[["render",function(e,t){return a}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,a]of t)e[i]=a;return e}}}]);