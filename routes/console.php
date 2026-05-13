<?php

use Illuminate\Support\Facades\Artisan;

Artisan::command('about-cardpio', function () {
    $this->info('cardp.io: base Laravel + Blade para cardápios digitais.');
})->purpose('Mostra uma descrição curta do projeto.');
