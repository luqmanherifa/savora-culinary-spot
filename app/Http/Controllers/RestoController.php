<?php

namespace App\Http\Controllers;

use App\Models\Resto;
use Illuminate\Http\Request;

class RestoController extends Controller
{
    public function index()
    {
        $resto = Resto::paginate(10);
        return response()->json($resto);
    }

    public function getAll()
    {
        $resto = Resto::latest('id')->paginate(8);
        return response()->json($resto);
    }

    public function search(Request $request)
    {
        $searchQuery = $request->input('search');

        $query = Resto::query();

        if (!empty($searchQuery)) {
            $query->where(function ($q) use ($searchQuery) {
                $q->where('id', 'LIKE', '%' . $searchQuery . '%')
                    ->orWhere('name_resto', 'LIKE', '%' . $searchQuery . '%')
                    ->orWhere('slug_resto', 'LIKE', '%' . $searchQuery . '%')
                    ->orWhere('cuisine_1_resto', 'LIKE', '%' . $searchQuery . '%')
                    ->orWhere('cuisine_2_resto', 'LIKE', '%' . $searchQuery . '%')
                    ->orWhere('cuisine_3_resto', 'LIKE', '%' . $searchQuery . '%')
                    ->orWhere('regency_resto', 'LIKE', '%' . $searchQuery . '%')
                    ->orWhere('city_resto', 'LIKE', '%' . $searchQuery . '%')
                    ->orWhere('star_resto', 'LIKE', '%' . $searchQuery . '%');
            });
        }

        $resto = $query->paginate(10);

        return response()->json($resto);
    }

    public function detail($slug_resto)
    {
        $resto = Resto::where('slug_resto', $slug_resto)->first();

        if (!$resto) {
            return response()->json(['message' => 'Resto data not found.'], 404);
        }

        return response()->json(['data' => $resto]);
    }

    public function show($id)
    {
        $resto = Resto::find($id);

        if (!$resto) {
            return response()->json(['message' => 'Resto data not found.'], 404);
        }

        return response()->json(['data' => $resto]);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name_resto' => 'required|string',
            'slug_resto' => 'required|string',
            'cuisine_1_resto' => 'required|string',
            'cuisine_2_resto' => 'nullable|string',
            'cuisine_3_resto' => 'nullable|string',
            'regency_resto' => 'required|string',
            'city_resto' => 'required|string',
            'star_resto' => 'required|integer',
        ]);

        $resto = Resto::create($validatedData);

        return response()->json(['message' => 'Resto data successfully saved.', 'data' => $resto], 201);
    }

    public function update(Request $request, $id)
    {
        $resto = Resto::findOrFail($id);

        $validatedData = $request->validate([
            'name_resto' => 'required|string',
            'slug_resto' => 'required|string',
            'cuisine_1_resto' => 'required|string',
            'cuisine_2_resto' => 'nullable|string',
            'cuisine_3_resto' => 'nullable|string',
            'regency_resto' => 'required|string',
            'city_resto' => 'required|string',
            'star_resto' => 'required|integer',
        ]);

        $resto->update($validatedData);

        return response()->json(['message' => 'Resto data successfully updated.', 'data' => $resto]);
    }

    public function destroy($id)
    {
        $resto = Resto::find($id);

        if (!$resto) {
            return response()->json(['message' => 'Resto data not found.'], 404);
        }

        $resto->delete();

        return response()->json(['message' => 'Resto data successfully deleted.']);
    }
}
