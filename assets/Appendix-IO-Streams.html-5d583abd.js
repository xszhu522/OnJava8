const e=JSON.parse('{"key":"v-71c43956","path":"/book/Appendix-IO-Streams.html","title":"附录:流式IO","lang":"zh-CN","frontmatter":{"description":"[TOC] Java 7 引入了一种简单明了的方式来读写文件和操作目录。大多情况下，文件 (./17-Files.md)这一章所介绍的那些库和技术就足够你用了。但是，如果你必须面对一些特殊的需求和比较底层的操作，或者处理一些老版本的代码，那么你就必须了解本附录中的内容。 对于编程语言的设计者来说，实现良好的输入/输出（I/O）系统是一项比较艰难的任务，...","head":[["meta",{"property":"og:url","content":"https://xszhu522.github.io/OnJava8/book/Appendix-IO-Streams.html"}],["meta",{"property":"og:site_name","content":"On Java 8"}],["meta",{"property":"og:title","content":"附录:流式IO"}],["meta",{"property":"og:description","content":"[TOC] Java 7 引入了一种简单明了的方式来读写文件和操作目录。大多情况下，文件 (./17-Files.md)这一章所介绍的那些库和技术就足够你用了。但是，如果你必须面对一些特殊的需求和比较底层的操作，或者处理一些老版本的代码，那么你就必须了解本附录中的内容。 对于编程语言的设计者来说，实现良好的输入/输出（I/O）系统是一项比较艰难的任务，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2019-12-01T13:25:21.000Z"}],["meta",{"property":"article:author","content":"xszhu522"}],["meta",{"property":"article:modified_time","content":"2019-12-01T13:25:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"附录:流式IO\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2019-12-01T13:25:21.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xszhu522\\",\\"url\\":\\"https://xszhu522.github.io\\"}]}"]]},"headers":[{"level":2,"title":"输入流类型","slug":"输入流类型","link":"#输入流类型","children":[]},{"level":2,"title":"输出流类型","slug":"输出流类型","link":"#输出流类型","children":[]},{"level":2,"title":"添加属性和有用的接口","slug":"添加属性和有用的接口","link":"#添加属性和有用的接口","children":[{"level":3,"title":"通过 FilterInputStream 从 InputStream 读取","slug":"通过-filterinputstream-从-inputstream-读取","link":"#通过-filterinputstream-从-inputstream-读取","children":[]},{"level":3,"title":"通过 FilterOutputStream 向 OutputStream 写入","slug":"通过-filteroutputstream-向-outputstream-写入","link":"#通过-filteroutputstream-向-outputstream-写入","children":[]}]},{"level":2,"title":"Reader和Writer","slug":"reader和writer","link":"#reader和writer","children":[{"level":3,"title":"数据的来源和去处","slug":"数据的来源和去处","link":"#数据的来源和去处","children":[]},{"level":3,"title":"更改流的行为","slug":"更改流的行为","link":"#更改流的行为","children":[]},{"level":3,"title":"未发生改变的类","slug":"未发生改变的类","link":"#未发生改变的类","children":[]}]},{"level":2,"title":"RandomAccessFile类","slug":"randomaccessfile类","link":"#randomaccessfile类","children":[]},{"level":2,"title":"IO流典型用途","slug":"io流典型用途","link":"#io流典型用途","children":[{"level":3,"title":"缓冲输入文件","slug":"缓冲输入文件","link":"#缓冲输入文件","children":[]},{"level":3,"title":"从内存输入","slug":"从内存输入","link":"#从内存输入","children":[]},{"level":3,"title":"格式化内存输入","slug":"格式化内存输入","link":"#格式化内存输入","children":[]},{"level":3,"title":"基本文件的输出","slug":"基本文件的输出","link":"#基本文件的输出","children":[]},{"level":3,"title":"文本文件输出快捷方式","slug":"文本文件输出快捷方式","link":"#文本文件输出快捷方式","children":[]},{"level":3,"title":"存储和恢复数据","slug":"存储和恢复数据","link":"#存储和恢复数据","children":[]},{"level":3,"title":"读写随机访问文件","slug":"读写随机访问文件","link":"#读写随机访问文件","children":[]}]},{"level":2,"title":"本章小结","slug":"本章小结","link":"#本章小结","children":[]}],"git":{"createdTime":1553949104000,"updatedTime":1575206721000,"contributors":[{"name":"Moilk","email":"moilk@qq.com","commits":16},{"name":"LingCoder","email":"lingcoder@gmail.com","commits":1}]},"readingTime":{"minutes":28.04,"words":8412},"filePathRelative":"book/Appendix-IO-Streams.md","localizedDate":"2019年3月30日","autoDesc":true,"excerpt":""}');export{e as data};
