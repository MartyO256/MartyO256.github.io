import{c as r,a as e,t as C}from"./disclose-version.QN4v9ZJS.js";import{f as t,s as n,c as u,n as $,r as f}from"./runtime.DTVI1pbe.js";import{h as o}from"./Seo.DcyQTGA3.js";import{S as U}from"./Statement.Dmx7_aq_.js";import{C as d,a as b}from"./CodeBlock.Dhboelmj.js";import{S as V}from"./Solution.CUqdMwnj.js";var W=C(`<p>Suppose que le type <!> est inductif.
Prouve que <!> pour toutes listes <!> et toutes fonctions totales <!>.</p><!>`,1),X=C("<p>Soient <!> une liste et <!> une fonction totale.</p><p>Nous procédons par le principe d'induction structurelle sur la liste <!>.</p><ul><li><p>Cas <!>:</p><p>Par définition de <!>:</p><!></li><li><p>Cas <!>:</p><p>Notre hypothèse d'induction est que <!>.</p><p>Par définition de <!> et <!>, et grâce à l'hypothèse d'induction:</p><!><p>Similairement:</p><!></li></ul><p>Par conséquent, <!> est vraie pour toutes listes <!> et fonctions totales <!>.</p>",1),Y=C("<!> <!>",1);function ts(H){var N=Y(),B=t(N);U(B,{children:(P,J)=>{var g=W(),v=t(g),x=n(u(v));d(x,{children:(h,_)=>{var p=r(),c=t(p);o(c,()=>"'a list"),e(h,p)},$$slots:{default:!0}});var y=n(x,2);d(y,{children:(h,_)=>{var p=r(),c=t(p);o(c,()=>"length (map f l) = length l"),e(h,p)},$$slots:{default:!0}});var m=n(y,2);d(m,{children:(h,_)=>{var p=r(),c=t(p);o(c,()=>"l : 'a list"),e(h,p)},$$slots:{default:!0}});var w=n(m,2);d(w,{children:(h,_)=>{var p=r(),c=t(p);o(c,()=>"f : 'a -> 'b"),e(h,p)},$$slots:{default:!0}}),$(),f(v);var j=n(v);b(j,{code:`type 'a list =
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
`,language:"ocaml",children:(h,_)=>{var p=r(),c=t(p);o(c,()=>`<span class="hljs-keyword">type</span> <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span> =
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
`),e(h,p)},$$slots:{default:!0}}),e(P,g)},$$slots:{default:!0}});var I=n(B,2);V(I,{children:(P,J)=>{var g=X(),v=t(g),x=n(u(v));d(x,{children:(a,i)=>{var s=r(),l=t(s);o(l,()=>"l : 'a list"),e(a,s)},$$slots:{default:!0}});var y=n(x,2);d(y,{children:(a,i)=>{var s=r(),l=t(s);o(l,()=>"f : 'a -> 'b"),e(a,s)},$$slots:{default:!0}}),$(),f(v);var m=n(v),w=n(u(m));d(w,{children:(a,i)=>{var s=r(),l=t(s);o(l,()=>"l"),e(a,s)},$$slots:{default:!0}}),$(),f(m);var j=n(m),h=u(j),_=u(h),p=n(u(_));d(p,{children:(a,i)=>{var s=r(),l=t(s);o(l,()=>"l = []"),e(a,s)},$$slots:{default:!0}}),$(),f(_);var c=n(_),K=n(u(c));d(K,{children:(a,i)=>{var s=r(),l=t(s);o(l,()=>"map"),e(a,s)},$$slots:{default:!0}}),$(),f(c);var L=n(c);b(L,{code:`length (map f [])
= length []
`,language:"ocaml",children:(a,i)=>{var s=r(),l=t(s);o(l,()=>`length (map f <span class="hljs-literal">[]</span>)
= length <span class="hljs-literal">[]</span>
`),e(a,s)},$$slots:{default:!0}}),f(h);var E=n(h),k=u(E),M=n(u(k));d(M,{children:(a,i)=>{var s=r(),l=t(s);o(l,()=>"l = x :: xs"),e(a,s)},$$slots:{default:!0}}),$(),f(k);var S=n(k),O=n(u(S));d(O,{children:(a,i)=>{var s=r(),l=t(s);o(l,()=>"length (map f xs) = length xs"),e(a,s)},$$slots:{default:!0}}),$(),f(S);var q=n(S),z=n(u(q));d(z,{children:(a,i)=>{var s=r(),l=t(s);o(l,()=>"map"),e(a,s)},$$slots:{default:!0}});var Q=n(z,2);d(Q,{children:(a,i)=>{var s=r(),l=t(s);o(l,()=>"length"),e(a,s)},$$slots:{default:!0}}),$(),f(q);var A=n(q);b(A,{code:`length (map f (x :: xs))
= length (f x :: map f xs)
= 1 + length (map f xs)
= 1 + length xs
`,language:"ocaml",children:(a,i)=>{var s=r(),l=t(s);o(l,()=>`length (map f (x :: xs))
= length (f x :: map f xs)
= <span class="hljs-number">1</span> + length (map f xs)
= <span class="hljs-number">1</span> + length xs
`),e(a,s)},$$slots:{default:!0}});var R=n(A,2);b(R,{code:`length (x :: xs)
= 1 + length xs
`,language:"ocaml",children:(a,i)=>{var s=r(),l=t(s);o(l,()=>`length (x :: xs)
= <span class="hljs-number">1</span> + length xs
`),e(a,s)},$$slots:{default:!0}}),f(E),f(j);var D=n(j),F=n(u(D));d(F,{children:(a,i)=>{var s=r(),l=t(s);o(l,()=>"length (map f l) = length l"),e(a,s)},$$slots:{default:!0}});var G=n(F,2);d(G,{children:(a,i)=>{var s=r(),l=t(s);o(l,()=>"l : 'a list"),e(a,s)},$$slots:{default:!0}});var T=n(G,2);d(T,{children:(a,i)=>{var s=r(),l=t(s);o(l,()=>"f : 'a -> 'b"),e(a,s)},$$slots:{default:!0}}),$(),f(D),e(P,g)},$$slots:{default:!0}}),e(H,N)}export{ts as default};
