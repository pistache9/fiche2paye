import { createStore } from 'vuex'

export default createStore({
    state: {
    //   status: '',
      token: localStorage.getItem('token') || '',
      status: 'osef',
      email: null,
      entreprises: null,
      loggedIn: false,
    },
    getters: {
      // getLoggedInStatus: state => !!state.token,
      getLoggedInStatus: state => state.loggedIn,
      getToken: state => state.token,
      getEntreprises: state => state.entreprises,
      getEmail: state => state.email,
      // getId: state => state.user_id,
    //   status: state => state.status,
    },
    mutations: {
      setLoggedInStatus(state, status) {
        state.loggedIn = status;
        if (status === false) {
          localStorage.removeItem("token");
        }
        // state.token = null;
        // state.user_id = null;
      },
      setUserData(state, status) {
        state.email = status.email;
        state.entreprises = status.entreprises;
      },

    //   setStatus(state, status) {
    //     state.status = status;
    //     if (status === "nogame") {
    //       state.playingRami = false;
    //     }
    //   },
      // setId(state, status) {
      //   state.user_id = status;
      // },
      loginUser(state, user) {
        // instance.defaults.headers.common['Authorization'] = user.token;
        console.log("LOGUISER", user);
        // A FAIRE PLUS TARD LE TOKEN
        user.token = '1234567';
        // if (user.token) {
        //   localStorage.setItem("token", user.token);
        // }
        localStorage.setItem('token', JSON.stringify(user.token));

        state.token = user.token;
        // state.token = user.token;
        state.email = user.email;
        if (user.entreprises) {
          state.entreprises = user.entreprises;
        } else {
          state.entreprises = [];
        }
        this.commit('setLoggedInStatus', true);
        this.commit('setUserData', user);


      },
      logoutUser(state) {
        // localStorage.removeItem('user_id');
        localStorage.removeItem('token');
        this.commit('setLoggedInStatus', false);
        // state.user_id = null;
        state.token = null;
      }
    },
    actions: {
        async setUser({commit}, userInfos) {
          commit('setUserData', userInfos);
        },
        async login({commit}, userInfos) {
            // commit('setStatus', 'loading');
            console.log("Dans store", userInfos);
            // const response = await instance.post("login", userInfos)
            // console.log("la réponse login : ", response.data.data)
            // commit('logUser', response.data.data);
            // commit('setId', userInfos._id);

            commit('loginUser', userInfos);
            // commit('setStatus', 'logged in');
            // localStorage.setItem("user", JSON.stringify(response.data.data.user));
        },
        async logout({commit}) {
            console.log("On déconnecte...");
            commit('logoutUser');
        }
         // async register({commit}, userInfos) {
        //     console.log(userInfos);
        //     const response = await instance.post("register", {
        //       pseudo: userInfos.pseudo,
        //       mail: userInfos.mail,
        //       password: userInfos.password,
        //       versesList: userInfos.versesList,
        //     })
        //     commit('setStatus', 'created');
        //     console.log("la réponse : ", response.data)
        // },
    },
})
