# Component的本质

 在React和Vue中经常封装和使用组件，组件在其中到底是什么？

组件就是对一组dom的封装

用函数可以表示为

``` js
const myComponent = () => {
    return {
        tag:'div',
        props:{
            onClick:this.handle
        }
        children:"你好Vue"
    }
}
```

组件的返回值是虚拟dom,用于表达组件需要渲染的内容，然后用虚拟dom来描述该组件

``` js
const Vnode = {
    tag:'myComponent'
}
```

然后经过渲染器完成渲染

在Vue单文件中经常写template模板，里面写各种各样用户渲染展示的标签，其实这些标签都会经过Vue中的编译器编译成一个渲染函数render在经过渲染器渲染至页面展示

``` html
<template>
    <div class="root" @click="handle">
        你好Vue
    </div>
</template>
```

上面这段模板经过编译会变成下面的渲染函数

``` js
render(){
	return h('div',{onClick:handle},'你好Vue')
},
```

单文件组件其实本质是一个js对象，因为模板template回被编译成渲染函数，所以对象结构大致是这样的

``` js
export default {
    render(){
        return h('div',{onClick:handle},'你好Vue')
    },
    method:{
        handle(){
            ...
        }
    },
    date(){
        return {...}
    },
    ...
}
```

组件为什么不可以是多节点的：因为虚拟节点是单根的，渲染函数收一个虚拟节点进行渲染