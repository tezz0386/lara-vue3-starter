<?php

namespace App\Http\Controllers\Api\Auth\Login;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class LoginController extends Controller
{
    //
    public function __invoke(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'email'=>'required|email',
            'password'=>'required',
        ]);
        if($validator->fails()){
            return response()->json($validator->errors());
        }
        if(Auth::attempt(['email'=>$request->email, 'password'=>$request->password], $request->get('remember'))){
           $data['message']='Authenticated';
           $data['token']=\Auth::user()->createToken('MyApp')->accessToken;
           return response()->json($data, 200);
        }
        $data['message']='Authenticated';
        return response()->json($data, 200);
    }
}
