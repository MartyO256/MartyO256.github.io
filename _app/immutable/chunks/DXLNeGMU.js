import{t as N,c as r,a as t}from"./BBlrOt-4.js";import{f as l,s as o,c as x,n as g,r as P}from"./lpCv0clr.js";import{h as p}from"./DmaXUcs0.js";import{S as T}from"./t-Wps_5z.js";import{C as c,a as S}from"./Db6E_WMG.js";import{S as A}from"./CeqhcXsd.js";var B=N(`<p>Implement a function <!> such that <!> traverses <!> in depth-first order and returns <!> if <!> is an element of <!> that satisfies <!>.
If no such value is found, then <!> returns <!>.
Use the following definition for the type <!>, and make sure <!> is tail-recursive.</p><!>`,1),R=N(`<p>A naive implementation of the <!> function would be as follows:</p><!><p>Recursive calls to <!> occur in the call to <!>, which means that the function is not tail-recursive.
To resolve this, we need to use continuation-passing style, and implement our own version of <!>.</p><p>We introduce the mutually tail-recursive helper functions <!> and <!> that respectively search for the value in a tree and in a list of trees.</p><!><p>The use of the continuation-passing style replaces stack memory allocations with heap memory allocations, both of which scaling with respect to the input tree's height.</p>`,1),U=N("<!> <!>",1);function J(L){var E=U(),F=l(E);T(F,{children:(O,I)=>{var m=B(),h=l(m),b=o(x(h));c(b,{children:(s,a)=>{var n=r(),e=l(n);p(e,()=>"find : ('a -> bool) -> 'a tree -> 'a option"),t(s,n)}});var u=o(b,2);c(u,{children:(s,a)=>{var n=r(),e=l(n);p(e,()=>"find p t"),t(s,n)}});var _=o(u,2);c(_,{children:(s,a)=>{var n=r(),e=l(n);p(e,()=>"t"),t(s,n)}});var v=o(_,2);c(v,{children:(s,a)=>{var n=r(),e=l(n);p(e,()=>"Option.Some x"),t(s,n)}});var j=o(v,2);c(j,{children:(s,a)=>{var n=r(),e=l(n);p(e,()=>"x"),t(s,n)}});var $=o(j,2);c($,{children:(s,a)=>{var n=r(),e=l(n);p(e,()=>"t"),t(s,n)}});var f=o($,2);c(f,{children:(s,a)=>{var n=r(),e=l(n);p(e,()=>"p"),t(s,n)}});var y=o(f,2);c(y,{children:(s,a)=>{var n=r(),e=l(n);p(e,()=>"find p t"),t(s,n)}});var w=o(y,2);c(w,{children:(s,a)=>{var n=r(),e=l(n);p(e,()=>"Option.None"),t(s,n)}});var k=o(w,2);c(k,{children:(s,a)=>{var n=r(),e=l(n);p(e,()=>"'a tree"),t(s,n)}});var i=o(k,2);c(i,{children:(s,a)=>{var n=r(),e=l(n);p(e,()=>"find"),t(s,n)}}),g(),P(h);var d=o(h);S(d,{code:`type 'a tree =
  | Empty
  | Node of {
    contents : 'a;
    children : 'a tree list
  }
`,language:"ocaml",children:(s,a)=>{var n=r(),e=l(n);p(e,()=>`<span class="hljs-keyword">type</span> <span class="hljs-symbol">&#x27;a</span> tree =
  | <span class="hljs-type">Empty</span>
  | <span class="hljs-type">Node</span> <span class="hljs-keyword">of</span> {
    contents : <span class="hljs-symbol">&#x27;a</span>;
    children : <span class="hljs-symbol">&#x27;a</span> tree <span class="hljs-built_in">list</span>
  }
`),t(s,n)},$$slots:{default:!0}}),t(O,m)}});var C=o(F,2);A(C,{children:(O,I)=>{var m=R(),h=l(m),b=o(x(h));c(b,{children:(i,d)=>{var s=r(),a=l(s);p(a,()=>"find"),t(i,s)}}),g(),P(h);var u=o(h);S(u,{code:`let rec find : ('a -> bool) -> 'a tree -> 'a option =
  fun p t ->
    match t with
    | Empty -> Option.none
    | Node { contents; children } ->
        if p contents then
          Option.some contents
        else
          List.find_opt (find p) children
`,language:"ocaml",children:(i,d)=>{var s=r(),a=l(s);p(a,()=>`<span class="hljs-keyword">let</span> <span class="hljs-keyword">rec</span> find : (<span class="hljs-symbol">&#x27;a</span> -&gt; <span class="hljs-built_in">bool</span>) -&gt; <span class="hljs-symbol">&#x27;a</span> tree -&gt; <span class="hljs-symbol">&#x27;a</span> option =
  <span class="hljs-keyword">fun</span> p t -&gt;
    <span class="hljs-keyword">match</span> t <span class="hljs-keyword">with</span>
    | <span class="hljs-type">Empty</span> -&gt; <span class="hljs-type">Option</span>.none
    | <span class="hljs-type">Node</span> { contents; children } -&gt;
        <span class="hljs-keyword">if</span> p contents <span class="hljs-keyword">then</span>
          <span class="hljs-type">Option</span>.some contents
        <span class="hljs-keyword">else</span>
          <span class="hljs-type">List</span>.find_opt (find p) children
`),t(i,s)},$$slots:{default:!0}});var _=o(u),v=o(x(_));c(v,{children:(i,d)=>{var s=r(),a=l(s);p(a,()=>"find"),t(i,s)}});var j=o(v,2);c(j,{children:(i,d)=>{var s=r(),a=l(s);p(a,()=>"List.find_opt"),t(i,s)}});var $=o(j,2);c($,{children:(i,d)=>{var s=r(),a=l(s);p(a,()=>"List.find_opt"),t(i,s)}}),g(),P(_);var f=o(_),y=o(x(f));c(y,{children:(i,d)=>{var s=r(),a=l(s);p(a,()=>"find_in_tree_tl"),t(i,s)}});var w=o(y,2);c(w,{children:(i,d)=>{var s=r(),a=l(s);p(a,()=>"find_in_tree_list_tl"),t(i,s)}}),g(),P(f);var k=o(f);S(k,{code:`let rec find_in_tree_tl :
    ('a -> bool) -> 'a tree ->
    (* Success continuation *) ('a -> 'b) ->
    (* Failure continuation *) (unit -> 'b) ->
    'b =
  fun p t succeed fail ->
    match t with
    | Empty -> fail ()
    | Node { contents; children } ->
        if p contents then
          succeed contents
        else
          find_in_tree_list_tl p children fail succeed

and find_in_tree_list_tl :
    ('a -> bool) -> 'a tree list ->
    (* Success continuation *) ('a -> 'b) ->
    (* Failure continuation *) (unit -> 'b) ->
    'b =
  fun p ts succeed fail ->
    match ts with
    | [] -> fail ()
    | t :: rest ->
        find_in_tree_tl p t
          succeed
          (fun () -> find_in_tree_list_tl p rest succeed fail)

let rec find : ('a -> bool) -> 'a tree -> 'a option =
  fun p t ->
    find_in_tree_tl p t
      (fun x -> Option.some x)
      (fun () -> Option.none)
`,language:"ocaml",children:(i,d)=>{var s=r(),a=l(s);p(a,()=>`<span class="hljs-keyword">let</span> <span class="hljs-keyword">rec</span> find_in_tree_tl :
    (<span class="hljs-symbol">&#x27;a</span> -&gt; <span class="hljs-built_in">bool</span>) -&gt; <span class="hljs-symbol">&#x27;a</span> tree -&gt;
    <span class="hljs-comment">(* Success continuation *)</span> (<span class="hljs-symbol">&#x27;a</span> -&gt; <span class="hljs-symbol">&#x27;b</span>) -&gt;
    <span class="hljs-comment">(* Failure continuation *)</span> (<span class="hljs-built_in">unit</span> -&gt; <span class="hljs-symbol">&#x27;b</span>) -&gt;
    <span class="hljs-symbol">&#x27;b</span> =
  <span class="hljs-keyword">fun</span> p t succeed fail -&gt;
    <span class="hljs-keyword">match</span> t <span class="hljs-keyword">with</span>
    | <span class="hljs-type">Empty</span> -&gt; fail <span class="hljs-literal">()</span>
    | <span class="hljs-type">Node</span> { contents; children } -&gt;
        <span class="hljs-keyword">if</span> p contents <span class="hljs-keyword">then</span>
          succeed contents
        <span class="hljs-keyword">else</span>
          find_in_tree_list_tl p children fail succeed

<span class="hljs-keyword">and</span> find_in_tree_list_tl :
    (<span class="hljs-symbol">&#x27;a</span> -&gt; <span class="hljs-built_in">bool</span>) -&gt; <span class="hljs-symbol">&#x27;a</span> tree <span class="hljs-built_in">list</span> -&gt;
    <span class="hljs-comment">(* Success continuation *)</span> (<span class="hljs-symbol">&#x27;a</span> -&gt; <span class="hljs-symbol">&#x27;b</span>) -&gt;
    <span class="hljs-comment">(* Failure continuation *)</span> (<span class="hljs-built_in">unit</span> -&gt; <span class="hljs-symbol">&#x27;b</span>) -&gt;
    <span class="hljs-symbol">&#x27;b</span> =
  <span class="hljs-keyword">fun</span> p ts succeed fail -&gt;
    <span class="hljs-keyword">match</span> ts <span class="hljs-keyword">with</span>
    | <span class="hljs-literal">[]</span> -&gt; fail <span class="hljs-literal">()</span>
    | t :: rest -&gt;
        find_in_tree_tl p t
          succeed
          (<span class="hljs-keyword">fun</span> <span class="hljs-literal">()</span> -&gt; find_in_tree_list_tl p rest succeed fail)

<span class="hljs-keyword">let</span> <span class="hljs-keyword">rec</span> find : (<span class="hljs-symbol">&#x27;a</span> -&gt; <span class="hljs-built_in">bool</span>) -&gt; <span class="hljs-symbol">&#x27;a</span> tree -&gt; <span class="hljs-symbol">&#x27;a</span> option =
  <span class="hljs-keyword">fun</span> p t -&gt;
    find_in_tree_tl p t
      (<span class="hljs-keyword">fun</span> x -&gt; <span class="hljs-type">Option</span>.some x)
      (<span class="hljs-keyword">fun</span> <span class="hljs-literal">()</span> -&gt; <span class="hljs-type">Option</span>.none)
`),t(i,s)},$$slots:{default:!0}}),g(),t(O,m)},$$slots:{default:!0}}),t(L,E)}export{J as default};
