(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{753:function(e,t,n){"use strict";n.r(t);var r=n(1),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"client-and-server"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#client-and-server"}},[e._v("#")]),e._v(" Client and Server")]),e._v(" "),n("p",[e._v("This section is for those looking to implement their own ABCI Server, perhaps in\na new programming language.")]),e._v(" "),n("p",[e._v("You are expected to have read all previous sections of ABCI++ specification, namely\n"),n("RouterLink",{attrs:{to:"/spec/abci++/abci%2B%2B_basic_concepts.html"}},[e._v("Basic Concepts")]),e._v(",\n"),n("RouterLink",{attrs:{to:"/spec/abci++/abci%2B%2B_methods.html"}},[e._v("Methods")]),e._v(",\n"),n("RouterLink",{attrs:{to:"/spec/abci++/abci%2B%2B_app_requirements.html"}},[e._v("Application Requirements")]),e._v(", and\n"),n("RouterLink",{attrs:{to:"/spec/abci++/abci%2B%2B_tmint_expected_behavior.html"}},[e._v("Expected Behavior")]),e._v(".")],1),e._v(" "),n("h2",{attrs:{id:"message-protocol-and-synchrony"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#message-protocol-and-synchrony"}},[e._v("#")]),e._v(" Message Protocol and Synchrony")]),e._v(" "),n("p",[e._v("The message protocol consists of pairs of requests and responses defined in the\n"),n("a",{attrs:{href:"../../proto/tendermint/abci/types.proto"}},[e._v("protobuf file")]),e._v(".")]),e._v(" "),n("p",[e._v("Some messages have no fields, while others may include byte-arrays, strings, integers,\nor custom protobuf types.")]),e._v(" "),n("p",[e._v("For more details on protobuf, see the "),n("a",{attrs:{href:"https://developers.google.com/protocol-buffers/docs/overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentation"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("As of v0.36 requests are synchronous. For each of ABCI++'s four connections (see\n"),n("RouterLink",{attrs:{to:"/spec/abci++/abci%2B%2B_app_requirements.html"}},[e._v("Connections")]),e._v("), when Tendermint issues a request to the\nApplication, it will wait for the response before continuing execution. As a side effect,\nrequests and responses are ordered for each connection, but not necessarily across connections.")],1),e._v(" "),n("h2",{attrs:{id:"server-implementations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#server-implementations"}},[e._v("#")]),e._v(" Server Implementations")]),e._v(" "),n("p",[e._v("To use ABCI in your programming language of choice, there must be an ABCI\nserver in that language. Tendermint supports four implementations of the ABCI server:")]),e._v(" "),n("ul",[n("li",[e._v("in Tendermint's repository:\n"),n("ul",[n("li",[e._v("In-process")]),e._v(" "),n("li",[e._v("ABCI-socket")]),e._v(" "),n("li",[e._v("GRPC")])])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/informalsystems/tendermint-rs",target:"_blank",rel:"noopener noreferrer"}},[e._v("tendermint-rs"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/penumbra-zone/tower-abci",target:"_blank",rel:"noopener noreferrer"}},[e._v("tower-abci"),n("OutboundLink")],1)])]),e._v(" "),n("p",[e._v("The implementations in Tendermint's repository can be tested using "),n("code",[e._v("abci-cli")]),e._v(" by setting\nthe "),n("code",[e._v("--abci")]),e._v(" flag appropriately.")]),e._v(" "),n("p",[e._v("See examples, in various stages of maintenance, in\n"),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/tree/master/abci/server",target:"_blank",rel:"noopener noreferrer"}},[e._v("Go"),n("OutboundLink")],1),e._v(",\n"),n("a",{attrs:{href:"https://github.com/tendermint/js-abci",target:"_blank",rel:"noopener noreferrer"}},[e._v("JavaScript"),n("OutboundLink")],1),e._v(",\n"),n("a",{attrs:{href:"https://github.com/mdyring/cpp-tmsp",target:"_blank",rel:"noopener noreferrer"}},[e._v("C++"),n("OutboundLink")],1),e._v(", and\n"),n("a",{attrs:{href:"https://github.com/jTendermint/jabci",target:"_blank",rel:"noopener noreferrer"}},[e._v("Java"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("h3",{attrs:{id:"in-process"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#in-process"}},[e._v("#")]),e._v(" In Process")]),e._v(" "),n("p",[e._v("The simplest implementation uses function calls in Golang.\nThis means ABCI applications written in Golang can be linked with Tendermint Core and run as a single binary.")]),e._v(" "),n("h3",{attrs:{id:"grpc"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#grpc"}},[e._v("#")]),e._v(" GRPC")]),e._v(" "),n("p",[e._v("If you are not using Golang,\nbut "),n("a",{attrs:{href:"https://grpc.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GRPC"),n("OutboundLink")],1),e._v(" is available in your language, this is the easiest approach,\nthough it will have significant performance overhead.")]),e._v(" "),n("p",[e._v("Please check GRPC's documentation to know to set up the Application as an\nABCI GRPC server.")]),e._v(" "),n("h3",{attrs:{id:"socket"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#socket"}},[e._v("#")]),e._v(" Socket")]),e._v(" "),n("p",[e._v("Tendermint's socket-based ABCI interface is an asynchronous,\nraw socket server which provides ordered message passing over unix or tcp.\nMessages are serialized using Protobuf3 and length-prefixed with a "),n("a",{attrs:{href:"https://developers.google.com/protocol-buffers/docs/encoding?csw=1#signed-integers",target:"_blank",rel:"noopener noreferrer"}},[e._v("signed Varint"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("If GRPC is not available in your language, your application requires higher\nperformance, or otherwise enjoy programming, you may implement your own\nABCI server using the Tendermint's socket-based ABCI interface.\nThe first step is to auto-generate the relevant data\ntypes and codec in your language using "),n("code",[e._v("protoc")]),e._v(".\nIn addition to being proto3 encoded, messages coming over\nthe socket are length-prefixed. proto3 doesn't have an\nofficial length-prefix standard, so we use our own. The first byte in\nthe prefix represents the length of the Big Endian encoded length. The\nremaining bytes in the prefix are the Big Endian encoded length.")]),e._v(" "),n("p",[e._v("For example, if the proto3 encoded ABCI message is "),n("code",[e._v("0xDEADBEEF")]),e._v(" (4\nbytes long), the length-prefixed message is "),n("code",[e._v("0x0104DEADBEEF")]),e._v(" ("),n("code",[e._v("01")]),e._v(" byte for encoding the length "),n("code",[e._v("04")]),e._v(" of the message). If the proto3\nencoded ABCI message is 65535 bytes long, the length-prefixed message\nwould start with 0x02FFFF.")]),e._v(" "),n("p",[e._v("Note that this length-prefixing scheme does not apply for GRPC.")]),e._v(" "),n("p",[e._v("Note that your ABCI server must be able to support multiple connections, as\nTendermint uses four connections.")]),e._v(" "),n("h2",{attrs:{id:"client"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#client"}},[e._v("#")]),e._v(" Client")]),e._v(" "),n("p",[e._v("There are currently two use-cases for an ABCI client. One is testing\ntools that allow ABCI requests to be sent to the actual application via\ncommand line. An example of this is "),n("code",[e._v("abci-cli")]),e._v(", which accepts CLI commands\nto send corresponding ABCI requests.\nThe other is a consensus engine, such as Tendermint Core,\nwhich makes ABCI requests to the application as prescribed by the consensus\nalgorithm used.")])])}),[],!1,null,null,null);t.default=s.exports}}]);