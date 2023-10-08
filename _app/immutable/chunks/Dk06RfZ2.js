import{t as y,c as n,a as r}from"./BBlrOt-4.js";import{f as l,s as t,c as $,n as g,r as x}from"./lpCv0clr.js";import{h as o}from"./DmaXUcs0.js";import{S as W}from"./t-Wps_5z.js";import{C as i,a as q}from"./Db6E_WMG.js";import{S as z}from"./CeqhcXsd.js";var A=y(`<p>Implement the function <!> such that <!> is <!>.
Make sure that the function is tail-recursive so that large input lists are supported.</p>`),D=y(`<p>The function to implement is <!> from the standard library.
We proceed recursively based on how the list is constructed.</p><p>If we attempt this problem naively, in the case where the list matches the pattern <!>, we would recursively reverse <!>, and then append <!> to it.
However, since lists in OCaml are built like stacks, this append operation has linear time complexity with respect to the list length.</p><p>Instead, we first define a tail-recursive helper function <!> such that <!> is the reverse of <!> prepended onto <!>.
Here, <!> is effectively an accumulator for the result of reversing the input list.
To implement <!> using <!>, we then use the empty list as initial value for the accumulator.</p><!>`,1),E=y("<!> <!>",1);function R(O){var w=E(),P=l(w);W(P,{children:(j,B)=>{var h=A(),_=t($(h));i(_,{children:(d,f)=>{var c=n(),v=l(c);o(v,()=>"rev : 'a list -> 'a list"),r(d,c)}});var u=t(_,2);i(u,{children:(d,f)=>{var c=n(),v=l(c);o(v,()=>"rev [x1; x2; ...; xn]"),r(d,c)}});var m=t(u,2);i(m,{children:(d,f)=>{var c=n(),v=l(c);o(v,()=>"[xn; ...; x2; x1]"),r(d,c)}}),g(),x(h),r(j,h)}});var T=t(P,2);z(T,{children:(j,B)=>{var h=D(),_=l(h),u=t($(_));i(u,{children:(a,p)=>{var s=n(),e=l(s);o(e,()=>"List.rev"),r(a,s)}}),g(),x(_);var m=t(_),d=t($(m));i(d,{children:(a,p)=>{var s=n(),e=l(s);o(e,()=>"x :: xs"),r(a,s)}});var f=t(d,2);i(f,{children:(a,p)=>{var s=n(),e=l(s);o(e,()=>"xs"),r(a,s)}});var c=t(f,2);i(c,{children:(a,p)=>{var s=n(),e=l(s);o(e,()=>"x"),r(a,s)}}),g(),x(m);var v=t(m),b=t($(v));i(b,{children:(a,p)=>{var s=n(),e=l(s);o(e,()=>"rev_tl : 'a list -> 'a list -> 'a list"),r(a,s)}});var k=t(b,2);i(k,{children:(a,p)=>{var s=n(),e=l(s);o(e,()=>"rev_tl l1 l2"),r(a,s)}});var C=t(k,2);i(C,{children:(a,p)=>{var s=n(),e=l(s);o(e,()=>"l1"),r(a,s)}});var S=t(C,2);i(S,{children:(a,p)=>{var s=n(),e=l(s);o(e,()=>"l2"),r(a,s)}});var I=t(S,2);i(I,{children:(a,p)=>{var s=n(),e=l(s);o(e,()=>"l2"),r(a,s)}});var H=t(I,2);i(H,{children:(a,p)=>{var s=n(),e=l(s);o(e,()=>"rev"),r(a,s)}});var L=t(H,2);i(L,{children:(a,p)=>{var s=n(),e=l(s);o(e,()=>"rev_tl"),r(a,s)}}),g(),x(v);var M=t(v);q(M,{code:`let rec rev_tl : 'a list -> 'a list -> 'a list =
  fun l acc ->
    match l with
    | [] -> acc
    | x :: xs -> rev_tl xs (x :: acc)

let rev : 'a list -> 'a list =
  fun l ->
    rev_tl l []
`,language:"ocaml",children:(a,p)=>{var s=n(),e=l(s);o(e,()=>`<span class="hljs-keyword">let</span> <span class="hljs-keyword">rec</span> rev_tl : <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span> -&gt; <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span> -&gt; <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span> =
  <span class="hljs-keyword">fun</span> l acc -&gt;
    <span class="hljs-keyword">match</span> l <span class="hljs-keyword">with</span>
    | <span class="hljs-literal">[]</span> -&gt; acc
    | x :: xs -&gt; rev_tl xs (x :: acc)

<span class="hljs-keyword">let</span> rev : <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span> -&gt; <span class="hljs-symbol">&#x27;a</span> <span class="hljs-built_in">list</span> =
  <span class="hljs-keyword">fun</span> l -&gt;
    rev_tl l <span class="hljs-literal">[]</span>
`),r(a,s)},$$slots:{default:!0}}),r(j,h)},$$slots:{default:!0}}),r(O,w)}export{R as default};
