

export default ({
  state: {
      type:null,
      message:null
  },
  mutations: {
      SUCCESS(state,message){
        state.type = 'alert-success';
        state.message = message;
      },
      ERROR(state,message){
          state.type = 'alert-danger';
          this.state.message=message;
      },
      CLEAR(state){
          state.type=null,
          state.message=null
      }
  },
  actions: {
    SUCCESS({commit},message){
        commit('SUCCESS',message);
        setTimeout(()=>{
            commit('CLEAR');
        },5000)
    },
    ERROR({commit},message){
        commit('ERROR',message);
        setTimeout(()=>{
            commit('CLEAR');
        },5000)
    }
  },
 
})
