<?php

namespace App\Http\Controllers;

use App\Models\City;
use Illuminate\Http\Request;

class CityController extends Controller
{
    public function index()
    {
        $city = City::paginate(10);
        return response()->json($city);
    }

    public function getAll()
    {
        $city = City::latest('id')->paginate(20);
        return response()->json($city);
    }

    public function search(Request $request)
    {
        $searchQuery = $request->input('search');

        $query = City::query();

        if (!empty($searchQuery)) {
            $query->where(function ($q) use ($searchQuery) {
                $q->where('id', 'LIKE', '%' . $searchQuery . '%')
                    ->orWhere('name_city', 'LIKE', '%' . $searchQuery . '%')
                    ->orWhere('slug_city', 'LIKE', '%' . $searchQuery . '%');
            });
        }

        $city = $query->paginate(10);

        return response()->json($city);
    }

    public function detail($slug_city)
    {
        $city = City::where('slug_city', $slug_city)->first();

        if (!$city) {
            return response()->json(['message' => 'City data not found.'], 404);
        }

        return response()->json(['data' => $city]);
    }

    public function show($id)
    {
        $city = City::find($id);

        if (!$city) {
            return response()->json(['message' => 'City data not found.'], 404);
        }

        return response()->json(['data' => $city]);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name_city' => 'required|string',
            'slug_city' => 'required|string',
        ]);

        $city = City::create($validatedData);

        return response()->json(['message' => 'City data successfully saved.', 'data' => $city], 201);
    }

    public function update(Request $request, $id)
    {
        $city = City::findOrFail($id);

        $validatedData = $request->validate([
            'name_city' => 'required|string',
            'slug_city' => 'required|string',
        ]);

        $city->update($validatedData);

        return response()->json(['message' => 'City data successfully updated.', 'data' => $city]);
    }

    public function destroy($id)
    {
        $city = City::find($id);

        if (!$city) {
            return response()->json(['message' => 'City data not found.'], 404);
        }

        $city->delete();

        return response()->json(['message' => 'City data successfully deleted.']);
    }
}
