/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


class Form {
    config;
    constructor(el, cnf) {
        cnf.el = el;
        this.config = cnf;
    }
    build() {
        let container = document.querySelector(this.config.el);
        let htmlForm = ``;
        let htmlFormHidden = ``;
        let select_multiplie_click_hide_items = false;
        (this.config.control).forEach(function (e) {
            let inputControll = ``,
                    attr = e.attr;
            if (e.attr.type == 'textarea') {
                inputControll += `<textarea `;
                for (let atr of Object.keys(attr)) {
                    inputControll += `${atr}="${attr[atr]}" `;
                }
                inputControll += `data-form-id="${attr.id}" `;
                inputControll += ` >`;
                inputControll += `</textarea>`;
            }
            if (e.attr.type == 'text' || e.attr.type == 'password' || e.attr.type == 'email') {
                inputControll += `<input `;
                for (let atr of Object.keys(attr)) {
                    inputControll += `${atr}="${attr[atr]}" `;
                }
                inputControll += `data-form-id="${attr.id}" `;
                inputControll += ` />`;
            }
            if (e.attr.type == 'file') {
                inputControll += `<input `;
                for (let atr of Object.keys(attr)) {
                    inputControll += `${atr}="${attr[atr]}" `;
                }
                inputControll += `data-form-id="${attr.id}" `;
                inputControll += ` />`;
            }
            if (e.attr.type == 'checkbox') {
                inputControll += `<div class="form-check"><input `;
                for (let atr of Object.keys(attr)) {
                    inputControll += `${atr}="${attr[atr]}" `;
                }
                inputControll += `data-form-id="${attr.id}" `;
                inputControll += ` /><label class="form-check-label" for="${attr.id}"></label></div>`;
            }
            if (e.attr.type == 'hidden') {
                htmlFormHidden += `<input `;
                for (let atr of Object.keys(attr)) {
                    htmlFormHidden += `${atr}="${attr[atr]}" `;
                }
                htmlFormHidden += `data-form-id="${attr.id}" `;
                htmlFormHidden += ` />`;
            }
            if (e.attr.type == 'select') {
                if (e.attr.multiple) {
                    select_multiplie_click_hide_items = true;
                    inputControll += `<div class="dropdown keep-inside-clicks-open"><button class="btn btn-sm dropdown-toggle border" style="width:100%" type="button" id="${e.attr.id}" data-bs-toggle="dropdown" data-bs-auto-close="outside">${e.label}</button>`;
                    inputControll += `<ul class="dropdown-menu" aria-labelledby="${e.attr.id}" style="width: 100%; max-height:150px;overflow-y: auto;">`;
                    inputControll += `<li class="srcKeywords"><input class="form-control form-control-sm m-2"  style="width: 96%;" type="text" placeholder="Search ${e.label} ..." aria-label="Search ${e.label} ..."></li>`;
                    (e.attr.options).forEach(function (ee) {
                        inputControll += `<li data-key="${ee.text}"><div class="form-check"><input type="checkbox" name="${e.attr.id}['${ee.value}']" class="form-check-input" data-parents-item="${e.attr.name}" id="multiSelect${ee.value}">
  <label class="form-check-label" for="multiSelect${ee.value}">${ee.text}</label>
</div></li>`;
                    });
                    inputControll += `</ul>`;
                    inputControll += `</div>`;
                } else {
                    inputControll += `<select `;
                    for (let atr of Object.keys(attr)) {
                        if (atr !== 'options') {
                            inputControll += `${atr}="${attr[atr]}" `;
                        }
                    }
                    inputControll += `data-form-id="${attr.id}" `;
                    inputControll += `>`;
                    (e.attr.options).forEach(function (ee) {
                        inputControll += `<option value="${ee.value}">${ee.text}</option>`;
                    });
                    inputControll += `</select>`;
                }
            }
            if (e.attr.type != 'hidden') {
                htmlForm += `<div id="row-${attr.id}" class="${e.divClass}"><label for="${e.attr.id}" class="${e.labelClass}">${e.label}</label><div class="${e.boxClass}">${inputControll}</div></div>`;
            }
        });
        container.innerHTML = htmlForm + htmlFormHidden;
        if (select_multiplie_click_hide_items == true) {
            document.querySelectorAll(".keep-inside-clicks-open").forEach(e => {
                let input;
                input = e.querySelector("ul .srcKeywords input[type=text]");
                input.addEventListener("keyup", function (f) {
                    let filter, ul, li, a;
                    li = e.querySelectorAll("ul li");
                    filter = f.target.value.toUpperCase();
                    for (let i = 0; i < li.length; i++) {
                        const src = li[i].getAttribute("data-key");
                        if (src !== null) {
                            if (src.toUpperCase().indexOf(filter) > -1) {
                                li[i].style.display = "";
                            } else {
                                li[i].style.display = "none";
                            }
                        }
                    }
                });
            });
        }
        
        let form = document.querySelector(this.config.formElement);
        form.addEventListener('reset', (e) => {
            let helper = document.querySelectorAll('div[data-form-helper]');
            helper.forEach(ee => {
                ee.remove();
            });
        });
    }
    load(e) {
        this.build();
        var size = Object.keys(e).length;
        if (size > 0) {
            let i = 0;
            for (let item in e) {
                i++;
                if (Array.isArray(e[item])) {
                    (e[item]).forEach(i => {
                        let name = `${item}['${i}']`;
                        let get_inpt = document.querySelector(`[name="${name}`);
                        setTimeout(function () {
                            if (get_inpt !== null) {
                                get_inpt.setAttribute("checked", "checked");
                            }
                        }, 100 * i);
                    });
                } else {
                    let get_inpt = document.querySelector(`[name="${item}"]`);
                    setTimeout(function () {
                        get_inpt.value = e[item];
                    }, 100 * i);
                }
            }
        }
    }
    submit() {
        let $this = this;
        let el = this.config.formElement;
        let form = document.querySelector(el);
        if (this.config.url !== undefined) {
            let kvpairs = {submit: 'submit'};
            for (var i = 0; i < form.elements.length; i++) {
                var e = form.elements[i];
                if (e.name != '') {
                    if (e.multiple) {
                        let mltp = Array.from(e.options).filter(option => option.selected).map(option => option.value);
                        kvpairs[e.name] = mltp.join(',');
                    } else if (e.type == 'file') {
                        let file = document.querySelector(`input[name="${e.name}"]`).files[0];
                        if(file != undefined){
                            kvpairs[e.name] = file;
                        }
                    } else if (e.type == 'checkbox') {
                        let ck = (e.checked) ? 1 : 0;
                        if (ck == 1) {
                            kvpairs[e.name] = ck;
                        }
                    } else {
                        let value = (e.value !== undefined || e.value !== '' || e.value !== null) ? e.value : '';
                        kvpairs[e.name] = encodeURIComponent(value);
                    }
                }
            }
            return kvpairs;
        }
    }
    errors(msg) {
        let all_errors = [], x = 0;
        for (let i in msg) {
            if (i !== 'id' && msg[i] != '') {
                all_errors[x] = msg[i];
            }
            let old = document.querySelectorAll('div[data-form-helper]');
            old.forEach(e => {
                e.remove();
            });
            setTimeout(function () {
                try {
                    let nw = document.querySelector(`#row-${i}`);
                    if (nw !== null) {
                        nw.insertAdjacentHTML('beforeend', `<div id="#helper-row-${i}" class="form-text text-danger pt-1" data-form-helper>${msg[i]}</div>`);
                    }
                } catch (exception) {
                    return true;
                }

            }, 1000);
            x++;
        }
        let alrt = new Notif({
            title: 'Error',
            type: 'error',
            message: all_errors.join('<br>')
        });
        alrt.toast();
    }
}
async function postData(url = '', data = {}) {
    const formData = new FormData();
    for (const name in data) {
        formData.append(name, data[name]);
    }
    const response = await fetch(url, {
        method: 'POST',
        body: formData
    });
    return response.json(); // parses JSON response into native JavaScript objects
}