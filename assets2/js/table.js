/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";
class Tbl {
    config;
    list_actions = [];
    constructor(el, cnf) {
        const $this = this;
        if (cnf.offset == undefined) {
            cnf.perpage = 10;
            cnf.offset = 0;
        }
        if (cnf.freezColumns != undefined && typeof cnf.freezColumns == 'number') {
        }

        cnf.el = el;
        this.config = cnf;
        if (cnf.toolbars != undefined) {
            let el_toolbars = document.querySelector(cnf.toolbars);
            el_toolbars.classList.add("d-flex");
            el_toolbars.classList.add("justify-content-between");
            el_toolbars.classList.add("align-items-center");
            el_toolbars.classList.add("narrower");
            if (cnf.perpage != undefined && cnf.perpage != null && cnf.perpage != '' && cnf.perpage != 0) {
                var lmt = cnf.perpage
            } else {
                var lmt = 10;
            }
            let toolbars_left = `<input type="hidden" id="table_active_page" class="form-control" value="1" /><input type="hidden" name="limit" id="limitTable" value="${lmt}" /><input type="hidden" name="offset" id="offsetTable" value="${cnf.offset}" />`;
            toolbars_left += `<div id="toolbars_left" class=""></div>`;
            let toolbars_mid = '<div id="toolbars_midl" class="text-white col-4 bg- text-center">Table name</div>';
            let toolbars_right = '<div id="toolbars_right"></div>';
            el_toolbars.innerHTML = toolbars_left + toolbars_mid + toolbars_right;

            let el_status = document.querySelector(cnf.statusbar);
            el_status.classList.add("d-flex");
            el_status.classList.add("justify-content-between");
            el_status.classList.add("align-items-center");
            el_status.innerHTML = '<div id="left">...</div><div id="right">...</div>';
        } else {
            throw "toolbar element not found!";
        }

        let toolbars_left = document.querySelector("#toolbars_left");
        let toolbars_midl = document.querySelector("#toolbars_midl");
        let toolbars_right = document.querySelector("#toolbars_right");


        let input_src = '', input_reload = '', input_add = '';
        if (cnf.search == true) {
            input_src += '<input class="form-control form-control-sm" type="text" placeholder="Search" id="table_search_el" />';
        }
        if (cnf.addBtn == true) {
            input_add = '<button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2 py-1 me-1" id="button_add_table_data"><i class="fas fa-plus"></i></button>';
        }
        if (cnf.reloadBtn == true) {
            input_reload += '<button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2 py-1 me-1" id="button_reload_table"><i class="fas fa-redo"></i></button>';
        }
        toolbars_right.innerHTML = input_src;
        toolbars_left.innerHTML = input_add + input_reload;
        toolbars_midl.innerHTML = cnf.name;
        $this.paging();
        if (cnf.search == true) {
            var src = document.getElementById("table_search_el");
            src.addEventListener("keyup", function (event) {
                if (event.keyCode === 13) {
                    event.preventDefault();
                    $this.paging();
                }
            });
        }
        if (cnf.reloadBtn == true) {
            var reload = document.getElementById("button_reload_table");
            reload.addEventListener("click", function (event) {
                $this.reload();
            });
        }
        if (cnf.addBtn == true) {
            var add = document.getElementById("button_add_table_data");
            add.addEventListener("click", function (event) {
                let mdl_ele = cnf.addBtnAction
                mdl_ele();
            });
        }
    }
    paging() {
        const $this = this;
        let cnf = this.config;
        let el = this.config.el;
        let getEle = document.querySelector(el);
        let cols = this.config.columns;
        let col_size = cols.length;
        let tr_cols = `<tr class="table-light">`;
        if (col_size > 0) {
            for (var i = 0; i < col_size; i++) {
                tr_cols += `<th scope="col" class="text-center">${cols[i].title}</th>`;
            }
            tr_cols += `</tr>`;
        }
//        let pg = this.paging();
        let tbl = `<thead>${tr_cols}</thead><tbody id='tbody'></tbody><tfoot>${tr_cols}</tfoot>`;
        getEle.innerHTML = tbl;

        let el_status_left = document.querySelector(cnf.statusbar + " #left");
        let el_status_right = document.querySelector(cnf.statusbar + " #right");

        let limit = document.getElementById("limitTable").value;
        let table_search_el = document.getElementById("table_search_el").value;
        let offsetTable = document.getElementById("offsetTable").value;
        let table_active_page = document.getElementById("table_active_page").value;
        var params = new FormData();
        params.append('limit', limit);
        params.append('offset', offsetTable);
        params.append('search', table_search_el);

        fetch(cnf.ajax.url, {
            method: 'POST',
            body: params
        })
                .then(response => response.json())
                .then(function (data) {
                    let rows_table = [];
                    let rows_lenght = data.rows;
//                    console.log(data.rows);
                    (data.rows).forEach(function (row, k) {
                        let row_col = [];
                        cols.forEach(function (col, kk) {
                            let d = col.data;
                            let row_ele = `td`;
                            if (d !== undefined && d !== null && d !== '') {
                                row_col[kk] = `<${row_ele} id="row-${k}-${kk}">${row[d]}</${row_ele}>`;
                            } else {
                                row_col[kk] = `<${row_ele} id="row-${k}-${kk}" class="text-center">${col.formarter(row)}</${row_ele}>`;
                            }

                            if (typeof col.actions != "undefined") {
                                let re_act = []
                                let operations_element_key = Object.keys(col.actions);
                                for (let ac = 0; ac < operations_element_key.length; ac++) {
//                                    console.log(operations_element_key[ac], col.actions[operations_element_key[ac]]);
                                    re_act[ac] = {
                                        element: operations_element_key[ac],
                                        fn: col.actions[operations_element_key[ac]],
                                        "data": row
                                    };
                                }
                                $this.list_actions[k] = re_act;
                            }
                        });
                        if ((k % 2) == 0) {
                            rows_table[k] = `<tr class="table-light" id="row-${k}">${row_col.join('')}</tr>`;
                        } else {
                            rows_table[k] = `<tr class="table-primary" id="row-${k}">${row_col.join('')}</tr>`;
                        }

                    })
                    let tbody = document.querySelector(el + " #tbody");
                    tbody.innerHTML = rows_table.join('');

                    let pagination = `<nav id="tablePaginatoin"><ul class="pagination pagination-sm p-0 m-0"><li class="page-item"><button class="page-link" data-offset="0" data-limit="${cnf.perpage}" data-active="1">First</button></li>`;
                    let max = 0;
                    var x = 0;
                    for (var i = 0; i <= parseInt(data.total); i++) {
                        if (i % parseInt(limit) == 0) {
                            x++;
                            max = i;
                            if (x == parseInt(table_active_page)) {
                                pagination += `<li class="page-item active"><button class="page-link" data-offset="${i}" data-limit="${cnf.perpage}" data-before="${x - 1}" data-after="${x + 1}" data-active="${x}">${x}</button></li>`;
                            }
                            if (x == (parseInt(table_active_page) - 1)) {
                                pagination += `<li class="page-item"><button class="page-link" data-offset="${i}" data-limit="${cnf.perpage}" data-before="${x - 1}" data-after="${x + 1}" data-active="${x}">${x}</button></li>`;
                            }
                            if (x == (parseInt(table_active_page) + 1)) {
                                pagination += `<li class="page-item"><button class="page-link" data-offset="${i}" data-limit="${cnf.perpage}" data-before="${x - 1}" data-after="${x + 1}" data-active="${x}">${x}</button></li>`;
                            }
                        }
                    }
                    pagination += `<li class="page-item"><button class="page-link" data-offset="${max}" data-limit="${cnf.perpage}" data-active="${x}">Last</button></li></ul></nav>`;
                    el_status_right.innerHTML = pagination;
                    let status_min = parseInt(offsetTable) + 1, status_max = (parseInt(offsetTable) + parseInt(limit));
                    el_status_left.innerHTML = `Show ${status_min} to ${status_max} of ${data.total}`;

                    let pagination_btn = document.querySelectorAll("button.page-link").forEach(elem => {
                        elem.addEventListener('click', (e) => {
                            let lmt = e.target.getAttribute("data-limit");
                            let off = e.target.getAttribute("data-offset");
                            let active = e.target.getAttribute("data-active");
                            document.getElementById("offsetTable").value = off;
                            document.getElementById("limitTable").value = lmt;
                            document.getElementById("table_active_page").value = active;
                            $this.paging();
                        });
                    });
                })
                .then(function () {
                    $this.click();
                    $this.onclick();
                });
    }
    reload() {
        const $this = this;
        $this.paging();
    }
    click() {
        const $this = this;
        let i = 0;
        ($this.list_actions).forEach(el => {
            for (let x = 0; x < el.length; x++) {
                let elmnt = document.querySelector('tr#row-' + i + ' td ' + el[x].element);
                if (elmnt != null) {
                    elmnt.addEventListener('click', event => {
                        el[x].fn(event, el[x].data);
                    });
                }
            }
            i++;
        });
    }
    onclick() {
        const $this = this;
        let el = $this.config.el;
        let all_td = document.querySelectorAll(el + " tbody tr");
        let activer_id = '';
        all_td.forEach(e => {
            let get_id = e.getAttribute('id');
            document.querySelector("#" + get_id).addEventListener('click', ee => {
                activer_id = "#" + get_id;
                e.classList.toggle("table-dark");
                all_td.forEach(x => {
                    let contain = x.matches('.table-dark');
                    let xget_id = x.getAttribute('id');
                    let xother_id = "#" + xget_id;
                    if (contain == true && xother_id !== activer_id) {
                        x.classList.remove("table-dark");
                    }
                });
            });
        });
    }

}