<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;
use Illuminate\Support\Str;

class RestaurantSeeder extends Seeder
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
            DB::table('restaurant')->insert([
                'name_restaurant' => rtrim(ucwords($faker->sentence(rand(1, 4))), '.'),
                'slug_restaurant' => Str::slug($faker->unique()->sentence(rand(1, 4)), '-'),
                'description_restaurant' => $faker->text(300),
                'contact_restaurant' => $faker->phoneNumber,
                'address_restaurant' => $faker->address,
                'district_restaurant' => $faker->city,
                'star_restaurant' => $faker->numberBetween(1, 5),
                'rating_restaurant' => $faker->numberBetween(1, 100),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
