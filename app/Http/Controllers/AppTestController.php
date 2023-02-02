<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia; 

class AppTestController extends Controller
{
    public function show() {
        return Inertia::render('Test');
    }

    public function faq() {
        return Inertia::render('Faq');
    }
}
