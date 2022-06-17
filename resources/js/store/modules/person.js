import router from "../../router";

const state = {
    person: null,
    fetchPerson: false,
    personError: null
}

const getters = {
    person: () => state.person,
    fetchPerson: () => state.fetchPerson,
    personError: () => state.personError
}

const actions = {
    async login({commit}, payload) {
        await axios.get('/sanctum/csrf-cookie')
        const response = await axios.post('/login', {...payload})
        localStorage.setItem('x-xsrf-token', response.config.headers['X-XSRF-TOKEN'])
        router.push({name: 'main'})
    },
    async logout({commit}) {
        await axios.post('/logout')
        localStorage.removeItem('x-xsrf-token')
        commit('setPerson', null)
        router.push({name: 'main'})
    },
    async registration({commit}, payload) {
        await axios.get('/sanctum/csrf-cookie')
        const response = await axios.post('/register', {...payload})
        localStorage.setItem('x-xsrf-token', response.config.headers['X-XSRF-TOKEN'])
        router.push({name: 'main'})
        window.scrollTo(0, 0);
    },
    async getProfile({commit}) {
        commit('personIsFetching', true)
        const {data} = await axios.get('/api/user')
        commit('setPerson', data)
        commit('personIsFetching', false)
    },
    setPersonError({commit}, err) {
        commit('setPersonError', err.response.data.errors)
    }
}

const mutations = {
    setPerson(state, person) {
        state.person = person
    },
    setPersonError(state, personError) {
        state.personError = personError
    },
    personIsFetching(state, fetchPerson) {
        state.fetchPerson = fetchPerson
    }
}

export default {
    state, getters, actions, mutations
}
