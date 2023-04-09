//这个模块会暴露给 host 项目去使用

let wrap = document.createElement("div");

let list = [
    { name: "张三", age: 18 },
    { name: "李四", age: 19 },
    { name: "王五", age: 20 },
]

list.forEach(item => {
    let p = document.createElement("p");
    p.innerHTML = `${item.name} - ${item.age}`;
    wrap.appendChild(p);
})

export const addList = () => {
    document.body.appendChild(wrap);
}