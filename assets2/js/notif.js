/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


class Notif {
    config;
    constructor(cnf) {
        this.config = cnf;
    }

    dec2hex(dec) {
        return dec.toString(16).padStart(2, "0")
    }

// generateId :: Integer -> String
    generateId(len) {
        var arr = new Uint8Array((len || 40) / 2)
        window.crypto.getRandomValues(arr)
        return Array.from(arr, this.dec2hex).join('')
    }

    toast() {
        let cnf = this.config;
        let title = cnf.title,
                message = cnf.message,
                type = (cnf.type !== undefined && cnf.type !== null && cnf.type !== '') ? cnf.type : 'info',
                timer = (cnf.timer !== undefined && cnf.timer !== null && cnf.timer !== '') ? parseInt(cnf.timer) : 5000,
                animation = (cnf.animation !== undefined && cnf.animation !== null && cnf.animation !== '') ? parseInt(cnf.animation) : true;
        let toast_container_id = 'toast_container';
//                container = `<div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11" id="${toast_container_id}"></div>`;
        const find_toast_container_id = document.getElementById(toast_container_id);
        if (find_toast_container_id == undefined && find_toast_container_id == null) {
            var newNode = document.createElement('div');
            newNode.className = 'position-fixed bottom-0 end-0 p-3';
            newNode.id = toast_container_id;
            newNode.style.zIndex = '10000';
            document.body.appendChild(newNode);
        }
        let color = '#303f9f';
        if (type == 'info') {
            color = '#0dcaf0';
        } else if (type == 'success') {
            color = '#20c997';
        } else if (type == 'error') {
            color = '#dc3545';
        } else if (type == 'warning') {
            color = '#ffc107';
        }
        let time = new Date();
        let random_id = `toast_${this.generateId(10)}`,
                html = `<div id="${random_id}" class="toast mb-2" role="alert" aria-live="assertive" aria-atomic="true" data-bs-animation="${animation}" data-bs-autohide="true" data-bs-delay="${timer}">
                <div class="toast-header">
                    <svg class="bd-placeholder-img rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                    <rect width="100%" height="100%" fill="${color}"></rect>
                    </svg>
                    <strong class="me-auto">${title}</strong>
                    <small class="timeago" datetime="${time}"></small>
                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="toast-body">
                    ${message}
                </div>
            </div>`;
        const container_id = document.getElementById(toast_container_id);
        container_id.insertAdjacentHTML('afterbegin', html);
//        setTimeout(function () {
        var toastLiveExample = document.getElementById(random_id);
        var toast = new bootstrap.Toast(toastLiveExample);
        toast.show();
        var myToastEl = document.getElementById(random_id);
        myToastEl.addEventListener('hidden.bs.toast', function () {
            toast.dispose();
            document.getElementById(random_id).remove();
        });
        timeago.render(document.querySelectorAll('.timeago'));
//        }, 500);
    }
    modalCreator(type = 'alert') {
        let cancelBtn = ``, size = 'modal-sm';
        if (type == 'confirm' || type == 'prompt') {
            cancelBtn = `<button type="button" class="btn btn-danger" data-bs-dismiss="modal" aria-label="Close" id="cancelBtn">Cancel</button>`;
        }
        if (type == 'prompt') {
            size = '';
        }
        let random_id = `modal_dialog_${this.generateId(10)}`,
                html = `<div class="modal fade" id="${random_id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog cascading-modal ${size}" role="document">

        <!--Content-->
        <div class="modal-content" id="form_sample">

            <!--Header-->
            <div class="modal-header light-blue blue-gradient py-2">
                <span class="title white-text">${this.config.title}</span>
                <button type="button" class="btn-close btn-outline-white btn-rounded btn-sm text-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <!--Body-->
            <div class="modal-body mb-0" id="myModalBodyDiv">${this.config.message}</div>
            <div class="modal-footer">
                <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
        ${cancelBtn}
                    <button type="submit" class="btn btn-primary" id="okModal">Ok</button>
                </div>
            </div>

        </div>
        <!--/.Content-->

    </div>
</div>`;
        document.body.insertAdjacentHTML('beforeend', html);
        return random_id;
    }

    alert() {
        let $this = this;
        $this.config.title = 'Alert!';
        let alert_id = this.modalCreator('alert');
        var myModal = new bootstrap.Modal(document.getElementById(alert_id), {
            keyboard: false
        });
        document.getElementById("okModal").addEventListener('click', function () {
            $this.config.confirm(true);
            myModal.hide();
        });
        var myModalEl = document.getElementById(alert_id);
        myModalEl.addEventListener('hidden.bs.modal', function (event) {
            document.getElementById(alert_id).remove();
        });
        myModal.show();
    }
    confirm() {
        let $this = this;
        $this.config.title = 'Confirm!';
        let confirm_id = this.modalCreator('confirm');
        var myModal = new bootstrap.Modal(document.getElementById(confirm_id), {
            keyboard: false
        });
        document.getElementById("okModal").addEventListener('click', function () {
            $this.config.confirm(true);
            myModal.hide();
        });
        document.getElementById("cancelBtn").addEventListener('click', function () {
            $this.config.confirm(false);
            myModal.hide();
        });
        var myModalEl = document.getElementById(confirm_id);
        myModalEl.addEventListener('hidden.bs.modal', function (event) {
            document.getElementById(confirm_id).remove();
        });
        myModal.show();
    }
    prompt() {
        if (this.config.title == undefined && this.config.message == undefined && this.config.formElement == undefined) {
            alert("title / message / formElement is undefined");
            return false;
        }
        let $this = this;
        let prompt_id = this.modalCreator('prompt');
        var myModal = new bootstrap.Modal(document.getElementById(prompt_id), {
            keyboard: false
        });
        var myModalEl = document.getElementById(prompt_id);
        myModalEl.addEventListener('show.bs.modal', function (event) {
            let newMsg = `<div class="alert alert-info" role="alert">${$this.config.message}</div><form id="form_prompt_div"></form>`,
                    bodyModal = `#${prompt_id} div div div#myModalBodyDiv`;
            let bdy = document.querySelector(bodyModal);
            bdy.innerHTML = newMsg;
            let $form = new Form("#form_prompt_div", {
                formElement: '#form_prompt_div',
                control: $this.config.formElement
            });
            $form.build();
            document.getElementById(prompt_id).remove();
        });
        document.getElementById("okModal").addEventListener('click', function () {
            let formElement = document.querySelector("#form_prompt_div");
            var kvpairs = {};
            for (var i = 0; i < formElement.elements.length; i++) {
                var e = formElement.elements[i];
                if (e.name != '') {
                    let value = (e.value !== undefined || e.value !== '' || e.value !== null) ? e.value : '';
                    kvpairs[encodeURIComponent(e.name)]  = encodeURIComponent(value);
                }
            }
            $this.config.confirm(true, kvpairs);
            myModal.hide();
        });
        document.getElementById("cancelBtn").addEventListener('click', function () {
            $this.config.confirm(false, []);
            myModal.hide();
        });
        myModal.show();
        myModalEl.addEventListener('hidden.bs.modal', function (event) {
            document.getElementById(prompt_id).remove();
        });
    }
}