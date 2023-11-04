import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c,e as n,a as s,d as t,f as a}from"./app-f910849f.js";const o="/OnJava8/assets/1562653648586-350f5854.png",i="/OnJava8/assets/1562737974623-a64f7439.png",l="/OnJava8/assets/1562999314238-8242f3ed.png",u={},k=s("p",null,"[TOC]",-1),d=s("h1",{id:"第十章-接口",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#第十章-接口","aria-hidden":"true"},"#"),t(" 第十章 接口")],-1),r=s("p",null,"接口和抽象类提供了一种将接口与实现分离的更加结构化的方法。",-1),v=s("p",null,"这种机制在编程语言中不常见，例如 C++ 只对这种概念有间接的支持。而在 Java 中存在这些关键字，说明这些思想很重要，Java 为它们提供了直接支持。",-1),m=s("p",null,"首先，我们将学习抽象类，一种介于普通类和接口之间的折中手段。尽管你的第一想法是创建接口，但是对于构建具有属性和未实现方法的类来说，抽象类也是重要且必要的工具。你不可能总是使用纯粹的接口。",-1),b=a(`<h2 id="抽象类和方法" tabindex="-1"><a class="header-anchor" href="#抽象类和方法" aria-hidden="true">#</a> 抽象类和方法</h2><p>在上一章的乐器例子中，基类 <strong>Instrument</strong> 中的方法往往是“哑”方法。如果调用了这些方法，就会出现一些错误。这是因为接口的目的是为它的派生类创建一个通用接口。</p><p>在那些例子中，创建这个通用接口的唯一理由是，不同的子类可以用不同的方式表示此接口。通用接口建立了一个基本形式，以此表达所有派生类的共同部分。另一种说法把 <strong>Instrument</strong> 称为抽象基类，或简称抽象类。</p><p>对于像 <strong>Instrument</strong> 那样的抽象类来说，它的对象几乎总是没有意义的。创建一个抽象类是为了通过通用接口操纵一系列类。因此，<strong>Instrument</strong> 只是表示接口，不是具体实现，所以创建一个 <strong>Instrument</strong> 的对象毫无意义，我们可能希望阻止用户这么做。通过让 <strong>Instrument</strong> 所有的方法产生错误，就可以达到这个目的，但是这么做会延迟到运行时才能得知错误信息，并且需要用户进行可靠、详尽的测试。最好能在编译时捕捉问题。</p><p>Java 提供了一个叫做<em>抽象方法</em>的机制，这个方法是不完整的：它只有声明没有方法体。下面是抽象方法的声明语法：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>包含抽象方法的类叫做<em>抽象类</em>。如果一个类包含一个或多个抽象方法，那么类本身也必须限定为抽象的，否则，编译器会报错。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// interface/Basic.java</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Basic</span> <span class="token punctuation">{</span>
    <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">unimplemented</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果一个抽象类是不完整的，当试图创建这个类的对象时，Java 会怎么做呢？它不会创建抽象类的对象，所以我们只会得到编译器的错误信息。这样保证了抽象类的纯粹性，我们不用担心误用它。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// interfaces/AttemptToUseBasic.java</span>
<span class="token comment">// {WillNotCompile}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AttemptToUseBasic</span> <span class="token punctuation">{</span>
    <span class="token class-name">Basic</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Basic</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// error: Basic is abstract; cannot be instantiated</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果创建一个继承抽象类的新类并为之创建对象，那么就必须为基类的所有抽象方法提供方法定义。如果不这么做（可以选择不做），新类仍然是一个抽象类，编译器会强制我们为新类加上 <strong>abstract</strong> 关键字。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// interfaces/Basic2.java</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Basic2</span> <span class="token keyword">extends</span> <span class="token class-name">Basic</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">111</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">g</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// unimplemented() still not implemented</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以将一个不包含任何抽象方法的类指明为 <strong>abstract</strong>，在类中的抽象方法没啥意义但想阻止创建类的对象时，这么做就很有用。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// interfaces/AbstractWithoutAbstracts.java</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Basic3</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">111</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// No abstract methods</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AbstractWithoutAbstracts</span> <span class="token punctuation">{</span>
    <span class="token comment">// Basic3 b3 = new Basic3();</span>
    <span class="token comment">// error: Basic3 is abstract; cannot be instantiated</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了创建可初始化的类，就要继承抽象类，并提供所有抽象方法的定义：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// interfaces/Instantiable.java</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Uninstantiable</span> <span class="token punctuation">{</span>
    <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">abstract</span> <span class="token keyword">int</span> <span class="token function">g</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Instantiable</span> <span class="token keyword">extends</span> <span class="token class-name">Uninstantiable</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">void</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;f()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">int</span> <span class="token function">g</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">22</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Uninstantiable</span> ui <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Instantiable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>留意 <code>@Override</code> 的使用。没有这个注解的话，如果你没有定义相同的方法名或签名，抽象机制会认为你没有实现抽象方法从而产生编译时错误。因此，你可能认为这里的 <code>@Override</code> 是多余的。但是，<code>@Override</code> 还提示了这个方法被覆写——我认为这是有用的，所以我会使用 <code>@Override</code>，不仅仅是因为当没有这个注解时，编译器会告诉我出错。</p><p>记住，事实上的访问权限是“friendly”。你很快会看到接口自动将其方法指明为 <strong>public</strong>。事实上，接口只允许 <strong>public</strong> 方法，如果不加访问修饰符的话，接口的方法不是 <strong>friendly</strong> 而是 <strong>public</strong>。然而，抽象类允许每件事：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// interfaces/AbstractAccess.java</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractAccess</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">m1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    
    <span class="token comment">// private abstract void m1a(); // illegal</span>
    
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">m2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    
    <span class="token keyword">protected</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">m2a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">void</span> <span class="token function">m3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    
    <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">m3a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">m4</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">m4a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>private abstract</strong> 被禁止了是有意义的，因为你不可能在 <strong>AbstractAccess</strong> 的任何子类中合法地定义它。</p><p>上一章的 <strong>Instrument</strong> 类可以很轻易地转换为一个抽象类。只需要部分方法是 <strong>abstract</strong> 即可。将一个类指明为 <strong>abstract</strong> 并不强制类中的所有方法必须都是抽象方法。如下图所示：</p><figure><img src="`+o+`" alt="类图" tabindex="0" loading="lazy"><figcaption>类图</figcaption></figure><p>下面是修改成使用抽象类和抽象方法的管弦乐器的例子：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// interfaces/music4/Music4.java</span>
<span class="token comment">// Abstract classes and methods</span>
<span class="token comment">// {java interfaces.music4.Music4}</span>
<span class="token keyword">package</span> <span class="token namespace">interfaces<span class="token punctuation">.</span>music4</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">polymorphism<span class="token punctuation">.</span>music<span class="token punctuation">.</span></span><span class="token class-name">Note</span></span><span class="token punctuation">;</span>

<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Instrument</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> i<span class="token punctuation">;</span> <span class="token comment">// Storage allocated for each</span>
    
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token class-name">Note</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">what</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Instrument&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">adjust</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Wind</span> <span class="token keyword">extends</span> <span class="token class-name">Instrument</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token class-name">Note</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Wind.play() &quot;</span> <span class="token operator">+</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">what</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Wind&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">adjust</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Adjusting Wind&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Percussion</span> <span class="token keyword">extends</span> <span class="token class-name">Instrument</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token class-name">Note</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Percussion.play() &quot;</span> <span class="token operator">+</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">what</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Percussion&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">adjust</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Adjusting Percussion&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Stringed</span> <span class="token keyword">extends</span> <span class="token class-name">Instrument</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token class-name">Note</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Stringed.play() &quot;</span> <span class="token operator">+</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">what</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Stringed&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">adjust</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Adjusting Stringed&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Brass</span> <span class="token keyword">extends</span> <span class="token class-name">Wind</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token class-name">Note</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Brass.play() &quot;</span> <span class="token operator">+</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">adjust</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Adjusting Brass&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Woodwind</span> <span class="token keyword">extends</span> <span class="token class-name">Wind</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token class-name">Note</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Woodwind.play() &quot;</span> <span class="token operator">+</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">what</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Woodwind&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Music4</span> <span class="token punctuation">{</span>
    <span class="token comment">// Doesn&#39;t care about type, so new types</span>
    <span class="token comment">// added to system still work right:</span>
    <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">tune</span><span class="token punctuation">(</span><span class="token class-name">Instrument</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
        i<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token class-name">Note</span><span class="token punctuation">.</span><span class="token constant">MIDDLE_C</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">tuneAll</span><span class="token punctuation">(</span><span class="token class-name">Instrument</span><span class="token punctuation">[</span><span class="token punctuation">]</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Instrument</span> i<span class="token operator">:</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">tune</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Upcasting during addition to the array:</span>
        <span class="token class-name">Instrument</span><span class="token punctuation">[</span><span class="token punctuation">]</span> orchestra <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token keyword">new</span> <span class="token class-name">Wind</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token keyword">new</span> <span class="token class-name">Percussion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token keyword">new</span> <span class="token class-name">Stringed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token keyword">new</span> <span class="token class-name">Brass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token keyword">new</span> <span class="token class-name">Woodwind</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token function">tuneAll</span><span class="token punctuation">(</span>orchestra<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Wind.play() MIDDLE_C
Percussion.play() MIDDLE_C
Stringed.play() MIDDLE_C
Brass.play() MIDDLE_C
Woodwind.play() MIDDLE_C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了 <strong>Instrument</strong>，基本没区别。</p><p>创建抽象类和抽象方法是有帮助的，因为它们使得类的抽象性很明确，并能告知用户和编译器使用意图。抽象类同时也是一种有用的重构工具，使用它们使得我们很容易地将沿着继承层级结构上移公共方法。</p>`,28),y=a(`<h2 id="接口创建" tabindex="-1"><a class="header-anchor" href="#接口创建" aria-hidden="true">#</a> 接口创建</h2><p>使用 <strong>interface</strong> 关键字创建接口。在本书中，interface 和 class 一样随处常见，除非特指关键字 <strong>interface</strong>，其他情况下都采用正常字体书写 interface。</p><p>描述 Java 8 之前的接口更加容易，因为它们只允许抽象方法。像下面这样：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// interfaces/PureInterface.java</span>
<span class="token comment">// Interface only looked like this before Java 8</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">PureInterface</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token function">m1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token keyword">void</span> <span class="token function">m2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">double</span> <span class="token function">m3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们甚至不用为方法加上 <strong>abstract</strong> 关键字，因为方法在接口中。Java 知道这些方法不能有方法体（仍然可以为方法加上 <strong>abstract</strong> 关键字，但是看起来像是不明白接口，徒增难堪罢了）。</p><p>因此，在 Java 8之前我们可以这么说：<strong>interface</strong> 关键字产生一个完全抽象的类，没有提供任何实现。我们只能描述类应该像什么，做什么，但不能描述怎么做，即只能决定方法名、参数列表和返回类型，但是无法确定方法体。接口只提供形式，通常来说没有实现，尽管在某些受限制的情况下可以有实现。</p><p>一个接口表示：所有实现了该接口的类看起来都像这样。因此，任何使用某特定接口的代码都知道可以调用该接口的哪些方法，而且仅需知道这些。所以，接口被用来建立类之间的协议。（一些面向对象编程语言中，使用 protocol 关键字完成相同的功能。）</p><p>Java 8 中接口稍微有些变化，因为 Java 8 允许接口包含默认方法和静态方法——基于某些重要原因，看到后面你会理解。接口的基本概念仍然没变，介于类型之上、实现之下。接口与抽象类最明显的区别可能就是使用上的惯用方式。接口的典型使用是代表一个类的类型或一个形容词，如 Runnable 或 Serializable，而抽象类通常是类层次结构的一部分或一件事物的类型，如 String 或 ActionHero。</p><p>使用关键字 <strong>interface</strong> 而不是 <strong>class</strong> 来创建接口。和类一样，需要在关键字 <strong>interface</strong> 前加上 <strong>public</strong> 关键字（但只是在接口名与文件名相同的情况下），否则接口只有包访问权限，只能在接口相同的包下才能使用它。</p><p>接口同样可以包含属性，这些属性被隐式指明为 <strong>static</strong> 和 <strong>final</strong>。</p><p>使用 <strong>implements</strong> 关键字使一个类遵循某个特定接口（或一组接口），它表示：接口只是外形，现在我要说明它是如何工作的。除此之外，它看起来像继承。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// interfaces/ImplementingAnInterface.java</span>
<span class="token keyword">interface</span> <span class="token class-name">Concept</span> <span class="token punctuation">{</span> <span class="token comment">// Package access</span>
    <span class="token keyword">void</span> <span class="token function">idea1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">idea2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Implementation</span> <span class="token keyword">implements</span> <span class="token class-name">Concept</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">idea1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;idea1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">idea2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;idea2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以选择显式地声明接口中的方法为 <strong>public</strong>，但是即使你不这么做，它们也是 <strong>public</strong> 的。所以当实现一个接口时，来自接口中的方法必须被定义为 <strong>public</strong>。否则，它们只有包访问权限，这样在继承时，它们的可访问权限就被降低了，这是 Java 编译器所不允许的。</p><h3 id="默认方法" tabindex="-1"><a class="header-anchor" href="#默认方法" aria-hidden="true">#</a> 默认方法</h3><p>Java 8 为关键字 <strong>default</strong> 增加了一个新的用途（之前只用于 <strong>switch</strong> 语句和注解中）。当在接口中使用它时，任何实现接口却没有定义方法的时候可以使用 <strong>default</strong> 创建的方法体。默认方法比抽象类中的方法受到更多的限制，但是非常有用，我们将在“流式编程”一章中看到。现在让我们看下如何使用：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// interfaces/AnInterface.java</span>
<span class="token keyword">interface</span> <span class="token class-name">AnInterface</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">firstMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">secondMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以像这样实现接口：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// interfaces/AnImplementation.java</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AnImplementation</span> <span class="token keyword">implements</span> <span class="token class-name">AnInterface</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">firstMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;firstMethod&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">secondMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;secondMethod&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">AnInterface</span> i <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AnImplementation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        i<span class="token punctuation">.</span><span class="token function">firstMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        i<span class="token punctuation">.</span><span class="token function">secondMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>firstMethod
secondMethod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们在 <strong>AnInterface</strong> 中增加一个新方法 <code>newMethod()</code>，而在 <strong>AnImplementation</strong> 中没有实现它，编译器就会报错：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>AnImplementation.java:3:error: AnImplementation is not abstract and does not override abstract method newMethod() in AnInterface
public class AnImplementation implements AnInterface {
^
1 error
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们使用关键字 <strong>default</strong> 为 <code>newMethod()</code> 方法提供默认的实现，那么所有与接口有关的代码能正常工作，不受影响，而且这些代码还可以调用新的方法 <code>newMethod()</code>：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// interfaces/InterfaceWithDefault.java</span>
<span class="token keyword">interface</span> <span class="token class-name">InterfaceWithDefault</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">firstMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">secondMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">newMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;newMethod&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关键字 <strong>default</strong> 允许在接口中提供方法实现——在 Java 8 之前被禁止。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// interfaces/Implementation2.java</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Implementation2</span> <span class="token keyword">implements</span> <span class="token class-name">InterfaceWithDefault</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">firstMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;firstMethod&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">secondMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;secondMethod&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">InterfaceWithDefault</span> i <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Implementation2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        i<span class="token punctuation">.</span><span class="token function">firstMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        i<span class="token punctuation">.</span><span class="token function">secondMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        i<span class="token punctuation">.</span><span class="token function">newMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>firstMethod
secondMethod
newMethod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>尽管 <strong>Implementation2</strong> 中未定义 <code>newMethod()</code>，但是可以使用 <code>newMethod()</code> 了。</p><p>增加默认方法的极具说服力的理由是它允许在不破坏已使用接口的代码的情况下，在接口中增加新的方法。默认方法有时也被称为<em>守卫方法</em>或<em>虚拟扩展方法</em>。</p><h3 id="多继承" tabindex="-1"><a class="header-anchor" href="#多继承" aria-hidden="true">#</a> 多继承</h3><p>多继承意味着一个类可能从多个父类型中继承特征和特性。</p><p>Java 在设计之初，C++ 的多继承机制饱受诟病。Java 过去是一种严格要求单继承的语言：只能继承自一个类（或抽象类），但可以实现任意多个接口。在 Java 8 之前，接口没有包袱——它只是方法外貌的描述。</p><p>多年后的现在，Java 通过默认方法具有了某种多继承的特性。结合带有默认方法的接口意味着结合了多个基类中的行为。因为接口中仍然不允许存在属性（只有静态属性，不适用），所以属性仍然只会来自单个基类或抽象类，也就是说，不会存在状态的多继承。正如下面这样：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// interfaces/MultipleInheritance.java</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">One</span> <span class="token punctuation">{</span>
    <span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;first&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Two</span> <span class="token punctuation">{</span>
    <span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">second</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;second&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Three</span> <span class="token punctuation">{</span>
    <span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">third</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;third&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MI</span> <span class="token keyword">implements</span> <span class="token class-name">One</span><span class="token punctuation">,</span> <span class="token class-name">Two</span><span class="token punctuation">,</span> <span class="token class-name">Three</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MultipleInheritance</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">MI</span> mi <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        mi<span class="token punctuation">.</span><span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        mi<span class="token punctuation">.</span><span class="token function">second</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        mi<span class="token punctuation">.</span><span class="token function">third</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>first
second
third
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在我们做些在 Java 8 之前不可能完成的事：结合多个源的实现。只要基类方法中的方法名和参数列表不同，就能工作得很好，否则会得到编译器错误：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// interface/MICollision.java</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">Bob1</span> <span class="token punctuation">{</span>
    <span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">bob</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Bob1::bob&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Bob2</span> <span class="token punctuation">{</span>
    <span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">bob</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Bob2::bob&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// class Bob implements Bob1, Bob2 {}</span>
<span class="token comment">/* Produces:
error: class Bob inherits unrelated defaults
for bob() from types Bob1 and Bob2
class Bob implements Bob1, Bob2 {}
^
1 error
*/</span>

<span class="token keyword">interface</span> <span class="token class-name">Sam1</span> <span class="token punctuation">{</span>
    <span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">sam</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Sam1::sam&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Sam2</span> <span class="token punctuation">{</span>
    <span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">sam</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// This works because the argument lists are distinct:</span>
<span class="token keyword">class</span> <span class="token class-name">Sam</span> <span class="token keyword">implements</span> <span class="token class-name">Sam1</span><span class="token punctuation">,</span> <span class="token class-name">Sam2</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Max1</span> <span class="token punctuation">{</span>
    <span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Max1::max&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Max2</span> <span class="token punctuation">{</span>
    <span class="token keyword">default</span> <span class="token keyword">int</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">47</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// class Max implements Max1, Max2 {}</span>
<span class="token comment">/* Produces:
error: types Max2 and Max1 are imcompatible;
both define max(), but with unrelated return types
class Max implements Max1, Max2 {}
^
1 error
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Sam</strong> 类中的两个 <code>sam()</code> 方法有相同的方法名但是签名不同——方法签名包括方法名和参数类型，编译器也是用它来区分方法。但是从 <strong>Max</strong> 类可看出，返回类型不是方法签名的一部分，因此不能用来区分方法。为了解决这个问题，需要覆写冲突的方法：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// interfaces/Jim.java</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">Jim1</span> <span class="token punctuation">{</span>
    <span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">jim</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Jim1::jim&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Jim2</span> <span class="token punctuation">{</span>
    <span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">jim</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Jim2::jim&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Jim</span> <span class="token keyword">implements</span> <span class="token class-name">Jim1</span><span class="token punctuation">,</span> <span class="token class-name">Jim2</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">jim</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Jim2</span><span class="token punctuation">.</span><span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">jim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">new</span> <span class="token class-name">Jim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">jim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Jim2::jim
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当然，你可以重定义 <code>jim()</code> 方法，但是也能像上例中那样使用 <strong>super</strong> 关键字选择基类实现中的一种。</p><h3 id="接口中的静态方法" tabindex="-1"><a class="header-anchor" href="#接口中的静态方法" aria-hidden="true">#</a> 接口中的静态方法</h3><p>Java 8 允许在接口中添加静态方法。这么做能恰当地把工具功能置于接口中，从而操作接口，或者成为通用的工具：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// onjava/Operations.java</span>
<span class="token keyword">package</span> <span class="token namespace">onjava</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Operations</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">runOps</span><span class="token punctuation">(</span><span class="token class-name">Operations</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> ops<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Operations</span> op<span class="token operator">:</span> ops<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            op<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是<em>模板方法</em>设计模式的一个版本（在“设计模式”一章中详细描述），<code>runOps()</code> 是一个模板方法。<code>runOps()</code> 使用可变参数列表，因而我们可以传入任意多的 <strong>Operation</strong> 参数并按顺序运行它们：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// interface/Machine.java</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">onjava<span class="token punctuation">.</span></span><span class="token class-name">Operations</span></span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Bing</span> <span class="token keyword">implements</span> <span class="token class-name">Operations</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Operations</span><span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">&quot;Bing&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Crack</span> <span class="token keyword">implements</span> <span class="token class-name">Operations</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Operations</span><span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">&quot;Crack&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Twist</span> <span class="token keyword">implements</span> <span class="token class-name">Operations</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Operations</span><span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">&quot;Twist&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Machine</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Operations</span><span class="token punctuation">.</span><span class="token function">runOps</span><span class="token punctuation">(</span>
        	<span class="token keyword">new</span> <span class="token class-name">Bing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Crack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Twist</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Bing
Crack
Twist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里展示了创建 <strong>Operations</strong> 的不同方式：一个外部类(Bing)，一个匿名类，一个方法引用和 lambda 表达式——毫无疑问用在这里是最好的解决方法。</p><p>这个特性是一项改善，因为它允许把静态方法放在更合适的地方。</p><h3 id="instrument-作为接口" tabindex="-1"><a class="header-anchor" href="#instrument-作为接口" aria-hidden="true">#</a> Instrument 作为接口</h3><p>回顾下乐器的例子，使用接口的话：</p><figure><img src="`+i+`" alt="类图" tabindex="0" loading="lazy"><figcaption>类图</figcaption></figure><p>类 <strong>Woodwind</strong> 和 <strong>Brass</strong> 说明一旦实现了某个接口，那么其实现就变成一个普通类，可以按常规方式扩展它。</p><p>接口的工作方式使得我们不需要显式声明其中的方法为 <strong>public</strong>，它们自动就是 <strong>public</strong> 的。<code>play()</code> 和 <code>adjust()</code> 使用 <strong>default</strong> 关键字定义实现。在 Java 8 之前，这些定义要在每个实现中重复实现，显得多余且令人烦恼：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// interfaces/music5/Music5.java</span>
<span class="token comment">// {java interfaces.music5.Music5}</span>
<span class="token keyword">package</span> <span class="token namespace">interfaces<span class="token punctuation">.</span>music5</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">polymorphism<span class="token punctuation">.</span>music<span class="token punctuation">.</span></span><span class="token class-name">Note</span></span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">Instrument</span> <span class="token punctuation">{</span>
    <span class="token comment">// Compile-time constant:</span>
    <span class="token keyword">int</span> <span class="token constant">VALUE</span> <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token comment">// static &amp; final</span>
    
    <span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token class-name">Note</span> n<span class="token punctuation">)</span>  <span class="token comment">// Automatically public </span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">+</span> <span class="token string">&quot;.play() &quot;</span> <span class="token operator">+</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">adjust</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Adjusting &quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Wind</span> <span class="token keyword">implements</span> <span class="token class-name">Instrument</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Wind&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Percussion</span> <span class="token keyword">implements</span> <span class="token class-name">Instrument</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Percussion&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Stringed</span> <span class="token keyword">implements</span> <span class="token class-name">Instrument</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Stringed&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Brass</span> <span class="token keyword">extends</span> <span class="token class-name">Wind</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Brass&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Woodwind</span> <span class="token keyword">extends</span> <span class="token class-name">Wind</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Woodwind&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Music5</span> <span class="token punctuation">{</span>
    <span class="token comment">// Doesn&#39;t care about type, so new types</span>
    <span class="token comment">// added to the system still work right:</span>
    <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">tune</span><span class="token punctuation">(</span><span class="token class-name">Instrument</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
        i<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token class-name">Note</span><span class="token punctuation">.</span><span class="token constant">MIDDLE_C</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">tuneAll</span><span class="token punctuation">(</span><span class="token class-name">Instrument</span><span class="token punctuation">[</span><span class="token punctuation">]</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Instrument</span> i<span class="token operator">:</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">tune</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Upcasting during addition to the array:</span>
        <span class="token class-name">Instrument</span><span class="token punctuation">[</span><span class="token punctuation">]</span> orchestra <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token keyword">new</span> <span class="token class-name">Wind</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token keyword">new</span> <span class="token class-name">Percussion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token keyword">new</span> <span class="token class-name">Stringed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token keyword">new</span> <span class="token class-name">Brass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token keyword">new</span> <span class="token class-name">Woodwind</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token function">tuneAll</span><span class="token punctuation">(</span>orchestra<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Wind.play() MIDDLE_C
Percussion.play() MIDDLE_C
Stringed.play() MIDDLE_C
Brass.play() MIDDLE_C
Woodwind.play() MIDDLE_C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个版本的例子的另一个变化是：<code>what()</code> 被修改为 <code>toString()</code> 方法，因为 <code>toString()</code> 实现的正是 <code>what()</code> 方法要实现的逻辑。因为 <code>toString()</code> 是根基类 <strong>Object</strong> 的方法，所以它不需要出现在接口中。</p><p>注意到，无论是将其向上转型为称作 <strong>Instrument</strong> 的普通类，或称作 <strong>Instrument</strong> 的抽象类，还是叫作 <strong>Instrument</strong> 的接口，其行为都是相同的。事实上，从 <code>tune()</code> 方法上看不出来 <strong>Instrument</strong> 到底是一个普通类、抽象类，还是一个接口。</p>`,63),w=a('<h2 id="抽象类和接口" tabindex="-1"><a class="header-anchor" href="#抽象类和接口" aria-hidden="true">#</a> 抽象类和接口</h2><p>尤其是在 Java 8 引入 <strong>default</strong> 方法之后，选择用抽象类还是用接口变得更加令人困惑。下表做了明确的区分：</p><table><thead><tr><th style="text-align:center;">特性</th><th style="text-align:center;">接口</th><th style="text-align:center;">抽象类</th></tr></thead><tbody><tr><td style="text-align:center;">组合</td><td style="text-align:center;">新类可以组合多个接口</td><td style="text-align:center;">只能继承单一抽象类</td></tr><tr><td style="text-align:center;">状态</td><td style="text-align:center;">不能包含属性（除了静态属性，不支持对象状态）</td><td style="text-align:center;">可以包含属性，非抽象方法可能引用这些属性</td></tr><tr><td style="text-align:center;">默认方法 和 抽象方法</td><td style="text-align:center;">不需要在子类中实现默认方法。默认方法可以引用其他接口的方法</td><td style="text-align:center;">必须在子类中实现抽象方法</td></tr><tr><td style="text-align:center;">构造器</td><td style="text-align:center;">没有构造器</td><td style="text-align:center;">可以有构造器</td></tr><tr><td style="text-align:center;">可见性</td><td style="text-align:center;">隐式 <strong>public</strong></td><td style="text-align:center;">可以是 <strong>protected</strong> 或 &quot;friendly&quot;</td></tr></tbody></table><p>抽象类仍然是一个类，在创建新类时只能继承它一个。而创建类的过程中可以实现多个接口。</p><p>有一条实际经验：在合理的范围内尽可能地抽象。因此，更倾向使用接口而不是抽象类。只有当必要时才使用抽象类。除非必须使用，否则不要用接口和抽象类。大多数时候，普通类已经做得很好，如果不行的话，再移动到接口或抽象类中。</p>',5),g=a(`<h2 id="完全解耦" tabindex="-1"><a class="header-anchor" href="#完全解耦" aria-hidden="true">#</a> 完全解耦</h2><p>每当一个方法与一个类而不是接口一起工作时(当方法的参数是类而不是接口)，你只能应用那个类或它的子类。如果你想把这方法应用到一个继承层次之外的类，是做不到的。接口在很大程度上放宽了这个限制，因而使用接口可以编写复用性更好的代码。</p><p>例如有一个类 <strong>Processor</strong> 有两个方法 <code>name()</code> 和 <code>process()</code>。<code>process()</code> 方法接受输入，修改并输出。把这个类作为基类用来创建各种不同类型的 <strong>Processor</strong>。下例中，<strong>Processor</strong> 的各个子类修改 String 对象（注意，返回类型可能是协变类型而非参数类型）：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// interfaces/Applicator.java</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Processor</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getSimpleName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token class-name">Object</span> input<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> input<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Upcase</span> <span class="token keyword">extends</span> <span class="token class-name">Processor</span> <span class="token punctuation">{</span>
    <span class="token comment">// 返回协变类型</span>
    <span class="token annotation punctuation">@Override</span> 
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token class-name">Object</span> input<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> input<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Downcase</span> <span class="token keyword">extends</span> <span class="token class-name">Processor</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token class-name">Object</span> input<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> input<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Splitter</span> <span class="token keyword">extends</span> <span class="token class-name">Processor</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token class-name">Object</span> input<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// split() divides a String into pieces:</span>
        <span class="token keyword">return</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> input<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Applicator</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">apply</span><span class="token punctuation">(</span><span class="token class-name">Processor</span> p<span class="token punctuation">,</span> <span class="token class-name">Object</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Using Processor &quot;</span> <span class="token operator">+</span> p<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token string">&quot;We are such stuff as dreams are made on&quot;</span><span class="token punctuation">;</span>
        <span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Upcase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Downcase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Splitter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Using Processor Upcase
WE ARE SUCH STUFF AS DREAMS ARE MADE ON
Using Processor Downcase
we are such stuff as dreams are made on
Using Processor Splitter
[We, are, such, stuff, as, dreams, are, made, on]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Applicator</strong> 的 <code>apply()</code> 方法可以接受任何类型的 <strong>Processor</strong>，并将其应用到一个 <strong>Object</strong> 对象上输出结果。像本例中这样，创建一个能根据传入的参数类型从而具备不同行为的方法称为<em>策略</em>设计模式。方法包含算法中不变的部分，策略包含变化的部分。策略就是传入的对象，它包含要执行的代码。在这里，<strong>Processor</strong> 对象是策略，<code>main()</code> 方法展示了三种不同的应用于 <strong>String s</strong> 上的策略。</p><p><code>split()</code> 是 <strong>String</strong> 类中的方法，它接受 <strong>String</strong> 类型的对象并以传入的参数作为分割界限，返回一个数组 <strong>String[]</strong>。在这里用它是为了更快地创建 <strong>String</strong> 数组。</p><p>假设现在发现了一组电子滤波器，它们看起来好像能使用 <strong>Applicator</strong> 的 <code>apply()</code> 方法：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// interfaces/filters/Waveform.java</span>
<span class="token keyword">package</span> <span class="token namespace">interfaces<span class="token punctuation">.</span>filters</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Waveform</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">long</span> counter<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">long</span> id <span class="token operator">=</span> counter<span class="token operator">++</span><span class="token punctuation">;</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Waveform &quot;</span> <span class="token operator">+</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// interfaces/filters/Filter.java</span>
<span class="token keyword">package</span> <span class="token namespace">interfaces<span class="token punctuation">.</span>filters</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Filter</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getSimpleName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token class-name">Waveform</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token class-name">Waveform</span> input<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> input<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// interfaces/filters/LowPass.java</span>
<span class="token keyword">package</span> <span class="token namespace">interfaces<span class="token punctuation">.</span>filters</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LowPass</span> <span class="token keyword">extends</span> <span class="token class-name">Filter</span> <span class="token punctuation">{</span>
    <span class="token keyword">double</span> cutoff<span class="token punctuation">;</span>
    
    <span class="token keyword">public</span> <span class="token class-name">LowPass</span><span class="token punctuation">(</span><span class="token keyword">double</span> cutoff<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>cutoff <span class="token operator">=</span> cutoff<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Waveform</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token class-name">Waveform</span> input<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> input<span class="token punctuation">;</span> <span class="token comment">// Dummy processing 哑处理</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// interfaces/filters/HighPass.java</span>
<span class="token keyword">package</span> <span class="token namespace">interfaces<span class="token punctuation">.</span>filters</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HighPass</span> <span class="token keyword">extends</span> <span class="token class-name">Filter</span> <span class="token punctuation">{</span>
    <span class="token keyword">double</span> cutoff<span class="token punctuation">;</span>
    
    <span class="token keyword">public</span> <span class="token class-name">HighPass</span><span class="token punctuation">(</span><span class="token keyword">double</span> cutoff<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>cutoff <span class="token operator">=</span> cutoff<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Waveform</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token class-name">Waveform</span> input<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> input<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// interfaces/filters/BandPass.java</span>
<span class="token keyword">package</span> <span class="token namespace">interfaces<span class="token punctuation">.</span>filters</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BandPass</span> <span class="token keyword">extends</span> <span class="token class-name">Filter</span> <span class="token punctuation">{</span>
    <span class="token keyword">double</span> lowCutoff<span class="token punctuation">,</span> highCutoff<span class="token punctuation">;</span>
    
    <span class="token keyword">public</span> <span class="token class-name">BandPass</span><span class="token punctuation">(</span><span class="token keyword">double</span> lowCut<span class="token punctuation">,</span> <span class="token keyword">double</span> highCut<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        lowCutoff <span class="token operator">=</span> lowCut<span class="token punctuation">;</span>
        highCutoff <span class="token operator">=</span> highCut<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Waveform</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token class-name">Waveform</span> input<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> input<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Filter</strong> 类与 <strong>Processor</strong> 类具有相同的接口元素，但是因为它不是继承自 <strong>Processor</strong> —— 因为 <strong>Filter</strong> 类的创建者根本不知道你想将它当作 <strong>Processor</strong> 使用 —— 因此你不能将 <strong>Applicator</strong> 的 <code>apply()</code> 方法应用在 <strong>Filter</strong> 类上，即使这样做也能正常运行。主要是因为 <strong>Applicator</strong> 的 <code>apply()</code> 方法和 <strong>Processor</strong> 过于耦合，这阻止了 <strong>Applicator</strong> 的 <code>apply()</code> 方法被复用。另外要注意的一点是 Filter 类中 <code>process()</code> 方法的输入输出都是 <strong>Waveform</strong>。</p><p>但如果 <strong>Processor</strong> 是一个接口，那么限制就会变得松动到足以复用 <strong>Applicator</strong> 的 <code>apply()</code> 方法，用来接受那个接口参数。下面是修改后的 <strong>Processor</strong> 和 <strong>Applicator</strong> 版本：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// interfaces/interfaceprocessor/Processor.java</span>
<span class="token keyword">package</span> <span class="token namespace">interfaces<span class="token punctuation">.</span>interfaceprocessor</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Processor</span> <span class="token punctuation">{</span>
    <span class="token keyword">default</span> <span class="token class-name">String</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getSimpleName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token class-name">Object</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token class-name">Object</span> input<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// interfaces/interfaceprocessor/Applicator.java</span>
<span class="token keyword">package</span> <span class="token namespace">interfaces<span class="token punctuation">.</span>interfaceprocessor</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Applicator</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">apply</span><span class="token punctuation">(</span><span class="token class-name">Processor</span> p<span class="token punctuation">,</span> <span class="token class-name">Object</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Using Processor &quot;</span> <span class="token operator">+</span> p<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复用代码的第一种方式是客户端程序员遵循接口编写类，像这样：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// interfaces/interfaceprocessor/StringProcessor.java</span>
<span class="token comment">// {java interfaces.interfaceprocessor.StringProcessor}</span>
<span class="token keyword">package</span> <span class="token namespace">interfaces<span class="token punctuation">.</span>interfaceprocessor</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">StringProcessor</span> <span class="token keyword">extends</span> <span class="token class-name">Processor</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token class-name">String</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token class-name">Object</span> input<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1]</span>
    <span class="token class-name">String</span> <span class="token class-name">S</span> <span class="token operator">=</span> <span class="token string">&quot;If she weighs the same as a duck, she&#39;s made of wood&quot;</span><span class="token punctuation">;</span> <span class="token comment">// [2]</span>
    
    <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// [3]</span>
        <span class="token class-name">Applicator</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Upcase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">S</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Applicator</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Downcase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">S</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Applicator</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Splitter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">S</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Upcase</span> <span class="token keyword">implements</span> <span class="token class-name">StringProcessor</span> <span class="token punctuation">{</span>
    <span class="token comment">// 返回协变类型</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token class-name">Object</span> input<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> input<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Downcase</span> <span class="token keyword">implements</span> <span class="token class-name">StringProcessor</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token class-name">Object</span> input<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> input<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Splitter</span> <span class="token keyword">implements</span> <span class="token class-name">StringProcessor</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token class-name">Object</span> input<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> input<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Using Processor Upcase
IF SHE WEIGHS THE SAME AS A DUCK, SHE&#39;S MADE OF WOOD
Using Processor Downcase
if she weighs the same as a duck, she&#39;s made of wood
Using Processor Splitter
[If, she, weighs, the, same, as, a, duck,, she&#39;s, made, of, wood]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>[1] 该声明不是必要的，即使移除它，编译器也不会报错。但是注意这里的协变返回类型从 Object 变成了 String。</p><p>[2] S 自动就是 final 和 static 的，因为它是在接口中定义的。</p><p>[3] 可以在接口中定义 <code>main()</code> 方法。</p></blockquote><p>这种方式运作得很好，然而你经常遇到的情况是无法修改类。例如在电子滤波器的例子中，类库是被发现而不是创建的。在这些情况下，可以使用<em>适配器</em>设计模式。适配器允许代码接受已有的接口产生需要的接口，如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// interfaces/interfaceprocessor/FilterProcessor.java</span>
<span class="token comment">// {java interfaces.interfaceprocessor.FilterProcessor}</span>
<span class="token keyword">package</span> <span class="token namespace">interfaces<span class="token punctuation">.</span>interfaceprocessor</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">interfaces<span class="token punctuation">.</span>filters<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">FilterAdapter</span> <span class="token keyword">implements</span> <span class="token class-name">Processor</span> <span class="token punctuation">{</span>
    <span class="token class-name">Filter</span> filter<span class="token punctuation">;</span>
    
    <span class="token class-name">FilterAdapter</span><span class="token punctuation">(</span><span class="token class-name">Filter</span> filter<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>filter <span class="token operator">=</span> filter<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> filter<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Waveform</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token class-name">Object</span> input<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> filter<span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">Waveform</span><span class="token punctuation">)</span> input<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FilterProcessor</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Waveform</span> w <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Waveform</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Applicator</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FilterAdapter</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">LowPass</span><span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> w<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Applicator</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FilterAdapter</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">HighPass</span><span class="token punctuation">(</span><span class="token number">2.0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> w<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Applicator</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FilterAdapter</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BandPass</span><span class="token punctuation">(</span><span class="token number">3.0</span><span class="token punctuation">,</span> <span class="token number">4.0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> w<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Using Processor LowPass
Waveform 0
Using Processor HighPass
Waveform 0
Using Processor BandPass
Waveform 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这种使用适配器的方式中，<strong>FilterAdapter</strong> 的构造器接受已有的接口 <strong>Filter</strong>，继而产生需要的 <strong>Processor</strong> 接口的对象。你可能还注意到 <strong>FilterAdapter</strong> 中使用了委托。</p><p>协变允许我们从 <code>process()</code> 方法中产生一个 <strong>Waveform</strong> 而非 <strong>Object</strong> 对象。</p><p>将接口与实现解耦使得接口可以应用于多种不同的实现，因而代码更具可复用性。</p>`,25),f=a('<h2 id="多接口结合" tabindex="-1"><a class="header-anchor" href="#多接口结合" aria-hidden="true">#</a> 多接口结合</h2><p>接口没有任何实现——也就是说，没有任何与接口相关的存储——因此无法阻止结合的多接口。这是有价值的，因为你有时需要表示“一个 <strong>x</strong> 是一个 <strong>a</strong> 和一个 <strong>b</strong> 以及一个 <strong>c</strong>”。</p><figure><img src="'+l+`" alt="类图" tabindex="0" loading="lazy"><figcaption>类图</figcaption></figure><p>派生类并不要求必须继承自抽象的或“具体的”（没有任何抽象方法）的基类。如果继承一个非接口的类，那么只能继承一个类，其余的基元素必须都是接口。需要将所有的接口名称置于 <strong>implements</strong> 关键字之后且用逗号分隔。可以有任意多个接口，并可以向上转型为每个接口，因为每个接口都是独立的类型。下例展示了一个由多个接口组合而成的具体类产生的新类：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// interfaces/Adventure.java</span>
<span class="token comment">// Multiple interfaces</span>
<span class="token keyword">interface</span> <span class="token class-name">CanFight</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">fight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">CanSwim</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">swim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">CanFly</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ActionCharacter</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Hero</span> <span class="token keyword">extends</span> <span class="token class-name">ActionCharacter</span> <span class="token keyword">implements</span> <span class="token class-name">CanFight</span><span class="token punctuation">,</span> <span class="token class-name">CanSwim</span><span class="token punctuation">,</span> <span class="token class-name">CanFly</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">swim</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Adventure</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token class-name">CanFight</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        x<span class="token punctuation">.</span><span class="token function">fight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">u</span><span class="token punctuation">(</span><span class="token class-name">CanSwim</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        x<span class="token punctuation">.</span><span class="token function">swim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">v</span><span class="token punctuation">(</span><span class="token class-name">CanFly</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        x<span class="token punctuation">.</span><span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">w</span><span class="token punctuation">(</span><span class="token class-name">ActionCharacter</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        x<span class="token punctuation">.</span><span class="token function">fight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Hero</span> h <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Hero</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">t</span><span class="token punctuation">(</span>h<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Treat it as a CanFight</span>
        <span class="token function">u</span><span class="token punctuation">(</span>h<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Treat it as a CanSwim</span>
        <span class="token function">v</span><span class="token punctuation">(</span>h<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Treat it as a CanFly</span>
        <span class="token function">w</span><span class="token punctuation">(</span>h<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Treat it as an ActionCharacter</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类 <strong>Hero</strong> 结合了具体类 <strong>ActionCharacter</strong> 和接口 <strong>CanFight</strong>、<strong>CanSwim</strong> 和 <strong>CanFly</strong>。当通过这种方式结合具体类和接口时，需要将具体类放在前面，后面跟着接口（否则编译器会报错）。</p><p>接口 <strong>CanFight</strong> 和类 <strong>ActionCharacter</strong> 中的 <code>fight()</code> 方法签名相同，而在类 Hero 中也没有提供 <code>fight()</code> 的定义。可以扩展一个接口，但是得到的是另一个接口。当想创建一个对象时，所有的定义必须首先都存在。类 <strong>Hero</strong> 中没有显式地提供 <code>fight()</code> 的定义，是由于该方法在类 <strong>ActionCharacter</strong> 中已经定义过，这样才使得创建 <strong>Hero</strong> 对象成为可能。</p><p>在类 <strong>Adventure</strong> 中可以看到四个方法，它们把不同的接口和具体类作为参数。当创建一个 <strong>Hero</strong> 对象时，它可以被传入这些方法中的任意一个，意味着它可以依次向上转型为每个接口。Java 中这种接口的设计方式，使得程序员不需要付出特别的努力。</p><p>记住，前面例子展示了使用接口的核心原因之一：为了能够向上转型为多个基类型（以及由此带来的灵活性）。然而，使用接口的第二个原因与使用抽象基类相同：防止客户端程序员创建这个类的对象，确保这仅仅只是一个接口。这带来了一个问题：应该使用接口还是抽象类呢？如果创建不带任何方法定义或成员变量的基类，就选择接口而不是抽象类。事实上，如果知道某事物是一个基类，可以考虑用接口实现它（这个主题在本章总结会再次讨论）。</p>`,9),h=a(`<h2 id="使用继承扩展接口" tabindex="-1"><a class="header-anchor" href="#使用继承扩展接口" aria-hidden="true">#</a> 使用继承扩展接口</h2><p>通过继承，可以很容易在接口中增加方法声明，还可以在新接口中结合多个接口。这两种情况都可以得到新接口，如下例所示：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// interfaces/HorrorShow.java</span>
<span class="token comment">// Extending an interface with inheritance</span>
<span class="token keyword">interface</span> <span class="token class-name">Monster</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">menace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">DangerousMonster</span> <span class="token keyword">extends</span> <span class="token class-name">Monster</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Lethal</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">kill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">DragonZilla</span> <span class="token keyword">implements</span> <span class="token class-name">DangerousMonster</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">menace</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Vampire</span> <span class="token keyword">extends</span> <span class="token class-name">DangerousMonster</span><span class="token punctuation">,</span> <span class="token class-name">Lethal</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">drinkBlood</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">VeryBadVampire</span> <span class="token keyword">implements</span> <span class="token class-name">Vampire</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">menace</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">kill</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">drinkBlood</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HorrorShow</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">u</span><span class="token punctuation">(</span><span class="token class-name">Monster</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        b<span class="token punctuation">.</span><span class="token function">menace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">v</span><span class="token punctuation">(</span><span class="token class-name">DangerousMonster</span> d<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        d<span class="token punctuation">.</span><span class="token function">menace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        d<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">w</span><span class="token punctuation">(</span><span class="token class-name">Lethal</span> l<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        l<span class="token punctuation">.</span><span class="token function">kill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">DangerousMonster</span> barney <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DragonZilla</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">u</span><span class="token punctuation">(</span>barney<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">v</span><span class="token punctuation">(</span>barney<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Vampire</span> vlad <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VeryBadVampire</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">u</span><span class="token punctuation">(</span>vlad<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">v</span><span class="token punctuation">(</span>vlad<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">w</span><span class="token punctuation">(</span>vlad<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接口 <strong>DangerousMonster</strong> 是 <strong>Monster</strong> 简单扩展的一个新接口，类 <strong>DragonZilla</strong> 实现了这个接口。</p><p><strong>Vampire</strong> 中使用的语法仅适用于接口继承。通常来说，<strong>extends</strong> 只能用于单一类，但是在构建接口时可以引用多个基类接口。注意到，接口名之间用逗号分隔。</p><h3 id="结合接口时的命名冲突" tabindex="-1"><a class="header-anchor" href="#结合接口时的命名冲突" aria-hidden="true">#</a> 结合接口时的命名冲突</h3><p>当实现多个接口时可能会存在一个小陷阱。在前面的例子中，<strong>CanFight</strong> 和 <strong>ActionCharacter</strong> 具有完全相同的 <code>fight()</code> 方法。完全相同的方法没有问题，但是如果它们的签名或返回类型不同会怎么样呢？这里有一个例子：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// interfaces/InterfaceCollision.java</span>
<span class="token keyword">interface</span> <span class="token class-name">I1</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">I2</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">I3</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">C</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">C2</span> <span class="token keyword">implements</span> <span class="token class-name">I1</span><span class="token punctuation">,</span> <span class="token constant">I2</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>  <span class="token comment">// 重载</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">C3</span> <span class="token keyword">extends</span> <span class="token class-name">C</span> <span class="token keyword">implements</span> <span class="token class-name">I2</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 重载</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">C4</span> <span class="token keyword">extends</span> <span class="token class-name">C</span> <span class="token keyword">implements</span> <span class="token class-name">I3</span> <span class="token punctuation">{</span>
    <span class="token comment">// 完全相同，没问题</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 方法的返回类型不同</span>
<span class="token comment">//- class C5 extends C implements I1 {}</span>
<span class="token comment">//- interface I4 extends I1, I3 {}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>覆写、实现和重载令人不快地搅和在一起带来了困难。同时，重载方法仅根据返回类型是区分不了的。当不注释最后两行时，报错信息如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>error: C5 is not abstract and does not override abstract
method f() in I1
class C5 extends C implements I1 {}
error: types I3 and I1 are incompatible; both define f(),
but with unrelated return types
interfacce I4 extends I1, I3 {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当打算组合接口时，在不同的接口中使用相同的方法名通常会造成代码可读性的混乱，尽量避免这种情况。</p>`,11),S=a(`<h2 id="接口适配" tabindex="-1"><a class="header-anchor" href="#接口适配" aria-hidden="true">#</a> 接口适配</h2><p>接口最吸引人的原因之一是相同的接口可以有多个实现。在简单情况下体现在一个方法接受接口作为参数，该接口的实现和传递对象则取决于方法的使用者。</p><p>因此，接口的一种常见用法是前面提到的<em>策略</em>设计模式。编写一个方法执行某些操作并接受一个指定的接口作为参数。可以说：“只要对象遵循接口，就可以调用方法” ，这使得方法更加灵活，通用，并更具可复用性。</p><p>例如，类 <strong>Scanner</strong> 的构造器接受的是一个 <strong>Readable</strong> 接口（在“字符串”一章中学习更多相关内容）。你会发现 <strong>Readable</strong> 没有用作 Java 标准库中其他任何方法的参数——它是单独为 <strong>Scanner</strong> 创建的，因此 <strong>Scanner</strong> 没有将其参数限制为某个特定类。通过这种方式，<strong>Scanner</strong> 可以与更多的类型协作。如果你创建了一个新类并想让 <strong>Scanner</strong> 作用于它，就让它实现 <strong>Readable</strong> 接口，像这样：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// interfaces/RandomStrings.java</span>
<span class="token comment">// Implementing an interface to conform to a method</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>nio<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RandomStrings</span> <span class="token keyword">implements</span> <span class="token class-name">Readable</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Random</span> rand <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Random</span><span class="token punctuation">(</span><span class="token number">47</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token constant">CAPITALS</span> <span class="token operator">=</span> <span class="token string">&quot;ABCDEFGHIJKLMNOPQRSTUVWXYZ&quot;</span><span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token constant">LOWERS</span> <span class="token operator">=</span> <span class="token string">&quot;abcdefghijklmnopqrstuvwxyz&quot;</span><span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token constant">VOWELS</span> <span class="token operator">=</span> <span class="token string">&quot;aeiou&quot;</span><span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> count<span class="token punctuation">;</span>
    
    <span class="token keyword">public</span> <span class="token class-name">RandomStrings</span><span class="token punctuation">(</span><span class="token keyword">int</span> count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">=</span> count<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">read</span><span class="token punctuation">(</span><span class="token class-name">CharBuffer</span> cb<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>count<span class="token operator">--</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// indicates end of input</span>
        <span class="token punctuation">}</span>
        cb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token constant">CAPITALS</span><span class="token punctuation">[</span>rand<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token constant">CAPITALS</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            cb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token constant">VOWELS</span><span class="token punctuation">[</span>rand<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token constant">VOWELS</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            cb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token constant">LOWERS</span><span class="token punctuation">[</span>rand<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token constant">LOWERS</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        cb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">// Number of characters appended</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Scanner</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">RandomStrings</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Yazeruyac
Fowenucor
Goeazimom
Raeuuacio
Nuoadesiw
Hageaikux
Ruqicibui
Numasetih
Kuuuuozog
Waqizeyoy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Readable</strong> 接口只需要实现 <code>read()</code> 方法（注意 <code>@Override</code> 注解的突出方法）。在 <code>read()</code> 方法里，将输入内容添加到 <strong>CharBuffer</strong> 参数中（有多种方法可以实现，查看 <strong>CharBuffer</strong> 文档），或在没有输入时返回 <strong>-1</strong>。</p><p>假设你有一个类没有实现 <strong>Readable</strong> 接口，怎样才能让 <strong>Scanner</strong> 作用于它呢？下面是一个产生随机浮点数的例子：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// interfaces/RandomDoubles.java</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">RandomDoubles</span> <span class="token punctuation">{</span>
    <span class="token class-name">Random</span> <span class="token constant">RAND</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Random</span><span class="token punctuation">(</span><span class="token number">47</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">default</span> <span class="token keyword">double</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token constant">RAND</span><span class="token punctuation">.</span><span class="token function">nextDouble</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">RandomDoubles</span> rd <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RandomDoubles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">7</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>rd<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>0.7271157860730044 
0.5309454508634242 
0.16020656493302599 
0.18847866977771732 
0.5166020801268457 
0.2678662084200585 
0.2613610344283964
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以再次使用适配器模式，但这里适配器类可以实现两个接口。因此，通过关键字 <strong>interface</strong> 提供的多继承，我们可以创建一个既是 <strong>RandomDoubles</strong>，又是 <strong>Readable</strong> 的类：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// interfaces/AdaptedRandomDoubles.java</span>
<span class="token comment">// creating an adapter with inheritance</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>nio<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AdaptedRandomDoubles</span> <span class="token keyword">implements</span> <span class="token class-name">RandomDoubles</span><span class="token punctuation">,</span> <span class="token class-name">Readable</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> count<span class="token punctuation">;</span>
    
    <span class="token keyword">public</span> <span class="token class-name">AdaptedRandomDoubles</span><span class="token punctuation">(</span><span class="token keyword">int</span> count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">=</span> count<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">read</span><span class="token punctuation">(</span><span class="token class-name">CharBuffer</span> cb<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>count<span class="token operator">--</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">String</span> result <span class="token operator">=</span> <span class="token class-name">Double</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>
        cb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> result<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Scanner</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">AdaptedRandomDoubles</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">hasNextDouble</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">nextDouble</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>0.7271157860730044 0.5309454508634242 
0.16020656493302599 0.18847866977771732 
0.5166020801268457 0.2678662084200585 
0.2613610344283964
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为你可以以这种方式在已有类中增加新接口，所以这就意味着一个接受接口类型的方法提供了一种让任何类都可以与该方法进行适配的方式。这就是使用接口而不是类的强大之处。</p>`,17),x=a(`<h2 id="接口字段" tabindex="-1"><a class="header-anchor" href="#接口字段" aria-hidden="true">#</a> 接口字段</h2><p>因为接口中的字段都自动是 <strong>static</strong> 和 <strong>final</strong> 的，所以接口就成为了创建一组常量的方便的工具。在 Java 5 之前，这是产生与 C 或 C++ 中的 enum (枚举类型) 具有相同效果的唯一方式。所以你可能在 Java 5 之前的代码中看到：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// interfaces/Months.java</span>
<span class="token comment">// Using interfaces to create groups of constants</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Months</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> 
    <span class="token constant">JANUARY</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token constant">FEBRUARY</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token constant">MARCH</span> <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token constant">APRIL</span> <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token constant">MAY</span> <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token constant">JUNE</span> <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token constant">JULY</span> <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token constant">AUGUST</span> <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token constant">SEPTEMBER</span> <span class="token operator">=</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token constant">OCTOBER</span> <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token constant">NOVEMBER</span> <span class="token operator">=</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token constant">DECEMBER</span> <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意 Java 中使用大写字母的风格定义具有初始化值的 <strong>static</strong> <strong>final</strong> 变量。接口中的字段自动是 <strong>public</strong> 的，所以没有显式指明这点。</p><p>自 Java 5 开始，我们有了更加强大和灵活的关键字 <strong>enum</strong>，那么在接口中定义常量组就显得没什么意义了。然而当你阅读遗留的代码时，在很多场合你还会碰到这种旧的习惯用法。在“枚举”一章中你会学习到更多关于枚举的内容。</p><h3 id="初始化接口中的字段" tabindex="-1"><a class="header-anchor" href="#初始化接口中的字段" aria-hidden="true">#</a> 初始化接口中的字段</h3><p>接口中定义的字段不能是“空 <strong>final</strong>&quot;，但是可以用非常量表达式初始化。例如：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// interfaces/RandVals.java</span>
<span class="token comment">// Initializing interface fields with</span>
<span class="token comment">// non-constant initializers</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">RandVals</span> <span class="token punctuation">{</span>
    <span class="token class-name">Random</span> <span class="token constant">RAND</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Random</span><span class="token punctuation">(</span><span class="token number">47</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token constant">RANDOM_INT</span> <span class="token operator">=</span> <span class="token constant">RAND</span><span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">long</span> <span class="token constant">RANDOM_LONG</span> <span class="token operator">=</span> <span class="token constant">RAND</span><span class="token punctuation">.</span><span class="token function">nextLong</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token keyword">float</span> <span class="token constant">RANDOM_FLOAT</span> <span class="token operator">=</span> <span class="token constant">RAND</span><span class="token punctuation">.</span><span class="token function">nextLong</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token keyword">double</span> <span class="token constant">RANDOM_DOUBLE</span> <span class="token operator">=</span> <span class="token constant">RAND</span><span class="token punctuation">.</span><span class="token function">nextDouble</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为字段是 <strong>static</strong> 的，所以它们在类第一次被加载时初始化，这发生在任何字段首次被访问时。下面是个简单的测试：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// interfaces/TestRandVals.java</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestRandVals</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">RandVals</span><span class="token punctuation">.</span><span class="token constant">RANDOM_INT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">RandVals</span><span class="token punctuation">.</span><span class="token constant">RANDOM_LONG</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">RandVals</span><span class="token punctuation">.</span><span class="token constant">RANDOM_FLOAT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">RandVals</span><span class="token punctuation">.</span><span class="token constant">RANDOM_DOUBLE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>8
-32032247016559954
-8.5939291E18
5.779976127815049
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些字段不是接口的一部分，它们的值被存储在接口的静态存储区域中。</p>`,13),j=a(`<h2 id="接口嵌套" tabindex="-1"><a class="header-anchor" href="#接口嵌套" aria-hidden="true">#</a> 接口嵌套</h2><p>接口可以嵌套在类或其他接口中。下面揭示一些有趣的特性：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// interfaces/nesting/NestingInterfaces.java</span>
<span class="token comment">// {java interfaces.nesting.NestingInterfaces}</span>
<span class="token keyword">package</span> <span class="token namespace">interfaces<span class="token punctuation">.</span>nesting</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
    <span class="token keyword">interface</span> <span class="token class-name">B</span> <span class="token punctuation">{</span>
        <span class="token keyword">void</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BImp</span> <span class="token keyword">implements</span> <span class="token class-name">B</span> <span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BImp2</span> <span class="token keyword">implements</span> <span class="token class-name">B</span> <span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">C</span> <span class="token punctuation">{</span>
        <span class="token keyword">void</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">class</span> <span class="token class-name">CImp</span> <span class="token keyword">implements</span> <span class="token class-name">C</span> <span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">private</span> <span class="token keyword">class</span> <span class="token class-name">CImp2</span> <span class="token keyword">implements</span> <span class="token class-name">C</span> <span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">private</span> <span class="token keyword">interface</span> <span class="token class-name">D</span> <span class="token punctuation">{</span>
        <span class="token keyword">void</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">private</span> <span class="token keyword">class</span> <span class="token class-name">DImp</span> <span class="token keyword">implements</span> <span class="token class-name">D</span> <span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DImp2</span> <span class="token keyword">implements</span> <span class="token class-name">D</span> <span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token class-name">D</span> <span class="token function">getD</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">DImp2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">private</span> <span class="token class-name">D</span> dRef<span class="token punctuation">;</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">receiveD</span><span class="token punctuation">(</span><span class="token class-name">D</span> d<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        dRef <span class="token operator">=</span> d<span class="token punctuation">;</span>
        dRef<span class="token punctuation">.</span><span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">E</span> <span class="token punctuation">{</span>
    <span class="token keyword">interface</span> <span class="token class-name">G</span> <span class="token punctuation">{</span>
        <span class="token keyword">void</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// Redundant &quot;public&quot;</span>
    <span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">H</span> <span class="token punctuation">{</span>
        <span class="token keyword">void</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">void</span> <span class="token function">g</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// Cannot be private within an interface</span>
    <span class="token comment">//- private interface I {}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">NestingInterfaces</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BImp</span> <span class="token keyword">implements</span> <span class="token class-name">A<span class="token punctuation">.</span>B</span> <span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">class</span> <span class="token class-name">CImp</span> <span class="token keyword">implements</span> <span class="token class-name">A<span class="token punctuation">.</span>C</span> <span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// Cannot implements a private interface except</span>
    <span class="token comment">// within that interface&#39;s defining class:</span>
    <span class="token comment">//- class DImp implements A.D {</span>
    <span class="token comment">//- public void f() {}</span>
    <span class="token comment">//- }</span>
    <span class="token keyword">class</span> <span class="token class-name">EImp</span> <span class="token keyword">implements</span> <span class="token class-name">E</span> <span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">g</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">class</span> <span class="token class-name">EGImp</span> <span class="token keyword">implements</span> <span class="token class-name">E<span class="token punctuation">.</span>G</span> <span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">class</span> <span class="token class-name">EImp2</span> <span class="token keyword">implements</span> <span class="token class-name">E</span> <span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">g</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        
        <span class="token keyword">class</span> <span class="token class-name">EG</span> <span class="token keyword">implements</span> <span class="token class-name">E<span class="token punctuation">.</span>G</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">A</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// Can&#39;t access to A.D:</span>
        <span class="token comment">//- A.D ad = a.getD();</span>
        <span class="token comment">// Doesn&#39;t return anything but A.D:</span>
        <span class="token comment">//- A.DImp2 di2 = a.getD();</span>
        <span class="token comment">// cannot access a member of the interface:</span>
        <span class="token comment">//- a.getD().f();</span>
        <span class="token comment">// Only another A can do anything with getD():</span>
        <span class="token class-name">A</span> a2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        a2<span class="token punctuation">.</span><span class="token function">receiveD</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">getD</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在类中嵌套接口的语法是相当显而易见的。就像非嵌套接口一样，它们具有 <strong>public</strong> 或包访问权限的可见性。</p><p>作为一种新添加的方式，接口也可以是 <strong>private</strong> 的，例如 <strong>A.D</strong>（同样的语法同时适用于嵌套接口和嵌套类）。那么 <strong>private</strong> 嵌套接口有什么好处呢？你可能猜测它只是被用来实现一个 <strong>private</strong> 内部类，就像 <strong>DImp</strong>。然而 <strong>A.DImp2</strong> 展示了它可以被实现为 <strong>public</strong> 类，但是 <strong>A.DImp2</strong> 只能被自己使用，你无法说它实现了 <strong>private</strong> 接口 <strong>D</strong>，所以实现 <strong>private</strong> 接口是一种可以强制该接口中的方法定义不会添加任何类型信息（即不可以向上转型）的方式。</p><p><code>getD()</code> 方法产生了一个与 <strong>private</strong> 接口有关的窘境。它是一个 <strong>public</strong> 方法却返回了对 <strong>private</strong> 接口的引用。能对这个返回值做些什么呢？<code>main()</code> 方法里进行了一些使用返回值的尝试但都失败了。返回值必须交给有权使用它的对象，本例中另一个 <strong>A</strong> 通过 <code>receiveD()</code> 方法接受了它。</p><p>接口 <strong>E</strong> 说明了接口之间也能嵌套。然而，作用于接口的规则——尤其是，接口中的元素必须是 <strong>public</strong> 的——在此都会被严格执行，所以嵌套在另一个接口中的接口自动就是 <strong>public</strong> 的，不能指明为 <strong>private</strong>。</p><p>类 <strong>NestingInterfaces</strong> 展示了嵌套接口的不同实现方式。尤其是当实现某个接口时，并不需要实现嵌套在其内部的接口。同时，<strong>private</strong> 接口不能在定义它的类之外被实现。</p><p>添加这些特性的最初原因看起来像是出于对严格的语法一致性的考虑，但是我通常认为，一旦你了解了某种特性，就总能找到其用武之地。</p>`,9),O=a(`<h2 id="接口和工厂方法模式" tabindex="-1"><a class="header-anchor" href="#接口和工厂方法模式" aria-hidden="true">#</a> 接口和工厂方法模式</h2><p>接口是多实现的途径，而生成符合某个接口的对象的典型方式是<em>工厂方法</em>设计模式。不同于直接调用构造器，只需调用工厂对象中的创建方法就能生成对象的实现——理论上，通过这种方式可以将接口与实现的代码完全分离，使得可以透明地将某个实现替换为另一个实现。这里是一个展示工厂方法结构的例子：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// interfaces/Factories.java</span>
<span class="token keyword">interface</span> <span class="token class-name">Service</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">method1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">method2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">ServiceFactory</span> <span class="token punctuation">{</span>
    <span class="token class-name">Service</span> <span class="token function">getService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Service1</span> <span class="token keyword">implements</span> <span class="token class-name">Service</span> <span class="token punctuation">{</span>
    <span class="token class-name">Service1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// Package access</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Service1 method1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Service1 method2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Service1Factory</span> <span class="token keyword">implements</span> <span class="token class-name">ServiceFactory</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Service</span> <span class="token function">getService</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Service1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Service2</span> <span class="token keyword">implements</span> <span class="token class-name">Service</span> <span class="token punctuation">{</span>
    <span class="token class-name">Service2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// Package access</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Service2 method1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Service2 method2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Service2Factory</span> <span class="token keyword">implements</span> <span class="token class-name">ServiceFactory</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Service</span> <span class="token function">getService</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Service2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Factories</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">serviceConsumer</span><span class="token punctuation">(</span><span class="token class-name">ServiceFactory</span> fact<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Service</span> s <span class="token operator">=</span> fact<span class="token punctuation">.</span><span class="token function">getService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        s<span class="token punctuation">.</span><span class="token function">method1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        s<span class="token punctuation">.</span><span class="token function">method2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">serviceConsumer</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Service1Factory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// Services are completely interchangeable:</span>
        <span class="token function">serviceConsumer</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Service2Factory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Service1 method1
Service1 method2
Service2 method1
Service2 method2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果没有工厂方法，代码就必须在某处指定将要创建的 <strong>Service</strong> 的确切类型，从而调用恰当的构造器。</p><p>为什么要添加额外的间接层呢？一个常见的原因是创建框架。假设你正在创建一个游戏系统；例如，在相同的棋盘下国际象棋和西洋跳棋：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// interfaces/Games.java</span>
<span class="token comment">// A Game framework using Factory Methods</span>
<span class="token keyword">interface</span> <span class="token class-name">Game</span> <span class="token punctuation">{</span>
    <span class="token keyword">boolean</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">GameFactory</span> <span class="token punctuation">{</span>
    <span class="token class-name">Game</span> <span class="token function">getGame</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Checkers</span> <span class="token keyword">implements</span> <span class="token class-name">Game</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> moves <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">MOVES</span> <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Checkers move &quot;</span> <span class="token operator">+</span> moves<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token operator">++</span>moves <span class="token operator">!=</span> <span class="token constant">MOVES</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">CheckersFactory</span> <span class="token keyword">implements</span> <span class="token class-name">GameFactory</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Game</span> <span class="token function">getGame</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Checkers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Chess</span> <span class="token keyword">implements</span> <span class="token class-name">Game</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> moves <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">MOVES</span> <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Chess move &quot;</span> <span class="token operator">+</span> moves<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token operator">++</span>moves <span class="token operator">!=</span> <span class="token constant">MOVES</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ChessFactory</span> <span class="token keyword">implements</span> <span class="token class-name">GameFactory</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Game</span> <span class="token function">getGame</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Chess</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Games</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">playGame</span><span class="token punctuation">(</span><span class="token class-name">GameFactory</span> factory<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Game</span> s <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">getGame</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">playGame</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">CheckersFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">playGame</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ChessFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Checkers move 0
Checkers move 1
Checkers move 2
Chess move 0
Chess move 1
Chess move 2
Chess move 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果类 <strong>Games</strong> 表示一段很复杂的代码，那么这种方式意味着你可以在不同类型的游戏里复用这段代码。你可以再想象一些能够从这个模式中受益的更加精巧的游戏。</p><p>在下一章，你将会看到一种更加优雅的使用匿名内部类的工厂实现方式。</p>`,12),I=s("h2",{id:"本章小结",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#本章小结","aria-hidden":"true"},"#"),t(" 本章小结")],-1),A=s("p",null,"认为接口是好的选择，从而使用接口不用具体类，这具有诱惑性。几乎任何时候，创建类都可以替代为创建一个接口和工厂。",-1),q=s("p",null,"很多人都掉进了这个陷阱，只要有可能就创建接口和工厂。这种逻辑看起来像是可能会使用不同的实现，所以总是添加这种抽象性。这变成了一种过早的设计优化。",-1),C=s("p",null,"任何抽象性都应该是由真正的需求驱动的。当有必要时才应该使用接口进行重构，而不是到处添加额外的间接层，从而带来额外的复杂性。这种复杂性非常显著，如果你让某人去处理这种复杂性，只是因为你意识到“以防万一”而添加新接口，而没有其他具有说服力的原因——好吧，如果我碰上了这种设计，就会质疑此人所作的所有其他设计了。",-1),D=s("p",null,"恰当的原则是优先使用类而不是接口。从类开始，如果使用接口的必要性变得很明确，那么就重构。接口是一个伟大的工具，但它们容易被滥用。",-1),M=s("div",{style:{"page-break-after":"always"}},null,-1);function _(P,R){return e(),c("div",null,[k,n(" Interfaces "),d,r,v,m,n(" Abstract Classes and Methods "),b,n(" Interfaces "),y,n(" Abstract Classes vs. Interfaces "),w,n(" Complete Decoupling "),g,n(" Combining Multiple Interfaces "),f,n(" Extending an Interface with Inheritance "),h,n(" Adapting to an Interface "),S,n(" Fields in Interfaces "),x,n(" Nesting Interfaces "),j,n(" Interfaces and Factories "),O,n(" Summary "),I,A,q,C,D,n(" 分页 "),M])}const W=p(u,[["render",_],["__file","10-Interfaces.html.vue"]]);export{W as default};
