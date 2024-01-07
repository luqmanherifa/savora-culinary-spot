<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class RestoSeeder extends Seeder
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
            DB::table('resto')->insert([
                'name_resto' => rtrim(ucwords($faker->sentence(rand(3, 9))), '.'),
                'slug_resto' => Str::slug($faker->unique()->sentence(rand(3, 9)), '-'),
                'cuisine_1_resto' => ucfirst($faker->word),
                'cuisine_2_resto' => ucfirst($faker->optional()->word),
                'cuisine_3_resto' => ucfirst($faker->optional()->word),
                'regency_resto' => ucfirst($faker->citySuffix),
                'city_resto' => ucfirst($faker->city),
                'star_resto' => $faker->numberBetween(1, 5),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
