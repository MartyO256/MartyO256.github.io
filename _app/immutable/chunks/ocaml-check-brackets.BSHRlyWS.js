import{c,a as n,t as P}from"./disclose-version.QN4v9ZJS.js";import{f as t,s as l,c as x,n as w,r as y}from"./runtime.DTVI1pbe.js";import{h as i}from"./Seo.DcyQTGA3.js";import{S as W}from"./Statement.Dmx7_aq_.js";import{C as p,a as A}from"./CodeBlock.Dhboelmj.js";import{S as B}from"./Solution.CUqdMwnj.js";var I=P("<p>In OCaml, implement a tail-recursive function <!> such that <!> is <!> if and only if the brackets <!>, <!> and <!> are paired up properly in <!>.</p>"),q=P(`<p>To solve this problem, we need to traverse the input string and check whether each opening and closing bracket is valid.
When an opening bracket <!>, <!> or <!> is encountered, it must be closed by <!>, <!> and <!> respectively.
That is, whenever a closing bracket is encountered, it must have been preceeded by the corresponding opening bracket.</p><p>The string traversal is handled using an index <!> ranging from <!> to <!>.
A stack of characters is leveraged to keep track of the opening brackets encountered, in first in, first out order.
When a closing bracket is encountered, this stack can be peeked at to check if the latest opening bracket is indeed the correct one.
Once the input string is fully traversed, we need to ensure that there are no leftover opening brackets in the stack.</p><!>`,1),z=P("<!> <!>",1);function M(E){var S=z(),T=t(S);W(T,{children:(k,O)=>{var _=I(),g=l(x(_));p(g,{children:(o,h)=>{var a=c(),d=t(a);i(d,()=>"check_brackets : string -> bool"),n(o,a)},$$slots:{default:!0}});var v=l(g,2);p(v,{children:(o,h)=>{var a=c(),d=t(a);i(d,()=>"check_brackets s"),n(o,a)},$$slots:{default:!0}});var b=l(v,2);p(b,{children:(o,h)=>{var a=c(),d=t(a);i(d,()=>"true"),n(o,a)},$$slots:{default:!0}});var $=l(b,2);p($,{children:(o,h)=>{var a=c(),d=t(a);i(d,()=>"()"),n(o,a)},$$slots:{default:!0}});var f=l($,2);p(f,{children:(o,h)=>{var a=c(),d=t(a);i(d,()=>"{}"),n(o,a)},$$slots:{default:!0}});var m=l(f,2);p(m,{children:(o,h)=>{var a=c(),d=t(a);i(d,()=>"[]"),n(o,a)},$$slots:{default:!0}});var j=l(m,2);p(j,{children:(o,h)=>{var a=c(),d=t(a);i(d,()=>"s"),n(o,a)},$$slots:{default:!0}}),w(),y(_),n(k,_)},$$slots:{default:!0}});var C=l(T,2);B(C,{children:(k,O)=>{var _=q(),g=t(_),v=l(x(g));p(v,{children:(e,u)=>{var s=c(),r=t(s);i(r,()=>"("),n(e,s)},$$slots:{default:!0}});var b=l(v,2);p(b,{children:(e,u)=>{var s=c(),r=t(s);i(r,()=>"{"),n(e,s)},$$slots:{default:!0}});var $=l(b,2);p($,{children:(e,u)=>{var s=c(),r=t(s);i(r,()=>"["),n(e,s)},$$slots:{default:!0}});var f=l($,2);p(f,{children:(e,u)=>{var s=c(),r=t(s);i(r,()=>")"),n(e,s)},$$slots:{default:!0}});var m=l(f,2);p(m,{children:(e,u)=>{var s=c(),r=t(s);i(r,()=>"}"),n(e,s)},$$slots:{default:!0}});var j=l(m,2);p(j,{children:(e,u)=>{var s=c(),r=t(s);i(r,()=>"]"),n(e,s)},$$slots:{default:!0}}),w(),y(g);var o=l(g),h=l(x(o));p(h,{children:(e,u)=>{var s=c(),r=t(s);i(r,()=>"i"),n(e,s)},$$slots:{default:!0}});var a=l(h,2);p(a,{children:(e,u)=>{var s=c(),r=t(s);i(r,()=>"0"),n(e,s)},$$slots:{default:!0}});var d=l(a,2);p(d,{children:(e,u)=>{var s=c(),r=t(s);i(r,()=>"String.length s"),n(e,s)},$$slots:{default:!0}}),w(),y(o);var F=l(o);A(F,{code:`let check_brackets : string -> bool =
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
`,language:"ocaml",children:(e,u)=>{var s=c(),r=t(s);i(r,()=>`<span class="hljs-keyword">let</span> check_brackets : <span class="hljs-built_in">string</span> -&gt; <span class="hljs-built_in">bool</span> =
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
`),n(e,s)},$$slots:{default:!0}}),n(k,_)},$$slots:{default:!0}}),n(E,S)}export{M as default};
