<?php
ini_set('display_errors',1);
error_reporting(E_ALL);
$file = '';
$dataFiles = $_FILES;
if ($_FILES) {
    $namaFile = $_FILES['foto']['name'];
    $namaSementara = $_FILES['foto']['tmp_name'];
    $dirUpload = "./uploads/";
    try {
        $upld = move_uploaded_file($namaSementara, $dirUpload . $namaFile);
        if($upld){
            $file = $namaFile;
        } else {
            $file = $_FILES["foto"]["error"];
        }
    } catch (Exception $ex) {
        $file = $ex;
    }
}


$post = $_POST;
$data = array(
    "success" => false,
    'data' => array(
        "nama" => "Nama tidak diketahui",
        "tlp" => "NoTlp tidak diketahui",
        "pekerjaan" => "Pekerjaan tidak diketahui",
        "mk" => "Matakuliah tidak diketahui",
        "jk" => "Jenis Kelamin tidak diketahui",
        "password" => "Password Kelamin tidak diketahui",
        "aktif" => "Aktif tidak diketahui",
        "comment" => "Comment Kelamin tidak diketahui",
        'foto' => $file,
        'dataFile' => $dataFiles
    ),
    "post" => $post
);
//print_r($post);
//$data = array();
//foreach ($post as $k => $v) {
//    $data[$k] = $v;
//}
echo json_encode($data);
