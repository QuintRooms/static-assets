<?php

namespace App\Http\Controllers;
use \Log;
use \BadMethodCallException;
use App\ClosedUserGroupApi;
use Illuminate\Http\Request;

class ClosedUserGroupController extends Controller
{
    public function call(Request $request)
    {
        $method = $request->get('method');

        if ($method === null) {
            return response([
                'params' => $request->all(),
                'error' => ['Bad Request -- Your request is invalid (at line '.__LINE__.').']
            ], 400);
        }

        try {

            $response = ClosedUserGroupApi::$method($request->except('method'));

            return response([
                'params' => $request->all(),
                'response' => [
                    'token' => $response['token'],
                ],
            ], $response['code']);

        } catch (BadMethodCallException $e) {

            Log::info($e->getMessage());

            return response([
                'params' => $request->all(),
                'error' => ['Bad Request -- Your request is invalid (at line '.__LINE__.').']
            ], 400);

        }

        return response([
            'params' => $request->all(),
            'response' => 'Yay!'
        ], 200);
    }
}
