/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
let contenPage = document.querySelector('#contenPage');
let preload_overlay = document.querySelector('#preload_overlay');
let preload_overlay_text = document.querySelector('#preload_overlay div .text');
document.addEventListener("DOMContentLoaded", function (event) {
    timeago.render(document.querySelectorAll('.timeago'));
});

page.base('/template-main');
page('/', index);
page('/features', features);
page('/chart', chart);
page('/about', about);
page('/login', login);
page('*', _404);
page({
    dispatch: true
});

function index(ctx) {
    let url = 'page/index.php';
    let load_ele = document.getElementById("preload_overlay")
    load_ele.style.display = 'block';
    let load_text = document.querySelector("#preload_overlay div .text");
    load_text.innerHTML = 'Start ... ';
    fetch(url)
            .then(function (response) {
                return response.text();
                load_text.innerHTML = 'Prepare ... ';
            })
            .then(function (body) {
                load_text.innerHTML = 'Prepare ... ';
                contenPage.innerHTML = body;
            })
            .then(function () {
                load_text.innerHTML = 'Prepare ... ';
                let $form = new Form("#form-content", {
                    formElement: '#form_sample',
                    url: 'page/ajax.php',
                    control: [
                        {
                            divClass: 'row mb-2 border-bottom',
                            label: "Nama",
                            labelClass: 'col-sm-4 col-form-label',
                            attr: {
                                id: "nama",
                                class: "form-control form-control-sm",
                                name: 'nama',
                                type: 'text',
                                placeholder: 'Input Nama'
                            },
                            boxClass: 'col-sm-8'
                        },
                        {
                            divClass: 'row mb-2 border-bottom',
                            label: "Tlp",
                            labelClass: 'col-sm-4 col-form-label',
                            attr: {
                                id: "tlp",
                                class: "form-control form-control-sm",
                                name: 'tlp',
                                type: 'text',
                                placeholder: 'Input Tlp',
                            },
                            boxClass: 'col-sm-8'
                        },
                        {
                            divClass: 'row mb-2 border-bottom',
                            label: "Password",
                            labelClass: 'col-sm-4 col-form-label',
                            attr: {
                                id: "password",
                                class: "form-control form-control-sm",
                                name: 'password',
                                type: 'password',
                                placeholder: 'Password',
                            },
                            boxClass: 'col-sm-8'
                        },
                        {
                            attr: {
                                id: "id",
                                name: 'id',
                                type: 'hidden',
                            }
                        },
                        {
                            divClass: 'row mb-2 border-bottom',
                            label: "Jenis Kelamin",
                            labelClass: 'col-sm-4 col-form-label',
                            attr: {
                                id: "jk",
                                class: "form-select form-select-sm",
                                name: 'jk',
                                type: 'select',
                                options: [
                                    {value: "", text: 'Pilih Jenis Kelamin'},
                                    {value: "Laki-laki", text: 'Laki-laki'},
                                    {value: "Perempuan", text: 'Perempuan'}
                                ]
                            },
                            boxClass: 'col-sm-8'
                        },
                        {
                            divClass: 'row mb-2 border-bottom',
                            label: "Pekerjaan",
                            labelClass: 'col-sm-4 col-form-label',
                            attr: {
                                id: "pekerjaan",
                                name: 'pekerjaan',
                                type: 'select',
                                multiple: 'multiple',
                                options: [
                                    {value: "pns", text: 'PNS'},
                                    {value: "swasta", text: 'Swasta'},
                                    {value: "lain", text: 'Lainnya'}
                                ]
                            },
                            boxClass: 'col-sm-8'
                        },
                        {
                            divClass: 'row mb-2 border-bottom',
                            label: "Matakuliah",
                            labelClass: 'col-sm-4 col-form-label',
                            attr: {
                                id: "mk",
                                name: 'mk',
                                type: 'select',
                                multiple: 'multiple',
                                options: [
                                    {value: "bi", text: 'Bindo'},
                                    {value: "ba", text: 'Matematika'},
                                    {value: "bc", text: 'Bing'},
                                    {value: "fisika", text: 'Fisika'},
                                    {value: "kimia", text: 'Kimia'},
                                    {value: "biologi", text: 'Biologi'}
                                ]
                            },
                            boxClass: 'col-sm-8'
                        },
                        {
                            divClass: 'row mb-2 border-bottom',
                            label: "Aktif",
                            labelClass: 'col-sm-4',
                            attr: {
                                id: "aktif",
                                class: "form-check-input",
                                name: 'aktif',
                                type: 'checkbox',
                                role: 'switch'
                            },
                            boxClass: 'col-sm-8'
                        },
                        {
                            divClass: 'row mb-2 border-bottom',
                            label: "Comment",
                            labelClass: 'col-sm-4 col-form-label',
                            attr: {
                                id: "comment",
                                class: "form-control form-control-sm",
                                name: 'comment',
                                type: 'textarea',
                                placeholder: 'Komentar',
                                row: 3
                            },
                            boxClass: 'col-sm-8'
                        },
                        {
                            divClass: 'row mb-2',
                            label: "Foto",
                            labelClass: 'col-sm-4 col-form-label',
                            attr: {
                                id: "foto",
                                class: "form-control form-control-sm",
                                name: 'foto',
                                type: 'file',
                                placeholder: 'Foto'
                            },
                            boxClass: 'col-sm-8'
                        }
                    ]
                });
                window.actions = {
                    'div ul li button.edit': function (e, row) {
                        var myModal = new bootstrap.Modal('#modalForm', {
                            keyboard: false
                        });
                        myModal.show();
                        $form.load({
                            'nama': row.nama,
                            'id': row.id,
                            'tlp': row.tlp,
                            'jk': row.jk,
                            'password': row.password,
                            'comment': row.comment,
                            pekerjaan: ['pns'],
                            mk: ['bi', 'bing', 'ba', 'biologi']
                        });
                        document.querySelector("#modalForm div form div .title").innerHTML = "Edit Data";
                    },
                    'div ul li button.delete': function (e, row) {
                        alert(JSON.stringify(row));
                    }
                };
                let $tbl = new Tbl("#myTable", {
                    ajax: {
                        url: 'page/ajax-get.php'
                    },
                    columns: [
                        {
                            'title': 'Operation',
                            formarter: function () {
                                return `<div class="btn-group btn-group-sm" role="group">
  <button class="btn btn-info btn-sm dropdown-toggle py-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    <i class="fas fa-cog"></i>
  </button>
  <ul class="dropdown-menu">
    <li><button class="dropdown-item edit">Edit</button></li>
    <li><hr class="dropdown-divider"></li>
    <li><button class="dropdown-item delete">Delete</button></li>
  </ul>
</div>`
                            },
                            actions: window.actions
                        },
                        {
                            'title': 'No',
                            'data': 'no'
                        },
                        {
                            'title': 'Nama',
                            'data': 'nama'
                        },
                        {
                            'title': 'Tlp',
                            'data': 'tlp'
                        },
                        {
                            'title': 'Alamat',
                            'data': 'alamat'
                        },
                        {
                            'title': 'Email',
                            'data': 'email'
                        },
                        {
                            'title': 'Nik',
                            'data': 'nik'
                        },
                        {
                            'title': 'Mahasiswa',
                            'data': 'mahasiswa'
                        },
                        {
                            'title': 'Gender',
                            'data': 'jk'
                        },
                        {
                            'title': 'Pekerjaan',
                            'data': 'pekerjaan'
                        },
                        {
                            'title': 'Aktif',
                            'data': 'aktif'
                        }
                    ],
                    toolbars: "#tableToolbars",
                    statusbar: "#tableStatus",
                    name: "Contoh tabel",
                    search: true,
                    reloadBtn: true,
                    addBtn: true,
                    addBtnAction: (e) => {
                        var myModal = new bootstrap.Modal('#modalForm', {
                            keyboard: false
                        })
                        myModal.show();
                        $form.load({
                            'nama': '',
                            'id': 0,
                            'tlp': '',
                            'jk': '',
                            'password': '',
                            'comment': ''
                        });
                        document.querySelector("#modalForm div form div .title").innerHTML = "Add Data";
                    },
                    pagination: true,
                    perpage: 2,
                });
                let form = document.querySelector('#form_sample');
                form.addEventListener('submit', (event) => {
                    event.preventDefault();
                    let data = $form.submit();
                    postData("page/ajax-post.php", data)
                            .then(data => {
                                if (data.success == false) {
                                    $form.errors(data.data)
                                }
                            });
                });
            })
            .then(function () {
                load_text.innerHTML = "Finish ...";
                setTimeout(function () {
                    load_ele.style.display = 'none';
                }, 1500);
            });
}
function login(ctx) {
    let url = 'page/login.php';
    fetch(url)
            .then(function (response) {
                return response.text();
            })
            .then(function (body) {
                contenPage.innerHTML = body;
            });
}
function features() {
    let url = 'page/features.php';
    let load_ele = document.getElementById("preload_overlay")
    load_ele.style.display = 'block';
    let load_text = document.querySelector("#preload_overlay div .text");
    load_text.innerHTML = 'Start ... ';
    fetch(url)
            .then(function (response) {
                load_text.innerHTML = 'Prepare ... ';
                return response.text();
            })
            .then(function (body) {
                contenPage.innerHTML = body;
                load_text.innerHTML = 'Install ... ';
            })
            .then(function () {
                document.querySelector("#btnAlert").addEventListener("click", function () {
                    let alrt = new Notif({
                        message: 'Message alert',
                        confirm: function (result) {
                            alert(result);
                        }
                    });
                    alrt.alert();
                });
                document.querySelector("#btnConfirm").addEventListener("click", function () {
                    let alerts = new Notif({
                        message: 'Are you ready to rock?',
                        confirm: function (result) {
                            alert(result);
                        }
                    });
                    alerts.confirm();
                });
                document.querySelector("#btnPrompt").addEventListener("click", function () {
                    let prompt = new Notif({
                        title: 'Alasan',
                        message: 'Need input!',
                        formElement: [
                            {
                                divClass: 'row mb-2 border-bottom',
                                label: "Nama",
                                labelClass: 'col-sm-4 col-form-label',
                                attr: {
                                    id: "nama",
                                    class: "form-control form-control-sm",
                                    name: 'nama',
                                    type: 'text',
                                    placeholder: 'Input Nama'
                                },
                                boxClass: 'col-sm-8'
                            },
                            {
                                divClass: 'row mb-2 border-bottom',
                                label: "Password",
                                labelClass: 'col-sm-4 col-form-label',
                                attr: {
                                    id: "password",
                                    class: "form-control form-control-sm",
                                    name: 'password',
                                    type: 'password',
                                    placeholder: 'Password',
                                },
                                boxClass: 'col-sm-8'
                            }
                        ],
                        confirm: function (status, result) {
                            alert(status);
                            alert(JSON.stringify(result))
                        }
                    });
                    prompt.prompt();
                });                
                document.querySelector("#refreshPage").addEventListener("click", function (){
                    page.redirect('/features');
                });
            })
            .then(function () {
                load_text.innerHTML = "Finish ...";
                setTimeout(function () {
                    load_ele.style.display = 'none';
                }, 1500);
            });
}
function chart() {
    let url = 'page/chart.php';
    let load_ele = document.getElementById("preload_overlay")
    load_ele.style.display = 'block';
    let load_text = document.querySelector("#preload_overlay div .text");
    load_text.innerHTML = 'Start ... ';
    fetch(url)
            .then(function (response) {
                load_text.innerHTML = 'Prepare ... ';
                return response.text();
            })
            .then(function (body) {
                contenPage.innerHTML = body;
                load_text.innerHTML = 'Install ... ';
            })
            .then(function () {
                const ctx = document.getElementById('myChart').getContext('2d');
                const myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                        datasets: [{
                                label: '# of Votes',
                                data: [12, 19, 3, 5, 2, 3],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)'
                                ],
                                borderWidth: 1
                            }]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });
                const ctx2 = document.getElementById('myChart2').getContext('2d');
                const DATA_COUNT = 12;
                const labels = [];
                for (let i = 0; i < DATA_COUNT; ++i) {
                    labels.push(i.toString());
                }
                const datapoints = [0, 20, 20, 60, 60, 120, NaN, 180, 120, 125, 105, 110, 170];
                const data = {
                    labels: labels,
                    datasets: [
                        {
                            label: 'Cubic interpolation (monotone)',
                            data: datapoints,
                            borderColor: "rgba(255, 99, 132, 1)",
                            fill: false,
                            cubicInterpolationMode: 'monotone',
                            tension: 0.4
                        }, {
                            label: 'Cubic interpolation',
                            data: datapoints,
                            borderColor: 'rgba(54, 162, 235, 1)',
                            fill: false,
                            tension: 0.4
                        }, {
                            label: 'Linear interpolation (default)',
                            data: datapoints,
                            borderColor: 'rgba(255, 206, 86, 1)',
                            fill: false
                        }
                    ]
                };
                const config = {
                    type: 'line',
                    data: data,
                    options: {
                        responsive: true,
                        plugins: {
                            title: {
                                display: true,
                                text: 'Chart.js Line Chart - Cubic interpolation mode'
                            },
                        },
                        interaction: {
                            intersect: false,
                        },
                        scales: {
                            x: {
                                display: true,
                                title: {
                                    display: true
                                }
                            },
                            y: {
                                display: true,
                                title: {
                                    display: true,
                                    text: 'Value'
                                },
                                suggestedMin: -10,
                                suggestedMax: 200
                            }
                        }
                    },
                };
                const myChart2 = new Chart(ctx2, config);              
                document.querySelector("#refreshPage").addEventListener("click", function (){
                    page.redirect('/chart');
                });       
                document.querySelector("#refreshPage2").addEventListener("click", function (){
                    page.redirect('/chart');
                });
            })
            .then(function () {
                load_text.innerHTML = "Finish ...";
                setTimeout(function () {
                    load_ele.style.display = 'none';
                }, 1500);
            });
}
function about() {
    var html = `<h5 class="card-title">About</h5>
<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>`;
    contenPage.innerHTML = html;
}

function _404() {
    var html = `<h5 class="card-title">404</h5>
<p class="card-text">Page was not found.</p>`;
    contenPage.innerHTML = html;
}

Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
}
var toastTrigger = document.getElementById('liveToastBtn');
if (toastTrigger) {
    toastTrigger.addEventListener('click', function () {
        let typ = ['success', 'info', 'error', 'warning'],
                ty = typ.random();
        let notif = new Notif({
            title: 'Pesan',
            message: `Coba pesan ${ty}`,
            type: ty
        });
        notif.toast();
    })
}

// multi lever drop down https://codepen.io/typo3-freelancer/pen/poEvyGj
document.addEventListener('click', function (e) {
    // Hamburger menu
    if (e.target.classList.contains('hamburger-toggle')) {
        e.target.children[0].classList.toggle('active');
    }
})