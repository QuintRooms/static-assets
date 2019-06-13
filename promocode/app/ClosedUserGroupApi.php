<?php

namespace App;

use Log;
use GuzzleHttp\Client;
use Illuminate\Database\Eloquent\Model;

class ClosedUserGroupApi extends Model
{
    public static $member_uri = 'https://api.travsrv.com/MemberAPI.aspx';

    public static function getRequest(){

    }

    public static function postRequest(){

    }

    public static function getAdminToken(array $params = []) {
        $client = new Client();

        $query = ['siteid' => $params['siteid']];
        $query = self::mergeSiteAdminCredentials($query);

        $response = $client->request('GET', self::$member_uri, [
            'query' => $query,
        ]);

        $json = json_decode((string) $response->getBody());

        if (! isset($json->CurrentToken)) {
            return [
                'params' => $params,
                'code' => 404,
            ];
        }

        return [
            'params'=> $params,
            'code'=> $response->getStatusCode(),
            'token' => $json->CurrentToken,
        ];
    }

    public static function mergeSiteAdminCredentials(array $query = []) {
        $credentials = [
            'username' => env('ARN_API_USERNAME'),
            'password' => env('ARN_API_PASSWORD'),
            'token' => 'ARNUSER-'.env('ARN_API_SITE_ADMIN_USERNAME'),
        ];

        return array_merge($query, $credentials);
    }
}
