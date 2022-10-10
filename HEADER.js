const Header = `<div class="header ">
    <!--ITS MAIN CONTAINER OF HEADER-->
    <div class="row header-row " role="header">
        <!-- THIS IS FIRST COLUMN THAT CONTAIN SOCIAL ICON AND SERACH-BAR -->
        <div class="col py-sm-2 header-col1 first-col d-flex py-2 justify-content-around  align-items-center ">
            <div class="icons ">
                <a class="" href=""><i class="fab fa-facebook-f"></i></a>
                <a href=""><i class="fab fa-youtube"></i></a>
                <a href=""><i class="fab fa-twitter"></i></a>
            </div>

            <!-- SEARCH-BAR -->
            <div class="input-group w-50">
                <input type="text" class="form-control " placeholder="Search this blog">
                <div class="input-group-append">
                    <button class="btn btn-secondary " type="button">
                        <i class="fa fa-search"></i>
                    </button>
                </div>
            </div>

        </div>

        <!-- THIS IS SECOND COLUMN OF MAIN CONTAINER THAT CONTAIN PHONE-NO. AND LINK -->
        <div class="col py-2 pt-3 header-col2 d-flex justify-content-around">
            <div class="head-text"><i class="fa fa-phone" aria-hidden="true"></i>+91 8923853807</div>
            <a class="head-text text-white text-decoration-none" href="#">Sell On Company</a>
            <a class="head-text text-white text-decoration-none" href="#">Download App</a>
            <a class="head-text text-white text-decoration-none" href="#">English</a>

        </div>
    </div>
</div>
<!-- </div> -->
<!-- -------HEADER SECTION END-------- -->

<!-- -------NAVIGATIN/NAVBAR SECTION START-------- -->
<div class="header-bottom" id="header-sticky">
    <div class="container-fluid p-0 m-0">


        <nav id="nav-bar" class="navbar navbar-expand-lg navbar-light my-0 p-0 row align-items-center"
            role="navigation" aria-label="Main">
            <!-- LOGO -->
            <div class="col-2"><img src="images/logo.png" alt="logo" /></div>
            <button class="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- NAVBAR-LINK -->
            <div class="collapse navbar-collapse py-4 " id="navbarSupportedContent">
                <div class="col-xl-7 col-lg-8 col-md-7 col-sm-5">
                    <ul class="navbar-nav" id="navigation">
                        <li><a href="">Home</a></li>
                        <li><a href="">Categories</a>
                            <ul class="submenu">
                                <li><a href="">Men</a></li>
                                <li><a href="">Women</a></li>
                                <li><a href="">Children</a></li>
                                <li><a href="">Ethnic</a></li>
                                <li><a href="">Winter</a></li>
                            </ul>
                        </li>
                        <li><a href="">Latest</a>
                            <ul class="submenu">
                                <li><a href="">Product List</a></li>
                                <li><a href="">Product details</a></li>
                            </ul>
                        </li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Pages</a>
                        </li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>

                <!-- SIGIN BUTTON -->
                <div class="col-xl-5 col-lg-4 col-md-3 col-sm-6">
                    <ul
                        class="header-right f-right d-none d-lg-block d-flex justify-content-between align-items-center">
                        <li><a href="#"><button class="buttn header-btn " data-toggle="modal"
                                    data-target="#exampleModal">Signin</button></li></a>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</div>
<!----------NAVIGATIN/NAVBAR SECTION END-------- -->
<!-- ************ LOGIN MODAL  ***************-->

<div class="modal fade w-100" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog w-100 mt-0">
        <div class="modal-content  w-100">
            <div class="modal-header p-0 w-100">
                <!-- <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> -->
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <!-- ************ LOGIN OR CREATE ACCOUNT PAGE ***************-->

            <main class="form-container ">

                <!-- ****** FORM-LOGO ***** -->
                <div class=" form-logo text-center">
                    <img src="images/logo.png" alt="">
                </div>

                <div class="shadow container">
                    <!--*************** FORM-TAB SECTION START  ********************-->
                    <div class="form-tab">
                        <ul class="nav nav-tabs row " id="myTab" role="tablist">
                            <li class="nav-item col-6 p-0" role="presentation">
                                <a class="nav-link active" id="home-tab" data-toggle="tab" data-target="#home"
                                    type="button" role="tab" aria-controls="home" aria-selected="true">Home</a>
                            </li>
                            <li class="nav-item col-6 p-0" role="presentation">
                                <a class="nav-link" id="profile-tab" data-toggle="tab" data-target="#profile"
                                    type="button" role="tab" aria-controls="profile"
                                    aria-selected="false">Profile</a>
                            </li>

                        </ul>
                    </div>
                    <!--******************* FORM-INFORMATION SECTION START **************-->


                    <div class="tab-content" id="myTabContent">

                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <form>
                                <div class="form-row">

                                    <div class="form-group col-12">
                                        <label for="inputEmail4">Email <span class="text-danger">*</span>
                                        </label>
                                        <input type="email" class="form-control" id="inputEmail4">
                                    </div>
                                    <div class="form-group col-12">
                                        <label for="inputPassword4">Password <span
                                                class="text-danger">*</span></label>
                                        <input type="password" class="form-control" id="inputPassword4"
                                            placeholder="********">
                                    </div>
                                    <div class="form-group col-12 w-100">
                                        <a href="#"><button type="radio" class="btn btn-primary w-100">Sign
                                                in</button></a>
                                    </div>
                                    <div class="form-group col-12 w-100">
                                        <a href=""><button type="radio" class="btn forgot-password w-100">FORGOT
                                                YOUR
                                                PASSWORD?</button></a>
                                    </div>
                                </div>

                            </form>
                        </div>
                        <!--************** CREATE ACCOUNT PAGE CONTENT **********************-->


                        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <form>
                                <div class="form-row">
                                    <div class="form-group col-12">
                                        <label for="Username">Username<span class="text-danger">*</span></label>
                                        <input type="text" class="form-control" id="inputEmail1"
                                            placeholder="username">
                                    </div>
                                    <div class="form-group col-12">
                                        <label for="inputEmail4">Email<span class="text-danger">*</span></label>
                                        <input type="email" class="form-control" id="inputEmail2"
                                            placeholder="example@gmail.com">
                                    </div>

                                    <div class="form-group col-12">
                                        <label for="inputPassword4">Password<span
                                                class="text-danger">*</span></label>
                                        <input type="password" class="form-control" id="inputPassword"
                                            placeholder="***********">
                                    </div>
                                    <div class="form-group col-12 w-100 create-btn">
                                        <a href="#"><button type="submit" class="btn btn-primary w-100">Create
                                                Account</button></a>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>

                    <hr>
                    <!-- LOGIN WITH ANOTHER SECTION START  -->


                    <div class="login-with-another ">
                        <div class="login-with  text-center d-block">
                            <h5>Or Login With</h5>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class=" login-with-btn col-12 facebook-btn ">
                                    <a href=""><i class="fab fa-facebook"></i>Facebook</a>
                                </div>
                            </div>
                            <div class="col-4 ">
                                <div class="login-with-btn col-12 twitter-btn">
                                    <a href=""><i class="fab fa-twitter"></i>Twitter</a>
                                </div>
                            </div>
                            <div class="col-4 align-items-stat">
                                <div class="login-with-btn col-12 google-btn ">
                                    <a href=""><i class="fab fa-google-plus"></i>Google</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- LOGIN WITH ANOTHER SECTION END  -->

                <!--******************* FORM-INFORMATION SECTION END ********-->
            </main>
        </div>
    </div>
</div>`
document.getElementById('HEADER').innerHTML = Header;