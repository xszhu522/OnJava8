import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o,c as d,a as n,d as a,b as e,e as r,f as l}from"./app-8cd7c144.js";const c={},p=n("p",null,"[TOC]",-1),u=n("h1",{id:"第二章-安装java和本书用例",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#第二章-安装java和本书用例","aria-hidden":"true"},"#"),a(" 第二章 安装Java和本书用例")],-1),v=n("p",null,"现在，我们来为这次阅读之旅做些准备吧！",-1),m={href:"https://google.com/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://stackoverflow.com/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://youtube.com",target:"_blank",rel:"noopener noreferrer"},k=n("h2",{id:"编辑器",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#编辑器","aria-hidden":"true"},"#"),a(" 编辑器")],-1),g=n("p",null,"首先你需要安装一个编辑器来创建和修改本书用例里的 Java 代码。有可能你还需要使用编辑器来更改系统配置文件。",-1),_={href:"https://atom.io",target:"_blank",rel:"noopener noreferrer"},f=l(`<p>Atom 是一个免费开源、易于安装且跨平台（支持 Window、Mac和Linux）的文本编辑器。内置支持 Java 文件。相比 IDE 的厚重，它比较轻量级，是学习本书的理想工具。Atom 包含了许多方便的编辑功能，相信你一定会爱上它！更多关于 Atom 使用的细节问题可以到它的网站上寻找。</p><p>还有很多其他的编辑器。有一种亚文化的群体，他们热衷于争论哪个更好用！如果你找到一个你更喜欢的编辑器，换一种使用也没什么难度。重要的是，你要找一个用着舒服的。</p><h2 id="shell" tabindex="-1"><a class="header-anchor" href="#shell" aria-hidden="true">#</a> Shell</h2><p>如果你之前没有接触过编程，那么有可能对 Shell（命令行窗口） 不太熟悉。shell 的历史可以追溯到早期的计算时代，当时在计算机上的操作是都通过输入命令进行的，计算机通过回显响应。所有的操作都是基于文本的。</p><p>尽管和现在的图形用户界面相比，Shell 操作方式很原始。但是同时 shell 也为我们提供了许多有用的功能特性。在学习本书的过程中，我们会经常使用到 Shell，包括现在这部分的安装，还有运行 Java 程序。</p><p>Mac：单击聚光灯（屏幕右上角的放大镜图标），然后键入 <code>terminal</code>。单击看起来像小电视屏幕的应用程序（你也可以单击“return”）。这就启动了你的用户下的 shell 窗口。</p><p>windows：首先，通过目录打开 windows 资源管理器：</p><ul><li>Windows 7: 单击屏幕左下角的“开始”图标，输入“explorer”后按回车键。</li><li>Windows 8: 按 Windows+Q，输入 “explorer” 后按回车键。</li><li>Windows 10: 按 Windows+E 打开资源管理器，导航到所需目录，单击窗口左上角的“文件“选项卡，选择“打开 Window PowerShell”启动 Shell。</li></ul><p>Linux: 在 home 目录打开 Shell。</p><ul><li>Debian: 按 Alt+F2， 在弹出的对话框中输入“gnome-terminal”</li><li>Ubuntu: 在屏幕中鼠标右击，选择 “打开终端”，或者按住 Ctrl+Alt+T</li><li>Redhat: 在屏幕中鼠标右击，选择 “打开终端”</li><li>Fedora: 按 Alt+F2，在弹出的对话框中输入“gnome-terminal”</li></ul><p><strong>目录</strong></p><p>目录是 Shell 的基础元素之一。目录用来保存文件和其他目录。目录就好比树的分支。如果书籍是你系统上的一个目录，并且它有两个其他目录作为分支，例如数学和艺术，那么我们就可以说你有一个书籍目录，它包含数学和艺术两个子目录。注意：Windows 使用 <code>\\</code> 而不是 <code>/</code> 来分隔路径。</p><p><strong>Shell基本操作</strong></p><p>我在这展示的 Shell 操作和系统中大体相同。出于本书的原因，下面列举一些在 Shell 中的基本操作：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>更改目录： <span class="token builtin class-name">cd</span> <span class="token operator">&lt;</span>路径<span class="token operator">&gt;</span> 
          <span class="token builtin class-name">cd</span> <span class="token punctuation">..</span> 移动到上级目录 
          <span class="token function">pushd</span> <span class="token operator">&lt;</span>路径<span class="token operator">&gt;</span> 记住来源的同时移动到其他目录，popd 返回来源

目录列举： <span class="token function">ls</span> 列举出当前目录下所有的文件和子目录名（不包含隐藏文件），
             可以选择使用通配符 * 来缩小搜索范围。
             示例<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>： 列举所有以“.java”结尾的文件，输入 <span class="token function">ls</span> *.java <span class="token punctuation">(</span>Windows: <span class="token function">dir</span> *.java<span class="token punctuation">)</span>
             示例<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>： 列举所有以“F”开头，“.java”结尾的文件，输入ls F*.java <span class="token punctuation">(</span>Windows: <span class="token function">dir</span> F*.java<span class="token punctuation">)</span>

创建目录： 
    Mac/Linux 系统：mkdir  
              示例：mkdir books 
    Windows   系统：md 
              示例：md books

移除文件： 
    Mac/Linux 系统：rm
              示例：rm somefile.java
    Windows   系统：del 
              示例：del somefile.java

移除目录： 
    Mac/Linux 系统：rm <span class="token parameter variable">-r</span>
              示例：rm <span class="token parameter variable">-r</span> books
    Windows   系统：deltree 
              示例：deltree books

重复命令： <span class="token operator">!</span><span class="token operator">!</span>  重复上条命令
              示例：<span class="token operator">!</span>n 重复倒数第n条命令

命令历史：     
    Mac/Linux 系统：history
    Windows   系统：按 F7 键

文件解压：
    Linux/Mac 都有命令行解压程序 unzip，你可以通过互联网为 Windows 安装命令行解压程序 unzip。
    图形界面下（Windows 资源管理器，Mac Finder，Linux Nautilus 或其他等效软件）右键单击该文件，
    在 Mac 上选择“open”，在 Linux 上选择“extract here”，或在 Windows 上选择“extract all…”。
    要了解关于 shell 的更多信息，请在维基百科中搜索 Windows shell，Mac/Linux用户可搜索 <span class="token function">bash</span> shell。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="java安装" tabindex="-1"><a class="header-anchor" href="#java安装" aria-hidden="true">#</a> Java安装</h2><p>为了编译和运行代码示例，首先你必须安装 JDK（Java Development Kit，JAVA 软件开发工具包）。本书中采用的是 JDK 8。</p><p><strong>Windows</strong></p>`,18),w={href:"https://chocolatey.org/",target:"_blank",rel:"noopener noreferrer"},x=n("li",null,"在命令行提示符下输入下面的命令，等待片刻，结束后 Java 安装完成并自动完成环境变量设置。",-1),j=l(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> choco <span class="token function">install</span> jdk8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Macintosh</strong></p><p>Mac 系统自带的 Java 版本太老，为了确保本书的代码示例能被正确执行，你必须将它先更新到 Java 8。我们需要管理员权限来运行下面的步骤：</p>`,3),J={href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"},W=n("code",null,"brew update",-1),S=n("li",null,"在命令行下执行下面的命令来安装 Java。",-1),E=l(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> brew <span class="token function">install</span> <span class="token parameter variable">--cask</span> <span class="token function">java</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>译者注：原有命令为 <code>brew cask install java</code>。原有命令已经被禁用。具体内容可看 https://github.com/LingCoder/OnJava8/issues/642</p></blockquote><p>当以上安装都完成后，如果你有需要，可以使用游客账户来运行本书中的代码示例。</p><p><strong>Linux</strong></p><ul><li><strong>Ubuntu/Debian</strong>：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>     <span class="token function">sudo</span> <span class="token function">apt-get</span> update
     <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> default-jdk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>Fedora/Redhat</strong>：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    su-c <span class="token string">&quot;yum install java-1.8.0-openjdk&quot;</span><span class="token punctuation">(</span>注：执行引号内的内容就可以安装<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="校验安装" tabindex="-1"><a class="header-anchor" href="#校验安装" aria-hidden="true">#</a> 校验安装</h2><p>打开新的命令行输入：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">java</span> <span class="token parameter variable">-version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>正常情况下 你应该看到以下类似信息(版本号信息可能不一样）：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">java</span> version <span class="token string">&quot;1.8.0_112&quot;</span>
Java<span class="token punctuation">(</span>TM<span class="token punctuation">)</span> SE Runtime Environment <span class="token punctuation">(</span>build <span class="token number">1.8</span>.0_112-b15<span class="token punctuation">)</span>
Java HotSpot<span class="token punctuation">(</span>TM<span class="token punctuation">)</span> <span class="token number">64</span>-Bit Server VM <span class="token punctuation">(</span>build <span class="token number">25.112</span>-b15, mixed mode<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),M={href:"https://stackoverflow.com/search?q=installing+java",target:"_blank",rel:"noopener noreferrer"},L=n("h2",{id:"安装和运行代码示例",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装和运行代码示例","aria-hidden":"true"},"#"),a(" 安装和运行代码示例")],-1),A=n("p",null,"当 Java 安装完毕，下一步就是安装本书的代码示例了。安装步骤所有平台一致：",-1),D={href:"https://github.com/BruceEckel/OnJava8-Examples/archive/master.zip",target:"_blank",rel:"noopener noreferrer"},I=n("li",null,"解压到你所选目录里。",-1),F=n("li",null,"使用 Windows 资源管理器，Mac Finder，Linux 的 Nautilus 或其他等效工具浏览，在该目录下打开 Shell。",-1),B=n("li",null,"如果你在正确的目录中，你应该看到该目录中名为 gradlew 和 gradlew.bat 的文件，以及许多其他文件和目录。目录与书中的章节相对应。",-1),N=n("li",null,"在shell中输入下面的命令运行：",-1),q=l(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>     Windows 系统：
          gradlew run

     Mac/Linux 系统：
        ./gradlew run
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第一次安装时 Gradle 需要安装自身和其他的相关的包，请稍等片刻。安装完成后，后续的安装将会快很多。</p><p><strong>注意</strong>： 第一次运行 gradlew 命令时必须连接互联网。</p><p><strong>Gradle 基础任务</strong></p><p>本书构建的大量 Gradle 任务都可以自动运行。Gradle 使用约定大于配置的方式，简单设置即可具备高可用性。本书中“一起去骑行”的某些任务不适用于此或无法执行成功。以下是你通常会使用上的 Gradle 任务列表：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    编译本书中的所有 <span class="token function">java</span> 文件，除了部分错误示范的
    gradlew compileJava

    编译并执行 <span class="token function">java</span> 文件（某些文件是库组件）
    gradlew run

    执行所有的单元测试（在本书第16章会有详细介绍）
    gradlew <span class="token builtin class-name">test</span>

    编译并运行一个具体的示例程序
    gradlew <span class="token operator">&lt;</span>本书章节<span class="token operator">&gt;</span>:<span class="token operator">&lt;</span>示例名称<span class="token operator">&gt;</span>
    示例：gradlew objects:HelloDate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),y=n("div",{style:{"page-break-after":"always"}},null,-1);function G(T,V){const s=t("ExternalLinkIcon");return o(),d("div",null,[p,u,v,n("p",null,[a("在开始学习 Java 之前，你必须要先安装好 Java 和本书的源代码示例。因为考虑到可能有“专门的初学者”从本书开始学习编程，所以我会详细地教你如何使用命令行。 如果你已经有此方面的经验了，可以跳过这段安装说明。如果你对此处描述的任何术语或过程仍不清楚，还可以通过 "),n("a",m,[a("Google"),e(s)]),a(" 搜索找到答案。具体的问题或困难请试着在 "),n("a",b,[a("StackOverflow"),e(s)]),a(" 上提问。或者去 "),n("a",h,[a("YouTube"),e(s)]),a(" 看有没有相关的安装说明。")]),k,g,n("p",null,[a("相比一些重量级的 IDE（Integrated Development Environments，集成开发环境），如 Eclipse、NetBeans 和 IntelliJ IDEA (译者注：做项目强烈推荐IDEA)，编辑器是一种更纯粹的文本编辑器。如果你已经有了一个用着顺手的 IDE，那就可以直接用了。为了方便后面的学习和统一下教学环境，我推荐大家使用 Atom 这个编辑器。大家可以在 "),n("a",_,[a("atom.io"),e(s)]),a(" 上下载。")]),f,n("ol",null,[n("li",null,[a("以下为 Chocolatey 的"),n("a",w,[a("安装说明"),e(s)]),a("。")]),x]),j,n("ol",null,[n("li",null,[a("以下为 HomeBrew 的"),n("a",J,[a("安装说明"),e(s)]),a("。安装完成后执行命令 "),W,a(" 更新到最新版本")]),S]),E,n("p",null,[a("如果提示命令找不到或者无法被识别，请根据安装说明重试；如果还不行，尝试到 "),n("a",M,[a("StackOverflow"),e(s)]),a(" 寻找答案。")]),L,A,n("ol",null,[n("li",null,[a("从 "),n("a",D,[a("GitHub 仓库"),e(s)]),a("中下载本书代码示例")]),I,F,B,N]),q,r(" 分页 "),y])}const H=i(c,[["render",G],["__file","02-Installing-Java-and-the-Book-Examples.html.vue"]]);export{H as default};
