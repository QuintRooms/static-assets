<?php

namespace App\Http\Controllers;

use App\ClosedUserGroupApi;
use Illuminate\Http\Request;

class ClosedUserGroupController extends Controller
{
    public function call(Request $request)
    {
        $method = $request->get('method');
        $params = $request->all();
        unset($params['method']);
        try {
            $response = ClosedUserGroupApi::$method($params);
            return response($response->params, $response->code);
        } catch (\BadMethodCallException $e) {
            \Log::info($e);
            return response([$params, 'error message goes here'], 403);
        }

        return response([$params, 'success message goes here'], 200);
    }
}