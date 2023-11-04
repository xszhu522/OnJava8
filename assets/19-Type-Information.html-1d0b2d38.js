const e=JSON.parse('{"key":"v-025cc0f0","path":"/book/19-Type-Information.html","title":"第十九章 类型信息","lang":"zh-CN","frontmatter":{"description":"[TOC] RTTI（RunTime Type Information，运行时类型信息）能够在程序运行时发现和使用类型信息 RTTI 把我们从只能在编译期进行面向类型操作的禁锢中解脱了出来，并且让我们可以使用某些非常强大的程序。对 RTTI 的需要，揭示了面向对象设计中许多有趣（并且复杂）的特性，同时也带来了关于如何组织程序的基本问题。 本章将讨论 J...","head":[["meta",{"property":"og:url","content":"https://xszhu522.github.io/OnJava8/book/19-Type-Information.html"}],["meta",{"property":"og:site_name","content":"On Java 8"}],["meta",{"property":"og:title","content":"第十九章 类型信息"}],["meta",{"property":"og:description","content":"[TOC] RTTI（RunTime Type Information，运行时类型信息）能够在程序运行时发现和使用类型信息 RTTI 把我们从只能在编译期进行面向类型操作的禁锢中解脱了出来，并且让我们可以使用某些非常强大的程序。对 RTTI 的需要，揭示了面向对象设计中许多有趣（并且复杂）的特性，同时也带来了关于如何组织程序的基本问题。 本章将讨论 J..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-19T17:48:25.000Z"}],["meta",{"property":"article:author","content":"xszhu522"}],["meta",{"property":"article:modified_time","content":"2023-10-19T17:48:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"第十九章 类型信息\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-10-19T17:48:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xszhu522\\",\\"url\\":\\"https://xszhu522.github.io\\"}]}"]]},"headers":[{"level":2,"title":"为什么需要 RTTI","slug":"为什么需要-rtti","link":"#为什么需要-rtti","children":[]},{"level":2,"title":"Class 对象","slug":"class-对象","link":"#class-对象","children":[{"level":3,"title":"类字面常量","slug":"类字面常量","link":"#类字面常量","children":[]},{"level":3,"title":"泛化的 Class 引用","slug":"泛化的-class-引用","link":"#泛化的-class-引用","children":[]},{"level":3,"title":"cast() 方法","slug":"cast-方法","link":"#cast-方法","children":[]}]},{"level":2,"title":"类型转换检测","slug":"类型转换检测","link":"#类型转换检测","children":[{"level":3,"title":"使用类字面量","slug":"使用类字面量","link":"#使用类字面量","children":[]},{"level":3,"title":"一个动态 instanceof 函数","slug":"一个动态-instanceof-函数","link":"#一个动态-instanceof-函数","children":[]},{"level":3,"title":"递归计数","slug":"递归计数","link":"#递归计数","children":[]}]},{"level":2,"title":"注册工厂","slug":"注册工厂","link":"#注册工厂","children":[]},{"level":2,"title":"类的等价比较","slug":"类的等价比较","link":"#类的等价比较","children":[]},{"level":2,"title":"反射：运行时类信息","slug":"反射-运行时类信息","link":"#反射-运行时类信息","children":[{"level":3,"title":"类方法提取器","slug":"类方法提取器","link":"#类方法提取器","children":[]}]},{"level":2,"title":"动态代理","slug":"动态代理","link":"#动态代理","children":[]},{"level":2,"title":"Optional类","slug":"optional类","link":"#optional类","children":[{"level":3,"title":"标记接口","slug":"标记接口","link":"#标记接口","children":[]},{"level":3,"title":"Mock 对象和桩","slug":"mock-对象和桩","link":"#mock-对象和桩","children":[]}]},{"level":2,"title":"接口和类型","slug":"接口和类型","link":"#接口和类型","children":[]},{"level":2,"title":"本章小结","slug":"本章小结","link":"#本章小结","children":[]}],"git":{"createdTime":1553949104000,"updatedTime":1697737705000,"contributors":[{"name":"Moilk","email":"moilk@qq.com","commits":11},{"name":"DragonDove","email":"874898731@qq.com","commits":3},{"name":"Joe","email":"736777445@qq.com","commits":3},{"name":"LingCoder","email":"lingcoder@gmail.com","commits":3},{"name":"Stanley Tam","email":"stanley_tam@163.com","commits":3},{"name":"XuYanxin","email":"funnycodingxu@gmail.com","commits":2},{"name":"xiangflight","email":"xiangflight@foxmail.com","commits":2},{"name":"Lane","email":"zhanglintc623@gmail.com","commits":1},{"name":"Trency","email":"trency92@gmail.com","commits":1},{"name":"dingpeilong","email":"77676182@qq.com","commits":1},{"name":"unclesesame","email":"guoxu_1989@163.com","commits":1},{"name":"zhuxiaoshuai1","email":"zhuxiaoshuai1@xiaomi.com","commits":1}]},"readingTime":{"minutes":65.6,"words":19680},"filePathRelative":"book/19-Type-Information.md","localizedDate":"2019年3月30日","autoDesc":true,"excerpt":""}');export{e as data};
