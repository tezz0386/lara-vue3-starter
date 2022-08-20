<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\Auth\User\UserController;
use App\Http\Controllers\Api\Auth\Login\LoginController;
use App\Http\Controllers\Api\Auth\Logout\LogoutController;
use App\Http\Controllers\Api\Auth\Register\RegisterController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



Route::post('/login', LoginController::class);
Route::post('/logout', LogoutController::class);
Route::post('/register', RegisterController::class);    

Route::group(['middleware'=>'auth:api'], function(){
    Route::get('/me', [UserController::class, 'me']);
});