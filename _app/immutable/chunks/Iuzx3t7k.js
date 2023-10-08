import{t as P,c,a}from"./BBlrOt-4.js";import{f as t,s as l,c as x,n as w,r as y}from"./lpCv0clr.js";import{h as i}from"./DmaXUcs0.js";import{S as W}from"./t-Wps_5z.js";import{C as p,a as A}from"./Db6E_WMG.js";import{S as B}from"./CeqhcXsd.js";var I=P("<p>In OCaml, implement a tail-recursive function <!> such that <!> is <!> if and only if the brackets <!>, <!> and <!> are paired up properly in <!>.</p>"),q=P(`<p>To solve this problem, we need to traverse the input string and check whether each opening and closing bracket is valid.
When an opening bracket <!>, <!> or <!> is encountered, it must be closed by <!>, <!> and <!> respectively.
That is, whenever a closing bracket is encountered, it must have been preceeded by the corresponding opening bracket.</p><p>The string traversal is handled using an index <!> ranging from <!> to <!>.
A stack of characters is leveraged to keep track of the opening brackets encountered, in first in, first out order.
When a closing bracket is encountered, this stack can be peeked at to check if the latest opening bracket is indeed the correct one.
Once the input string is fully traversed, we need to ensure that there are no leftover opening brackets in the stack.</p><!>`,1),z=P("<!> <!>",1);function M(E){var S=z(),T=t(S);W(T,{children:(j,O)=>{var g=I(),v=l(x(g));p(v,{children:(o,d)=>{var n=c(),h=t(n);i(h,()=>"check_brackets : string -> bool"),a(o,n)}});var b=l(v,2);p(b,{children:(o,d)=>{var n=c(),h=t(n);i(h,()=>"check_brackets s"),a(o,n)}});var m=l(b,2);p(m,{children:(o,d)=>{var n=c(),h=t(n);i(h,()=>"true"),a(o,n)}});var u=l(m,2);p(u,{children:(o,d)=>{var n=c(),h=t(n);i(h,()=>"()"),a(o,n)}});var f=l(u,2);p(f,{children:(o,d)=>{var n=c(),h=t(n);i(h,()=>"{}"),a(o,n)}});var k=l(f,2);p(k,{children:(o,d)=>{var n=c(),h=t(n);i(h,()=>"[]"),a(o,n)}});var $=l(k,2);p($,{children:(o,d)=>{var n=c(),h=t(n);i(h,()=>"s"),a(o,n)}}),w(),y(g),a(j,g)}});var C=l(T,2);B(C,{children:(j,O)=>{var g=q(),v=t(g),b=l(x(v));p(b,{children:(e,_)=>{var s=c(),r=t(s);i(r,()=>"("),a(e,s)}});var m=l(b,2);p(m,{children:(e,_)=>{var s=c(),r=t(s);i(r,()=>"{"),a(e,s)}});var u=l(m,2);p(u,{children:(e,_)=>{var s=c(),r=t(s);i(r,()=>"["),a(e,s)}});var f=l(u,2);p(f,{children:(e,_)=>{var s=c(),r=t(s);i(r,()=>")"),a(e,s)}});var k=l(f,2);p(k,{children:(e,_)=>{var s=c(),r=t(s);i(r,()=>"}"),a(e,s)}});var $=l(k,2);p($,{children:(e,_)=>{var s=c(),r=t(s);i(r,()=>"]"),a(e,s)}}),w(),y(v);var o=l(v),d=l(x(o));p(d,{children:(e,_)=>{var s=c(),r=t(s);i(r,()=>"i"),a(e,s)}});var n=l(d,2);p(n,{children:(e,_)=>{var s=c(),r=t(s);i(r,()=>"0"),a(e,s)}});var h=l(n,2);p(h,{children:(e,_)=>{var s=c(),r=t(s);i(r,()=>"String.length s"),a(e,s)}}),w(),y(o);var F=l(o);A(F,{code:`let check_brackets : string -> bool =
  let rec aux : string -> int -> int -> char list -> bool =
    fun s i n bs ->
      if i < n then
        match bs, s.[i] with
        | _, ('(' as b)
        | _, ('{' as b)
        | _, ('[' as b) ->
          (* Encountered a new opening bracket *)
          aux s (i + 1) n (b :: bs)
        | '(' :: bs', ')'
        | '{' :: bs', '}'
        | '[' :: bs', ']' ->
          (* Encountered a valid closing bracket *)
          aux s (i + 1) n bs'
        | _, ')'
        | _, '}'
        | _, ']' ->
          (* Encountered an invalid closing bracket *)
          false
        | _ ->
          (* Fallback to continuing the string traversal *)
          aux s (i + 1) n bs
      else
        match bs with
        | [] ->
          (* There are no leftover opening brackets *)
          true
        | _ :: _ ->
          (* There are leftover opening brackets *)
          false
  in
  fun s -> aux s 0 (String.length s) []
`,language:"ocaml",children:(e,_)=>{var s=c(),r=t(s);i(r,()=>`<span class="hljs-keyword">let</span> check_brackets : <span class="hljs-built_in">string</span> -&gt; <span class="hljs-built_in">bool</span> =
  <span class="hljs-keyword">let</span> <span class="hljs-keyword">rec</span> aux : <span class="hljs-built_in">string</span> -&gt; <span class="hljs-built_in">int</span> -&gt; <span class="hljs-built_in">int</span> -&gt; <span class="hljs-built_in">char</span> <span class="hljs-built_in">list</span> -&gt; <span class="hljs-built_in">bool</span> =
    <span class="hljs-keyword">fun</span> s i n bs -&gt;
      <span class="hljs-keyword">if</span> i &lt; n <span class="hljs-keyword">then</span>
        <span class="hljs-keyword">match</span> bs, s.[i] <span class="hljs-keyword">with</span>
        | _, (<span class="hljs-string">&#x27;(&#x27;</span> <span class="hljs-keyword">as</span> b)
        | _, (<span class="hljs-string">&#x27;{&#x27;</span> <span class="hljs-keyword">as</span> b)
        | _, (<span class="hljs-string">&#x27;[&#x27;</span> <span class="hljs-keyword">as</span> b) -&gt;
          <span class="hljs-comment">(* Encountered a new opening bracket *)</span>
          aux s (i + <span class="hljs-number">1</span>) n (b :: bs)
        | <span class="hljs-string">&#x27;(&#x27;</span> :: bs&#x27;, <span class="hljs-string">&#x27;)&#x27;</span>
        | <span class="hljs-string">&#x27;{&#x27;</span> :: bs&#x27;, <span class="hljs-string">&#x27;}&#x27;</span>
        | <span class="hljs-string">&#x27;[&#x27;</span> :: bs&#x27;, <span class="hljs-string">&#x27;]&#x27;</span> -&gt;
          <span class="hljs-comment">(* Encountered a valid closing bracket *)</span>
          aux s (i + <span class="hljs-number">1</span>) n bs&#x27;
        | _, <span class="hljs-string">&#x27;)&#x27;</span>
        | _, <span class="hljs-string">&#x27;}&#x27;</span>
        | _, <span class="hljs-string">&#x27;]&#x27;</span> -&gt;
          <span class="hljs-comment">(* Encountered an invalid closing bracket *)</span>
          <span class="hljs-literal">false</span>
        | _ -&gt;
          <span class="hljs-comment">(* Fallback to continuing the string traversal *)</span>
          aux s (i + <span class="hljs-number">1</span>) n bs
      <span class="hljs-keyword">else</span>
        <span class="hljs-keyword">match</span> bs <span class="hljs-keyword">with</span>
        | <span class="hljs-literal">[]</span> -&gt;
          <span class="hljs-comment">(* There are no leftover opening brackets *)</span>
          <span class="hljs-literal">true</span>
        | _ :: _ -&gt;
          <span class="hljs-comment">(* There are leftover opening brackets *)</span>
          <span class="hljs-literal">false</span>
  <span class="hljs-keyword">in</span>
  <span class="hljs-keyword">fun</span> s -&gt; aux s <span class="hljs-number">0</span> (<span class="hljs-type">String</span>.length s) <span class="hljs-literal">[]</span>
`),a(e,s)},$$slots:{default:!0}}),a(j,g)},$$slots:{default:!0}}),a(E,S)}export{M as default};
