const e=JSON.parse('{"key":"v-57c68af0","path":"/book/18-Strings.html","title":"第十八章 字符串","lang":"zh-CN","frontmatter":{"description":"[TOC] 字符串操作毫无疑问是计算机程序设计中最常见的行为之一。 在 Java 大展拳脚的 Web 系统中更是如此。在本章中，我们将深入学习在 Java 语言中应用最广泛的 String 类，并研究与之相关的类及工具。 字符串的不可变 String 对象是不可变的。查看 JDK 文档你就会发现，String 类中每一个看起来会修改 String 值的...","head":[["meta",{"property":"og:url","content":"https://xszhu522.github.io/OnJava8/book/18-Strings.html"}],["meta",{"property":"og:site_name","content":"On Java 8"}],["meta",{"property":"og:title","content":"第十八章 字符串"}],["meta",{"property":"og:description","content":"[TOC] 字符串操作毫无疑问是计算机程序设计中最常见的行为之一。 在 Java 大展拳脚的 Web 系统中更是如此。在本章中，我们将深入学习在 Java 语言中应用最广泛的 String 类，并研究与之相关的类及工具。 字符串的不可变 String 对象是不可变的。查看 JDK 文档你就会发现，String 类中每一个看起来会修改 String 值的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2020-10-09T08:11:51.000Z"}],["meta",{"property":"article:author","content":"xszhu522"}],["meta",{"property":"article:modified_time","content":"2020-10-09T08:11:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"第十八章 字符串\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2020-10-09T08:11:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xszhu522\\",\\"url\\":\\"https://xszhu522.github.io\\"}]}"]]},"headers":[{"level":2,"title":"字符串的不可变","slug":"字符串的不可变","link":"#字符串的不可变","children":[]},{"level":2,"title":"+ 的重载与 StringBuilder","slug":"的重载与-stringbuilder","link":"#的重载与-stringbuilder","children":[]},{"level":2,"title":"意外递归","slug":"意外递归","link":"#意外递归","children":[]},{"level":2,"title":"字符串操作","slug":"字符串操作","link":"#字符串操作","children":[]},{"level":2,"title":"格式化输出","slug":"格式化输出","link":"#格式化输出","children":[{"level":3,"title":"printf()","slug":"printf","link":"#printf","children":[]},{"level":3,"title":"System.out.format()","slug":"system-out-format","link":"#system-out-format","children":[]},{"level":3,"title":"Formatter 类","slug":"formatter-类","link":"#formatter-类","children":[]},{"level":3,"title":"格式化修饰符","slug":"格式化修饰符","link":"#格式化修饰符","children":[]},{"level":3,"title":"Formatter 转换","slug":"formatter-转换","link":"#formatter-转换","children":[]},{"level":3,"title":"String.format()","slug":"string-format","link":"#string-format","children":[]}]},{"level":2,"title":"正则表达式","slug":"正则表达式","link":"#正则表达式","children":[{"level":3,"title":"基础","slug":"基础","link":"#基础","children":[]},{"level":3,"title":"创建正则表达式","slug":"创建正则表达式","link":"#创建正则表达式","children":[]},{"level":3,"title":"量词","slug":"量词","link":"#量词","children":[]},{"level":3,"title":"CharSequence","slug":"charsequence","link":"#charsequence","children":[]},{"level":3,"title":"Pattern 和 Matcher","slug":"pattern-和-matcher","link":"#pattern-和-matcher","children":[]},{"level":3,"title":"find()","slug":"find","link":"#find","children":[]},{"level":3,"title":"组（Groups）","slug":"组-groups","link":"#组-groups","children":[]},{"level":3,"title":"start() 和 end()","slug":"start-和-end","link":"#start-和-end","children":[]},{"level":3,"title":"Pattern 标记","slug":"pattern-标记","link":"#pattern-标记","children":[]},{"level":3,"title":"split()","slug":"split","link":"#split","children":[]},{"level":3,"title":"替换操作","slug":"替换操作","link":"#替换操作","children":[]},{"level":3,"title":"reset()","slug":"reset","link":"#reset","children":[]},{"level":3,"title":"正则表达式与 Java I/O","slug":"正则表达式与-java-i-o","link":"#正则表达式与-java-i-o","children":[]}]},{"level":2,"title":"扫描输入","slug":"扫描输入","link":"#扫描输入","children":[{"level":3,"title":"Scanner 分隔符","slug":"scanner-分隔符","link":"#scanner-分隔符","children":[]},{"level":3,"title":"用正则表达式扫描","slug":"用正则表达式扫描","link":"#用正则表达式扫描","children":[]}]},{"level":2,"title":"StringTokenizer类","slug":"stringtokenizer类","link":"#stringtokenizer类","children":[]},{"level":2,"title":"本章小结","slug":"本章小结","link":"#本章小结","children":[]}],"git":{"createdTime":1553949104000,"updatedTime":1602231111000,"contributors":[{"name":"Jason315","email":"lyna318@163.com","commits":12},{"name":"AlanMeng","email":"mengdc00@sina.com","commits":2},{"name":"Lane","email":"zhanglintc623@gmail.com","commits":2},{"name":"xiangflight","email":"xiangflight@foxmail.com","commits":2},{"name":"Hongkuan Wang","email":"hongkuan.wang@aalto.fi","commits":1},{"name":"LingCoder","email":"lingcoder@gmail.com","commits":1},{"name":"RexHuang","email":"RexHuang_dev@163.com","commits":1},{"name":"gaodi16366","email":"44352537+gaodi16366@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":52.51,"words":15753},"filePathRelative":"book/18-Strings.md","localizedDate":"2019年3月30日","autoDesc":true,"excerpt":""}');export{e as data};
