<!DOCTYPE html>
<html>
    <head>
        <title>Server</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

        <script src="https://unpkg.com/page/page.js"></script>
        <link href="assets2/css/style.css?date=<?= date("Y:m:d H:i:s") ?>" rel="stylesheet">
    </head>
    <body>
        <div id="preload_overlay">
            <div class="preload text-center">
                <div class="item item-1"></div>
                <div class="item item-2"></div>
                <div class="item item-3"></div>
                <div class="item item-4"></div>
                <br>
                <br>
                <br>
                <br>
                <span class="text">loading</span>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="d-flex justify-content-between pt-3 pb-3">
                    <div class="bd-highlight">
                        <span style="font-size: 40px;">logo</span>
                    </div>
                    <div class="bd-highlight" id="liveToastBtn2">
                        <a class="btn btn-primary btn-floating">
                            <i class="fab fa-instagram fa-lg"></i>
                        </a>
                        <a class="btn btn-danger btn-floating" id="liveToastBtn">
                            <i class="fas fa-lock fa-lg"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header" style="padding: 0;margin: 0; height: fit-content">
                            <!-- Navbar -->
                            <nav class="navbar navbar-expand-lg" style="padding: 0">
                                <div class="container-fluid" style="padding: 0">
                                    <button class="navbar-toggler btn btn-light p-3" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"  aria-expanded="false" aria-label="Toggle navigation">
                                        <i class="fas fa-bars"></i>
                                    </button>
                                    <div class="collapse navbar-collapse ml-0" id="main_nav">
                                        <ul class="navbar-nav me-auto mt-1 mb-2 mb-lg-0 p-1">
                                            <li class="nav-item">
                                                <a class="nav-link" href="./">Home</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="./login">Login</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="./features">Features</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="./chart">Chart</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="./about">About</a>
                                            </li>
                                            <li class="nav-item dropdown">
                                                <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Menu</a>
                                                <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                                    <li><a class="dropdown-item" href="./features">Features</a></li>
                                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                                    <li><hr class="dropdown-divider"></li>
                                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                                </ul>
                                            </li>

                                            <li class="nav-item dropdown">
                                                <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">Multilevel</a>
                                                <ul class="dropdown-menu shadow">
                                                    <li><a class="dropdown-item" href="#">Gallery</a></li>
                                                    <li><a class="dropdown-item" href="blog.html">Blog</a></li>
                                                    <li class="dropstart">
                                                        <a href="#" class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown">Submenu Left</a>
                                                        <ul class="dropdown-menu shadow">
                                                            <li><a class="dropdown-item" href=""> Third level 1</a></li>
                                                            <li><a class="dropdown-item" href=""> Third level 2</a></li>
                                                            <li><a class="dropdown-item" href=""> Third level 3</a></li>
                                                            <li><a class="dropdown-item" href=""> Third level 4</a></li>
                                                            <li><a class="dropdown-item" href=""> Third level 5</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="dropend">
                                                        <a href="#" class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside">Submenu Right</a>
                                                        <ul class="dropdown-menu shadow">
                                                            <li><a class="dropdown-item" href=""> Second level 1</a></li>
                                                            <li><a class="dropdown-item" href=""> Second level 2</a></li>
                                                            <li><a class="dropdown-item" href=""> Second level 3</a></li>
                                                            <li class="dropend">
                                                                <a href="#" class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside">Let's go deeper!</a>
                                                                <ul class="dropdown-menu dropdown-submenu shadow">
                                                                    <li><a class="dropdown-item" href=""> Third level 1</a></li>
                                                                    <li><a class="dropdown-item" href=""> Third level 2</a></li>
                                                                    <li><a class="dropdown-item" href=""> Third level 3</a></li>
                                                                    <li><a class="dropdown-item" href=""> Third level 4</a></li>
                                                                    <li class="dropend">
                                                                        <a href="#" class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown">Still don't have enough? Go much deeper!</a>
                                                                        <ul class="dropdown-menu dropdown-submenu shadow">
                                                                            <li><a class="dropdown-item" href=""> Third level 1</a></li>
                                                                            <li><a class="dropdown-item" href=""> Third level 2</a></li>
                                                                            <li><a class="dropdown-item" href=""> Third level 3</a></li>
                                                                            <li><a class="dropdown-item" href=""> Third level 4</a></li>
                                                                            <li><a class="dropdown-item" href=""> Third level 5</a></li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li><a class="dropdown-item" href=""> Third level 5</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><hr class="dropdown-divider"></li>
                                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                                </ul>
                                            </li>

                                            <li class="nav-item dropdown dropdown-mega position-static">
                                                <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">Megamenu</a>
                                                <div class="dropdown-menu shadow">
                                                    <div class="mega-content px-4">
                                                        <div class="container-fluid">
                                                            <div class="row">
                                                                <div class="col-12 col-sm-4 col-md-3 py-4">
                                                                    <h5>Pages</h5>
                                                                    <div class="list-group">
                                                                        <a class="list-group-item" href="#">Accomodations</a>
                                                                        <a class="list-group-item" href="#">Terms & Conditions</a>
                                                                        <a class="list-group-item" href="#">Privacy</a>
                                                                    </div>
                                                                </div>
                                                                <div class="col-12 col-sm-4 col-md-3 py-4">
                                                                    <h5>Card</h5>
                                                                    <div class="card">
                                                                        <img src="https://via.placeholder.com/350x150" class="img-fluid" alt="image">
                                                                        <div class="card-body">
                                                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-12 col-sm-4 col-md-3 py-4">
                                                                    <h5>Lot of Pages</h5>
                                                                    <p>Lorem ipsum dolo sit achmet muhamed borlan de irtka.
                                                                </div>
                                                                <div class="col-12 col-sm-12 col-md-3 py-4">
                                                                    <h5>Damn, so many</h5>
                                                                    <div class="list-group">
                                                                        <a class="list-group-item" href="#">Accomodations</a>
                                                                        <a class="list-group-item" href="#">Terms & Conditions</a>
                                                                        <a class="list-group-item" href="#">Privacy</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                            <!-- Navbar -->
                        </div>
                        <div class="card-body" id="contenPage" style="background-color: #C6C8CA">

                        </div>
                        <div class="card-footer bg-light">
                            <div class="row">
                                <div class="col text-lg-start">Footer</div>
                                <div class="col text-lg-end timeago" datetime="<?= date("Y-m-d H:i:s");?>"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--        <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
                    <div id="liveToast" class="toast mb-2" role="alert" aria-live="assertive" aria-atomic="true">
                        <div class="toast-header">
                            <svg class="bd-placeholder-img rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <rect width="100%" height="100%" fill="#007aff"></rect>
                            </svg>
                            <strong class="me-auto">Bootstrap</strong>
                            <small>11 mins ago</small>
                            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div class="toast-body">
                            Hello, world! This is a toast message.
                        </div>
                    </div>
                    <div id="liveToast2" class="toast mb-2" role="alert" aria-live="assertive" aria-atomic="true">
                        <div class="toast-header">
                            <svg class="bd-placeholder-img rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <rect width="100%" height="100%" fill="#B22222"></rect>
                            </svg>
                            <strong class="me-auto">Bootstrap 2</strong>
                            <small>11 mins ago</small>
                            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div class="toast-body">
                            Hello, world! This is a toast message.
                        </div>
                    </div>
                </div>-->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.1/chart.min.js"></script>
        <script src="assets2/js/timeago.full.min.js"></script>
        <script type="text/javascript" src="assets2/js/form.js"></script>
        <script type="text/javascript" src="assets2/js/table.js"></script>
        <script type="text/javascript" src="assets2/js/notif.js"></script>
        <script src="assets2/js/script.js?date=<?= date("Y:m:d H:i:s") ?>"></script>
    </body>
</html>