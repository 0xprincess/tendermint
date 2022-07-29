(window.webpackJsonp=window.webpackJsonp||[]).push([[250],{825:function(e,t,a){"use strict";a.r(t);var o=a(1),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"pbts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pbts"}},[e._v("#")]),e._v(" PBTS")]),e._v(" "),a("p",[e._v("This document provides an overview of the Proposer-Based Timestamp (PBTS)\nalgorithm added to Tendermint in the v0.36 release. It outlines the core\nfunctionality as well as the parameters and constraints of the this algorithm.")]),e._v(" "),a("h2",{attrs:{id:"algorithm-overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#algorithm-overview"}},[e._v("#")]),e._v(" Algorithm Overview")]),e._v(" "),a("p",[e._v("The PBTS algorithm defines a way for a Tendermint blockchain to create block\ntimestamps that are within a reasonable bound of the clocks of the validators on\nthe network. This replaces the original BFTTime algorithm for timestamp\nassignment that computed a timestamp using the timestamps included in precommit\nmessages.")]),e._v(" "),a("h2",{attrs:{id:"algorithm-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#algorithm-parameters"}},[e._v("#")]),e._v(" Algorithm Parameters")]),e._v(" "),a("p",[e._v("The functionality of the PBTS algorithm is governed by two parameters within\nTendermint. These two parameters are "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/master/spec/abci/apps.md#L291",target:"_blank",rel:"noopener noreferrer"}},[e._v("consensus\nparameters"),a("OutboundLink")],1),e._v(",\nmeaning they are configured by the ABCI application and are therefore the same\nsame across all nodes on the network.")]),e._v(" "),a("h3",{attrs:{id:"precision"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#precision"}},[e._v("#")]),e._v(" "),a("code",[e._v("Precision")])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("Precision")]),e._v(" parameter configures the acceptable upper-bound of clock drift\namong all of the nodes on a Tendermint network. Any two nodes on a Tendermint\nnetwork are expected to have clocks that differ by at most "),a("code",[e._v("Precision")]),e._v("\nmilliseconds any given instant.")]),e._v(" "),a("h3",{attrs:{id:"messagedelay"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#messagedelay"}},[e._v("#")]),e._v(" "),a("code",[e._v("MessageDelay")])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("MessageDelay")]),e._v(" parameter configures the acceptable upper-bound for\ntransmitting a "),a("code",[e._v("Proposal")]),e._v(" message from the proposer to "),a("em",[e._v("all")]),e._v(" of the validators\non the network.")]),e._v(" "),a("p",[e._v("Networks should choose as small a value for "),a("code",[e._v("MessageDelay")]),e._v(" as is practical,\nprovided it is large enough that messages can reach all participants with high\nprobability given the number of participants and latency of their connections.")]),e._v(" "),a("h2",{attrs:{id:"algorithm-concepts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#algorithm-concepts"}},[e._v("#")]),e._v(" Algorithm Concepts")]),e._v(" "),a("h3",{attrs:{id:"block-timestamps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#block-timestamps"}},[e._v("#")]),e._v(" Block timestamps")]),e._v(" "),a("p",[e._v("Each block produced by the Tendermint consensus engine contains a timestamp.\nThe timestamp produced in each block is a meaningful representation of time that is\nuseful for the protocols and applications built on top of Tendermint.")]),e._v(" "),a("p",[e._v("The following protocols and application features require a reliable source of time:")]),e._v(" "),a("ul",[a("li",[e._v("Tendermint Light Clients "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/master/spec/light-client/verification/README.md#definitions-1",target:"_blank",rel:"noopener noreferrer"}},[e._v("rely on correspondence between their known time"),a("OutboundLink")],1),e._v(" and the block time for block verification.")]),e._v(" "),a("li",[e._v("Tendermint Evidence expiration is determined "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/master/spec/consensus/evidence.md#verification",target:"_blank",rel:"noopener noreferrer"}},[e._v("either in terms of heights or in terms of time"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("Unbonding of staked assets in the Cosmos Hub "),a("a",{attrs:{href:"https://github.com/cosmos/governance/blob/master/params-change/Staking.md#unbondingtime",target:"_blank",rel:"noopener noreferrer"}},[e._v("occurs after a period of 21\ndays"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("IBC packets can use either a "),a("a",{attrs:{href:"https://docs.cosmos.network/v0.44/ibc/overview.html#acknowledgements",target:"_blank",rel:"noopener noreferrer"}},[e._v("timestamp or a height to timeout packet\ndelivery"),a("OutboundLink")],1)])]),e._v(" "),a("h3",{attrs:{id:"proposer-selects-a-block-timestamp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proposer-selects-a-block-timestamp"}},[e._v("#")]),e._v(" Proposer Selects a Block Timestamp")]),e._v(" "),a("p",[e._v("When the proposer node creates a new block proposal, the node reads the time\nfrom its local clock and uses this reading as the timestamp for the proposed\nblock.")]),e._v(" "),a("h3",{attrs:{id:"timeliness"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#timeliness"}},[e._v("#")]),e._v(" Timeliness")]),e._v(" "),a("p",[e._v("When each validator on a Tendermint network receives a proposed block, it\nperforms a series of checks to ensure that the block can be considered valid as\na candidate to be the next block in the chain.")]),e._v(" "),a("p",[e._v("The PBTS algorithm performs a validity check on the timestamp of proposed\nblocks. When a validator receives a proposal it ensures that the timestamp in\nthe proposal is within a bound of the validator's local clock. Specifically, the\nalgorithm checks that the timestamp is no more than "),a("code",[e._v("Precision")]),e._v(" greater than the\nnode's local clock and no less than "),a("code",[e._v("Precision")]),e._v(" + "),a("code",[e._v("MessageDelay")]),e._v(" behind than the\nnode's local clock. This creates range of acceptable timestamps around the\nnode's local time. If the timestamp is within this range, the PBTS algorithm\nconsiders the block "),a("strong",[e._v("timely")]),e._v(". If a block is not "),a("strong",[e._v("timely")]),e._v(", the node will\nissue a "),a("code",[e._v("nil")]),e._v(" "),a("code",[e._v("prevote")]),e._v(" for this block, signaling to the rest of the network\nthat the node does not consider the block to be valid.")]),e._v(" "),a("h3",{attrs:{id:"clock-synchronization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clock-synchronization"}},[e._v("#")]),e._v(" Clock Synchronization")]),e._v(" "),a("p",[e._v("The PBTS algorithm requires the clocks of the validators on a Tendermint network\nare within "),a("code",[e._v("Precision")]),e._v(" of each other. In practice, this means that validators\nshould periodically synchronize to a reliable NTP server. Validators that drift\ntoo far away from the rest of the network will no longer propose blocks with\nvalid timestamps. Additionally they will not view the timestamps of blocks\nproposed by their peers to be valid either.")]),e._v(" "),a("h2",{attrs:{id:"see-also"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#see-also"}},[e._v("#")]),e._v(" See Also")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/master/spec/consensus/proposer-based-timestamp/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("The PBTS specification"),a("OutboundLink")],1),e._v("\ncontains all of the details of the algorithm.")])])])}),[],!1,null,null,null);t.default=r.exports}}]);