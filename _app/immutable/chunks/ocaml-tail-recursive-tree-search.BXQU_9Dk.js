import{c as r,a as e,t as N}from"./disclose-version.QN4v9ZJS.js";import{f as l,s as o,c as x,n as y,r as P}from"./runtime.DTVI1pbe.js";import{h as p}from"./Seo.DcyQTGA3.js";import{S as T}from"./Statement.Dmx7_aq_.js";import{C as c,a as S}from"./CodeBlock.Dhboelmj.js";import{S as A}from"./Solution.CUqdMwnj.js";var B=N(`<p>Implement a function <!> such that <!> traverses <!> in depth-first order and returns <!> if <!> is an element of <!> that satisfies <!>.
If no such value is found, then <!> returns <!>.
Use the following definition for the type <!>, and make sure <!> is tail-recursive.</p><!>`,1),R=N(`<p>A naive implementation of the <!> function would be as follows:</p><!><p>Recursive calls to <!> occur in the call to <!>, which means that the function is not tail-recursive.
To resolve this, we need to use continuation-passing style, and implement our own version of <!>.</p><p>We introduce the mutually tail-recursive helper functions <!> and <!> that respectively search for the value in a tree and in a list of trees.</p><!><p>The use of the continuation-passing style replaces stack memory allocations with heap memory allocations, both of which scaling with respect to the input tree's height.</p>`,1),U=N("<!> <!>",1);function J(L){var E=U(),F=l(E);T(F,{children:(O,I)=>{var u=B(),h=l(u),g=o(x(h));c(g,{children:(s,n)=>{var a=r(),t=l(a);p(t,()=>"find : ('a -> bool) -> 'a tree -> 'a option"),e(s,a)},$$slots:{default:!0}});var m=o(g,2);c(m,{children:(s,n)=>{var a=r(),t=l(a);p(t,()=>"find p t"),e(s,a)},$$slots:{default:!0}});var f=o(m,2);c(f,{children:(s,n)=>{var a=r(),t=l(a);p(t,()=>"t"),e(s,a)},$$slots:{default:!0}});var $=o(f,2);c($,{children:(s,n)=>{var a=r(),t=l(a);p(t,()=>"Option.Some x"),e(s,a)},$$slots:{default:!0}});var v=o($,2);c(v,{children:(s,n)=>{var a=r(),t=l(a);p(t,()=>"x"),e(s,a)},$$slots:{default:!0}});var b=o(v,2);c(b,{children:(s,n)=>{var a=r(),t=l(a);p(t,()=>"t"),e(s,a)},$$slots:{default:!0}});var _=o(b,2);c(_,{children:(s,n)=>{var a=r(),t=l(a);p(t,()=>"p"),e(s,a)},$$slots:{default:!0}});var j=o(_,2);c(j,{children:(s,n)=>{var a=r(),t=l(a);p(t,()=>"find p t"),e(s,a)},$$slots:{default:!0}});var w=o(j,2);c(w,{children:(s,n)=>{var a=r(),t=l(a);p(t,()=>"Option.None"),e(s,a)},$$slots:{default:!0}});var k=o(w,2);c(k,{children:(s,n)=>{var a=r(),t=l(a);p(t,()=>"'a tree"),e(s,a)},$$slots:{default:!0}});var i=o(k,2);c(i,{children:(s,n)=>{var a=r(),t=l(a);p(t,()=>"find"),e(s,a)},$$slots:{default:!0}}),y(),P(h);var d=o(h);S(d,{code:`type 'a tree =
  | Empty
  | Node of {
    contents : 'a;
    children : 'a tree list
  }
`,language:"ocaml",children:(s,n)=>{var a=r(),t=l(a);p(t,()=>`<span class="hljs-keyword">type</span> <span class="hljs-symbol">&#x27;a</span> tree =
  | <span class="hljs-type">Empty</span>
  | <span class="hljs-type">Node</span> <span class="hljs-keyword">of</span> {
    contents : <span class="hljs-symbol">&#x27;a</span>;
    children : <span class="hljs-symbol">&#x27;a</span> tree <span class="hljs-built_in">list</span>
  }
`),e(s,a)},$$slots:{default:!0}}),e(O,u)},$$slots:{default:!0}});var C=o(F,2);A(C,{children:(O,I)=>{var u=R(),h=l(u),g=o(x(h));c(g,{children:(i,d)=>{var s=r(),n=l(s);p(n,()=>"find"),e(i,s)},$$slots:{default:!0}}),y(),P(h);var m=o(h);S(m,{code:`let rec find : ('a -> bool) -> 'a tree -> 'a option =
  fun p t ->
    match t with
    | Empty -> Option.none
    | Node { contents; children } ->
        if p contents then
          Option.some contents
        else
          List.find_opt (find p) children
`,language:"ocaml",children:(i,d)=>{var s=r(),n=l(s);p(n,()=>`<span class="hljs-keyword">let</span> <span class="hljs-keyword">rec</span> find : (<span class="hljs-symbol">&#x27;a</span> -&gt; <span class="hljs-built_in">bool</span>) -&gt; <span class="hljs-symbol">&#x27;a</span> tree -&gt; <span class="hljs-symbol">&#x27;a</span> option =
  <span class="hljs-keyword">fun</span> p t -&gt;
    <span class="hljs-keyword">match</span> t <span class="hljs-keyword">with</span>
    | <span class="hljs-type">Empty</span> -&gt; <span class="hljs-type">Option</span>.none
    | <span class="hljs-type">Node</span> { contents; children } -&gt;
        <span class="hljs-keyword">if</span> p contents <span class="hljs-keyword">then</span>
          <span class="hljs-type">Option</span>.some contents
        <span class="hljs-keyword">else</span>
          <span class="hljs-type">List</span>.find_opt (find p) children
`),e(i,s)},$$slots:{default:!0}});var f=o(m),$=o(x(f));c($,{children:(i,d)=>{var s=r(),n=l(s);p(n,()=>"find"),e(i,s)},$$slots:{default:!0}});var v=o($,2);c(v,{children:(i,d)=>{var s=r(),n=l(s);p(n,()=>"List.find_opt"),e(i,s)},$$slots:{default:!0}});var b=o(v,2);c(b,{children:(i,d)=>{var s=r(),n=l(s);p(n,()=>"List.find_opt"),e(i,s)},$$slots:{default:!0}}),y(),P(f);var _=o(f),j=o(x(_));c(j,{children:(i,d)=>{var s=r(),n=l(s);p(n,()=>"find_in_tree_tl"),e(i,s)},$$slots:{default:!0}});var w=o(j,2);c(w,{children:(i,d)=>{var s=r(),n=l(s);p(n,()=>"find_in_tree_list_tl"),e(i,s)},$$slots:{default:!0}}),y(),P(_);var k=o(_);S(k,{code:`let rec find_in_tree_tl :
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
`,language:"ocaml",children:(i,d)=>{var s=r(),n=l(s);p(n,()=>`<span class="hljs-keyword">let</span> <span class="hljs-keyword">rec</span> find_in_tree_tl :
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
`),e(i,s)},$$slots:{default:!0}}),y(),e(O,u)},$$slots:{default:!0}}),e(L,E)}export{J as default};
