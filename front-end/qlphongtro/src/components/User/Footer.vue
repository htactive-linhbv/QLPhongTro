<template>
  <!-- Footer -->
	<section id="footer" style="margin-top: 60px;">
		<div class="container">
			<div class="row text-center text-xs-center text-sm-left text-md-left">
				
				<div class="col-xs-12 col-sm-4 col-md-4">
					<img src="/assets/images/logo/khutro-logo.png" alt="logo" height="70px">
					<p style="color:white;;margin-top: 20px;">KHUTRO – Phần mềm Quản lý Nhà trọ, Căn hộ dịch vụ. Là một trong những đơn vị tiên phong trong lĩnh vực phát triển phần mềm quản lý bất động sản cho thuê số 1 thị trường hiện nay.</p>
				</div>
				<div class="col-xs-12 col-sm-4 col-md-4">
					<h5>Liên hệ</h5>
					<ul class="list-unstyled quick-links">
						<li><a href="#"><i class="fa fa-angle-double-right"></i>Hotline: 0929391544</a></li>
						<li><a href="#"><i class="fa fa-angle-double-right"></i>Email: vanlinhb.303@gmail.com</a></li>
						<li><a href="#"><i class="fa fa-angle-double-right"></i>Fanpage: www.fb.com/chuoicanho.vn</a></li>
						
					</ul>
				</div>
				<div class="col-xs-12 col-sm-4 col-md-4">
					<h5>Liên kết</h5>
					<ul class="list-unstyled quick-links">
						<li><a href="#"><i class="fa fa-angle-double-right"></i>Trang Chủ</a></li>
						<li><a href="#"><i class="fa fa-angle-double-right"></i>Bảng Giá</a></li>
						<li><a href="#"><i class="fa fa-angle-double-right"></i>Khuyến Mại</a></li>
						<li><a href="#"><i class="fa fa-angle-double-right"></i>Tin Tức</a></li>
						<li><a href="#" ><i class="fa fa-angle-double-right"></i>Tin Tức</a></li>
					</ul>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
					<ul class="list-unstyled list-inline social text-center">
						<li class="list-inline-item"><a href="#"><i class="fa fa-facebook"></i></a></li>
						<li class="list-inline-item"><a href="#"><i class="fa fa-twitter"></i></a></li>
						<li class="list-inline-item"><a href="#"><i class="fa fa-instagram"></i></a></li>
						<li class="list-inline-item"><a href="#"><i class="fa fa-google-plus"></i></a></li>
						<li class="list-inline-item"><a href="#" target="_blank"><i class="fa fa-envelope"></i></a></li>
					</ul>
				</div>
				<hr>
			</div>	
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
					<p>Copyright © 2020 <u><a href="#">KHUTRO - Phần Mềm Quản Lý Nhà Trọ, Căn Hộ Dịch Vụ</a></u> Phát triển bởi Nhóm đồ án </p>
					
				</div>
				<hr>
			</div>	
		</div>
	</section>
	<!-- ./Footer -->
</template>

<script>
export default {

}
</script>

<style scoped>
/* Footer */
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
section {
    padding: 60px 0;
}

section .section-title {
    text-align: center;
    color: #007b5e;
    margin-bottom: 50px;
    text-transform: uppercase;
}
#footer {
    background: #3e4b5b !important;
}
#footer h5{
	padding-left: 10px;
    border-left: 3px solid #eeeeee;
    padding-bottom: 6px;
    margin-bottom: 20px;
    color:#ffffff;
}
#footer a {
    color: #ffffff;
    text-decoration: none !important;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
}
#footer ul.social li{
	padding: 3px 0;
}
#footer ul.social li a i {
    margin-right: 5px;
	font-size:25px;
	-webkit-transition: .5s all ease;
	-moz-transition: .5s all ease;
	transition: .5s all ease;
}
#footer ul.social li:hover a i {
	font-size:30px;
	margin-top:-10px;
}
#footer ul.social li a,
#footer ul.quick-links li a{
	color:#ffffff;
}
#footer ul.social li a:hover{
	color:#eeeeee;
}
#footer ul.quick-links li{
	padding: 3px 0;
	-webkit-transition: .5s all ease;
	-moz-transition: .5s all ease;
	transition: .5s all ease;
}
#footer ul.quick-links li:hover{
	padding: 3px 0;
	margin-left:5px;
	font-weight:700;
}
#footer ul.quick-links li a i{
	margin-right: 5px;
}
#footer ul.quick-links li:hover a i {
    font-weight: 700;
}

@media (max-width:767px){
	#footer h5 {
    padding-left: 0;
    border-left: transparent;
    padding-bottom: 0px;
    margin-bottom: 10px;
}
}

</style>