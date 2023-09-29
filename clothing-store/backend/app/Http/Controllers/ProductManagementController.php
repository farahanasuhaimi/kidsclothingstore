<?php

namespace App\Http\Controllers;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductManagementController extends Controller
{
    // Create a new product
    public function create(Request $request)
    {
        // Validate and store the new product in the database
        $product = new Product();
        $product->name = $request->input('name');
        $product->description = $request->input('description');
        $product->price = $request->input('price');
        $product->image_url = $request->input('image_url');
        $product->save();

        return response()->json($product);
    }
}