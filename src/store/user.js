import Cookie from 'js-cookie';

export default {
    state: {
        token: '',
    },
    mutations: {
        setToken(state, val) {
            state.token = val;
            // 接收两个参数  1 cookie名称 2 值
            Cookie.set('token', val);
        },
        clearToken(state) {
            state.token = '';
            // 清空token
            Cookie.remove('token');
        },
        getToken(state) {
            state.token = state.token || Cookie.get('token');
        },
    },
};
