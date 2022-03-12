<div class="row">
    <div class="card card-cascade narrower p-0">
        <!--Card header-->
        <div class="view view-cascade gradient-card-header blue-gradient narrower py-2 mx-4 mb-3 d-flex justify-content-between align-items-center">
            <div>Features</div>
            <div>
                <button class="btn btn-outline-white btn-rounded btn-sm px-2 py-1 me-1" type="button" id="refreshPage"><i class="fas fa-redo"></i></button>
            </div>
        </div>
        <!--/Card header-->
        <!--Card content-->
        <div class="card-body p-0">
        </div>
        <!--/.Card content-->
        <div class="card-footer">
            <div class="row">
                <div class="col-4">
                    <div class="list-group" id="list-tab" role="tablist">
                        <a class="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-dialog" role="tab" aria-controls="list-dialog">Dialog</a>
                        <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-button" role="tab" aria-controls="list-button">Buttons</a>
                        <a class="list-group-item list-group-item-action" id="list-form-list" data-bs-toggle="list" href="#list-form" role="tab" aria-controls="form">Form</a>
                    </div>
                </div>
                <div class="col-8">
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="list-dialog" role="tabpanel" aria-labelledby="list-home-list">
                            <div class="card">
                                <div class="card-header">
                                    Dialog
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col">
                                            <div class="btn-group btn-group-block" role="group" aria-label="Basic example">
                                                <button type="button" class="btn btn-primary" id="btnAlert">Alert</button>
                                                <button type="button" class="btn btn-primary" id="btnPrompt">Prompt</button>
                                                <button type="button" class="btn btn-primary" id="btnConfirm">Confirm</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="list-button" role="tabpanel" aria-labelledby="list-button-list">
                            <div class="card mb-3">
                                <div class="card-header">
                                    Buttons
                                </div>
                                <div class="card-body">
                                    <button type="button" class="btn btn-primary position-relative">
                                        Inbox
                                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                            99+
                                            <span class="visually-hidden">unread messages</span>
                                        </span>
                                    </button>
                                    <br>
                                    <br>
                                    <button type="button" class="btn btn-primary position-relative">
                                        Profile
                                        <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                                            <span class="visually-hidden">New alerts</span>
                                        </span>
                                    </button>
                                    <br>
                                    <br>
                                    <button type="button" class="btn btn-primary">Primary</button>
                                    <button type="button" class="btn btn-secondary">Secondary</button>
                                    <button type="button" class="btn btn-success">Success</button>
                                    <button type="button" class="btn btn-danger">Danger</button>
                                    <button type="button" class="btn btn-warning">Warning</button>
                                    <button type="button" class="btn btn-info">Info</button>
                                    <button type="button" class="btn btn-light">Light</button>
                                    <button type="button" class="btn btn-dark">Dark</button>
                                    <button type="button" class="btn btn-link">Link</button>
                                </div>
                            </div>
                            <div class="card mb-3">
                                <div class="card-header">
                                    Buttons floating
                                </div>
                                <div class="card-body">
                                    <button type="button" class="btn btn-danger btn-lg btn-floating"><i class="fas fa-lock fa-lg"></i></button>
                                    <button type="button" class="btn btn-danger btn-floating"><i class="fas fa-lock fa-lg"></i></button>
                                    <button type="button" class="btn btn-danger btn-sm btn-floating"><i class="fas fa-lock fa-lg"></i></button>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="list-form" role="tabpanel" aria-labelledby="list-form-list">
                            <div class="card mb-3">
                                <div class="card-header">
                                    Form
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col">
                                            <label for="formFileSm" class="form-label">File</label>
                                            <div class="mb-3 input-group input-group-sm">
                                                <input class="form-control form-control-sm" id="formFileSm" type="file">
                                                <button class="btn btn-outline-secondary" type="button">Upload</button>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="mb-3">
                                                <label for="formFileSm" class="form-label">File</label>
                                                <input class="form-control form-control-sm" id="formFileSm" type="file">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <select class="form-select form-select-sm" aria-label="Default select example">
                                                <option selected>Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div class="col">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Default checkbox
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                                                <label class="form-check-label" for="flexRadioDefault1">
                                                    1
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                                                <label class="form-check-label" for="flexRadioDefault2">
                                                    2
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <div class="input-group">
                                                <label for="customRange2" class="form-label">Example range</label>
                                                <input type="range" class="form-range" min="0" max="5" id="customRange2">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>