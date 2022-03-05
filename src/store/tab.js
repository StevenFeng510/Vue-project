import Cookie from 'js-cookie';
export default {
    state: {
        isCollapse: false,
        tabsList: [
            {
                path: '',
                name: 'home',
                label: '首页',
                icon: 'home',
            },
        ],
        currentMenu: null,
        menu: [],
    },
    mutations: {
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse;
        },
        selectMenu(state, val) {
            if (val.name !== 'home') {
                state.currentMenu = val;
                const result = state.tabsList.findIndex((item) => item.name === val.name);
                if (result === -1) {
                    state.tabsList.push(val);
                }
            } else {
                state.currentMenu = null;
            }
        },
        closeTag(state, val) {
            const result = state.tabsList.findIndex((item) => item.name === val.name);
            state.tabsList.splice(result, 1);
        },

        // 修改 Menu方法
        setMenu(state, val) {
            state.menu = val;
            // 将数据缓存到浏览器的Cookie中
            Cookie.set('menu', JSON.stringify(val));
        },

        // 清空 Menu
        clearMenu(state) {
            state.menu = [];
            Cookie.remove('menu');
        },

        // 动态添加menu
        addMenu(state, router) {
            if (!Cookie.get('menu')) {
                return;
            }
            const menu = JSON.parse(Cookie.get('menu'));
            state.menu = menu;
            console.log(menu);
            const menuArray = [];
            menu.forEach((item) => {
                console.log();
                if (item.children) {
                    item.children = item.children.map((item) => {
                        item.component = () => import(`../views/${item.url}`);
                        return item;
                    });
                    menuArray.push(...item.children);
                } else {
                    item.component = () => import(`../views/${item.url}`);
                    menuArray.push(...item.children);
                }
            });
            console.log(menuArray);

            // 路由的动态添加;
            menuArray.forEach((item) => {
                router.addRoutes('Main', item);
            });
        },
    },
};
