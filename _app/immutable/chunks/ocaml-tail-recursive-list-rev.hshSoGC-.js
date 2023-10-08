import{c as n,a as t,t as y}from"./disclose-version.QN4v9ZJS.js";import{f as l,s as r,c as m,n as g,r as x}from"./runtime.DTVI1pbe.js";import{h as o}from"./Seo.DcyQTGA3.js";import{S as W}from"./Statement.Dmx7_aq_.js";import{C as i,a as q}from"./CodeBlock.Dhboelmj.js";import{S as z}from"./Solution.CUqdMwnj.js";var A=y(`<p>Implement the function <!> such that <!> is <!>.
Make sure that the function is tail-recursive so that large input lists are supported.</p>`),D=y(`<p>The function to implement is <!> from the standard library.
We proceed recursively based on how the list is constructed.</p><p>If we attempt this problem naively, in the case where the list matches the pattern <!>, we would recursively reverse <!>, and then append <!> to it.
However, since lists in OCaml are built like stacks, this append operation has linear time complexity with respect to the list length.</p><p>Instead, we first define a tail-recursive helper function <!> such that <!> is the reverse of <!> prepended onto <!>.
Here, <!> is effectively an accumulator for the result of reversing the input list.
To implement <!> using <!>, we then use the empty list as initial value for the accumulator.</p><!>`,1),E=y("<!> <!>",1);function R(O){var w=E(),P=l(w);W(P,{children:(j,B)=>{var h=A(),u=r(m(h));i(u,{children:(v,$)=>{var d=n(),c=l(d);o(c,()=>"rev : 'a list -> 'a list"),t(v,d)},$$slots:{default:!0}});var f=r(u,2);i(f,{children:(v,$)=>{var d=n(),c=l(d);o(c,()=>"rev [x1; x2; ...; xn]"),t(v,d)},$$slots:{default:!0}});var _=r(f,2);i(_,{children:(v,$)=>{var d=n(),c=l(d);o(c,()=>"[xn; ...; x2; x1]"),t(v,d)},$$slots:{default:!0}}),g(),x(h),t(j,h)},$$slots:{default:!0}});var T=r(P,2);z(T,{children:(j,B)=>{var h=D(),u=l(h),f=r(m(u));i(f,{children:(e,p)=>{var s=n(),a=l(s);o(a,()=>"List.rev"),t(e,s)},$$slots:{default:!0}}),g(),x(u);var _=r(u),v=r(m(_));i(v,{children:(e,p)=>{var s=n(),a=l(s);o(a,()=>"x :: xs"),t(e,s)},$$slots:{default:!0}});var $=r(v,2);i($,{children:(e,p)=>{var s=n(),a=l(s);o(a,()=>"xs"),t(e,s)},$$slots:{default:!0}});var d=r($,2);i(d,{children:(e,p)=>{var s=n(),a=l(s);o(a,()=>"x"),t(e,s)},$$slots:{default:!0}}),g(),x(_);var c=r(_),b=r(m(c));i(b,{children:(e,p)=>{var s=n(),a=l(s);o(a,()=>"rev_tl : 'a list -> 'a list -> 'a list"),t(e,s)},$$slots:{default:!0}});var k=r(b,2);i(k,{children:(e,p)=>{var s=n(),a=l(s);o(a,()=>"rev_tl l1 l2"),t(e,s)},$$slots:{default:!0}});var C=r(k,2);i(C,{children:(e,p)=>{var s=n(),a=l(s);o(a,()=>"l1"),t(e,s)},$$slots:{default:!0}});var S=r(C,2);i(S,{children:(e,p)=>{var s=n(),a=l(s);o(a,()=>"l2"),t(e,s)},$$slots:{default:!0}});var I=r(S,2);i(I,{children:(e,p)=>{var s=n(),a=l(s);o(a,()=>"l2"),t(e,s)},$$slots:{default:!0}});var H=r(I,2);i(H,{children:(e,p)=>{var s=n(),a=l(s);o(a,()=>"rev"),t(e,s)},$$slots:{default:!0}});var L=r(H,2);i(L,{children:(e,p)=>{var s=n(),a=l(s);o(a,()=>"rev_tl"),t(e,s)},$$slots:{default:!0}}),g(),x(c);var M=r(c);q(M,{code:`let rec rev_tl : 'a list -> 'a list -> 'a list =
  fun l acc ->
    match l with
    | [] -> acc
    | x :: xs -> rev_tl xs (x :: acc)

let rev : 'a list -> 'a list =
  fun l ->
    rev_tl l []
`,language:"ocaml",children:(e,p)=>{var s=n(),a=l(s);o(a,()=>`<span class="hljs-keyword">let</span> <span class="hljs-keyword">rec</span> rev_tl : <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span> -&gt; <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span> -&gt; <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span> =
  <span class="hljs-keyword">fun</span> l acc -&gt;
    <span class="hljs-keyword">match</span> l <span class="hljs-keyword">with</span>
    | <span class="hljs-literal">[]</span> -&gt; acc
    | x :: xs -&gt; rev_tl xs (x :: acc)

<span class="hljs-keyword">let</span> rev : <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span> -&gt; <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span> =
  <span class="hljs-keyword">fun</span> l -&gt;
    rev_tl l <span class="hljs-literal">[]</span>
`),t(e,s)},$$slots:{default:!0}}),t(j,h)},$$slots:{default:!0}}),t(O,w)}export{R as default};
