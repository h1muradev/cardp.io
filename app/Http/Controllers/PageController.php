<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;

class PageController extends Controller
{
    /**
     * Landing page pública convertida de LandingPage.tsx.
     */
    public function home(): View
    {
        return view('landing');
    }

    /**
     * Telas de autenticação estáticas. No futuro podem ser ligadas ao Laravel Auth.
     */
    public function auth(string $page = 'login'): View
    {
        $allowed = ['login', 'cadastro', 'recuperar-senha', 'redefinir-senha'];
        abort_unless(in_array($page, $allowed, true), 404);

        return view("auth.$page");
    }

    /**
     * Simula submits dos formulários enquanto o backend real não existe.
     */
    public function demoSubmit(Request $request): RedirectResponse
    {
        $target = $request->input('redirect_to', route('dashboard.index'));

        return redirect($target)->with('status', 'Ação demonstrativa executada. Conecte esta tela ao banco de dados quando evoluir o backend.');
    }

    public function dashboard(): View
    {
        return view('dashboard.index', [
            'stats' => [
                ['label' => 'Pratos cadastrados', 'value' => '42', 'icon' => '🍽️', 'trend' => '+12% este mês'],
                ['label' => 'Categorias', 'value' => '8', 'icon' => '📁', 'trend' => 'Organizadas'],
                ['label' => 'Visualizações', 'value' => '1.284', 'icon' => '👁️', 'trend' => '+23% esta semana'],
                ['label' => 'QR Code scans', 'value' => '856', 'icon' => '▦', 'trend' => '+18% este mês'],
            ],
            'categories' => $this->categoryData(),
            'dishes' => array_slice($this->dishData(), 0, 5),
        ]);
    }

    public function categories(): View
    {
        return view('dashboard.categories', ['categories' => $this->categoryData()]);
    }

    public function categoryForm(?int $id = null): View
    {
        $category = collect($this->categoryData())->firstWhere('id', $id);

        return view('dashboard.category-form', compact('category'));
    }

    public function dishes(): View
    {
        return view('dashboard.dishes', [
            'dishes' => $this->dishData(),
            'categories' => $this->categoryData(),
        ]);
    }

    public function dishForm(?int $id = null): View
    {
        $dish = collect($this->dishData())->firstWhere('id', $id);

        return view('dashboard.dish-form', [
            'dish' => $dish,
            'categories' => $this->categoryData(),
        ]);
    }

    public function customize(): View
    {
        return view('dashboard.customize');
    }

    public function restaurantData(): View
    {
        return view('dashboard.restaurant-data', ['restaurant' => $this->restaurants()['demo']]);
    }

    public function qrcode(): View
    {
        return view('dashboard.qrcode', ['menuUrl' => url('/cardapio/demo')]);
    }

    public function preview(): View
    {
        return view('dashboard.preview', [
            'restaurant' => $this->restaurants()['demo'],
            'categories' => $this->menuCategories(),
            'isPreview' => true,
        ]);
    }

    public function publicMenu(string $slug = 'demo'): View
    {
        $restaurants = $this->restaurants();

        return view('public.menu', [
            'restaurant' => $restaurants[$slug] ?? $restaurants['demo'],
            'categories' => $this->menuCategories(),
            'isPreview' => false,
        ]);
    }

    private function categoryData(): array
    {
        return [
            ['id' => 1, 'name' => 'Entradas', 'description' => 'Aperitivos e opções para começar', 'items' => 6, 'active' => true],
            ['id' => 2, 'name' => 'Massas', 'description' => 'Massas artesanais e risotos', 'items' => 12, 'active' => true],
            ['id' => 3, 'name' => 'Carnes', 'description' => 'Cortes especiais e grelhados', 'items' => 8, 'active' => true],
            ['id' => 4, 'name' => 'Peixes', 'description' => 'Peixes e frutos do mar', 'items' => 5, 'active' => true],
            ['id' => 5, 'name' => 'Sobremesas', 'description' => 'Doces e sobremesas da casa', 'items' => 7, 'active' => true],
            ['id' => 6, 'name' => 'Bebidas', 'description' => 'Drinks, vinhos e não alcoólicos', 'items' => 15, 'active' => false],
        ];
    }

    private function dishData(): array
    {
        return [
            ['id' => 1, 'name' => 'Bruschetta Italiana', 'category' => 'Entradas', 'price' => 28.90, 'active' => true, 'featured' => false, 'image' => 'https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?w=600&h=400&fit=crop'],
            ['id' => 2, 'name' => 'Carpaccio de Filé', 'category' => 'Entradas', 'price' => 42.90, 'active' => true, 'featured' => true, 'image' => 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=400&fit=crop'],
            ['id' => 3, 'name' => 'Risoto de Cogumelos', 'category' => 'Massas', 'price' => 65.90, 'active' => true, 'featured' => true, 'image' => 'https://images.unsplash.com/photo-1476124369491-c6476ebb3141?w=600&h=400&fit=crop'],
            ['id' => 4, 'name' => 'Espaguete à Carbonara', 'category' => 'Massas', 'price' => 58.90, 'active' => true, 'featured' => false, 'image' => 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=600&h=400&fit=crop'],
            ['id' => 5, 'name' => 'Filé Mignon ao Molho Madeira', 'category' => 'Carnes', 'price' => 89.90, 'active' => true, 'featured' => true, 'image' => 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=600&h=400&fit=crop'],
            ['id' => 6, 'name' => 'Picanha na Brasa', 'category' => 'Carnes', 'price' => 95.90, 'active' => true, 'featured' => true, 'image' => 'https://images.unsplash.com/photo-1558030006-450675393462?w=600&h=400&fit=crop'],
            ['id' => 7, 'name' => 'Salmão Grelhado', 'category' => 'Peixes', 'price' => 78.90, 'active' => true, 'featured' => false, 'image' => 'https://images.unsplash.com/photo-1485921325833-c519f76c4927?w=600&h=400&fit=crop'],
            ['id' => 8, 'name' => 'Tiramisu', 'category' => 'Sobremesas', 'price' => 32.90, 'active' => true, 'featured' => false, 'image' => 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&h=400&fit=crop'],
            ['id' => 9, 'name' => 'Petit Gateau', 'category' => 'Sobremesas', 'price' => 35.90, 'active' => false, 'featured' => false, 'image' => 'https://images.unsplash.com/photo-1578775887804-699de7086ff9?w=600&h=400&fit=crop'],
        ];
    }

    private function restaurants(): array
    {
        return [
            'demo' => [
                'name' => 'Restaurante Don Giovanni',
                'slug' => 'demo',
                'description' => 'Culinária italiana autêntica com ingredientes frescos e ambiente acolhedor.',
                'address' => 'Rua das Flores, 123 - Centro, São Paulo - SP',
                'phone' => '(11) 99999-9999',
                'hours' => 'Terça a domingo, 11h às 23h',
                'instagram' => '@dongiovanni',
                'facebook' => 'dongiovanni',
                'website' => 'dongiovanni.com.br',
            ],
        ];
    }

    private function menuCategories(): array
    {
        $dishes = collect($this->dishData())->where('active', true)->groupBy('category');

        return collect($this->categoryData())
            ->where('active', true)
            ->map(fn (array $category) => [
                'id' => $category['id'],
                'name' => $category['name'],
                'dishes' => array_values($dishes->get($category['name'], collect())->toArray()),
            ])
            ->filter(fn (array $category) => count($category['dishes']) > 0)
            ->values()
            ->toArray();
    }
}
