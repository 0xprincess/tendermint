(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{651:function(e,t,n){"use strict";n.r(t);var s=n(0),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"fast-sync"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#fast-sync"}},[e._v("#")]),e._v(" Fast Sync")]),e._v(" "),n("p",[e._v("In a proof of work blockchain, syncing with the chain is the same\nprocess as staying up-to-date with the consensus: download blocks, and\nlook for the one with the most total work. In proof-of-stake, the\nconsensus process is more complex, as it involves rounds of\ncommunication between the nodes to determine what block should be\ncommitted next. Using this process to sync up with the blockchain from\nscratch can take a very long time. It's much faster to just download\nblocks and check the merkle tree of validators than to run the real-time\nconsensus gossip protocol.")]),e._v(" "),n("h2",{attrs:{id:"using-fast-sync"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#using-fast-sync"}},[e._v("#")]),e._v(" Using Fast Sync")]),e._v(" "),n("p",[e._v("To support faster syncing, tendermint offers a "),n("code",[e._v("fast-sync")]),e._v(" mode, which\nis enabled by default, and can be toggled in the "),n("code",[e._v("config.toml")]),e._v(" or via\n"),n("code",[e._v("--fast_sync=false")]),e._v(".")]),e._v(" "),n("p",[e._v("In this mode, the tendermint daemon will sync hundreds of times faster\nthan if it used the real-time consensus process. Once caught up, the\ndaemon will switch out of fast sync and into the normal consensus mode.\nAfter running for some time, the node is considered "),n("code",[e._v("caught up")]),e._v(" if it\nhas at least one peer and it's height is at least as high as the max\nreported peer height. See "),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/b467515719e686e4678e6da4e102f32a491b85a0/blockchain/pool.go#L128",target:"_blank",rel:"noopener noreferrer"}},[e._v("the IsCaughtUp\nmethod"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("If we're lagging sufficiently, we should go back to fast syncing, but\nthis is an "),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/129",target:"_blank",rel:"noopener noreferrer"}},[e._v("open issue"),n("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=o.exports}}]);