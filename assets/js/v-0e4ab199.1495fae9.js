"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[26349],{17751:(e,t,o)=>{o.r(t),o.d(t,{data:()=>a});const a={key:"v-0e4ab199",path:"/devices/TS011F_plug_2.html",title:"TuYa TS011F_plug_2 control via MQTT",lang:"en-US",frontmatter:{title:"TuYa TS011F_plug_2 control via MQTT",description:"Integrate your TuYa TS011F_plug_2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2021-07-01T18:17:29.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Power_outage_memory (enum)",slug:"power-outage-memory-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/TS011F_plug_2.md",git:{updatedTime:1642312391e3}}},99288:(e,t,o)=>{o.r(t),o.d(t,{default:()=>d});const a=(0,o(66252).uE)('<h1 id="tuya-ts011f-plug-2" tabindex="-1"><a class="header-anchor" href="#tuya-ts011f-plug-2" aria-hidden="true">#</a> TuYa TS011F_plug_2</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>TS011F_plug_2</td></tr><tr><td>Vendor</td><td>TuYa</td></tr><tr><td>Description</td><td>Smart plug (without power monitoring)</td></tr><tr><td>Exposes</td><td>switch (state), power_outage_memory, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/TS011F_plug_2.jpg" alt="TuYa TS011F_plug_2"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Pair this device with a long press (5 seconds) on the on/off button. The button will flash blue to indicate it&#39;s in pairing mode. When the blue flashing stops it should be paired and the led will turn solid red. If the led is solid blue, the device is not paired or paring was not successful.</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="power-outage-memory-enum" tabindex="-1"><a class="header-anchor" href="#power-outage-memory-enum" aria-hidden="true">#</a> Power_outage_memory (enum)</h3><p>Recover state after power outage. Value can be found in the published state on the <code>power_outage_memory</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_outage_memory&quot;: NEW_VALUE}</code>. The possible values are: <code>on</code>, <code>off</code>, <code>restore</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',12),i={},d=(0,o(83744).Z)(i,[["render",function(e,t){return a}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,a]of t)e[o]=a;return e}}}]);