<?php

namespace App;

use GuzzleHttp\Client;
use Illuminate\Database\Eloquent\Model;

class ClosedUserGroupApi extends Model 
{
    public static function getRequest(){

    }

    public static function postRequest(){

    }

    public static function getAdminToken(array $params = []){
        $client = new Client();
        $res = $client->request('GET', 'https://api.travsrv.com/MemberAPI.aspx?username=, [
            'auth' => [env('ARN_API_USERNAME'), env('ARN_API_PASSWORD')]
        ]);

        // echo $res->getHeader('content-type')[0];
        // echo $res->getBody();
        // echo $res->getStatusCode();

        return [
            'params'=> $params,
            'code'=> $res->getStatusCode(),
        ];
    }
}