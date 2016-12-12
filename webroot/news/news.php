<?php
    $ch = curl_init();
    $url = 'http://apis.baidu.com/showapi_open_bus/channel_news/search_news?channelId='.$_GET['channelId'].'&channelName='.$_GET['channelName'].'&title=%E4%B8%8A%E5%B8%82&page='.$_GET['page'].'&needContent=0&needHtml=0';
    $header = array(
        'apikey: 0aea38d1a7c4443f2f00adc86c4c3e72',
    );
    // 添加apikey到header
    curl_setopt($ch, CURLOPT_HTTPHEADER  , $header);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    // 执行HTTP请求
    curl_setopt($ch , CURLOPT_URL , $url);
    $res = curl_exec($ch);

    echo $_GET['callback'].'('.$res.')';
?>