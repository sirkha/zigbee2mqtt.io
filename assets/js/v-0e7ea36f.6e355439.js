"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[50426],{36466:(e,t,i)=>{i.r(t),i.d(t,{data:()=>r});const r={key:"v-0e7ea36f",path:"/devices/ZLGP15.html",title:"Legrand ZLGP15 control via MQTT",lang:"en-US",frontmatter:{title:"Legrand ZLGP15 control via MQTT",description:"Integrate your Legrand ZLGP15 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2021-09-02T18:14:38.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Green Power",slug:"green-power",children:[]},{level:3,title:"Pairing",slug:"pairing",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/ZLGP15.md",git:{updatedTime:1642312391e3}}},85093:(e,t,i)=>{i.r(t),i.d(t,{default:()=>h});var r=i(66252);const a=(0,r.uE)('<h1 id="legrand-zlgp15" tabindex="-1"><a class="header-anchor" href="#legrand-zlgp15" aria-hidden="true">#</a> Legrand ZLGP15</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>ZLGP15</td></tr><tr><td>Vendor</td><td>Legrand</td></tr><tr><td>Description</td><td>Wireless and batteryless 4 scenes control</td></tr><tr><td>Exposes</td><td>action, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/ZLGP15.jpg" alt="Legrand ZLGP15"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="green-power" tabindex="-1"><a class="header-anchor" href="#green-power" aria-hidden="true">#</a> Green Power</h3><p>This is a Zigbee Green Power device which allows it to be very energy efficient. Messages from Green Power devices cannot be &quot;understood&quot; by normal Zigbee devices, therefore they need to be &quot;translated&quot; first. Not all Zigbee devices can do this translation, currently the only devices known to do this are Philips Hue devices. This means that the Green Power device has to be in range of a Philips Hue device in order to use it.</p><p>Green Power devices don&#39;t support binding and are not included in network scans.</p><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>To pair this device on channel 11, hold the configuration button (on the back of the device) and press any of the 4 buttons.</p>',8),n=(0,r.Uk)("This device can work on any channel, not only 11. For this, please refer to the "),d={href:"https://www.admin.legrandoc.com/files/documents/S000113321EN-00.pdf",target:"_blank",rel:"noopener noreferrer"},o=(0,r.Uk)("Legrand ZLGP15 manual chapter 6.2"),s=(0,r.Uk)("."),l=(0,r.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>press_1</code>, <code>press_2</code>, <code>press_3</code>, <code>press_4</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',5),c={},h=(0,i(83744).Z)(c,[["render",function(e,t){const i=(0,r.up)("OutboundLink");return(0,r.wg)(),(0,r.iD)(r.HY,null,[a,(0,r._)("p",null,[n,(0,r._)("a",d,[o,(0,r.Wm)(i)]),s]),l],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,r]of t)e[i]=r;return e}}}]);