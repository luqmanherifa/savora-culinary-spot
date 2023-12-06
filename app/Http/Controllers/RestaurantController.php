<?php

namespace App\Http\Controllers;

use App\Models\Restaurant;
use Illuminate\Http\Request;

class RestaurantController extends Controller
{
    public function index()
    {
        $restaurant = Restaurant::paginate(10);
        return response()->json($restaurant);
    }
}
