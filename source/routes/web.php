<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ProfileController;

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
Auth::routes();

Route::get('/profile', [ProfileController::class, 'get'])->middleware('auth');

// React will handle any route
Route::get('/{query}', function () {
    return view('app');
})->where('query', '^((?!api).)*$');
