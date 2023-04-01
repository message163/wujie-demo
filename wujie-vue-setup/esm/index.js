function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
import { defineComponent, h, getCurrentInstance, onMounted, watch, onBeforeUnmount } from "vue";
import { startApp, bus } from "wujie";
var wujie = defineComponent({
    props: {
        width: {
            type: String,
            default: ""
        },
        height: {
            type: String,
            default: ""
        },
        name: {
            type: String,
            default: "",
            required: true
        },
        loading: {
            type: HTMLElement,
            default: undefined
        },
        url: {
            type: String,
            default: "",
            required: true
        },
        sync: {
            type: Boolean,
            default: undefined
        },
        prefix: {
            type: Object,
            default: undefined
        },
        alive: {
            type: Boolean,
            default: undefined
        },
        props: {
            type: Object,
            default: undefined
        },
        attrs: {
            type: Object,
            default: undefined
        },
        replace: {
            type: Function,
            default: undefined
        },
        fetch: {
            type: Function,
            default: undefined
        },
        fiber: {
            type: Boolean,
            default: undefined
        },
        degrade: {
            type: Boolean,
            default: undefined
        },
        plugins: {
            type: Array,
            default: null
        },
        beforeLoad: {
            type: Function,
            default: null
        },
        beforeMount: {
            type: Function,
            default: null
        },
        afterMount: {
            type: Function,
            default: null
        },
        beforeUnmount: {
            type: Function,
            default: null
        },
        afterUnmount: {
            type: Function,
            default: null
        },
        activated: {
            type: Function,
            default: null
        },
        deactivated: {
            type: Function,
            default: null
        }
    },
    setup: function setup(props, param) {
        var emit = param.emit;
        var instance = getCurrentInstance();
        var init = function() {
            //微前端初始化方法就可以了
            startApp({
                name: props.name,
                url: props.url,
                el: instance === null || instance === void 0 ? void 0 : instance.refs.wujie,
                loading: props.loading,
                alive: props.alive,
                fetch: props.fetch,
                props: props.props,
                attrs: props.attrs,
                replace: props.replace,
                sync: props.sync,
                prefix: props.prefix,
                fiber: props.fiber,
                degrade: props.degrade,
                plugins: props.plugins,
                beforeLoad: props.beforeLoad,
                beforeMount: props.beforeMount,
                afterMount: props.afterMount,
                beforeUnmount: props.beforeUnmount,
                afterUnmount: props.afterUnmount,
                activated: props.activated,
                deactivated: props.deactivated
            });
        };
        watch([
            props.name,
            props.url
        ], function() {
            init();
        });
        var hanlderEmit = function(event) {
            for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                args[_key - 1] = arguments[_key];
            }
            emit.apply(void 0, [
                event
            ].concat(_toConsumableArray(args)));
        };
        onMounted(function() {
            bus.$onAll(hanlderEmit);
            init();
        });
        onBeforeUnmount(function() {
            bus.$offAll(hanlderEmit);
        });
        return function() {
            return h("div", {
                style: {
                    width: props.width,
                    height: props.height
                },
                ref: "wujie" //方便之后读取
            });
        };
    }
});
wujie.install = function(app) {
    app.component("WujieVue", wujie);
};
export default wujie;
