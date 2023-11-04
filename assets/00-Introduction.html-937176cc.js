import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as l,c as s,a,d as e,b as i,e as h,f as t}from"./app-f910849f.js";const p={},c=t('<h1 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h1><blockquote><p>“语言观决定世界观。” ——路德维希·维特根斯坦（<em>Wittgenstein</em>）</p></blockquote><p>这句话无论对于自然语言还是编程语言来说都是一样的。你所使用的编程语言会将你的思维模式固化并逐渐远离其他语言，而且往往发生在潜移默化中。Java 作为一门傲娇的语言尤其如此。</p><p>Java 是一门派生语言，早期语言设计者为了不想在项目中使用 C++ 而创造了这种看起来很像 C++，却比 C++ 有了改进的新语言（原始的项目并未成功）。Java 最核心的变化就是加入了“虚拟机”和“垃圾回收机制”，这两个概念在之后的章节会有详细描述。 此外，Java 还在其他方面推动了行业发展。例如，现在绝大多数编程语言都支持文档注释语法和 HTML 文档生成工具。</p><p>Java 最主要的概念之一“对象”来自 SmallTalk 语言。SmallTalk 语言恪守“对象”（在下一章中描述）是编程的最基本单元。于是，万物皆对象。历经时间的检验，人们发现这种信念太过狂热。有些人甚至认为“对象”的概念是完全错误的，应该舍弃。就我个人而言，把一切事物都抽象成对象不仅是一项不必要的负担，同时还会招致许多设计朝着不好的方向发展。尽管如此，“对象”的概念依然有其闪光点。固执地要求所有东西都是一个对象（特别是一直到最底层级别）是一种设计错误；相反，完全逃避“对象”的概念似乎同样太过苛刻。</p><p>Java 语言曾规划设计的许多功能并未按照承诺兑现。本书中，我将尝试解释这些原因，力争让读者知晓这些功能，并明白为什么这些功能最终并不适用。这无关 Java 是一种好语言或者坏语言，一旦你了解了该语言的缺陷和局限性，你就能够：</p><ol><li><p>明白有些功能特性为什么会被“废弃”。</p></li><li><p>熟悉语言边界，更好地设计和编码。</p></li></ol><p>编程的过程就是复杂性管理的过程：业务问题的复杂性，以及依赖的计算机的复杂性。由于这种复杂性，我们的大多数软件项目都失败了。</p><p>许多语言设计决策时都考虑到了复杂性，并试图降低语言的复杂性，但在设计过程中遇到了一些更棘手的问题，最终导致语言设计不可避免地“碰壁”，复杂性增加。例如，C++ 必须向后兼容 C（允许 C 程序员轻松迁移），并且效率很高。这些目标非常实用，并且也是 C++ 在编程界取得了成功的原因之一，但同时也引入了额外的复杂性，导致某些用 C++ 编写的项目开发失败。当然，你可以责怪程序员和管理人员手艺不精，但如果有一种编程语言可以帮助你在开发过程中发现错误，那岂不是更好？</p><p>虽然 VB（Visual BASIC）绑定在 BASIC 上，但 BASIC 实际上并不是一种可扩展的语言。大量扩展的堆积造成 VB 的语法难以维护。Perl 向后兼容 awk、sed、grep 以及其它要替换的 Unix 工具。因此它常常被诟病产生了一堆“只写代码”（<em>write-only code</em>，写代码的人自己都看不懂的代码）。另一方面，C ++，VB，Perl 和其他语言（如 SmallTalk）在设计时重点放在了对某些复杂问题的处理上，因而在解决这些特定类型的问题方面非常成功。</p><p>通信革命使我们相互沟通更加便利。无论是一对一沟通，还是团队里的互相沟通，甚至是地球上不同地区的沟通。据说下一次革命需要的是一种全球性的思维，这种思维源于足量的人以及足量相互连接。我不知道 Java 是否能成为这场革命的工具之一，但至少这种可能性让我觉得：我现在正在做的传道授业的事情是有意义的！</p><h2 id="前提条件" tabindex="-1"><a class="header-anchor" href="#前提条件" aria-hidden="true">#</a> 前提条件</h2><p>阅读本书需要读者对编程有基本的了解:</p><ul><li><p>程序是一系列“陈述（语句、代码）”构成</p></li><li><p>子程序、方法、宏的概念</p></li><li><p>控制语句（例如 <strong>if</strong>），循环结构（例如 <strong>while</strong>）</p></li></ul><p>可能你已在学校、书籍或网络上学过这些。只要你觉得对上述的编程基本概念熟悉，你就可以完成本书的学习。</p><p>你可以通过在 On Java 8 的网站上免费下载 《Think in C》来补充学习 Java 所需要的前置知识。本书介绍了 Java 语言的基本控制机制以及面向对象编程（OOP）的概念。在本书中我引述了一些 C/C++ 语言中的一些特性来帮助读者更好的理解 Java。毕竟 Java 是在它们的基础之上发明的，理解他们之间的区别，有助于读者更好地学习 Java。我会试图简化这些引述，尽量让没有 C/C++ 基础的读者也能很好地理解。</p><h2 id="jdk文档" tabindex="-1"><a class="header-anchor" href="#jdk文档" aria-hidden="true">#</a> JDK文档</h2><p>甲骨文公司已经提供了免费的标准 JDK 文档。除非有必要，否则本书中将不再赘述 API 相关的使用细节。使用浏览器来即时搜索最新最全的 JDK 文档好过翻阅本书来查找。只有在需要补充特定的示例时，我才会提供有关的额外描述。</p><h2 id="c编程思想" tabindex="-1"><a class="header-anchor" href="#c编程思想" aria-hidden="true">#</a> C编程思想</h2>',19),d=a("em",null,"Thinking in C",-1),v={href:"https://archive.org/details/ThinkingInC",target:"_blank",rel:"noopener noreferrer"},J=a("em",null,"Thinking in C",-1),_=t('<h2 id="源码下载" tabindex="-1"><a class="header-anchor" href="#源码下载" aria-hidden="true">#</a> 源码下载</h2><p>本书中所有源代码的示例都在版权保护的前提下通过 GitHub 免费提供。你可以将这些代码用于教育。任何人不得在未经正确引用代码来源的情况下随意重新发布此代码示例。在每个代码文件中，你都可以找到以下版权声明文件作为参考：</p><p><strong>Copyright.txt</strong></p><p>©2017 MindView LLC。版权所有。如果上述版权声明，本段和以下内容，特此授予免费使用，复制，修改和分发此计算机源代码（源代码）及其文档的许可，且无需出于下述目的的书面协议所有副本中都有五个编号的段落。</p><ol><li><p>允许编译源代码并将编译代码仅以可执行格式包含在个人和商业软件程序中。</p></li><li><p>允许在课堂情况下使用源代码而不修改源代码，包括在演示材料中，前提是 “On Java 8” 一书被引用为原点。</p></li><li><p>可以通过以下方式获得将源代码合并到印刷媒体中的许可：MindView LLC，PO Box 969，Crested Butte，CO 81224 MindViewInc@gmail.com</p></li><li><p>源代码和文档的版权归 MindView LLC 所有。提供的源代码没有任何明示或暗示的担保，包括任何适销性，适用于特定用途或不侵权的默示担保。MindView LLC 不保证任何包含源代码的程序的运行不会中断或没有错误。MindView LLC 不对任何目的的源代码或包含源代码的任何软件的适用性做出任何陈述。包含源代码的任何程序的质量和性能的全部风险来自源代码的用户。用户理解源代码是为研究和教学目的而开发的，建议不要仅仅因任何原因依赖源代码或任何包含源代码的程序。如果源代码或任何产生的软件证明有缺陷，则用户承担所有必要的维修，修理或更正的费用。</p></li><li><p>在任何情况下，MINDVIEW LLC 或其出版商均不对任何一方根据任何法律理论对直接，间接，特殊，偶发或后果性损害承担任何责任，包括利润损失，业务中断，商业信息丢失或任何其他保险公司。由于 MINDVIEW LLC 或其出版商已被告知此类损害的可能性，因此使用本源代码及其文档或因无法使用任何结果程序而导致的个人受伤或者个人受伤。MINDVIEW LLC 特别声明不提供任何担保，包括但不限于对适销性和特定用途适用性的暗示担保。此处提供的源代码和文档基于“原样”基础，没有MINDVIEW LLC的任何随附服务，MINDVIEW LLC 没有义务提供维护，支持，更新，增强或修改。</p></li></ol><p><strong>请注意</strong>，MindView LLC 仅提供以下唯一网址发布更新书中的代码示例，https://github.com/BruceEckel/OnJava8-examples 。你可在上述条款范围内将示例免费使用于项目和课堂中。</p><p>如果你在源代码中发现错误，请在下面的网址提交更正：https://github.com/BruceEckel/OnJava8-examples/issues</p><h2 id="编码样式" tabindex="-1"><a class="header-anchor" href="#编码样式" aria-hidden="true">#</a> 编码样式</h2>',8),u={href:"https://github.com/ruanyf/document-style-guide",target:"_blank",rel:"noopener noreferrer"},C={href:"http://www.OnJava8.com",target:"_blank",rel:"noopener noreferrer"},m=a("h2",{id:"bug提交",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#bug提交","aria-hidden":"true"},"#"),e(" BUG提交")],-1),g={href:"https://github.com/BruceEckel/OnJava8-examples/issues",target:"_blank",rel:"noopener noreferrer"},w=a("h2",{id:"邮箱订阅",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#邮箱订阅","aria-hidden":"true"},"#"),e(" 邮箱订阅")],-1),f={href:"http://www.OnJava8.com",target:"_blank",rel:"noopener noreferrer"},k=a("h2",{id:"java图形界面",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#java图形界面","aria-hidden":"true"},"#"),e(" Java图形界面")],-1),I=a("p",null,"Java 在图形用户界面和桌面程序方面的发展可以说是一段悲伤的历史。Java 1.0 中图形用户界面（GUI）库的原始设计目标是让用户能在所有平台提供一个漂亮的界面。但遗憾的是，这个理想没有实现。相反，Java 1.0 AWT（抽象窗口工具包）在所有平台都表现平平，并且有诸多限制。你只能使用四种字体。另外，Java 1.0 AWT 编程模型也很笨拙且非面向对象。我的一个曾在 Java 设计期间工作过的学生道出了缘由：早期的 AWT 设计是在仅仅在一个月内构思、设计和实施的。不得不说这是一个“奇迹”，但同时更是“设计失败”的绝佳教材。",-1),b=a("p",null,"在 Java 1.1 版本的 AWT 中 情况有所改善，事件模型带来更加清晰的面向对象方法，并添加了JavaBeans，致力于面向易于创建可视化编程环境的组件编程模型（已废弃）。",-1),L=a("p",null,"Java 2（Java 1.2）通过使用 Java 基类（JFC）内容替换来完成从旧版 Java 1.0 AWT 的转换。其中 GUI 部分称为 Swing。这是一组丰富的 JavaBeans，它们创建了一个合理的 GUI。修订版 3（3之前都不好）比以往更适用于开发图形界面程序。",-1),x=a("p",null,"Sun 在图形界面的最后一次尝试，称为 JavaFX。当 Oracle 收购 Sun 时，他们将原来雄心勃勃的项目（包括脚本语言）改为库，现在它似乎是 Java 官方唯一还在开发中的 UI 工具包（参见维基百科关于 JavaFX 的文章） - 但即使如此，JavaFX 最终似乎也失败了。",-1),V=a("p",null,"现今 Swing 依然是 Java 发行版的一部分（只接受维护，不再有新功能开发）。而 Java 现在是一个开源项目，它应该始终可用。此外，Swing 和 JavaFX 有一些有限的交互性。这些可能是为了帮助开发者过渡到 JavaFX。",-1),B=a("p",null,[e("桌面程序领域似乎从未尝勾起 Java 设计师的野心。Java 没有在图形界面取得该有的一席之地。另外，曾被大肆吹嘘的 JavaBeans 也没有获得任何影响力。（许多不幸的作者花了很多精力在 Swing 上编写书籍，甚至只用 JavaBeans 编写书籍）。Java 图形界面程序大多数情况下仅用于 IDE（集成开发环境）和一些企业内部应用程序。你可以采用 Java 开发图形界面，但这并非 Java 最擅长的领域。如果你必须学习 Swing，可以参考 "),a("em",null,"Thinking in Java"),e(" 第4版（可从 www.OnJava8.com 获得）或者通过其他专门的书籍学习。")],-1),O=a("div",{style:{"page-break-after":"always"}},null,-1);function T(E,S){const n=o("ExternalLinkIcon");return l(),s("div",null,[c,a("p",null,[d,e(" 已经可以在 "),a("a",v,[e("www.OnJava8.com"),i(n)]),e(" 免费下载。Java 的基础语法是基于 C 语言的。"),J,e(" 中有更适合初学者的编程基础介绍。 我已经委托 Chuck Allison 将这本 C 基础的书籍作为独立产品附赠于本书的 CD 中。希望大家在阅读本书时，都已具备了学习 Java 的良好基础。")]),_,a("p",null,[e("本书中代码标识符（关键字，方法，变量和类名）以粗体，固定宽度代码字体显示。像 “*class” 这种在代码中高频率出现的关键字可能让你觉得粗体有点乏味。（译者注：由于中英排版差异，中文翻译过程并未完全参照原作者的说明。具体排版格式请参考"),a("a",u,[e("此处"),i(n)]),e("）其他显示为正常字体。本书文本格式尽可能遵循 Oracle 常见样式，并保证在大多数 Java 开发环境中被支持。书中我使用了自己喜欢的字体风格。Java 是一种自由的编程语言，你也可以使用 IDE（集成开发环境）工具（如 IntelliJ IDEA，Eclipse 或 NetBeans）将格式更改为适合你的格式。")]),a("p",null,[e("本书代码文件使用自动化工具进行测试，并在最新版本的 Java 编译通过（除了那些特别标记的错误之外）。本书重点介绍并使用 Java 8 进行测试。如果你必须了解更早的语言版本，可以在 "),a("a",C,[e("www.OnJava8.com"),i(n)]),e(" 免费下载 《Thinking in Java》。")]),m,a("p",null,[e("本书经过多重校订，但还是难免有所遗漏被新读者发现。如果你在正文或示例中发现任何错误的内容，请在"),a("a",g,[e("此处"),i(n)]),e("提交错误以及建议更正，作者感激不尽。")]),w,a("p",null,[e("你可以在 "),a("a",f,[e("www.OnJava8.com"),i(n)]),e(" 上订阅邮件。邮件不含广告并尽量提供干货。")]),k,I,b,L,x,V,B,h(" 分页 "),O])}const A=r(p,[["render",T],["__file","00-Introduction.html.vue"]]);export{A as default};
