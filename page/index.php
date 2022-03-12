<div class="row">
    <div class="card card-cascade narrower p-0">
        <!--Card header-->
        <div class="view view-cascade gradient-card-header blue-gradient narrower py-2 mx-4 mb-3" id="tableToolbars"></div>
        <!--/Card header-->
        <!--Card content-->
        <div class="card-body p-0">
            <div class="table-responsive">
                <table class="table table-hover text-nowrap m-0" id="myTable"></table>
            </div>
        </div>
        <!--/.Card content-->
        <div class="card-footer" id="tableStatus"></div>
    </div>
</div>
<!--Modal: modalSocial-->
<div class="modal fade" id="modalForm" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog cascading-modal" role="document">

        <!--Content-->
        <form class="modal-content" id="form_sample" enctype="multipart/form-data">

            <!--Header-->
            <div class="modal-header light-blue darken-3 blue-gradient py-2">
                <span class="title white-text"><i class="fas fa-users"></i> Spreed the word!</span>
                <button type="button" class="btn-close btn-outline-white btn-rounded btn-sm" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <!--Body-->
            <div class="modal-body mb-0" id="form-content"></div>
            <div class="modal-footer">
                <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                    <button type="reset" class="btn btn-danger">Reset</button>
                    <button type="submit" class="btn btn-primary">Save</button>
                </div>
            </div>

        </form>
        <!--/.Content-->

    </div>
</div>
<!--Modal: modalSocial-->