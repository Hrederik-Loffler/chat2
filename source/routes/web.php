<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\ChatsController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/message', function () {
   App\Jobs\SendMessage::dispatch("TEST MESSAGE");
});

Auth::routes();

Route::get('/profile', [ProfileController::class, 'get'])->middleware('auth');

Route::middleware(['web'])->group(function () {
    Route::get('/messages', [ChatsController::class, 'fetchMessages']);
    Route::post('/messages', [ChatsController::class, 'sendMessage']);
});


// React will handle any route
Route::get('/{query}', function () {
    return view('app');
})->where('query', '^((?!api).)*$');
