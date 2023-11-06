import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o,c as l,e as s,a as n,d as a,b as i,f as e}from"./app-8cd7c144.js";const u="/OnJava8/assets/designproxy-f7d1bfff.png",k={},d=n("p",null,"[TOC]",-1),r=n("h1",{id:"第二十五章-设计模式",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#第二十五章-设计模式","aria-hidden":"true"},"#"),a(" 第二十五章 设计模式")],-1),v=e(`<h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h2><p>最初，你可以将模式视为解决特定类问题的一种特别巧妙且有深刻见解的方法。这就像前辈已经从所有角度去解决问题，并提出了最通用，最灵活的解决方案。问题可能是你之前看到并解决过的问题，但你的解决方案可能没有你在模式中体现的那种完整性。</p><p>虽然它们被称为“设计模式”，但它们实际上并不与设计领域相关联。模式似乎与传统的分析、设计和实现的思维方式不同。相反，模式在程序中体现了一个完整的思想，因此它有时会出现在分析阶段或高级设计阶段。因为模式在代码中有一个直接的实现，所以你可能不会期望模式在低级设计或实现之前出现(而且通常在到达这些阶段之前，你不会意识到需要一个特定的模式)。</p><p>模式的基本概念也可以看作是程序设计的基本概念:添加抽象层。当你抽象一些东西的时候，就像在剥离特定的细节，而这背后最重要的动机之一是:</p><blockquote><p><strong>将易变的事物与不变的事物分开</strong></p></blockquote><p>另一种方法是，一旦你发现程序的某些部分可能因某种原因而发生变化，你要保持这些变化不会引起整个代码中其他变化。 如果代码更容易理解，那么维护起来会更容易。</p><p>通常，开发一个优雅且易维护设计中最困难的部分是发现我称之为变化的载体（也就是最易改变的地方）。这意味着找到系统中最重要的变化，换而言之，找到变化会导致最严重后果的地方。一旦发现变化载体，就可以围绕构建设计的焦点。</p><p>因此，设计模式的目标是隔离代码中的更改。 如果以这种方式去看，你已经在本书中看到了设计模式。 例如，继承可以被认为是一种设计模式（虽然是由编译器实现的）。它允许你表达所有具有相同接口的对象（即保持相同的行为）中的行为差异（这就是变化的部分）。组合也可以被视为一种模式，因为它允许你动态或静态地更改实现类的对象，从而改变类的工作方式。</p><p>你还看到了设计模式中出现的另一种模式：迭代器（Java 1.0和1.1随意地将其称为枚举; Java 2 集合才使用Iterator）。当你逐个选择元素时并逐步处理，这会隐藏集合的特定实现。迭代器允许你编写通用代码，该代码对序列中的所有元素执行操作，而不考虑序列的构建方式。因此，你的通用代码可以与任何可以生成迭代器的集合一起使用。</p><p>即使模式是非常有用的，但有些人断言：</p><blockquote><p><strong>设计模式代表语言的失败。</strong></p></blockquote><p>这是一个非常重要的见解，因为一个模式在 C++ 有意义，可能在JAVA或者其他语言中就没有意义。出于这个原因，所以一个模式可能出现在设计模式书上，不意味着应用于你的编程语言是有用的。</p><p>我认为“语言失败”这个观点是有道理的，但是我也认为这个观点过于简单化。如果你试图解决一个特定的问题，而你使用的语言没有直接提供支持你使用的技巧，你可以说这个是语言的失败。但是，你使用特定的技巧的频率的是多少呢？也许平衡是对的：当你使用特定的技巧的时候，你必须付出更多的努力，但是你又没有足够的理由去使得语言支持这个技术。另一方面，没有语言的支持，使用这种技术常常会很混乱，但是在语言支持下，你可能会改变编程方式（例如，Java 8流实现此目的）。</p><h3 id="单例模式" tabindex="-1"><a class="header-anchor" href="#单例模式" aria-hidden="true">#</a> 单例模式</h3><p>也许单例模式是最简单的设计模式，它是一种提供一个且只有一个对象实例的方法。这在java库中使用，但是这有个更直接的示例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// patterns/SingletonPattern.java</span>
<span class="token keyword">interface</span> <span class="token class-name">Resource</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">setValue</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
* 由于这不是从Cloneable基类继承而且没有添加可克隆性，
* 因此将其设置为final可防止通过继承添加可克隆性。
* 这也实现了线程安全的延迟初始化：
*/</span>
<span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">Singleton</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">ResourceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">Resource</span> <span class="token punctuation">{</span>
        <span class="token keyword">private</span> <span class="token keyword">int</span> i<span class="token punctuation">;</span>
        <span class="token keyword">private</span> <span class="token class-name">ResourceImpl</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>i <span class="token operator">=</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">int</span> <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">setValue</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            i <span class="token operator">=</span> x<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">ResourceHolder</span> <span class="token punctuation">{</span>
        <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Resource</span> resource <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ResourceImpl</span><span class="token punctuation">(</span><span class="token number">47</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Resource</span> <span class="token function">getResource</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">ResourceHolder</span><span class="token punctuation">.</span>resource<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SingletonPattern</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Resource</span> r <span class="token operator">=</span> <span class="token class-name">Singleton</span><span class="token punctuation">.</span><span class="token function">getResource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Resource</span> s2 <span class="token operator">=</span> <span class="token class-name">Singleton</span><span class="token punctuation">.</span><span class="token function">getResource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        s2<span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>     
             <span class="token comment">// 不能这么做，会发生：compile-time error（编译时错误）.     </span>
             <span class="token comment">// Singleton s3 = (Singleton)s2.clone();    </span>
             <span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>      
                 <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>    
             <span class="token punctuation">}</span>  
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token comment">/* Output: 47 9 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建单例的关键是防止客户端程序员直接创建对象。 在这里，这是通过在Singleton类中将Resource的实现作为私有类来实现的。</p><p>此时，你将决定如何创建对象。在这里，它是按需创建的，在第一次访问的时候创建。 该对象是私有的，只能通过public getResource（）方法访问。</p><p>懒惰地创建对象的原因是它嵌套的私有类resourceHolder在首次引用之前不会加载（在getResource（）中）。当Resource对象加载的时候，静态初始化块将被调用。由于JVM的工作方式，这种静态初始化是线程安全的。为保证线程安全，Resource中的getter和setter是同步的。</p><h3 id="模式分类" tabindex="-1"><a class="header-anchor" href="#模式分类" aria-hidden="true">#</a> 模式分类</h3><p>“设计模式”一书讨论了23种不同的模式，分为以下三种类别（所有这些模式都围绕着可能变化的特定方面）。</p><ol><li><p><strong>创建型</strong>：如何创建对象。 这通常涉及隔离对象创建的细节，这样你的代码就不依赖于具体的对象的类型，因此在添加新类型的对象时不会更改。单例模式（Singleton）被归类为创作模式，本章稍后你将看到Factory Method的示例。</p></li><li><p><strong>构造型</strong>：设计对象以满足特定的项目约束。它们处理对象与其他对象连接的方式，以确保系统中的更改不需要更改这些连接。</p></li><li><p><strong>行为型</strong>：处理程序中特定类型的操作的对象。这些封装要执行的过程，例如解释语言、实现请求、遍历序列(如在迭代器中)或实现算法。本章包含观察者和访问者模式的例子。</p></li></ol><p>《设计模式》一书中每个设计模式都有单独的一个章节，每个章节都有一个或者多个例子，通常使用C++，但有时也使用SmallTalk。 本章不重复设计模式中显示的所有模式，因为该书独立存在，应单独研究。 相反，你会看到一些示例，可以为你提供关于模式的理解以及它们如此重要的原因。</p>`,23),m=e(`<h2 id="构建应用程序框架" tabindex="-1"><a class="header-anchor" href="#构建应用程序框架" aria-hidden="true">#</a> 构建应用程序框架</h2><p>应用程序框架允许您从一个类或一组类开始，创建一个新的应用程序，重用现有类中的大部分代码，并根据需要覆盖一个或多个方法来定制应用程序。</p><p><strong>模板方法模式</strong></p><p>应用程序框架中的一个基本概念是模板方法模式，它通常隐藏在底层，通过调用基类中的各种方法来驱动应用程序(为了创建应用程序，您已经覆盖了其中的一些方法)。</p><p>模板方法模式的一个重要特性是它是在基类中定义的，并且不能更改。它有时是一个 <strong>private</strong> 方法，但实际上总是 <strong>final</strong>。它调用其他基类方法(您覆盖的那些)来完成它的工作,但是它通常只作为初始化过程的一部分被调用(因此框架使用者不一定能够直接调用它)。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// patterns/TemplateMethod.java
// Simple demonstration of Template Method

abstract class ApplicationFramework {
    ApplicationFramework() {
        templateMethod();
    }

    abstract void customize1();

    abstract void customize2();

    // &quot;private&quot; means automatically &quot;final&quot;:
    private void templateMethod() {
        IntStream.range(0, 5).forEach(
                n -&gt; {
                    customize1();
                    customize2();
                });
    }
}

// Create a new &quot;application&quot;:
class MyApp extends ApplicationFramework {
    @Override
    void customize1() {
        System.out.print(&quot;Hello &quot;);
    }

    @Override
    void customize2() {
        System.out.println(&quot;World!&quot;);
    }
}

public class TemplateMethod {
    public static void main(String[] args) {
        new MyApp();
    }
}
/* Output:
Hello World!
Hello World!
Hello World!
Hello World!
Hello World!
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>基类构造函数负责执行必要的初始化，然后启动运行应用程序的“engine”(模板方法模式)(在GUI应用程序中，这个“engine”是主事件循环)。框架使用者只提供 <strong>customize1()</strong> 和 <strong>customize2()</strong> 的定义，然后“应用程序”已经就绪运行。</p><figure><img src="`+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',8),b=e(`<h2 id="面向实现" tabindex="-1"><a class="header-anchor" href="#面向实现" aria-hidden="true">#</a> 面向实现</h2><p>代理模式和桥接模式都提供了在代码中使用的代理类;完成工作的真正类隐藏在这个代理类的后面。当您在代理中调用一个方法时，它只是反过来调用实现类中的方法。这两种模式非常相似，所以代理模式只是桥接模式的一种特殊情况。人们倾向于将两者合并,称为代理模式，但是术语“代理”有一个长期的和专门的含义，这可能解释了这两种模式不同的原因。基本思想很简单:从基类派生代理，同时派生一个或多个提供实现的类:创建代理对象时，给它一个可以调用实际工作类的方法的实现。</p><p>在结构上，代理模式和桥接模式的区别很简单:代理模式只有一个实现，而桥接模式有多个实现。在设计模式中被认为是不同的:代理模式用于控制对其实现的访问，而桥接模式允许您动态更改实现。但是，如果您扩展了“控制对实现的访问”的概念，那么这两者就可以完美地结合在一起</p><p><strong>代理模式</strong></p><p>如果我们按照上面的关系图实现，它看起来是这样的:</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// patterns/ProxyDemo.java
// Simple demonstration of the Proxy pattern
interface ProxyBase {
    void f();

    void g();

    void h();
}

class Proxy implements ProxyBase {
    private ProxyBase implementation;

    Proxy() {
        implementation = new Implementation();
    }
    // Pass method calls to the implementation:
    @Override
    public void f() { implementation.f(); }
    @Override
    public void g() { implementation.g(); }
    @Override
    public void h() { implementation.h(); }
}

class Implementation implements ProxyBase {
    public void f() {
        System.out.println(&quot;Implementation.f()&quot;);
    }

    public void g() {
        System.out.println(&quot;Implementation.g()&quot;);
    }

    public void h() {
        System.out.println(&quot;Implementation.h()&quot;);
    }
}

public class ProxyDemo {
    public static void main(String[] args) {
        Proxy p = new Proxy();
        p.f();
        p.g();
        p.h();
    }
}
/*
Output:
Implementation.f()
Implementation.g()
Implementation.h()
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>具体实现不需要与代理对象具有相同的接口;只要代理对象以某种方式“代表具体实现的方法调用，那么基本思想就算实现了。然而，拥有一个公共接口是很方便的，因此具体实现必须实现代理对象调用的所有方法。</p><p><strong>状态模式</strong></p><p>状态模式向代理对象添加了更多的实现，以及在代理对象的生命周期内从一个实现切换到另一种实现的方法:</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// patterns/StateDemo.java // Simple demonstration of the State pattern
interface StateBase {
    void f();

    void g();

    void h();

    void changeImp(StateBase newImp);
}

class State implements StateBase {
    private StateBase implementation;

    State(StateBase imp) {
        implementation = imp;
    }

    @Override
    public void changeImp(StateBase newImp) {
        implementation = newImp;
    }

    // Pass method calls to the implementation:
    @Override
    public void f() {
        implementation.f();
    }

    @Override
    public void g() {
        implementation.g();
    }

    @Override
    public void h() {
        implementation.h();
    }
}

class Implementation1 implements StateBase {
    @Override
    public void f() {
        System.out.println(&quot;Implementation1.f()&quot;);
    }

    @Override
    public void g() {
        System.out.println(&quot;Implementation1.g()&quot;);
    }

    @Override
    public void h() {
        System.out.println(&quot;Implementation1.h()&quot;);
    }

    @Override
    public void changeImp(StateBase newImp) {
    }
}

class Implementation2 implements StateBase {
    @Override
    public void f() {
        System.out.println(&quot;Implementation2.f()&quot;);
    }

    @Override
    public void g() {
        System.out.println(&quot;Implementation2.g()&quot;);
    }

    @Override
    public void h() {
        System.out.println(&quot;Implementation2.h()&quot;);
    }

    @Override
    public void changeImp(StateBase newImp) {
    }
}

public class StateDemo {
    static void test(StateBase b) {
        b.f();
        b.g();
        b.h();
    }

    public static void main(String[] args) {
        StateBase b =
                new State(new Implementation1());
        test(b);
        b.changeImp(new Implementation2());
        test(b);
    }
}
/* Output:
Implementation1.f()
Implementation1.g()
Implementation1.h()
Implementation2.f()
Implementation2.g()
Implementation2.h()
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在main()中，首先使用第一个实现，然后改变成第二个实现。代理模式和状态模式的区别在于它们解决的问题。设计模式中描述的代理模式的常见用途如下:</p><ol><li><p>远程代理。它在不同的地址空间中代理对象。远程方法调用(RMI)编译器rmic会自动为您创建一个远程代理。</p></li><li><p>虚拟代理。这提供了“懒加载”来根据需要创建“昂贵”的对象。</p></li><li><p>保护代理。当您希望对代理对象有权限访问控制时使用。</p></li><li><p>智能引用。要在被代理的对象被访问时添加其他操作。例如，跟踪特定对象的引用数量，来实现写时复制用法，和防止对象别名。一个更简单的例子是跟踪特定方法的调用数量。您可以将Java引用视为一种保护代理，因为它控制在堆上实例对象的访问(例如，确保不使用空引用)。</p></li></ol><p>在设计模式中，代理模式和桥接模式并不是相互关联的，因为它们被赋予(我认为是任意的)不同的结构。桥接模式,特别是使用一个单独的实现，但这似乎对我来说是不必要的,除非你确定该实现是你无法控制的(当然有可能，但是如果您编写所有代码，那么没有理由不从单基类的优雅中受益)。此外，只要代理对象控制对其“前置”对象的访问，代模式理就不需要为其实现使用相同的基类。不管具体情况如何，在代理模式和桥接模式中，代理对象都将方法调用传递给具体实现对象。</p><p><strong>状态机</strong></p><p>桥接模式允许程序员更改实现，状态机利用一个结构来自动地将实现更改到下一个。当前实现表示系统所处的状态，系统在不同状态下的行为不同(因为它使用桥接模式)。基本上，这是一个利用对象的“状态机”。将系统从一种状态移动到另一种状态的代码通常是模板方法模式，如下例所示:</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// patterns/state/StateMachineDemo.java
// The StateMachine pattern and Template method
// {java patterns.state.StateMachineDemo}
package patterns.state;

import onjava.Nap;

interface State {
    void run();
}

abstract class StateMachine {
    protected State currentState;

    protected abstract boolean changeState();

    // Template method:
    protected final void runAll() {
        while (changeState()) // Customizable
            currentState.run();
    }
}

// A different subclass for each state:

class Wash implements State {
    @Override
    public void run() {
        System.out.println(&quot;Washing&quot;);
        new Nap(0.5);
    }
}

class Spin implements State {
    @Override
    public void run() {
        System.out.println(&quot;Spinning&quot;);
        new Nap(0.5);
    }
}

class Rinse implements State {
    @Override
    public void run() {
        System.out.println(&quot;Rinsing&quot;);
        new Nap(0.5);
    }
}

class Washer extends StateMachine {
    private int i = 0;
    // The state table:
    private State[] states = {
            new Wash(), new Spin(),
            new Rinse(), new Spin(),
    };

    Washer() {
        runAll();
    }

    @Override
    public boolean changeState() {
        if (i &lt; states.length) {
            // Change the state by setting the
            // surrogate reference to a new object:
            currentState = states[i++];
            return true;
        } else
            return false;
    }
}

public class StateMachineDemo {
    public static void main(String[] args) {
        new Washer();
    }
}
/* Output:
Washing
Spinning
Rinsing
Spinning
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这里，控制状态的类(本例中是状态机)负责决定下一个状态。然而，状态对象本身也可以决定下一步移动到什么状态，通常基于系统的某种输入。这是更灵活的解决方案。</p>`,17),y=e(`<h2 id="工厂模式" tabindex="-1"><a class="header-anchor" href="#工厂模式" aria-hidden="true">#</a> 工厂模式</h2><p>当你发现必须将新类型添加到系统中时，合理的第一步是使用多态性为这些新类型创建一个通用接口。这会将你系统中的其余代码与要添加的特定类型的信息分开，使得可以在不改变现有代码的情况下添加新类型……或者看起来如此。起初，在这种设计中，似乎你必须更改代码的唯一地方就是你继承新类型的地方，但这并不是完全正确的。 你仍然必须创建新类型的对象，并且在创建时必须指定要使用的确切构造器。因此，如果创建对象的代码分布在整个应用程序中，那么在添加新类型时，你将遇到相同的问题——你仍然必须追查你代码中新类型碍事的所有地方。恰好是类型的创建碍事，而不是类型的使用（通过多态处理），但是效果是一样的：添加新类型可能会引起问题。</p><p>解决方案是强制对象的创建都通过通用工厂进行，而不是允许创建代码在整个系统中传播。 如果你程序中的所有代码都必须执行通过该工厂创建你的一个对象，那么在添加新类时只需要修改工厂即可。</p><p>由于每个面向对象的程序都会创建对象，并且很可能会通过添加新类型来扩展程序，因此工厂是最通用的设计模式之一。</p><p>举例来说，让我们重新看一下<strong>Shape</strong>系统。 首先，我们需要一个用于所有示例的基本框架。 如果无法创建<strong>Shape</strong>对象，则需要抛出一个合适的异常：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// patterns/shapes/BadShapeCreation.java package patterns.shapes;</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BadShapeCreation</span> <span class="token keyword">extends</span> <span class="token class-name">RuntimeException</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">BadShapeCreation</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，是一个<strong>Shape</strong>基类：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// patterns/shapes/Shape.java</span>
<span class="token keyword">package</span> <span class="token namespace">patterns<span class="token punctuation">.</span>shapes</span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
	<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span> counter <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> id <span class="token operator">=</span> counter<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getSimpleName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;[&quot;</span> <span class="token operator">+</span> id <span class="token operator">+</span> <span class="token string">&quot;]&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">+</span> <span class="token string">&quot; draw&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">erase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">+</span> <span class="token string">&quot; erase&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该类自动为每一个<strong>Shape</strong>对象创建一个唯一的<code>id</code>。</p><p><code>toString()</code>使用运行期信息来发现特定的<strong>Shape</strong>子类的名字。</p><p>现在我们能很快创建一些<strong>Shape</strong>子类了：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// patterns/shapes/Circle.java</span>
<span class="token keyword">package</span> <span class="token namespace">patterns<span class="token punctuation">.</span>shapes</span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Circle</span> <span class="token keyword">extends</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// patterns/shapes/Square.java</span>
<span class="token keyword">package</span> <span class="token namespace">patterns<span class="token punctuation">.</span>shapes</span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Square</span> <span class="token keyword">extends</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// patterns/shapes/Triangle.java</span>
<span class="token keyword">package</span> <span class="token namespace">patterns<span class="token punctuation">.</span>shapes</span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Triangle</span> <span class="token keyword">extends</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>工厂是具有能够创建对象的方法的类。 我们有几个示例版本，因此我们将定义一个接口：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// patterns/shapes/FactoryMethod.java</span>
<span class="token keyword">package</span> <span class="token namespace">patterns<span class="token punctuation">.</span>shapes</span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">FactoryMethod</span> <span class="token punctuation">{</span>
    <span class="token class-name">Shape</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">String</span> type<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>create()</code>接收一个参数，这个参数使其决定要创建哪一种<strong>Shape</strong>对象，这里是<code>String</code>，但是它其实可以是任何数据集合。对象的初始化数据（这里是字符串）可能来自系统外部。 这个例子将测试工厂：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// patterns/shapes/FactoryTest.java</span>
<span class="token keyword">package</span> <span class="token namespace">patterns<span class="token punctuation">.</span>shapes</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>stream<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FactoryTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token class-name">FactoryMethod</span> factory<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Stream</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token string">&quot;Circle&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Square&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Triangle&quot;</span><span class="token punctuation">,</span>
                  <span class="token string">&quot;Square&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Circle&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Circle&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Triangle&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>factory<span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token class-name">Shape</span><span class="token operator">::</span><span class="token function">draw</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token class-name">Shape</span><span class="token operator">::</span><span class="token function">erase</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Terminal operation</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在主函数<code>main()</code>里，要记住除非你在最后使用了一个终结操作，否则<strong>Stream</strong>不会做任何事情。在这里，<code>count()</code>的值被丢弃了。</p><p>创建工厂的一种方法是显式创建每种类型：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// patterns/ShapeFactory1.java</span>
<span class="token comment">// A simple static factory method</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>stream<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">patterns<span class="token punctuation">.</span>shapes<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ShapeFactory1</span> <span class="token keyword">implements</span> <span class="token class-name">FactoryMethod</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">Shape</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">String</span> type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">switch</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token string">&quot;Circle&quot;</span><span class="token operator">:</span> <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Circle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token string">&quot;Square&quot;</span><span class="token operator">:</span> <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Square</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token string">&quot;Triangle&quot;</span><span class="token operator">:</span> <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Triangle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">default</span><span class="token operator">:</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">BadShapeCreation</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">FactoryTest</span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ShapeFactory1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Circle</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> draw
<span class="token class-name">Circle</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> erase
<span class="token class-name">Square</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> draw
<span class="token class-name">Square</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> erase
<span class="token class-name">Triangle</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> draw
<span class="token class-name">Triangle</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> erase
<span class="token class-name">Square</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> draw
<span class="token class-name">Square</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> erase
<span class="token class-name">Circle</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> draw
<span class="token class-name">Circle</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> erase
<span class="token class-name">Circle</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> draw
<span class="token class-name">Circle</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> erase
<span class="token class-name">Triangle</span><span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span> draw
<span class="token class-name">Triangle</span><span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span> erase 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>create()</code>现在是添加新类型的Shape时系统中唯一需要更改的其他代码。</p><h3 id="动态工厂" tabindex="-1"><a class="header-anchor" href="#动态工厂" aria-hidden="true">#</a> 动态工厂</h3><p>前面例子中的<strong>静态</strong><code>create()</code>方法强制所有创建操作都集中在一个位置，因此这是添加新类型的<strong>Shape</strong>时唯一必须更改代码的地方。这当然是一个合理的解决方案，因为它把创建对象的过程限制在一个框内。但是，如果你在添加新类时无需修改任何内容，那就太好了。 以下版本使用反射在首次需要时将<strong>Shape</strong>的构造器动态加载到工厂列表中：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// patterns/ShapeFactory2.java</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>stream<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">patterns<span class="token punctuation">.</span>shapes<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ShapeFactory2</span> <span class="token keyword">implements</span> <span class="token class-name">FactoryMethod</span> <span class="token punctuation">{</span>
    <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Constructor</span><span class="token punctuation">&gt;</span></span> factories <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token class-name">Constructor</span> <span class="token function">load</span><span class="token punctuation">(</span><span class="token class-name">String</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;loading &quot;</span> <span class="token operator">+</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;patterns.shapes.&quot;</span> <span class="token operator">+</span> id<span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">getConstructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token class-name">ClassNotFoundException</span> <span class="token operator">|</span>
                <span class="token class-name">NoSuchMethodException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">BadShapeCreation</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">Shape</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">String</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token class-name">Shape</span><span class="token punctuation">)</span>factories
                <span class="token punctuation">.</span><span class="token function">computeIfAbsent</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> <span class="token class-name">ShapeFactory2</span><span class="token operator">::</span><span class="token function">load</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token class-name">InstantiationException</span> <span class="token operator">|</span>
                <span class="token class-name">IllegalAccessException</span> <span class="token operator">|</span>
                <span class="token class-name">InvocationTargetException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">BadShapeCreation</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">FactoryTest</span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ShapeFactory2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>loading <span class="token class-name">Circle</span>
<span class="token class-name">Circle</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> draw
<span class="token class-name">Circle</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> erase
loading <span class="token class-name">Square</span>
<span class="token class-name">Square</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> draw
<span class="token class-name">Square</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> erase
loading <span class="token class-name">Triangle</span>
<span class="token class-name">Triangle</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> draw
<span class="token class-name">Triangle</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> erase
<span class="token class-name">Square</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> draw
<span class="token class-name">Square</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> erase
<span class="token class-name">Circle</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> draw
<span class="token class-name">Circle</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> erase
<span class="token class-name">Circle</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> draw
<span class="token class-name">Circle</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> erase
<span class="token class-name">Triangle</span><span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span> draw
<span class="token class-name">Triangle</span><span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span> erase
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>和之前一样，<code>create()</code>方法基于你传递给它的<strong>String</strong>参数生成新的<strong>Shape</strong>s，但是在这里，它是通过在<strong>HashMap</strong>中查找作为键的<strong>String</strong>来实现的。 返回的值是一个构造器，该构造器用于通过调用<code>newInstance()</code>创建新的<strong>Shape</strong>对象。</p><p>然而，当你开始运行程序时，工厂的<code>map</code>为空。<code>create()</code>使用<code>map</code>的<code>computeIfAbsent()</code>方法来查找构造器（如果该构造器已存在于<code>map</code>中）。如果不存在则使用<code>load()</code>计算出该构造器，并将其插入到<code>map</code>中。 从输出中可以看到，每种特定类型的<strong>Shape</strong>都是在第一次请求时才加载的，然后只需要从<code>map</code>中检索它。</p><h3 id="多态工厂" tabindex="-1"><a class="header-anchor" href="#多态工厂" aria-hidden="true">#</a> 多态工厂</h3><p>《设计模式》这本书强调指出，采用“工厂方法”模式的原因是可以从基本工厂中继承出不同类型的工厂。 再次修改示例，使工厂方法位于单独的类中：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// patterns/ShapeFactory3.java</span>
<span class="token comment">// Polymorphic factory methods</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>function<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>stream<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">patterns<span class="token punctuation">.</span>shapes<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">interface</span> <span class="token class-name">PolymorphicFactory</span> <span class="token punctuation">{</span>
    <span class="token class-name">Shape</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">RandomShapes</span> <span class="token keyword">implements</span> <span class="token class-name">Supplier</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Shape</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">PolymorphicFactory</span><span class="token punctuation">[</span><span class="token punctuation">]</span> factories<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Random</span> rand <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Random</span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">RandomShapes</span><span class="token punctuation">(</span><span class="token class-name">PolymorphicFactory</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> factories<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>factories <span class="token operator">=</span> factories<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">Shape</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> factories<span class="token punctuation">[</span> rand<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span>factories<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ShapeFactory3</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">RandomShapes</span> rs <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RandomShapes</span><span class="token punctuation">(</span>
            <span class="token class-name">Circle</span><span class="token operator">::</span><span class="token keyword">new</span><span class="token punctuation">,</span>
            <span class="token class-name">Square</span><span class="token operator">::</span><span class="token keyword">new</span><span class="token punctuation">,</span>
            <span class="token class-name">Triangle</span><span class="token operator">::</span><span class="token keyword">new</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Stream</span><span class="token punctuation">.</span><span class="token function">generate</span><span class="token punctuation">(</span>rs<span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">limit</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token class-name">Shape</span><span class="token operator">::</span><span class="token function">draw</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token class-name">Shape</span><span class="token operator">::</span><span class="token function">erase</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Triangle</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> draw
<span class="token class-name">Triangle</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> erase
<span class="token class-name">Circle</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> draw
<span class="token class-name">Circle</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> erase
<span class="token class-name">Circle</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> draw
<span class="token class-name">Circle</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> erase
<span class="token class-name">Triangle</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> draw
<span class="token class-name">Triangle</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> erase
<span class="token class-name">Circle</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> draw
<span class="token class-name">Circle</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> erase
<span class="token class-name">Square</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> draw
<span class="token class-name">Square</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> erase 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>RandomShapes</strong>实现了<strong>Supplier &lt;Shape&gt;</strong>，因此可用于通过<code>Stream.generate()</code>创建<strong>Stream</strong>。 它的构造器采用<strong>PolymorphicFactory</strong>对象的可变参数列表。 变量参数列表以数组形式出现，因此列表是以数组形式在内部存储的。<code>get()</code>方法随机获取此数组中一个对象的索引，并在结果上调用<code>create()</code>以产生新的<strong>Shape</strong>对象。 添加新类型的<strong>Shape</strong>时，<strong>RandomShapes</strong>构造器是唯一需要更改的地方。 请注意，此构造器需要<strong>Supplier &lt;Shape&gt;</strong>。 我们传递给其<strong>Shape</strong>构造器的方法引用，该引用可满足**Supplier &lt;Shape&gt;**约定，因为Java 8支持结构一致性。</p><p>鉴于<strong>ShapeFactory2.java</strong>可能会抛出异常，使用此方法则没有任何异常——它在编译时完全确定。</p><h3 id="抽象工厂" tabindex="-1"><a class="header-anchor" href="#抽象工厂" aria-hidden="true">#</a> 抽象工厂</h3><p>抽象工厂模式看起来像我们之前所见的工厂对象，但拥有不是一个工厂方法而是几个工厂方法， 每个工厂方法都会创建不同种类的对象。 这个想法是在创建工厂对象时，你决定如何使用该工厂创建的所有对象。 《设计模式》中提供的示例实现了跨各种图形用户界面（GUI）的可移植性：你创建一个适合你正在使用的GUI的工厂对象，然后从中请求菜单，按钮，滑块等等，它将自动为GUI创建适合该项目版本的组件。 因此，你可以将从一个GUI更改为另一个所产生的影响隔离限制在一处。 作为另一个示例，假设你正在创建一个通用游戏环境来支持不同类型的游戏。 使用抽象工厂看起来就像下文那样：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// patterns/abstractfactory/GameEnvironment.java</span>
<span class="token comment">// An example of the Abstract Factory pattern</span>
<span class="token comment">// {java patterns.abstractfactory.GameEnvironment}</span>
<span class="token keyword">package</span> <span class="token namespace">patterns<span class="token punctuation">.</span>abstractfactory</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>function<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">interface</span> <span class="token class-name">Obstacle</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">action</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Player</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">interactWith</span><span class="token punctuation">(</span><span class="token class-name">Obstacle</span> o<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Kitty</span> <span class="token keyword">implements</span> <span class="token class-name">Player</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">interactWith</span><span class="token punctuation">(</span><span class="token class-name">Obstacle</span> ob<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;Kitty has encountered a &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ob<span class="token punctuation">.</span><span class="token function">action</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">KungFuGuy</span> <span class="token keyword">implements</span> <span class="token class-name">Player</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">interactWith</span><span class="token punctuation">(</span><span class="token class-name">Obstacle</span> ob<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;KungFuGuy now battles a &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ob<span class="token punctuation">.</span><span class="token function">action</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Puzzle</span> <span class="token keyword">implements</span> <span class="token class-name">Obstacle</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">action</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Puzzle&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">NastyWeapon</span> <span class="token keyword">implements</span> <span class="token class-name">Obstacle</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">action</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;NastyWeapon&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// The Abstract Factory:</span>
<span class="token keyword">class</span> <span class="token class-name">GameElementFactory</span> <span class="token punctuation">{</span>
    <span class="token class-name">Supplier</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Player</span><span class="token punctuation">&gt;</span></span> player<span class="token punctuation">;</span>
    <span class="token class-name">Supplier</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Obstacle</span><span class="token punctuation">&gt;</span></span> obstacle<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Concrete factories:</span>
<span class="token keyword">class</span> <span class="token class-name">KittiesAndPuzzles</span> <span class="token keyword">extends</span> <span class="token class-name">GameElementFactory</span> <span class="token punctuation">{</span>
    <span class="token class-name">KittiesAndPuzzles</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        player <span class="token operator">=</span> <span class="token class-name">Kitty</span><span class="token operator">::</span><span class="token keyword">new</span><span class="token punctuation">;</span>
        obstacle <span class="token operator">=</span> <span class="token class-name">Puzzle</span><span class="token operator">::</span><span class="token keyword">new</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">KillAndDismember</span> <span class="token keyword">extends</span> <span class="token class-name">GameElementFactory</span> <span class="token punctuation">{</span>
    <span class="token class-name">KillAndDismember</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        player <span class="token operator">=</span> <span class="token class-name">KungFuGuy</span><span class="token operator">::</span><span class="token keyword">new</span><span class="token punctuation">;</span>
        obstacle <span class="token operator">=</span> <span class="token class-name">NastyWeapon</span><span class="token operator">::</span><span class="token keyword">new</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GameEnvironment</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Player</span> p<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Obstacle</span> ob<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">GameEnvironment</span><span class="token punctuation">(</span><span class="token class-name">GameElementFactory</span> factory<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        p <span class="token operator">=</span> factory<span class="token punctuation">.</span>player<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ob <span class="token operator">=</span> factory<span class="token punctuation">.</span>obstacle<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        p<span class="token punctuation">.</span><span class="token function">interactWith</span><span class="token punctuation">(</span>ob<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">GameElementFactory</span> kp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">KittiesAndPuzzles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> kd <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">KillAndDismember</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">GameEnvironment</span> g1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GameEnvironment</span><span class="token punctuation">(</span>kp<span class="token punctuation">)</span><span class="token punctuation">,</span> g2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GameEnvironment</span><span class="token punctuation">(</span>kd<span class="token punctuation">)</span><span class="token punctuation">;</span>
        g1<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        g2<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Kitty</span> has encountered a <span class="token class-name">Puzzle</span>
<span class="token class-name">KungFuGuy</span> now battles a <span class="token class-name">NastyWeapon</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在这种环境中，<strong>Player</strong>对象与<strong>Obstacle</strong>对象进行交互，但是根据你所玩游戏的类型，存在不同类型的玩家和障碍物。 你可以通过选择特定的<strong>GameElementFactory</strong>来确定游戏的类型，然后<strong>GameEnvironment</strong>控制游戏的设置和玩法。 在此示例中，设置和玩法非常简单，但是这些活动（初始条件和状态变化）可以决定游戏的大部分结果。 这里，<strong>GameEnvironment</strong>不是为继承而设计的，尽管这样做很有意义。 它还包含“双重调度”和“工厂方法”的示例，稍后将对这两个示例进行说明。</p>`,44),g=e(`<h2 id="函数对象" tabindex="-1"><a class="header-anchor" href="#函数对象" aria-hidden="true">#</a> 函数对象</h2><p>一个 <em>函数对象</em> 封装了一个函数。其特点就是将被调用函数的选择与那个函数被调用的位置进行解耦。</p><p><em>《设计模式》</em> 中也提到了这个术语，但是没有使用。然而，<em>函数对象</em> 的话题却在那本书的很多模式中被反复论及。</p><h3 id="命令模式" tabindex="-1"><a class="header-anchor" href="#命令模式" aria-hidden="true">#</a> 命令模式</h3><p>从最直观的角度来看，<em>命令模式</em> 就是一个函数对象：一个作为对象的函数。我们可以将 <em>函数对象</em> 作为参数传递给其他方法或者对象，来执行特定的操作。</p><p>在Java 8之前，想要产生单个函数的效果，我们必须明确将方法包含在对象中，而这需要太多的仪式了。而利用Java 8的lambda特性， <em>命令模式</em> 的实现将是微不足道的。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// patterns/CommandPattern.java</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CommandPattern</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Runnable</span><span class="token punctuation">&gt;</span></span> macro <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>
      <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;Hello &quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;World! &quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;I&#39;m the command pattern!&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    macro<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">Runnable</span><span class="token operator">::</span><span class="token function">run</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/* Output:
Hello World! I&#39;m the command pattern!
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>命令模式</em> 的主要特点是允许向一个方法或者对象传递一个想要的动作。在上面的例子中，这个对象就是 <strong>macro</strong> ，而 <em>命令模式</em> 提供了将一系列需要一起执行的动作集进行排队的方法。在这里，<em>命令模式</em> 允许我们动态的创建新的行为，通常情况下我们需要编写新的代码才能完成这个功能，而在上面的例子中，我们可以通过解释运行一个脚本来完成这个功能（如果需要实现的东西很复杂请参考解释器模式）。</p><p><em>《设计模式》</em> 认为“命令模式是回调的面向对象的替代品”。尽管如此，我认为&quot;back&quot;（回来）这个词是callback（回调）这一概念的基本要素。也就是说，我认为回调（callback）实际上是返回到回调的创建者所在的位置。另一方面，对于 <em>命令</em> 对象，通常只需创建它并将其交给某种方法或对象，而不是自始至终以其他方式联系命令对象。不管怎样，这就是我对它的看法。在本章的后面内容中，我将会把一组设计模式放在“回调”的标题下面。</p><h3 id="策略模式" tabindex="-1"><a class="header-anchor" href="#策略模式" aria-hidden="true">#</a> 策略模式</h3><p><em>策略模式</em> 看起来像是从同一个基类继承而来的一系列 <em>命令</em> 类。但是仔细查看 <em>命令模式</em>，你就会发现它也具有同样的结构：一系列分层次的 <em>函数对象</em>。不同之处在于，这些函数对象的用法和策略模式不同。就像前面的 <code>io/DirList.java</code> 那个例子，使用 <em>命令</em> 是为了解决特定问题 -- 从一个列表中选择文件。“不变的部分”是被调用的那个方法，而变化的部分被分离出来放到 <em>函数对象</em> 中。我认为 <em>命令模式</em> 在编码阶段提供了灵活性，而 <em>策略模式</em> 的灵活性在运行时才会体现出来。尽管如此，这种区别却是非常模糊的。</p><p>另外，<em>策略模式</em> 还可以添加一个“上下文（context）”，这个上下文（context）可以是一个代理类（surrogate class），用来控制对某个特定 <em>策略</em> 对象的选择和使用。就像 <em>桥接模式</em> 一样！下面我们来一探究竟：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// patterns/strategy/StrategyPattern.java</span>
<span class="token comment">// {java patterns.strategy.StrategyPattern}</span>
<span class="token keyword">package</span> <span class="token namespace">patterns<span class="token punctuation">.</span>strategy</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>function<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token comment">// The common strategy base type:</span>
<span class="token keyword">class</span> <span class="token class-name">FindMinima</span> <span class="token punctuation">{</span>
  <span class="token class-name">Function</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Double</span><span class="token punctuation">&gt;</span><span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Double</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> algorithm<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// The various strategies:</span>
<span class="token keyword">class</span> <span class="token class-name">LeastSquares</span> <span class="token keyword">extends</span> <span class="token class-name">FindMinima</span> <span class="token punctuation">{</span>
  <span class="token class-name">LeastSquares</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Line is a sequence of points (Dummy data):</span>
    algorithm <span class="token operator">=</span> <span class="token punctuation">(</span>line<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token number">1.1</span><span class="token punctuation">,</span> <span class="token number">2.2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Perturbation</span> <span class="token keyword">extends</span> <span class="token class-name">FindMinima</span> <span class="token punctuation">{</span>
  <span class="token class-name">Perturbation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    algorithm <span class="token operator">=</span> <span class="token punctuation">(</span>line<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token number">3.3</span><span class="token punctuation">,</span> <span class="token number">4.4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Bisection</span> <span class="token keyword">extends</span> <span class="token class-name">FindMinima</span> <span class="token punctuation">{</span>
  <span class="token class-name">Bisection</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    algorithm <span class="token operator">=</span> <span class="token punctuation">(</span>line<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token number">5.5</span><span class="token punctuation">,</span> <span class="token number">6.6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// The &quot;Context&quot; controls the strategy:</span>
<span class="token keyword">class</span> <span class="token class-name">MinimaSolver</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token class-name">FindMinima</span> strategy<span class="token punctuation">;</span>
  <span class="token class-name">MinimaSolver</span><span class="token punctuation">(</span><span class="token class-name">FindMinima</span> strat<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    strategy <span class="token operator">=</span> strat<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Double</span><span class="token punctuation">&gt;</span></span> <span class="token function">minima</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Double</span><span class="token punctuation">&gt;</span></span> line<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> strategy<span class="token punctuation">.</span>algorithm<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">void</span> <span class="token function">changeAlgorithm</span><span class="token punctuation">(</span><span class="token class-name">FindMinima</span> newAlgorithm<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    strategy <span class="token operator">=</span> newAlgorithm<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StrategyPattern</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">MinimaSolver</span> solver <span class="token operator">=</span> 
      <span class="token keyword">new</span> <span class="token class-name">MinimaSolver</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">LeastSquares</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Double</span><span class="token punctuation">&gt;</span></span> line <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>
      <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">2.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">2.0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1.0</span><span class="token punctuation">,</span>
      <span class="token number">3.0</span><span class="token punctuation">,</span> <span class="token number">4.0</span><span class="token punctuation">,</span> <span class="token number">5.0</span><span class="token punctuation">,</span> <span class="token number">4.0</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>solver<span class="token punctuation">.</span><span class="token function">minima</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    solver<span class="token punctuation">.</span><span class="token function">changeAlgorithm</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Bisection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>solver<span class="token punctuation">.</span><span class="token function">minima</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/* Output:
[1.1, 2.2]
[5.5, 6.6]
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>MinimaSolver</code> 中的 <code>changeAlgorithm()</code> 方法将一个不同的策略插入到了 <code>私有</code> 域 <code>strategy</code> 中，这使得在调用 <code>minima()</code> 方法时，可以使用新的策略。</p><p>我们可以通过将上下文注入到 <code>FindMinima</code> 中来简化我们的解决方法。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// patterns/strategy/StrategyPattern2.java // {java patterns.strategy.StrategyPattern2}</span>
<span class="token keyword">package</span> <span class="token namespace">patterns<span class="token punctuation">.</span>strategy</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>function<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token comment">// &quot;Context&quot; is now incorporated:</span>
<span class="token keyword">class</span> <span class="token class-name">FindMinima2</span> <span class="token punctuation">{</span>
  <span class="token class-name">Function</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Double</span><span class="token punctuation">&gt;</span><span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Double</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> algorithm<span class="token punctuation">;</span>
  <span class="token class-name">FindMinima2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">leastSquares</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token comment">// default</span>
  <span class="token comment">// The various strategies:</span>
  <span class="token keyword">void</span> <span class="token function">leastSquares</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    algorithm <span class="token operator">=</span> <span class="token punctuation">(</span>line<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token number">1.1</span><span class="token punctuation">,</span> <span class="token number">2.2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">void</span> <span class="token function">perturbation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    algorithm <span class="token operator">=</span> <span class="token punctuation">(</span>line<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token number">3.3</span><span class="token punctuation">,</span> <span class="token number">4.4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">void</span> <span class="token function">bisection</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    algorithm <span class="token operator">=</span> <span class="token punctuation">(</span>line<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token number">5.5</span><span class="token punctuation">,</span> <span class="token number">6.6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Double</span><span class="token punctuation">&gt;</span></span> <span class="token function">minima</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Double</span><span class="token punctuation">&gt;</span></span> line<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> algorithm<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StrategyPattern2</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">FindMinima2</span> solver <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FindMinima2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Double</span><span class="token punctuation">&gt;</span></span> line <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>
      <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">2.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">2.0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1.0</span><span class="token punctuation">,</span>
      <span class="token number">3.0</span><span class="token punctuation">,</span> <span class="token number">4.0</span><span class="token punctuation">,</span> <span class="token number">5.0</span><span class="token punctuation">,</span> <span class="token number">4.0</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>solver<span class="token punctuation">.</span><span class="token function">minima</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    solver<span class="token punctuation">.</span><span class="token function">bisection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>solver<span class="token punctuation">.</span><span class="token function">minima</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/* Output:
[1.1, 2.2]
[5.5, 6.6]
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>FindMinima2</code> 封装了不同的算法，也包含了“上下文”（Context），所以它便可以在一个单独的类中控制算法的选择了。</p><h3 id="责任链模式" tabindex="-1"><a class="header-anchor" href="#责任链模式" aria-hidden="true">#</a> 责任链模式</h3><p><em>责任链模式</em> 也许可以被看作一个使用了 <em>策略</em> 对象的“递归的动态一般化”。此时我们进行一次调用，在一个链序列中的每个策略都试图满足这个调用。这个过程直到有一个策略成功满足该调用或者到达链序列的末尾才结束。在递归方法中，一个方法将反复调用它自身直至达到某个终止条件；使用责任链，一个方法会调用相同的基类方法（拥有不同的实现），这个基类方法将会调用基类方法的其他实现，如此反复直至达到某个终止条件。</p><p>除了调用某个方法来满足某个请求以外，链中的多个方法都有机会满足这个请求，因此它有点专家系统的意味。由于责任链实际上就是一个链表，它能够动态创建，因此它可以看作是一个更一般的动态构建的 <code>switch</code> 语句。</p><p>在上面的 <code>StrategyPattern.java</code> 例子中，我们可能想自动发现一个解决方法。而 <em>责任链</em> 就可以达到这个目的：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// patterns/chain/ChainOfResponsibility.java</span>
<span class="token comment">// Using the Functional interface</span>
<span class="token comment">// {java patterns.chain.ChainOfResponsibility}</span>
<span class="token keyword">package</span> <span class="token namespace">patterns<span class="token punctuation">.</span>chain</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>function<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Result</span> <span class="token punctuation">{</span>
  <span class="token keyword">boolean</span> success<span class="token punctuation">;</span>
  <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Double</span><span class="token punctuation">&gt;</span></span> line<span class="token punctuation">;</span>
  <span class="token class-name">Result</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Double</span><span class="token punctuation">&gt;</span></span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    success <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    line <span class="token operator">=</span> data<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token class-name">Result</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    success <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    line <span class="token operator">=</span> <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Double</span><span class="token punctuation">&gt;</span></span><span class="token function">emptyList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Fail</span> <span class="token keyword">extends</span> <span class="token class-name">Result</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Algorithm</span> <span class="token punctuation">{</span>
  <span class="token class-name">Result</span> <span class="token function">algorithm</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Double</span><span class="token punctuation">&gt;</span></span> line<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">FindMinima</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Result</span> <span class="token function">leastSquares</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Double</span><span class="token punctuation">&gt;</span></span> line<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;LeastSquares.algorithm&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">boolean</span> weSucceed <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>weSucceed<span class="token punctuation">)</span> <span class="token comment">// Actual test/calculation here</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Result</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token number">1.1</span><span class="token punctuation">,</span> <span class="token number">2.2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span> <span class="token comment">// Try the next one in the chain:</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Fail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Result</span> <span class="token function">perturbation</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Double</span><span class="token punctuation">&gt;</span></span> line<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Perturbation.algorithm&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">boolean</span> weSucceed <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>weSucceed<span class="token punctuation">)</span> <span class="token comment">// Actual test/calculation here</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Result</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token number">3.3</span><span class="token punctuation">,</span> <span class="token number">4.4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Fail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Result</span> <span class="token function">bisection</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Double</span><span class="token punctuation">&gt;</span></span> line<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Bisection.algorithm&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">boolean</span> weSucceed <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>weSucceed<span class="token punctuation">)</span> <span class="token comment">// Actual test/calculation here</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Result</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token number">5.5</span><span class="token punctuation">,</span> <span class="token number">6.6</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Fail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token keyword">static</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Function</span><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Double</span><span class="token punctuation">&gt;</span><span class="token punctuation">,</span> <span class="token class-name">Result</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span>
    algorithms <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>
      <span class="token class-name">FindMinima</span><span class="token operator">::</span><span class="token function">leastSquares</span><span class="token punctuation">,</span>
      <span class="token class-name">FindMinima</span><span class="token operator">::</span><span class="token function">perturbation</span><span class="token punctuation">,</span>
      <span class="token class-name">FindMinima</span><span class="token operator">::</span><span class="token function">bisection</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Result</span> <span class="token function">minima</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Double</span><span class="token punctuation">&gt;</span></span> line<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">Function</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Double</span><span class="token punctuation">&gt;</span><span class="token punctuation">,</span> <span class="token class-name">Result</span><span class="token punctuation">&gt;</span></span> alg <span class="token operator">:</span>
        algorithms<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">Result</span> result <span class="token operator">=</span> alg<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>success<span class="token punctuation">)</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Fail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ChainOfResponsibility</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">FindMinima</span> solver <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FindMinima</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Double</span><span class="token punctuation">&gt;</span></span> line <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>
      <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">2.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">2.0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1.0</span><span class="token punctuation">,</span>
      <span class="token number">3.0</span><span class="token punctuation">,</span> <span class="token number">4.0</span><span class="token punctuation">,</span> <span class="token number">5.0</span><span class="token punctuation">,</span> <span class="token number">4.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Result</span> result <span class="token operator">=</span> solver<span class="token punctuation">.</span><span class="token function">minima</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>success<span class="token punctuation">)</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>line<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;No algorithm found&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/* Output:
LeastSquares.algorithm
Perturbation.algorithm
Bisection.algorithm
[5.5, 6.6]
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们从定义一个 <code>Result</code> 类开始，这个类包含一个 <code>success</code> 标志，因此接收者就可以知道算法是否成功执行，而 <code>line</code> 变量保存了真实的数据。当算法执行失败时， <code>Fail</code> 类可以作为返回值。要注意的是，当算法执行失败时，返回一个 <code>Result</code> 对象要比抛出一个异常更加合适，因为我们有时可能并不打算解决这个问题，而是希望程序继续执行下去。</p><p>每一个 <code>Algorithm</code> 接口的实现，都实现了不同的 <code>algorithm()</code> 方法。在 <code>FindMinama</code> 中，将会创建一个算法的列表（这就是所谓的“链”），而 <code>minima()</code> 方法只是遍历这个列表，然后找到能够成功执行的算法而已。</p>`,24),h=e(`<h2 id="改变接口" tabindex="-1"><a class="header-anchor" href="#改变接口" aria-hidden="true">#</a> 改变接口</h2><p>有时候我们需要解决的问题很简单，仅仅是“我没有需要的接口”而已。有两种设计模式用来解决这个问题：<em>适配器模式</em> 接受一种类型并且提供一个对其他类型的接口。<em>外观模式</em> 为一组类创建了一个接口，这样做只是为了提供一种更方便的方法来处理库或资源。</p><h3 id="适配器模式-adapter" tabindex="-1"><a class="header-anchor" href="#适配器模式-adapter" aria-hidden="true">#</a> 适配器模式（Adapter）</h3><p>当我们手头有某个类，而我们需要的却是另外一个类，我们就可以通过 <em>适配器模式</em> 来解决问题。唯一需要做的就是产生出我们需要的那个类，有许多种方法可以完成这种适配。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// patterns/adapt/Adapter.java</span>
<span class="token comment">// Variations on the Adapter pattern</span>
<span class="token comment">// {java patterns.adapt.Adapter}</span>
<span class="token keyword">package</span> <span class="token namespace">patterns<span class="token punctuation">.</span>adapt</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">WhatIHave</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">g</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">WhatIWant</span> <span class="token punctuation">{</span>
  <span class="token keyword">void</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ProxyAdapter</span> <span class="token keyword">implements</span> <span class="token class-name">WhatIWant</span> <span class="token punctuation">{</span>
  <span class="token class-name">WhatIHave</span> whatIHave<span class="token punctuation">;</span>
  <span class="token class-name">ProxyAdapter</span><span class="token punctuation">(</span><span class="token class-name">WhatIHave</span> wih<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    whatIHave <span class="token operator">=</span> wih<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Implement behavior using</span>
    <span class="token comment">// methods in WhatIHave:</span>
    whatIHave<span class="token punctuation">.</span><span class="token function">g</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    whatIHave<span class="token punctuation">.</span><span class="token function">h</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">WhatIUse</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">op</span><span class="token punctuation">(</span><span class="token class-name">WhatIWant</span> wiw<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    wiw<span class="token punctuation">.</span><span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Approach 2: build adapter use into op():</span>
<span class="token keyword">class</span> <span class="token class-name">WhatIUse2</span> <span class="token keyword">extends</span> <span class="token class-name">WhatIUse</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">op</span><span class="token punctuation">(</span><span class="token class-name">WhatIHave</span> wih<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">new</span> <span class="token class-name">ProxyAdapter</span><span class="token punctuation">(</span>wih<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Approach 3: build adapter into WhatIHave:</span>
<span class="token keyword">class</span> <span class="token class-name">WhatIHave2</span> <span class="token keyword">extends</span> <span class="token class-name">WhatIHave</span> <span class="token keyword">implements</span> <span class="token class-name">WhatIWant</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">g</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">h</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Approach 4: use an inner class:</span>
<span class="token keyword">class</span> <span class="token class-name">WhatIHave3</span> <span class="token keyword">extends</span> <span class="token class-name">WhatIHave</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token keyword">class</span> <span class="token class-name">InnerAdapter</span> <span class="token keyword">implements</span> <span class="token class-name">WhatIWant</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">g</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">h</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token class-name">WhatIWant</span> <span class="token function">whatIWant</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">InnerAdapter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Adapter</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">WhatIUse</span> whatIUse <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WhatIUse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">WhatIHave</span> whatIHave <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WhatIHave</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">WhatIWant</span> adapt<span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ProxyAdapter</span><span class="token punctuation">(</span>whatIHave<span class="token punctuation">)</span><span class="token punctuation">;</span>
    whatIUse<span class="token punctuation">.</span><span class="token function">op</span><span class="token punctuation">(</span>adapt<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// Approach 2:</span>
    <span class="token class-name">WhatIUse2</span> whatIUse2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WhatIUse2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    whatIUse2<span class="token punctuation">.</span><span class="token function">op</span><span class="token punctuation">(</span>whatIHave<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// Approach 3:</span>
    <span class="token class-name">WhatIHave2</span> whatIHave2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WhatIHave2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    whatIUse<span class="token punctuation">.</span><span class="token function">op</span><span class="token punctuation">(</span>whatIHave2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// Approach 4:</span>
    <span class="token class-name">WhatIHave3</span> whatIHave3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WhatIHave3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    whatIUse<span class="token punctuation">.</span><span class="token function">op</span><span class="token punctuation">(</span>whatIHave3<span class="token punctuation">.</span><span class="token function">whatIWant</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我想冒昧的借用一下术语“proxy”（代理），因为在 <em>《设计模式》</em> 里，他们坚持认为一个代理（proxy）必须拥有和它所代理的对象一模一样的接口。但是，如果把这两个词一起使用，叫做“代理适配器（proxy adapter）”，似乎更合理一些。</p><h3 id="外观模式-facade" tabindex="-1"><a class="header-anchor" href="#外观模式-facade" aria-hidden="true">#</a> 外观模式（Façade）</h3><p>当我想方设法试图将需求初步（first-cut）转化成对象的时候，通常我使用的原则是：</p><blockquote><p>“把所有丑陋的东西都隐藏到对象里去”。</p></blockquote><p>基本上说，<em>外观模式</em> 干的就是这个事情。如果我们有一堆让人头晕的类以及交互（Interactions），而它们又不是客户端程序员必须了解的，那我们就可以为客户端程序员创建一个接口只提供那些必要的功能。</p><p>外观模式经常被实现为一个符合单例模式（Singleton）的抽象工厂（abstract factory）。当然，你可以通过创建包含 <strong>静态</strong> 工厂方法（static factory methods）的类来达到上述效果。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// patterns/Facade.java</span>

<span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token punctuation">{</span> <span class="token class-name">B</span><span class="token punctuation">(</span><span class="token keyword">long</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">C</span> <span class="token punctuation">{</span> <span class="token class-name">C</span><span class="token punctuation">(</span><span class="token keyword">double</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>

<span class="token comment">// Other classes that aren&#39;t exposed by the</span>
<span class="token comment">// facade go here ...</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Facade</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token class-name">A</span> <span class="token function">makeA</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">A</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
  <span class="token keyword">static</span> <span class="token class-name">B</span> <span class="token function">makeB</span><span class="token punctuation">(</span><span class="token keyword">long</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">B</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
  <span class="token keyword">static</span> <span class="token class-name">C</span> <span class="token function">makeC</span><span class="token punctuation">(</span><span class="token keyword">double</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">C</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// The client programmer gets the objects</span>
    <span class="token comment">// by calling the static methods:</span>
    <span class="token class-name">A</span> a <span class="token operator">=</span> <span class="token class-name">Facade</span><span class="token punctuation">.</span><span class="token function">makeA</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">B</span> b <span class="token operator">=</span> <span class="token class-name">Facade</span><span class="token punctuation">.</span><span class="token function">makeB</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">C</span> c <span class="token operator">=</span> <span class="token class-name">Facade</span><span class="token punctuation">.</span><span class="token function">makeC</span><span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>《设计模式》给出的例子并不是真正的 <em>外观模式</em> ，而仅仅是一个类使用了其他的类而已。</p><h4 id="包-package-作为外观模式的变体" tabindex="-1"><a class="header-anchor" href="#包-package-作为外观模式的变体" aria-hidden="true">#</a> 包（Package）作为外观模式的变体</h4><p>我感觉，<em>外观模式</em> 更倾向于“过程式的（procedural）”，也就是非面向对象的（non-object-oriented）：我们是通过调用某些函数才得到对象。它和抽象工厂（Abstract factory）到底有多大差别呢？<em>外观模式</em> 关键的一点是隐藏某个库的一部分类（以及它们的交互），使它们对于客户端程序员不可见，这样那些类的接口就更加简练和易于理解了。</p><p>其实，这也正是 Java 的 packaging（包）的功能所完成的事情：在库以外，我们只能创建和使用被声明为公共（public）的那些类；所有非公共（non-public）的类只能被同一 package 的类使用。看起来，<em>外观模式</em> 似乎是 Java 内嵌的一个功能。</p><p>公平起见，<em>《设计模式》</em> 主要是写给 C++ 读者的。尽管 C++ 有命名空间（namespaces）机制来防止全局变量和类名称之间的冲突，但它并没有提供类隐藏的机制，而在 Java 里我们可以通过声明 non-public 类来实现这一点。我认为，大多数情况下 Java 的 package 功能就足以解决针对 <em>外观模式</em> 的问题了。</p>`,17),w=n("h2",{id:"解释器-运行时的弹性",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#解释器-运行时的弹性","aria-hidden":"true"},"#"),a(" 解释器：运行时的弹性")],-1),f=n("p",null,"如果程序的用户需要更好的运行时弹性，例如创建脚本来增加需要的系统功能，你就能使用解释器设计模式。这个模式下，你可以创建一个语言解释器并将它嵌入你的程序内。",-1),S={href:"https://www.python.org/",target:"_blank",rel:"noopener noreferrer"},q=n("h2",{id:"回调",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#回调","aria-hidden":"true"},"#"),a(" 回调")],-1),x=n("h2",{id:"多次调度",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#多次调度","aria-hidden":"true"},"#"),a(" 多次调度")],-1),j=n("h2",{id:"模式重构",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#模式重构","aria-hidden":"true"},"#"),a(" 模式重构")],-1),I=n("h2",{id:"抽象用法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#抽象用法","aria-hidden":"true"},"#"),a(" 抽象用法")],-1),F=n("h2",{id:"多次派遣",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#多次派遣","aria-hidden":"true"},"#"),a(" 多次派遣")],-1),A=n("h2",{id:"访问者模式",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#访问者模式","aria-hidden":"true"},"#"),a(" 访问者模式")],-1),C=n("h2",{id:"rtti的优劣",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#rtti的优劣","aria-hidden":"true"},"#"),a(" RTTI的优劣")],-1),P=n("h2",{id:"本章小结",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#本章小结","aria-hidden":"true"},"#"),a(" 本章小结")],-1),W=n("div",{style:{"page-break-after":"always"}},null,-1);function R(_,O){const p=c("ExternalLinkIcon");return o(),l("div",null,[d,s(" Patterns "),r,s(" The Pattern Concept "),v,s(" Building Application Frameworks "),m,s(" Fronting for an Implementation "),b,s(" Factories: Encapsulating Object Creation "),y,s(" Function Objects "),g,s(" Changing the Interface "),h,s(" Interpreter: Run-Time Flexibility "),w,f,n("p",null,[a("在开发程序的过程中，设计自己的语言并为它构建一个解释器是一件让人分心且耗时的事。最好的解决方案就是复用代码：使用一个已经构建好并被调试过的解释器。Python 语言可以免费地嵌入营利性的应用中而不需要任何的协议许可、授权费或者是任何的声明。此外，有一个完全使用 Java 字节码实现的 Python 版本（叫做 Jython）， 能够轻易地合并到 Java 程序中。Python 是一门非常易学习的脚本语言，代码的读写很有逻辑性。它支持函数与对象，有大量的可用库，并且可运行在所有的平台上。你可以在 "),n("a",S,[a("www.Python.org"),i(p)]),a(" 上下载 Python 并了解更多信息。")]),s(" Callbacks "),q,s(" Multiple Dispatching "),x,s(" Pattern Refactoring "),j,s(" Abstracting Usage "),I,s(" Multiple Dispatching "),F,s(" The Visitor Pattern "),A,s(" RTTI Considered Harmful? "),C,s(" Summary "),P,s(" 分页 "),W])}const L=t(k,[["render",R],["__file","25-Patterns.html.vue"]]);export{L as default};
