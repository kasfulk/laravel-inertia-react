<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AppController extends Controller
{
    public function index(Request $request) {
        return Inertia::render('Index');
    }

    public function show(Request $request) {
        return Inertia::render('Test');
    }

    public function faq() {
        return Inertia::render('Faq');
    }
}
