"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[51021],{1064:(e,t,a)=>{a.r(t),a.d(t,{data:()=>i});const i={key:"v-55cb632b",path:"/devices/MCCGQ12LM.html",title:"Xiaomi MCCGQ12LM control via MQTT",lang:"en-US",frontmatter:{title:"Xiaomi MCCGQ12LM control via MQTT",description:"Integrate your Xiaomi MCCGQ12LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2021-08-17T18:57:09.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Recommendation",slug:"recommendation",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Contact (binary)",slug:"contact-binary",children:[]},{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Voltage (numeric)",slug:"voltage-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/MCCGQ12LM.md",git:{updatedTime:1642312391e3}}},61094:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});const i=(0,a(66252).uE)('<h1 id="xiaomi-mccgq12lm" tabindex="-1"><a class="header-anchor" href="#xiaomi-mccgq12lm" aria-hidden="true">#</a> Xiaomi MCCGQ12LM</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>MCCGQ12LM</td></tr><tr><td>Vendor</td><td>Xiaomi</td></tr><tr><td>Description</td><td>Aqara T1 door &amp; window contact sensor</td></tr><tr><td>Exposes</td><td>contact, battery, voltage, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/MCCGQ12LM.jpg" alt="Xiaomi MCCGQ12LM"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Press and hold the reset button on the device for +- 5 seconds (until the blue light starts blinking). After this the device will automatically join, but the interview process may not finish. If that happens, keep doing short presses to the reset button to keep the light flashing, until the interview process finishes successfully.</p><h3 id="recommendation" tabindex="-1"><a class="header-anchor" href="#recommendation" aria-hidden="true">#</a> Recommendation</h3><p>If the contact is being made via a horizontal slide (e.g. the sensor is placed at the top of a sliding door), the sensor may provide three or more messages with conflicting states. To get around this issue, consider using the <code>debounce</code> option in your device specific configuration.</p><p>E.g. (devices.yaml)</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">&#39;0xabc457fffe679xyz&#39;</span><span class="token punctuation">:</span>\n    <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> my_sensor\n    <span class="token key atrule">debounce</span><span class="token punctuation">:</span> <span class="token number">1</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="contact-binary" tabindex="-1"><a class="header-anchor" href="#contact-binary" aria-hidden="true">#</a> Contact (binary)</h3><p>Indicates if the contact is closed (= true) or open (= false). Value can be found in the published state on the <code>contact</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>false</code> contact is ON, if <code>true</code> OFF.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',18),n={},o=(0,a(83744).Z)(n,[["render",function(e,t){return i}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[a,i]of t)e[a]=i;return e}}}]);