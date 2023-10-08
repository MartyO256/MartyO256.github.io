import{c as r,a as n,t as k}from"./disclose-version.QN4v9ZJS.js";import{f as l,s as e,c as g,n as x,r as j}from"./runtime.DTVI1pbe.js";import{h as o}from"./Seo.DcyQTGA3.js";import{S as K}from"./Statement.Dmx7_aq_.js";import{C as p,a as z}from"./CodeBlock.Dhboelmj.js";import{S as N}from"./Solution.CUqdMwnj.js";var Q=k(`<p>Implement the function <!> such that <!> is <!>.
Make sure that <!>, <!>, ..., <!> are computed in that order, and that the function is tail-recursive so that large input lists are supported.</p>`),R=k(`<p>The function to implement is <!> from the standard library.
We proceed recursively based on how the input list is constructed.
To ensure that calls to <!> are made following the order of the input list, in the case where <!>, we first compute <!> and then recursively compute <!>.</p><!><p>This previous implementation is not tail-recursive because the call to <!> in <!> does not occur in a tail position.
Indeed, we need to perform the computation <!> after the recursive call, so we need a new stack frame for <!>.
However, it is worth noting that this function is tail-recursive modulo cons.</p><p>To implement the function tail-recursively, we introduce a helper function <!> in continuation-passing style.
This helper function is such that <!> is <!>, with <!> being the continuation.
We'll use this continuation to perform that previous <!> continuation.</p><!><p>What we have done is effectively replace memory allocations from the stack to the heap by way of the continuation-passing style.
If <!> is the length of the input list, then we need <!> stack memory in the first implementation.
On the other hand, we need <!> heap memory to construct the continuation closures in the tail-recursive implementation.</p>`,1),U=k("<!> <!>",1);function ts(A){var T=U(),O=l(T);K(O,{children:(b,E)=>{var u=Q(),m=e(g(u));p(m,{children:(c,f)=>{var i=r(),h=l(i);o(h,()=>"map : ('a -> 'b) -> 'a list -> 'b list"),n(c,i)},$$slots:{default:!0}});var $=e(m,2);p($,{children:(c,f)=>{var i=r(),h=l(i);o(h,()=>"map f [x1; x2; ...; xn]"),n(c,i)},$$slots:{default:!0}});var _=e($,2);p(_,{children:(c,f)=>{var i=r(),h=l(i);o(h,()=>"[f x1; f x2; ...; f xn]"),n(c,i)},$$slots:{default:!0}});var v=e(_,2);p(v,{children:(c,f)=>{var i=r(),h=l(i);o(h,()=>"f x1"),n(c,i)},$$slots:{default:!0}});var y=e(v,2);p(y,{children:(c,f)=>{var i=r(),h=l(i);o(h,()=>"f x2"),n(c,i)},$$slots:{default:!0}});var w=e(y,2);p(w,{children:(c,f)=>{var i=r(),h=l(i);o(h,()=>"f xn"),n(c,i)},$$slots:{default:!0}}),x(),j(u),n(b,u)},$$slots:{default:!0}});var D=e(O,2);N(D,{children:(b,E)=>{var u=R(),m=l(u),$=e(g(m));p($,{children:(a,d)=>{var s=r(),t=l(s);o(t,()=>"List.map"),n(a,s)},$$slots:{default:!0}});var _=e($,2);p(_,{children:(a,d)=>{var s=r(),t=l(s);o(t,()=>"f"),n(a,s)},$$slots:{default:!0}});var v=e(_,2);p(v,{children:(a,d)=>{var s=r(),t=l(s);o(t,()=>"l = x :: xs"),n(a,s)},$$slots:{default:!0}});var y=e(v,2);p(y,{children:(a,d)=>{var s=r(),t=l(s);o(t,()=>"f x"),n(a,s)},$$slots:{default:!0}});var w=e(y,2);p(w,{children:(a,d)=>{var s=r(),t=l(s);o(t,()=>"map f xs"),n(a,s)},$$slots:{default:!0}}),x(),j(m);var c=e(m);z(c,{code:`let rec map : ('a -> 'b) -> 'a list -> 'b list =
  fun f l ->
    match l with
    | [] -> []
    | x :: xs ->
      let y = f x in
      let ys = map f xs in
      y :: ys
`,language:"ocaml",children:(a,d)=>{var s=r(),t=l(s);o(t,()=>`<span class="hljs-keyword">let</span> <span class="hljs-keyword">rec</span> map : (<span class="hljs-symbol">&#x27;a</span> -&gt; <span class="hljs-symbol">&#x27;b</span>) -&gt; <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span> -&gt; <span class="hljs-symbol">&#x27;b</span> <span class="hljs-built_in">list</span> =
  <span class="hljs-keyword">fun</span> f l -&gt;
    <span class="hljs-keyword">match</span> l <span class="hljs-keyword">with</span>
    | <span class="hljs-literal">[]</span> -&gt; <span class="hljs-literal">[]</span>
    | x :: xs -&gt;
      <span class="hljs-keyword">let</span> y = f x <span class="hljs-keyword">in</span>
      <span class="hljs-keyword">let</span> ys = map f xs <span class="hljs-keyword">in</span>
      y :: ys
`),n(a,s)},$$slots:{default:!0}});var f=e(c),i=e(g(f));p(i,{children:(a,d)=>{var s=r(),t=l(s);o(t,()=>"map"),n(a,s)},$$slots:{default:!0}});var h=e(i,2);p(h,{children:(a,d)=>{var s=r(),t=l(s);o(t,()=>"map f xs"),n(a,s)},$$slots:{default:!0}});var S=e(h,2);p(S,{children:(a,d)=>{var s=r(),t=l(s);o(t,()=>"y :: ys"),n(a,s)},$$slots:{default:!0}});var F=e(S,2);p(F,{children:(a,d)=>{var s=r(),t=l(s);o(t,()=>"map f xs"),n(a,s)},$$slots:{default:!0}}),x(),j(f);var P=e(f),C=e(g(P));p(C,{children:(a,d)=>{var s=r(),t=l(s);o(t,()=>"map_tl : ('a -> 'b) -> 'a list -> ('b list -> 'c) -> 'c"),n(a,s)},$$slots:{default:!0}});var I=e(C,2);p(I,{children:(a,d)=>{var s=r(),t=l(s);o(t,()=>"map_tl f [x1; x2; ...; xn] return"),n(a,s)},$$slots:{default:!0}});var W=e(I,2);p(W,{children:(a,d)=>{var s=r(),t=l(s);o(t,()=>"return [f x1; f x2; ...; f xn]"),n(a,s)},$$slots:{default:!0}});var B=e(W,2);p(B,{children:(a,d)=>{var s=r(),t=l(s);o(t,()=>"return : 'b list -> 'c"),n(a,s)},$$slots:{default:!0}});var G=e(B,2);p(G,{children:(a,d)=>{var s=r(),t=l(s);o(t,()=>"y :: ys"),n(a,s)},$$slots:{default:!0}}),x(),j(P);var H=e(P);z(H,{code:`let rec map_tl : ('a -> 'b) -> 'a list -> ('b list -> 'c) -> 'c =
  fun f l return ->
    match l with
    | [] -> return []
    | x :: xs ->
      let y = f x in
      map_tl f xs (fun ys -> return (y :: ys))

let map : ('a -> 'b) -> 'a list -> 'b list =
  fun f l -> map_tl f l (fun l' -> l')
`,language:"ocaml",children:(a,d)=>{var s=r(),t=l(s);o(t,()=>`<span class="hljs-keyword">let</span> <span class="hljs-keyword">rec</span> map_tl : (<span class="hljs-symbol">&#x27;a</span> -&gt; <span class="hljs-symbol">&#x27;b</span>) -&gt; <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span> -&gt; (<span class="hljs-symbol">&#x27;b</span> <span class="hljs-built_in">list</span> -&gt; <span class="hljs-symbol">&#x27;c</span>) -&gt; <span class="hljs-symbol">&#x27;c</span> =
  <span class="hljs-keyword">fun</span> f l return -&gt;
    <span class="hljs-keyword">match</span> l <span class="hljs-keyword">with</span>
    | <span class="hljs-literal">[]</span> -&gt; return <span class="hljs-literal">[]</span>
    | x :: xs -&gt;
      <span class="hljs-keyword">let</span> y = f x <span class="hljs-keyword">in</span>
      map_tl f xs (<span class="hljs-keyword">fun</span> ys -&gt; return (y :: ys))

<span class="hljs-keyword">let</span> map : (<span class="hljs-symbol">&#x27;a</span> -&gt; <span class="hljs-symbol">&#x27;b</span>) -&gt; <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span> -&gt; <span class="hljs-symbol">&#x27;b</span> <span class="hljs-built_in">list</span> =
  <span class="hljs-keyword">fun</span> f l -&gt; map_tl f l (<span class="hljs-keyword">fun</span> l&#x27; -&gt; l&#x27;)
`),n(a,s)},$$slots:{default:!0}});var L=e(H),M=e(g(L));p(M,{children:(a,d)=>{var s=r(),t=l(s);o(t,()=>"n"),n(a,s)},$$slots:{default:!0}});var q=e(M,2);p(q,{children:(a,d)=>{var s=r(),t=l(s);o(t,()=>"O(n)"),n(a,s)},$$slots:{default:!0}});var J=e(q,2);p(J,{children:(a,d)=>{var s=r(),t=l(s);o(t,()=>"O(n)"),n(a,s)},$$slots:{default:!0}}),x(),j(L),n(b,u)},$$slots:{default:!0}}),n(A,T)}export{ts as default};
