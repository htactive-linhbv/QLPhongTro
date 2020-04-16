<template>
  <div class="content-wrapper">
    <div class="page-header">
      <h3 class="page-title">Quản Lý thiết bị</h3>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#">Quản lý Thiết bị</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Thêm Mới</li>
        </ol>
      </nav>
    </div>
    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-8 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Thêm mới Thiết bị</h4>

            <form class="forms-sample">
              <div class="form-group">
                <label for="exampleInputUsername1">Tên Thiết bị</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputUsername1"
                  placeholder="Tên Thiết Bị"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Giá</label>
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Amount (to the nearest dollar)"
                    v-model="thietBi.gia"
                    @change="FormatNumber(thietBi.gia)"
                  />
                  <div class="input-group-prepend">
                    <span class="input-group-text">{{giaF}}</span>
                  </div>
                  <div class="input-group-prepend">
                    <span class="input-group-text">VND</span>
                  </div>
                </div>
                <div class="alert alert-danger" role="alert">This is a danger alert—check it out!</div>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputConfirmPassword1">Confirm Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputConfirmPassword1"
                  placeholder="Password"
                />
              </div>
              <div class="form-check form-check-flat form-check-primary">
                <label class="form-check-label">
                  <input type="checkbox" class="form-check-input" /> Remember me
                </label>
              </div>
              <button type="submit" class="btn btn-gradient-primary mr-2">Submit</button>
              <button class="btn btn-light">Cancel</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      thietBi: {
        tenThietBi: "",
        gia: "",
        chuTro_id: "",
        mota: ""
      },
      
    };
  },
  
    
};
</script>
    
<style>
</style>