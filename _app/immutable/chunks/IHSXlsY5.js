import{t as B,c as t,a as e}from"./BBlrOt-4.js";import{f as r,s as l,c as _,n as m,r as v}from"./lpCv0clr.js";import{h as o}from"./DmaXUcs0.js";import{S as R}from"./t-Wps_5z.js";import{C as i,a as b}from"./Db6E_WMG.js";import{S as U}from"./CeqhcXsd.js";var V=B(`<p>Assume the following type <!> is inductive.
Prove that <!> for all lists <!> and all total functions <!>.</p><!>`,1),X=B("<p>Let <!> and <!> be total.</p><p>We proceed by structural induction on the list <!>.</p><ul><li><p>Case <!>:</p><p>By definition of <!>:</p><!></li><li><p>Case <!>:</p><p>Our induction hypothesis is that <!>.</p><p>By definition of <!> and <!>, as well as the induction hypothesis:</p><!><p>Likewise:</p><!></li></ul><p>Therefore, <!> holds for all lists <!> and all total functions <!>.</p>",1),Y=B("<!> <!>",1);function rs(D){var L=Y(),q=r(L);R(q,{children:(P,G)=>{var u=V(),g=r(u),x=l(_(g));i(x,{children:(d,f)=>{var p=t(),c=r(p);o(c,()=>"'a list"),e(d,p)}});var y=l(x,2);i(y,{children:(d,f)=>{var p=t(),c=r(p);o(c,()=>"length (map f l) = length l"),e(d,p)}});var $=l(y,2);i($,{children:(d,f)=>{var p=t(),c=r(p);o(c,()=>"l : 'a list"),e(d,p)}});var w=l($,2);i(w,{children:(d,f)=>{var p=t(),c=r(p);o(c,()=>"f : 'a -> 'b"),e(d,p)}}),m(),v(g);var j=l(g);b(j,{code:`type 'a list =
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
`,language:"ocaml",children:(d,f)=>{var p=t(),c=r(p);o(c,()=>`<span class="hljs-keyword">type</span> <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span> =
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
`),e(d,p)},$$slots:{default:!0}}),e(P,u)}});var F=l(q,2);U(F,{children:(P,G)=>{var u=X(),g=r(u),x=l(_(g));i(x,{children:(a,h)=>{var s=t(),n=r(s);o(n,()=>"l : 'a list"),e(a,s)}});var y=l(x,2);i(y,{children:(a,h)=>{var s=t(),n=r(s);o(n,()=>"f : 'a -> 'b"),e(a,s)}}),m(),v(g);var $=l(g),w=l(_($));i(w,{children:(a,h)=>{var s=t(),n=r(s);o(n,()=>"l"),e(a,s)}}),m(),v($);var j=l($),d=_(j),f=_(d),p=l(_(f));i(p,{children:(a,h)=>{var s=t(),n=r(s);o(n,()=>"l = []"),e(a,s)}}),m(),v(f);var c=l(f),H=l(_(c));i(H,{children:(a,h)=>{var s=t(),n=r(s);o(n,()=>"map"),e(a,s)}}),m(),v(c);var I=l(c);b(I,{code:`length (map f [])
= length []
`,language:"ocaml",children:(a,h)=>{var s=t(),n=r(s);o(n,()=>`length (map f <span class="hljs-literal">[]</span>)
= length <span class="hljs-literal">[]</span>
`),e(a,s)},$$slots:{default:!0}}),v(d);var A=l(d),k=_(A),J=l(_(k));i(J,{children:(a,h)=>{var s=t(),n=r(s);o(n,()=>"l = x :: xs"),e(a,s)}}),m(),v(k);var C=l(k),K=l(_(C));i(K,{children:(a,h)=>{var s=t(),n=r(s);o(n,()=>"length (map f xs) = length xs"),e(a,s)}}),m(),v(C);var S=l(C),E=l(_(S));i(E,{children:(a,h)=>{var s=t(),n=r(s);o(n,()=>"map"),e(a,s)}});var M=l(E,2);i(M,{children:(a,h)=>{var s=t(),n=r(s);o(n,()=>"length"),e(a,s)}}),m(),v(S);var O=l(S);b(O,{code:`length (map f (x :: xs))
= length (f x :: map f xs)
= 1 + length (map f xs)
= 1 + length xs
`,language:"ocaml",children:(a,h)=>{var s=t(),n=r(s);o(n,()=>`length (map f (x :: xs))
= length (f x :: map f xs)
= <span class="hljs-number">1</span> + length (map f xs)
= <span class="hljs-number">1</span> + length xs
`),e(a,s)},$$slots:{default:!0}});var N=l(O,2);b(N,{code:`length (x :: xs)
= 1 + length xs
`,language:"ocaml",children:(a,h)=>{var s=t(),n=r(s);o(n,()=>`length (x :: xs)
= <span class="hljs-number">1</span> + length xs
`),e(a,s)},$$slots:{default:!0}}),v(A),v(j);var T=l(j),W=l(_(T));i(W,{children:(a,h)=>{var s=t(),n=r(s);o(n,()=>"length (map f l) = length l"),e(a,s)}});var z=l(W,2);i(z,{children:(a,h)=>{var s=t(),n=r(s);o(n,()=>"l : 'a list"),e(a,s)}});var Q=l(z,2);i(Q,{children:(a,h)=>{var s=t(),n=r(s);o(n,()=>"f : 'a -> 'b"),e(a,s)}}),m(),v(T),e(P,u)},$$slots:{default:!0}}),e(D,L)}export{rs as default};
