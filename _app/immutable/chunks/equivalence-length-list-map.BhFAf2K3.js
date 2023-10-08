import{c as r,a as t,t as B}from"./disclose-version.QN4v9ZJS.js";import{f as e,s as n,c as f,n as _,r as $}from"./runtime.DTVI1pbe.js";import{h as o}from"./Seo.DcyQTGA3.js";import{S as R}from"./Statement.Dmx7_aq_.js";import{C as d,a as b}from"./CodeBlock.Dhboelmj.js";import{S as U}from"./Solution.CUqdMwnj.js";var V=B(`<p>Assume the following type <!> is inductive.
Prove that <!> for all lists <!> and all total functions <!>.</p><!>`,1),X=B("<p>Let <!> and <!> be total.</p><p>We proceed by structural induction on the list <!>.</p><ul><li><p>Case <!>:</p><p>By definition of <!>:</p><!></li><li><p>Case <!>:</p><p>Our induction hypothesis is that <!>.</p><p>By definition of <!> and <!>, as well as the induction hypothesis:</p><!><p>Likewise:</p><!></li></ul><p>Therefore, <!> holds for all lists <!> and all total functions <!>.</p>",1),Y=B("<!> <!>",1);function es(D){var L=Y(),q=e(L);R(q,{children:(P,G)=>{var g=V(),u=e(g),x=n(f(u));d(x,{children:(h,v)=>{var p=r(),c=e(p);o(c,()=>"'a list"),t(h,p)},$$slots:{default:!0}});var y=n(x,2);d(y,{children:(h,v)=>{var p=r(),c=e(p);o(c,()=>"length (map f l) = length l"),t(h,p)},$$slots:{default:!0}});var m=n(y,2);d(m,{children:(h,v)=>{var p=r(),c=e(p);o(c,()=>"l : 'a list"),t(h,p)},$$slots:{default:!0}});var w=n(m,2);d(w,{children:(h,v)=>{var p=r(),c=e(p);o(c,()=>"f : 'a -> 'b"),t(h,p)},$$slots:{default:!0}}),_(),$(u);var j=n(u);b(j,{code:`type 'a list =
  | []
  | (::) of 'a * 'a list

let rec length : 'a list -> int =
  function
  | [] -> 0
  | _x :: xs -> 1 + length xs

let rec map : ('a -> 'b) -> 'a list -> 'b list =
  fun f l ->
    match l with
    | [] -> []
    | x :: xs ->
        let y = f x in
        let ys = map f xs in
        y :: ys
`,language:"ocaml",children:(h,v)=>{var p=r(),c=e(p);o(c,()=>`<span class="hljs-keyword">type</span> <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span> =
  | <span class="hljs-literal">[]</span>
  | (::) <span class="hljs-keyword">of</span> <span class="hljs-symbol">&#x27;a</span> * <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span>

<span class="hljs-keyword">let</span> <span class="hljs-keyword">rec</span> length : <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span> -&gt; <span class="hljs-built_in">int</span> =
  <span class="hljs-keyword">function</span>
  | <span class="hljs-literal">[]</span> -&gt; <span class="hljs-number">0</span>
  | _x :: xs -&gt; <span class="hljs-number">1</span> + length xs

<span class="hljs-keyword">let</span> <span class="hljs-keyword">rec</span> map : (<span class="hljs-symbol">&#x27;a</span> -&gt; <span class="hljs-symbol">&#x27;b</span>) -&gt; <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span> -&gt; <span class="hljs-symbol">&#x27;b</span> <span class="hljs-built_in">list</span> =
  <span class="hljs-keyword">fun</span> f l -&gt;
    <span class="hljs-keyword">match</span> l <span class="hljs-keyword">with</span>
    | <span class="hljs-literal">[]</span> -&gt; <span class="hljs-literal">[]</span>
    | x :: xs -&gt;
        <span class="hljs-keyword">let</span> y = f x <span class="hljs-keyword">in</span>
        <span class="hljs-keyword">let</span> ys = map f xs <span class="hljs-keyword">in</span>
        y :: ys
`),t(h,p)},$$slots:{default:!0}}),t(P,g)},$$slots:{default:!0}});var F=n(q,2);U(F,{children:(P,G)=>{var g=X(),u=e(g),x=n(f(u));d(x,{children:(a,i)=>{var s=r(),l=e(s);o(l,()=>"l : 'a list"),t(a,s)},$$slots:{default:!0}});var y=n(x,2);d(y,{children:(a,i)=>{var s=r(),l=e(s);o(l,()=>"f : 'a -> 'b"),t(a,s)},$$slots:{default:!0}}),_(),$(u);var m=n(u),w=n(f(m));d(w,{children:(a,i)=>{var s=r(),l=e(s);o(l,()=>"l"),t(a,s)},$$slots:{default:!0}}),_(),$(m);var j=n(m),h=f(j),v=f(h),p=n(f(v));d(p,{children:(a,i)=>{var s=r(),l=e(s);o(l,()=>"l = []"),t(a,s)},$$slots:{default:!0}}),_(),$(v);var c=n(v),H=n(f(c));d(H,{children:(a,i)=>{var s=r(),l=e(s);o(l,()=>"map"),t(a,s)},$$slots:{default:!0}}),_(),$(c);var I=n(c);b(I,{code:`length (map f [])
= length []
`,language:"ocaml",children:(a,i)=>{var s=r(),l=e(s);o(l,()=>`length (map f <span class="hljs-literal">[]</span>)
= length <span class="hljs-literal">[]</span>
`),t(a,s)},$$slots:{default:!0}}),$(h);var A=n(h),k=f(A),J=n(f(k));d(J,{children:(a,i)=>{var s=r(),l=e(s);o(l,()=>"l = x :: xs"),t(a,s)},$$slots:{default:!0}}),_(),$(k);var C=n(k),K=n(f(C));d(K,{children:(a,i)=>{var s=r(),l=e(s);o(l,()=>"length (map f xs) = length xs"),t(a,s)},$$slots:{default:!0}}),_(),$(C);var S=n(C),E=n(f(S));d(E,{children:(a,i)=>{var s=r(),l=e(s);o(l,()=>"map"),t(a,s)},$$slots:{default:!0}});var M=n(E,2);d(M,{children:(a,i)=>{var s=r(),l=e(s);o(l,()=>"length"),t(a,s)},$$slots:{default:!0}}),_(),$(S);var O=n(S);b(O,{code:`length (map f (x :: xs))
= length (f x :: map f xs)
= 1 + length (map f xs)
= 1 + length xs
`,language:"ocaml",children:(a,i)=>{var s=r(),l=e(s);o(l,()=>`length (map f (x :: xs))
= length (f x :: map f xs)
= <span class="hljs-number">1</span> + length (map f xs)
= <span class="hljs-number">1</span> + length xs
`),t(a,s)},$$slots:{default:!0}});var N=n(O,2);b(N,{code:`length (x :: xs)
= 1 + length xs
`,language:"ocaml",children:(a,i)=>{var s=r(),l=e(s);o(l,()=>`length (x :: xs)
= <span class="hljs-number">1</span> + length xs
`),t(a,s)},$$slots:{default:!0}}),$(A),$(j);var T=n(j),W=n(f(T));d(W,{children:(a,i)=>{var s=r(),l=e(s);o(l,()=>"length (map f l) = length l"),t(a,s)},$$slots:{default:!0}});var z=n(W,2);d(z,{children:(a,i)=>{var s=r(),l=e(s);o(l,()=>"l : 'a list"),t(a,s)},$$slots:{default:!0}});var Q=n(z,2);d(Q,{children:(a,i)=>{var s=r(),l=e(s);o(l,()=>"f : 'a -> 'b"),t(a,s)},$$slots:{default:!0}}),_(),$(T),t(P,g)},$$slots:{default:!0}}),t(D,L)}export{es as default};
