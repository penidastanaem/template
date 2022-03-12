<style type="text/css">
    .gradient-custom {
        background: #3931af;
        border-radius: 5px;
    }

    .card-custom {
        border-bottom-left-radius: 10% 50%;
        border-top-left-radius: 10% 50%;
        background-color: #f8f9fa ;
        right: -12px;
    }


    .input-custom {
        background-color: white ;
    }

    .white-text {
        color: hsl(52, 0%, 98%);
        font-weight: 100 ;
        font-size: 14px;
    }

    .back-button {
        background-color: hsl(52, 0%, 98%);
        font-weight: 700;
        color: black ;
        margin-top: 50px ;
    }
</style>
<div class="row gradient-custom mb-3">
    <div class="col-md-3">
        <div style="margin-top: 50px; margin-left: 10px;" class="text-center">
            <i id="animationDemo" data-mdb-animation="slide-right" data-mdb-toggle="animation"
               data-mdb-animation-reset="true" data-mdb-animation-start="onScroll"
               data-mdb-animation-on-scroll="repeat" class="fas fa-3x fa-sign-in-alt text-white"></i>
            <h3 class="mt-3 text-white">Welcome</h3>
            <p class="white-text">Login!</p>
        </div>
    </div>
    <div class="col-md-9 justify-content-center">
        <div class="card card-custom pb-4">
            <div class="card-body mt-0 mx-5">
                <div class="text-center mb-3 pb-2 mt-3">
                    <h4 style="color: #495057 ;">Account</h4>
                </div>

                <form class="mb-0">

                    <div class="row mb-4">
                        <div class="col">
                            <div class="form-outline">
                                <input type="text" id="form9Example1" class="form-control input-custom" />
                                <label class="form-label" for="form9Example1">Username</label>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-outline">
                                <input type="text" id="form9Example2" class="form-control input-custom" />
                                <label class="form-label" for="form9Example2">Password</label>
                            </div>
                        </div>
                    </div>

                    <div class="float-end ">
                        <!-- Submit button -->
                        <button type="submit" class="btn btn-primary" style="background-color: #0062CC ;">Login</button>
                    </div>

                </form>
            </div>
        </div>
    </div>
</div>
<div class="row gradient-custom">
    <div class="col-md-3">
        <div style="margin-top: 50px; margin-left: 10px;" class="text-center">
            <i id="animationDemo" data-mdb-animation="slide-right" data-mdb-toggle="animation"
               data-mdb-animation-reset="true" data-mdb-animation-start="onScroll"
               data-mdb-animation-on-scroll="repeat" class="fas fa-3x fa-registered text-white"></i>
            <h3 class="mt-3 text-white">Welcome</h3>
            <p class="white-text">Do registration!</p>
        </div>
    </div>
    <div class="col-md-9 justify-content-center">
        <div class="card card-custom pb-4">
            <div class="card-body mt-0 mx-5">
                <div class="text-center mb-3 pb-2 mt-3">
                    <h4 style="color: #495057 ;">Account</h4>
                </div>

                <form class="mb-0">

                    <div class="row mb-4">
                        <div class="col">
                            <div class="form-outline">
                                <input type="text" id="form9Example1" class="form-control input-custom" />
                                <label class="form-label" for="form9Example1">First name</label>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-outline">
                                <input type="text" id="form9Example2" class="form-control input-custom" />
                                <label class="form-label" for="form9Example2">Last name</label>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col">
                            <div class="form-outline">
                                <input type="text" id="form9Example3" class="form-control input-custom" />
                                <label class="form-label" for="form9Example3">City</label>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-outline">
                                <input type="text" id="form9Example4" class="form-control input-custom" />
                                <label class="form-label" for="form9Example4">Zip</label>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col">
                            <div class="form-outline">
                                <input type="text" id="form9Example6" class="form-control input-custom" />
                                <label class="form-label" for="form9Example6">Address</label>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-outline">
                                <input type="email" id="typeEmail" class="form-control input-custom" />
                                <label class="form-label" for="typeEmail">Email</label>
                            </div>
                        </div>
                    </div>

                    <div class="float-end ">
                        <!-- Submit button -->
                        <button type="submit" class="btn btn-primary" style="background-color: #0062CC ;">Login</button>
                    </div>

                </form>
            </div>
        </div>
    </div>
</div>