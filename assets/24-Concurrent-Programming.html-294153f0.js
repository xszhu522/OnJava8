const e=JSON.parse('{"key":"v-9aef4b90","path":"/book/24-Concurrent-Programming.html","title":"第二十四章 并发编程","lang":"zh-CN","frontmatter":{"description":"[TOC] 爱丽丝：“我可不想到疯子中间去” 猫咪：“啊，那没辙了，我们这都是疯子。我疯了，你也疯了” 爱丽丝：“你怎么知道我疯了”。 猫咪：“你一定是疯了，否则你就不会来这儿” ——爱丽丝梦游仙境 第 6 章。 在本章之前，我们惯用一种简单顺序的叙事方式来编程，有点类似文学中的意识流：第一件事发生了，然后是第二件，第三件……总之，我们完全掌握着事情发...","head":[["meta",{"property":"og:url","content":"https://xszhu522.github.io/OnJava8/book/24-Concurrent-Programming.html"}],["meta",{"property":"og:site_name","content":"On Java 8"}],["meta",{"property":"og:title","content":"第二十四章 并发编程"}],["meta",{"property":"og:description","content":"[TOC] 爱丽丝：“我可不想到疯子中间去” 猫咪：“啊，那没辙了，我们这都是疯子。我疯了，你也疯了” 爱丽丝：“你怎么知道我疯了”。 猫咪：“你一定是疯了，否则你就不会来这儿” ——爱丽丝梦游仙境 第 6 章。 在本章之前，我们惯用一种简单顺序的叙事方式来编程，有点类似文学中的意识流：第一件事发生了，然后是第二件，第三件……总之，我们完全掌握着事情发..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-19T17:48:25.000Z"}],["meta",{"property":"article:author","content":"xszhu522"}],["meta",{"property":"article:modified_time","content":"2023-10-19T17:48:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"第二十四章 并发编程\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-10-19T17:48:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xszhu522\\",\\"url\\":\\"https://xszhu522.github.io\\"}]}"]]},"headers":[{"level":2,"title":"术语问题","slug":"术语问题","link":"#术语问题","children":[]},{"level":2,"title":"并发的新定义","slug":"并发的新定义","link":"#并发的新定义","children":[]},{"level":2,"title":"并发的超能力","slug":"并发的超能力","link":"#并发的超能力","children":[]},{"level":2,"title":"并发为速度而生","slug":"并发为速度而生","link":"#并发为速度而生","children":[]},{"level":2,"title":"Java 并发的四句格言","slug":"java-并发的四句格言","link":"#java-并发的四句格言","children":[{"level":3,"title":"1.不要用它","slug":"_1-不要用它","link":"#_1-不要用它","children":[]},{"level":3,"title":"2.没有什么是真的，一切可能都有问题","slug":"_2-没有什么是真的-一切可能都有问题","link":"#_2-没有什么是真的-一切可能都有问题","children":[]},{"level":3,"title":"3.仅仅是它能运行，并不意味着它没有问题","slug":"_3-仅仅是它能运行-并不意味着它没有问题","link":"#_3-仅仅是它能运行-并不意味着它没有问题","children":[]},{"level":3,"title":"4.你必须理解它","slug":"_4-你必须理解它","link":"#_4-你必须理解它","children":[]}]},{"level":2,"title":"残酷的真相","slug":"残酷的真相","link":"#残酷的真相","children":[]},{"level":2,"title":"本章其余部分","slug":"本章其余部分","link":"#本章其余部分","children":[]},{"level":2,"title":"并行流","slug":"并行流","link":"#并行流","children":[]},{"level":2,"title":"创建和运行任务","slug":"创建和运行任务","link":"#创建和运行任务","children":[]},{"level":2,"title":"终止耗时任务","slug":"终止耗时任务","link":"#终止耗时任务","children":[]},{"level":2,"title":"CompletableFuture 类","slug":"completablefuture-类","link":"#completablefuture-类","children":[{"level":3,"title":"基本用法","slug":"基本用法","link":"#基本用法","children":[]},{"level":3,"title":"结合 CompletableFuture","slug":"结合-completablefuture","link":"#结合-completablefuture","children":[]},{"level":3,"title":"模拟","slug":"模拟","link":"#模拟","children":[]},{"level":3,"title":"异常","slug":"异常","link":"#异常","children":[]},{"level":3,"title":"流异常（Stream Exception）","slug":"流异常-stream-exception","link":"#流异常-stream-exception","children":[]},{"level":3,"title":"检查性异常","slug":"检查性异常","link":"#检查性异常","children":[]}]},{"level":2,"title":"死锁","slug":"死锁","link":"#死锁","children":[]},{"level":2,"title":"构造方法非线程安全","slug":"构造方法非线程安全","link":"#构造方法非线程安全","children":[]},{"level":2,"title":"复杂性和代价","slug":"复杂性和代价","link":"#复杂性和代价","children":[]},{"level":2,"title":"本章小结","slug":"本章小结","link":"#本章小结","children":[{"level":3,"title":"缺点","slug":"缺点","link":"#缺点","children":[]},{"level":3,"title":"共享内存陷阱","slug":"共享内存陷阱","link":"#共享内存陷阱","children":[]},{"level":3,"title":"This Albatross is Big","slug":"this-albatross-is-big","link":"#this-albatross-is-big","children":[]},{"level":3,"title":"其他类库","slug":"其他类库","link":"#其他类库","children":[]},{"level":3,"title":"考虑为并发设计的语言","slug":"考虑为并发设计的语言","link":"#考虑为并发设计的语言","children":[]},{"level":3,"title":"拓展阅读","slug":"拓展阅读","link":"#拓展阅读","children":[]}]}],"git":{"createdTime":1553949104000,"updatedTime":1697737705000,"contributors":[{"name":"LingCoder","email":"lingcoder@gmail.com","commits":9},{"name":"blackwatch","email":"zhangzhiweiChange@gmail.com","commits":7},{"name":"zhangzw","email":"zhangzhiwei@travelsky.com","commits":5},{"name":"arobot","email":"niweigede@163.com","commits":4},{"name":"theFruitcat","email":"34080012+theFruitcat@users.noreply.github.com","commits":3},{"name":"张智伟","email":"zhangzhiweiChange@gmail.com","commits":3},{"name":"Joe","email":"736777445@qq.com","commits":2},{"name":"TENCHIANG","email":"yy5209zz@gmail.com","commits":2},{"name":"XuYanxin","email":"funnycodingxu@gmail.com","commits":2},{"name":"crimson","email":"1291463831@qq.com","commits":2},{"name":"‘blackwatch","email":"zhangzhiweichange@gamil.com","commits":2},{"name":"Crimson_Loves_Code","email":"39024757+OrientationJump@users.noreply.github.com","commits":1},{"name":"Jianing Liang","email":"2603054678@qq.com","commits":1},{"name":"Lane","email":"zhanglintc623@gmail.com","commits":1},{"name":"RexHuang","email":"RexHuang_dev@163.com","commits":1},{"name":"Xin Wang","email":"wangxinalex@gmail.com","commits":1},{"name":"ZhiQiang Jiang","email":"34731641+JerryQiang@users.noreply.github.com","commits":1},{"name":"alton zheng","email":"53368134+alton-zheng@users.noreply.github.com","commits":1},{"name":"amyxin","email":"896123009@qq.com","commits":1},{"name":"diguage","email":"leejun119@gmail.com","commits":1},{"name":"salithfish","email":"31979864+salithfish@users.noreply.github.com","commits":1},{"name":"wsb200514","email":"weisubao1987@gmail.com","commits":1},{"name":"zhuxiaoshuai1","email":"zhuxiaoshuai1@xiaomi.com","commits":1},{"name":"zzw","email":"zhangzhiweichange@gmail.com","commits":1}]},"readingTime":{"minutes":111.06,"words":33317},"filePathRelative":"book/24-Concurrent-Programming.md","localizedDate":"2019年3月30日","autoDesc":true,"excerpt":""}');export{e as data};
