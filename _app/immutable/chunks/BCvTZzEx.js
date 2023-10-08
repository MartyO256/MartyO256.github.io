import{t as $,c as l,a as o}from"./BBlrOt-4.js";import{f as t,s as p,c as b,n as q,r as P}from"./lpCv0clr.js";import{h as r}from"./DmaXUcs0.js";import{S as B}from"./t-Wps_5z.js";import{C as c,a as S}from"./Db6E_WMG.js";import{S as T}from"./CeqhcXsd.js";var D=$(`<p>In OCaml, using the following definitions, implement a function <!> such that <!> is <!> if the logic proposition <!> is true when using the valuation <!>.
Avoid short-circuiting evaluation of the conjunction and disjunction operations, and ensure that an exception is raised if <!> contains a variable that cannot be found in <!>.</p><!>`,1),N=$(`<p>Following the definition of propositional logic, we implement <!> as a recursive function that traverses the abstract syntax tree of the input proposition.
In the case where the proposition is a variable, we need to lookup the valuation table for the truth value assigned to the variable.
In the logical conjunction and disjunction cases, to avoid OCaml's short-circuiting evaluation of the boolean operators <!> and <!>, we need to fully evaluate the operands before computing the operation.
The negation and constants cases are straigthforward.</p><!>`,1),V=$("<!> <!>",1);function G(x){var w=V(),k=t(w);B(k,{children:(y,C)=>{var j=D(),h=t(j),m=p(b(h));c(m,{children:(s,d)=>{var a=l(),n=t(a);r(n,()=>"evaluate : valuation -> proposition -> bool"),o(s,a)}});var f=p(m,2);c(f,{children:(s,d)=>{var a=l(),n=t(a);r(n,()=>"evaluate v p"),o(s,a)}});var g=p(f,2);c(g,{children:(s,d)=>{var a=l(),n=t(a);r(n,()=>"true"),o(s,a)}});var _=p(g,2);c(_,{children:(s,d)=>{var a=l(),n=t(a);r(n,()=>"p"),o(s,a)}});var i=p(_,2);c(i,{children:(s,d)=>{var a=l(),n=t(a);r(n,()=>"v"),o(s,a)}});var u=p(i,2);c(u,{children:(s,d)=>{var a=l(),n=t(a);r(n,()=>"p"),o(s,a)}});var e=p(u,2);c(e,{children:(s,d)=>{var a=l(),n=t(a);r(n,()=>"v"),o(s,a)}}),q(),P(h);var v=p(h);S(v,{code:`module StringMap = Map.Make (String)

type variable = string
type valuation = bool StringMap.t

type proposition =
  | Variable of variable                       (* x *)
  | Conjunction of proposition * proposition   (* p ∧ q *)
  | Disjunction of proposition * proposition   (* p ∨ q *)
  | Negation of proposition                    (* ¬ p *)
  | Top                                        (* ⊤ *)
  | Bottom                                     (* ⊥ *)
`,language:"ocaml",children:(s,d)=>{var a=l(),n=t(a);r(n,()=>`<span class="hljs-keyword">module</span> <span class="hljs-type">StringMap</span> = <span class="hljs-type">Map</span>.<span class="hljs-type">Make</span> (<span class="hljs-type">String</span>)

<span class="hljs-keyword">type</span> variable = <span class="hljs-built_in">string</span>
<span class="hljs-keyword">type</span> valuation = <span class="hljs-built_in">bool</span> <span class="hljs-type">StringMap</span>.t

<span class="hljs-keyword">type</span> proposition =
  | <span class="hljs-type">Variable</span> <span class="hljs-keyword">of</span> variable                       <span class="hljs-comment">(* x *)</span>
  | <span class="hljs-type">Conjunction</span> <span class="hljs-keyword">of</span> proposition * proposition   <span class="hljs-comment">(* p ∧ q *)</span>
  | <span class="hljs-type">Disjunction</span> <span class="hljs-keyword">of</span> proposition * proposition   <span class="hljs-comment">(* p ∨ q *)</span>
  | <span class="hljs-type">Negation</span> <span class="hljs-keyword">of</span> proposition                    <span class="hljs-comment">(* ¬ p *)</span>
  | <span class="hljs-type">Top</span>                                        <span class="hljs-comment">(* ⊤ *)</span>
  | <span class="hljs-type">Bottom</span>                                     <span class="hljs-comment">(* ⊥ *)</span>
`),o(s,a)},$$slots:{default:!0}}),o(y,j)}});var M=p(k,2);T(M,{children:(y,C)=>{var j=N(),h=t(j),m=p(b(h));c(m,{children:(i,u)=>{var e=l(),v=t(e);r(v,()=>"evaluate"),o(i,e)}});var f=p(m,2);c(f,{children:(i,u)=>{var e=l(),v=t(e);r(v,()=>"(&&)"),o(i,e)}});var g=p(f,2);c(g,{children:(i,u)=>{var e=l(),v=t(e);r(v,()=>"(||)"),o(i,e)}}),q(),P(h);var _=p(h);S(_,{code:`let rec evaluate : valuation -> proposition -> bool =
  fun valuation proposition ->
    match proposition with
    | Variable x -> StringMap.find x valuation
    | Conjunction (p, q) ->
        let vp = evaluate valuation p in
        let vq = evaluate valuation q in
        vp && vq
    | Disjunction (p, q) ->
        let vp = evaluate valuation p in
        let vq = evaluate valuation q in
        vp || vq
    | Negation p ->
        let vp = evaluate valuation p in
        Bool.not vp
    | Top -> true
    | Bottom -> false
`,language:"ocaml",children:(i,u)=>{var e=l(),v=t(e);r(v,()=>`<span class="hljs-keyword">let</span> <span class="hljs-keyword">rec</span> evaluate : valuation -&gt; proposition -&gt; <span class="hljs-built_in">bool</span> =
  <span class="hljs-keyword">fun</span> valuation proposition -&gt;
    <span class="hljs-keyword">match</span> proposition <span class="hljs-keyword">with</span>
    | <span class="hljs-type">Variable</span> x -&gt; <span class="hljs-type">StringMap</span>.find x valuation
    | <span class="hljs-type">Conjunction</span> (p, q) -&gt;
        <span class="hljs-keyword">let</span> vp = evaluate valuation p <span class="hljs-keyword">in</span>
        <span class="hljs-keyword">let</span> vq = evaluate valuation q <span class="hljs-keyword">in</span>
        vp &amp;&amp; vq
    | <span class="hljs-type">Disjunction</span> (p, q) -&gt;
        <span class="hljs-keyword">let</span> vp = evaluate valuation p <span class="hljs-keyword">in</span>
        <span class="hljs-keyword">let</span> vq = evaluate valuation q <span class="hljs-keyword">in</span>
        vp || vq
    | <span class="hljs-type">Negation</span> p -&gt;
        <span class="hljs-keyword">let</span> vp = evaluate valuation p <span class="hljs-keyword">in</span>
        <span class="hljs-type">Bool</span>.not vp
    | <span class="hljs-type">Top</span> -&gt; <span class="hljs-literal">true</span>
    | <span class="hljs-type">Bottom</span> -&gt; <span class="hljs-literal">false</span>
`),o(i,e)},$$slots:{default:!0}}),o(y,j)},$$slots:{default:!0}}),o(x,w)}export{G as default};
