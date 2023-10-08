import{c as r,a as n,t as I}from"./disclose-version.QN4v9ZJS.js";import{f as e,s as t,c as d,n as $,r as i}from"./runtime.DTVI1pbe.js";import{h as o}from"./Seo.DcyQTGA3.js";import{S as ea}from"./Statement.Dmx7_aq_.js";import{C as p,a as j}from"./CodeBlock.Dhboelmj.js";import{S as ra}from"./Solution.CUqdMwnj.js";var oa=I(`<p>Assume the following type <!> is inductive.
Prove that <!> for all lists <!>.</p><!>`,1),ca=I(`<p>If we attempt to prove the initial proposition by structural induction, we'll end up with the issue that the induction hypothesis <!> won't be useful to prove <!>.
We'll first prove a more general proposition, and use that to show the initial proposition.</p><p>We need to show that <!> for all lists <!> and all integer <!>.
We proceed by structural induction on <!>.</p><ul><li><p>Case <!>:</p><p>By definition of <!>:</p><!><p>By definition of <!>:</p><!></li><li><p>Case <!>:</p><p>Our induction hypothesis is that <!> for all <!>.</p><p>By definition of <!> and the induction hypothesis:</p><!><p>By definition of <!>:</p><!></li></ul><p>Since the more general proposition <!> holds for all lists <!> and all integer <!>, then letting <!> demonstrates that <!> for all lists <!>.</p>`,1),pa=I("<!> <!>",1);function ua(Q){var O=pa(),z=e(O);ea(z,{children:(b,T)=>{var f=oa(),u=e(f),m=t(d(u));p(m,{children:(v,g)=>{var h=r(),_=e(h);o(_,()=>"'a list"),n(v,h)},$$slots:{default:!0}});var P=t(m,2);p(P,{children:(v,g)=>{var h=r(),_=e(h);o(_,()=>"length l = length_tl l 0"),n(v,h)},$$slots:{default:!0}});var x=t(P,2);p(x,{children:(v,g)=>{var h=r(),_=e(h);o(_,()=>"l"),n(v,h)},$$slots:{default:!0}}),$(),i(u);var y=t(u);j(y,{code:`type 'a list =
  | []
  | (::) of 'a * 'a list

let rec length : 'a list -> int =
  function
  | [] -> 0
  | _x :: xs -> 1 + length xs

let rec length_tl : 'a list -> int -> int =
  fun l acc ->
    match l with
    | [] -> acc
    | _x :: xs -> length_tl xs (1 + acc)
`,language:"ocaml",children:(v,g)=>{var h=r(),_=e(h);o(_,()=>`<span class="hljs-keyword">type</span> <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span> =
  | <span class="hljs-literal">[]</span>
  | (::) <span class="hljs-keyword">of</span> <span class="hljs-symbol">&#x27;a</span> * <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span>

<span class="hljs-keyword">let</span> <span class="hljs-keyword">rec</span> length : <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span> -&gt; <span class="hljs-built_in">int</span> =
  <span class="hljs-keyword">function</span>
  | <span class="hljs-literal">[]</span> -&gt; <span class="hljs-number">0</span>
  | _x :: xs -&gt; <span class="hljs-number">1</span> + length xs

<span class="hljs-keyword">let</span> <span class="hljs-keyword">rec</span> length_tl : <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span> -&gt; <span class="hljs-built_in">int</span> -&gt; <span class="hljs-built_in">int</span> =
  <span class="hljs-keyword">fun</span> l acc -&gt;
    <span class="hljs-keyword">match</span> l <span class="hljs-keyword">with</span>
    | <span class="hljs-literal">[]</span> -&gt; acc
    | _x :: xs -&gt; length_tl xs (<span class="hljs-number">1</span> + acc)
`),n(v,h)},$$slots:{default:!0}}),n(b,f)},$$slots:{default:!0}});var R=t(z,2);ra(R,{children:(b,T)=>{var f=ca(),u=e(f),m=t(d(u));p(m,{children:(s,c)=>{var a=r(),l=e(a);o(l,()=>"length xs = length_tl xs 0"),n(s,a)},$$slots:{default:!0}});var P=t(m,2);p(P,{children:(s,c)=>{var a=r(),l=e(a);o(l,()=>"length (x :: xs) = length_tl (x :: xs) 0"),n(s,a)},$$slots:{default:!0}}),$(),i(u);var x=t(u),y=t(d(x));p(y,{children:(s,c)=>{var a=r(),l=e(a);o(l,()=>"length l + acc = length_tl l acc"),n(s,a)},$$slots:{default:!0}});var v=t(y,2);p(v,{children:(s,c)=>{var a=r(),l=e(a);o(l,()=>"l"),n(s,a)},$$slots:{default:!0}});var g=t(v,2);p(g,{children:(s,c)=>{var a=r(),l=e(a);o(l,()=>"acc"),n(s,a)},$$slots:{default:!0}});var h=t(g,2);p(h,{children:(s,c)=>{var a=r(),l=e(a);o(l,()=>"l"),n(s,a)},$$slots:{default:!0}}),$(),i(x);var _=t(x),w=d(_),k=d(w),U=t(d(k));p(U,{children:(s,c)=>{var a=r(),l=e(a);o(l,()=>"l = []"),n(s,a)},$$slots:{default:!0}}),$(),i(k);var S=t(k),V=t(d(S));p(V,{children:(s,c)=>{var a=r(),l=e(a);o(l,()=>"length"),n(s,a)},$$slots:{default:!0}}),$(),i(S);var D=t(S);j(D,{code:`length [] + acc
= 0 + acc
= acc
`,language:"ocaml",children:(s,c)=>{var a=r(),l=e(a);o(l,()=>`length <span class="hljs-literal">[]</span> + acc
= <span class="hljs-number">0</span> + acc
= acc
`),n(s,a)},$$slots:{default:!0}});var B=t(D),X=t(d(B));p(X,{children:(s,c)=>{var a=r(),l=e(a);o(l,()=>"length_tl"),n(s,a)},$$slots:{default:!0}}),$(),i(B);var Y=t(B);j(Y,{code:`length_tl [] acc
= acc
`,language:"ocaml",children:(s,c)=>{var a=r(),l=e(a);o(l,()=>`length_tl <span class="hljs-literal">[]</span> acc
= acc
`),n(s,a)},$$slots:{default:!0}}),i(w);var E=t(w),C=d(E),Z=t(d(C));p(Z,{children:(s,c)=>{var a=r(),l=e(a);o(l,()=>"l = x :: xs"),n(s,a)},$$slots:{default:!0}}),$(),i(C);var W=t(C),F=t(d(W));p(F,{children:(s,c)=>{var a=r(),l=e(a);o(l,()=>"length xs + a = length_tl xs a"),n(s,a)},$$slots:{default:!0}});var aa=t(F,2);p(aa,{children:(s,c)=>{var a=r(),l=e(a);o(l,()=>"a"),n(s,a)},$$slots:{default:!0}}),$(),i(W);var q=t(W),sa=t(d(q));p(sa,{children:(s,c)=>{var a=r(),l=e(a);o(l,()=>"length"),n(s,a)},$$slots:{default:!0}}),$(),i(q);var G=t(q);j(G,{code:`length (x :: xs) + acc
= 1 + length xs + acc
= length xs + (1 + acc)
= length_tl xs (1 + acc)
`,language:"ocaml",children:(s,c)=>{var a=r(),l=e(a);o(l,()=>`length (x :: xs) + acc
= <span class="hljs-number">1</span> + length xs + acc
= length xs + (<span class="hljs-number">1</span> + acc)
= length_tl xs (<span class="hljs-number">1</span> + acc)
`),n(s,a)},$$slots:{default:!0}});var A=t(G),la=t(d(A));p(la,{children:(s,c)=>{var a=r(),l=e(a);o(l,()=>"length_tl"),n(s,a)},$$slots:{default:!0}}),$(),i(A);var ta=t(A);j(ta,{code:`length_tl (x :: xs) acc
= length_tl xs (1 + acc)
`,language:"ocaml",children:(s,c)=>{var a=r(),l=e(a);o(l,()=>`length_tl (x :: xs) acc
= length_tl xs (<span class="hljs-number">1</span> + acc)
`),n(s,a)},$$slots:{default:!0}}),i(E),i(_);var H=t(_),J=t(d(H));p(J,{children:(s,c)=>{var a=r(),l=e(a);o(l,()=>"length l + acc = length_tl l acc"),n(s,a)},$$slots:{default:!0}});var K=t(J,2);p(K,{children:(s,c)=>{var a=r(),l=e(a);o(l,()=>"l"),n(s,a)},$$slots:{default:!0}});var L=t(K,2);p(L,{children:(s,c)=>{var a=r(),l=e(a);o(l,()=>"acc"),n(s,a)},$$slots:{default:!0}});var M=t(L,2);p(M,{children:(s,c)=>{var a=r(),l=e(a);o(l,()=>"acc = 0"),n(s,a)},$$slots:{default:!0}});var N=t(M,2);p(N,{children:(s,c)=>{var a=r(),l=e(a);o(l,()=>"length l = length_tl l 0"),n(s,a)},$$slots:{default:!0}});var na=t(N,2);p(na,{children:(s,c)=>{var a=r(),l=e(a);o(l,()=>"l"),n(s,a)},$$slots:{default:!0}}),$(),i(H),n(b,f)},$$slots:{default:!0}}),n(Q,O)}export{ua as default};
