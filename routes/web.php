<?php

use App\Http\Controllers\CityController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RestoController;
use App\Models\City;
use App\Models\Resto;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/api/resto', [RestoController::class, 'index']);
Route::get('/api/resto/all', [RestoController::class, 'getAll']);
Route::get('/api/resto/{slug_resto}', [RestoController::class, 'detail']);

Route::get('/api/city', [CityController::class, 'index']);
Route::get('/api/city/all', [CityController::class, 'getAll']);
Route::get('/api/city/{slug_city}', [CityController::class, 'detail']);

Route::get('/resto', function () {
    return Inertia::render('RestoPages');
});

Route::get('/resto/{slug_resto}', function ($slug_resto) {
    $resto = Resto::where('slug_resto', $slug_resto)->first();

    if ($resto) {
        return Inertia::render('RestoDetail', ['slug_resto' => $slug_resto]);
    } else {
        return Inertia::render('NotFound');
    }
});

Route::get('/city', function () {
    return Inertia::render('CityPages');
});

Route::get('/city/{slug_city}', function ($slug_city) {
    $city = City::where('slug_city', $slug_city)->first();

    if ($city) {
        return Inertia::render('CityDetail', ['slug_city' => $slug_city]);
    } else {
        return Inertia::render('NotFound');
    }
});

require __DIR__ . '/auth.php';
