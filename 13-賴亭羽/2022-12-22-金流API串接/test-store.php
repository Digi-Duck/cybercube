<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    $key = "la2CPmygRtWOVcuv3Hj7GMeyaUpeB5p3";
    $iv = "Cz0ZCVRZ4uNRxZYP";
    $mid = "MS146514825";
    $data1 = http_build_query(array(
        'MerchantID' => $mid,
        'TimeStamp' => time(),
        'Version' => '2.0',
        'RespondType' => 'String',
        'MerchantOrderNo' => 'Vanespl_ec_' . time(),
        'Amt' => '30',
        'NotifyURL' => 'https://webhook.site/d4db5ad1-2278-466a-9d66-78585c0dbadb',
        'ReturnURL' => '',
        'ItemDesc' => 'text',
    ));
    
    $edata1 = bin2hex(openssl_encrypt($data1, "AES-256-CBC", $key, OPENSSL_RAW_DATA, $iv));
    echo $edata1;
    ?>
</body>

</html>