import{t as C,c as t,a as e}from"./BBlrOt-4.js";import{f as r,s as l,c as _,n as m,r as v}from"./lpCv0clr.js";import{h as o}from"./DmaXUcs0.js";import{S as U}from"./t-Wps_5z.js";import{C as i,a as b}from"./Db6E_WMG.js";import{S as V}from"./CeqhcXsd.js";var W=C(`<p>Suppose que le type <!> est inductif.
Prouve que <!> pour toutes listes <!> et toutes fonctions totales <!>.</p><!>`,1),X=C("<p>Soient <!> une liste et <!> une fonction totale.</p><p>Nous procédons par le principe d'induction structurelle sur la liste <!>.</p><ul><li><p>Cas <!>:</p><p>Par définition de <!>:</p><!></li><li><p>Cas <!>:</p><p>Notre hypothèse d'induction est que <!>.</p><p>Par définition de <!> et <!>, et grâce à l'hypothèse d'induction:</p><!><p>Similairement:</p><!></li></ul><p>Par conséquent, <!> est vraie pour toutes listes <!> et fonctions totales <!>.</p>",1),Y=C("<!> <!>",1);function rs(H){var N=Y(),B=r(N);U(B,{children:(P,J)=>{var $=W(),g=r($),x=l(_(g));i(x,{children:(h,f)=>{var p=t(),c=r(p);o(c,()=>"'a list"),e(h,p)}});var y=l(x,2);i(y,{children:(h,f)=>{var p=t(),c=r(p);o(c,()=>"length (map f l) = length l"),e(h,p)}});var u=l(y,2);i(u,{children:(h,f)=>{var p=t(),c=r(p);o(c,()=>"l : 'a list"),e(h,p)}});var w=l(u,2);i(w,{children:(h,f)=>{var p=t(),c=r(p);o(c,()=>"f : 'a -> 'b"),e(h,p)}}),m(),v(g);var j=l(g);b(j,{code:`type 'a list =
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
`,language:"ocaml",children:(h,f)=>{var p=t(),c=r(p);o(c,()=>`<span class="hljs-keyword">type</span> <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span> =
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
`),e(h,p)},$$slots:{default:!0}}),e(P,$)}});var I=l(B,2);V(I,{children:(P,J)=>{var $=X(),g=r($),x=l(_(g));i(x,{children:(a,d)=>{var s=t(),n=r(s);o(n,()=>"l : 'a list"),e(a,s)}});var y=l(x,2);i(y,{children:(a,d)=>{var s=t(),n=r(s);o(n,()=>"f : 'a -> 'b"),e(a,s)}}),m(),v(g);var u=l(g),w=l(_(u));i(w,{children:(a,d)=>{var s=t(),n=r(s);o(n,()=>"l"),e(a,s)}}),m(),v(u);var j=l(u),h=_(j),f=_(h),p=l(_(f));i(p,{children:(a,d)=>{var s=t(),n=r(s);o(n,()=>"l = []"),e(a,s)}}),m(),v(f);var c=l(f),K=l(_(c));i(K,{children:(a,d)=>{var s=t(),n=r(s);o(n,()=>"map"),e(a,s)}}),m(),v(c);var L=l(c);b(L,{code:`length (map f [])
= length []
`,language:"ocaml",children:(a,d)=>{var s=t(),n=r(s);o(n,()=>`length (map f <span class="hljs-literal">[]</span>)
= length <span class="hljs-literal">[]</span>
`),e(a,s)},$$slots:{default:!0}}),v(h);var E=l(h),k=_(E),M=l(_(k));i(M,{children:(a,d)=>{var s=t(),n=r(s);o(n,()=>"l = x :: xs"),e(a,s)}}),m(),v(k);var S=l(k),O=l(_(S));i(O,{children:(a,d)=>{var s=t(),n=r(s);o(n,()=>"length (map f xs) = length xs"),e(a,s)}}),m(),v(S);var q=l(S),z=l(_(q));i(z,{children:(a,d)=>{var s=t(),n=r(s);o(n,()=>"map"),e(a,s)}});var Q=l(z,2);i(Q,{children:(a,d)=>{var s=t(),n=r(s);o(n,()=>"length"),e(a,s)}}),m(),v(q);var A=l(q);b(A,{code:`length (map f (x :: xs))
= length (f x :: map f xs)
= 1 + length (map f xs)
= 1 + length xs
`,language:"ocaml",children:(a,d)=>{var s=t(),n=r(s);o(n,()=>`length (map f (x :: xs))
= length (f x :: map f xs)
= <span class="hljs-number">1</span> + length (map f xs)
= <span class="hljs-number">1</span> + length xs
`),e(a,s)},$$slots:{default:!0}});var R=l(A,2);b(R,{code:`length (x :: xs)
= 1 + length xs
`,language:"ocaml",children:(a,d)=>{var s=t(),n=r(s);o(n,()=>`length (x :: xs)
= <span class="hljs-number">1</span> + length xs
`),e(a,s)},$$slots:{default:!0}}),v(E),v(j);var D=l(j),F=l(_(D));i(F,{children:(a,d)=>{var s=t(),n=r(s);o(n,()=>"length (map f l) = length l"),e(a,s)}});var G=l(F,2);i(G,{children:(a,d)=>{var s=t(),n=r(s);o(n,()=>"l : 'a list"),e(a,s)}});var T=l(G,2);i(T,{children:(a,d)=>{var s=t(),n=r(s);o(n,()=>"f : 'a -> 'b"),e(a,s)}}),m(),v(D),e(P,$)},$$slots:{default:!0}}),e(H,N)}export{rs as default};
