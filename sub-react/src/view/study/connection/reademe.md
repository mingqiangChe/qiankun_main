组件通信

四种方式传值

子向父传值

在 React 中，向父组件传值可以通过回调函数的方式实现。父组件通过将一个函数作为 props 传递给子组件，子组件可以在需要的时候调用该函数，并将需要传递的值作为参数传入。

在上述示例中，父组件 ParentComponent 中定义了一个状态 childValue 和一个回调函数 handleChildValueChange，并将回调函数作为 onValueChange 属性传递给子组件 ChildComponent。

子组件 ChildComponent 中通过 useState 定义了一个状态 inputValue，并在输入框的 onChange 事件中更新该状态，并调用父组件传递的回调函数 onValueChange 并传递当前值。

这样，当子组件中的输入框值发生变化时，会触发父组件中的回调函数，并将新的值传递给父组件，父组件可以使用该值进行相应的操作。

父向子传值

跨代传值

Context 方法 传值
