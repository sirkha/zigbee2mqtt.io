"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[67691],{67141:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i={key:"v-6340199b",path:"/devices/AU-A1ZBDSS.html",title:"Aurora Lighting AU-A1ZBDSS control via MQTT",lang:"en-US",frontmatter:{title:"Aurora Lighting AU-A1ZBDSS control via MQTT",description:"Integrate your Aurora Lighting AU-A1ZBDSS via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2021-03-30T20:29:35.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch (left endpoint)",slug:"switch-left-endpoint",children:[]},{level:3,title:"Switch (right endpoint)",slug:"switch-right-endpoint",children:[]},{level:3,title:"Power (numeric, left endpoint)",slug:"power-numeric-left-endpoint",children:[]},{level:3,title:"Power (numeric, right endpoint)",slug:"power-numeric-right-endpoint",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/AU-A1ZBDSS.md",git:{updatedTime:1642312391e3}}},51151:(e,t,o)=>{o.r(t),o.d(t,{default:()=>r});const i=(0,o(66252).uE)('<h1 id="aurora-lighting-au-a1zbdss" tabindex="-1"><a class="header-anchor" href="#aurora-lighting-au-a1zbdss" aria-hidden="true">#</a> Aurora Lighting AU-A1ZBDSS</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>AU-A1ZBDSS</td></tr><tr><td>Vendor</td><td>Aurora Lighting</td></tr><tr><td>Description</td><td>Double smart socket UK</td></tr><tr><td>Exposes</td><td>switch (state), power, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/AU-A1ZBDSS.jpg" alt="Aurora Lighting AU-A1ZBDSS"></td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch-left-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-left-endpoint" aria-hidden="true">#</a> Switch (left endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_left</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_left&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_left&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_left&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_left&quot;: &quot;&quot;}</code>.</p><h3 id="switch-right-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-right-endpoint" aria-hidden="true">#</a> Switch (right endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_right</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_right&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_right&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_right&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_right&quot;: &quot;&quot;}</code>.</p><h3 id="power-numeric-left-endpoint" tabindex="-1"><a class="header-anchor" href="#power-numeric-left-endpoint" aria-hidden="true">#</a> Power (numeric, left endpoint)</h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power_left</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="power-numeric-right-endpoint" tabindex="-1"><a class="header-anchor" href="#power-numeric-right-endpoint" aria-hidden="true">#</a> Power (numeric, right endpoint)</h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power_right</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',13),d={},r=(0,o(83744).Z)(d,[["render",function(e,t){return i}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,i]of t)e[o]=i;return e}}}]);