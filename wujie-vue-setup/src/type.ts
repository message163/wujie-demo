import type { plugin } from 'wujie'
type lifecycle = (appWindow: Window) => any;
interface Props {
    /** 唯一性用户必须保证 */
    name: string;
    /** 需要渲染的url */
    url: string;
    /** 需要渲染的html, 如果用户已有则无需从url请求 */
    html?: string;
    /** 渲染的容器 */
    loading?: HTMLElement;
    /** 路由同步开关， false刷新无效，但是前进后退依然有效 */
    sync?: boolean;
    /** 子应用短路径替换，路由同步时生效 */
    prefix?: { [key: string]: string };
    /** 子应用保活模式，state不会丢失 */
    alive?: boolean;
    /** 注入给子应用的数据 */
    props?: { [key: string]: any };
    /** js采用fiber模式执行 */
    fiber?: boolean;
    /** 子应用采用降级iframe方案 */
    degrade?: boolean;
    /** 自定义运行iframe的属性 */
    attrs?: { [key: string]: any };
    /** 自定义降级渲染iframe的属性 */
    degradeAttrs?: { [key: string]: any };
    /** 代码替换钩子 */
    replace?: (codeText: string) => string;
    /** 自定义fetch，资源和接口 */
    fetch?: (input: RequestInfo, init?: RequestInit) => Promise<Response>;
    /** 子应插件 */
    plugins: Array<plugin>;
    /** 子应用生命周期 */
    beforeLoad?: lifecycle;
    /** 没有做生命周期改造的子应用不会调用 */
    beforeMount?: lifecycle;
    afterMount?: lifecycle;
    beforeUnmount?: lifecycle;
    afterUnmount?: lifecycle;
    /** 非保活应用不会调用 */
    activated?: lifecycle;
    deactivated?: lifecycle;
};

export { Props } 

