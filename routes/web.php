<?php

use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Route;

// Páginas públicas convertidas de React Router para rotas Laravel nomeadas.
Route::get('/', [PageController::class, 'home'])->name('home');
Route::get('/login', fn () => app(PageController::class)->auth('login'))->name('login');
Route::get('/cadastro', fn () => app(PageController::class)->auth('cadastro'))->name('register');
Route::get('/recuperar-senha', fn () => app(PageController::class)->auth('recuperar-senha'))->name('password.request');
Route::get('/redefinir-senha', fn () => app(PageController::class)->auth('redefinir-senha'))->name('password.reset');
Route::post('/demo-submit', [PageController::class, 'demoSubmit'])->name('demo.submit');

// Área administrativa: por enquanto estática/demonstrativa, pronta para receber auth e banco.
Route::prefix('dashboard')->name('dashboard.')->group(function () {
    Route::get('/', [PageController::class, 'dashboard'])->name('index');
    Route::get('/categorias', [PageController::class, 'categories'])->name('categories');
    Route::get('/categorias/nova', [PageController::class, 'categoryForm'])->name('categories.create');
    Route::get('/categorias/{id}/editar', [PageController::class, 'categoryForm'])->name('categories.edit');
    Route::get('/pratos', [PageController::class, 'dishes'])->name('dishes');
    Route::get('/pratos/novo', [PageController::class, 'dishForm'])->name('dishes.create');
    Route::get('/pratos/{id}/editar', [PageController::class, 'dishForm'])->name('dishes.edit');
    Route::get('/personalizar', [PageController::class, 'customize'])->name('customize');
    Route::get('/dados', [PageController::class, 'restaurantData'])->name('restaurant-data');
    Route::get('/qrcode', [PageController::class, 'qrcode'])->name('qrcode');
    Route::get('/preview', [PageController::class, 'preview'])->name('preview');
});

// Cardápio que clientes acessam via link/QR Code.
Route::get('/cardapio/{slug?}', [PageController::class, 'publicMenu'])->name('public.menu');
