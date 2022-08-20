<?php

namespace App\Http\Controllers\Api\Auth\Register;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    //
    public function __invoke(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'name'=>'required',
            'email'=>'required|email|unique:users',
            'password'=>'required|min:4',
            'confirm_password'=>'required|same:password',
        ]);
        if($validator->fails()){
            return response()->json($validator->errors());
        }
        $user = new User();
        $input['password']=bcrypt($request->password);
        $input['role']='user';
        $user->create($input);
        $data['message']='Successfully Registered';
        return response()->json($data, 200);
    }
}
