(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{795:function(e,t,i){"use strict";i.r(t);var o=i(1),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"results-of-discussions-and-decisions"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#results-of-discussions-and-decisions"}},[e._v("#")]),e._v(" Results of Discussions and Decisions")]),e._v(" "),i("ul",[i("li",[e._v("Generating a minimal proof of fork (as suggested in "),i("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/5083",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issue #5083"),i("OutboundLink")],1),e._v(") is too costly at the light client\n"),i("ul",[i("li",[e._v("we do not know all lightblocks from the primary")]),e._v(" "),i("li",[e._v("therefore there are many scenarios. we might even need to ask\nthe primary again for additional lightblocks to isolate the\nbranch.")])])])]),e._v(" "),i("blockquote",[i("p",[e._v("For instance, the light node starts with block at height 1 and the\nprimary provides a block of height 10 that the light node can\nverify immediately. In cross-checking, a secondary now provides a\nconflicting header b10 of height 10 that needs another header b5\nof height 5 to\nverify. Now, in order for the light node to convince the primary:")]),e._v(" "),i("ul",[i("li",[e._v("The light node cannot just sent b5, as it is not clear whether\nthe fork happened before or after 5")]),e._v(" "),i("li",[e._v("The light node cannot just send b10, as the primary would also\nneed  b5 for verification")]),e._v(" "),i("li",[e._v("In order to minimize the evidence, the light node may try to\nfigure out where the branch happens, e.g., by asking the primary\nfor height 5 (it might be that more queries are required, also\nto the secondary. However, assuming that in this scenario the\nprimary is faulty it may not respond.")])])]),e._v(" "),i("p",[e._v("As the main goal is to catch misbehavior of the primary,\nevidence generation and punishment must not depend on their\ncooperation. So the moment we have proof of fork (even if it\ncontains several light blocks) we should submit right away.")]),e._v(" "),i("ul",[i("li",[i("p",[e._v('decision: "full" proof of fork consists of two traces that originate in the\nsame lightblock and lead to conflicting headers of the same height.')])]),e._v(" "),i("li",[i("p",[e._v("For submission of proof of fork, we may do some optimizations, for\ninstance, we might just submit  a trace of lightblocks that verifies a block\ndifferent from the one the full node knows (we do not send the trace\nthe primary gave us back to the primary)")])]),e._v(" "),i("li",[i("p",[e._v("The light client attack is via the primary. Thus we try to\ncatch if the primary installs a bad light block")]),e._v(" "),i("ul",[i("li",[e._v("We do not check secondary against secondary")]),e._v(" "),i("li",[e._v("For each secondary, we check the primary against one secondary")])])]),e._v(" "),i("li",[i("p",[e._v("Observe that just two blocks for the same height are not\nsufficient proof of fork.\nOne of the blocks may be bogus [TMBC-BOGUS.1] which does\nnot constitute slashable behavior."),i("br"),e._v("\nWhich leads to the question whether the light node should try to do\nfork detection on its initial block (from subjective\ninitialization). This could be done by doing backwards verification\n(with the hashes) until a bifurcation block is found.\nWhile there are scenarios where a\nfork could be found, there is also the scenario where a faulty full\nnode feeds the light node with bogus light blocks and forces the light\nnode to check hashes until a bogus chain is out of the trusting period.\nAs a result, the light client\nshould not try to detect a fork for its initial header. "),i("strong",[e._v("The initial\nheader must be trusted as is.")])])])]),e._v(" "),i("h1",{attrs:{id:"light-client-sequential-supervisor"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#light-client-sequential-supervisor"}},[e._v("#")]),e._v(" Light Client Sequential Supervisor")]),e._v(" "),i("p",[i("strong",[e._v("TODO:")]),e._v(" decide where (into which specification) to put the\nfollowing:")]),e._v(" "),i("p",[e._v("We describe the context on which the fork detector is called by giving\na sequential version of the supervisor function.\nRoughly, it alternates two phases namely:")]),e._v(" "),i("ul",[i("li",[e._v("Light Client Verification. As a result, a header of the required\nheight has been downloaded from and verified with the primary.")]),e._v(" "),i("li",[e._v('Light Client Fork Detections. As a result the header has been\ncross-checked with the secondaries. In case there is a fork we\nsubmit "proof of fork" and exit.')])]),e._v(" "),i("h4",{attrs:{id:"lc-func-supervisor-1"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#lc-func-supervisor-1"}},[e._v("#")]),e._v(" "),i("strong",[e._v("[LC-FUNC-SUPERVISOR.1]:")])]),e._v(" "),i("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBTZXF1ZW50aWFsLVN1cGVydmlzb3IgKCkgKEVycm9yKSB7CiAgICBsb29wIHsKICAgICAvLyBnZXQgdGhlIG5leHQgaGVpZ2h0CiAgICAgICAgbmV4dEhlaWdodCA6PSBpbnB1dCgpOwogIAogIC8vIFZlcmlmeQogICAgICAgIHJlc3VsdCA6PSBOb1Jlc3VsdDsKICAgICAgICB3aGlsZSByZXN1bHQgIT0gUmVzdWx0U3VjY2VzcyB7CiAgICAgICAgICAgIGxpZ2h0U3RvcmUscmVzdWx0IDo9IFZlcmlmeVRvVGFyZ2V0KHByaW1hcnksIGxpZ2h0U3RvcmUsIG5leHRIZWlnaHQpOwogICAgICAgICAgICBpZiByZXN1bHQgPT0gUmVzdWx0RmFpbHVyZSB7CiAgICAvLyBwaWNrIG5ldyBwcmltYXJ5IChwcm9tb3RlIGEgc2Vjb25kYXJ5IHRvIHByaW1hcnkpCiAgICAvLy8gYW5kIGRlbGV0ZSBhbGwgbGlnaHRibG9ja3MgYWJvdmUKICAgICAgICAgICAgIC8vIExhc3RUcnVzdGVkICh0aGV5IGhhdmUgbm90IGJlZW4gY3Jvc3MtY2hlY2tlZCkKICAgICAgICAgICAgIFJlcGxhY2VfUHJpbWFyeSgpOwogICB9CiAgICAgICAgfQogIAogIC8vIENyb3NzLWNoZWNrCiAgICAgICAgUG9GcyA6PSBGb3JrZGV0ZWN0b3IobGlnaHRTdG9yZSwgUG9Gcyk7CiAgICAgICAgaWYgUG9Gcy5FbXB0eSB7CiAgICAgIC8vIG5vIGZvcmsgZGV0ZWN0ZWQgd2l0aCBzZWNvbmRhcmllcywgd2UgdHJ1c3QgdGhlIG5ldwogICAvLyBsaWdodGJsb2NrCiAgICAgICAgICAgIExpZ2h0U3RvcmUuVXBkYXRlKHRlc3RlZExCLCBTdGF0ZVRydXN0ZWQpOwogICAgICAgIH0KICAgICAgICBlbHNlIHsKICAgICAgLy8gdGhlcmUgaXMgYSBmb3JrLCB3ZSBzdWJtaXQgdGhlIHByb29mcyBhbmQgZXhpdAogICAgICAgICAgICBmb3IgaSwgcCByYW5nZSBQb0ZzIHsKICAgICAgICAgICAgICAgIFN1Ym1pdFByb29mT2ZGb3JrKHApOwogICAgICAgICAgICB9CiAgICAgICAgICAgIHJldHVybihFcnJvckZvcmspOwogICAgICAgIH0KICAgIH0KfQo="}}),e._v(" "),i("p",[i("strong",[e._v("TODO:")]),e._v(" finish conditions")]),e._v(" "),i("ul",[i("li",[e._v("Implementation remark")]),e._v(" "),i("li",[e._v("Expected precondition\n"),i("ul",[i("li",[i("em",[e._v("lightStore")]),e._v(" initialized with trusted header")]),e._v(" "),i("li",[i("em",[e._v("PoFs")]),e._v(" empty")])])]),e._v(" "),i("li",[e._v("Expected postcondition\n"),i("ul",[i("li",[e._v("runs forever, or")]),e._v(" "),i("li",[e._v("is terminated by user and satisfies LightStore invariant, or "),i("strong",[e._v("TODO")])]),e._v(" "),i("li",[e._v("has submitted proof of fork upon detecting a fork")])])]),e._v(" "),i("li",[e._v("Error condition\n"),i("ul",[i("li",[e._v("none")])])])]),e._v(" "),i("hr"),e._v(" "),i("h1",{attrs:{id:"semantics-of-the-lightstore"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#semantics-of-the-lightstore"}},[e._v("#")]),e._v(" Semantics of the LightStore")]),e._v(" "),i("p",[e._v("Currently, a lightblock in the lightstore can be in one of the\nfollowing states:")]),e._v(" "),i("ul",[i("li",[e._v("StateUnverified")]),e._v(" "),i("li",[e._v("StateVerified")]),e._v(" "),i("li",[e._v("StateFailed")]),e._v(" "),i("li",[e._v("StateTrusted")])]),e._v(" "),i("p",[e._v("The intuition is that "),i("code",[e._v("StateVerified")]),e._v(" captures that the lightblock has\nbeen verified with the primary, and "),i("code",[e._v("StateTrusted")]),e._v(" is the state after\nsuccessful cross-checking with the secondaries.")]),e._v(" "),i("p",[e._v("Assuming there is "),i("strong",[e._v("always one correct node among primary and\nsecondaries")]),e._v(", and there is no fork on the blockchain, lightblocks that\nare in "),i("code",[e._v("StateTrusted")]),e._v(' can be used by the user with the guarantee of\n"finality". If a block in  '),i("code",[e._v("StateVerified")]),e._v(" is used, it might be that\ndetection later finds a fork, and a roll-back might be needed.")]),e._v(" "),i("p",[i("strong",[e._v("Remark:")]),e._v(" The assumption of one correct node, does not render\nverification useless. It is true that if the primary and the\nsecondaries return the same block we may trust it. However, if there\nis a node that provides a different block, the light node still needs\nverification to understand whether there is a fork, or whether the\ndifferent block is just bogus (without any support of some previous\nvalidator set).")]),e._v(" "),i("p",[i("strong",[e._v("Remark:")]),e._v(" A light node may choose the full nodes it communicates\nwith (the light node and the full node might even belong to the same\nstakeholder) so the assumption might be justified in some cases.")]),e._v(" "),i("p",[e._v("In the future, we will do the following changes")]),e._v(" "),i("ul",[i("li",[e._v("we assume that only from time to time, the light node is\nconnected to a correct full node")]),e._v(" "),i("li",[e._v("this means for some limited time, the light node might have no\nmeans to defend against light client attacks")]),e._v(" "),i("li",[e._v("as a result we do not have finality")]),e._v(" "),i("li",[e._v("once the light node reconnects with a correct full node, it\nshould detect the light client attack and submit evidence.")])]),e._v(" "),i("p",[e._v("Under these assumptions, "),i("code",[e._v("StateTrusted")]),e._v(' loses its meaning. As a\nresult, it should be removed from the API. We suggest that we replace\nit with a flag "trusted" that can be used')]),e._v(" "),i("ul",[i("li",[e._v("internally for efficiency reasons (to maintain\n[LCD-INV-TRUSTED-AGREED.1] until a fork is detected)")]),e._v(" "),i("li",[e._v('by light client based on the "one correct full node" assumption')])]),e._v(" "),i("hr")],1)}),[],!1,null,null,null);t.default=n.exports}}]);