@extends('layouts.app', ['title' => $restaurant['name'].' - Cardápio'])
@section('body')
@include('public.menu-content', ['restaurant' => $restaurant, 'categories' => $categories, 'isPreview' => $isPreview])
@endsection
