<?php

namespace App\Http\Controllers\Api\Auth\Logout;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LogoutController extends Controller
{
    //
    public function __invoke(Request $request)
    {
        auth()->logout();
        $data['message']='Logout';
        return response()->json($data, 200);
    }
}
