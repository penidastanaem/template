<?php

$limit = $_POST['limit'];
$offset = $_POST['offset'];
$src = $_POST['search'];
$count = 1000003;
try {
    $data = array();
    $x = 0;
    for ($i = $offset; $i < $offset + $limit; $i++) {
        if ($i < $count) {
            $data[$x] = array(
                "id" => (int) $i,
                "no" => ($i + 1),
                "nama" => 'Nama pengguna ' . $i,
                "alamat" => "Alamat pengguna $i",
                'tlp' => "081390123$i",
                'email' => "pengguna$i@gmail.com",
                "nik" => "123123123$i",
                'jk' => ($i % 2) == 0 ? 'Laki-laki' : 'Perempuan',
                'pekerjaan' => 'pekerjaan yang dilakukan oleh pengguna',
                'mahasiswa' => 'Ya',
                'comment' => "Comment $i",
                'aktif' => ($i % 2) == 0 ? 'Ya' : 'Tidak'
            );
        }
        $x++;
    }
    header('Content-type: application/json');
    echo json_encode(array(
        'rows' => $data,
        'offset' => $offset,
        'limit' => $limit,
        'total' => $count
    ));
} catch (PDOException $e) {
    die("Error message: " . $e->getMessage());
}
?>