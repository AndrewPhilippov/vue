const state =
{
    token: null
};

const getters =
{
    isLoggedIn: state => !!state.token
};

const actions =
{
    logout: ({ commit }) => {
        commit.state.token = null;
    },
        finalizeLogin: () => {

    },
        login: () => {

    }
};

const mutations =
{
    setToken: (state, token) => {
        state.token = token;
    }
};
