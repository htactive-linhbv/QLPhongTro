

export default ({
    state: {
        isActive:false
    },
    mutations: {
        ACTIVE(state){
            state.isActive=!state.isActive
        }
       
    },
    actions: {
      onActive({commit}){
          commit('ACTIVE');
      },
    
    },
   
  })
  