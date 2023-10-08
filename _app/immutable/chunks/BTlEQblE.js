import{t as q,c as r,a as n}from"./BBlrOt-4.js";import{f as t,s as l,c as y,n as w,r as b}from"./lpCv0clr.js";import{h as i}from"./DmaXUcs0.js";import{S as K}from"./t-Wps_5z.js";import{C as p,a as z}from"./Db6E_WMG.js";import{S as L}from"./CeqhcXsd.js";var M=q(`<p>Implement an OCaml function which, given a list <!> of items and a list <!> of indices <!> such that <!>, computes the result of deleting from <!> those values with indices in <!>.
The list <!> is sorted in ascending order of value and does not contain duplicates.</p>`),N=q(`<p>To solve this problem, we proceed by recursively traversing the structure of both input lists <!> and <!>.
We also need to keep track of the index <!> of the element in <!> we're currently visiting.
This is accomplished with the <!> helper function.</p><p>In the case where <!>, we have exhausted the indices list of elements to delete from <!>, so we simply return <!>.
If both lists <!> and <!> are non-empty, then we need to check whether the value of the topmost element <!> of <!> is the index of the topmost element <!> of <!>.</p><!><p>The recursive call to <!> in <!> is not a tail call.
We can fix this using continuation-passing style:</p><!>`,1),Q=q("<!> <!>",1);function ss(A){var F=Q(),C=t(F);K(C,{children:(k,E)=>{var u=M(),v=l(y(u));p(v,{children:(h,_)=>{var o=r(),c=t(o);i(c,()=>"l : 'a list"),n(h,o)}});var m=l(v,2);p(m,{children:(h,_)=>{var o=r(),c=t(o);i(c,()=>"r : int list"),n(h,o)}});var f=l(m,2);p(f,{children:(h,_)=>{var o=r(),c=t(o);i(c,()=>"i"),n(h,o)}});var j=l(f,2);p(j,{children:(h,_)=>{var o=r(),c=t(o);i(c,()=>"0 &lt;= i && i &lt; length l"),n(h,o)}});var g=l(j,2);p(g,{children:(h,_)=>{var o=r(),c=t(o);i(c,()=>"l"),n(h,o)}});var $=l(g,2);p($,{children:(h,_)=>{var o=r(),c=t(o);i(c,()=>"r"),n(h,o)}});var x=l($,2);p(x,{children:(h,_)=>{var o=r(),c=t(o);i(c,()=>"r"),n(h,o)}}),w(),b(u),n(k,u)}});var D=l(C,2);L(D,{children:(k,E)=>{var u=N(),v=t(u),m=l(y(v));p(m,{children:(a,d)=>{var s=r(),e=t(s);i(e,()=>"l"),n(a,s)}});var f=l(m,2);p(f,{children:(a,d)=>{var s=r(),e=t(s);i(e,()=>"r"),n(a,s)}});var j=l(f,2);p(j,{children:(a,d)=>{var s=r(),e=t(s);i(e,()=>"i"),n(a,s)}});var g=l(j,2);p(g,{children:(a,d)=>{var s=r(),e=t(s);i(e,()=>"l"),n(a,s)}});var $=l(g,2);p($,{children:(a,d)=>{var s=r(),e=t(s);i(e,()=>"delete_aux"),n(a,s)}}),w(),b(v);var x=l(v),h=l(y(x));p(h,{children:(a,d)=>{var s=r(),e=t(s);i(e,()=>"r = []"),n(a,s)}});var _=l(h,2);p(_,{children:(a,d)=>{var s=r(),e=t(s);i(e,()=>"l"),n(a,s)}});var o=l(_,2);p(o,{children:(a,d)=>{var s=r(),e=t(s);i(e,()=>"l"),n(a,s)}});var c=l(o,2);p(c,{children:(a,d)=>{var s=r(),e=t(s);i(e,()=>"l"),n(a,s)}});var S=l(c,2);p(S,{children:(a,d)=>{var s=r(),e=t(s);i(e,()=>"r"),n(a,s)}});var T=l(S,2);p(T,{children:(a,d)=>{var s=r(),e=t(s);i(e,()=>"d"),n(a,s)}});var I=l(T,2);p(I,{children:(a,d)=>{var s=r(),e=t(s);i(e,()=>"r"),n(a,s)}});var O=l(I,2);p(O,{children:(a,d)=>{var s=r(),e=t(s);i(e,()=>"x"),n(a,s)}});var G=l(O,2);p(G,{children:(a,d)=>{var s=r(),e=t(s);i(e,()=>"l"),n(a,s)}}),w(),b(x);var W=l(x);z(W,{code:`let delete : 'a list -> int list -> 'a list =
  let rec delete_aux : int -> 'a list -> int list -> 'a list =
    fun i l r ->
      match (l, r) with
      | l, [] -> l
      | x :: xs, d :: ds ->
          if i > d then
            raise (Failure "delete")
          else if i = d then
            delete_aux (i + 1) xs ds
          else
            x :: delete_aux (i + 1) xs r
      | _ -> raise (Failure "delete")
  in
  fun l r -> delete_aux 0 l r
`,language:"ocaml",children:(a,d)=>{var s=r(),e=t(s);i(e,()=>`<span class="hljs-keyword">let</span> delete : <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span> -&gt; <span class="hljs-built_in">int</span> <span class="hljs-built_in">list</span> -&gt; <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span> =
  <span class="hljs-keyword">let</span> <span class="hljs-keyword">rec</span> delete_aux : <span class="hljs-built_in">int</span> -&gt; <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span> -&gt; <span class="hljs-built_in">int</span> <span class="hljs-built_in">list</span> -&gt; <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span> =
    <span class="hljs-keyword">fun</span> i l r -&gt;
      <span class="hljs-keyword">match</span> (l, r) <span class="hljs-keyword">with</span>
      | l, <span class="hljs-literal">[]</span> -&gt; l
      | x :: xs, d :: ds -&gt;
          <span class="hljs-keyword">if</span> i &gt; d <span class="hljs-keyword">then</span>
            raise (<span class="hljs-type">Failure</span> <span class="hljs-string">&quot;delete&quot;</span>)
          <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> i = d <span class="hljs-keyword">then</span>
            delete_aux (i + <span class="hljs-number">1</span>) xs ds
          <span class="hljs-keyword">else</span>
            x :: delete_aux (i + <span class="hljs-number">1</span>) xs r
      | _ -&gt; raise (<span class="hljs-type">Failure</span> <span class="hljs-string">&quot;delete&quot;</span>)
  <span class="hljs-keyword">in</span>
  <span class="hljs-keyword">fun</span> l r -&gt; delete_aux <span class="hljs-number">0</span> l r
`),n(a,s)},$$slots:{default:!0}});var P=l(W),B=l(y(P));p(B,{children:(a,d)=>{var s=r(),e=t(s);i(e,()=>"delete_aux"),n(a,s)}});var H=l(B,2);p(H,{children:(a,d)=>{var s=r(),e=t(s);i(e,()=>"x :: delete_aux (i + 1) xs r"),n(a,s)}}),w(),b(P);var J=l(P);z(J,{code:`let delete : 'a list -> int list -> 'a list =
  let rec delete_aux : int -> 'a list -> int list -> ('a list -> 'b) -> 'b =
    fun i l r return ->
      match (l, r) with
      | l, [] -> return l
      | x :: xs, d :: ds ->
          if i > d then
            raise (Failure "delete")
          else if i = d then
            delete_aux (i + 1) xs ds return
          else
            delete_aux (i + 1) xs r (fun l' -> return (x :: l'))
      | _ -> raise (Failure "delete")
  in
  fun l r -> delete_aux 0 l r (fun l' -> l')
`,language:"ocaml",children:(a,d)=>{var s=r(),e=t(s);i(e,()=>`<span class="hljs-keyword">let</span> delete : <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span> -&gt; <span class="hljs-built_in">int</span> <span class="hljs-built_in">list</span> -&gt; <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span> =
  <span class="hljs-keyword">let</span> <span class="hljs-keyword">rec</span> delete_aux : <span class="hljs-built_in">int</span> -&gt; <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span> -&gt; <span class="hljs-built_in">int</span> <span class="hljs-built_in">list</span> -&gt; (<span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span> -&gt; <span class="hljs-symbol">&#x27;b</span>) -&gt; <span class="hljs-symbol">&#x27;b</span> =
    <span class="hljs-keyword">fun</span> i l r return -&gt;
      <span class="hljs-keyword">match</span> (l, r) <span class="hljs-keyword">with</span>
      | l, <span class="hljs-literal">[]</span> -&gt; return l
      | x :: xs, d :: ds -&gt;
          <span class="hljs-keyword">if</span> i &gt; d <span class="hljs-keyword">then</span>
            raise (<span class="hljs-type">Failure</span> <span class="hljs-string">&quot;delete&quot;</span>)
          <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> i = d <span class="hljs-keyword">then</span>
            delete_aux (i + <span class="hljs-number">1</span>) xs ds return
          <span class="hljs-keyword">else</span>
            delete_aux (i + <span class="hljs-number">1</span>) xs r (<span class="hljs-keyword">fun</span> l&#x27; -&gt; return (x :: l&#x27;))
      | _ -&gt; raise (<span class="hljs-type">Failure</span> <span class="hljs-string">&quot;delete&quot;</span>)
  <span class="hljs-keyword">in</span>
  <span class="hljs-keyword">fun</span> l r -&gt; delete_aux <span class="hljs-number">0</span> l r (<span class="hljs-keyword">fun</span> l&#x27; -&gt; l&#x27;)
`),n(a,s)},$$slots:{default:!0}}),n(k,u)},$$slots:{default:!0}}),n(A,F)}export{ss as default};
