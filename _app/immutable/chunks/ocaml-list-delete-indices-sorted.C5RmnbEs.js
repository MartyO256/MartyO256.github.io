import{c as r,a as l,t as q}from"./disclose-version.QN4v9ZJS.js";import{f as t,s as n,c as y,n as w,r as b}from"./runtime.DTVI1pbe.js";import{h as o}from"./Seo.DcyQTGA3.js";import{S as K}from"./Statement.Dmx7_aq_.js";import{C as d,a as z}from"./CodeBlock.Dhboelmj.js";import{S as L}from"./Solution.CUqdMwnj.js";var M=q(`<p>Implement an OCaml function which, given a list <!> of items and a list <!> of indices <!> such that <!>, computes the result of deleting from <!> those values with indices in <!>.
The list <!> is sorted in ascending order of value and does not contain duplicates.</p>`),N=q(`<p>To solve this problem, we proceed by recursively traversing the structure of both input lists <!> and <!>.
We also need to keep track of the index <!> of the element in <!> we're currently visiting.
This is accomplished with the <!> helper function.</p><p>In the case where <!>, we have exhausted the indices list of elements to delete from <!>, so we simply return <!>.
If both lists <!> and <!> are non-empty, then we need to check whether the value of the topmost element <!> of <!> is the index of the topmost element <!> of <!>.</p><!><p>The recursive call to <!> in <!> is not a tail call.
We can fix this using continuation-passing style:</p><!>`,1),Q=q("<!> <!>",1);function ss(A){var F=Q(),C=t(F);K(C,{children:(k,E)=>{var _=M(),$=n(y(_));d($,{children:(u,c)=>{var i=r(),h=t(i);o(h,()=>"l : 'a list"),l(u,i)},$$slots:{default:!0}});var f=n($,2);d(f,{children:(u,c)=>{var i=r(),h=t(i);o(h,()=>"r : int list"),l(u,i)},$$slots:{default:!0}});var v=n(f,2);d(v,{children:(u,c)=>{var i=r(),h=t(i);o(h,()=>"i"),l(u,i)},$$slots:{default:!0}});var m=n(v,2);d(m,{children:(u,c)=>{var i=r(),h=t(i);o(h,()=>"0 &lt;= i && i &lt; length l"),l(u,i)},$$slots:{default:!0}});var j=n(m,2);d(j,{children:(u,c)=>{var i=r(),h=t(i);o(h,()=>"l"),l(u,i)},$$slots:{default:!0}});var x=n(j,2);d(x,{children:(u,c)=>{var i=r(),h=t(i);o(h,()=>"r"),l(u,i)},$$slots:{default:!0}});var g=n(x,2);d(g,{children:(u,c)=>{var i=r(),h=t(i);o(h,()=>"r"),l(u,i)},$$slots:{default:!0}}),w(),b(_),l(k,_)},$$slots:{default:!0}});var D=n(C,2);L(D,{children:(k,E)=>{var _=N(),$=t(_),f=n(y($));d(f,{children:(a,p)=>{var s=r(),e=t(s);o(e,()=>"l"),l(a,s)},$$slots:{default:!0}});var v=n(f,2);d(v,{children:(a,p)=>{var s=r(),e=t(s);o(e,()=>"r"),l(a,s)},$$slots:{default:!0}});var m=n(v,2);d(m,{children:(a,p)=>{var s=r(),e=t(s);o(e,()=>"i"),l(a,s)},$$slots:{default:!0}});var j=n(m,2);d(j,{children:(a,p)=>{var s=r(),e=t(s);o(e,()=>"l"),l(a,s)},$$slots:{default:!0}});var x=n(j,2);d(x,{children:(a,p)=>{var s=r(),e=t(s);o(e,()=>"delete_aux"),l(a,s)},$$slots:{default:!0}}),w(),b($);var g=n($),u=n(y(g));d(u,{children:(a,p)=>{var s=r(),e=t(s);o(e,()=>"r = []"),l(a,s)},$$slots:{default:!0}});var c=n(u,2);d(c,{children:(a,p)=>{var s=r(),e=t(s);o(e,()=>"l"),l(a,s)},$$slots:{default:!0}});var i=n(c,2);d(i,{children:(a,p)=>{var s=r(),e=t(s);o(e,()=>"l"),l(a,s)},$$slots:{default:!0}});var h=n(i,2);d(h,{children:(a,p)=>{var s=r(),e=t(s);o(e,()=>"l"),l(a,s)},$$slots:{default:!0}});var S=n(h,2);d(S,{children:(a,p)=>{var s=r(),e=t(s);o(e,()=>"r"),l(a,s)},$$slots:{default:!0}});var T=n(S,2);d(T,{children:(a,p)=>{var s=r(),e=t(s);o(e,()=>"d"),l(a,s)},$$slots:{default:!0}});var I=n(T,2);d(I,{children:(a,p)=>{var s=r(),e=t(s);o(e,()=>"r"),l(a,s)},$$slots:{default:!0}});var O=n(I,2);d(O,{children:(a,p)=>{var s=r(),e=t(s);o(e,()=>"x"),l(a,s)},$$slots:{default:!0}});var G=n(O,2);d(G,{children:(a,p)=>{var s=r(),e=t(s);o(e,()=>"l"),l(a,s)},$$slots:{default:!0}}),w(),b(g);var W=n(g);z(W,{code:`let delete : 'a list -> int list -> 'a list =
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
`,language:"ocaml",children:(a,p)=>{var s=r(),e=t(s);o(e,()=>`<span class="hljs-keyword">let</span> delete : <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span> -&gt; <span class="hljs-built_in">int</span> <span class="hljs-built_in">list</span> -&gt; <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span> =
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
`),l(a,s)},$$slots:{default:!0}});var P=n(W),B=n(y(P));d(B,{children:(a,p)=>{var s=r(),e=t(s);o(e,()=>"delete_aux"),l(a,s)},$$slots:{default:!0}});var H=n(B,2);d(H,{children:(a,p)=>{var s=r(),e=t(s);o(e,()=>"x :: delete_aux (i + 1) xs r"),l(a,s)},$$slots:{default:!0}}),w(),b(P);var J=n(P);z(J,{code:`let delete : 'a list -> int list -> 'a list =
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
`,language:"ocaml",children:(a,p)=>{var s=r(),e=t(s);o(e,()=>`<span class="hljs-keyword">let</span> delete : <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span> -&gt; <span class="hljs-built_in">int</span> <span class="hljs-built_in">list</span> -&gt; <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span> =
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
`),l(a,s)},$$slots:{default:!0}}),l(k,_)},$$slots:{default:!0}}),l(A,F)}export{ss as default};
