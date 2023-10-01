<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
class ProductController extends Controller
{
    // fetch a list of all products and return as JSON response
    public function index()
    {
        $products = Product::all();
        return response()->json(['products' => $products]);
    }

    // fetch one product based on $id and return as JSON response
    public function show($id)
    {
        $product = Product::find($id);
        if (!$products) {
            return response()->json(['message' => 'Product not found'], 404);
        }
        return response()->json(['product' => $product]);
    }
}
