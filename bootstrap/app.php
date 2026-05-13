<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {
        // Espaço reservado para middlewares globais quando o backend evoluir.
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        // Espaço reservado para tratamento centralizado de exceções.
    })->create();
