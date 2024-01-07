<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();

        foreach (range(1, 100) as $index) {
            DB::table('city')->insert([
                'name_city' => ucwords($faker->word),
                'slug_city' => Str::slug($faker->unique()->word),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
